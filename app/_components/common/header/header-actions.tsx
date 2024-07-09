"use client"
import Link from "next/link"
import { ButtonGradient } from "@/app/_components/ui/button-gradient"
import { LuUser2 } from "react-icons/lu"

export const HeaderActions = () => {
    return (
        <div className="flex items-center gap-3">
            <div>
                <Link
                    href="/"
                    className={`font-code text-2xl lg:text-sm font-bold uppercase text-zinc-400 hover:text-white`}
                >
                    Nova conta
                </Link>
            </div>
            <div>
                <ButtonGradient
                    title="Entrar"
                    icon={<LuUser2 />}
                    position="left"
                    otherClasses="font-code text-sm"
                />
            </div>
        </div>
    )
}