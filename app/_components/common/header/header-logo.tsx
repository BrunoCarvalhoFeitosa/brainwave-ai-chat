"use client"
import Link from "next/link"
import { BrainwaveLogoSvg } from "@/public/svg/common/brainwave-logo-svg"

export const HeaderLogo = () => {
    return (
        <div>
            <Link href="/">
                <BrainwaveLogoSvg width="180" height="40" />
            </Link>
        </div>
    )
}