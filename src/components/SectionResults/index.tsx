"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

export default function SectionResults() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const paginationRef = useRef(null);
  useEffect(() => {
    if (
      swiperInstance &&
      swiperInstance.params.navigation &&
      typeof swiperInstance.params.navigation === "object"
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);
  return (
    <section className="py-5">
      <h1 className="text-center font-bold text-[26px] sm:text-[32px] pb-3 mt-5 text-[var(--primary)]">
        Antes e Depois
      </h1>
      <div className="flex items-center gap-10 justify-center py-10 px-5 sm:px-10 flex-col lg:flex-row text-[var(--primary)]">
        <div className="w-full h-full flex flex-col items-center">
          <Swiper
            className="max-w-[600px] margin-0 w-full"
            slidesPerView={1}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              el: paginationRef.current,
              clickable: true,
            }}
            onSwiper={setSwiperInstance}>
            <SwiperSlide>
              <Image
                src={"/image-result-1.avif"}
                alt="Imagem resultado 1"
                width={700}
                height={500}
                className="rounded-xl"></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={"/image-result-2.avif"}
                alt="Imagem resultado 1"
                width={700}
                height={500}
                className="rounded-xl"></Image>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={"/image-result-3.avif"}
                alt="Imagem resultado 1"
                width={700}
                height={500}
                className="rounded-xl"></Image>
            </SwiperSlide>
          </Swiper>
          <div className="flex w-full justify-between items-center max-w-[250px] mt-10">
            <button
              ref={prevRef}
              className="swiper-button-prev-custom shadow-button z-10 bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer">
              <svg
                width="21"
                height="16"
                viewBox="0 0 21 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.1958 8.13714H1.98568M1.98568 8.13714C1.98568 8.13714 6.86397 4.92891 7.85524 2.26758M1.98568 8.13714C1.98568 8.13714 6.29826 11.1517 7.85524 14.0067"
                  stroke="#1E1E1E"
                  strokeWidth="2.17391"
                  strokeLinecap="square"
                />
              </svg>
            </button>

            <div
              ref={paginationRef}
              className="swiper-pagination-custom flex gap-3"></div>

            <button
              ref={nextRef}
              className="swiper-button-prev-custom shadow-button z-10 bg-white w-[50px] h-[50px] rounded-full flex justify-center items-center cursor-pointer">
              <svg
                width="21"
                height="16"
                viewBox="0 0 21 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1.8042 8.13714H19.0143M19.0143 8.13714C19.0143 8.13714 14.136 4.92891 13.1448 2.26758M19.0143 8.13714C19.0143 8.13714 14.7017 11.1517 13.1448 14.0067"
                  stroke="#1E1E1E"
                  strokeWidth="2.17391"
                  strokeLinecap="square"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:items-start items-center max-w-[500px]">
          <h1 className="lg:text-start text-center font-bold text-[32px] sm:text-[36px] mb-3">
            Devolvemos sorrisos
          </h1>
          <p className="lg:text-start text-center font-medium text-[12px] sm:text-[14px] mb-6">
            Descubra como funciona o jogo do e-commerce e aprenda a identificar
            nichos lucrativos e produtos com alta demanda. Saia da dúvida e
            comece com clareza e direção.
          </p>
          <a
            href="#"
            className="grandient text-[14px] sm:text-[16px] text-[#001E55] py-2 px-6 rounded-lg font-[var(--font-secondary)] font-semibold mb-5 text-center">
            Quero Avaliar Meu Sorriso
          </a>
        </div>
      </div>
    </section>
  );
}
