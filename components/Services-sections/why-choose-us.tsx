"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Shield, Users } from "lucide-react"

export default function WhyChooseUsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.h2 
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-800 dark:text-gray-100"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          Why Choose Us
        </motion.h2>
        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ReasonCard
            icon={<Zap className="h-12 w-12 mb-4 text-gray-600 dark:text-gray-300" />}
            title="Fast & Efficient"
            description="We deliver high-performance websites that load quickly and run smoothly."
            delay={0}
            isInView={isInView}
          />
          <ReasonCard
            icon={<Shield className="h-12 w-12 mb-4 text-gray-600 dark:text-gray-300" />}
            title="Secure & Reliable"
            description="Our solutions prioritize your data security and ensure consistent uptime."
            delay={0.2}
            isInView={isInView}
          />
          <ReasonCard
            icon={<Users className="h-12 w-12 mb-4 text-gray-600 dark:text-gray-300" />}
            title="Client-Focused Approach"
            description="We work closely with you to understand and meet your specific needs."
            delay={0.4}
            isInView={isInView}
          />
        </motion.div>
      </div>
    </section>
  )
}

function ReasonCard({ icon, title, description, delay, isInView }: { icon: React.ReactNode; title: string; description: string; delay: number; isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay + 0.6 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Card className="w-full max-w-sm bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border border-gray-200 dark:border-gray-600">
        <CardHeader className="flex flex-col items-center pt-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: delay + 0.8 }}
          >
            {icon}
          </motion.div>
          <CardTitle className="text-xl font-bold text-center mb-2 text-gray-800 dark:text-gray-100">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-600 dark:text-gray-300">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}