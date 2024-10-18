import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ShoppingCart, Zap, Lock, CreditCard, BarChart } from 'lucide-react'
import React from 'react'

export default function EcommerceServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            E-commerce Development Services
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground">
            Transform your business with our cutting-edge e-commerce solutions. We build powerful, scalable, and user-friendly online stores tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-6 text-primary">Boost Your Online Sales</h2>
            <p className="text-lg text-muted-foreground">
              Our expert team leverages the latest technologies and best practices to deliver high-performance, 
              responsive e-commerce websites that drive conversions and enhance user experience.
            </p>
            <ul className="space-y-4">
              {[
                "Custom e-commerce platform development",
                "Responsive and mobile-first design",
                "Secure payment gateway integration",
                "Inventory management systems",
                "SEO optimization for product visibility",
                "Performance optimization for fast loading times",
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
              alt="E-commerce Development Illustration"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <ShoppingCart className="h-10 w-10" />,
              title: "Custom Shopping Experiences",
              description: "Create unique and engaging shopping journeys tailored to your brand and customers."
            },
            {
              icon: <Zap className="h-10 w-10" />,
              title: "Lightning-Fast Performance",
              description: "Optimize your store for speed to reduce bounce rates and increase conversions."
            },
            {
              icon: <Lock className="h-10 w-10" />,
              title: "Robust Security Measures",
              description: "Implement top-tier security protocols to protect customer data and transactions."
            },
            {
              icon: <CreditCard className="h-10 w-10" />,
              title: "Seamless Payment Integration",
              description: "Integrate multiple payment gateways for a smooth checkout process."
            },
            {
              icon: <BarChart className="h-10 w-10" />,
              title: "Advanced Analytics",
              description: "Gain valuable insights with integrated analytics and reporting tools."
            },
            {
              icon: <CheckCircle className="h-10 w-10" />,
              title: "Scalable Solutions",
              description: "Build e-commerce platforms that grow with your business, handling increased traffic and sales."
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
          <h2 className="text-3xl font-bold mb-4">Ready to Launch Your E-commerce Store?</h2>
          <p className="text-lg mb-6 text-primary-foreground/80">
            Let's discuss how we can create a powerful online presence for your business and boost your sales.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold hover:bg-secondary/90">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}