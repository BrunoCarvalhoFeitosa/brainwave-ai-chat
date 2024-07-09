"use client"
import Image from "next/image"
import { imageHeroRobot } from "@/constants"
import { Sheet, SheetContent, SheetTrigger } from "@/app/_components/ui/sheet"
import { ButtonGradient } from "@/app/_components/ui/button-gradient"
import { HeaderNavItems } from "@/app/_components/common/header/header-nav-items"
import { RxHamburgerMenu } from "react-icons/rx"

const Rings = () => {
    return (
      <div className="w-[120%] absolute top-1/2 left-1/2 aspect-square border border-white/[0.05] rounded-full -translate-x-1/2 -translate-y-1/2">
        <div className="w-2/3 absolute top-1/2 left-1/2 aspect-square border border-white/[0.05] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="w-2/6 absolute top-1/2 left-1/2 aspect-square border border-white/[0.05] rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>
    )
}

const SideLines = () => {
    return (
        <>
            <div className="absolute top-0 left-5 w-0.25 h-full bg-n-6" />
            <div className="absolute top-0 right-5 w-0.25 h-full bg-n-6" />
        </>
    )
}

const BackgroundCircles = () => {
    return (
        <>
            <div className="absolute top-[4.4rem] left-16 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full animate-bounce" />
            <div className="absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full animate-bounce" />
            <div className="absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full animate-bounce" />
        </>
    )
}

export const HeaderSidebar = () => {
    return (
        <div className="relative overflow-hidden">
            <Sheet>
                <SheetTrigger>
                    <ButtonGradient
                        position="left"
                        icon={<RxHamburgerMenu />}
                    />
                </SheetTrigger>
                <SheetContent className="absolute left-0 top-0 flex justify-center items-center w-[100dvw] h-[100dvh] bg-primary overflow-hidden">
                    <HeaderNavItems />
                    <div className="absolute inset-0 w-full h-full opacity-[.03]">
                        <Image
                            className="w-full h-full object-cover"
                            src={imageHeroRobot}
                            width={688}
                            height={953}
                            alt="Background"
                        />
                    </div>
                    <Rings />
                    <SideLines />
                    <BackgroundCircles />
                </SheetContent>
            </Sheet>
        </div>
    )
}