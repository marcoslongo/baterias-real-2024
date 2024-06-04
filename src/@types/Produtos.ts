interface MediaItem {
    mediaItemUrl: string;
}

interface AcfMediaItemConnectionEdge {
    node: MediaItem;
}

interface Produtos {
    capacidade: string;
    correnteDePartida: string;
    peso: string;
    resDeCapacidade: string;
    tensNominal: string;
    imageDoProduto: AcfMediaItemConnectionEdge;
}

interface Produto {
    id: string;
    title: string;
    produtos: Produtos;
}

export interface ProdutosData {
    node: Produto;
}