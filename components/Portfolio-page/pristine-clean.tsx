import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Code, Layout, Palette, FileJson, Database, Globe, Droplet, Shield, Calendar, Star, ExternalLink } from 'lucide-react'
import React from 'react'

export default function PristineCleanShowcasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Pristine Clean Soft Wash
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground">
            A sleek, modern website showcasing professional soft wash services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6 text-primary">Project Overview</h2>
            <p className="text-lg text-muted-foreground mb-6">
              This website was developed for Pristine Clean Soft Wash, a professional soft washing service. Our aim was to create an 
              attractive, user-friendly, and efficient website that effectively showcases their 
              soft wash services and provides an excellent user experience for potential clients.
            </p>
            <div className="flex flex-wrap gap-2">
              {['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Sass'].map((tech) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <AspectRatio ratio={1} className="bg-muted rounded-xl overflow-hidden">
              <Image
                src="/pristinecleanlogo.webp"
                alt="Pristine Clean Soft Wash Logo"
                fill
                className="object-contain"
              />
            </AspectRatio>
            <div className="mt-4 text-center">
              <Button asChild size="lg" variant="outline" className="font-semibold">
                <a href="https://pristinecleansoftwash.com/" target="_blank" rel="noopener noreferrer">
                  Visit Pristine Clean Soft Wash <ExternalLink className="ml-2 h-4 w-4" />
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
              "Responsive design optimized for all devices",
              "Comprehensive service catalog with detailed descriptions",
              "Online booking system for scheduling appointments",
              "Before and after gallery showcasing cleaning results",
              "Customer testimonials and reviews section",
              "Blog with soft washing tips and maintenance advice",
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
                The website features a clean, professional design that aligns with Pristine Clean Soft Wash's brand identity. We used a modern color palette, typography, and layout to create a visually appealing and easy-to-navigate site.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Optimized User Experience</AccordionTrigger>
              <AccordionContent>
                We prioritized user experience by implementing intuitive navigation, fast-loading pages, and clear calls-to-action. The site structure allows visitors to quickly find information about soft wash services and book appointments.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Integrated Booking System</AccordionTrigger>
              <AccordionContent>
                The website features a seamlessly integrated online booking system, allowing customers to schedule soft wash services at their convenience. This enhances user experience and streamlines the booking process for the business.
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
              description: "Well-structured markup for improved SEO and accessibility."
            },
            {
              icon: <Palette className="h-10 w-10" />,
              title: "Sass for Styling",
              description: "Advanced CSS pre-processor for maintainable and scalable styles."
            },
            {
              icon: <Layout className="h-10 w-10" />,
              title: "Responsive Layout",
              description: "Fluid design ensuring a great experience across all devices."
            },
            {
              icon: <Calendar className="h-10 w-10" />,
              title: "Booking Integration",
              description: "Seamless integration with online scheduling system."
            },
            {
              icon: <Database className="h-10 w-10" />,
              title: "PHP Backend",
              description: "Robust server-side logic for dynamic content and form handling."
            },
            {
              icon: <Star className="h-10 w-10" />,
              title: "Review System",
              description: "Integrated customer review and rating functionality."
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
          <h2 className="text-3xl font-bold mb-4">Want a Website That Shines?</h2>
          <p className="text-lg mb-6 text-primary-foreground/80">
            Let's discuss how we can create a stunning and functional website to showcase your soft wash services.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold hover:bg-secondary/90">
            <a href="/contact">Get Your Free Quote</a>
          </Button>
        </div>
      </div>
    </div>
  )
}