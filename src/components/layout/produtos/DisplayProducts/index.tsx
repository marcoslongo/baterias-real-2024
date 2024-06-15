import { getProdutos } from "@/api/getProdutos";
import { Card } from "@/components/Card";

interface DisplayProductsProps {
    category: string;
}

export async function DisplayProducts({ category }: DisplayProductsProps) {
    const data = await getProdutos({ category });

    return (
        <section className="mb-24">
            <h2 className="text-center text-5xl font-bold pb-6">
                Baterias da linha
            </h2>
            <div className="container grid grid-cols-3 gap-8">
                {data.map((produto: any) => (
                    <Card
                        key={produto.node.id}
                        name={produto.node.title}
                        image={produto.node.produtos.imageDoProduto.node.mediaItemUrl}
                        id={produto.node.id}
                    />
                ))}
            </div>
        </section>
    );
}
