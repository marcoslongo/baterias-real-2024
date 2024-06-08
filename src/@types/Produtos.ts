interface MediaItem {
    mediaItemUrl: string;
}

interface AcfMediaItemConnectionEdge {
    node: MediaItem;
}

interface CategoriaNode {
    id: string;
    name: string;
    slug: string;
}

interface CategoriaProduto {
    nodes: CategoriaNode[];
}

interface CategoriasProdutos {
    nodes: CategoriaNode[];
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
    categoriaProduto: CategoriaProduto;
    categoriasProdutos: CategoriasProdutos;
}

export interface ProdutosData {
    node: Produto;
}
