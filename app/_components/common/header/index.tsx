"use client"
import { useEffect, useState } from "react"
import { HeaderLogo } from "@/app/_components/common/header/header-logo"
import { HeaderNavItems } from "@/app/_components/common/header/header-nav-items"
import { HeaderActions } from "@/app/_components/common/header/header-actions"
import { HeaderSidebar } from "@/app/_components/common/header/header-sidebar"

export const Header = () => {
    const [isSticky, setIsSticky] = useState<boolean>(false)
    const [lastScrollTop, setLastScrollTop] = useState<number>(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.scrollY

            if (currentScrollTop > lastScrollTop) {
                setIsSticky(false)
            } else {
                setIsSticky(true)
            }

            setLastScrollTop(currentScrollTop)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollTop])

    return (
        <header className={`py-4 px-5 lg:px-7.5 xl:px-10 w-full border-b border-b-stroke bg-primary z-50 ${isSticky ? 'sticky top-0' : 'static'}`}>
            <div className="hidden lg:flex justify-between items-center">
                <HeaderLogo />
                <HeaderNavItems />
                <HeaderActions />
            </div>
            <div className="flex lg:hidden justify-between items-center">
                <HeaderLogo />
                <HeaderSidebar />
            </div>
        </header>
    )
}