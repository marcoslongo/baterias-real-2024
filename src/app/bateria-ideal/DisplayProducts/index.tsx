import React, { useEffect, useState } from 'react';
import { getProdutosBateriaIdeal } from '@/api/getProdutosBateriaIdeal';
import { Card } from '@/components/Card';

interface Produto {
    __typename: string;
    id: string;
    title: string;
    produtos: {
        imageDoProduto: {
            node: {
                mediaItemUrl: string;
            }
        }
    }
}

interface TipoDeVeiculo {
    __typename: string;
    id: string;
    name: string;
    produtos: {
        __typename: string;
        edges: {
            __typename: string;
            node: Produto;
        }[];
    };
}

interface TipoDeVeiculoEdge {
    __typename: string;
    node: TipoDeVeiculo;
}

interface RootQueryToTipoDeVeiculoConnection {
    __typename: string;
    edges: TipoDeVeiculoEdge[];
}

interface DisplayProductsProps {
    tipoId: string;
}

export function DisplayProducts({ tipoId }: DisplayProductsProps) {
    const [produtos, setProdutos] = useState<TipoDeVeiculo | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const produtosData = await getProdutosBateriaIdeal(tipoId);
                setProdutos(produtosData);
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchProdutos();
    }, [tipoId]);

    if (loading) return <p>Carregando produtos...</p>;
    if (error) return <p>Erro ao carregar produtos: {error.message}</p>;

    if (!produtos) return <p>Nenhum produto encontrado para o tipo de veículo selecionado.</p>;

    return (
        <div className='w-full'>
            <div className='flex flex-col gap-5' key={produtos.id}>
                <div className='w-full text-center'>
                    <h3 className='text-lg'>
                        Aqui estão nossas baterias para: <span className='italic'>{produtos.name}</span>
                    </h3>
                </div>
                <div className='grid grid-cols-3'>
                    {produtos.produtos.edges.map(item => (
                        <Card
                            key={item.node.id}
                            name={item.node.title}
                            image={item.node.produtos.imageDoProduto.node.mediaItemUrl}
                            id={item.node.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
