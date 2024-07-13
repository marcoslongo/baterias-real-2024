import { getVagaBySlug } from "@/api/getVagaBySlug";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
						<CardInfo title="Benefícios" text={vaga.vagasDisponVeis.beneficios} />
						<CardInfo title="Requisitos" text={vaga.vagasDisponVeis.requisitos} />
						<CardInfo title="Responsabilidades" text={vaga.vagasDisponVeis.responsabilidades} />
					</div>
					<div className="bg-white rounded-md p-8 shadow">
						<h2 className="font-bold text-2xl mb-4">Cadastre seu currículo</h2>
						<div className="flex flex-col gap-4">
							<div className="grid grid-cols-2 gap-3">
								<Input className="h-12 text-base" type="text" placeholder="Nome" />
								<Input className="h-12 text-base" type="text" placeholder="Sobrenome" />
							</div>
							<div>
								<Input className="h-12 text-base" type="email" placeholder="E-mail" />
							</div>
							<div>
								<Input className="h-12 text-base" type="phone" placeholder="Celular" />
							</div>
							<div>
								<Input className="h-12 text-base" type="date" placeholder="Data de Nascimento" />
							</div>
							<div>
								<Input className="h-12 text-base" type="text" placeholder="Endereço" />
							</div>
							<div>
								<Textarea className="h-28 text-base" placeholder="Formação Acadêmica" />
							</div>
							<div>
								<Textarea className="h-28 text-base" placeholder="Experiência Profissional" />
							</div>
							<div>
								<Textarea className="h-28 text-base" placeholder="Habilidades" />
							</div>
							<div className="w-full flex">
								<Button className="w-full h-12 text-base font-bold bg-[#DF0209] hover:bg-[#A60004]">Enviar Currículo</Button>
							</div>
						</div>
					</div>
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
	return (
		<div className="flex flex-col gap-2">
			<h2 className="font-bold text-2xl">{title}</h2>
			<p>{text}</p>
		</div>
	);
}