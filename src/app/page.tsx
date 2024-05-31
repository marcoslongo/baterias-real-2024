import { Banner } from "@/components/Banner";
import { Certificacoes } from "@/components/Certificacoes";
import { Depoimentos } from "@/components/Depoimentos";
import { Ecologia } from "@/components/Ecologia";
import { ProdutosHome } from "@/components/ProdutosHome";

export default function Home() {
  return (
    <main>
      <Banner/>
      <ProdutosHome/>
      <Ecologia/>
      <Depoimentos/>
      <Certificacoes/>
    </main>
  );
}
