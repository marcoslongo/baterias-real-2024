import { getCategoriasProdutos } from "@/app/api/getCategoriasProdutos";
import { Card } from "./Card";
import { CategoriasData } from "@/@types/CategoriasProdutos";

export async function ProdutosHome() {
  const categoriaData: CategoriasData = await getCategoriasProdutos();

  return (
    <section>
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
          {categoriaData.categoriasProdutos.edges.map((categoria) => (
            <>
              {categoria.node.linhas.exibirEssaCategoriaNaHomePage && (
                <Card
                  key={categoria.node.id}
                  name={categoria.node.name}
                  imageBatery={categoria.node.linhas.bateria.node.mediaItemUrl}
                  bgBatery={categoria.node.linhas.bannerDaCategoria.node.mediaItemUrl}
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
