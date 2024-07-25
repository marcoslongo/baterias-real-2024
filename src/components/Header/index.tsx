"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "./Menu";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
import { MenuMobile } from "./Menumobile";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div onClick={toggleNav} className="flex lg:hidden text-black absolute right-5 top-10 z-[60]">
        {isOpen ? (
          <IoCloseOutline size={40} />
        ) : (
          <IoMenuOutline size={40} />
        )}
      </div>
      <MenuMobile isOpen={isOpen} />
      <header className="w-full bg-white shadow-md relative z-40">
        <div className="container flex justify-between items-center py-7">
          <Link href="/">
            <Image
              width={122}
              height={60}
              src={"/assets/images/logo.svg"}
              alt="Baterias Real"
              priority
            />
          </Link>
          <Menu />
        </div>
      </header>
    </>
  );
}