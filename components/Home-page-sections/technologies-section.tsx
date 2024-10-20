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
    { name: "HTML", icon: FaHtml5, color: "text-orange-500 dark:text-orange-400" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-500 dark:text-blue-400" },
    { name: "Sass", icon: FaSass, color: "text-pink-500 dark:text-pink-400" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-500 dark:text-yellow-400" },
    { name: "PHP", icon: FaPhp, color: "text-purple-500 dark:text-purple-400" },
    { name: "Bootstrap", icon: FaBootstrap, color: "text-indigo-500 dark:text-indigo-400" },
    { name: "React", icon: FaReact, color: "text-cyan-500 dark:text-cyan-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500 dark:text-teal-400" },
  ]

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.h2 
          className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          Technologies We Use
        </motion.h2>
        <motion.p
          className="text-lg text-center text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We leverage cutting-edge technologies to build robust, scalable, and beautiful websites tailored to your needs.
        </motion.p>
        <div className="relative w-full overflow-hidden py-8">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-gray-50 dark:from-gray-800 dark:via-transparent dark:to-gray-800 z-10"></div>
          <motion.div 
            className="flex space-x-6"
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
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
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
      className="flex-shrink-0"
    >
      <Card className="w-32 h-32 bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden">
        <CardContent className="flex flex-col items-center justify-center h-full p-4 relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-100 dark:to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
          <Icon className={`text-4xl ${color} mb-2 relative z-10 transition-transform duration-300 ease-in-out group-hover:scale-110`} />
          <h3 className="text-sm font-semibold text-center text-gray-800 dark:text-gray-100 relative z-10 transition-all duration-300 ease-in-out group-hover:text-primary dark:group-hover:text-primary-400">{name}</h3>
        </CardContent>
      </Card>
    </motion.div>
  )
}