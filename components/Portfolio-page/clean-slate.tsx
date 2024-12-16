'use client'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Code, Layout, Palette, FileJson, Database, Globe, Droplet, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import dynamic from 'next/dynamic'
import React from 'react'

const PortfolioScene = dynamic(() => import('@/components/PortfolioScene'), { ssr: false })

export default function CleanSlateShowcasePage() {
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
            Clean Slate Pressure Washing
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-foreground dark:text-foreground">
            A modern, responsive website for professional pressure washing services.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center" variants={itemVariants}>
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6 text-primary dark:text-primary-foreground">Project Overview</h2>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground/90 mb-6">
              This website was developed for Clean Slate Pressure Washing, a professional cleaning service. Our goal was to create a 
              visually appealing, user-friendly, and high-performance website that would showcase their 
              services effectively and provide a seamless user experience.
            </p>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground/90 mt-4">
              We've incorporated WebP image format for optimal performance and visual quality, ensuring fast load times without compromising on image fidelity.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {[ 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Three.js', 'Framer Motion', 'WebP'].map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-secondary/50 text-secondary-foreground dark:bg-secondary/30 dark:text-secondary-foreground/90">{tech}</Badge>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <AspectRatio ratio={16 / 9} className="bg-muted dark:bg-muted/30 rounded-xl overflow-hidden">
              <div className="w-full h-full">
                <PortfolioScene 
                  imagePath="/cleanslatelol-whiteBG.webp"
                  scale={2.0}
                  bounceSpeed={1.5}
                  rotationSpeed={0.8}
                />
              </div>
            </AspectRatio>
            <div className="mt-4 text-center">
              <Button asChild size="lg" variant="outline" className="font-semibold bg-background dark:bg-background/10 text-foreground dark:text-foreground/90 hover:bg-secondary/80 dark:hover:bg-secondary/20">
                <a href="https://cleanslatepressurewashingnola.com/" target="_blank" rel="noopener noreferrer">
                  Visit Clean Slate Pressure Washing <ExternalLink className="ml-2 h-4 w-4" />
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
              "Responsive design for all devices",
              "Dynamic service catalog with detailed information",
              "Contact form for customer inquiries",
              "Photo gallery of completed projects",
              "Integration with Google Maps for service areas",
              "Custom domain and reliable hosting",
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
                The website features a clean, professional design that aligns with Clean Slate Pressure Washing's brand identity. We used a modern color palette, typography, and layout to create a visually appealing and easy-to-navigate site.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-border dark:border-border/50">
              <AccordionTrigger className="text-foreground dark:text-foreground/90">Optimized User Experience</AccordionTrigger>
              <AccordionContent className="text-muted-foreground dark:text-muted-foreground/90">
                We prioritized user experience by implementing intuitive navigation, fast-loading pages, and clear calls-to-action. The site structure allows visitors to quickly find information about pressure washing services and request quotes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b border-border dark:border-border/50">
              <AccordionTrigger className="text-foreground dark:text-foreground/90">Responsive Design</AccordionTrigger>
              <AccordionContent className="text-muted-foreground dark:text-muted-foreground/90">
                The website is fully responsive, ensuring a seamless experience across all devices, from desktop computers to mobile phones. This responsiveness helps to capture and retain visitors regardless of their preferred device.
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
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Pressure Washing Business?</h2>
          <p className="text-lg mb-6 text-primary-foreground/80 dark:text-primary-foreground/70">
            Let's discuss how we can create a stunning and functional website to showcase your pressure washing services.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold bg-secondary dark:bg-secondary/80 text-secondary-foreground dark:text-secondary-foreground/90 hover:bg-secondary/90 dark:hover:bg-secondary/70">
            <a href="/contact">Get Your Free Quote</a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}