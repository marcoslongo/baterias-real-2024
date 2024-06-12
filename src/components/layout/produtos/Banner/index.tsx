import Image from "next/image";

export function Banner() {
  return (
    <section className="relative h-[70vh] w-full">
      <div className="container h-full">
        <div className="relative z-30 grid grid-cols-2 gap-8 h-full items-center">
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-4xl">LINHA <br /> <span className="text-7xl text-[#DF0209]">EFB</span></h1>
            <p>Sigla para “Enhanced Flooded Battery” (Bateria Inundada Aprimorada), essas são baterias bem conhecidas. A grande diferença delas para as tradicionais está, justamente, no termo “enhanced”, que remete a um mecanismo de funcionamento automatizado. <br />
            Isso contribui sobretudo para o sistema Start/Stop. Graças a essa bateria, esses carros “desligam” sozinhos após alguns segundos parados. No semáforo, por exemplo. E também sozinhos retornam após novos movimentos nos pedais.</p>
          </div>
          <div className="mt-24 relative h-[430px]">
            <Image
              src={"/assets/images/bateria-interna-temp.webp"}
              alt="alt"
              fill
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <Image
        className="w-full h-full absolute object-cover z-10"
        src={"/assets/images/bg-banner-home.webp"}
        alt="alt"
        fill
      />
    </section>
  );
}
