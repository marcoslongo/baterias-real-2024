"use client"
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Card } from './Card';
import { getDepoimentos } from '@/api/getDepoimentos';
import { DepoimentoData } from '@/@types/Depoimentos';


export function Depoimentos() {
  const [depoimentos, setDepoimentos] = useState<DepoimentoData[]>([]);

  useEffect(() => {
    const fetchDepoimentos = async () => {
      try {
        const data = await getDepoimentos();
        setDepoimentos(data);
      } catch (error) {
        console.error('Erro ao buscar depoimentos:', error);
      }
    };

    fetchDepoimentos();
  }, []);

  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-center text-6xl font-bold">Depoimentos</h2>
        <Swiper
          slidesPerView={3}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop={true}
        >
          {depoimentos.map((depoimento) => (
            <SwiperSlide key={depoimento.node.id}>
              <Card
                name={depoimento.node.title}
                text={depoimento.node.depoimentos.depoimento}
                image={depoimento.node.depoimentos.foto.node.mediaItemUrl}
                citystate={depoimento.node.depoimentos.cidadeEstado}
                company={depoimento.node.depoimentos.empresa}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
