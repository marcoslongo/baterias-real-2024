import { gql } from "@apollo/client";
import { GqlClient } from "./apollo-client";

export async function getProdutosByLinha(slug: string) {
    try {
        const { data } = await GqlClient.query({
            query: gql`
                query GetProdutosByLinha($slug: [String!]) {
                    categoriasProdutos(where: {slug: $slug}) {
                        edges {
                            node {
                                id
                                name
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
            variables: { slug: [slug] },
        });

        if (!data.categoriasProdutos) {
            throw new Error("Dados não encontrados");
        }
        const dataCategoriasProdutos = data.categoriasProdutos.edges[0].node.produtos.edges;

        return dataCategoriasProdutos;
    } catch (error) {
        console.error("Erro ao obter dados:", error);
        return [];
    }
}
