import { gql } from "@apollo/client";
import { GqlClient } from "./apollo-client";

export async function getId(slug: string) {
    try {
        const { data } = await GqlClient.query({
            query: gql`
                query GetId($slug: [String!]) {
                    categoriasProdutos(where: {slug: $slug}) {
                        edges {
                            node {
                                id
                                name
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
        const dataCategoriasProdutos = data.categoriasProdutos.edges[0].node;

        return dataCategoriasProdutos;
    } catch (error) {
        console.error("Erro ao obter dados:", error);
        return [];
    }
}
