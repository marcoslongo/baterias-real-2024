import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaLocationDot, FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-[#A60004] py-10 relative overflow-hidden">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
        <div className="flex gap-4 flex-col md:flex-row">
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
          <div className="flex flex-row md:flex-col gap-3">
            <Link target="_blank" className="text-[#A60004] transition hover:scale-105 bg-white rounded-full w-10 h-10 flex items-center justify-center" href={'https://www.facebook.com/bateriasrealltda'}><FaFacebookF size={22} /></Link>
            <Link target="_blank" className="text-[#A60004] transition hover:scale-105 bg-white rounded-full w-10 h-10 flex items-center justify-center" href={'https://www.instagram.com/bateriasreal/'}><FaInstagram size={22} /></Link>
            <Link target="_blank" className="text-[#A60004] transition hover:scale-105 bg-white rounded-full w-10 h-10 flex items-center justify-center" href={'https://wa.me/5546984073435'}><FaWhatsapp size={22} /></Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-white">
          <h2 className="font-semibold text-2xl">Contato</h2>
          <div className="flex flex-col gap-6">
            <Link className="flex items-center gap-2 hover:underline" href="tel:+554635431178">
              <FaPhone className="flex" size={16} />
              (46) 3543-1178
            </Link>
            <Link className="flex flex-wrap items-center gap-2 hover:underline" target="_blank" href="https://maps.app.goo.gl/VXVXL5kWCowtwWTJ8">
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
          <h2 className="font-semibold text-2xl">Linhas de Baterias</h2>
          <ul className="flex flex-col gap-1">
            <LinkMenu href={"/produtos/linha-evolution"}>Linha Evolution</LinkMenu>
            <LinkMenu href={"/produtos/linha-gold"}>Linha Gold</LinkMenu>
            <LinkMenu href={"/produtos/linha-efb"}>Linha EFB</LinkMenu>
            <LinkMenu href={"/produtos/linha-convencional"}>Linha Convencional</LinkMenu>
            <LinkMenu href={"/produtos/linha-ecologica"}>Linha Ecológica</LinkMenu>
            <LinkMenu href={"/produtos/linha-free"}>Linha Free</LinkMenu>
          </ul>
        </div>
        <div className="flex flex-col gap-2 text-white">
          <h2 className="font-semibold text-2xl">Navegação</h2>
          <ul className="flex flex-col gap-1">
            <LinkMenu href={"/institucional"}>Institucional</LinkMenu>
            <LinkMenu href={"/representantes"}>Representantes</LinkMenu>
            <LinkMenu href={"/fale-conosco"}>Fale conosco</LinkMenu>           
            <LinkMenu href={"/trabalhe-conosco"}>Trabalhe Conosco</LinkMenu>            
            <LinkMenu href={"/politica-de-privacidade"}>Política de privacidade</LinkMenu> 
          </ul>
        </div>
      </div>
      <Image
        src={'/assets/images/raio.webp'}
        alt="alt"
        width={245}
        height={352}
        className="absolute right-3 top-20 md:top-0"
      />
    </footer>
  );
}
interface LinkMenuProps {
  children: React.ReactNode;
  href: string;
}

function LinkMenu({ children, href }: LinkMenuProps) {
  return (
    <li><Link className="hover:underline text-base" href={href}>{children}</Link></li>
  );
}