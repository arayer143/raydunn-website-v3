'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Layout, Globe, Zap, MessageSquare, Key, Cog, Palette, FileText, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import dynamic from 'next/dynamic'
import React from 'react'

const PortfolioScene = dynamic(() => import('@/components/PortfolioScene'), { ssr: false })

export default function JessieBoudreauxPortfolioPage() {
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
            Jessie Boudreaux
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-foreground dark:text-foreground">
            A turnkey WordPress solution for a social media company
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center" variants={itemVariants}>
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6 text-primary dark:text-primary-foreground">Project Overview</h2>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground/90 mb-6">
              We created a turnkey WordPress website solution for Jessie Boudreaux's social media company. This project demonstrates our ability to provide simple, effective, and easily maintainable websites for clients who want to manage their online presence independently.
            </p>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground/90 mt-4">
              Our basic website plan offers a perfect starting point for small businesses and entrepreneurs, combining the power of WordPress with a user-friendly setup that allows clients to take control of their website with minimal technical knowledge.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['WordPress', 'Domain Setup', 'Custom Theme', 'Responsive Design', 'SEO Basics'].map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-secondary/50 text-secondary-foreground dark:bg-secondary/30 dark:text-secondary-foreground/90">{tech}</Badge>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden">
                <AspectRatio ratio={16 / 9} >
                  <div className="w-full h-full">
                    <PortfolioScene 
                      imagePath="/jessie-boudreaux-logo.webp"
                      scale={1.0}
                      bounceSpeed={1.2}
                      rotationSpeed={0.6}
                    />
                  </div>
                </AspectRatio>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Button asChild size="lg" variant="outline" className="font-semibold bg-background dark:bg-background/10 text-foreground dark:text-foreground/90 hover:bg-secondary/80 dark:hover:bg-secondary/20">
                <a href="https://jessieboudreaux.com" target="_blank" rel="noopener noreferrer">
                  Visit Jessie Boudreaux <ExternalLink className="ml-2 h-4 w-4" />
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
              { icon: <Layout className="h-10 w-10" />, text: "Responsive WordPress theme optimized for all devices" },
              { icon: <Globe className="h-10 w-10" />, text: "Custom domain setup and configuration" },
              { icon: <Zap className="h-10 w-10" />, text: "Fast-loading pages for improved user experience" },
              { icon: <MessageSquare className="h-10 w-10" />, text: "Contact form integration for client inquiries" },
              { icon: <Key className="h-10 w-10" />, text: "Full WordPress admin access for client" },
              { icon: <Cog className="h-10 w-10" />, text: "Basic SEO setup for improved visibility" },
            ].map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-card dark:bg-card/50 text-card-foreground dark:text-card-foreground/90">
                  <CardContent className="flex items-center space-x-4 p-6">
                    {React.cloneElement(feature.icon, { className: "text-primary dark:text-primary-foreground flex-shrink-0" })}
                    <span className="text-lg">{feature.text}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="mb-16" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6 text-primary dark:text-primary-foreground">Our Process</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-border dark:border-border/50">
              <AccordionTrigger className="text-foreground dark:text-foreground/90">WordPress Installation and Setup</AccordionTrigger>
              <AccordionContent className="text-muted-foreground dark:text-muted-foreground/90">
                We handle the complete WordPress installation process, including database setup, core files installation, and initial configuration. This ensures a solid foundation for the website.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-border dark:border-border/50">
              <AccordionTrigger className="text-foreground dark:text-foreground/90">Custom Domain Configuration</AccordionTrigger>
              <AccordionContent className="text-muted-foreground dark:text-muted-foreground/90">
                We take care of all the technical aspects of domain setup, including DNS configuration, to ensure the website is accessible at the client's chosen domain name.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b border-border dark:border-border/50">
              <AccordionTrigger className="text-foreground dark:text-foreground/90">Theme Customization</AccordionTrigger>
              <AccordionContent className="text-muted-foreground dark:text-muted-foreground/90">
                We select and customize a WordPress theme that aligns with the client's brand and business needs, ensuring a professional and cohesive look for the website.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-b border-border dark:border-border/50">
              <AccordionTrigger className="text-foreground dark:text-foreground/90">Essential Plugin Integration</AccordionTrigger>
              <AccordionContent className="text-muted-foreground dark:text-muted-foreground/90">
                We install and configure essential plugins for security, performance, and functionality, providing a solid starting point for the client's website.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-b border-border dark:border-border/50">
              <AccordionTrigger className="text-foreground dark:text-foreground/90">Handover and Training</AccordionTrigger>
              <AccordionContent className="text-muted-foreground dark:text-muted-foreground/90">
                Once the website is set up, we provide the client with full access to the WordPress admin panel and offer basic training on how to manage and update their website content.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" variants={containerVariants}>
          {[
            {
              icon: <Key className="h-10 w-10" />,
              title: "Full Control",
              description: "Clients have complete access to their WordPress dashboard for easy content management."
            },
            {
              icon: <Palette className="h-10 w-10" />,
              title: "Custom Design",
              description: "A tailored theme that reflects the client's brand and meets their specific needs."
            },
            {
              icon: <Zap className="h-10 w-10" />,
              title: "Quick Setup",
              description: "Rapid deployment of a fully functional website, minimizing downtime for the client."
            },
            {
              icon: <Globe className="h-10 w-10" />,
              title: "Domain Management",
              description: "Hassle-free domain setup and configuration for a professional online presence."
            },
            {
              icon: <FileText className="h-10 w-10" />,
              title: "Content Ready",
              description: "Basic pages and structure in place, ready for the client to add their unique content."
            },
            {
              icon: <Cog className="h-10 w-10" />,
              title: "Future-Proof",
              description: "A scalable solution that can grow and adapt as the client's business evolves."
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
          <h2 className="text-3xl font-bold mb-4">Ready to Launch Your WordPress Website?</h2>
          <p className="text-lg mb-6 text-primary-foreground/80 dark:text-primary-foreground/70">
            Let's discuss how we can create a turnkey WordPress solution tailored to your business needs and get you online quickly and efficiently.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold bg-secondary dark:bg-secondary/80 text-secondary-foreground dark:text-secondary-foreground/90 hover:bg-secondary/90 dark:hover:bg-secondary/70">
            <a href="/contact">Get Started Today</a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}

