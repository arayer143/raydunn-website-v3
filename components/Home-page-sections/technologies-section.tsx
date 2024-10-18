"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { FaHtml5, FaCss3Alt, FaSass, FaJs, FaPhp, FaBootstrap, FaReact } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"

export default function TechnologiesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const technologies = [
    { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "Sass", icon: FaSass, color: "text-pink-500" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
    { name: "PHP", icon: FaPhp, color: "text-purple-500" },
    { name: "Bootstrap", icon: FaBootstrap, color: "text-indigo-500" },
    { name: "React", icon: FaReact, color: "text-cyan-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
  ]

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.h2 
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-800 dark:text-gray-100"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          Technologies We Use
        </motion.h2>
        <motion.p
          className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We leverage cutting-edge technologies to build robust, scalable, and beautiful websites tailored to your needs.
        </motion.p>
        <div className="relative w-full overflow-hidden">
          <motion.div 
            className="flex space-x-8"
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <TechCard
                key={`${tech.name}-${index}`}
                name={tech.name}
                Icon={tech.icon}
                color={tech.color}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TechCard({ name, Icon, color }: { name: string; Icon: React.ElementType; color: string }) {
  return (
    <Card className="flex-shrink-0 w-40 bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border border-gray-200 dark:border-gray-600">
      <CardContent className="flex flex-col items-center justify-center p-6">
        <Icon className={`text-4xl ${color} mb-4`} />
        <h3 className="text-sm font-semibold text-center text-gray-800 dark:text-gray-100">{name}</h3>
      </CardContent>
    </Card>
  )
}