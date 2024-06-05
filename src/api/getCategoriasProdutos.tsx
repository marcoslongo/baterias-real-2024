// @/api/getCategoriasProdutos.ts
import { gql } from "@apollo/client";
import { GqlClient } from "./apollo-client";
import { CategoriasData } from "@/@types/CategoriasProdutos";

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
                            }
                        }
                    }
                }
            `,
        });

        if (!data.categoriasProdutos) {
            throw new Error("Dados não encontrados");
        }

        const dataCategorias = data.categoriasProdutos;

        console.log(dataCategorias);

        return dataCategorias;
    } catch (error) {
        console.error("Erro ao obter dados:", error);
        return { categoriasProdutos: { edges: [] } };
    }
}
