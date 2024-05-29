import Link from "next/link";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

export function Header() {
  return (
    <header className="w-full fixed z-40 bg-white shadow-md">
      <div className="container flex justify-between items-center py-7 px-2 md:px-0">
        <Link href="href">
          <Image
            width={122}
            height={60}
            src={"assets/images/logo.svg"}
            alt="Baterias Real"
          />
        </Link>
        <nav className="flex gap-10 items-center">
          <ul className="flex gap-7">
            <MenuItem title="Sobre a Real" link="teste" />
            <MenuItem title="Produtos" link="teste" />
            <MenuItem title="Downloads" link="teste" />
            <MenuItem title="Representantes" link="teste" />
            <MenuItem title="Contato" link="teste" />
          </ul>
          <Link
            href="href"
            className="flex items-center gap-3 border border-[#DF0209] transition px-4 py-2 rounded-xl text-[#DF0209] hover:bg-[#DF0209] hover:text-white"
          >
            Seja um Revendedor <FaArrowRightLong size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}

interface MenuItemProps {
  title: string;
  link: string;
}

function MenuItem({ title, link }: MenuItemProps) {
  return (
    <li>
      <Link className="hover:text-[#DF0209] transition text-base" href={link}>
        {title}
      </Link>
    </li>
  );
}
