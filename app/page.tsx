
import Header from "@/components/Header/header";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ContactSection from "./contact-section";
import { Code, Globe, Laptop, Rocket, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import IntroSection from "@/components/Intro-Section/intro-section"


export default function Home() {
  return (

    <div className="flex flex-col min-h-screen">

<Header />
    
  <main className="flex-3">
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


        <section className="w-full py-7 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
<IntroSection />



        </section>



      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Why Choose Us
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Zap className="h-6 w-6 mb-2" />
                <CardTitle>Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Our websites are optimized for speed, ensuring a smooth user experience.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Rocket className="h-6 w-6 mb-2" />
                <CardTitle>SEO Optimized</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>We build websites with search engines in mind, helping you rank higher.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Globe className="h-6 w-6 mb-2" />
                <CardTitle>Responsive Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Our sites look great on all devices, from mobile phones to desktops.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Our Services
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <Code className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Custom Web Development</h3>
              <p className="text-gray-500 dark:text-gray-400">Tailored solutions to meet your unique business needs.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Laptop className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">E-commerce Solutions</h3>
              <p className="text-gray-500 dark:text-gray-400">Powerful online stores that drive sales and growth.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Globe className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Web Design</h3>
              <p className="text-gray-500 dark:text-gray-400">Beautiful, user-friendly designs that convert visitors.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Our Portfolio
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Image
                  alt={`Project ${i}`}
                  className="object-cover w-full h-48"
                  height="200"
                  src={`/cleanslatelol-whiteBG.jpg`}
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <CardHeader>
                  <CardTitle>Project {i}</CardTitle>
                  <CardDescription>Brief description of the project and its impact.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm">View Project</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            What Our Clients Say
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Image
                      alt="Client"
                      className="rounded-full"
                      height="40"
                      src=""
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <CardTitle className="text-lg">Client Name</CardTitle>
                      <CardDescription>Company</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  &quot;The team delivered an outstanding website that exceeded our expectations. Highly recommended!&quot;
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
     
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