import { getProdutos } from "@/api/getProdutos";
import { Card } from "@/components/Card";

export async function DisplayProducts() {
    const data = await getProdutos();
    console.log(data);

    return (
        <section className="py-9">
            <h2 className="text-center text-5xl font-bold py-6">Baterias da linha <span className="text-[#DF0209]">EFB</span></h2>
            <div className="container grid grid-cols-3 gap-8">
                {data.map((produto: any) => (                        
                    <Card name={produto.node.title} image={produto.node.produtos.imageDoProduto.node.mediaItemUrl} id={produto.node.id}/>
                ))}
            </div>
        </section>
    );
}
