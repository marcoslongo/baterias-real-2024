import { gql } from "@apollo/client";
import { GqlClient } from "./apollo-client";

interface getBannerInternoProdutosProps {
    category: string;
}

export async function getBannerInternoProdutos({ category }: getBannerInternoProdutosProps) {
    try {
        const { data } = await GqlClient.query({
            query: gql`
                query GetCategoriaProduto($id: ID!) {
                    categoriaProduto(id: $id) {
                        id
                        name
                        linhas {
                            textoSobreALinhaDeProdutos
                            imagemBannerInterno {
                                node {
                                    mediaItemUrl
                                }
                            }
                        }
                    }
                }
            `,
            variables: { id: category }
        });

        if (!data.categoriaProduto) {
            throw new Error("Dados não encontrados");
        }

        return data.categoriaProduto;
    } catch (error) {
        console.error("Erro ao obter dados:", error);
        return { categoriasProdutos: { edges: [] } };
    }
}
