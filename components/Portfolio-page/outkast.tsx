'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Code, Layout, Palette, FileJson, Database, Globe, ExternalLink, Users, Zap, MessageSquare, Droplet, Shield, Recycle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import dynamic from 'next/dynamic'
import React from 'react'

const PortfolioScene = dynamic(() => import('@/components/PortfolioScene'), { ssr: false })

export default function OutkastIGShowcasePage() {
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
            Outkast IG
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-foreground dark:text-foreground">
            A modern, responsive website for a professional industrial cleaning company.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center" variants={itemVariants}>
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6 text-primary dark:text-primary-foreground">Project Overview</h2>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground/90 mb-6">
              Outkast IG is a sleek and modern website designed for a professional industrial cleaning company. This project showcases our ability to create visually appealing and highly functional websites that effectively represent our client's services and expertise in industrial cleaning solutions.
            </p>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground/90 mt-4">
              We've leveraged the latest web technologies to ensure a smooth, responsive user experience with seamless navigation and optimized content delivery, highlighting the company's industrial cleaning capabilities and services.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'].map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-secondary/50 text-secondary-foreground dark:bg-secondary/30 dark:text-secondary-foreground/90">{tech}</Badge>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl z-10"></div>
              <div className="relative rounded-xl overflow-hidden shadow-[0_0_0_2px_rgba(255,255,255,0.1),0_4px_20px_rgba(0,0,0,0.3)] dark:shadow-[0_0_0_2px_rgba(0,0,0,0.3),0_4px_20px_rgba(255,255,255,0.1)]">
                <AspectRatio ratio={16 / 9} className="bg-muted dark:bg-muted/30">
                  <div className="w-full h-full">
                    <PortfolioScene 
                      imagePath="/outkast-logo.webp"
                      scale={2.0}
                      bounceSpeed={1.2}
                      rotationSpeed={0.6}
                    />
                  </div>
                </AspectRatio>
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-50"></div>
                  <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay"></div>
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                  <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
                  <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Button asChild size="lg" variant="outline" className="font-semibold bg-background dark:bg-background/10 text-foreground dark:text-foreground/90 hover:bg-secondary/80 dark:hover:bg-secondary/20">
                <a href="https://outkast-ig.com" target="_blank" rel="noopener noreferrer">
                  Visit Outkast IG <ExternalLink className="ml-2 h-4 w-4" />
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
              "Comprehensive showcase of industrial cleaning services",
              "Application form to allow company to recieve job applications with resume attachments",
              "Contact form with email integration for inquiries",
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
          <h2 className="text-3xl font-bold mb-6 text-primary dark:text-primary-foreground">Technical Highlights</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-border dark:border-border/50">
              <AccordionTrigger className="text-foreground dark:text-foreground/90">Next.js App Router and Server Components</AccordionTrigger>
              <AccordionContent className="text-muted-foreground dark:text-muted-foreground/90">
                We utilized Next.js 15's App Router for efficient routing and leveraged Server Components for improved performance and SEO. This modern architecture allows for a seamless blend of server-side and client-side rendering, crucial for showcasing industrial cleaning services effectively.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-border dark:border-border/50">
              <AccordionTrigger className="text-foreground dark:text-foreground/90">Interactive Service Showcase</AccordionTrigger>
              <AccordionContent className="text-muted-foreground dark:text-muted-foreground/90">
                Implemented an interactive service showcase using Three.js and React Three Fiber, allowing potential clients to explore industrial cleaning equipment and processes in a 3D environment, enhancing engagement and understanding of the company's capabilities.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b border-border dark:border-border/50">
              <AccordionTrigger className="text-foreground dark:text-foreground/90">Responsive Design with Tailwind CSS</AccordionTrigger>
              <AccordionContent className="text-muted-foreground dark:text-muted-foreground/90">
                Utilized Tailwind CSS for a fully responsive design that looks great on all devices, from mobile phones to large desktop screens, ensuring a consistent user experience across all platforms and making it easy for clients to access information about industrial cleaning services.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-b border-border dark:border-border/50">
              <AccordionTrigger className="text-foreground dark:text-foreground/90">Interactive UI with Framer Motion</AccordionTrigger>
              <AccordionContent className="text-muted-foreground dark:text-muted-foreground/90">
                Incorporated Framer Motion for smooth, engaging animations and transitions throughout the site, enhancing the overall user experience and bringing the industrial cleaning service presentations to life with dynamic content reveals and interactive elements.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" variants={containerVariants}>
          {[
            {
              icon: <Droplet className="h-10 w-10" />,
              title: "Specialized Cleaning",
              description: "Showcase of advanced industrial cleaning techniques and equipment."
            },
            {
              icon: <Shield className="h-10 w-10" />,
              title: "Safety First",
              description: "Highlighting commitment to safety standards and protocols."
            },
            {
              icon: <Zap className="h-10 w-10" />,
              title: "Efficient Solutions",
              description: "Demonstrating time-saving and cost-effective cleaning processes."
            },
            {
              icon: <Globe className="h-10 w-10" />,
              title: "Industry Coverage",
              description: "Displaying versatility across various industrial sectors."
            },
            {
              icon: <MessageSquare className="h-10 w-10" />,
              title: "Client Communication",
              description: "Easy-to-use contact forms and quote request system."
            },
            {
              icon: <Recycle className="h-10 w-10" />,
              title: "Eco-Friendly Practices",
              description: "Showcasing sustainable and environmentally conscious cleaning methods."
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
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Industrial Cleaning Operations?</h2>
          <p className="text-lg mb-6 text-primary-foreground/80 dark:text-primary-foreground/70">
            Let's discuss how we can create a cutting-edge website to showcase your industrial cleaning services and grow your business.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold bg-secondary dark:bg-secondary/80 text-secondary-foreground dark:text-secondary-foreground/90 hover:bg-secondary/90 dark:hover:bg-secondary/70">
            <a href="/contact">Get Started Today</a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}



