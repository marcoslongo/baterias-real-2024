import { gql } from "@apollo/client";
import { CategoriasData } from "@/@types/CategoriasProdutos";
import { GqlClient } from "./apollo-client";

export async function getCategoriasProdutos(): Promise<CategoriasData> {
    try {
        const { data } = await GqlClient.query({
            query: gql`
                query NewQuery {
                    categoriasProdutos {
                        edges {
                            node {
                                id
                                name
                                slug
                                linhas {
                                    exibirEssaCategoriaNaHomePage
                                    bannerDaCategoria {
                                        node {
                                            mediaItemUrl
                                        }
                                    }
                                    bateria {
                                        node {
                                            mediaItemUrl
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            `,
        });

        if (!data.categoriasProdutos) {
            throw new Error("Dados não encontrados");
        }

        return {
            categoriasProdutos: {
                edges: data.categoriasProdutos.edges,
            },
        };
    } catch (error) {
        console.error("Erro ao obter dados:", error);
        return { categoriasProdutos: { edges: [] } };
    }
}
