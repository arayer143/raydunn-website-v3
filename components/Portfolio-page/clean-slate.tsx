import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Layout, Palette, FileJson, Database, Globe, Droplet, Shield, Calendar, Star } from 'lucide-react'
import React from 'react'

export default function CleanSlateShowcasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Clean Slate Pressure Washing
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground">
            A modern, responsive website for professional pressure washing services.
          </p>
        </div>

        <div className="mb-16 bg-card rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
            <div className="flex items-center justify-center lg:justify-start">
              <div className="relative w-48 h-48">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Clean Slate Pressure Washing Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-primary">Project Overview</h2>
              <p className="text-lg text-muted-foreground mb-6">
                This website was developed for Clean Slate Pressure Washing, a professional cleaning service. Our goal was to create a 
                visually appealing, user-friendly, and high-performance website that would showcase their 
                services effectively and provide a seamless user experience.
              </p>
              <div className="flex flex-wrap gap-2">
                {['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'].map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-muted p-8">
            <h2 className="text-3xl font-bold mb-6 text-primary">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Responsive design for all devices",
                "Dynamic service catalog with detailed information",
                "Contact form for customer inquiries",
                "Photo gallery of completed projects",
                "Integration with Google Maps for service areas",
                "Custom domain and reliable hosting",
              ].map((feature, index) => (
                <li key={index} className="flex items-center space-x-3 text-foreground">
                  <Droplet className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <Tabs defaultValue="desktop" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="desktop">Desktop View</TabsTrigger>
              <TabsTrigger value="mobile">Mobile View</TabsTrigger>
            </TabsList>
            <TabsContent value="desktop" className="mt-6">
              <div className="flex justify-center items-center">
                <div className="relative w-full max-w-[1200px] aspect-[3/2]">
                  <Image
                    src="/placeholder.svg?height=600&width=1200"
                    alt="Clean Slate Pressure Washing Website Desktop View"
                    fill
                    className="rounded-lg shadow-lg object-contain"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="mobile" className="mt-6">
              <div className="flex justify-center items-center">
                <div className="relative w-full max-w-[400px] aspect-[1/2]">
                  <Image
                    src="/placeholder.svg?height=800&width=400"
                    alt="Clean Slate Pressure Washing Website Mobile View"
                    fill
                    className="rounded-lg shadow-lg object-contain"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Code className="h-10 w-10" />,
              title: "Clean, Semantic HTML",
              description: "Structured markup for better SEO and accessibility."
            },
            {
              icon: <Palette className="h-10 w-10" />,
              title: "Tailwind CSS for Styling",
              description: "Utility-first CSS framework for rapid UI development."
            },
            {
              icon: <Layout className="h-10 w-10" />,
              title: "Responsive Layout",
              description: "Fluid design ensuring compatibility across all devices."
            },
            {
              icon: <FileJson className="h-10 w-10" />,
              title: "Interactive React Components",
              description: "Enhanced user experience with dynamic content and interactions."
            },
            {
              icon: <Database className="h-10 w-10" />,
              title: "Next.js Backend",
              description: "Server-side rendering and API routes for improved performance."
            },
            {
              icon: <Globe className="h-10 w-10" />,
              title: "Domain & Hosting",
              description: "Custom domain setup and reliable hosting for optimal performance."
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

        <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Pressure Washing Business?</h2>
          <p className="text-lg mb-6 text-primary-foreground/80">
            Let's discuss how we can create a stunning and functional website to showcase your pressure washing services.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold hover:bg-secondary/90">
            <a href="/contact">Get Your Free Quote</a>
          </Button>
        </div>
      </div>
    </div>
  )
}