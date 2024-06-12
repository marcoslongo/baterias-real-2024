import { gql } from "@apollo/client";
import { GqlClient } from "./apollo-client";

export async function getProdutos() {
    try {
        const { data } = await GqlClient.query({
            query: gql`
                query {
                    produtos(first: 6) {
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
            `,
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
