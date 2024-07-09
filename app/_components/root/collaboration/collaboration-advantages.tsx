"use client"
import { FaCheck } from "react-icons/fa6"

export const CollaborationAdvantages = () => {
    return (
        <div className="mt-8">
            <div className="pb-7 w-full xl:w-2/3">
                <div className="flex items-center gap-3">
                    <div className="flex justify-center items-center w-7 h-7 rounded-full bg-purple-600 text-primary">
                        <FaCheck />
                    </div>
                    <div>
                        <h3 className="text-lg text-n-1">
                            Integração perfeita
                        </h3>
                    </div>
                </div>
                <div className="mt-3">
                    <p className="text-base text-n-2">
                        Com automação inteligente e segurança de alto nível, 
                        é a solução perfeita para equipes que buscam trabalhar 
                        de maneira mais inteligente.
                    </p>
                </div>
            </div>
            <div className="pb-7 w-full xl:w-2/3">
                <div className="flex items-center gap-3">
                    <div className="flex justify-center items-center w-7 h-7 rounded-full bg-purple-600 text-primary">
                        <FaCheck />
                    </div>
                    <div>
                        <h3 className="text-lg text-n-1">
                            Automação inteligente
                        </h3>
                    </div>
                </div>
                <div className="mt-3">
                    <p className="text-base text-n-2">
                        Com automação inteligente e segurança de alto nível, 
                        é a solução perfeita para equipes que buscam trabalhar 
                        de maneira mais inteligente.
                    </p>
                </div>
            </div>
            <div className="pb-7 w-full xl:w-2/3">
                <div className="flex items-center gap-3">
                    <div className="flex justify-center items-center w-7 h-7 rounded-full bg-purple-600 text-primary">
                        <FaCheck />
                    </div>
                    <div>
                        <h3 className="text-lg text-n-1">
                            Segurança de alto nível
                        </h3>
                    </div>
                </div>
                <div className="mt-3">
                    <p className="text-base text-n-2">
                        Com automação inteligente e segurança de alto nível, 
                        é a solução perfeita para equipes que buscam trabalhar 
                        de maneira mais inteligente.
                    </p>
                </div>
            </div>
        </div>
    )
}