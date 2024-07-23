import Image from "next/image";
import { Form } from "./Form";
export default function CanalDeDenuncias() {
	return (
		<main className="pb-40">
			<div className="relative w-full min-h-[525px] mb-10 flex items-center">
				<div className="container relative z-20">
					<div className="w-1/3 flex flex-col gap-4">
						<h1 className="font-bold text-6xl">Canal de Denúncias</h1>
						<p className="text-xl">
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
				/>
			</div>
			<Form />
		</main>
	);
}