import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/raydunnlogoheadert.webp"
        alt="RayDunn Web Solutions Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="absolute z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 z-10" />
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="flex flex-col items-center space-y-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight max-w-5xl animate-fade-in-up">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Better Solutions
            </span>{" "}
            For Your Business
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            We create stunning, high-performance websites that drive results for your business.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-8 animate-fade-in-up animation-delay-600">
            <Button asChild size="lg" className="relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg glow-button-blue">
              <Link href="tel:5046502562">Call Us</Link>
            </Button>
            <Button asChild size="lg" className="relative bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg glow-button-purple">
              <Link href="mailto:contact@raydunnsolutions.com">Email Us</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center pb-8 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}