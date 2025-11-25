import { BASE_URL } from "@/constants/baseUrl";
import Script from "next/script";
import { FiDownload } from "react-icons/fi";

export async function generateMetadata() {
  return {
    title: 'Baterias Real - Catálogo',
    description: 'Baixe agora o nosso catálogo completo e conheça toda a linha de baterias especificações técnicas e soluções desenvolvidas para alto desempenho.',
    alternates: {
      canonical: `${BASE_URL}/catalogo`,
    },
  };
}

export default function Catalogo() {
  return (
    <main className="pb-40">
      <div className="relative w-ful flex items-center pt-10 pb-5">
        <div className="container flex justify-center relative z-20">
          <div className="w-full md:w-1/3 flex flex-col gap-4 text-center">
            <h1 className="font-bold text-4xl lg:text-6xl">Catálogo</h1>
            <p className="text-base lg:text-xl">
              Baixe agora o nosso{" "}
              <span className="font-bold text-[#DF0209]">catálogo completo</span> e conheça toda a{" "}
              <span className="font-bold text-[#DF0209]">linha de baterias</span>, 
              especificações técnicas e soluções desenvolvidas para{" "}
              <span className="font-bold text-[#DF0209]">alto desempenho</span>.
            </p>
          </div>
        </div>
      </div>
      <div className="container flex justify-center">
        <a
          href="https://online.flippingbook.com/view/716772771/"
          className="fbo-embed"
          data-fbo-id="c522703c9e"
          data-fbo-ratio="3:2"
          data-fbo-lightbox="yes"
          data-fbo-width="90%"
          data-fbo-height="auto"
          data-fbo-version="1"
          style={{ maxWidth: "90%" }}
        >
        </a>
      </div>
      <div className="flex justify-center">
        <a
          href={'/assets/images/CATALOGO-2026.pdf'}
          download
          className="mt-4 inline-flex items-center gap-2 bg-[#DF0209] text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Download do Catálogo
          <FiDownload size={20} />
        </a>
      </div>
      <Script
        async
        defer
        src="https://online.flippingbook.com/EmbedScriptUrl.aspx?m=redir&hid=716772771"
      />
    </main>
  );
}
