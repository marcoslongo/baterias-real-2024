'use client'
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { BsLightningFill } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';

const words = ['energia', 'confiabilidade', 'força', 'potência'];

export function TextFade() {
  const [currentWord, setCurrentWord] = useState(words[0]);

  const updateWord = useCallback(() => {
    setCurrentWord((prevWord) => {
      const currentIndex = words.indexOf(prevWord);
      const nextIndex = (currentIndex + 1) % words.length;
      return words[nextIndex];
    });
  }, []);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      updateWord();
    }, 3000);

    return () => {
      clearInterval(wordInterval);
    };
  }, [updateWord]);

  return (
    <motion.div
      className='z-30 relative'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <div className='justify-center items-center flex flex-col gap-4'>
        <h1 className='text-white text-5xl md:text-6xl font-bold text-center'>
          Para longas jornadas, <br /> muito mais{' '}
          <AnimatePresence mode="wait">
            <motion.span
              key={currentWord}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className='text-[#A60004]'
            >
              {currentWord}
            </motion.span>
          </AnimatePresence>
        </h1>

        <div className='w-full px-3 md:w-[50%] text-center'>
          <p className='text-white'>
            Com 44 anos de história, a Baterias Real fornece baterias de alta qualidade para todos os desafios. Nossas soluções atendem desde veículos leves até grandes maquinários, com tecnologia avançada e desempenho superior.
          </p>
        </div>
        <div className="flex justify-center md:justify-start">
          <Link className="flex bg-[#DF0209] transition font-semibold text-white px-4 py-2 items-center gap-2 rounded-md border border-[#DF0209] hover:bg-transparent hover:text-[#fff]" href="/seja-um-revendedor">
            Seja um Revendedor
            <BsLightningFill />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}