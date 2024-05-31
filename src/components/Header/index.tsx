"use client";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      <header className="w-full fixed z-40 bg-white shadow-md">
        <div className="container flex justify-between items-center py-7 px-2 md:px-0">
          <Link href="/">
            <Image
              width={122}
              height={60}
              src={"assets/images/logo.svg"}
              alt="Baterias Real"
            />
          </Link>
          <div
            className="cursor-pointer transition-all duration-300 md:hidden"
            onClick={toggleNav}
          >
            {isNavOpen ? (
              <IoMdClose className="text-4xl text-[#DF0209] transition-all duration-300" />
            ) : (
              <CiMenuFries className="text-4xl text-black transition-all duration-300" />
            )}
          </div>
          <nav className="hidden gap-10 items-center md:flex">
            <ul className="flex gap-7">
              <MenuItem title="Sobre a Real" link="teste" />
              <MenuItem title="Produtos" link="teste" />
              <MenuItem title="Downloads" link="teste" />
              <MenuItem title="Representantes" link="teste" />
              <MenuItem title="Contato" link="teste" />
            </ul>
            <Link
              href="/"
              className="flex items-center gap-3 border border-[#DF0209] transition px-4 py-2 rounded-xl text-[#DF0209] hover:bg-[#DF0209] hover:text-white"
            >
              Seja um Revendedor <FaArrowRightLong size={16} />
            </Link>
          </nav>
        </div>
      </header>
      <nav
        className={`flex transition-all duration-300 md:hidden md:pointer-events-none fixed w-[60%] h-full bg-[#DF0209] z-50 p-5 ${
          isNavOpen ? "left-0" : "left-[-2000px]"
        }`}
      >
        <ul className="w-full flex flex-col gap-4">
          <MenuItem title="Sobre a Real" link="teste" />
          <MenuItem title="Produtos" link="teste" />
          <MenuItem title="Downloads" link="teste" />
          <MenuItem title="Representantes" link="teste" />
          <MenuItem title="Contato" link="teste" />
        </ul>
      </nav>
    </>
  );
}

interface MenuItemProps {
  title: string;
  link: string;
}

function MenuItem({ title, link }: MenuItemProps) {
  return (
    <li>
      <Link className="text-white md:text-black hover:text-[#DF0209] transition text-base" href={link}>
        {title}
      </Link>
    </li>
  );
}
