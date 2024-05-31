import Image from "next/image";

export default function Intitucional(){
    return(
        <main className="py-40">
            <div className="container">
                <article className="w-full flex flex-col gap-5">
                    <h1 className="font-bold text-4xl">Sobre a Empresa</h1>
                    <p>A Baterias Real nasceu comprometida em fornecer a seus clientes produtos de altíssima qualidade, visando atender suas necessidades e superar suas expectativas quando o assunto é baterias automotivas. Desde 1980 quando começou suas atividades na cidade de Realeza, localizada no sudoeste do Paraná.</p>
                    <figure className="w-full h-[210px] relative rounded-3xl overflow-hidden shadow-lg">
                        <Image
                            src={'/assets/images/fachada.webp'}
                            alt="alt"
                            fill
                        />
                    </figure>
                    <div className="flex mt-10">
                        <div className="flex flex-col gap-4 w-3/5">
                            <p>Com a reforma e revenda de baterias, passando por 1983 onde iniciou a fabricação de placas e expandiu sua revenda para toda essa região, chegando em 1991, ano em que expandiu por completo toda sua produção para as regiões sul, sudeste, centro-oeste e nordeste, abrangendo 19 estados de todo o país, sendo eles, Paraná, Bahia, Santa Catarina, Rio Grande do Sul, Mato Grosso, Mato Grosso do Sul, Goiás, Minas Gerais, Espírito Santo, São Paulo, Rio de Janeiro, Piauí, Ceará, Alagoas, Pernambuco, Paraíba, Rio Grande do Norte, Maranhão e Tocantins a empresa sempre esteve focada em atender os mais rigorosos padrões de controle de qualidade em todas suas etapas, desde a produção até a entrega em seus distribuidores.</p>
                            <p>Hoje, com seus 43 anos de experiência a Baterias Real é uma empresa reconhecida em todo o país.Sua imensa dedicação, investimento em tecnologia e cuidados com o meio-ambiente e seus colaboradores, fazem a diferença e se unem a história de inúmeros clientes e parceiros que confiam no trabalho e se somam a família Real.</p>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
}