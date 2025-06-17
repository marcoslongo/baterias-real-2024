import { Form } from "./Form";
import { BASE_URL } from "@/constants/baseUrl";
import { CardInfo } from "./Cardinfo";
import { getVagaBySlug } from "@/queries/getVagaBySlug";

interface PageVagasProps {
	params: {
		slug: string;
	};
}

export async function generateMetadata({ params: { slug } }: PageVagasProps) {
	const vaga = await getVagaBySlug(slug);
	return {
		title: `Baterias Real - ${vaga.title} `,
		description: `${vaga.vagasDisponVeis.descricao}`,
		alternates: {
			canonical: `${BASE_URL}/trabalhe-conosco/${slug}`,
		},
	};
}

export default async function PageVaga({ params: { slug } }: PageVagasProps) {
	const vaga = await getVagaBySlug(slug);
	return (
		<main className="pb-40 pt-10">
			<div className="container flex flex-col gap-6">
				<h1 className="text-4xl font-bold text-center">{vaga.title}</h1>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
					<div className="flex flex-col gap-8 bg-white rounded-md p-8 shadow">
						<CardInfo title="Descrição da vaga" text={vaga.vagasDisponVeis.descricao} />
						<CardInfo title="Requisitos" text={vaga.vagasDisponVeis.requisitos} />
						<CardInfo title="Responsabilidades" text={vaga.vagasDisponVeis.responsabilidades} />						
						<CardInfo title="Benefícios" text={vaga.vagasDisponVeis.beneficios} />
					</div>
					<Form />
				</div>
			</div>
		</main>
	);
}