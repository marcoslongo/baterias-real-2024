import { Banner } from "@/components/layout/produtos/Banner";
import { DisplayProducts } from "@/components/layout/produtos/DisplayProducts";


export default function LinhaEcologica() {
    const category = "dGVybToz";

    return (
        <main>
            <Banner category={category} />
            <DisplayProducts category={category} />
        </main>
    );
}