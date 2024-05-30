import { Banner } from "@/components/Banner";
import { Certificacoes } from "@/components/Certificacoes";
import { Depoimentos } from "@/components/Depoimentos";
import { Ecologia } from "@/components/Ecologia";

export default function Home() {
  return (
    <main>
      <Banner/>
      <Ecologia/>
      <Depoimentos/>
      <Certificacoes/>
    </main>
  );
}
