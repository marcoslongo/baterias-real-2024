import { gql } from "@apollo/client";
import { GqlClient } from "./apollo-client";

export async function getProdutoById(id: string) {
    try {
        const { data } = await GqlClient.query({
            query: gql`
                query GetProduto($id: ID!) {
                    produto(id: $id) {
                        id
                        title
                        produtos {
                            capacidade
                            correnteDePartida
                            peso
                            tensNominal
                            imageDoProduto {
                                node {
                                    mediaItemUrl
                                }
                            }      
                        }
                    }
                }
            `,
            variables: { id },
        });

        if (!data || !data.produto) {
            throw new Error("Produto não encontrado");
        }

        return data.produto;
    } catch (error) {
        console.error("Erro ao obter dados:", error);
        return null;
    }
}
