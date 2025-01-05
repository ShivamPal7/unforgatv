"use client"
import result1 from "@/app/assets/result1.jpg"
import result2 from "@/app/assets/result2.jpg"
import result3 from "@/app/assets/result3.jpg"
import result4 from "@/app/assets/result4.jpg"
import result5 from "@/app/assets/result5.jpg"
import { motion } from "framer-motion"
import Image from "next/image"
import { Plus } from "lucide-react"

const ResultData = [
  result1,
  result2,
  result3,
  result4,
  result5,
]

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  }),
  hidden: { 
    opacity: 0, 
    y: 30 
  }
}

export function Demo() {
  return (
    <section className="container mx-auto px-4 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter gradient-text">
          Proof of Success
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          My thumbnails have boosted clicks and views for creators like you.
        </p>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {ResultData.map((result, index) => (
          <motion.div 
            custom={index}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "50px", once: true }}
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-lg"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="relative aspect-video w-full overflow-hidden"
            >
              <Image
                src={result}
                alt={`Result thumbnail ${index + 1}`}
                className="object-cover w-full h-full transition-transform"
                placeholder="blur"
              />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  View Details
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}

        <motion.div
          variants={variants}
          custom={ResultData.length}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "50px", once: true }}
          className="group relative overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-primary/10 to-primary/30"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="relative aspect-video w-full overflow-hidden flex flex-col items-center justify-center text-center p-6"
          >
            <Plus className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-semibold text-primary">Many More</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Discover more successful thumbnails in our portfolio
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16 text-center"
      >
        <p className="text-muted-foreground text-lg">
          Content creators who have improved their channel growth with our thumbnails.
        </p>
      </motion.div>
    </section>
  )
}