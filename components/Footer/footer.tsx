"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Facebook, Linkedin, Mail, Phone } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.1 } }
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

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
      <motion.div 
        className="container mx-auto max-w-6xl relative z-10"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div variants={fadeInUp} className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <Image
              src="/PNG Transparent Logo.png"
              alt="RayDunn Solutions Logo"
              width={200}
              height={60}
              className="mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-300">RayDunn Solutions</h3>
            <p className="text-gray-700 dark:text-gray-200">Crafting digital experiences that inspire and engage.</p>
          </motion.div>
          <motion.div variants={fadeInUp} className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2 items-center md:items-start">
              <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">Home</Link>
              <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">About</Link>
              <Link href="/services" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">Services</Link>
              <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">Contact</Link>
            </nav>
          </motion.div>
          <motion.div variants={fadeInUp} className="space-y-4 flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold text-center text-gray-900 dark:text-white">Contact Us</h4>
            <div className="flex flex-col space-y-4 w-full md:w-auto">
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <Button asChild size="lg" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 text-white rounded-full transition-colors duration-300 ease-in-out shadow-lg">
                  <Link href="tel:5046502562" className="flex items-center justify-center space-x-2">
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
                <Button asChild size="lg" className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 text-white rounded-full transition-colors duration-300 ease-in-out shadow-lg">
                  <Link href="mailto:contact@raydunnsolutions.com" className="flex items-center justify-center space-x-2">
                    <Mail size={20} />
                    <span>Email Us</span>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <motion.div 
          variants={fadeInUp}
          className="pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col items-center sm:flex-row sm:justify-between"
        >
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 sm:mb-0 text-center sm:text-left">
            © {new Date().getFullYear()} RayDunn Web Solutions. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Button asChild variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
              <Link href="https://www.linkedin.com/company/raydunn-web-solutions/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
              <Link href="https://www.facebook.com/profile.php?id=61555772144949" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
            </Button>
     
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}