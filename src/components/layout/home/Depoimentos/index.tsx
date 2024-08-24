'use client'
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Card } from './Card';
import { getDepoimentos } from '@/app/api/getDepoimentos';
import { DepoimentoData } from '@/@types/Depoimentos';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Depoimentos() {
  const [depoimentos, setDepoimentos] = useState<DepoimentoData[]>([]);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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
      <motion.div
        ref={ref}
        className="container"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <div className='flex flex-col gap-3'>
          <h2 className="text-center text-4xl md:text-6xl font-bold">Depoimentos</h2>
          <p className='text-center text-base md:text-lg'>Vozes de quem confia no nosso trabalho, histórias de sucesso e satisfação.</p>
        </div>
        <Swiper
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            1024: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            },
          }}
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
      </motion.div>
    </section>
  );
}
