interface TipoDeVeiculo {
    __typename: "TipoDeVeiculo";
    id: string;
    name: string;
}

interface RootQueryToTipoDeVeiculoConnectionEdge {
    __typename: "RootQueryToTipoDeVeiculoConnectionEdge";
    node: TipoDeVeiculo;
}

export type Tipos = RootQueryToTipoDeVeiculoConnectionEdge[];