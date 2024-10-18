import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Layout, Palette, FileJson, Database, Globe, Factory, Shield, Briefcase, ClipboardCheck } from 'lucide-react'
import React from 'react'

export default function OutKastIndustrialShowcasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            OutKast Industrial Group
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground">
            A robust, professional website showcasing industrial cleaning excellence.
          </p>
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
                    alt="OutKast Industrial Group Website Desktop View"
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
                    alt="OutKast Industrial Group Website Mobile View"
                    fill
                    className="rounded-lg shadow-lg object-contain"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Project Overview</h2>
            <p className="text-lg text-muted-foreground mb-6">
              This website was developed for OutKast Industrial Group, a leading industrial cleaning service provider. Our goal was to create a 
              powerful, user-friendly, and informative website that effectively showcases their 
              industrial cleaning expertise and caters to the specific needs of their corporate clients.
            </p>
            <div className="flex flex-wrap gap-2">
              {['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Sass'].map((tech) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary">Key Features</h2>
            <ul className="space-y-4">
              {[
                "Responsive design optimized for desktop and mobile devices",
                "Comprehensive industrial cleaning service catalog",
                "Client portal for project tracking and reporting",
                "Case studies showcasing successful industrial cleaning projects",
                "Safety compliance and certification information",
                "Request for proposal (RFP) submission system",
              ].map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Factory className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
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
              icon: <Shield className="h-10 w-10" />,
              title: "Secure Client Portal",
              description: "Protected access for clients to view project details and reports."
            },
            {
              icon: <Database className="h-10 w-10" />,
              title: "PHP Backend",
              description: "Robust server-side logic for dynamic content and form handling."
            },
            {
              icon: <ClipboardCheck className="h-10 w-10" />,
              title: "RFP System",
              description: "Streamlined process for submitting and managing project proposals."
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
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Industrial Cleaning Operations?</h2>
          <p className="text-lg mb-6 text-primary-foreground/80">
            Let's discuss how we can create a powerful online presence to showcase your industrial cleaning expertise.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold hover:bg-secondary/90">
            <a href="/contact">Request a Consultation</a>
          </Button>
        </div>
      </div>
    </div>
  )
}