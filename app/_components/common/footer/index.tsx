"use client"
import { Section } from "@/app/_components/common/section"
import { FaDiscord, FaYoutube } from "react-icons/fa6"
import { RiFacebookFill, RiTwitterXFill } from "react-icons/ri"
import { TbBrandDribbbleFilled } from "react-icons/tb"

export const Footer = () => {
    return (
        <Section
            id="advantages-section"
            className="py-[3rem] bg-n-7 overflow-hidden"
            crosses={true}
            middleCrosses={false}
            customPaddings
        >
            <footer className="mx-auto px-8 md:container max-w-[82rem] flex flex-col lg:flex-row justify-between items-center gap-6 md:gap-0">
                <div className="text-base">
                    © 2024. Todos os direitos reservados.
                </div>
                <div>
                    <ul className="flex items-center gap-5">
                        <li className="flex justify-center items-center w-12 h-12 bg-n-6 rounded-full transition-transform duration-500 hover:-translate-y-2 cursor-pointer">
                            <RiFacebookFill size={25} />
                        </li>
                        <li className="flex justify-center items-center w-12 h-12 bg-n-6 rounded-full transition-transform duration-500 hover:-translate-y-2 cursor-pointer">
                            <RiTwitterXFill size={22} />
                        </li>
                        <li className="flex justify-center items-center w-12 h-12 bg-n-6 rounded-full transition-transform duration-500 hover:-translate-y-2 cursor-pointer">
                            <FaYoutube size={25} />
                        </li>
                        <li className="flex justify-center items-center w-12 h-12 bg-n-6 rounded-full transition-transform duration-500 hover:-translate-y-2 cursor-pointer">
                            <TbBrandDribbbleFilled size={25} />
                        </li>
                        <li className="flex justify-center items-center w-12 h-12 bg-n-6 rounded-full transition-transform duration-500 hover:-translate-y-2 cursor-pointer">
                            <FaDiscord size={25} />
                        </li>
                    </ul>
                </div>
            </footer>
        </Section>
    )
}