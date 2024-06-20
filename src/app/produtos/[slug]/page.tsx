import { DisplayProducts } from "../DisplayProducts";

interface PageProdutosProps {
    params: {
        slug: string;
    };
}

export default function PageProdutos({ params: { slug } }: PageProdutosProps) {    
    return (
        <main>
            <DisplayProducts slug={slug}/>
        </main>
    );
}