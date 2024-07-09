"use client"
import { Section } from "@/app/_components/common/section"
import { PlanetsParallax } from "@/app/_components/root/planets"

export const HomePlanetsSection = () => {
    return (
        <Section
            id="planets-section"
            className="bg-n-7 overflow-hidden"
            crosses={false}
            middleCrosses={false}
            customPaddings={false}
        >
            <div className="w-[100dvw] h-[90dvh] md:h-[85dvh] xl:h-[80dvh] 2xl:h-[72dvh]">
                <PlanetsParallax />
            </div>
        </Section>
    )
}