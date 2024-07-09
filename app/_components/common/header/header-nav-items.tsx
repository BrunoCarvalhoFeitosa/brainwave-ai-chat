"use client"
import { navigation } from "@/constants"
import Link from "next/link"

export const HeaderNavItems = () => {
    return (
        <div className="flex-1">
            <nav className="w-full">
                <ul className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-8 xl:gap-20">
                    {navigation.map((item) => (
                        <li
                            key={item.id}
                            className={`font-code text-2xl lg:text-sm font-extrabold uppercase text-zinc-400 hover:text-white ${item.onlyMobile && "lg:hidden"}`}
                        >
                            <Link href={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}