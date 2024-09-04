'use client'
import { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { GrDownload } from "react-icons/gr";
import { motion } from "framer-motion";

export function Certificacoes() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-white py-20">
      <motion.div
        ref={sectionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="container flex flex-col gap-4"
      >
        <h2 className="text-center text-3xl md:text-6xl font-bold">Certificações</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-14">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={"/assets/images/selo.webp"}
              alt="selo"
              width={378}
              height={98}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-2"
          >
            <h3 className="text-xl font-semibold text-center lg:text-start">
              Certificados de conformidade
            </h3>
            <div className="flex gap-4 items-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <Link
                  className="flex items-center gap-4 bg-[#DF0209] border border-[#DF0209] rounded-md text-white justify-center p-4 font-semibold transition hover:bg-white hover:text-[#DF0209]"
                  href={'/assets/docs/iso.pdf'}
                  download={'/assets/docs/iso.pdf'}
                  target="_blank"
                >
                  ISO 9001:2015
                  <GrDownload size={20} />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <Link
                  className="flex items-center gap-4 bg-[#DF0209] border border-[#DF0209] rounded-md text-white justify-center p-4 font-semibold transition hover:bg-white hover:text-[#DF0209]"
                  href={'/assets/docs/inmetro.pdf'}
                  download={'/assets/docs/inmetro.pdf'}
                  target="_blank"
                >
                  INMETRO 145
                  <GrDownload size={20} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
