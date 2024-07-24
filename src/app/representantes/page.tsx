import { BASE_URL } from "@/constants/baseUrl";
import { Banner } from "./Banner";
import Representantes from "./MapaAtuacao";


export async function generateMetadata() {
	return {
		title: 'Baterias Real - Representantes',
		description: 'Confira nosso mapa de atuação, encontre o representante mais próximo de você e tenha nossos produtos em sua loja.',
		alternates: {
			canonical: `${BASE_URL}/representantes`,
		},
	};
}

export default function MapaAtuacao() {
	return (
		<main className="pb-40">
			<Banner />
			<Representantes />
		</main>
	);
}