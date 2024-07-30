import Image from "next/image";

interface BannerProps {
  image: string;
  title: string;
  text: string;
}

export function Banner({ image, title, text }: BannerProps) {
  return (
    <div className="relative w-full min-h-[525px] mb-10 flex items-center bg-white">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-32">
        <div className="flex flex-col gap-4 justify-center text-center lg:text-start">
          <h1 className="font-bold text-5xl lg:text-6xl mt-8 lg:mt-0" dangerouslySetInnerHTML={{ __html: title }}></h1>
          <p className="text-base lg:text-xl" dangerouslySetInnerHTML={{ __html: text }}></p>
        </div>
        <div className="flex justify-center lg:justify-normal">
          <Image
            width={684}
            height={414}
            src={image}
            alt=""
            priority
          />
        </div>
      </div>
    </div>
  );
}