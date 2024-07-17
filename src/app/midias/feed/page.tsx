import { getMidias } from "@/api/getMidias";
import Image from "next/image";
import Link from "next/link";


export default async function Feed() {
	const feed = await getMidias();
	return (
		<main className="py-40">
			<div className="container">
				<div className="grid grid-cols-3 gap-7">
					{feed.map((post: any) => (
						(post.node.camposMidias.adicionarMidia === 'Feed') && (
							<div key={post.node.id}>
								<figure className="relative w-full h-[400px]">
									<Image
										src={post.node.camposMidias.imagemFeed.node.mediaItemUrl}
										alt={post.node.camposMidias.imagemFeed.node.mediaItemUrl}
										fill
										objectFit="cover"
									/>
								</figure>
								<Link href={post.node.camposMidias.imagemFeed.node.mediaItemUrl} download>
									baixar
								</Link>
							</div>
						)
					))}
				</div>
			</div>
		</main>
	);
}