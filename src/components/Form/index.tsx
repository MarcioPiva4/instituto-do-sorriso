import Image from "next/image";

export default function Form(){
    return(
        <section className="bg-[var(--primary)] py-10 my-10">
            <div className="flex items-center gap-10 justify-center py-10 px-5 sm:px-10 flex-col sm:flex-row">
                <div className="relative flex-1">
                    <Image src="/bg-form.avif" alt="imagem da logo do instituto do sorriso" width={700} height={500} className="p-10"/>
                </div>

                <div className="flex-1 flex flex-col items-center">
                    <h1 className="text-center font-bold text-[22px] sm:text-[26px] mb-3">A mudança está a alguns cliques</h1>
                    <p className="text-center font-medium text-[12px] sm:text-[13px] mb-6">Preencha com seus dados e venha fazer uma avaliação conosco</p>
                    <form action="/" method="POST" className="flex flex-col w-full gap-5">
                        <input type="text" placeholder="Qual seu nome?" required className="font-[var(--font-terciary)] bg-white text-[#353535] py-3 px-2 text-[14px] rounded-lg outline-none"></input>
                        <input type="text" placeholder="Data de Nascimento" required className="font-[var(--font-terciary)] bg-white text-[#353535] py-3 px-2 text-[14px] rounded-lg outline-none"></input>
                        <input type="tel" placeholder="Qual o seu número de telefone?" required className="font-[var(--font-terciary)] bg-white text-[#353535] py-3 px-2 text-[14px] rounded-lg outline-none"></input>
                        <button type="submit" className="grandient text-[12px] sm:text-[14px] text-[#001E55] py-2 px-6 rounded-lg font-[var(--font-secondary)] font-semibold mb-5 text-center outline-none cursor-pointer">QUERO MUDANÇA NO MEU SORRISO</button>
                    </form>
                </div>
            </div>
        </section>
    )
}