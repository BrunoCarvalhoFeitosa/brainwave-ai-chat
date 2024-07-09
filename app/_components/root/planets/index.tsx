"use client"
import { useEffect, useRef, useState } from "react"
import { MouseParallax } from "react-just-parallax"
import { stars } from "@/constants"
import { WiStars } from "react-icons/wi"

export const PlanetsParallax = () => {
    const [mounted, setMounted] = useState<boolean>(false)
    const parallaxRef = useRef(null)

    useEffect(() => {
        setMounted(true)
    }, [])
    
    return (
        <div className="w-full h-full" ref={parallaxRef}>
            <MouseParallax enableOnTouchDevice  strength={0.07} parallaxContainerRef={parallaxRef}>
                <div className="absolute bottom-2/4 xl:bottom-0 md:left-[170px] xl:left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg] z-20">
                    <div
                        className={`w-14 h-14 -ml-1 xl:-mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    />
                </div>
                <div className="absolute -bottom-32 left-0 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
                    <div
                        className={`w-20 h-20 -ml-1 xl:-mt-36 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    />
                </div>
                <div className="absolute top-[-35px] xl:top-0 xl:bottom-1/2 left-3/4 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
                    <div
                        className={`w-28 h-28 xl:-ml-1 xl:-mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    />
                </div>
                <div className="absolute bottom-2/4 md:bottom-[38%] xl:bottom-1/2 xl:left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
                    <div
                        className={`w-16 h-16 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out ${
                            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    />
                </div>
                <div className="absolute bottom-1/2 left-full xl:left-0 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
                    <div
                        className={`w-6 h-6 -ml-1 mt-[12.9rem] bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out ${
                            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    />
                </div>
                <div className="absolute bottom-44 xl:bottom-[36%] left-full xl:left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
                    <div
                        className={`w-7 h-7 -ml-1.5 mt-20 xl:mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    />
                </div>
                <div className="absolute bottom-10 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
                    <div
                        className={`w-12 h-12 -ml-1.5 mt-52 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    />
                </div>
                <div className="absolute bottom-1/2 xl:left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
                    <div
                        className={`w-10 h-10 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    />
                </div>
                <div className="absolute bottom-[38%] xl:bottom-1/2 xl:left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
                    <div
                        className={`w-14 h-14 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
                    />
                </div>
                <div>
                    {stars.map(({ top, left }, index) => (
                        <div
                            key={index}
                            className="absolute w-4 h-4 animate-pulse"
                            style={{ top: top, left: left }}
                        >
                            <WiStars size={32} />
                        </div>
                    ))}
                </div>
            </MouseParallax>
        </div>
    )
}