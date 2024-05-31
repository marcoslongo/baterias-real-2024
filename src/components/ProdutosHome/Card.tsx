import Image from "next/image";
import Link from "next/link";

interface CardProps {
  name: string;
  imageBatery: string;
  bgBatery: string;
}

export function Card({name,imageBatery,bgBatery}:CardProps) {
  return (
    <Link href="href" className="w-full h-[200px] flex relative transition hover:scale-105">
      <div className="relative z-10 text-white py-7 px-8 flex flex-col gap-4">
        <Image
            src={imageBatery}
            alt="alt"
            width={104}
            height={55}
        />
        <h2 className="font-semibold text-xl">
          LINHA <br /> <span className="italic text-3xl">{name}</span>
        </h2>
      </div>
      <Image
        src={bgBatery}
        alt="alt"
        fill
        className="rounded-2xl transition shadow-lg hover:shadow-xl"
      />
    </Link>
  );
}
