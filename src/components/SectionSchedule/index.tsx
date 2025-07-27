'use client'

export default function SectionSchedule() {
  return (
    <section
      className="flex flex-col flex-wrap justify-center items-center gap-[50px] py-[5em] px-[2em] w-full bg-[var(--background-primary)] text-white text-center"
    >
      <div className="w-full">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Agende agora uma avaliação
          </h1>
          <p className="text-lg md:text-xl font-medium text-[18px] leading-relaxed flex-wrap mt-8 text-center">
            Sua transformação começa com um clique. Nossa equipe está pronta para te atender.
          </p>
        </div>
      </div>
        <a
            href="#section-2"
            className="grandient text-[14px] sm:text-[16px] text-[#001E55] py-2 px-6 rounded-lg font-[var(--font-secondary)] font-semibold mb-5 text-center"
            >
            QUERO MAIS INFORMAÇÕES
        </a>
    </section>
  );
}
