
import { getMidias } from "@/app/api/getMidias";
import { DownloadFile } from "@/components/DownloadFile";
import Image from "next/image";


export default async function Feed() {
	const feed = await getMidias();
	return (
		<main className="pt-28 pb-40">
			<div className="relative w-full min-h-[525px] mb-10 flex items-center bg-white">
				<div className="container flex justify-between">
					<div className="w-2/5 flex flex-col gap-4 justify-center">
						<h1 className="font-bold text-6xl">Mídias para o Seus Storys</h1>
						<p className="text-xl">
							Oferecemos posts elaborados para que você, revendedor, tenha material de alta qualidade para apoiar suas vendas. Nossos conteúdos engajam seu público e aumentam a <span className="font-bold text-[#DF0209]">visibilidade</span> da sua marca, facilitando o marketing do <span className="font-bold text-[#DF0209]">seu negócio</span>.
						</p>
					</div>
					<Image
						width={684}
						height={414}
						src={'/assets/images/midias.webp'}
						alt=""
						priority
					/>
				</div>
			</div>
			<div className="container">
				<div className="grid grid-cols-3 gap-7">
					{feed.map((post: any) => (
						(post.node.camposMidias.adicionarMidia === 'Story') && (
							<div key={post.node.id}>
								<figure className="relative w-full h-[400px]">
									<Image
										src={post.node.camposMidias.imagemStory.node.mediaItemUrl}
										alt={post.node.camposMidias.imagemStory.node.mediaItemUrl}
										fill
										objectFit="cover"
									/>
								</figure>
								<div className="flex justify-center mt-4">
									<DownloadFile url={post.node.camposMidias.imagemStory.node.mediaItemUrl} />
								</div>
							</div>
						)
					))}
				</div>
			</div>
		</main>
	);
}