'use client'
import { useState, useEffect, useCallback } from 'react';

const words = ['energia', 'confiabilidade', 'força', 'potência'];

export function TextFade() {
  const [showText, setShowText] = useState(false);
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [animClass, setAnimClass] = useState('');

  const updateWord = useCallback(() => {
    setAnimClass('animate-fadeOutUp');
    setTimeout(() => {
      setCurrentWord((prevWord) => {
        const currentIndex = words.indexOf(prevWord);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
      setAnimClass('animate-fadeInUp');
    }, 1000);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 500);

    const wordInterval = setInterval(() => {
      updateWord();
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(wordInterval);
    };
  }, [updateWord]);

  return (
    <div className='z-30 relative'>
      <div className='container justify-center items-center flex flex-col gap-4'>
        {showText && (
          <h1 className='text-white text-6xl font-bold text-center animate-fadeInUp'>
            Para longas jornadas, <br /> muito mais <span className={`text-[#A60004] ${animClass}`}>{currentWord}</span>
          </h1>
        )}
        <div className='w-2/3 text-center'>
          <p className='text-white'>Com 44 anos de história, a Baterias Real fornece baterias de alta qualidade para todos os desafios. Nossas soluções atendem desde veículos leves até grandes maquinários, com tecnologia avançada e desempenho superior.</p>
        </div>
        <div className="flex justify-center md:justify-start">
          <a className="flex bg-[#DF0209] transition font-semibold text-white px-4 py-2 items-center gap-2 rounded-md border border-[#DF0209] hover:bg-transparent hover:text-[#DF0209]" href="/seja-um-revendedor">Seja um Revendedor</a></div>
      </div>
    </div>
  );
}
