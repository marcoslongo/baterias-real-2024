import { Banner } from "@/components/layout/produtos/Banner";
import { DisplayProducts } from "@/components/layout/produtos/DisplayProducts";


export default function LinhaFree() {
    const category = "dGVybTo1";

    return (
        <main>
            <Banner category={category} />
            <DisplayProducts category={category} />
        </main>
    );
}