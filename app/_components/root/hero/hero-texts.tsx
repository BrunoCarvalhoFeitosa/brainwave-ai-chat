"use client"
import { imageHeroCurveGradient } from "@/constants"
import Image from "next/image"

export const HeroTexts = () => {
    return (
        <div className="relative z-[1]">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-semibold">
                Explore as possibilidades da IA com
                <div className="relative inline-block ml-2 md:ml-5">
                    <div>
                        Brainwave.
                    </div>
                    <div className="absolute top-full left-0 w-full">
                        <Image
                            src={imageHeroCurveGradient}
                            width={624}
                            height={28}
                            className="absolute top-full left-0 w-full"
                            alt=""
                        />
                    </div>
                </div>
            </h1>
            <p className="mx-auto my-11 max-w-3xl text-xl text-n-2">
                Libere o poder da Inteligência Artificial com o Brainwave. 
                Aumente sua  produtividade com o melhor software do segmento 
                com código aberto.
            </p>
        </div>
    )
}