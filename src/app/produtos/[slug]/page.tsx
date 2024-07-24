import Image from "next/image";
import { getProdutosByLinha } from "@/app/api/getProdutosByLinha";
import { Card } from "@/components/CardProduto";

interface PageProdutosProps {
	params: {
		slug: string;
	};
}

export default async function PageProdutos({ params: { slug } }: PageProdutosProps) {
	const data = await getProdutosByLinha(slug);
	const produtos = data.edges[0].node.produtos.edges;
	const banner = data.edges[0].node;

	return (
		<main>
			<section className="relative h-[64vh] w-full">
				<div className="container h-full">
					<div className="relative z-30 grid grid-cols-2 gap-8 h-full items-center">
						<div className="relative h-[450px]">
							<Image
								src={banner.linhas.imagemBannerInterno.node.mediaItemUrl}
								alt={banner.name}
								fill
								objectFit="cover"
							/>
						</div>
						<div className="flex flex-col gap-5 relative">
							<h1 className="font-bold text-4xl uppercase">LINHA <br /> <span className="text-7xl text-[#DF0209] italic">{banner.name}</span></h1>
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
					<h2 className="text-5xl font-bold pb-6 flex gap-2 justify-center">
						Baterias da linha
					</h2>
				</div>
				<div className="container grid grid-cols-3 gap-8">
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