"use client"
import { SectionSvg } from "@/public/svg/common/section-svg"
import { PlusSvg } from "@/public/svg/common/plus-svg"

interface SectionProps {
    id: string
    className: string
    crosses: boolean
    middleCrosses?: boolean
    crossesOffset?: string
    customPaddings: boolean
    children: React.ReactNode
}

export const Section = ({ id, className, crosses, middleCrosses, crossesOffset, customPaddings, children }: SectionProps) => {
    return (
        <section id={id} className={`relative ${customPaddings ?? `py-10 lg:py-16 xl:py-20 ${crosses && "lg:py-32 xl:py-40"}`} ${className}`}>
            {children}
            <div className="hidden md:block absolute top-0 left-8 lg:left-7 xl:left-8 w-[1px] h-full bg-stroke pointer-events-none" />
            <div className="hidden md:block absolute top-0 right-8 lg:right-7 xl:right-8 w-[1px] h-full bg-stroke pointer-events-none" />
            {crosses && (
                <div>
                    <div className={`hidden absolute top-0 left-7 right-7 h-[1px] bg-stroke ${crossesOffset && crossesOffset} md:block xl:left-10 right-10 pointer-events-none`} />
                    <SectionSvg crossesOffset={crossesOffset as string} />
                </div>
            )}
            {middleCrosses && (
                <div>
                    <div className="hidden absolute top-[43.25rem] left-10 right-10 h-[1px] bg-n-6 pointer-events-none xl:block" />
                    <PlusSvg className="hidden absolute top-[43rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />
                    <PlusSvg className="hidden absolute top-[43rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
                </div>
            )}
        </section>
    )
}