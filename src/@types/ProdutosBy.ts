export interface ImageDoProdutoNode {
	mediaItemUrl: string;
}

export interface ImageDoProduto {
	node: ImageDoProdutoNode;
}

export interface ProdutoDetalhe {
	capacidade: string;
	correnteDePartida: string;
	peso: string;
	tensNominal: string;
	imageDoProduto: ImageDoProduto;
}

export interface Produto {
	id: string;
	title: string;
	produtos: ProdutoDetalhe;
}