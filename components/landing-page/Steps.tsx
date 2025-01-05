import { Eye, Brush } from "lucide-react"
import AnimationContainer from "../global/animation-container"
import { CursorArrowIcon } from "@radix-ui/react-icons"


export function Steps() {
    return (
        <AnimationContainer className="md:mx-48 mt-20 relative">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-foreground/50 to-transparent" />
            <div className="absolute left-1/3 top-[10%] bottom-[10%] w-[1px] bg-gradient-to-b from-transparent via-foreground/50 to-transparent" />
            <div className="absolute right-1/3 top-[10%] bottom-[10%] w-[1px] bg-gradient-to-b from-transparent via-foreground/50 to-transparent" />


            <AnimationContainer delay={0.2} className="grid md:grid-cols-3">
                {/* Steps */}
                <div className="group relative p-8 transition-all duration-300 bg-background/30 hover:bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl">
                    <div className="mb-6 inline-flex items-center gap-3 p-4  rounded-2xl border border-primary/10">
                        <div className="p-2 bg-primary/10 rounded-xl">
                            <CursorArrowIcon className="h-5 w-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-medium text-primary tracking-wider">
                            Avg Ctr
                        </h2>
                    </div>

                    <div className="relative w-full overflow-hidden rounded-2xl border border-white/5 p-2 text-center">
                        <h1 className="text-2xl font-bold">9.6%</h1>
                    </div>
                </div>

                <div className="group relative p-8 transition-all duration-300 bg-background/30 hover:bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl">
                    <div className="mb-6 inline-flex items-center gap-3 p-4  rounded-2xl border border-primary/10">
                        <div className="p-2 bg-primary/10 rounded-xl">
                            <Eye className="h-5 w-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-medium text-primary tracking-wider">
                            Views
                        </h2>
                    </div>

                    <div className="relative w-full overflow-hidden rounded-2xl border border-white/5 p-2 text-center">
                        <h1 className="text-2xl font-bold">10,000,000 +</h1>
                    </div>
                </div>

                <div className="group relative p-8 transition-all duration-300 bg-background/30 hover:bg-white/5 backdrop-blur-sm shadow-lg hover:shadow-xl">
                    <div className="mb-6 inline-flex items-center gap-3 p-4  rounded-2xl border border-primary/10">
                        <div className="p-2 bg-primary/10 rounded-xl">
                            <Brush className="h-5 w-5 text-primary" />
                        </div>
                        <h2 className="text-2xl font-medium text-primary tracking-wider">
                            Thumbnails
                        </h2>
                    </div>

                    <div className="relative w-full overflow-hidden rounded-2xl border border-white/5 p-2 text-center">
                        <h1 className="text-2xl font-bold">100 +</h1>
                    </div>
                </div>

            </AnimationContainer>
        </AnimationContainer>
    )
}