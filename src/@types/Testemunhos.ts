export interface TestemunhoData {
    node: {
        id: string;
        title: string;
        testemunhos: {
            depoimento: string;
            departamento: string;
            tempoDeEmpresa: string;
            foto: {
                node: {
                    mediaItemUrl: string;
                };
            };
        };
    };
};