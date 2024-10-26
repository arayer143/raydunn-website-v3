import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Code, Layout, Palette, FileJson, Database, Globe, Droplet, Shield, Calendar, Star, ExternalLink } from 'lucide-react'
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div className="order-2 lg:order-1">
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
          <div className="order-1 lg:order-2">
            <AspectRatio ratio={16 / 9} className="bg-muted rounded-xl overflow-hidden">
              <Image
                src="/cleanslatelol-whiteBG.jpg"
                alt="Clean Slate Pressure Washing Services Logo"
                fill
                className="object-contain"
              />
            </AspectRatio>
            <div className="mt-4 text-center">
              <Button asChild size="lg" variant="outline" className="font-semibold">
                <a href="https://cleanslatepressurewashingnola.com/" target="_blank" rel="noopener noreferrer">
                  Visit Clean Slate Pressure Washing <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-primary">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Responsive design for all devices",
              "Dynamic service catalog with detailed information",
              "Contact form for customer inquiries",
              "Photo gallery of completed projects",
              "Integration with Google Maps for service areas",
              "Custom domain and reliable hosting",
            ].map((feature, index) => (
              <Card key={index}>
                <CardContent className="flex items-center space-x-4 p-6">
                  <Droplet className="h-10 w-10 text-primary flex-shrink-0" />
                  <span className="text-lg">{feature}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-primary">Website Highlights</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Modern Design Language</AccordionTrigger>
              <AccordionContent>
                The website features a clean, professional design that aligns with Clean Slate Pressure Washing's brand identity. We used a modern color palette, typography, and layout to create a visually appealing and easy-to-navigate site.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Optimized User Experience</AccordionTrigger>
              <AccordionContent>
                We prioritized user experience by implementing intuitive navigation, fast-loading pages, and clear calls-to-action. The site structure allows visitors to quickly find information about pressure washing services and request quotes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Responsive Design</AccordionTrigger>
              <AccordionContent>
                The website is fully responsive, ensuring a seamless experience across all devices, from desktop computers to mobile phones. This responsiveness helps to capture and retain visitors regardless of their preferred device.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>SEO and Performance Optimization</AccordionTrigger>
              <AccordionContent>
                We implemented various SEO best practices, including semantic HTML structure, optimized meta tags, and fast-loading assets. This helps improve the site's visibility in search engine results and enhances overall performance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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