import DiplayPosts from "./DisplayPosts";
import { BASE_URL } from "@/constants/baseUrl";
import { Banner } from "@/components/layout/midias/Banner";

export async function generateMetadata() {
	return {
		title: 'Baterias Real - Mídias para o Seu Feed',
		description: 'Oferecemos posts elaborados para que você, revendedor, tenha material de alta qualidade para apoiar suas vendas. Nossos conteúdos engajam seu público e aumentam a visibilidade da sua marca, facilitando o marketing do seu negócio.',
		alternates: {
			canonical: `${BASE_URL}/midias/feed`,
		},
	};
}

export default async function Feed() {
	return (
		<main className="pb-40">
			<Banner 
        image='/assets/images/midias.webp'
        title={`Mídias para o <br /> Seu Feed`}
        text={`Oferecemos posts elaborados para que você, revendedor, tenha material de alta qualidade para apoiar suas vendas. Nossos conteúdos engajam seu público e aumentam a <span class="font-bold text-[#DF0209]">visibilidade</span> da sua marca, facilitando o marketing do <span class="font-bold text-[#DF0209]">seu negócio</span>.`}
      />
			<DiplayPosts />
		</main>
	);
}
