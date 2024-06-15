import { gql } from "@apollo/client";
import { GqlClient } from "./apollo-client";

// Função para buscar produtos por categoria
export async function getProdutosByTaxonomy() {
    try {
        // Consulta GraphQL para buscar produtos da categoria "CONVENCIONAL"
        const { data } = await GqlClient.query({
            query: gql`
                query ProdutosPorCategoria {
                    categoriasProdutos(where: { name: "CONVENCIONAL" }) {
                        edges {
                            node {
                                id
                                name
                                contentNodes {
                                    edges {
                                        node {
                                            id
                                            link
                                            slug
                                            ... on NodeWithTitle {
                                                title
                                            }
                                            ... on Post {
                                                title
                                            }
                                            ... on Page {
                                                title
                                            }
                                            ... on MediaItem {
                                                title
                                            }
                                            ... on OndeComprar {
                                                title
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            `
        });

        if (!data?.categoriasProdutos) {
            throw new Error("Dados não encontrados");
        }

        return data.categoriasProdutos.edges.map((edge: { node: any; }) => edge.node);
    } catch (error) {
        console.error("Erro ao obter dados:", error);
        return [];
    }
}
