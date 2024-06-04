import { ProdutosData } from "@/@types/Produtos";
import { getProdutos } from "@/api/getProdutos";

export default async function Produtos() {
    const produtos: ProdutosData[] = await getProdutos();
    
    return (
        <main className="py-40">
            <div className="container">
                <div className="flex gap-5">
                    <aside className="w-1/4">
                        <ul>
                            <li>item</li>
                            <li>item</li>
                            <li>item</li>
                            <li>item</li>
                            <li>item</li>
                        </ul>
                    </aside>
                    <div className="w-3/4">
                        
                    </div>
                </div>
            </div>
        </main>
    );
}