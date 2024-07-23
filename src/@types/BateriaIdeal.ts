export interface TipoDeVeiculo {
    __typename: "TipoDeVeiculo";
    id: string;
    name: string;
	produtos: {
		__typename: string;
		edges: {
			__typename: string;
			node: Produto;
		}[];
	};
}

interface RootQueryToTipoDeVeiculoConnectionEdge {
    __typename: "RootQueryToTipoDeVeiculoConnectionEdge";
    node: TipoDeVeiculo;
}

export type Tipos = RootQueryToTipoDeVeiculoConnectionEdge[];

export interface Produto {
	__typename: string;
	id: string;
	title: string;
	produtos: {
		imageDoProduto: {
			node: {
				mediaItemUrl: string;
			}
		}
	}
}

export interface DisplayProductsProps {
	tipoId: string;
}