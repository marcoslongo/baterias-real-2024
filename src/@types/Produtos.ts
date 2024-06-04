// Definindo a estrutura dos dados retornados pelo GraphQL
interface ImageNode {
    mediaItemUrl: string;
}

interface ProdutoDetails {
    capacidade: string;
    correnteDePartida: string;
    peso: string;
    resDeCapacidade: string;
    tensNominal: string;
    imageDoProduto: {
        node: ImageNode;
    };
}

interface ProdutoNode {
    id: string;
    title: string;
    produtos: ProdutoDetails;
}

interface ProdutoEdge {
    node: ProdutoNode;
}

export interface ProdutosData {
    produtos: {
        edges: ProdutoEdge[];
    };
}
