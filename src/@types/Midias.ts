export interface MidiaNode {
  id: string;
  camposMidias: {
    adicionarMidia: string;
    imagemFeed: {
      node: {
        mediaItemUrl: string;
      };
    };
    imagemStory: {
      node: {
        mediaItemUrl: string;
      };
    };
  };
}
export interface MidiasResponse {
  edges: { node: MidiaNode }[];
  pageInfo: {
    endCursor: string | null;
    hasNextPage: boolean;
  };
}
