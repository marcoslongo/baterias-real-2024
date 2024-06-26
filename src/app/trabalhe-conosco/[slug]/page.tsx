import { getVagaBySlug } from "@/api/getVagaBySlug";

interface PageVagasProps {
    params: {
        slug: string;
    };
}

export default async function PageVaga({ params: { slug } }: PageVagasProps) {
    const vaga = await getVagaBySlug();
    
    return (
        <main className="py-40">
            <div className="container">
                {vaga.title}<br /><br /><br />
                {vaga.vagasDisponVeis.beneficios} <br /><br /><br />
                {vaga.vagasDisponVeis.descricao} <br /><br /><br />
                {vaga.vagasDisponVeis.requisitos} <br /><br /><br />
                {vaga.vagasDisponVeis.responsabilidades} <br /><br /><br />
            </div>
        </main>
    );
}