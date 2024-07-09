"use client"
import Image from "next/image"
import { imageHowToUsePhotoEditing, imageHowToUseVideoGenerate } from "@/constants"
import { GenerativeAiChatBubbleWingSvg } from "@/public/svg/generative-ai/generative-ai-chat-bubble-wing-svg"
import { RiVoiceprintFill } from "react-icons/ri"
import { MdKeyboardVoice } from "react-icons/md"
import { AiFillPicture } from "react-icons/ai"
import { IoMdSettings } from "react-icons/io"
import { IoFingerPrintOutline } from "react-icons/io5"
import { FaPlay } from "react-icons/fa6"

export const HowToUsePhotoEditing = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-4 w-full">
            <div className="group w-full flex-1 relative min-h-[33rem] md:min-h-[40rem] border border-n-1/10 rounded-3xl overflow-hidden">
                <div className="absolute top-8 lg:top-16 right-8 lg:right-[8.75rem] max-w-[17.5rem] py-6 px-8 bg-black rounded-t-xl rounded-bl-xl font-code text-base z-10">
                    <div>
                        Hey Brainwave, melhore a qualidade desta imagem.
                    </div>
                    <div>
                        <GenerativeAiChatBubbleWingSvg className="absolute left-full bottom-0" />
                    </div>
                </div>
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[80%] z-10">
                    <h4 className="mb-2 text-2xl font-bold">
                        Gerador de fotos
                    </h4>
                    <p className="text-n-3">
                        Aprimore automaticamente suas fotos usando o  recurso 
                        de edição de fotos do nosso software IA.
                    </p>
                </div>
                <div className="absolute top-0 right-0 w-full h-full opacity-70">
                    <Image
                        src={imageHowToUsePhotoEditing}
                        width={630}
                        height={750}
                        alt=""
                        className="w-full h-full group-hover:scale-110 transition-transform duration-300"
                    />
                </div>
            </div>
            <div className="relative group w-full flex-1 min-h-[33rem] md:min-h-[40rem] bg-n-7 border border-n-1/10 rounded-3xl overflow-hidden">
                <div className="p-7 pb-0 w-full">
                    <h4 className="mb-2 text-2xl font-bold">
                        Gerador de vídeos
                    </h4>
                    <p className="text-n-3">
                        O mecanismo de geração de foto e videoarte 
                        com a IA mais poderosa do mundo. O que você criará?
                    </p>
                </div>
                <div className="mt-3 mb-6 px-7 flex justify-between items-center">
                    <div className="flex justify-center items-center w-16 h-16 bg-n-6 rounded-xl text-white">
                        <RiVoiceprintFill size={25} />
                    </div>
                    <div className="flex justify-center items-center w-16 h-16 bg-n-6 rounded-xl text-white">
                        <MdKeyboardVoice size={25} />
                    </div>
                    <div className="w-20 h-20 bg-conic-gradient p-[1px] rounded-xl text-white overflow-hidden">
                        <div className="flex justify-center items-center w-full h-full rounded-xl bg-n-6">
                            <IoFingerPrintOutline size={34} />
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-16 h-16 bg-n-6 rounded-xl text-white">
                        <AiFillPicture size={25} />
                    </div>
                    <div className="flex justify-center items-center w-16 h-16 bg-n-6 rounded-xl text-white">
                        <IoMdSettings size={25} />
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-primary overflow-hidden">
                    <div className="relative w-full h-full">
                        <div className="w-full h-full">
                            <Image
                                src={imageHowToUseVideoGenerate}
                                width={520}
                                height={400}
                                alt="group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                        <div className="absolute top-8 left-8 py-4 px-8 lg:min-w-[17.5rem] bg-black rounded-t-xl rounded-bl-xl font-code text-base z-10">
                            <div className="flex flex-col justify-start items-end">
                                <p>
                                    Vídeo gerado!
                                </p>
                                <p className="font-code text-[11px] uppercase">
                                    Agora mesmo
                                </p>
                            </div>
                            <div>
                                <GenerativeAiChatBubbleWingSvg className="absolute left-full bottom-0" />
                            </div>
                        </div>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] flex items-center gap-2">
                            <div>
                                <FaPlay size={28} />
                            </div>
                            <div className="flex-1 h-1 bg-conic-gradient" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}