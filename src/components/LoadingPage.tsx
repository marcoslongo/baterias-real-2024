import React from 'react';
import { BsLightningFill } from 'react-icons/bs';

export function LoadingPage() {
  return (
    <div className="h-[70vh] flex flex-col items-center justify-center">
      <BsLightningFill
        className="text-[#DF0209] cursor-pointer animate-upDown"
        size={100}
      />
      <h2 className="animate-pulse text-2xl font-bold">Carregando...</h2>
    </div>
  );
}
