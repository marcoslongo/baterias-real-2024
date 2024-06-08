"use client";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { Menu } from "./Menu";

export function Header() {
  return (
    <>
      <header className="w-full absolute z-40 bg-white shadow-md">
        <div className="container flex justify-between items-center py-7">
          <Link href="/">
            <Image
              width={122}
              height={60}
              src={"assets/images/logo.svg"}
              alt="Baterias Real"
            />
          </Link>
          <Menu/>
          <Link
            href="/"
            className="flex items-center gap-3 border border-[#DF0209] transition px-4 py-2 rounded-xl text-[#DF0209] hover:bg-[#DF0209] hover:text-white"
          >
            Seja um Revendedor <FaArrowRightLong size={16} />
          </Link>
        </div>
      </header>
    </>
  );
}
