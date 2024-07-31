import Image from "next/image";
import { Form } from "./Form";
import { BASE_URL } from "@/constants/baseUrl";

export async function generateMetadata() {
	return {
		title: 'Baterias Real - Canal de Denúncias',
		description: 'Bem-vindo ao nosso Canal de Denúncias. Garantimos que todas as informações fornecidas são 100% sigilosas. Por favor, preencha o formulário abaixo.',
		alternates: {
			canonical: `${BASE_URL}/canal-de-denuncias`,
		},
		robots: {
			index: false,
		},
	};
}

export default function CanalDeDenuncias() {
	return (
		<main className="pb-40">
			<div className="relative w-full min-h-[380px] lg:min-h-[525px] mb-10 flex items-center">
				<div className="container relative z-20">
					<div className="w-full lg:w-1/3 flex flex-col gap-4 text-center lg:text-start">
						<h1 className="font-bold text-4xl lg:text-6xl">Canal de Denúncias</h1>
						<p className="text-base lg:text-xl">
							Bem-vindo ao nosso Canal de Denúncias. Garantimos que todas as informações fornecidas são <span className="font-bold text-[#DF0209]">100% sigilosas</span>. Por favor, preencha o formulário abaixo.
						</p>
					</div>
				</div>
				<Image
					src={'/assets/images/denuncia.webp'}
					fill
					objectFit="cover"
					alt="banner contato"
					priority
					className="opacity-30 lg:opacity-100"
				/>
			</div>
			<Form />
		</main>
	);
}