import { gql } from "@apollo/client";
import { GqlClient } from "./apollo-client";

export async function getMidias() {
	try {
		const { data } = await GqlClient.query({
			query: gql`
					query NewQuery {
							midias(first:100) {
								edges {
									node {
										id
										title
										camposMidias {
											adicionarMidia
											imagemFeed {
												node {
													mediaItemUrl
												}
											}
											imagemStory {
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

		if (!data.midias) {
			throw new Error("Dados não encontrados");
		}
		const dataMidias = data.midias.edges;

		return dataMidias;
	} catch (error) {
		console.error("Erro ao obter dados:", error);
		return [];
	}
}
