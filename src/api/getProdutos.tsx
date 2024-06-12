import { gql } from "@apollo/client";
import { GqlClient } from "./apollo-client";

export async function getProdutos() {
    try {
        const { data } = await GqlClient.query({
            query: gql`
                query GetProdutos {
                    categoriasProdutos(where: {termTaxonomyId: "dGVybTo0"}) {
                        edges {
                            node {
                                id
                                produtos {
                                    edges {
                                        node {
                                            id
                                            title
                                            produtos {
                                                capacidade
                                                correnteDePartida
                                                peso
                                                resDeCapacidade
                                                tensNominal
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
                    }
                }
            `,
        });

        if (!data.categoriasProdutos.edges.length) {
            throw new Error('Dados não encontrados');
        }
        return data.categoriasProdutos.edges[0].node.produtos.edges;
    } catch (error) {
        console.error('Erro ao obter dados:', error);
        return [];
    }
}
