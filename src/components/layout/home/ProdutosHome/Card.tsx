import Image from "next/image";
import Link from "next/link";

interface CardProps {
  name: string;
  imageBatery: string;
  href: string
}

export function Card({ name, imageBatery, href }: CardProps) {
  return (
    <div className="rounded-lg mt-4 relative hover:mt-[-10px] bg-white transition-all hover:shadow-lg">
      <Link href={href} className="w-full flex flex-col relative bg-white p-4">
        <div className="text-white flex flex-col justify-center items-center">
          <Image
            src={imageBatery}
            alt={name}
            width={300}
            height={250}
          />

        </div>
        <h2 className="font-semibold text-xl text-black">
          linha <br /> <span className="text-[2rem] font-extrabold uppercase">{name}</span>
        </h2>
      </Link>
    </div>
  );
}
