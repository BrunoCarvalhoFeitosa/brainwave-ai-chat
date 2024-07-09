"use client"
import Image from "next/image"
import { imageHowToUseSmartest } from "@/constants"
import { FaCheck } from "react-icons/fa6"
import { LuLoader2 } from "react-icons/lu"

export const HowToUseSmartest = () => {
    return (
        <div className="group relative mb-8 md:mb-10 lg:mb-4 p-6 md:p-8 lg:p-20 flex items-center h-[39rem] xl:h-[48rem] bg-primary border border-n-1/10 rounded-3xl overflow-hidden z-10">
            <div className="absolute top-0 left-0 xl:-left-36 w-full md:w-[55%] lg:w-3/5 xl:w-auto h-full pointer-events-none">
                <Image
                    src={imageHowToUseSmartest}
                    width={800}
                    height={730}
                    alt="Smartest AI"
                    className="w-full h-full object-cover md:object-right group-hover:scale-110 transition-transform duration-300"
                />
            </div>
            <div className="relative ml-auto max-w-[18.5rem] xl:max-w-[21rem] z-[1]">
                <div>
                    <h4 className="mb-2 text-2xl font-bold">
                        IA mais inteligente
                    </h4>
                    <p className="text-n-3">
                        Brainwave revela o potencial de aplicativos alimentados por IA.
                    </p>
                </div>
                <div className="mt-[3rem]">
                    <ul className="flex flex-col">
                        <li className="flex items-center py-5 border-t border-n-6">
                            <div className="flex justify-center items-center w-7 h-7 bg-purple-500 rounded-full text-primary">
                                <FaCheck />
                            </div>
                            <div>
                                <p className="ml-4">
                                    Gerador de fotos inteligente
                                </p>
                            </div>
                        </li>
                        <li className="flex items-center py-5 border-t border-n-6">
                            <div className="flex justify-center items-center w-7 h-7 bg-purple-500 rounded-full text-primary">
                                <FaCheck />
                            </div>
                            <div>
                                <p className="ml-4">
                                    Melhore a qualidade de fotos
                                </p>
                            </div>
                        </li>
                        <li className="flex items-center py-5 border-t border-n-6">
                            <div className="flex justify-center items-center w-7 h-7 bg-purple-500 rounded-full text-primary">
                                <FaCheck />
                            </div>
                            <div>
                                <p className="ml-4">
                                    Fácil integração
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="absolute left-4 right-4 bottom-10 lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2 px-6 flex items-center gap-3 h-[3.5rem] bg-n-8/80 rounded-[1.7rem] border border-n-1/10 text-base">
                <div className="animate-spin text-purple-500">
                    <LuLoader2 size={28} />
                </div>
                <div className="text-xs md:text-base uppercase font-semibold">
                    IA gerando o conteúdo...
                </div>
            </div>
        </div>
    )
}