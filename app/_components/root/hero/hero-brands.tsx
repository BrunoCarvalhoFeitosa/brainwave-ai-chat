"use client"
import Link from "next/link"
import { NextSvg } from "@/public/svg/common/next-svg"
import { ReactSvg } from "@/public/svg/common/react-svg"
import { TypescriptSvg } from "@/public/svg/common/typescript-svg"
import { DockerSvg } from "@/public/svg/common/docker-svg"
import { PostgreSvg } from "@/public/svg/common/postgre-svg"
import { NodeJsSvg } from "@/public/svg/common/node-js-svg"

export const HeroBrands = () => {
    return (
        <div className="relative w-full z-[1]">
            <div className="mx-auto mb-14 md:w-[60%] lg:w-full">
                <h2 className="text-2xl lg:text-3xl font-bold text-center text-n-1">
                    Tecnologias que possuem nossos serviços integrados.
                </h2>
            </div>
            <div className="mx-auto w-[90%] xl:w-[75%] grid grid-cols-3 md:grid-cols-6 place-content-center place-items-center gap-10">
                <Link
                    href="https://nextjs.org"
                    target="_blank"
                    className="transition-transform duration-300 hover:-translate-y-2"
                >
                    <NextSvg width="50" height="50" fill="#AC6AFF" />
                </Link>
                <Link
                    href="https://www.typescriptlang.org"
                    target="_blank"
                    className="transition-transform duration-300 hover:-translate-y-2"
                >
                    <TypescriptSvg width="45" height="45" fill="#AC6AFF" />
                </Link>
                <Link
                    href="https://react.dev"
                    target="_blank"
                    className="transition-transform duration-300 hover:-translate-y-2"
                >
                    <ReactSvg width="50" height="50" fill="#AC6AFF" />
                </Link>
                <Link
                    href="https://nodejs.org/pt"
                    target="_blank"
                    className="transition-transform duration-300 hover:-translate-y-2"
                >
                    <NodeJsSvg width="50" height="50" fill="#AC6AFF" />
                </Link>
                <Link
                    href="https://www.docker.com"
                    target="_blank"
                    className="transition-transform duration-300 hover:-translate-y-2"
                >
                    <DockerSvg width="50" height="50" fill="#AC6AFF" />
                </Link>
                <Link
                    href="https://www.postgresql.org"
                    target="_blank"
                    className="transition-transform duration-300 hover:-translate-y-2"
                >
                    <PostgreSvg width="50" height="50" fill="#AC6AFF" />
                </Link>
            </div>
        </div>
    )
}