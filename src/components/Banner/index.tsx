import Image from "next/image";

export default function Banner(){
    return(
        <section className="p-3 lg:p-5">
            <div className="w-full h-[800px] rounded-xl p-5 sm:p-10 bg-[url('/banner-1.avif')] bg-no-repeat bg-cover bg-center">
                <div className="flex items-center justify-center pt-5 pl-3 sm:pl-10 flex-col max-w-[600px] h-full">
                    <div className="mt-10 flex flex-col gap-3 sm:gap-5 items-start">
                        <h1 className="text-start font-bold text-[26px] sm:text-[32px] pb-3 mt-5">Diga adeus à insegurança: transforme seu sorriso com o Protocolo Fixo</h1>
                        <p className="text-justify text-[16px] sm:text-[18px] max-w-[500px]">Com o protocolo fixo, você recupera sua autoestima, fala com confiança e volta a sorrir sem medo — com dentes lindos e naturais.</p>
                        <a href="#" className="grandient text-[14px] sm:text-[16px] text-[#001E55] py-2 px-6 rounded-lg font-[var(--font-secondary)] font-semibold mb-5 text-center">Quero Avaliar Meu Sorriso</a>
                    </div>
                </div> 
            </div>
        </section>
    )
}