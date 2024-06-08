"use client";

import { useState, useEffect } from "react";
import { CategoriasData } from "@/@types/CategoriasProdutos";
import { ProdutosData } from "@/@types/Produtos";
import { getCategoriasProdutos } from "@/api/getCategoriasProdutos";
import { getProdutos } from "@/api/getProdutos";
import { Card } from "./Card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { IoIosSearch } from "react-icons/io";

interface CategoriaSelecionada {
    [key: string]: boolean;
}

export default function Produtos() {
    const [produtos, setProdutos] = useState<ProdutosData[]>([]);
    const [categoriasData, setCategoriasData] = useState<CategoriasData>({ categoriasProdutos: { edges: [] } });
    const [categoriasSelecionadas, setCategoriasSelecionadas] = useState<CategoriaSelecionada>({});
    const [searchText, setSearchText] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            const fetchedProdutos = await getProdutos();
            const fetchedCategorias = await getCategoriasProdutos();
            setProdutos(fetchedProdutos);
            setCategoriasData(fetchedCategorias);

            const initialCategoriasSelecionadas: CategoriaSelecionada = {};
            fetchedCategorias.categoriasProdutos.edges.forEach(categoria => {
                initialCategoriasSelecionadas[categoria.node.id] = false;
            });
            setCategoriasSelecionadas(initialCategoriasSelecionadas);
        };

        fetchData();
    }, []);

    const produtosFiltrados = produtos.filter((produto) => {
        const isCategoryMatched = Object.values(categoriasSelecionadas).some((isSelected, index) => {
            if (isSelected) {
                const categoriaId = Object.keys(categoriasSelecionadas)[index];
                return produto.node.categoriasProdutos?.nodes.some(categoria => categoria.id === categoriaId);
            }
            return false;
        });

        const isSearchMatched = produto.node.title.toLowerCase().includes(searchText.toLowerCase());

        return (
            (!Object.values(categoriasSelecionadas).some(Boolean) || isCategoryMatched) &&
            (!searchText || isSearchMatched)
        );
    });

    const handleCategoriaChange = (categoriaId: string) => {
        setCategoriasSelecionadas((prevState) => ({
            ...prevState,
            [categoriaId]: !prevState[categoriaId]
        }));
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    return (
        <main className="py-40">
            <div className="container">
                <div className="flex items-center justify-between mb-14">
                    <h1 className="font-bold text-4xl">Escolha a sua Bateria Ideal</h1>
                    <div className="w-2/5 flex items-center gap-2 bg-white rounded-md px-2">
                        <IoIosSearch className="text-[#DF0209]" />
                        <Input
                            className="bg-transparent border-none w-full outline-none"
                            type="search"
                            placeholder="Digite o modelo de bateria que você procura..."
                            value={searchText}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
                <div className="flex gap-8">
                    <aside className="w-1/4">
                        <div className="sticky top-5">
                            <div className="flex mb-4">
                                <h2 className="bg-[#DF0209] rounded-3xl text-white font-bold text-xl py-2 px-4">Filtrar por Categoria</h2>
                            </div>
                            <ul className="flex flex-col gap-2 py-6 px-4 rounded-md bg-white shadow-lg">
                                {categoriasData.categoriasProdutos.edges.length > 0 ? (
                                    categoriasData.categoriasProdutos.edges.map((categoria, index) => (
                                        <li key={index} className="flex gap-1 items-center">
                                            <Checkbox
                                                checked={categoriasSelecionadas[categoria.node.id] || false}
                                                onCheckedChange={() => handleCategoriaChange(categoria.node.id)}
                                                id={`categoria-${categoria.node.id}`}
                                            />
                                            <label htmlFor={`categoria-${categoria.node.id}`} className="ml-2">
                                                {categoria.node.name}
                                            </label>
                                        </li>
                                    ))
                                ) : (
                                    <li>Nenhuma categoria encontrada</li>
                                )}
                            </ul>
                        </div>
                    </aside>
                    <div className="w-3/4 grid grid-cols-3 gap-12">
                        {produtosFiltrados.map((item, index) => (
                            <Card
                                key={index}
                                id={item.node.id}
                                name={item.node.title}
                                image={item.node.produtos.imageDoProduto.node.mediaItemUrl}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
