import { gql } from "@apollo/client";
import { GqlClient } from "./apollo-client";

// Aceitando o slug como argumento
export async function getVagaBySlug(slug: string) {
    try {
        const { data } = await GqlClient.query({
            query: gql`
                query GetVagaBySlug($slug: String!) {
                    vagaBy(slug: $slug) {
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
            variables: { slug }, // Passando o slug como variável
        });

        if (!data.vagaBy) {
            throw new Error("Dados não encontrados");
        }
        return data.vagaBy;
    } catch (error) {
        console.error("Erro ao obter dados:", error);
        return null;
    }
}
