import { gql } from "@apollo/client";
import { GqlClient } from "./apollo-client";

export async function getTiposDeVeiculos(){
    try {
        const { data } = await GqlClient.query({
            query: gql`
                query MyQuery2 {
                    tiposDeVeiculos {
                        edges {
                            node {
                                id
                                name
                            }
                        }
                    }
                }
            `,
        });

        if (!data.tiposDeVeiculos) {
            throw new Error("Dados não encontrados");
        }

        return data.tiposDeVeiculos.edges;
    } catch (error) {
        console.error("Erro ao obter dados:", error);
        return { categoriasProdutos: { edges: [] } };
    }
}
