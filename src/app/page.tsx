import { Banner } from "@/components/Banner";
import { Certificacoes } from "@/components/Certificacoes";
import { Ecologia } from "@/components/Ecologia";

export default function Home() {
  return (
    <main>
      <Banner/>
      <Ecologia/>
      <Certificacoes/>
    </main>
  );
}
