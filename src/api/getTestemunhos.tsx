import { gql } from "@apollo/client";
import { GqlClient } from "./apollo-client";

export async function getTestemunhos() {
	try {
		const { data } = await GqlClient.query({
			query: gql`
					query NewQuery {
							testemunhos {
									edges {
										node {
												id
												title
												testemunhos {
													depoimento
													departamento
													tempoDeEmpresa
													foto {
														node {
															mediaItemUrl
														}
													}
											}
										}
									}
							}
					}
				`,
		});

		if (!data.testemunhos) {
			throw new Error("Dados não encontrados");
		}
		const dataTestemunhos = data.testemunhos.edges;

		return dataTestemunhos;
	} catch (error) {
		console.error("Erro ao obter dados:", error);
		return [];
	}
}
