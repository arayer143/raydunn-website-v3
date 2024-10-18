"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, PhoneCallIcon, MailIcon, Linkedin, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function IntroSection() {
  return (



    <section className="relative bg-gradient-to-r from-slate-600   overflow-hidden py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <div className="absolute inset-0">

      </div>
      <div className="relative max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6 animate-fade-up animate-once animate-duration-500 animate-delay-100 animate-ease-in-out">
          Crafting Digital Experiences
        </h1>
        <p className="mt-6 max-w-3xl text-xl animate-fade-up animate-once animate-duration-500 animate-delay-200 animate-ease-in-out">
          We're a passionate team of designers and developers, creating stunning websites that drive results for businesses of all sizes.
        </p>
        <div className="mt-10 flex items-center gap-x-6 animate-fade-up animate-once animate-duration-500 animate-delay-300 animate-ease-in-out">
          <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href="/contact">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="link" className="text-white hover:text-blue-100">
            <Link href="/portfolio">
              View Our Work <span aria-hidden="true">→</span>
            </Link>
          </Button>
        </div>
        <div className="mt-10 animate-fade-up animate-once animate-duration-500 animate-delay-400 animate-ease-in-out">
          <p className="text-sm font-semibold mb-4">Connect with us:</p>
          <Card className="bg-white bg-opacity-10 max-w-72 border-none">
            <CardContent className="flex space-x-4 p-4">
              <SocialButton href="https://www.facebook.com/profile.php?id=61555772144949" icon={<Facebook className="h-5 w-5" />} label="Facebook" />
              <SocialButton href="https://www.linkedin.com/company/raydunn-web-solutions/" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
              <SocialButton href="mailto:raydunn@raydunnsolutions.com" icon={<MailIcon className="h-5 w-5" />} label="Email" />
              <SocialButton href="tel:5046502562" icon={<PhoneCallIcon className="h-5 w-5" />} label="Phone" />

            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      className="text-white hover:text-blue-100 hover:bg-white hover:bg-opacity-20"
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
  )
}