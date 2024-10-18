
import Header from "@/components/Header/header";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ContactSection from "./contact-section";
import { Code, Globe, Laptop, Rocket, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import IntroSection from "@/components/Intro-Section/intro-section"
import WhyChooseUsSection from "@/components/Services-sections/why-choose-us";
import Hero from "@/components/Hero/hero";


export default function Home() {
  return (

    <div className="flex flex-col min-h-screen">

<Header />

    
  <main className="flex-3">



        <section className="w-full bg-gray-100 dark:bg-gray-800">
        <Hero />
        <IntroSection />
        <WhyChooseUsSection />
    

        </section>







b
     
      <section className="w-full py-12 md:py-24 lg:py-32">
            <ContactSection />

      </section>







    </main>
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Terms of Service
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Privacy
        </Link>
      </nav>
    </footer>
  </div>
)
}