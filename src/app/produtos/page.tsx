"use client";

import { useState, useEffect } from "react";
import { CategoriasData } from "@/@types/CategoriasProdutos";
import { ProdutosData } from "@/@types/Produtos";
import { getCategoriasProdutos } from "@/api/getCategoriasProdutos";
import { getProdutos } from "@/api/getProdutos";
import { Card } from "./Card";
import { Checkbox } from "@/components/Checkbox";

interface CategoriaSelecionada {
    [key: string]: boolean;
}

export default function Produtos() {
    const [produtos, setProdutos] = useState<ProdutosData[]>([]);
    const [categoriasData, setCategoriasData] = useState<CategoriasData>({ categoriasProdutos: { edges: [] } });
    const [categoriasSelecionadas, setCategoriasSelecionadas] = useState<CategoriaSelecionada>({});

    useEffect(() => {
        const fetchData = async () => {
            const fetchedProdutos = await getProdutos();
            const fetchedCategorias = await getCategoriasProdutos();
            setProdutos(fetchedProdutos);
            setCategoriasData(fetchedCategorias);

            // Inicializar o estado de categorias selecionadas
            const initialCategoriasSelecionadas: CategoriaSelecionada = {};
            fetchedCategorias.categoriasProdutos.edges.forEach(categoria => {
                initialCategoriasSelecionadas[categoria.node.id] = false;
            });
            setCategoriasSelecionadas(initialCategoriasSelecionadas);
        };

        fetchData();
    }, []);

    // Filtrar produtos com base nas categorias selecionadas
    const produtosFiltrados = produtos.filter((produto) => {
        if (Object.values(categoriasSelecionadas).every((isSelected) => !isSelected)) {
            return true;
        }
        // Verificar se o produto pertence a alguma das categorias selecionadas
        const produtoCategorias = produto.node.categoriasProdutos?.nodes || [];
        return produtoCategorias.some(categoria => categoriasSelecionadas[categoria.id]);
    });

    // Manipulador de mudança para categorias selecionadas
    const handleCategoriaChange = (categoriaId: string) => {
        setCategoriasSelecionadas((prevState) => ({
            ...prevState,
            [categoriaId]: !prevState[categoriaId]
        }));
    };

    return (
        <main className="py-40">
            <div className="container">
                <div className="mb-14">
                    <h1 className="font-bold text-4xl">Escolha a sua Bateria Ideal</h1>
                </div>
                <div className="flex gap-8">
                    <aside className="w-1/4">
                        <h2 className="font-bold text-2xl mb-4">Filtrar por Categoria</h2>
                        <ul className="flex flex-col gap-2">
                            {categoriasData.categoriasProdutos.edges.length > 0 ? (
                                categoriasData.categoriasProdutos.edges.map((categoria, index) => (
                                    <li key={index} className="flex gap-2 items-center">
                                        <Checkbox
                                            checked={categoriasSelecionadas[categoria.node.id] || false}
                                            onChange={() => handleCategoriaChange(categoria.node.id)}
                                        />
                                        {categoria.node.name}
                                    </li>
                                ))
                            ) : (
                                <li>Nenhuma categoria encontrada</li>
                            )}
                        </ul>
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
