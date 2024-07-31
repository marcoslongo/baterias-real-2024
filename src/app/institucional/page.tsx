import { BASE_URL } from "@/constants/baseUrl";
import Image from "next/image";
import { FaHeart, FaFlag } from "react-icons/fa";
import { GiChart } from "react-icons/gi";
import dynamic from 'next/dynamic';
import { BsLightningFill } from "react-icons/bs";
import { Skeleton } from "@/components/ui/skeleton";

const VideoPlayer = dynamic(() => import('./VideoPlayer'), {
	ssr: false,
	loading: () => <Skeleton className="w-full h-[400px]" />,
});

export async function generateMetadata() {
	return {
		title: 'Baterias Real - Sobre a Empresa',
		description: 'A Baterias Real nasceu comprometida em fornecer a seus clientes produtos de altíssima qualidade, visando atender suas necessidades e superar suas expectativas quando o assunto é baterias automotivas. Desde 1980 quando começou suas atividades na cidade de Realeza, localizada no sudoeste do Paraná.',
		alternates: {
			canonical: `${BASE_URL}/institucional`,
		},
	};
}

export default function Intitucional() {
	return (
		<main className="pt-14 pb-40">
			<div className="container">
				<article className="w-full flex flex-col flex-wrap gap-5">
					<h1 className="font-bold text-4xl">Sobre a Empresa</h1>
					<p>A Baterias Real nasceu comprometida em fornecer a seus clientes produtos de altíssima qualidade, visando atender suas necessidades e superar suas expectativas quando o assunto é baterias automotivas. Desde 1980 quando começou suas atividades na cidade de Realeza, localizada no sudoeste do Paraná.</p>
					<div className="w-full flex flex-col lg:flex-row">
						<article className="flex md:pr-4 flex-col gap-5">
							<p>
								Com a reforma e revenda de baterias, passando por 1983 onde iniciou a fabricação de placas e expandiu sua revenda para toda essa região, chegando em 1991, ano em que expandiu por completo toda sua produção para as regiões sul, sudeste, centro-oeste e nordeste, abrangendo 19 estados de todo o país, sendo eles, Paraná, Bahia, Santa Catarina, Rio Grande do Sul, Mato Grosso, Mato Grosso do Sul, Goiás, Minas Gerais, Espírito Santo, São Paulo, Rio de Janeiro, Piauí, Ceará, Alagoas, Pernambuco, Paraíba, Rio Grande do Norte, Maranhão e Tocantins a empresa sempre esteve focada em atender os mais rigorosos padrões de controle de qualidade em todas suas etapas, desde a produção até a entrega em seus distribuidores.
							</p>
							<p>
								Hoje, com seus 44 anos de experiência a Baterias Real é uma empresa reconhecida em todo o país. Sua imensa dedicação, investimento em tecnologia e cuidados com o meio-ambiente e seus colaboradores, fazem a diferença e se unem a história de inúmeros clientes e parceiros que confiam no trabalho e se somam a família Real.
							</p>
						</article>
						<div className="flex-none">
							<div className="w-full lg:w-[630px] overflow-hidden rounded-xl">
								<VideoPlayer />
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-40 mt-6">
						<div className="flex flex-col gap-4 relative">
							<h2 className="text-[#DF0209] font-bold text-5xl">Missão</h2>
							<p>Gerar energia com qualidade e segurança.</p>
							<FaFlag className="absolute bottom-0 right-10 opacity-30 text-[#DF0209]" size={80} />
						</div>
						<div className="flex flex-col gap-4 relative">
							<h2 className="text-[#DF0209] font-bold text-5xl">Visão</h2>
							<p>Ser uma empresa reconhecida pela sua história e qualidade dos seus produtos, buscando o desenvolvimento e valorização dos seus clientes e colaboradores.</p>
							<GiChart className="absolute bottom-0 right-10 opacity-30 text-[#DF0209]" size={80} />
						</div>
						<div className="flex flex-col gap-4 relative">
							<h2 className="text-[#DF0209] font-bold text-5xl">Valores</h2>
							<ul className="list-disc pl-6 flex flex-col">
								<li>Família</li>
								<li>História</li>
								<li>Resistência</li>
								<li>Atendimento</li>
							</ul>
							<FaHeart className="absolute bottom-0 right-16 opacity-30 text-[#DF0209]" size={80} />
						</div>
					</div>
				</article>
			</div>
			<section className="w-full relative bg-[#DF0209] mt-24 flex flex-col justify-center p-10">
				<div className="container py-6">
					<div className="w-full lg:w-[80%] flex flex-col gap-5 text-center lg:text-start">
						<h2 className="text-white font-bold text-5xl">Política de Qualidade</h2>
						<p className="text-white">Fornecer soluções em acumuladores elétricos, que atendam aos requisitos aplicáveis e às necessidades do mercado com melhoria continua de produtos e processos, com desenvolvimento dos recursos humanos e tecnológicos, gerando satisfação de clientes, colaboradores e acionistas.</p>
					</div>
				</div>
				<Image
					src={'/assets/images/medalha.webp'}
					width={158}
					height={247}
					alt=""
					className="right-5 absolute"
				/>
			</section>
		</main>
	);
}

