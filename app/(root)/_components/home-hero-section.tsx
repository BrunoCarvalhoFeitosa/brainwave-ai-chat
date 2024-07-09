"use client"
import { useRef } from "react"
import { Section } from "@/app/_components/common/section"
import { HeroTexts } from "@/app/_components/root/hero/hero-texts"
import { HeroContent } from "@/app/_components/root/hero/hero-content"
import { HeroRings } from "@/app/_components/root/hero/hero-rings"
import { HeroBrands } from "@/app/_components/root/hero/hero-brands"

export const HomeHeroSection = () => {
    const parallaxRef = useRef(null)

    return (
        <Section
            id="explore-section"
            className="pt-[7rem] overflow-hidden"
            crosses={true}
            middleCrosses={true}
            crossesOffset="lg:translate-y-[-1px]"
            customPaddings
        >
            <div className="relative px-5 md:px-20 xl:px-12 md:container" ref={parallaxRef}>
                <div className="relative mb-[4rem] md:mb-20 lg:mb-[6rem] mx-auto max-w-[62rem] text-center z-[1]">
                    <HeroTexts />
                    <HeroContent />
                    <HeroRings />
                    <HeroBrands />
                </div>
            </div>
        </Section>
    )
}