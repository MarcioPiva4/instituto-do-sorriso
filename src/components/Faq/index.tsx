"use client";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "Nossos serviços são padronizados?",
    answer:
      "Não. Nossa estratégia é 100% personalizada com base no diagnóstico do seu negócio.",
  },
  {
    id: 2,
    question: "Qual o prazo para ver resultados?",
    answer:
      "Resultados variam, mas nosso foco é otimizar o funil para que você veja retorno sobre o investimento o mais rápido possível.",
  },
  {
    id: 3,
    question: "Minha empresa é muito pequena, vocês atendem?",
    answer:
      " Sim! Atendemos pequenas e médias empresas que buscam crescimento real.",
  },
  {
    id: 4,
    question: "Vocês oferecem garantia de resultados?",
    answer:
      `Nosso "skin in the game" é trabalhar em conjunto para alcançar os objetivos. O resultado é construído com base na estratégia e execução em parceria. (Ou, se houver, mencione alguma garantia mais formal).`,
  },
];

export default function Faq() {
  const [open, setOpen] = useState<{ id: number | null; open: boolean }>({
    id: null,
    open: false,
  });
  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-center max-w-[1000px] w-full px-5 pb-10 rounded-3xl">
        <h2 className="text-center w-full text-[var(--primary)] text-2xl font-semibold mb-8 sm:text-3xl">
          Perguntas frequentes
        </h2>
        {faqs.map((e) => (
          <div
            className="flex flex-col w-full bg-[var(--primary)] p-5 rounded-lg mb-3 cursor-pointer"
            onClick={() =>
              open.id == e.id
                ? setOpen({ id: null, open: false })
                : setOpen({ id: e.id, open: true })
            }
            key={e.id}>
            <div className="flex justify-between items-center gap-2">
              <p className="text-[var(--text-primary)] text-sm sm:text-base font-bold">{e.question}</p>
              <button
                className={`cursor-pointer transition-all ${
                  e.id == open.id && open.open ? "rotate-[-90deg]" : ""
                }`}
                aria-label="Botão seta do faq, não aberto"
                >
                <svg
                  width="10"
                  height="15"
                  viewBox="0 0 10 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.79282 0.332031L9.20703 1.74624L3.41414 7.53914L9.20703 13.332L7.79282 14.7462L0.585711 7.53914L7.79282 0.332031Z"
                    fill="#F0F0F0"
                  />
                </svg>
              </button>
            </div>
            {e.id == open.id && open.open && (
              <div className="block w-full mt-4">
                <p className="font-medium text-xs sm:text-base">{e.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
