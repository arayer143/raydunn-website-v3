"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Check, X } from "lucide-react"

const pricingPlans = [
  {
    name: "Basic Website",
    description: "Perfect for small businesses and personal websites",
    designPrice: 1000,
    monthlyPrice: 100,
    annualPrice: 1020,
    popular: false,
    features: [
      "Responsive design",
      "Up to 5 pages",
      "Basic SEO optimization",
      "Contact form",
      "Social media integration",
      "1 month of support",
      "Basic performance optimization",
      { text: "Progressive Web App (PWA) functionality", available: false },
      { text: "API integration", available: false },
      { text: "Advanced animations and interactions", available: false },
      { text: "A/B testing setup", available: false },
    ],
  },
  {
    name: "Professional Website",
    description: "Ideal for growing businesses and organizations",
    designPrice: 3000,
    monthlyPrice: 250,
    annualPrice: 2550,
    popular: true,
    features: [
      "All Basic Website features",
      "Up to 10 pages",
      "Advanced SEO optimization",
      "Custom animations",
      "Blog integration",
      "Google Analytics setup",
      "3 months of support",
      "Advanced performance optimization",
      "Progressive Web App (PWA) functionality",
      "API integration",
      "Advanced animations and interactions",
      "A/B testing setup",
      "Accessibility compliance (WCAG 2.1)",
      "Integration with headless CMS",
    ],
  },
  {
    name: "Basic E-commerce",
    description: "Start selling online with essential features",
    designPrice: 3000,
    monthlyPrice: 200,
    annualPrice: 2040,
    popular: false,
    features: [
      "Up to 50 products",
      "Responsive design",
      "Basic SEO optimization",
      "Secure payment gateway",
      "Order management",
      "Customer accounts",
      "1 month of support",
      "Basic inventory management",
      { text: "AI-powered product recommendations", available: false },
      { text: "Multi-currency support", available: false },
      { text: "Advanced analytics and reporting", available: false },
    ],
  },
  {
    name: "Professional E-commerce",
    description: "Scale your online business with advanced features",
    designPrice: 5000,
    monthlyPrice: 500,
    annualPrice: 5100,
    popular: false,
    features: [
      "All Basic E-commerce features",
      "Unlimited products",
      "Advanced SEO optimization",
      "Multiple payment gateways",
      "Advanced inventory management",
      "Abandoned cart recovery",
      "Product reviews and ratings",
      "3 months of support",
      "AI-powered product recommendations",
      "Multi-currency support",
      "Advanced analytics and reporting",
      "Integration with ERP systems",
      "Subscription and recurring billing",
      "Augmented Reality (AR) product previews",
    ],
  },
]

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Pricing Plans</h2>
        <div className="flex items-center justify-center mb-8">
          <Label htmlFor="pricing-toggle" className="mr-2">Monthly</Label>
          <Switch
            id="pricing-toggle"
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
          />
          <Label htmlFor="pricing-toggle" className="ml-2">Annual (Save 15%)</Label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className="flex flex-col relative overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            >
              {plan.popular && (
                <Badge className="absolute top-0 right-0 m-2" variant="secondary">
                  Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6 p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">
                    <div className="text-sm">Starting at:</div> ${plan.designPrice}
                  </div>
                  <div className="text-sm font-medium">One-time design fee</div>
                </div>
                <div className="mb-6">
                  <div className="text-3xl font-bold">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    <span className="text-sm font-normal text-muted-foreground"> / {isAnnual ? 'year' : 'month'}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">Ongoing maintenance & support</div>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      {typeof feature === 'string' ? (
                        <>
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </>
                      ) : (
                        <>
                          {feature.available ? (
                            <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground mr-2 flex-shrink-0" />
                          )}
                          <span className={feature.available ? '' : 'line-through text-muted-foreground'}>
                            {feature.text}
                          </span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 bg-muted rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Understanding Our Pricing</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-2">One-Time Design Fee</h4>
              <p>The one-time fee covers the initial design and setup of your website or e-commerce platform. This includes custom development, design work, and implementation of features as per your chosen plan.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Monthly/Annual Fees</h4>
              <p>The recurring fee covers ongoing services such as hosting, maintenance, security updates, and customer support. Choosing an annual plan provides a 15% discount compared to monthly billing.</p>
            </div>
          </div>
          <div className="mt-8">
            <h4 className="text-xl font-semibold mb-2">What's Included in Monthly Fees?</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
              {[
                "Reliable and fast website hosting",
                "Regular security updates and patches",
                "Daily backups of your website",
                "Ongoing technical support",
                "Content updates (limits may apply based on your plan)",
                "Performance optimization",
                "Access to our client portal for easy communication",
                "Monthly analytics reports",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}