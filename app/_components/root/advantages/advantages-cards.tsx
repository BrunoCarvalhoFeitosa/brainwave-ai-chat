"use client"
import Image from "next/image"
import { BsFillBarChartFill, BsFillChatLeftDotsFill, BsFillPlugFill } from "react-icons/bs"
import { IoChevronForward } from "react-icons/io5"

export const AdvantageCards = () => {
    return (
        <div className="mx-auto w-full">
            <ul className="flex flex-col xl:flex-row items-center gap-8">
                <li className="group relative py-10 px-10 w-full xl:max-w-[360px] bg-n-7 rounded-xl">
                    <div className="relative z-[1]">
                        <div className="mb-28">
                            <h2 className="mb-3 text-lg md:text-xl text-n-1">
                                Pergunte qualquer coisa.
                            </h2>
                            <p className="max-w-3xl text-sm text-n-2">
                                Com o nosso software, você pode perguntar
                                qualquer coisa que os dados serão gerados. 
                                Tudo de maneira fácil, segura, rápida e sem
                                nenhum tipo de burocracia.
                            </p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="w-12 h-12 flex justify-center items-center bg-purple-500 rounded-xl text-primary">
                                <BsFillChatLeftDotsFill size={22} />
                            </div>
                            <div className="flex items-center gap-5 cursor-pointer">
                                <div className="font-code text-xs uppercase font-bold">
                                    Explorar mais
                                </div>
                                <div>
                                    <IoChevronForward />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-30 transition-opacity duration-300 absolute top-0 left-0 w-full h-full">
                        <Image
                            src="/images/advantages/image-card-background.png"
                            width={400}
                            height={400}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                </li>
                <li className="group relative py-10 px-10 w-full xl:max-w-[360px] bg-n-7 rounded-xl">
                    <div className="relative z-[1]">
                        <div className="mb-28">
                            <h2 className="mb-3 text-lg md:text-xl text-n-1">
                                Conecte todo um time.
                            </h2>
                            <p className="max-w-3xl text-sm text-n-2">
                                Com o nosso software, você pode conectar 
                                todo seu time de maneira escalável.
                                Conecte todos os departamentos de maneira 
                                efetiva, gerando mais valor, comunicação 
                                lucro e faturamento.
                            </p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="w-12 h-12 flex justify-center items-center bg-purple-500 rounded-xl text-primary">
                                <BsFillPlugFill size={26} />
                            </div>
                            <div className="flex items-center gap-5 cursor-pointer">
                                <div className="font-code text-xs uppercase font-bold">
                                    Explorar mais
                                </div>
                                <div>
                                    <IoChevronForward />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-30 transition-opacity duration-300 absolute top-0 left-0 w-full h-full">
                        <Image
                            src="/images/advantages/image-card-background.png"
                            width={400}
                            height={400}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                </li>
                <li className="group relative py-10 px-10 w-full xl:max-w-[360px] bg-n-7 rounded-xl">
                    <div className="relative z-[1]">
                        <div className="mb-28">
                            <h2 className="mb-3 text-lg md:text-xl text-n-1">
                                Proteção de dados.
                            </h2>
                            <p className="max-w-3xl text-sm text-n-2">
                               Com o nosso software, todo dado gerado é
                               excluído da nossa base de dados. De maneira 
                               segura, definimos uma hora do dia para isso 
                               ocorrer, o procedimento mais seguro.
                            </p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="w-12 h-12 flex justify-center items-center bg-purple-500 rounded-xl text-primary">
                                <BsFillBarChartFill size={24} />
                            </div>
                            <div className="flex items-center gap-5 cursor-pointer">
                                <div className="font-code text-xs uppercase font-bold">
                                    Explorar mais
                                </div>
                                <div>
                                    <IoChevronForward />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-30 transition-opacity duration-300 absolute top-0 left-0 w-full h-full">
                        <Image
                            src="/images/advantages/image-card-background.png"
                            width={400}
                            height={400}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                </li>
            </ul>
        </div>
    )
}