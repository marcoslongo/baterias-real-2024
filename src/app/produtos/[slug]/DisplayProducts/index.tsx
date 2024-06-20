import Image from "next/image";
import { getBannerInternoProdutos } from "@/api/getBannerInternoProdutos";
import { getId } from "@/api/getId";
import { getProdutosByLinha } from "@/api/getProdutosByLinha";
import { Card } from "@/components/Card";

interface DisplayProductsProps {
    slug: string;
}

export async function DisplayProducts({ slug }: DisplayProductsProps) {
    const data = await getProdutosByLinha(slug);
    const produtos = data.edges[0].node.produtos.edges;
    const category = data.edges[0].node.id;
    const dataBanner = await getBannerInternoProdutos({ category });
    return (
        <>
            <section className="relative h-[70vh] w-full">
                <div className="container h-full">
                    <div className="relative z-30 grid grid-cols-2 gap-8 h-full items-center">
                        <div className="mt-28 relative h-[450px]">
                            <Image
                                src={dataBanner.linhas.imagemBannerInterno.node.mediaItemUrl}
                                alt={dataBanner.name}
                                fill
                                objectFit="cover"
                            />
                        </div>
                        <div className="flex flex-col gap-5">
                            <h1 className="font-bold text-4xl uppercase">LINHA <br /> <span className="text-7xl text-[#DF0209] italic">{dataBanner.name}</span></h1>
                            <p>{dataBanner.linhas.textoSobreALinhaDeProdutos}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-24">
                <h2 className="text-center text-5xl font-bold pb-6">
                    Baterias da linha
                </h2>
                <div className="container grid grid-cols-3 gap-8">
                    {produtos.map((produto: any) => (
                        <Card
                            key={produto.node.id}
                            name={produto.node.title}
                            image={produto.node.produtos.imageDoProduto.node.mediaItemUrl}
                            id={produto.node.id}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}
