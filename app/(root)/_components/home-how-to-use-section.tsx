"use client"
import { Section } from "@/app/_components/common/section"
import { HowToUseSmartest } from "@/app/_components/root/how-to-use/how-to-use-smartest"
import { HowToUsePhotoEditing } from "@/app/_components/root/how-to-use/how-to-use-photo-editing"

export const HomeHowToUseSection = () => {
    return (
        <Section
            id="how-to-use-section"
            className="md:pb-[1.5rem] lg:pb-[3.5rem] xl:py-[4rem] overflow-hidden"
            crosses={false}
            middleCrosses={true}
            customPaddings
        >
            <div className="mx-auto px-5 md:px-20 xl:px-12 md:container max-w-[76rem]">
                <HowToUseSmartest />
                <HowToUsePhotoEditing />
            </div>
        </Section>
    )
}