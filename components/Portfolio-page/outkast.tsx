'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Code, Layout, Palette, FileJson, Database, Globe, Camera, Music, ExternalLink, Users, Zap, MessageSquare } from 'lucide-react'
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
            A dynamic social media platform inspired by Instagram, tailored for music enthusiasts.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center" variants={itemVariants}>
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6 text-primary dark:text-primary-foreground">Project Overview</h2>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground/90 mb-6">
              Outkast IG is a cutting-edge social media platform that combines the visual appeal of Instagram with a focus on music sharing and discovery. This project showcases our ability to create complex, interactive web applications with modern technologies.
            </p>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground/90 mt-4">
              We've leveraged the latest web technologies to ensure a smooth, responsive user experience with real-time updates and seamless navigation.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'MongoDB'].map((tech) => (
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
              "User profiles with customizable music preferences",
              "Photo and music sharing capabilities",
              "Real-time notifications and messaging",
              "Discover page for new music and artists",
              "Integration with popular music streaming services",
              "Advanced search functionality for users, songs, and artists",
            ].map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-card dark:bg-card/50 text-card-foreground dark:text-card-foreground/90">
                  <CardContent className="flex items-center space-x-4 p-6">
                    <Music className="h-10 w-10 text-primary dark:text-primary-foreground flex-shrink-0" />
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
                We utilized Next.js 15's App Router for efficient routing and leveraged Server Components for improved performance and SEO. This modern architecture allows for a seamless blend of server-side and client-side rendering.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-border dark:border-border/50">
              <AccordionTrigger className="text-foreground dark:text-foreground/90">Real-time Updates with WebSockets</AccordionTrigger>
              <AccordionContent className="text-muted-foreground dark:text-muted-foreground/90">
                Implemented WebSocket connections for real-time notifications, messages, and feed updates, ensuring users always have the latest content without needing to refresh the page.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b border-border dark:border-border/50">
              <AccordionTrigger className="text-foreground dark:text-foreground/90">Optimized Media Handling</AccordionTrigger>
              <AccordionContent className="text-muted-foreground dark:text-muted-foreground/90">
                Utilized Next.js Image component and custom optimizations for efficient loading and display of user-uploaded photos and album artwork, ensuring fast load times and a smooth browsing experience.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-b border-border dark:border-border/50">
              <AccordionTrigger className="text-foreground dark:text-foreground/90">Advanced State Management</AccordionTrigger>
              <AccordionContent className="text-muted-foreground dark:text-muted-foreground/90">
                Implemented a combination of React Context and custom hooks for efficient state management across the application, ensuring a responsive and consistent user experience.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" variants={containerVariants}>
          {[
            {
              icon: <Users className="h-10 w-10" />,
              title: "Social Networking",
              description: "Connect with friends, follow artists, and share your music taste."
            },
            {
              icon: <Music className="h-10 w-10" />,
              title: "Music Integration",
              description: "Seamless integration with popular music streaming platforms."
            },
            {
              icon: <Camera className="h-10 w-10" />,
              title: "Visual Sharing",
              description: "Share photos and visual content related to your music experiences."
            },
            {
              icon: <Zap className="h-10 w-10" />,
              title: "Real-time Updates",
              description: "Instant notifications and feed updates for an engaging experience."
            },
            {
              icon: <Globe className="h-10 w-10" />,
              title: "Music Discovery",
              description: "Explore new artists and genres through personalized recommendations."
            },
            {
              icon: <MessageSquare className="h-10 w-10" />,
              title: "Messaging",
              description: "Direct messaging feature for private conversations about music."
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
          <h2 className="text-3xl font-bold mb-4">Ready to Revolutionize Social Music Sharing?</h2>
          <p className="text-lg mb-6 text-primary-foreground/80 dark:text-primary-foreground/70">
            Let's discuss how we can create an innovative and engaging platform for music enthusiasts.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold bg-secondary dark:bg-secondary/80 text-secondary-foreground dark:text-secondary-foreground/90 hover:bg-secondary/90 dark:hover:bg-secondary/70">
            <a href="/contact">Get Started Today</a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}
