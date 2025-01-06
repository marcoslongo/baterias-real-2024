'use client'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Image from "next/image";

export function Ecologia() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="bg-white py-20">
      <div ref={ref} className="container flex items-center flex-col lg:flex-row gap-16">
        <motion.div
          className="w-1/3 h-[750px] hidden lg:flex relative shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Image
            src={"/assets/images/ecologia.webp"}
            alt=""
            fill
            className="rounded-2xl"
          />
        </motion.div>
        <motion.div
          className="w-full lg:w-2/3 flex gap-6 flex-col"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl md:text-6xl font-bold">Compromisso com a Natureza</h2>
            <p className="text-base md:text-lg">
              Na Baterias Real, nossa preocupação com o meio ambiente é uma prioridade. Implementamos uma política rigorosa de logística reversa, garantindo que nossas baterias sejam recolhidas, recicladas e descartadas de forma adequada. Nosso compromisso é reduzir o impacto ambiental, promovendo a sustentabilidade e a responsabilidade ecológica em cada etapa do processo. Através da logística reversa, contribuímos para um futuro mais verde e seguro para todos.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full lg:w-1/3 bg-[#A60004] rounded-3xl py-8 px-6 flex flex-col gap-5 justify-center">
              <Image
                src={"/assets/images/sustentavel.svg"}
                alt="alt"
                width={68}
                height={58}
              />
              <h3 className="font-bold text-white text-2xl">
                100% <br /> Reciclável
              </h3>
            </div>
            <div className="w-full lg:w-2/3 flex-col flex-wrap">
              <div className="bg-[#A60004] rounded-3xl flex items-center w-full py-8 px-6 gap-4 mb-4">
                <Image
                  src={"/assets/images/solar.svg"}
                  alt="alt"
                  width={68}
                  height={58}
                />
                <h3 className="font-bold text-white text-xl">
                  Produzido com <br /> Energia Solar
                </h3>
              </div>
              <div className="bg-[#A60004] rounded-3xl flex items-center w-full py-8 px-6 gap-4">
                <Image
                  src={"/assets/images/chuva.svg"}
                  alt="alt"
                  width={68}
                  height={58}
                />
                <h3 className="font-bold text-white text-xl">
                  Produzido com <br /> Água da chuva
                </h3>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
