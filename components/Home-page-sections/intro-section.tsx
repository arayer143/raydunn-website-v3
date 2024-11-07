'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Facebook, PhoneCall, Mail, Linkedin, ArrowRight } from "lucide-react"

export default function IntroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          backgroundPosition: isHovered ? ['0% 0%', '100% 100%'] : ['0% 0%', '0% 0%'],
        }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />
      <Card className="relative z-10 w-full max-w-7xl mx-auto bg-white/90 dark:bg-gray-800/90 shadow-2xl rounded-lg overflow-hidden backdrop-blur-sm">
        <CardContent className="p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Image
                src="/PNG Transparent Logo.png"
                alt="RayDunn Web Solutions Logo"
                width={300}
                height={100}
                className="mx-auto lg:mx-0"
              />
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary-900 dark:text-primary-100 text-center lg:text-left">
                RayDunn Web Solutions
              </h1>
              <p className="text-xl text-primary-700 dark:text-primary-300 text-center lg:text-left">
                We're a passionate team of designers and developers, creating stunning websites that drive results for businesses of all sizes.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Button asChild size="lg" className="bg-gray-200 hover:bg-gray-300 text-primary-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white transition-colors duration-300">
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-gray-200 hover:bg-gray-300 text-primary-900 border-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-500 transition-colors duration-300">
                  <Link href="/portfolio">
                    View Our Work
                  </Link>
                </Button>
              </div>
            </div>
            <Card className="bg-white dark:bg-gray-900 shadow-md">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-primary-900 dark:text-primary-100">Connect with us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 justify-items-center">
                  <ContactButton
                    href="mailto:raydunn@raydunnsolutions.com"
                    icon={<Mail className="h-5 w-5" />}
                    label="Email Us"
                  />
                  <ContactButton
                    href="tel:5046502562"
                    icon={<PhoneCall className="h-5 w-5" />}
                    label="Call Us"
                  />
                </div>
                <Separator className="my-4" />
                <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <SocialButton href="https://www.facebook.com/profile.php?id=61555772144949" icon={<Facebook className="h-5 w-5" />} label="Facebook" />
                  <SocialButton href="https://www.linkedin.com/company/raydunn-web-solutions/" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

function ContactButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button 
        asChild 
        variant="default" 
        className="justify-center bg-gray-200 hover:bg-gray-300 text-primary-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white transition-colors duration-300 shadow-md hover:shadow-lg"
      >
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
          {icon}
          <span>{label}</span>
        </a>
      </Button>
    </motion.div>
  )
}

function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button 
        asChild 
        variant="default" 
        className="justify-center bg-gray-200 hover:bg-gray-300 text-primary-900 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white transition-colors duration-300 shadow-md hover:shadow-lg"
      >
        <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
          {icon}
          <span>{label}</span>
        </a>
      </Button>
    </motion.div>
  )
}