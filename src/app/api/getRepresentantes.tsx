import { gql } from "@apollo/client";
import { GqlClient } from "./apollo-client";

export async function getRepresentantes() {
    try {
        const { data } = await GqlClient.query({
            query: gql`
                query NewQuery {
                    representantes(first:300) {
                        edges {
                            node {
                                id
                                title
                                representantes {
                                    estado
                                    regiaoAtendida
                                    telefone
                                }
                            }
                        }
                    }
                }
            `,
        });

        if (!data.representantes) {
            throw new Error("Dados não encontrados");
        }
        const dataRepresentantes = data.representantes.edges;

        return dataRepresentantes;
    } catch (error) {
        console.error("Erro ao obter dados:", error);
        return [];
    }
}
