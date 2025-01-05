"use client"
import Image from "next/image"
import {motion} from "framer-motion"
import thumbnail1 from "@/app/assets/thumbnail (1).jpeg"
import thumbnail2 from "@/app/assets/thumbnail (2).jpeg"
import thumbnail3 from "@/app/assets/thumbnail (3).jpeg"
import thumbnail4 from "@/app/assets/thumbnail (4).jpeg"
import thumbnail5 from "@/app/assets/thumbnail (5).jpeg"
import thumbnail6 from "@/app/assets/thumbnail (6).jpeg"
import thumbnail7 from "@/app/assets/thumbnail (7).jpeg"
import thumbnail8 from "@/app/assets/thumbnail (8).jpeg.png"
import { Button } from "../ui/button"

export function CallToAction() {
    return (
        <div className="relative w-full py-40 overflow-hidden mt-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)]
                            bg-[size:3rem_3rem] opacity-25" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent" />

            <div className="relative z-10 px-4 h-[220px]">
                <div className="absolute top-[-50%] left-0 w-full h-[1500px] mx-auto">
                    <motion.div
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        animate={{
                            rotate: 360
                        }}
                        transition={{
                            duration: 90,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {[thumbnail8, thumbnail7, thumbnail6, thumbnail4, thumbnail5, thumbnail3, thumbnail2, thumbnail1].map((thumbnail, index) => {
                            const angle = (index / 4) * 2 * Math.PI
                            const radius = 650
                            return (
                                <div
                                    key={index}
                                    className="absolute"
                                    style={{
                                        transform: `translate(-50%, -50%) rotate(${(angle * 90) / Math.PI}deg) translate(${radius}px)`,
                                    }}
                                >
                                    <div className="relative w-[340px] group rotate-90">
                                        <Image
                                            src={thumbnail}
                                            alt="thumnbail"
                                            className="w-full h-full object-cover opacity-90"
                                        />
                                    </div>

                                </div>
                            )
                        })}
                    </motion.div>
                </div>
            </div>

            <div className="text-center space-y-2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                    The Views Machine
                </h2>
                <p className="text-lg text-muted-foreground max-w-lg mx-auto">
                        Thumbnails that grab attention and boost your views instantly!
                </p>
                <Button
                    variant="default"
                >
                    Get Started
                </Button>
            </div>

        </div>
    )
}