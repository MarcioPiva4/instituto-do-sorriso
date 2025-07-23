import Image from "next/image";

export default function SectionTextImages(){
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
              <h1 className="sm:text-[32px] text-[24px] font-bold mb-3 text-center sm:text-start text-[var(--primary)]">
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