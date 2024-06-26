import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { IoLocationOutline, IoPhonePortraitOutline, IoMailOutline } from "react-icons/io5";

export default function FaleConosco() {
	return (
		<main className="py-40">
			<div className="container flex flex-col items-center gap-10">
				<div className="flex flex-col gap-2 w-full">
					<h1 className="font-bold text-4xl">Fale conosco</h1>
					<p>Tem alguma dúvida? Por favor utilize nossos meios e fale conosco. Temos a certeza que poderá receber a nossa resposta o mais rapidamente possível.</p>
				</div>
				<div className="flex gap-6 w-full">
					<div className="w-2/3 flex flex-col gap-4 bg-white shadow-md p-9 rounded-md justify-center">
						<div className="grid grid-cols-2 gap-3">
							<Input type="text" placeholder="Nome" />
							<Input type="text" placeholder="Sobrenome" />
						</div>
						<div>
							<Input type="email" placeholder="E-mail" />
						</div>
						<div>
							<Input type="phone" placeholder="Celular" />
						</div>
						<div>
							<Textarea placeholder="Digite sua mensagem" />
						</div>
						<div className="w-full flex">
							<Button className="w-full bg-[#DF0209] hover:bg-[#A60004]">Enviar Mensagem</Button>
						</div>
					</div>
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
							info={"atendimento@bateriasreal.com.br"}
							icon={<IoMailOutline />}
						/>
					</div>
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