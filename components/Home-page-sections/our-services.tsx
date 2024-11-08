"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Code, Paintbrush, ShoppingCart } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Web Design",
    description: "Create stunning, user-friendly websites that captivate your audience and drive engagement.",
    icon: Paintbrush,
  },
  {
    title: "Web Development",
    description: "Build robust, scalable web applications using cutting-edge technologies and best practices.",
    icon: Code,
  },
  {
    title: "E-commerce Solutions",
    description: "Develop secure, feature-rich online stores that boost your sales and streamline operations.",
    icon: ShoppingCart,
  },
  {
    title: "SEO Optimization",
    description: "Improve your website's visibility and attract more organic traffic with our SEO expertise.",
    icon: Globe,
  },
]

export default function OurServicesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section
      ref={sectionRef}
      className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800"
    >
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
      <div className="absolute inset-0 bg-gradient-to-r from-primary-100/30 dark:from-primary-900/30" />
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-900 dark:text-primary-100">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-primary-700 dark:text-primary-300 max-w-3xl mx-auto">
            We offer a comprehensive range of web development services to help your business thrive online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col bg-gradient-to-r from-primary-200 to-primary-300 dark:from-primary-800 dark:to-primary-700">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 rounded-full  dark:bg-primary-950 flex items-center justify-center relative">
                      <div className="absolute inset-0 border-2 border-primary-600 dark:border-primary-400 rounded-full"></div>
                      <service.icon className="h-8 w-8 text-primary-600 dark:text-primary-100" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-primary-900 dark:text-primary-900 light:text-primary-100 text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-primary-700 dark:text-primary-300 text-center">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Button asChild size="lg" className="bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-400 dark:text-primary-900 dark:hover:bg-primary-300">
            <Link href="/services" className="inline-flex items-center">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}