import { Banner } from "@/components/layout/produtos/Banner";
import { DisplayProducts } from "@/components/layout/produtos/DisplayProducts";


export default function LinhaEvolution() {
    const category = "dGVybToy";

    return (
        <main>
            <Banner category={category} />
            <DisplayProducts category={category} />
        </main>
    );
}