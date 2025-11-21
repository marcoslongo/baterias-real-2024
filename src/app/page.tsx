import { Banner } from "@/components/layout/home/Banner";
import { Certificacoes } from "@/components/layout/home/Certificacoes";
import { Depoimentos } from "@/components/layout/home/Depoimentos";
import { Ecologia } from "@/components/layout/home/Ecologia";
import { ProdutosHome } from "@/components/layout/home/ProdutosHome";
import { BASE_URL } from "@/constants/baseUrl";

export async function generateMetadata() {
	return {
		title: 'Baterias Real - Para longas jornadas muito mais energia',
		description: 'Com 45 anos de história, a Baterias Real oferece qualidade inigualável e energia duradoura para todos os desafios. Nossas linhas de baterias leves e pesadas são desenvolvidas para atender cada necessidade com a solução perfeita em acumuladores de energia automotiva. Seja para veículos leves ou para os maiores desafios em transporte e maquinário, a Baterias Real está ao seu lado com tecnologia de ponta e desempenho superior.',
		alternates: {
			canonical: `${BASE_URL}`,
		},
	};
}

export default function Home() { 
  return (
    <main>
      <Banner />
      <ProdutosHome/>
      <Ecologia />
      <Depoimentos />
      <Certificacoes />
    </main>
  );
}
