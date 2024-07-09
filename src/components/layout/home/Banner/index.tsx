import Image from "next/image";
import Link from "next/link";
import { BsLightningChargeFill } from "react-icons/bs";

export function Banner() {
  return (
    <section className="relative h-[90vh] w-full">
      <div className="container h-full flex items-center">
        <div className="w-full lg:w-3/5 relative z-30 flex gap-6 flex-col mt-0 md:mt-[100px]">
          <h2 className="text-4xl md:text-6xl text-center md:text-left font-bold leading-none">
            Para longas jornadas muito mais
            <span className="text-[#DF0209]"> energia</span>
          </h2>
          <p className="text-xl text-center md:text-left pr-12">
            Com a nossa linha pesada, seu bruto terá muito mais energia para
            vencer os desafios do dia a dia na estrada.Confie em que está a 44
            anos gerando energia com qualidade.
          </p>
          <h1 className="text-xl font-bold">
            Baterias Real. Seu Destino, Nossa Energia!
          </h1>
          <div className="flex justify-center md:justify-start">
            <Link href="" className="flex bg-[#DF0209] transition font-semibold text-white px-4 py-2 items-center gap-2 rounded-md border border-[#DF0209] hover:bg-transparent hover:text-[#DF0209]">
              Conheça nossas baterias
              <BsLightningChargeFill size={20} />
            </Link>
          </div>
        </div>
      </div>
      <Image
        src={"/assets/images/baterias-home.webp"}
        alt="alt"
        width={920}
        height={500}
        className="absolute right-0 z-20 top-1/3"
        priority
      />
      <Image
        className="w-full h-full absolute object-cover z-10"
        src={"/assets/images/bg-banner-home.webp"}
        alt="alt"
        fill
        objectFit="cover"
        priority
      />
    </section>
  );
}
