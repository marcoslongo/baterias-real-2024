export interface Categoria {
    id: string;
    name: string;
    slug: string;
    linhas: {
        exibirEssaCategoriaNaHomePage: boolean;
        bannerDaCategoria: {
            node: {
                mediaItemUrl: string;
            };
        };
        bateria: {
            node: {
                mediaItemUrl: string;
            };
        };
    };
}

export interface CategoriasData {
    categoriasProdutos: {
        edges: {
            node: Categoria;
        }[];
    };
}