import Image from "next/image";

export default function SectionExperts(){
    return(
        <section className="pt-10">
            <h1 className="font-semibold sm:text-[32px] text-[28px] text-gradient text-center text-[var(--primary)]">Nossos Especialistas</h1>
            <div className="flex flex-col px-5 sm:px-10 gap-5">
                <div className="w-full flex justify-center items-center gap-10 sm:flex-row flex-col relative py-3 sm:py-10 mb-0 sm:mb-10">
                    <div className="max-w-[1000px] max-w">
                    <Image
                        src={"/expert-1.avif"}
                        alt="desktop"
                        width={1000}
                        height={500}
                        objectFit="contain"
                        loading="lazy"
                        className="max-w-[750px] w-full lg:min-h-[500px] min-h-[350px] lg:min-h-[250px] max-h-[500px] h-full object-cover"></Image>
                    </div>
                    <div className="max-w-[350px] w-full text-[var(--primary)]">
                        <h1 className="sm:text-[32px] text-[24px] font-bold text-center sm:text-start">
                            Dr. Calebe Jr.
                        </h1>
                        <p className="sm:text-[18px] text-[16px] text-center sm:text-start">
                            CRO: 108562/SP
                        </p>

                        <h3 className="font-bold py-4">Especialista em implantodontia e reabilitação oral</h3>

                        <ul className="text-[14px] pl-3 font-medium">
                            <li className="flex items-center gap-2"><span className="w-[3px] h-[3px] bg-[var(--primary)] rounded-full"></span>Lentes de contato dental</li>
                            <li className="flex items-center gap-2"><span className="w-[3px] h-[3px] bg-[var(--primary)] rounded-full"></span>Implantes</li>
                            <li className="flex items-center gap-2"><span className="w-[3px] h-[3px] bg-[var(--primary)] rounded-full"></span>Protocolo sobre implantes</li>
                        </ul>

                        <h3 className="font-bold py-4">Expertise em scaneamento oral e laser terapia</h3>
                    </div>
                </div>

                <div className="w-full flex justify-center items-center gap-10 sm:flex-row flex-col-reverse relative py-3 sm:py-10 mb-0 sm:mb-10">
                    <div className="max-w-[350px] w-full text-[var(--primary)]">
                        <h1 className="sm:text-[32px] text-[24px] font-bold text-center sm:text-start">
                            Dra. Luana
                        </h1>
                        <p className="sm:text-[18px] text-[16px] text-center sm:text-start">
                            CRO: 108581/SP
                        </p>

                        <h3 className="font-bold py-4">Especialista em ortodontia</h3>

                        <ul className="text-[14px] pl-3 font-medium">
                            <li className="flex items-center gap-2"><span className="w-[3px] h-[3px] bg-[var(--primary)] rounded-full"></span>Aparelhos fixos estéticos e metálicos</li>
                            <li className="flex items-center gap-2"><span className="w-[3px] h-[3px] bg-[var(--primary)] rounded-full"></span>Aparelhos invisiveis (é o que há de mais inovador)</li>
                        </ul>

                        <h3 className="font-bold py-4">Expertise em harmonização orofacial</h3>

                        <ul className="text-[14px] pl-3 font-medium">
                            <li className="flex items-center gap-2"><span className="w-[3px] h-[3px] bg-[var(--primary)] rounded-full"></span>Botox</li>
                            <li className="flex items-center gap-2"><span className="w-[3px] h-[3px] bg-[var(--primary)] rounded-full"></span>Ácido hialurônico</li>
                            <li className="flex items-center gap-2"><span className="w-[3px] h-[3px] bg-[var(--primary)] rounded-full"></span>Bioestimulador (harmonyCa)</li>
                        </ul>
                    </div>
                    <div>
                    <Image
                        src={"/expert-2.avif"}
                        alt="desktop"
                        width={1000}
                        height={500}
                        loading="lazy"
                        className="max-w-[750px] w-full lg:min-h-[500px] min-h-[350px] max-h-[500px] lg:min-h-[250px] h-full object-cover"></Image>
                    </div>
                </div>
            </div>
        </section>
    )
}