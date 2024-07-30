'use client';
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { useWindowSize } from '@/hooks/useWindowSize';

interface CardInfoProps {
  title: string;
  text: string;
}

export function CardInfo({ title, text }: CardInfoProps) {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState<boolean>(width >= 1024 ? false : true);

  useEffect(() => {
    setIsOpen(width <= 1024 ? false : true);
  }, [width]);

  const toggleItem = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  const renderHTML = (html: string) => {
    return { __html: html };
  };

  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-bold text-2xl flex gap-2 items-center"
        onClick={toggleItem} >
        {title}
        <FaChevronDown
          size={16}
          className={`block lg:hidden text-[#DF0209] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </h2>
      {isOpen && <div dangerouslySetInnerHTML={renderHTML(text)} />}
    </div>
  );
}
