import { useState, useEffect } from 'react';
import VideoBackground from "./VideoBackground";
import { TextFade } from './TextFade';

export function Banner() {
  return (
    <div className='h-[630px] relative overflow-hidden flex items-center justify-center'>
      <TextFade />
      <div className='bg-black w-full h-full top-0 left-0 absolute z-20 opacity-95'></div>
      <VideoBackground />
    </div>
  );
}