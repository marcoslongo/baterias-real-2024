import Link from "next/link";
import { IoLocationOutline, IoPhonePortraitOutline, IoMailOutline } from "react-icons/io5";
import Image from "next/image";
import { Form } from "./Form";
import { BASE_URL } from "@/constants/baseUrl";


export async function generateMetadata() {
	return {
		title: 'Baterias Real - Fale conosco',
		description: 'Entre em contato conosco para esclarecer dúvidas, obter informações e contribuir para a melhoria contínua dos nossos produtos.',
		alternates: {
			canonical: `${BASE_URL}/fale-conosco`,
		},
	};
}

export default function FaleConosco() {
	return (
		<main className="pb-40">
			<div className="relative w-full min-h-[525px] mb-10 flex items-center">
				<div className="container relative z-20">
					<div className="w-full md:w-1/3 flex flex-col gap-4">
						<h1 className="font-bold text-4xl md:text-6xl">Fale Conosco</h1>
						<p className="text-xl">
							Entre em contato conosco para <span className="font-bold text-[#DF0209]">esclarecer dúvidas, obter informações</span> e contribuir para a melhoria contínua dos nossos produtos.
						</p>
					</div>
				</div>
				<Image
					src={'/assets/images/contact-desktop.webp'}
					fill
					objectFit="cover"
					alt="banner contato"
					priority
				/>
			</div>
			<div className="container flex flex-col items-center gap-10">
				<div className="flex flex-col md:flex-row gap-6 w-full">
					<div className="w-full md:w-1/3 flex flex-col gap-4">
						<CardInfo
							name={"Telefone"}
							info={"46. 3543 1178"}
							icon={<IoPhonePortraitOutline />}
						/>
						<CardInfo
							name={"Localização"}
							info={"Rodovia PR 182 - KM 463,7 Bairro Industrial CEP: 85770-000 - Realeza - PR"}
							icon={<IoLocationOutline />}
						/>
						<CardInfo
							name={"E-mail"}
							info={"atendimento@bateriasreal.com.br"}
							icon={<IoMailOutline />}
						/>
					</div>
					<Form />
				</div>
			</div>
		</main>
	);
}

interface CardInfoProps {
	name: string;
	info: string;
	icon: JSX.Element;
}

function CardInfo({ name, info, icon }: CardInfoProps) {
	return (
		<div className="flex flex-col items-center gap-2 bg-white rounded-md p-6 shadow-md">
			<div className="text-3xl text-[#DF0209]">{icon}</div>
			<h2 className="font-bold text-2xl">{name}</h2>
			<Link className="hover:underline text-center" href="tel:+554635431178">{info}</Link>
		</div>
	);
}