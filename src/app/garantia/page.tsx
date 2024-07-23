import Image from "next/image";
import { Form } from "./Form";
export default function Garantia() {
	return (
		<main className="pb-40">
			<div className="relative w-full min-h-[525px] mb-10 flex items-center">
				<div className="container relative z-20">
					<div className="w-1/3 flex flex-col gap-4">
						<h1 className="font-bold text-6xl">Garantias</h1>
						<p className="text-xl">
							Bem-vindo ao nosso Canal de Garantias. Aqui, você pode registrar suas solicitações de garantia de forma rápida e segura. Por favor, preencha o formulário abaixo para iniciar o processo.
						</p>
					</div>
				</div>
				<Image
					src={'/assets/images/garantia.webp'}
					fill
					objectFit="cover"
					alt="banner contato"
					priority
				/>
			</div>
			<Form />
		</main>
	);
}