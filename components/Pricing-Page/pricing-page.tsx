'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, ChevronDown, ChevronUp, Zap, Palette, Code, Rocket, Shield, HeadphonesIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from 'next-themes'

const tiers = [
  {
    name: "Basic",
    description: "Perfect for small businesses and startups",
    category: "Website",
    features: [
      { name: "Responsive WordPress or CMS website", included: true },
      { name: "SEO optimization", included: true },
      { name: "1 month of support", included: true },
      { name: "SSL security", included: true },
      { name: "Up to 5 pages", included: true },
      { name: "Contact form integration", included: true },
      { name: "Google Analytics setup", included: true },
      { name: "Performance optimization", included: true },
      { name: "Custom web application", included: false },
      { name: "E-commerce integration", included: false },
    ]
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    category: "Website",
    features: [
      { name: "Custom web application", included: true },
      { name: "Advanced SEO and performance optimization", included: true },
      { name: "3 months of support and maintenance", included: true },
      { name: "Enhanced security features", included: true },
      { name: "Up to 15 pages", included: true },
      { name: "E-commerce integration", included: true },
      { name: "Content Management System (CMS) integration", included: true },
      { name: "Advanced analytics and user behavior tracking", included: true },
      { name: "Blog setup and integration", included: true },
      { name: "Progressive Web App (PWA) functionality", included: true },
    ]
  },
  {
    name: "Shopify Store Setup",
    description: "Ideal for businesses looking to start selling online",
    category: "E-commerce",
    features: [
      { name: "Custom theme selection and customization", included: true },
      { name: "Product catalog setup (up to 100 products)", included: true },
      { name: "Payment gateway integration", included: true },
      { name: "Basic SEO optimization", included: true },
      { name: "Automated email notifications", included: true },
      { name: "Social media integration", included: true },
      { name: "One-time training session", included: true },
      { name: "60-day post-launch support", included: true },
      { name: "Custom web application development", included: false },
      { name: "Advanced analytics and reporting", included: false },
    ]
  },
  {
    name: "Custom Enterprise Solution",
    description: "Tailored solutions for large organizations",
    category: "E-commerce",
    features: [
      { name: "Fully customized web application", included: true },
      { name: "Scalable architecture", included: true },
      { name: "AI-driven personalization and analytics", included: true },
      { name: "Advanced security measures", included: true },
      { name: "24/7 support and dedicated account manager", included: true },
      { name: "Cloud infrastructure optimization", included: true },
      { name: "Unlimited pages and scalable content", included: true },
      { name: "Custom API development", included: true },
      { name: "Third-party system integrations", included: true },
      { name: "Disaster recovery and backup solutions", included: true },
    ]
  }
]

const additionalFeatures = [
  {
    category: "Design and User Experience",
    icon: Palette,
    features: [
      "Custom UI/UX design tailored to your brand",
      "Responsive design for all devices and screen sizes",
      "Accessibility compliance (WCAG 2.1)",
      "User journey mapping and optimization",
      "Interactive prototyping for stakeholder approval"
    ]
  },
  {
    category: "Development and Technology",
    icon: Code,
    features: [
      "React & Next.js for dynamic, server-side rendered applications",
      "GraphQL for efficient data loading and improved performance",
      "Progressive Web Apps (PWAs) for native app-like experience",
      "Serverless architecture for reduced infrastructure costs",
      "Microservices architecture for scalability and maintainability"
    ]
  },
  {
    category: "Performance and Optimization",
    icon: Rocket,
    features: [
      "Lazy loading and code splitting for faster load times",
      "Image and asset optimization",
      "Content Delivery Network (CDN) integration",
      "Database query optimization",
      "Caching strategies (browser, CDN, and server-side)"
    ]
  },
  {
    category: "Security and Compliance",
    icon: Shield,
    features: [
      "SSL/TLS encryption for all data transmissions",
      "Regular security audits and penetration testing",
      "GDPR, CCPA, and other privacy regulation compliance",
      "Two-factor authentication (2FA) implementation",
      "Web application firewall (WAF) integration"
    ]
  },
  {
    category: "Support and Maintenance",
    icon: HeadphonesIcon,
    features: [
      "24/7 monitoring and incident response",
      "Regular software updates and patch management",
      "Backup and disaster recovery solutions",
      "Performance monitoring and optimization",
      "Dedicated support team with SLA guarantees"
    ]
  }
]

export default function PricingPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [expandedCards, setExpandedCards] = useState<string[]>([])
  const { theme } = useTheme()

  const filteredTiers = selectedCategory === 'All' 
    ? tiers 
    : tiers.filter(tier => tier.category === selectedCategory)

  const toggleExpand = (tierName: string) => {
    setExpandedCards(prev => 
      prev.includes(tierName) 
        ? prev.filter(name => name !== tierName)
        : [...prev, tierName]
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black transition-colors duration-500">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-500 dark:from-amber-200 dark:to-yellow-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Comprehensive Web Solutions
        </motion.h1>
        <motion.p 
          className="text-xl text-center text-gray-700 dark:text-gray-300 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Tailored packages to elevate your online presence
        </motion.p>
        
        <Tabs defaultValue="All" className="w-full max-w-md mx-auto mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="All" onClick={() => setSelectedCategory('All')}>All</TabsTrigger>
            <TabsTrigger value="Website" onClick={() => setSelectedCategory('Website')}>Website</TabsTrigger>
            <TabsTrigger value="E-commerce" onClick={() => setSelectedCategory('E-commerce')}>E-commerce</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {filteredTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-amber-600 dark:text-amber-400">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <Button
                    variant="outline"
                    onClick={() => toggleExpand(tier.name)}
                    className="w-full mb-4"
                  >
                    {expandedCards.includes(tier.name) ? 'Hide Features' : 'View Features'}
                    {expandedCards.includes(tier.name) ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                  </Button>
                  <AnimatePresence>
                    {expandedCards.includes(tier.name) && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-2"
                      >
                        {tier.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: featureIndex * 0.05 }}
                            className="flex items-start space-x-2"
                          >
                            {feature.included ? (
                              <Check className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0" />
                            ) : (
                              <X className="w-5 h-5 text-red-500 dark:text-red-400 flex-shrink-0" />
                            )}
                            <span className={`text-sm ${feature.included ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-500 line-through'}`}>
                              {feature.name}
                            </span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600 text-white dark:text-black">
                    {index === 3 ? 'Contact Us' : 'Get Started'}
                    <Zap className="w-4 h-4 ml-2" />
                  </Button>
                </CardFooter>
                {index === 1 && (
                  <Badge className="absolute top-4 right-4 bg-black text-amber-400 dark:bg-amber-400 dark:text-black">
                    Popular
                  </Badge>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.h2 
          className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-500 dark:from-amber-200 dark:to-yellow-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Comprehensive Feature Set
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {additionalFeatures.map((category, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-amber-100 dark:bg-amber-900 rounded-full">
                    <category.icon className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-amber-700 dark:text-amber-300">{category.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Transform Your Web Presence?</h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">Let's discuss how we can tailor our solutions to meet your unique business needs.</p>
          <Button className="bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600 text-white dark:text-black text-lg px-8 py-4 rounded-full">
            Schedule a Consultation
            <ChevronDown className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}