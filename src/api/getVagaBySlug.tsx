import { gql } from "@apollo/client";
import { GqlClient } from "./apollo-client";

export async function getVagaBySlug() {
    try {
        const { data } = await GqlClient.query({
            query: gql`
                query GetVagaBySlug {
                    vagaBy (slug: "auxiliar-de-producao") {
                        id
                        title
                        vagasDisponVeis {
                            beneficios
                            descricao
                            requisitos
                            responsabilidades
                        }
                    }
                }
            `,
        });

        if (!data.vagaBy) {
            throw new Error("Dados não encontrados");
        }
        const dataVagaBy = data.vagaBy;

        return dataVagaBy;
    } catch (error) {
        console.error("Erro ao obter dados:", error);
        return [];
    }
}
