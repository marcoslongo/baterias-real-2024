import Image from "next/image";
import Link from "next/link";
import { BsLightningChargeFill } from "react-icons/bs";

export function Banner() {

  return (
    <section className="relative h-[900px] md:h-[670px] w-full">
      <div className="container h-full flex items-start md:items-center">
        <div className="w-full lg:w-3/5 relative z-30 flex gap-6 flex-col items-center mt-12 md:mt-0">
          <h2 className="text-5xl text-white lg:text-black md:text-6xl text-center md:text-left font-bold leading-none mb-14">
            Para longas jornadas, muito mais
            <span className="text-[#E7C000] lg:text-[#DF0209]"> energia</span>
          </h2>
          <Image
            width={409}
            height={196}
            alt="Banner home mobile"
            priority
            src={"/assets/images/banner-mobile.webp"}
            className="flex md:hidden"
          />
          <p className="text-sm lg:text-base text-center md:text-left md:pr-12">
            Com 44 anos de história, a Baterias Real oferece qualidade inigualável e energia duradoura para todos os desafios. Nossas linhas de baterias leves e pesadas são desenvolvidas para atender cada necessidade com a solução perfeita em acumuladores de energia automotiva. Seja para veículos leves ou para os maiores desafios em transporte e maquinário, a Baterias Real está ao seu lado com tecnologia de ponta e desempenho superior.
          </p>
          <h1 className="text-xl font-bold text-center md:text-left">
            Baterias Real. Seu Destino, Nossa Energia!
          </h1>
          <div className="flex justify-center md:justify-start">
            <Link href="/bateria-ideal" className="flex bg-[#DF0209] transition font-semibold text-white px-4 py-2 items-center gap-2 rounded-md border border-[#DF0209] hover:bg-transparent hover:text-[#DF0209]">
              Encontre a bateria ideal para você
              <BsLightningChargeFill size={20} />
            </Link>
          </div>
        </div>
      </div>
      <Image
        src={"/assets/images/baterias-home.webp"}
        alt="Banner home"
        width={800}
        height={500}
        className="hidden md:block absolute right-0 z-20 top-40"
        priority
      />

      <div className="w-full h-[480px] absolute top-0 bg-[#A60004] rounded-b-[280px] shadow-sm">
        <Image          
          src={"/assets/images/raio-line.webp"}
          alt="alt"
          priority
          width={220}
          height={288}
          className="absolute right-[50px] top-8"
        />
      </div>
      <Image
        className="w-full h-full absolute z-10 hidden md:block"
        src={"/assets/images/bg-banner-home.webp"}
        alt="alt"
        fill
        objectFit="cover"
        priority
      />
    </section>
  );
}
