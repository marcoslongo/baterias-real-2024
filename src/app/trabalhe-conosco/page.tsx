import { getVagas } from "@/api/getVagas";
import Link from "next/link";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { Depoimentos } from "./Depoimentos";
import { Banner } from "./Banner";

export default async function TrabalheConosco() {
	const vagas = await getVagas();
	return (
		<main className="pt-28 pb-40">
			<Banner />
			<div className="container flex flex-col items-center gap-10">
				<div className="w-full">
					<div className="flex flex-col gap-4">
						<h2 className="font-bold text-4xl mb-4 flex gap-2 items-center w-full justify-center">
							Vagas disponíveis <div className="text-[#DF0209]"><BsFillSuitcaseLgFill /></div>
						</h2>
						<div className="grid grid-cols-2 gap-8">
							{vagas.map((item: any) => (
								<CardInfoVaga
									key={item.node.id}
									name={item.node.title}
									info={item.node.vagasDisponVeis.descricao}
									slug={item.node.slug}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
			<section>
				<div className="container">
					<Depoimentos />
				</div>
			</section>
		</main>
	);
}

interface CardInfoVagaProps {
	name: string;
	info: string;
	slug: string;
}

function CardInfoVaga({ name, info, slug }: CardInfoVagaProps) {
	return (
		<div className="flex flex-col gap-2 bg-white rounded-md p-6 shadow-md">
			<h2 className="font-bold text-2xl">{name}</h2>
			<p>{info}</p>
			<Link href={`trabalhe-conosco/${slug}`} className="flex justify-center bg-[#DF0209] transition font-semibold text-white px-4 py-2 items-center gap-2 rounded-md border border-[#DF0209] hover:bg-transparent hover:text-[#DF0209]">Ver vaga<FaArrowRightLong size={16} /></Link>
		</div>
	);
}