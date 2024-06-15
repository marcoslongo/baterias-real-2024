export interface Categoria {
    id: string;
    name: string;
    linhas: {
        urlInterna: string;
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