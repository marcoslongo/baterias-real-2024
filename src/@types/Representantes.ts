export type Representante = {
    __typename: string;
    id: string;
    title: string;
    representantes: {
        __typename: string;
        estado: string[];
        regiaoAtendida: string;
        telefone: string;
    };
};

export type RootQueryToRepresentanteConnectionEdge = {
    __typename: string;
    node: Representante;
};

export type RepresentantesData = RootQueryToRepresentanteConnectionEdge[];
