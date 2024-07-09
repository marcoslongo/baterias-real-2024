"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "./Menu";
import { MenuMobile } from "./Menumobile";

export function Header() {
  return (
    <>
      <header className="w-full absolute z-40 bg-white shadow-md">
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
          <MenuMobile />
          <Menu />
        </div>
      </header>
    </>
  );
}
