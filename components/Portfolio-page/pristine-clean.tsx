'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Code, Layout, Palette, FileJson, Database, Globe, Droplet, Calendar, Star, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import dynamic from 'next/dynamic'
import React from 'react'

const PortfolioScene = dynamic(() => import('@/components/PortfolioScene'), { ssr: false })

export default function PristineCleanShowcasePage() {
  const { theme } = useTheme()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  }

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-b from-background to-secondary/10 dark:from-background dark:to-secondary/5"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="text-4xl font-extrabold tracking-tight text-primary dark:text-primary sm:text-5xl md:text-6xl">
            Pristine Clean Soft Wash
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-foreground dark:text-foreground">
            A sleek, modern website showcasing professional soft wash services.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center" variants={itemVariants}>
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6 text-primary dark:text-primary-foreground">Project Overview</h2>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground/90 mb-6">
              This website was developed for Pristine Clean Soft Wash, a professional soft washing service. Our aim was to create an 
              attractive, user-friendly, and efficient website that effectively showcases their 
              soft wash services and provides an excellent user experience for potential clients.
            </p>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground/90 mt-4">
              We've implemented modern web technologies to ensure fast loading times, smooth interactions, and a responsive design that looks great on all devices.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {[ 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-secondary/50 text-secondary-foreground dark:bg-secondary/30 dark:text-secondary-foreground/90">{tech}</Badge>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <AspectRatio ratio={16 / 9} className="bg-muted dark:bg-muted/30 rounded-xl overflow-hidden">
              <div className="w-full h-full">
                <PortfolioScene 
                  imagePath="/pristinecleanlogo.webp"
                  scale={2.0}
                  bounceSpeed={1.0}
                  rotationSpeed={0.8}
                />
              </div>
            </AspectRatio>
            <div className="mt-4 text-center">
              <Button asChild size="lg" variant="outline" className="font-semibold bg-background dark:bg-background/10 text-foreground dark:text-foreground/90 hover:bg-secondary/80 dark:hover:bg-secondary/20">
                <a href="https://pristinecleansoftwash.com/" target="_blank" rel="noopener noreferrer">
                  Visit Pristine Clean Soft Wash <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        <Separator className="my-12 bg-border dark:bg-border/50" />

        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6 text-primary dark:text-primary-foreground">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Responsive design optimized for all devices",
              "Comprehensive service catalog with detailed descriptions",
              "Online booking system for scheduling appointments",
              "Before and after gallery showcasing cleaning results",
              "Customer testimonials and reviews section",
              "Blog with soft washing tips and maintenance advice",
            ].map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-card dark:bg-card/50 text-card-foreground dark:text-card-foreground/90">
                  <CardContent className="flex items-center space-x-4 p-6">
                    <Droplet className="h-10 w-10 text-primary dark:text-primary-foreground flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6 text-primary dark:text-primary-foreground">Website Highlights</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-border dark:border-border/50">
              <AccordionTrigger className="text-foreground dark:text-foreground/90">Modern Design Language</AccordionTrigger>
              <AccordionContent className="text-muted-foreground dark:text-muted-foreground/90">
                The website features a clean, professional design that aligns with Pristine Clean Soft Wash's brand identity. We used a modern color palette, typography, and layout to create a visually appealing and easy-to-navigate site.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-border dark:border-border/50">
              <AccordionTrigger className="text-foreground dark:text-foreground/90">Optimized User Experience</AccordionTrigger>
              <AccordionContent className="text-muted-foreground dark:text-muted-foreground/90">
                We prioritized user experience by implementing intuitive navigation, fast-loading pages, and clear calls-to-action. The site structure allows visitors to quickly find information about soft wash services and book appointments.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b border-border dark:border-border/50">
              <AccordionTrigger className="text-foreground dark:text-foreground/90">Integrated Booking System</AccordionTrigger>
              <AccordionContent className="text-muted-foreground dark:text-muted-foreground/90">
                The website features a seamlessly integrated online booking system, allowing customers to schedule soft wash services at their convenience. This enhances user experience and streamlines the booking process for the business.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-b border-border dark:border-border/50">
              <AccordionTrigger className="text-foreground dark:text-foreground/90">SEO and Performance Optimization</AccordionTrigger>
              <AccordionContent className="text-muted-foreground dark:text-muted-foreground/90">
                We implemented various SEO best practices, including semantic HTML structure, optimized meta tags, and fast-loading assets. This helps improve the site's visibility in search engine results and enhances overall performance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" variants={containerVariants}>
          {[
            {
              icon: <Code className="h-10 w-10" />,
              title: "Clean, Semantic HTML",
              description: "Well-structured markup for improved SEO and accessibility."
            },
            {
              icon: <Palette className="h-10 w-10" />,
              title: "Tailwind CSS for Styling",
              description: "Utility-first CSS framework for rapid and maintainable styling."
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
              title: "Next.js Backend",
              description: "Server-side rendering and API routes for improved performance."
            },
            {
              icon: <Star className="h-10 w-10" />,
              title: "Review System",
              description: "Integrated customer review and rating functionality."
            },
          ].map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl bg-card dark:bg-card/50 text-card-foreground dark:text-card-foreground/90">
                <CardHeader className="p-6 bg-primary dark:bg-primary/80 text-primary-foreground dark:text-primary-foreground/90 transition-all duration-300 group-hover:bg-primary/90 dark:group-hover:bg-primary/70">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-background dark:bg-background/10 flex items-center justify-center">
                    {React.cloneElement(feature.icon, { className: "h-8 w-8 text-primary dark:text-primary-foreground" })}
                  </div>
                  <CardTitle className="text-center text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <CardDescription className="text-center text-muted-foreground dark:text-muted-foreground/90">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="bg-primary dark:bg-primary/80 text-primary-foreground dark:text-primary-foreground/90 rounded-lg p-8 text-center shadow-2xl"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold mb-4">Want a Website That Shines?</h2>
          <p className="text-lg mb-6 text-primary-foreground/80 dark:text-primary-foreground/70">
            Let's discuss how we can create a stunning and functional website to showcase your soft wash services.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold bg-secondary dark:bg-secondary/80 text-secondary-foreground dark:text-secondary-foreground/90 hover:bg-secondary/90 dark:hover:bg-secondary/70">
            <a href="/contact">Get Your Free Quote</a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}

