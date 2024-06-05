// @/@types/Categorias.ts
export interface Categoria {
    node: {
        id: string;
        name: string;
    };
}

export interface CategoriasData {
    categoriasProdutos: {
        edges: Categoria[];
    };
}
