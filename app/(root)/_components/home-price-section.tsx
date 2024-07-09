"use client"
import { Section } from "@/app/_components/common/section"
import { PriceTable } from "@/app/_components/root/price/price-table"
import { PriceTitle } from "@/app/_components/root/price/price-title"

export const HomePriceSection = () => {
    return (
        <Section
            id="price-section"
            className="pt-10 pb-14 md:py-6"
            crosses={false}
            middleCrosses={false}
            customPaddings={false}
        >
            <div className="mx-auto px-5 md:px-20 xl:px-12 md:container max-w-[76rem] pt-0 pb-5 md:pb-16 xl:pb-24">
                <PriceTitle />
                <PriceTable />
            </div>
        </Section>
    )
}