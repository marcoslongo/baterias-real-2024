import { gql } from "@apollo/client";
import { GqlClient } from "./apollo-client";

interface GetProdutosProps {
    category: string;
}

export async function getProdutos({ category }: GetProdutosProps) {
    const termTaxonomyId = [category];
    
    try {
        const { data } = await GqlClient.query({
            query: gql`
                query GetProdutos($termTaxonomyId: [ID]!) {
                    categoriasProdutos(where: {termTaxonomyId: $termTaxonomyId}) {
                        edges {
                            node {
                                id
                                produtos {
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
                        }
                    }
                }
            `,
            variables: { termTaxonomyId }
        });

        if (!data.categoriasProdutos.edges.length) {
            throw new Error('Dados não encontrados');
        }
        
        return data.categoriasProdutos.edges[0].node.produtos.edges;
    } catch (error) {
        console.error('Erro ao obter dados:', error);
        return [];
    }
}
