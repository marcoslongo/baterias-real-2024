import Image from "next/image";
import Link from "next/link";

interface CardProps {
  name: string;
  imageBatery: string;
  href: string
}

export function Card({ name, imageBatery, href }: CardProps) {
  return (
    <div>
      <Link href={href} className="w-full flex flex-col transition">
        <div className="text-white flex flex-col justify-center items-center">
          <Image
            src={imageBatery}
            alt={name}
            width={250}
            height={75}
          />

        </div>
        <h2 className="font-semibold text-xl text-black">
          linha <br /> <span className="text-[2rem] font-extrabold uppercase">{name}</span>
        </h2>
      </Link>
    </div>
  );
}
