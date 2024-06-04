import { ProdutosData } from "@/@types/Produtos";
import { getProdutos } from "@/api/getProdutos";
import Image from "next/image";

export default async function Produtos() {
    const produtos: ProdutosData[] = await getProdutos();

    return (
        <main className="py-40">
            <div className="container">
                <div className="grid grid-cols-3 gap-5">
                    {produtos.map((item, index) =>
                        <div key={index}>
                            {item.node.title}
                            <Image
                                alt={item.node.title}
                                src={item.node.produtos.imageDoProduto.node.mediaItemUrl}
                                width={200}
                                height={200}
                            />
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
