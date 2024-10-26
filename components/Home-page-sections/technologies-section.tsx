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
    { name: "HTML", icon: FaHtml5, color: "text-orange-500 dark:text-orange-300" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-500 dark:text-blue-300" },
    { name: "Sass", icon: FaSass, color: "text-pink-500 dark:text-pink-300" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-500 dark:text-yellow-300" },
    { name: "PHP", icon: FaPhp, color: "text-purple-500 dark:text-purple-300" },
    { name: "Bootstrap", icon: FaBootstrap, color: "text-indigo-500 dark:text-indigo-300" },
    { name: "React", icon: FaReact, color: "text-cyan-500 dark:text-cyan-300" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500 dark:text-teal-300" },
  ]

  return (
    <section ref={sectionRef} className="w-full py-16 md:py-24 lg:py-32 bg-background overflow-hidden relative">
      <motion.div 
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAzMG0tMjggMGEyOCAyOCAwIDEgMCA1NiAwYTI4IDI4IDAgMSAwLTU2IDB6IiBzdHJva2U9IiM5M2MzZWUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAzMG0tMjggMGEyOCAyOCAwIDEgMCA1NiAwYTI4IDI4IDAgMSAwLTU2IDB6IiBzdHJva2U9IiM2MzY2ZjEiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+')]"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
          transition: {
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
      />
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <motion.h2 
          className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-center mb-8 text-foreground dark:text-foreground"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          Technologies We Use
        </motion.h2>
        <motion.p
          className="text-lg text-center text-muted-foreground dark:text-muted-foreground/90 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We leverage cutting-edge technologies to build robust, scalable, and beautiful websites tailored to your needs.
        </motion.p>
        <div className="relative w-full overflow-hidden py-8">
          <motion.div 
            className="flex space-x-6"
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
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
      className="flex-shrink-0"
    >
      <Card className="w-32 h-32 bg-card/50 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 ease-in-out border border-border/50 rounded-lg overflow-hidden">
        <CardContent className="flex flex-col items-center justify-center h-full p-4 relative group">
          <Icon className={`text-4xl ${color} mb-2 relative z-10 transition-transform duration-300 ease-in-out group-hover:scale-110`} />
          <h3 className="text-sm font-semibold text-center text-foreground dark:text-foreground/90 relative z-10 transition-all duration-300 ease-in-out group-hover:text-primary">{name}</h3>
        </CardContent>
      </Card>
    </motion.div>
  )
}