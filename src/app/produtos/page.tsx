"use client";

import * as React from "react";
import { useState, useEffect } from "react"; // Importe o useEffect hook
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getCategoriasProdutos } from "@/api/getCategoriasProdutos";
import { Button } from "@/components/ui/button";
import { getProdutos } from "@/api/getProdutos";
import { ProdutosData } from "@/@types/Produtos";
import { CategoriasData } from "@/@types/CategoriasProdutos";
import { Card } from "../../components/Card";

export default function Produtos() {
    const [selectedCategoria, setSelectedCategoria] = useState<string>("");
    const [fetchedCategorias, setFetchedCategorias] = useState<CategoriasData>({ categoriasProdutos: { edges: [] } }); // Adicione o estado para as categorias buscadas
    const [fetchedProdutos, setFetchedProdutos] = useState<ProdutosData[]>([]);

    useEffect(() => {
        async function fetchCategorias() {
            const categorias = await getCategoriasProdutos();
            setFetchedCategorias(categorias);
        }

        fetchCategorias();
    }, []); 

    const handleSearch = async () => {
        const produtos = await getProdutos(selectedCategoria);
        setFetchedProdutos(produtos);
    };

    const handleCategoriaChange = (categoria: string) => {
        setSelectedCategoria(categoria);
    };

    return (
        <main className="py-40">
            <div className="container">
                <div className="flex items-center justify-between mb-14">
                    <h1 className="font-bold text-4xl">Escolha a sua Bateria Ideal</h1>
                </div>
                <div className="w-full flex flex-wrap">
                    <div className="w-full flex gap-8">
                        <div>
                            <Select>
                                <SelectTrigger className="w-[300px]">
                                    <SelectValue placeholder="Selecione uma linha de produtos" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Linhas</SelectLabel>
                                        {fetchedCategorias.categoriasProdutos.edges.map((categoria, index) => (
                                            <SelectItem key={index} value={categoria.node.name} onClick={() => handleCategoriaChange(categoria.node.name)}>
                                                {categoria.node.name}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Button className="bg-[#DF0209]" onClick={handleSearch}>Buscar</Button>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="grid grid-cols-3 gap-4">
                            {fetchedProdutos.map((produto) => (
                                <Card
                                    name={produto.node.title}
                                    image={produto.node.produtos.imageDoProduto.node.mediaItemUrl}
                                    id={produto.node.id}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
