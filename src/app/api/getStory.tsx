import { gql } from "@apollo/client";
import { GqlClient } from "./apollo-client";
import { MidiasResponse } from "@/@types/Midias";

export async function getMidiasStory(after: string | null = null): Promise<MidiasResponse> {
  try {
    const { data } = await GqlClient.query({
      query: gql`
        query NewQuery($after: String) {
          tipos(where: {slug: "story"}) {
            edges {
              node {
                id
                name
                slug
                midias(first: 6, after: $after) {
                  edges {
                    node {
                      id
                      camposMidias {
                        adicionarMidia
                        imagemStory {
                          node {
                            mediaItemUrl
                          }
                        }
                        imagemFeed {
                          node {
                            mediaItemUrl
                          }
                        }
                      }
                    }
                  }
                  pageInfo {
                    endCursor
                    hasNextPage
                  }
                }
              }
            }
          }
        }
      `,
      variables: { after },
    });

    const midias = data.tipos.edges[0]?.node.midias;

    if (!midias) {
      throw new Error("Dados não encontrados");
    }

    return {
      edges: midias.edges,
      pageInfo: midias.pageInfo,
    };
  } catch (error) {
    console.error("Erro ao obter dados:", error);
    return { edges: [], pageInfo: { endCursor: null, hasNextPage: false } };
  }
}
