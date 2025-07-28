"use client";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "O tratamento com implante dentário dói?",
    answer:
      "Não! O procedimento é feito com anestesia local e, na maioria dos casos, o desconforto é mínimo. Após a cirurgia, é possível seguir com a rotina normalmente, com alguns cuidados simples.",
  },
  {
    id: 2,
    question: "Qual a diferença entre implante dentário e protocolo?",
    answer:
      "O implante é a base metálica colocada no osso. Já o protocolo é uma prótese fixa (geralmente total) que é instalada sobre vários implantes, sendo ideal para quem perdeu todos os dentes.",
  },
  {
    id: 3,
    question: "Quanto tempo dura um implante dentário?",
    answer:
      "Com os cuidados adequados, os implantes podem durar por toda a vida. A prótese sobre o implante também tem alta durabilidade, mas pode precisar de manutenção ao longo do tempo.",
  },
  {
    id: 4,
    question: "Posso fazer o protocolo mesmo sem osso suficiente?",
    answer:
      `Sim! Hoje existem técnicas modernas, como o enxerto ósseo, que permitem realizar o protocolo mesmo em casos de perda óssea avançada.`,
  },  
  {
    id: 5,
    question: "O que é necessário para começar meu tratamento?",
    answer:
      "Basta agendar uma avaliação com um dos nossos especialistas. Nessa consulta, realizaremos exames e planejaremos o melhor tratamento para você.",
  },
  {
    id: 6,
    question: "É possível parcelar o tratamento?",
    answer:
      `Sim! Oferecemos condições facilitadas e opções de parcelamento que cabem no seu bolso. Fale conosco para simular.`,
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
