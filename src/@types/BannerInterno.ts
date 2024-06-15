export interface BannerInterno {
    id: string;
    name: string;
    linhas: {
        textoSobreALinhaDeProdutos: string;
        imagemBannerInterno: {
            node: {
                __typename: string;
                mediaItemUrl: string;
            }
        }
    }
}