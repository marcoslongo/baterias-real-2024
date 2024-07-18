
import Image from "next/image";
import DisplayPosts from "./DisplayPosts";


export default async function Feed() {
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
			<DisplayPosts/>
		</main>
	);
}