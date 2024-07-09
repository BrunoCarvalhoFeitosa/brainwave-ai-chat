"use client"
import { collaborationApps } from "@/constants"
import Image from "next/image"
import { LeftCurveSvg } from "@/public/svg/collaboration/left-curve-svg"
import { RightCurveSvg } from "@/public/svg/collaboration/right-curve-svg"
import { BrainwareSymbolSvg } from "@/public/svg/common/brainware-symbol-svg"

export const CollaborationIntegration = () => {
    return (
        <div className="xl:pb-16">
            <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
                <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
                    <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full animate-pulse">
                        <div className="flex justify-center items-center w-full h-full bg-n-8 rounded-full">
                            <BrainwareSymbolSvg
                                width="60"
                                height="60"
                                fill="#AC6AFF"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <ul>
                        {collaborationApps.map((app, index) => (
                            <li
                                key={app.id}
                                className={`absolute top-0 left-1/2 -ml-[1.6rem] h-1/2 origin-bottom rotate-${index * 45}`}
                            >
                                <div className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45}`}>
                                    <Image
                                        src={app.icon}
                                        alt={app.title}
                                        width={app.width}
                                        height={app.height}
                                        className="m-auto"
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <div className="hidden xl:block absolute top-[85%] right-full w-[32.625rem] -mt-1 -mr-5 pointer-events-none">
                        <LeftCurveSvg
                            width="522"
                            height="182"
                            fill="#252134"
                        />
                    </div>
                    <div className="hidden xl:block absolute top-[85%] left-full w-[10.125rem] -mt-1 -ml-5 pointer-events-none">
                        <RightCurveSvg
                            width="162"
                            height="76"
                            fill="#252134"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}