export interface Produto {
    node: {
        id: string;
        title: string;
        produtos: {
            capacidade: string;
            correnteDePartida: string;
            peso: string;
            resDeCapacidade: string;
            tensNominal: string;
            imageDoProduto: {
                node: {
                    mediaItemUrl: string;
                };
            };
        };
    };
}