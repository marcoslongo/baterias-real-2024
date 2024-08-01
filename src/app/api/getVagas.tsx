import { gql } from "@apollo/client";
import { GqlClient } from "./apollo-client";

export async function getVagas() {
	try {
		const { data } = await GqlClient.query({
			query: gql`
					query NewQuery {
						vagas {
							edges {
								node {
									id
									title
									slug
									vagasDisponVeis {
											beneficios
											descricao
											requisitos
											responsabilidades
									}
								}
							}
						}
					}
			`,
		});

		if (!data.vagas) {
			throw new Error("Dados não encontrados");
		}
		const dataVagas = data.vagas.edges;

		return dataVagas;
	} catch (error) {
		console.error("Erro ao obter dados:", error);
		return [];
	}
}
