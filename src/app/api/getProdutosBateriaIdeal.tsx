import { gql } from "@apollo/client";
import { GqlClient } from "./apollo-client";

export async function getProdutosBateriaIdeal(tipoId: string) {
    try {
        const { data } = await GqlClient.query({
            query: gql`
                query GetProdutos($tipoId: ID!) {
                    tipoDeVeiculo(id: $tipoId) {
                        id
                        name
                        produtos {
                            edges {
                                node {
                                    id
                                    title
                                    produtos {
                                        imageDoProduto {
                                            node {
                                                mediaItemUrl
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            `,
            variables: {
                tipoId,
            },
        });

        if (!data.tipoDeVeiculo) {
            throw new Error('Dados não encontrados');
        }

        return data.tipoDeVeiculo;
    } catch (error) {
        console.error('Erro ao obter dados:', error);
        throw error;
    }
}
