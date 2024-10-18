import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Search, BarChart, Globe, Zap, Users, TrendingUp, Wrench } from 'lucide-react'
import React from 'react'

export default function SEOOptimizationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            SEO Optimization Services
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground">
            Boost your online visibility and drive organic traffic with our expert SEO optimization strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-6 text-primary">Elevate Your Search Rankings</h2>
            <p className="text-lg text-muted-foreground">
              Our team of SEO experts utilizes cutting-edge techniques and industry best practices to improve your 
              website's search engine rankings, increase organic traffic, and enhance your online presence.
            </p>
            <ul className="space-y-4">
              {[
                "Comprehensive website audit and analysis",
                "Keyword research and optimization",
                "On-page and off-page SEO strategies",
                "Content optimization and creation",
                "Technical SEO improvements",
                "Local SEO for businesses targeting specific areas",
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
              alt="SEO Optimization Illustration"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-primary text-center">Our SEO Toolkit</h2>
          <p className="text-lg text-muted-foreground text-center mb-8">
            We leverage industry-leading SEO tools to provide comprehensive analysis and optimization for your website.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {["Google Lighthouse", "Ahrefs", "SEMrush", "Sitechecker", "Moz"].map((tool, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <Wrench className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <p className="font-semibold">{tool}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center mt-6 text-muted-foreground">
            And many more industry-leading SEO analysis and optimization tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <Search className="h-10 w-10" />,
              title: "Keyword Optimization",
              description: "Target the right keywords to attract your ideal audience and improve search rankings."
            },
            {
              icon: <BarChart className="h-10 w-10" />,
              title: "Performance Tracking",
              description: "Monitor your SEO progress with detailed analytics and regular performance reports."
            },
            {
              icon: <Globe className="h-10 w-10" />,
              title: "Link Building",
              description: "Develop a strong backlink profile to boost your website's authority and credibility."
            },
            {
              icon: <Zap className="h-10 w-10" />,
              title: "Technical SEO",
              description: "Optimize your website's structure and performance for better search engine crawling."
            },
            {
              icon: <Users className="h-10 w-10" />,
              title: "Local SEO",
              description: "Improve your visibility in local search results to attract nearby customers."
            },
            {
              icon: <TrendingUp className="h-10 w-10" />,
              title: "Continuous Improvement",
              description: "Stay ahead of algorithm changes with ongoing SEO maintenance and updates."
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
          <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Online Visibility?</h2>
          <p className="text-lg mb-6 text-primary-foreground/80">
            Let's discuss how we can improve your search rankings and drive more organic traffic to your website.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold hover:bg-secondary/90">
            <Link href="/contact">Get Started with SEO</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}