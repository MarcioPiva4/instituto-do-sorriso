'use client'
import Image from "next/image";

export default function SectionVideo(){
    return(
        <section className="py-10 mb-10">
            <div className="flex justify-center items-center flex-col text-center sm:px-10 px-5 max-w-[1000px] m-auto">
                <h1 className="mb-5 lg:text-[30px] sm:text-[24px] text-[22px] font-semibold text-wrap lg:text-nowrap text-[var(--background-primary)]">Não sabe o que é um Protocolo Fixo? Assista ao vídeo abaixo.</h1>
                <Image src={'/video-background.avif'} width={500} height={500} className="w-auto h-auto mt-5" alt="video de background exemplo" loading="lazy"></Image>
            </div>
        </section>
    )
}