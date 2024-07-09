import { PlusSvg } from "@/public/svg/common/plus-svg"

interface SectionSvgProps {
    crossesOffset: string
}

export const SectionSvg = ({ crossesOffset }: SectionSvgProps) => {
  return (
    <>
        <div className={`hidden absolute top-0 left-7 ${
            crossesOffset && crossesOffset
        } pointer-events-none md:block md:-left-5 xl:left-7 z-40`}>
            <PlusSvg />
        </div>
        <div className={`hidden absolute top-0 right-7 ${
            crossesOffset && crossesOffset
        } pointer-events-none md:block xl:right-7`}>
            <PlusSvg />
        </div>
    </>
  )
}