'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { Phone, Mail } from 'lucide-react'
import IntroSection from '../Intro-Section/intro-section'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const nextSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        yoyo: Infinity
      }
    },
    tap: { scale: 0.95 }
  }

  const scrollToNextSection = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black text-gold-100 transition-colors duration-500">
        <motion.div 
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAzMG0tMjggMGEyOCAyOCAwIDEgMCA1NiAwYTI4IDI4IDAgMSAwLTU2IDB6IiBzdHJva2U9IiNkNGFmMzciIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAzMG0tMjggMGEyOCAyOCAwIDEgMCA1NiAwYTI4IDI4IDAgMSAwLTU2IDB6IiBzdHJva2U9IiNmZmQ3MDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+')]"
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
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-5%`,
            }}
            animate={{
              y: ['0%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
              delay: i * 0.1
            }}
          />
        ))}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <motion.div 
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={{
              visible: { transition: { staggerChildren: 0.3 } }
            }}
            className="flex flex-col items-center space-y-10 text-center"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight max-w-5xl"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600">
                Better Solutions
              </span>{" "}
              <span className="text-gold-100">For Your Business</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl sm:text-2xl text-gold-200 max-w-2xl mx-auto"
            >
              We create stunning, high-performance websites that drive results for your business.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-8"
            >
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <Button asChild size="lg" className="relative bg-gold-600 hover:bg-gold-700 text-black px-8 py-4 rounded-full transition-colors duration-300 ease-in-out shadow-lg">
                  <Link href="tel:5046502562" className="flex items-center space-x-2">
                    <Phone size={20} />
                    <span>Call Us</span>
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <Button asChild size="lg" className="relative bg-black hover:bg-gray-900 text-gold-400 border-2 border-gold-400 px-8 py-4 rounded-full transition-colors duration-300 ease-in-out shadow-lg">
                  <Link href="mailto:contact@raydunnsolutions.com" className="flex items-center space-x-2">
                    <Mail size={20} />
                    <span>Email Us</span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-0 left-0 right-0 z-10 flex justify-center pb-8"
        >
          <button
            onClick={scrollToNextSection}
            className="focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-opacity-50 rounded-full p-2"
            aria-label="Scroll to next section"
          >
            <svg className="w-8 h-8 text-gold-400 animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </button>
        </motion.div>
      </section>
      <div ref={nextSectionRef} className="w-full bg-black">
        <IntroSection />
      </div>
    </>
  )
}