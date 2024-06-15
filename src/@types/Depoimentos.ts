export interface DepoimentoData {
    node: {
        id: string;
        title: string;
        depoimentos: {
            cidadeEstado: string;
            depoimento: string;
            empresa: string;
            foto: {
                node: {
                    mediaItemUrl: string;
                };
            };
        };
    };
};