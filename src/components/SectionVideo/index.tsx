'use client'
import Image from "next/image";

export default function SectionVideo(){
    return(
        <section className="py-10 mb-10">
            <div className="flex justify-center items-center flex-col text-center sm:px-10 px-5 max-w-[1000px] m-auto">
                <h1 className="mb-5 lg:text-[30px] sm:text-[24px] text-[22px] font-semibold text-wrap lg:text-nowrap text-[var(--background-primary)]">Entenda como funciona o Protocolo Fixo e transforme seu sorriso de forma segura</h1>
                <p className="mb-5 text-[18px] font-medium text-wrap lg:text-nowrap text-[#333333]">Um tratamento moderno, seguro e sem dor. Veja como o protocolo fixo pode mudar sua vida.</p>
                <Image src={'/video-background2.avif'} width={500} height={500} className="w-auto h-auto mt-5" alt="video de background exemplo" loading="lazy"></Image>
            </div>
        </section>
    )
}