import Image from "next/image";
import Link from "next/link";

interface CardProps {
  name: string;
  imageBatery: string;
  bgBatery: string;
  href: string
}

export function Card({ name, imageBatery, bgBatery, href }: CardProps) {
  return (
    <Link href={href} className="w-full h-[400px] flex relative transition hover:scale-105">
      <div className="relative z-10 text-white pt-4 pl-10 flex flex-col justify-center">
        <Image
          src={imageBatery}
          alt={name}
          width={150}
          height={75}
        />
        <h2 className="font-semibold text-2xl">
          LINHA <br /> <span className="italic text-[2rem]">{name}</span>
        </h2>
      </div>
      <Image
        src={bgBatery}
        alt={name}
        fill
        className="rounded-2xl transition shadow-lg hover:shadow-xl object-cover"
      />
    </Link>
  );
}
