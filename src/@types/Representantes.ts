export interface Representante {
	nome: string;
	telefone: string;
	regiao: string;
	photo: string;
}

export interface RepresentantesPorEstado {
	[key: string]: Representante[];
}

export interface ImageDoRepresentanteNode {
	mediaItemUrl: string;
}

export interface ImageDoRepresentante {
	node: ImageDoRepresentanteNode;
}

export interface RepresentanteNode {
	id: string;
	title: string;
	representantes: {
		fotoRepresentante: ImageDoRepresentante
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