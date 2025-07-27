import Image from "next/image";

export default function SectionTextImages() {
  return (
    <section className="pt-10">
      <h1 className="font-semibold sm:text-[36px] text-[28px] text-gradient text-center mb-10 text-[var(--primary)]">
        Como funciona o tratamento do Protocolo Fixo:
      </h1>

      <div className="flex flex-col px-5 sm:px-10 gap-5">
        <div className="w-full flex justify-center items-center gap-10 sm:flex-row flex-col-reverse relative py-3 sm:py-10 mb-0 sm:mb-10">
          <div className="max-w-[450px] w-full">
            <h1 className="sm:text-[32px] text-[24px] text-center sm:text-start font-bold mb-3 text-[var(--primary)]">
              Agendamento da avaliação
            </h1>
            <p className="sm:text-[16px] text-[14px] text-center font-medium sm:text-start text-[var(--primary)]">
              Descubra como funciona o jogo do e-commerce e aprenda a
              identificar nichos lucrativos e produtos com alta demanda. Saia
              da dúvida e comece com clareza e direção.
            </p>
          </div>
          <div className="relative">
            <Image
              src={"/desktop-1.avif"}
              alt="desktop"
              width={1000}
              height={500}
              loading="lazy"
              className="shadow-image rounded-2xl max-w-[750px] w-full lg:min-h-[500px] min-h-[350px] max-h-[500px] h-full object-cover"></Image>
          </div>
        </div>

        <div className="w-full flex justify-center items-center gap-10 sm:flex-row flex-col relative py-3 sm:py-10 mb-0 sm:mb-10">
          <div className="max-w-[1000px] max-w">
            <Image
              src={"/desktop-2.avif"}
              alt="desktop"
              width={1000}
              height={500}
              objectFit="contain"
              loading="lazy"
              className="shadow-image rounded-2xl max-w-[750px] w-full lg:min-h-[500px] min-h-[350px] lg:min-h-[250px] max-h-[500px] h-full object-cover"></Image>
          </div>
          <div className="max-w-[450px] w-full">
            <svg width="43" height="54" viewBox="0 0 43 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4236 0.827148C9.46921 0.827148 8.6639 1.61833 8.6639 2.55598V5.65541H1.8847C0.930308 5.65541 0.125 6.44658 0.125 7.38423V51.8042C0.125 52.7418 0.930308 53.533 1.8847 53.533H41.0162C41.9706 53.533 42.7759 52.7418 42.7759 51.8042V7.42692C42.8671 6.41888 41.9886 5.65541 41.0776 5.65541H34.2984V2.55598C34.2984 1.61833 33.4931 0.827148 32.5387 0.827148H10.4236ZM12.1833 10.4233V4.2848H30.7176V10.4233H12.1833ZM3.6444 50.0754V9.11306H8.6639V12.2125C8.6639 13.1501 9.46921 13.9413 10.4236 13.9413H32.4773C33.4317 13.9413 34.237 13.1501 34.237 12.2125V9.11306H39.2577L39.3168 50.0754H3.6444Z" fill="#011A2E" />
              <path d="M8.94915 21.4683C7.99476 21.4683 7.18945 22.2594 7.18945 23.1971C7.18945 24.1347 7.99476 24.9259 8.94915 24.9259H34.0744C35.0288 24.9259 35.8341 24.1347 35.8341 23.1971C35.8341 22.2594 35.0288 21.4683 34.0744 21.4683H8.94915Z" fill="#0080FF" />
              <path d="M8.94915 30.823C7.99476 30.823 7.18945 31.6142 7.18945 32.5518C7.18945 33.4895 7.99476 34.2807 8.94915 34.2807H34.0744C35.0288 34.2807 35.8341 33.4895 35.8341 32.5518C35.8341 31.5801 34.9933 30.823 34.013 30.823H8.94915Z" fill="#0080FF" />
              <path d="M8.94915 40.2381C7.99476 40.2381 7.18945 41.0293 7.18945 41.9669C7.18945 42.9046 7.99476 43.6958 8.94915 43.6958H26.9484C27.9028 43.6958 28.7081 42.9046 28.7081 41.9669C28.7081 41.0293 27.9028 40.2381 26.9484 40.2381H8.94915Z" fill="#0080FF" />
            </svg>

            <h1 className="sm:text-[32px] text-[24px] font-bold mb-3 mt-3 text-center sm:text-start text-[var(--primary)]">
              Planejamento personalizado
            </h1>
            <p className="sm:text-[16px] text-[14px] text-center sm:text-start text-[var(--primary)]">
              Descubra como funciona o jogo do e-commerce e aprenda a
              identificar nichos lucrativos e produtos com alta demanda. Saia
              da dúvida e comece com clareza e direção.
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center items-center gap-10 sm:flex-row flex-col-reverse relative py-3 sm:py-10 mb-0 sm:mb-10">
          <div className="max-w-[450px] w-full">
            <h1 className="sm:text-[32px] text-[24px] font-bold mb-3 text-center sm:text-start text-[var(--primary)]">
              Colocação do protocolo
            </h1>
            <p className="sm:text-[16px] text-[14px] text-center sm:text-start text-[var(--primary)]">
              Descubra como funciona o jogo do e-commerce e aprenda a identificar nichos lucrativos e
              produtos com alta demanda. Saia da dúvida
              e comece com clareza e direção.
            </p>
          </div>
          <div>
            <Image
              src={"/desktop-3.avif"}
              alt="desktop"
              width={1000}
              height={500}
              loading="lazy"
              className="shadow-image rounded-2xl max-w-[750px] w-full lg:min-h-[500px] min-h-[350px] max-h-[500px] lg:min-h-[250px] h-full object-cover"></Image>
          </div>
        </div>

        <div className="w-full flex justify-center items-center gap-10 sm:flex-row flex-col relative py-3 sm:py-10 mb-10">
          <div>
            <Image
              src={"/desktop-4.avif"}
              alt="desktop"
              width={1000}
              height={500}
              loading="lazy"
              className="shadow-image rounded-2xl max-w-[750px] w-full lg:min-h-[500px] min-h-[350px] max-h-[500px] h-full object-cover"></Image>
          </div>
          <div className="max-w-[450px] w-full">
            <h1 className="sm:text-[32px] text-[24px] font-bold mb-3 text-center sm:text-start text-[var(--primary)]">
              Sorriso transformado
            </h1>
            <p className="sm:text-[16px] text-[14px] text-center sm:text-start text-[var(--primary)]">
              Descubra como funciona o jogo do e-commerce e aprenda a identificar nichos lucrativos e
              produtos com alta demanda. Saia da dúvida
              e comece com clareza e direção.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}