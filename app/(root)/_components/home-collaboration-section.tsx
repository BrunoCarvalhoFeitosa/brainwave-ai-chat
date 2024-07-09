"use client"
import { Section } from "@/app/_components/common/section"
import { CollaborationTitle } from "@/app/_components/root/collaboration/collaboration-title"
import { CollaborationAdvantages } from "@/app/_components/root/collaboration/collaboration-advantages"
import { CollaborationIntegration } from "@/app/_components/root/collaboration/collaboration-integration"

export const HomeCollaborationSection = () => {
    return (
        <Section
            id="collaboration-section"
            className="pt-[1rem] xl:pt-[3rem] overflow-hidden"
            crosses={true}
            middleCrosses={true}
            crossesOffset="md:translate-y-[0px]"
            customPaddings
        >
            <div className="mx-auto px-5 md:px-20 xl:px-12 md:container max-w-[76rem] pt-10 pb-5 md:pb-32 flex flex-col lg:flex-row items-end md:gap-20">
                <div className="w-full xl:w-[60%]">
                    <CollaborationTitle />
                    <CollaborationAdvantages />
                </div>
                <div className="lg:mt-14 w-full flex-1">
                    <CollaborationIntegration />
                </div>
            </div>
        </Section>
    )
}