'use client'
import Image from "next/image";
import Link from "next/link";
import { BsLightningChargeFill } from "react-icons/bs";
import { useWindowSize } from "@/hooks/useWindowSize"

export function Banner() {
  const { width } = useWindowSize();

  return (
    <div className='h-[630px] relative overflow-hidden flex items-center justify-center'>
      <h1 className='z-30 text-white text-6xl font-bold text-center'>
        Para longas jornadas, <br /> muito mais <span className='text-[#A60004]'>energia</span>
      </h1>
      <div className='bg-black w-full h-full top-0 left-0 absolute z-20 opacity-90'></div>
      <VideoBackground />
    </div>
  );
}
