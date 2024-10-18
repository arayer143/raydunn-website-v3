import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Palette, Layers, Zap, RefreshCcw, Award, FileType } from 'lucide-react'
import React from 'react'

export default function LogoDesignPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Logo Design Services
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground">
            Create a memorable brand identity with our professional logo design services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-6 text-primary">Stand Out from the Crowd</h2>
            <p className="text-lg text-muted-foreground">
              Our expert designers craft unique, eye-catching logos that capture the essence of your brand and leave a lasting impression on your audience.
            </p>
            <ul className="space-y-4">
              {[
                "Custom-tailored designs for your brand",
                "Multiple concept options to choose from",
                "Unlimited revisions until you're satisfied",
                "High-resolution files for all media types",
                "Quick turnaround time",
                "Brand guidelines included",
              ].map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-64 sm:h-80 lg:h-96">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Logo Design Illustration"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <Palette className="h-10 w-10" />,
              title: "Creative Concept Development",
              description: "We brainstorm and develop multiple unique concepts that align with your brand vision."
            },
            {
              icon: <Layers className="h-10 w-10" />,
              title: "Versatile Design",
              description: "Your logo will look great across all platforms, from business cards to billboards."
            },
            {
              icon: <Zap className="h-10 w-10" />,
              title: "Quick Turnaround",
              description: "Receive your initial concepts within days, not weeks."
            },
            {
              icon: <RefreshCcw className="h-10 w-10" />,
              title: "Unlimited Revisions",
              description: "We'll refine your chosen concept until it's perfect."
            },
            {
              icon: <Award className="h-10 w-10" />,
              title: "Industry-Leading Quality",
              description: "Our designers stay up-to-date with the latest design trends and best practices."
            },
            {
              icon: <FileType className="h-10 w-10" />,
              title: "Comprehensive File Formats",
              description: "Receive your logo in various file formats suitable for print and digital use."
            },
          ].map((feature, index) => (
            <Card key={index} className="group overflow-hidden transition-all duration-300 hover:shadow-xl">
              <CardHeader className="p-6 bg-primary text-primary-foreground transition-all duration-300 group-hover:bg-primary/90">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-background flex items-center justify-center">
                  {React.cloneElement(feature.icon, { className: "h-8 w-8 text-primary" })}
                </div>
                <CardTitle className="text-center text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <CardDescription className="text-center text-foreground/80">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-primary text-center">Our Logo Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Discovery", description: "We learn about your brand, values, and target audience." },
              { step: "2", title: "Concept", description: "Our designers create multiple unique logo concepts." },
              { step: "3", title: "Refinement", description: "We refine your chosen concept based on your feedback." },
              { step: "4", title: "Delivery", description: "You receive the final logo files and brand guidelines." },
            ].map((phase, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-primary">{phase.step}</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Perfect Logo?</h2>
          <p className="text-lg mb-6 text-primary-foreground/80">
            Let's discuss how we can design a logo that perfectly represents your brand and helps you stand out.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold hover:bg-secondary/90">
            <Link href="/contact">Start Your Logo Design</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}