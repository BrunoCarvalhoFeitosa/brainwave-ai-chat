"use client"
import { FaCheck } from "react-icons/fa6"

export const PriceTable = () => {
    return (
        <div className="flex flex-col xl:flex-row justify-between items-center gap-8 md:gap-10 xl:gap-4 w-full">
            <div className="p-7 flex-1 w-full border border-stroke rounded-xl">
                <div className="mb-8">
                    <h6 className="font-code text-3xl text-gray-500">
                        Basic
                    </h6>
                    <p>
                        Chatbot de IA, recomendações personalizadas, gerador de fotos.
                    </p>
                </div>
                <div className="mb-16">
                    <div className="flex items-center">
                        <div className="text-2xl">
                            R$
                        </div>
                        <div className="text-7xl font-extrabold">
                            9,90
                        </div>
                    </div>
                </div>
                <div>
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
                                    Gerador de conteúdos
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
            <div className="p-7 xl:py-16 flex-1 w-full border border-stroke rounded-xl">
                <div className="mb-8">
                    <h6 className="font-code text-3xl text-gray-500">
                        Premium
                    </h6>
                    <p>
                        Chatbot de IA avançado, suporte prioritário, painel analítico.
                    </p>
                </div>
                <div className="mb-16">
                    <div className="flex items-center">
                        <div className="text-2xl">
                            R$
                        </div>
                        <div className="text-7xl font-extrabold">
                            29,99
                        </div>
                    </div>
                </div>
                <div>
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
                                    Gerador de conteúdos
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
            <div className="p-7 flex-1 w-full border border-stroke rounded-xl">
                <div className="mb-8">
                    <h6 className="font-code text-3xl text-gray-500">
                        Enterprise
                    </h6>
                    <p>
                        Chatbot de IA personalizado, análises avançadas, conta dedicada.
                    </p>
                </div>
                <div className="mb-16">
                    <div className="flex items-center">
                        <div className="text-2xl">
                            R$
                        </div>
                        <div className="text-7xl font-extrabold">
                            49,90
                        </div>
                    </div>
                </div>
                <div>
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
                                    Gerador de conteúdos
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
        </div>
    )
}