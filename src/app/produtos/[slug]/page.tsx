import Image from "next/image";
import { getProdutosByLinha } from "@/api/getProdutosByLinha";
import { Card } from "@/components/Card";

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
			<section className="relative h-[70vh] w-full">
				<div className="container h-full">
					<div className="relative z-30 grid grid-cols-2 gap-8 h-full items-center">
						<div className="mt-28 relative h-[450px]">
							<Image
								src={banner.linhas.imagemBannerInterno.node.mediaItemUrl}
								alt={banner.name}
								fill
								objectFit="cover"
							/>
						</div>
						<div className="flex flex-col gap-5">
							<h1 className="font-bold text-4xl uppercase">LINHA <br /> <span className="text-7xl text-[#DF0209] italic">{banner.name}</span></h1>
							<p>{banner.linhas.textoSobreALinhaDeProdutos}</p>
						</div>
					</div>
				</div>
			</section>
			<section className="mb-24">
				<h2 className="text-center text-5xl font-bold pb-6">
					Baterias da linha
				</h2>
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