import type { Metadata } from "next"
import { Suspense } from "react"
import { Sora } from "next/font/google"
import { Header } from "@/app/_components/common/header"
import { Footer } from "@/app/_components/common/footer"
import { LuLoader2 } from "react-icons/lu"
import "./globals.css"

const font = Sora({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Brainwave",
    description: "Brainwave, o software completo baseado em inteligência artificial 4.0",
    icons: {
        icon: "/favicon/favicon.svg",
        shortcut: "/favicon/favicon.svg"
    },
    authors: {
        name: "Bruno Carvalho Feitosa",
        url: "https://br.linkedin.com/in/bruno-carvalho-feitosa"
    }
}

export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-BR">
            <body className={font.className}>
                <Suspense fallback={
                    <div className="w-[100dvw] h-[100dvh] flex justify-center items-center bg-primary text-purple-600">
                        <LuLoader2 size={28} className="animate-spin" />
                    </div>
                }>
                    <Header />
                    {children}
                    <Footer />
                </Suspense>
            </body>
        </html>
    )
}