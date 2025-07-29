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

  const [warning, setWarning] = useState<boolean>(true);
  return (
    <section className="py-5 flex flex-col justify-center items-center">
      <h1 className="text-center font-bold text-[26px] sm:text-[32px] pb-3 mt-5 text-[var(--primary)]">
        Resultados que Transformam Sorrisos — e Vidas
      </h1>
      <p className="text-[18px] text-center font-medium text-wrap lg:text-nowrap text-[#333333]">
        Veja a diferença real que nossos tratamentos proporcionam em poucos
        meses.
      </p>
      <div className="flex items-center gap-10 justify-center py-10 px-5 sm:px-10 flex-col lg:flex-row text-[var(--primary)] bg-grandient max-w-[1220px] rounded-xl mt-10">
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
            {warning && 
            <div className="w-full absolute h-full bg-[#CFD7E0] flex flex-col items-center justify-center top-0 z-[10] py-5 px-10 gap-3 rounded-xl">
              <svg
                width="120"
                height="120"
                viewBox="0 0 141 142"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.9223 28.6517L19.0935 24.4805L117.5 122.887L113.329 127.058L93.706 107.377C85.6573 110.725 76.8448 112.605 67.5623 112.605C40.7723 112.605 17.6248 97.0367 6.69727 74.418C12.396 62.668 21.326 52.8567 32.3123 46.1005L14.9223 28.6517ZM67.5623 106.73C75.141 106.73 82.426 105.379 89.1235 102.853L82.5435 96.2142C78.2548 99.1517 73.1435 100.855 67.5623 100.855C52.8748 100.855 41.1248 89.1055 41.1248 74.418C41.1248 68.8367 42.8285 63.7255 45.766 59.4367L36.6598 50.3892C26.8229 56.1201 18.7379 64.4286 13.2773 74.418C23.7348 93.688 44.0623 106.73 67.5623 106.73ZM121.847 74.418C111.39 55.148 91.0623 42.1055 67.5623 42.1055C60.806 42.1055 54.226 43.2217 48.116 45.2192L43.5335 40.6367C50.9948 37.758 59.1023 36.2305 67.5623 36.2305C94.3523 36.2305 117.5 51.7992 128.427 74.418C123.088 85.4972 114.819 94.904 104.516 101.619L100.286 97.3305C109.275 91.6905 116.736 83.818 121.847 74.418ZM67.5623 47.9805C82.2498 47.9805 93.9998 59.7305 93.9998 74.418C93.9998 79.2355 92.7073 83.7005 90.4748 87.578L86.1273 83.2305C87.4198 80.528 88.1248 77.5905 88.1248 74.418C88.1248 68.9645 85.9584 63.7343 82.1021 59.8781C78.2459 56.0219 73.0158 53.8555 67.5623 53.8555C64.3898 53.8555 61.4523 54.5605 58.7498 55.853L54.4023 51.5055C58.2798 49.273 62.7448 47.9805 67.5623 47.9805ZM46.9998 74.418C46.9998 79.8715 49.1662 85.1016 53.0224 88.9578C56.8786 92.8141 62.1087 94.9805 67.5623 94.9805C71.4985 94.9805 75.141 93.8642 78.2548 92.043L49.9373 63.7255C48.116 66.8392 46.9998 70.4817 46.9998 74.418Z"
                  fill="#495F71"
                />
              </svg>
              <h1 className="text-[#495F71] max-w-[400px] font-bold text-[26px] sm:text-[32px]">Conteúdo Sensível</h1>
              <p className="text-[#495F71] text-center max-w-[400px] font-semibold">
                Este conteúdo pode ser sensível para algumas pessoas. Imagem
                real de condições bucais graves antes do tratamento
              </p>
              <button className="flex items-center gap-3 bg-[#495F71] text-white font-semibold px-5 py-1 rounded-md cursor-pointer" onClick={() => setWarning(false)}>
                <svg
                  width="40"
                  height="41"
                  viewBox="0 0 40 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M37.3546 20.4578C33.6102 13.5356 27.0435 9.34668 19.7768 9.34668C12.5102 9.34668 5.93238 13.5356 2.22127 20.4578L1.91016 20.98L2.19905 21.5133C5.94349 28.4356 12.5102 32.6245 19.7768 32.6245C27.0435 32.6245 33.6213 28.4911 37.3546 21.5133L37.6435 20.98L37.3546 20.4578ZM19.7768 30.3467C13.5213 30.3467 7.77682 26.8578 4.44349 20.98C7.77682 15.1022 13.5213 11.6133 19.7768 11.6133C26.0324 11.6133 31.7102 15.1133 35.099 20.98C31.7102 26.8578 26.0213 30.3467 19.7768 30.3467Z"
                    fill="white"
                  />
                  <path
                    d="M20.0998 13.3918C18.5933 13.4028 17.1238 13.86 15.8769 14.7057C14.6301 15.5513 13.6618 16.7475 13.0944 18.1432C12.527 19.5388 12.386 21.0713 12.689 22.5471C12.9921 24.0229 13.7257 25.3757 14.7972 26.4348C15.8687 27.4939 17.23 28.2117 18.7092 28.4976C20.1884 28.7834 21.7191 28.6245 23.1081 28.0409C24.497 27.4573 25.6819 26.4752 26.513 25.2186C27.3441 23.962 27.7841 22.4873 27.7776 20.9807C27.7732 19.9778 27.571 18.9857 27.1825 18.0612C26.794 17.1366 26.2269 16.2978 25.5137 15.5928C24.8004 14.8878 23.9551 14.3305 23.0261 13.9528C22.097 13.5751 21.1026 13.3845 20.0998 13.3918ZM20.0998 26.414C19.0356 26.4031 17.9984 26.0779 17.1185 25.4794C16.2385 24.8809 15.555 24.0357 15.1538 23.05C14.7527 22.0643 14.6517 20.982 14.8636 19.9391C15.0755 18.8962 15.5908 17.9391 16.3449 17.1882C17.0989 16.4372 18.0581 15.9257 19.1018 15.7181C20.1456 15.5105 21.2274 15.6159 22.2115 16.0211C23.1956 16.4263 24.038 17.1132 24.6329 17.9956C25.2278 18.878 25.5487 19.9165 25.5554 20.9807C25.5583 21.6969 25.4191 22.4066 25.1457 23.0686C24.8723 23.7306 24.4702 24.3317 23.9627 24.8371C23.4552 25.3425 22.8525 25.7422 22.1894 26.0129C21.5262 26.2836 20.816 26.4199 20.0998 26.414Z"
                    fill="white"
                  />
                </svg>
                <p>Ver o conteúdo</p>
              </button>
            </div>
            }
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
          {/* <div className="flex w-full justify-between items-center max-w-[250px] mt-10 absolute">
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
          </div> */}
        </div>

        <div className="flex flex-col lg:items-start items-center max-w-[600px] w-full">
            <ul className="border border-[var(--primary)] rounded-lg bg-[#FFFFFF]/30">
              <li className="flex items-center gap-3 p-4 sm:p-6 border-b border-[var(--primary)] min-h-[100px]">
                <p className="flex-[10] text-[14px] lg:text-[16px] text-[#fff]">
                  Estética com Facetas
                </p>
              </li>
              <li className="flex items-center gap-3 p-4 sm:p-6 border-b border-[var(--primary)] min-h-[100px]">
                <p className="flex-[10] text-[14px] lg:text-[16px] text-[#fff]">
                  Mastigação eficiente e sem dor
                </p>
              </li>
              <li className="flex items-center gap-3 p-4 sm:p-6 border-b border-[var(--primary)] min-h-[100px]">
                <p className="flex-[10] text-[14px] lg:text-[16px] text-[#fff]">
                  Mais juventude e autoestima
                </p>
              </li>
              <li className="flex items-center gap-3 p-4 sm:p-6 min-h-[100px] border-b border-[var(--primary)]">
                <p className="flex-[10] text-[14px] lg:text-[16px] text-[#fff]">
                  Reabilitação Oral Completa
                </p>
              </li>
              <li className="flex items-center gap-3 p-4 sm:p-6 min-h-[100px] border-[var(--primary)]">
                <p className="flex-[10] text-[14px] lg:text-[16px] text-[#fff]">
                  Implante Protocolo Total
                </p>
              </li>
            </ul>
        </div>
      </div>
    </section>
  );
}
