import { IoLocationOutline, IoMailOutline, IoPhonePortraitOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { Form } from "./Form";

export default function SejaUmRevendedor() {
	return (
		<main className="pt-28 pb-40">
			<div className="relative w-full min-h-[525px] mb-10 flex items-center">
				<div className="container relative z-20">
					<div className="w-1/3 flex flex-col gap-4">
						<h1 className="font-bold text-6xl">Seja um Revendedor</h1>
						<p className="text-xl">
							Torne-se um de nossos <span className="font-bold text-[#DF0209]">revendedores</span> e tenha acesso aos nossos produtos e <span className="font-bold text-[#DF0209]">oportunidades exclusivas</span>. Entre em contato conosco para <span className="font-bold text-[#DF0209]">esclarecer dúvidas</span> e saber mais sobre como fazer parte da nossa rede.
						</p>
					</div>
				</div>
				<Image
					src={'/assets/images/revenda.webp'}
					fill
					objectFit="cover"
					alt="banner contato"
					priority
				/>
			</div>
			<div className="container flex flex-col items-center gap-10">
				<div className="flex gap-6 w-full">
					<div className="w-1/3 flex flex-col gap-4">
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
							info={"comercial@bateriasreal.com.br"}
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