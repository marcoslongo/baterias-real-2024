import { Banner } from "./Banner";
import Representantes from "./MapaAtuacao";

export default function MapaAtuacao(){
    return(
        <main className="pt-28 pb-40">
            <Banner />
            <Representantes />
        </main>
    );
}