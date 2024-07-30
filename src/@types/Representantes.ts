export interface Representante {
	nome: string;
	telefone: string;
	regiao: string;
}

export interface RepresentantesPorEstado {
	[key: string]: Representante[];
}

export interface RepresentanteNode {
	id: string;
	title: string;
	representantes: {
		regiaoAtendida: string;
		telefone: string;
	};
}

export interface EstadoNode {
	id: string;
	name: string;
	representantes: {
		edges: { node: RepresentanteNode }[];
	};
}

export interface EstadoEdge {
	node: EstadoNode;
}