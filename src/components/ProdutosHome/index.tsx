import { Card } from "./Card";

export function ProdutosHome() {
  return (
    <section>
      <div className="container py-10">
        <div className="grid grid-cols-3 gap-7">
          <Card name={"EVOLUTION"} imageBatery={"/assets/images/bateria-amarela.webp"} bgBatery={"/assets/images/evolution.webp"} />
          <Card name={"EVOLUTION"} imageBatery={"/assets/images/bateria-amarela.webp"} bgBatery={"/assets/images/evolution.webp"} />
          <Card name={"EVOLUTION"} imageBatery={"/assets/images/bateria-amarela.webp"} bgBatery={"/assets/images/evolution.webp"} />
          <Card name={"EVOLUTION"} imageBatery={"/assets/images/bateria-amarela.webp"} bgBatery={"/assets/images/evolution.webp"} />
          <Card name={"EVOLUTION"} imageBatery={"/assets/images/bateria-amarela.webp"} bgBatery={"/assets/images/evolution.webp"} />
          <Card name={"EVOLUTION"} imageBatery={"/assets/images/bateria-amarela.webp"} bgBatery={"/assets/images/evolution.webp"} />
        </div>
      </div>
    </section>
  );
}
