"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import thumbnail1 from "@/app/assets/thumbnail (1).jpeg"
import thumbnail2 from "@/app/assets/thumbnail (2).jpeg"
import thumbnail3 from "@/app/assets/thumbnail (3).jpeg"
import thumbnail4 from "@/app/assets/thumbnail (4).jpeg"
import thumbnail5 from "@/app/assets/thumbnail (5).jpeg"
import thumbnail6 from "@/app/assets/thumbnail (6).jpeg"
import thumbnail7 from "@/app/assets/thumbnail (7).jpeg"
import thumbnail8 from "@/app/assets/thumbnail (8).jpeg.png"
import thumbnail9 from "@/app/assets/thumbnail (9).jpeg.png"
import thumbnail10 from "@/app/assets/thumbnail (10).jpeg"
import thumbnail11 from "@/app/assets/thumbnail (11).jpeg"
import thumbnail12 from "@/app/assets/thumbnail (12).jpeg.png"
import thumbnail13 from "@/app/assets/thumbnail (13).jpeg.png"
import thumbnail14 from "@/app/assets/thumbnail (14).jpeg.png"
import thumbnail15 from "@/app/assets/thumbnail (15).jpeg.png"

const works = [
  { id: 1, image: thumbnail1 },
  { id: 2, image: thumbnail2 },
  { id: 3, image: thumbnail3 },
  { id: 4, image: thumbnail4 },
  { id: 5, image: thumbnail5 },
  { id: 6, image: thumbnail6 },
  { id: 7, image: thumbnail7 },
  { id: 8, image: thumbnail8 },
  { id: 9, image: thumbnail9 },
  { id: 10, image: thumbnail10 },
  { id: 11, image: thumbnail11 },
  { id: 12, image: thumbnail12 },
  { id: 13, image: thumbnail13 },
  { id: 14, image: thumbnail14 },
  { id: 15, image: thumbnail15 },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

export default function WorkPage() {
  return (
    <main className="relative min-h-screen">
      {/* Background Pattern */}
      <div className="absolute -top-0 left-0 right-0 h-[calc(100vh-80px)]
        dark:bg-[linear-gradient(to_right,#4a5568_1px,transparent_1px),linear-gradient(to_bottom,#4a5568_1px,transparent_1px)]
        bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]
        bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.2]"
      />

      <div className="relative container mx-auto px-4 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6 mb-20"
        >
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter gradient-text">
              My Recent Work
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            My latest thumbnail that have helped content creators increase their views.
            {/* <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              views.
            </span> */}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {works.map((work) => (
            <motion.div
              key={work.id}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent p-3"
            >
              <motion.div
                className="relative aspect-video w-full overflow-hidden rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ 
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
              >
                <Image
                  src={work.image}
                  alt={`Thumbnail ${work.id}`}
                  className="object-cover w-full h-full transition-all duration-300 group-hover:brightness-110"
                  placeholder="blur"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Many More Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-16 space-y-2"
        >
          <h3 className="text-3xl font-bold gradient-text">
            Many More...
          </h3>
          <p className="text-muted-foreground">
            More thumbnail will be added soon...
          </p>
        </motion.div>

        {/* Empty State Message */}
        {works.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-muted-foreground text-lg">
              More works coming soon...
            </p>
          </motion.div>
        )}

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>
    </main>
  )
} 