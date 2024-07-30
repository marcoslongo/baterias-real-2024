import Image from "next/image";
import { Form } from "./Form";
import { BASE_URL } from "@/constants/baseUrl";

export async function generateMetadata() {
	return {
		title: 'Baterias Real - Garantias',
		description: 'Bem-vindo ao nosso Canal de Garantias. Aqui, você pode registrar suas solicitações de garantia de forma rápida e segura. Por favor, preencha o formulário abaixo para iniciar o processo.',
		alternates: {
			canonical: `${BASE_URL}/garantia`,
		},
		robots: {
			index: false,
		},
	};
}

export default function Garantia() {
	return (
		<main className="pb-40">
			<div className="relative w-full min-h-[380px] lg:min-h-[525px] mb-10 flex items-center">
				<div className="container relative z-20">
					<div className="w-full lg:w-1/3 flex flex-col gap-4 text-center lg:text-start">
						<h1 className="font-bold text-4xl lg:text-6xl">Garantias</h1>
						<p className="text-base lg:text-xl">
							Bem-vindo ao nosso <span className="text-[#DF0209] font-bold">Canal de Garantias</span>. Aqui, você pode registrar suas solicitações de garantia de forma rápida e segura. Por favor, <span className="text-[#DF0209] font-bold">preencha o formulário</span> abaixo para iniciar o processo.
						</p>
					</div>
				</div>
				<Image
					src={'/assets/images/garantia.webp'}
					fill
					objectFit="cover"
					alt="banner garantias"
					priority
					className="opacity-30 lg:opacity-100"
				/>
			</div>
			<Form />
		</main>
	);
}