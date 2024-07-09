"use client"
import { AdvantageCards } from "@/app/_components/root/advantages/advantages-cards"
import { AdvantagesTitle } from "@/app/_components/root/advantages/advantages-title"
import { Section } from "@/app/_components/common/section"

export const HomeAdvantagesSection = () => {
    return (
        <Section
            id="advantages-section"
            className="pt-[1rem] xl:pt-[3rem] overflow-hidden"
            crosses={false}
            middleCrosses={true}
            customPaddings
        >
            <div className="mx-auto px-5 md:px-20 xl:px-12 md:container max-w-[76rem] pb-5 md:pb-16 xl:pb-24">
                <AdvantagesTitle />
                <AdvantageCards />
            </div>
        </Section>
    )
}