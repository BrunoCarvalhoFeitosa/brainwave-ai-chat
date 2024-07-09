"use client"

interface LeftCurveSvgProps {
    width: string
    height: string
    fill: string
}

export const LeftCurveSvg = ({ width, height, fill }: LeftCurveSvgProps) => {
    return (
        <svg
            viewBox="0 0 522 182"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
        >
            <path
                d="M0.333333 179C0.333333 180.473 1.52724 181.667 3 181.667C4.47276 181.667 5.66667 180.473 5.66667 179C5.66667 177.527 4.47276 176.333 3 176.333C1.52724 176.333 0.333333 177.527 0.333333 179ZM517 3.5L522 5.88675V0.113249L517 2.5V3.5ZM3 179.5H131.782V178.5H3V179.5ZM212.282 99V83H211.282V99H212.282ZM291.782 3.5H517.5V2.5H291.782V3.5ZM212.282 83C212.282 39.0934 247.875 3.5 291.782 3.5V2.5C247.323 2.5 211.282 38.5411 211.282 83H212.282ZM131.782 179.5C176.241 179.5 212.282 143.459 212.282 99H211.282C211.282 142.907 175.688 178.5 131.782 178.5V179.5Z"
                fill={fill}
            />
        </svg>
    )
} 