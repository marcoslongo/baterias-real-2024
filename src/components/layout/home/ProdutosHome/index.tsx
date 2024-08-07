import { getCategoriasProdutos } from "@/app/api/getCategoriasProdutos";
import { Card } from "./Card";
import { CategoriasData } from "@/@types/CategoriasProdutos";

export async function ProdutosHome() {
  const categoriaData: CategoriasData = await getCategoriasProdutos();

  return (
    <section>
      <div className="container py-10 flex flex-col gap-8">
        <h2 className="text-center text-3xl font-semibold">Baterias Real. Seu Destino, <span className="font-bold">Nossa Energia!</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {categoriaData.categoriasProdutos.edges.map((categoria) => (
            <>
              {categoria.node.linhas.exibirEssaCategoriaNaHomePage && (
                <Card
                  key={categoria.node.id}
                  name={categoria.node.name}
                  imageBatery={categoria.node.linhas.bateria.node.mediaItemUrl}
                  href={`/produtos/${categoria.node.slug}`}
                />
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
