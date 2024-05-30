"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Card } from "./Card";

export function Depoimentos() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-center text-6xl font-bold">Depoimentos</h2>
        <Swiper
          slidesPerView={3}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
        >
          <SwiperSlide>
            <Card
              name={"John Doe"}
              text={
                "Nam sit amet porttitor justo. Duis congue mauris vel massa aliquam viverra. Nullam nec ante velit. Morbi mattis non risus sit amet pharetra. Donec eget commodo turpis."
              }
              image={"/assets/images/depoimento.webp"}
              city={"Santa Vitória"}
              state={"MG"}
              company={"Império Baterias"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              name={"John Doe"}
              text={
                "Nam sit amet porttitor justo. Duis congue mauris vel massa aliquam viverra. Nullam nec ante velit. Morbi mattis non risus sit amet pharetra. Donec eget commodo turpis."
              }
              image={"/assets/images/depoimento.webp"}
              city={"Santa Vitória"}
              state={"MG"}
              company={"Império Baterias"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              name={"John Doe"}
              text={
                "Nam sit amet porttitor justo. Duis congue mauris vel massa aliquam viverra. Nullam nec ante velit. Morbi mattis non risus sit amet pharetra. Donec eget commodo turpis."
              }
              image={"/assets/images/depoimento.webp"}
              city={"Santa Vitória"}
              state={"MG"}
              company={"Império Baterias"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              name={"John Doe"}
              text={
                "Nam sit amet porttitor justo. Duis congue mauris vel massa aliquam viverra. Nullam nec ante velit. Morbi mattis non risus sit amet pharetra. Donec eget commodo turpis."
              }
              image={"/assets/images/depoimento.webp"}
              city={"Santa Vitória"}
              state={"MG"}
              company={"Império Baterias"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
