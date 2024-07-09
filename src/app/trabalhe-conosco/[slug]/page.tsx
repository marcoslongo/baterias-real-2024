import { getVagaBySlug } from "@/api/getVagaBySlug";

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
			<div className="container">
				<h1>{vaga.title}</h1>
				<p><strong>Benefícios:</strong> {vaga.vagasDisponVeis.beneficios}</p>
				<p><strong>Descrição:</strong> {vaga.vagasDisponVeis.descricao}</p>
				<p><strong>Requisitos:</strong> {vaga.vagasDisponVeis.requisitos}</p>
				<p><strong>Responsabilidades:</strong> {vaga.vagasDisponVeis.responsabilidades}</p>
			</div>
		</main>
	);
}
