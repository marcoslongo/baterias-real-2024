'use client'
import Image from "next/image";
import Link from "next/link";
import { BsLightningChargeFill } from "react-icons/bs";
import { useWindowSize } from "@/hooks/useWindowSize"

export function Banner() {
  const { width } = useWindowSize();

  return (
    <section className="relative h-auto lg:h-[670px] w-full">
      <div className="container h-full flex items-start lg:items-center">
        <div className="w-full lg:w-3/5 relative z-30 flex gap-6 flex-col items-center lg:items-start mt-12 lg:mt-0">
          <h2 className="text-5xl text-white lg:text-black lg:text-6xl text-center lg:text-left font-bold leading-none">
            Para longas jornadas, muito mais
            <span className="text-[#E7C000] lg:text-[#DF0209]"> energia</span>
          </h2>
          <Image
            width={409}
            height={196}
            alt="Banner home mobile"
            priority
            src={"/assets/images/banner-mobile.webp"}
            className="flex lg:hidden sm:mb-12 mt-12"
          />
          <p className="text-sm lg:text-base text-center lg:text-left lg:pr-12">
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
        width={width > 1441 ? (800) : (600)}
        height={500}
        className="hidden lg:block absolute right-0 z-20 top-40"
        priority
      />

      <div className="w-full h-[480px] absolute top-0 bg-[#A60004] rounded-b-[280px] shadow-sm">
        <Image
          src={"/assets/images/raio-line.webp"}
          alt="alt"
          priority
          width={220}
          height={288}
          className="absolute right-0 top-8"
        />
      </div>
      <Image
        className="w-full h-full absolute z-10 hidden lg:block"
        src={"/assets/images/bg-banner-home.webp"}
        alt="alt"
        fill
        objectFit="cover"
        priority
      />
    </section>
  );
}
