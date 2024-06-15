import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaLocationDot } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-[#A60004] py-10 relative overflow-hidden">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
        <div className="flex flex-col gap-6">
          <Image
            src={"/assets/images/logo-negativa.svg"}
            alt="alt"
            width={134}
            height={250}
          />
          <h2 className="text-white">
            © Baterias Real LTDA - 2024 Todos os Direitos Reservados
          </h2>
        </div>
        <div className="flex flex-col gap-2 text-white">
          <h2 className="font-semibold text-2xl">Contato</h2>
          <div className="flex flex-col gap-6">
            <Link className="flex items-center gap-2 hover:underline" href="href">
              <FaPhone className="flex" size={16} />
              (46) 3543-1178
            </Link>
            <Link className="flex flex-wrap items-center gap-2 hover:underline" href="href">
                <div>
                    <FaLocationDot size={16} />
                </div>
                <h3 className="w-4/5">
                    Rodovia PR 182 - KM 463,7 Bairro Industrial CEP: 85770-000 - Realeza - PR
                </h3>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-white">
            <h2 className="font-semibold text-2xl">Linha de Baterias</h2>
            <ul className="flex flex-col gap-1">
                <LinkMenu>Linha Evolution</LinkMenu>
                <LinkMenu>Linha Gold</LinkMenu>
                <LinkMenu>Linha EFB</LinkMenu>
                <LinkMenu>Linha Convencional</LinkMenu>
                <LinkMenu>Linha Ecológica</LinkMenu>
                <LinkMenu>Linha Free</LinkMenu>
            </ul>
        </div>
        <div className="flex flex-col gap-2 text-white">
            <h2 className="font-semibold text-2xl">Navegação</h2>
            <ul className="flex flex-col gap-1">
                <LinkMenu>Nossa História</LinkMenu>
                <LinkMenu>Produtos</LinkMenu>
                <LinkMenu>Downloads</LinkMenu>
                <LinkMenu>Trabalhe Conosco</LinkMenu>
            </ul>
        </div>
      </div>
      <Image
        src={'/assets/images/raio.webp'}
        alt="alt"
        width={245}
        height={352}
        className="absolute right-3 top-0"
      />
    </footer>
  );
}
interface LinkMenuProps {
    children: React.ReactNode;
}

function LinkMenu({children}:LinkMenuProps){
    return(
        <li><Link className="hover:underline text-base" href="href">{children}</Link></li>
    );
}