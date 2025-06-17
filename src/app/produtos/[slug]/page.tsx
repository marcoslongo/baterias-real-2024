import Image from "next/image";
import { Card } from "@/components/CardProduto";
import { BASE_URL } from "@/constants/baseUrl";
import { getProdutosByLinha } from "@/queries/getProdutosByLinha";

interface PageProdutosProps {
	params: {
		slug: string;
	};
}

export async function generateMetadata({ params: { slug } }: PageProdutosProps) {
	const data = await getProdutosByLinha(slug);
	const metaData = data.edges[0].node;

	return {
		title: `Baterias Real - Linha ${metaData.name} `,
		description: `${metaData.linhas.textoSobreALinhaDeProdutos}`,
		alternates: {
			canonical: `${BASE_URL}/produtos/${slug}`,
		},
	};
}

export default async function PageProdutos({ params: { slug } }: PageProdutosProps) {
	const data = await getProdutosByLinha(slug);
	const produtos = data.edges[0].node.produtos.edges;
	const banner = data.edges[0].node;

	return (
		<main>
			<section className="relative w-full mt-10 mb-8 lg:mb-0">
				<div className="container h-full">
					<div className="relative z-30 grid grid-cols-1 lg:grid-cols-2 gap-8 h-full items-center">
						<div className="relative h-[200px] lg:h-[450px]">
							<Image
								src={banner.linhas.imagemBannerInterno.node.mediaItemUrl}
								alt={banner.name}
								fill
								objectFit="contain"
							/>
						</div>
						<div className="flex flex-col gap-5 relative">
							<h1 className="font-bold text-2xl md:text-3xl lg:text-4xl uppercase">LINHA <br /> <span className="text-3xl md:text-5xl lg:text-7xl text-[#DF0209] italic">{banner.name}</span></h1>
							<p>{banner.linhas.textoSobreALinhaDeProdutos}</p>
							<Image
								src={'/assets/images/raio-vector.webp'}
								alt=""
								objectFit="contain"
								fill
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="mb-24">
				<div className="container">
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-6 flex gap-2 justify-center">
						Baterias da linha
					</h2>
				</div>
				<div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{produtos.map((produto: any) => (
						<Card
							key={produto.node.id}
							name={produto.node.title}
							image={produto.node.produtos.imageDoProduto.node.mediaItemUrl}
							id={produto.node.id}
						/>
					))}
				</div>
			</section>
		</main>
	);
}