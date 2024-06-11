import { gql } from "@apollo/client";
import { GqlClient } from "./apollo-client";

export async function getProdutos(categoria: string) {
    try {
        const { data } = await GqlClient.query({
            query: gql`
                query ProdutosPorCategoria($categoria: String!) {
                    produtos(where: { categoriasProdutos: { name: $categoria } }, first: 100) {
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
                                categoriasProdutos {
                                    nodes {
                                        id
                                        name
                                    }
                                }
                            }
                        }
                    }
                }
            `,
            variables: { categoria: categoria }
        });

        if (!data.produtos) {
            throw new Error("Dados não encontrados");
        }
        return data.produtos.edges;
    } catch (error) {
        console.error("Erro ao obter dados:", error);
        return [];
    }
}
