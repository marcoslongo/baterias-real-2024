import { getVagaBySlug } from "@/api/getVagaBySlug";
import { Form } from "./Form";

interface PageVagasProps {
	params: {
		slug: string;
	};
}

export default async function PageVaga({ params: { slug } }: PageVagasProps) {
	const vaga = await getVagaBySlug(slug);

	if (!vaga) {
		return (
			<main className="py-40">
				<div className="container">
					<h1>Vaga não encontrada</h1>
				</div>
			</main>
		);
	}

	return (
		<main className="py-40">
			<div className="container flex flex-col gap-6">
				<h1 className="text-4xl font-bold text-center">{vaga.title}</h1>
				<div className="grid grid-cols-2 gap-9">
					<div className="flex flex-col gap-8 bg-white rounded-md p-8 shadow">
						<CardInfo title="Descrição" text={vaga.vagasDisponVeis.descricao} />
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

interface CardInfoProps {
	title: string;
	text: string;
}

function CardInfo({ title, text }: CardInfoProps) {
	const renderHTML = (html: string) => {
		return { __html: html };
	};
	return (
		<div className="flex flex-col gap-2">
			<h2 className="font-bold text-2xl">{title}</h2>
			<div dangerouslySetInnerHTML={renderHTML(text)} />
		</div>
	);
}