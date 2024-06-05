import { CategoriasData } from "@/@types/CategoriasProdutos";
import { ProdutosData } from "@/@types/Produtos";
import { getCategoriasProdutos } from "@/api/getCategoriasProdutos";
import { getProdutos } from "@/api/getProdutos";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

export default async function Produtos() {
    const produtos: ProdutosData[] = await getProdutos();
    const categoriasData: CategoriasData = await getCategoriasProdutos();
    const categoriasProdutos = categoriasData.categoriasProdutos;

    return (
        <main className="py-40">
            <div className="container">
                <div className="mb-14">
                    <h1 className="font-bold text-4xl">Escolha a sua Bateria Ideal</h1>
                </div>
                <div className="flex gap-8">
                    <aside className="w-1/4">
                        <h2 className="font-bold text-2xl mb-4">Filtrar por Categoria</h2>
                        <ul className="flex flex-col gap-2">
                            <li className="flex gap-2 items-center"><Checkbox/>Categoria</li>
                            <li className="flex gap-2 items-center"><Checkbox/>Categoria</li>
                            <li className="flex gap-2 items-center"><Checkbox/>Categoria</li>
                            <li className="flex gap-2 items-center"><Checkbox/>Categoria</li>
                            <li className="flex gap-2 items-center"><Checkbox/>Categoria</li>
                        </ul>
                    </aside>
                    <div className="w-3/4 grid grid-cols-3 gap-12">
                        {produtos.map((item, index) => (
                            <div key={index}>
                                <h3 className="font-bold">{item.node.title}</h3>
                                <div className="relative w-full h-[320px]">
                                    <Image
                                        alt={item.node.title}
                                        src={item.node.produtos.imageDoProduto.node.mediaItemUrl}
                                        fill
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
