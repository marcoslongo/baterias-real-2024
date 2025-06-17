"use client"
import { TestemunhoData } from "@/@types/Testemunhos";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Card } from './Card';
import { getTestemunhos } from "@/queries/getTestemunhos";


export function Depoimentos() {
  const [testemunho, setTestemunho] = useState<TestemunhoData[]>([]);

  useEffect(() => {
    const fetchDepoimentos = async () => {
      try {
        const data = await getTestemunhos();
        setTestemunho(data);
      } catch (error) {
        console.error('Erro ao buscar depoimentos:', error);
      }
    };

    fetchDepoimentos();
  }, []);


  return (
    <section className="pt-20">
      <div className="flex flex-col gap-1">
        <h2 className="text-center text-4xl lg:text-5xl font-bold">A voz dos nossos colaboradores</h2>
        <h2 className="text-center">Experiências compartilhadas por quem faz a diferença!</h2>
      </div>
      <Swiper
        slidesPerView={2}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop={false}
        breakpoints={{
          1024: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {testemunho.map((depoimento) => (
          <SwiperSlide key={depoimento.node.id}>
            <Card
              name={depoimento.node.title}
              text={depoimento.node.testemunhos.depoimento}
              image={depoimento.node.testemunhos.foto.node.mediaItemUrl}
              time={depoimento.node.testemunhos.tempoDeEmpresa}
              sector={depoimento.node.testemunhos.departamento}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
