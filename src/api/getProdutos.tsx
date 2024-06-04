import { gql } from "@apollo/client";
import { GqlClient } from "./apollo-client";

export async function getProdutos() {
    try {
        const { data } = await GqlClient.query({
            query: gql`
                query NewQuery {
                    produtos (first: 50) {
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
        const dataProdutos = data.produtos.edges;

        return dataProdutos;
    } catch (error) {
        console.error("Erro ao obter dados:", error);
        return [];
    }
}
