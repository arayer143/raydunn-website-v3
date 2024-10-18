import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/raydunnlogoheadert.webp"
        alt="RayDunn Web Solutions Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="absolute z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10" />
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight max-w-5xl">
            Better Solutions For Your Business
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-2xl mx-auto">
            We create stunning, high-performance websites that drive results for your business.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
              <Link href="tel:5046502562">Call Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
              <Link href="mailto:contact@raydunnsolutions.com">Email Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}