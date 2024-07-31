import { gql } from "@apollo/client";
import { GqlClient } from "./apollo-client";
import { EstadoEdge } from "@/@types/Representantes";

export async function getRepresentantes(): Promise<EstadoEdge[]> {
	try {
		const { data } = await GqlClient.query({
			query: gql`
				query NewQuery {
					estados(first: 30) {
						edges {
							node {
								id
								name
								representantes(first: 200) {
									edges {
										node {
											id
											title
											representantes {
												regiaoAtendida
												telefone
											}
										}
									}
								}
							}
						}
					}
				}
			`,
		});

		if (!data.estados) {
			throw new Error("Dados não encontrados");
		}
		return data.estados.edges;
	} catch (error) {
		console.error("Erro ao obter dados:", error);
		return [];
	}
}
