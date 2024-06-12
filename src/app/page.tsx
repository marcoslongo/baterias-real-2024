import { Banner } from "@/components/layout/home/Banner";
import { Certificacoes } from "@/components/layout/home/Certificacoes";
import { Depoimentos } from "@/components/layout/home/Depoimentos";
import { Ecologia } from "@/components/layout/home/Ecologia";
import { ProdutosHome } from "@/components/layout/home/ProdutosHome";

export default function Home() {
  return (
    <main>
      <Banner />
      <ProdutosHome />
      <Ecologia />
      <Depoimentos />
      <Certificacoes />
    </main>
  );
}
