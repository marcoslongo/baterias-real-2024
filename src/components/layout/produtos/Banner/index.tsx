import Image from "next/image";
import { BannerInterno } from "@/@types/BannerInterno";
import { getBannerInternoProdutos } from "@/api/getBannerInternoProdutos";

interface BannerProps {
  category: string;
}

export async function Banner({ category }: BannerProps) {
  const banner: BannerInterno = await getBannerInternoProdutos({category});

  return (
    <section className="relative h-[70vh] w-full">
      <div className="container h-full">
        <div className="relative z-30 grid grid-cols-2 gap-8 h-full items-center">
          <div className="mt-28 relative h-[450px]">
            <Image
              src={banner.linhas.imagemBannerInterno.node.mediaItemUrl}
              alt="alt"
              fill
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-4xl">LINHA <br /> <span className="text-7xl text-[#DF0209] italic">{banner.name}</span></h1>
            <p>{banner.linhas.textoSobreALinhaDeProdutos}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
