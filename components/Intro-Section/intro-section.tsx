"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, PhoneCallIcon, MailIcon, Linkedin, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function IntroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
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
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Crafting Digital Experiences
        </motion.h1>
        <motion.p
          className="mt-6 max-w-3xl text-xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We're a passionate team of designers and developers, creating stunning websites that drive results for businesses of all sizes.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button asChild size="lg" variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300">
            <Link href="/contact">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="link" className="text-blue-300 hover:text-blue-100 transition-colors duration-300">
            <Link href="/portfolio">
              View Our Work <span aria-hidden="true">→</span>
            </Link>
          </Button>
        </motion.div>
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-sm font-semibold text-gray-400 mb-4">Connect with us:</p>
          <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border-none">
            <CardContent className="flex flex-wrap justify-center sm:justify-start gap-4 p-4">
              <SocialButton href="https://www.facebook.com/profile.php?id=61555772144949" icon={<Facebook className="h-5 w-5" />} label="Facebook" />
              <SocialButton href="https://www.linkedin.com/company/raydunn-web-solutions/" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
              <SocialButton href="mailto:raydunn@raydunnsolutions.com" icon={<MailIcon className="h-5 w-5" />} label="Email" />
              <SocialButton href="tel:5046502562" icon={<PhoneCallIcon className="h-5 w-5" />} label="Phone" />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <Button
        asChild
        variant="ghost"
        size="icon"
        className="text-gray-300 hover:text-white hover:bg-white hover:bg-opacity-20 transition-colors duration-300"
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          {icon}
        </a>
      </Button>
    </motion.div>
  )
}