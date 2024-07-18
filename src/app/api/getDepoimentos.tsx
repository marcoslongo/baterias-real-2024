import { gql } from "@apollo/client";
import { GqlClient } from "./apollo-client";

export async function getDepoimentos() {
    try {
        const { data } = await GqlClient.query({
            query: gql`
                query NewQuery {
                    depoimentos {
                        edges {
                            node {
                                id
                                title
                                depoimentos {
                                    cidadeEstado
                                    depoimento
                                    empresa
                                    foto {
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

        if (!data.depoimentos) {
            throw new Error("Dados não encontrados");
        }
        const dataDepoimentos = data.depoimentos.edges;

        return dataDepoimentos;
    } catch (error) {
        console.error("Erro ao obter dados:", error);
        return [];
    }
}
