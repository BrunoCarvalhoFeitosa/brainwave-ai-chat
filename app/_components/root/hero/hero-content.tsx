"use client"
import { useEffect, useRef, useState } from "react"
import { MouseParallax, ScrollParallax } from "react-just-parallax"
import { imageHeroNotification, imageHeroRobot, imageHeroUserOne, imageHeroUserThree, imageHeroUserTwo } from "@/constants"
import Image from "next/image"
import { HeroHomeIconSvg } from "@/public/svg/hero/hero-home-icon-svg"
import { HeroFileIconSvg } from "@/public/svg/hero/hero-file-icon-svg"
import { HeroSearchIconSvg } from "@/public/svg/hero/hero-search-icon-svg"
import { HeroPlusIconSvg } from "@/public/svg/hero/hero-plus-icon-svg"
import { LuLoader2 } from "react-icons/lu"

export const HeroContent = () => {
    const [mounted, setMounted] = useState<boolean>(false)
    const parallaxRef = useRef(null)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className="relative mx-auto mt-8 md:mt-0 mb-16 md:mb-24 xl:mb-32 max-w-[23rem] md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
            <div ref={parallaxRef} className="relative p-0.5 rounded-2xl bg-conic-gradient z-[1]">
                <div className="relative bg-n-8 rounded-[1rem]">
                    <div className="h-[1.4rem] rounded-t-[0.9rem] bg-n-10" />
                    <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                        <Image
                            src={imageHeroRobot}
                            alt="Robô"
                            width={1440}
                            height={1800}
                            className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[28%]"
                        />
                    </div>
                    <div>
                        <ScrollParallax isAbsolutelyPositioned>
                            <ul className="flex absolute -left-[1rem] md:-left-[3.2rem] xl:-left-[5.5rem] bottom-[11.5rem] md:bottom-[9.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl z-20">
                                <li className="p-5">
                                    <HeroHomeIconSvg />
                                </li>
                                <li className="p-5">
                                    <HeroFileIconSvg />
                                </li>
                                <li className="p-5">
                                    <HeroSearchIconSvg />
                                </li>
                                <li className="p-5">
                                    <HeroPlusIconSvg />
                                </li>
                            </ul>
                        </ScrollParallax>
                    </div>
                    <div>
                        <ScrollParallax isAbsolutelyPositioned>
                            <div className="absolute -right-[1rem] md:-right-[3rem] xl:-right-[5.5rem] bottom-[19rem] md:bottom-[15rem] w-[18rem] md:flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5 z-20">
                                <Image
                                    src={imageHeroNotification}
                                    width={62}
                                    height={62}
                                    alt="image"
                                    className="hidden md:block rounded-xl"
                                />
                                <div className="flex-1">
                                    <h6 className="mb-1 text-base font-semibold text-left">
                                        Conteúdo gerado.
                                    </h6>
                                    <div className="flex items-center justify-between">
                                        <ul className="flex -m-0.5">
                                            <li className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden">
                                                <Image
                                                    src={imageHeroUserOne}
                                                    className="w-full"
                                                    width={20}
                                                    height={20}
                                                    alt="User"
                                                />
                                            </li>
                                            <li className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden">
                                                <Image
                                                    src={imageHeroUserTwo}
                                                    className="w-full"
                                                    width={20}
                                                    height={20}
                                                    alt="User"
                                                />
                                            </li>
                                            <li className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden">
                                                <Image
                                                    src={imageHeroUserThree}
                                                    className="w-full"
                                                    width={20}
                                                    height={20}
                                                    alt="User"
                                                />
                                            </li>
                                        </ul>
                                        <div className="body-2 text-white md:text-n-13">
                                            1m atrás.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollParallax>
                    </div>
                    <div className="absolute -top-[60%] md:-top-[300px] lg:-top-[340px] xl:-top-[340px] left-1/2 w-[60%] md:w-[90%] lg:w-full xl:w-[115%] aspect-square border border-n-2/5 rounded-full -translate-x-1/2">
                        <MouseParallax enableOnTouchDevice strength={0.07} parallaxContainerRef={parallaxRef}>
                            <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
                                <div
                                    className={`w-6 h-6 -ml-1 -mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                                        mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                    }`}
                                />
                            </div>
                            <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
                                <div
                                    className={`w-8 h-8 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                                        mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                    }`}
                                />
                            </div>
                            <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
                                <div
                                    className={`hidden w-6 h-6 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out ${
                                        mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                    }`}
                                />
                            </div>
                            <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
                                <div
                                    className={`w-7 h-7 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                                        mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                    }`}
                                />
                            </div>
                            <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
                                <div
                                    className={`w-10 h-10 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                                        mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                    }`}
                                />
                            </div>
                            <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
                                <div
                                    className={`w-10 h-10 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                                        mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                    }`}
                                />
                            </div>
                        </MouseParallax>
                    </div>
                    <div className="absolute left-4 right-4 bottom-10 lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2 px-6 flex items-center gap-3 h-[3.5rem] bg-n-8/80 rounded-[1.7rem] border border-n-1/10 text-base z-[1]">
                        <div className="animate-spin text-purple-500">
                            <LuLoader2 size={28} />
                        </div>
                        <div className="text-xs md:text-base uppercase font-semibold">
                            IA gerando o conteúdo...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}