'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Check, X, ChevronDown, Zap, Palette, Code, Rocket, Shield, HeadphonesIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useTheme } from 'next-themes'

const plans = [
  {
    name: "Basic",
    price: "Starting at $1,000",
    description: "Perfect for small businesses and startups",
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
    price: "Starting at $5,000",
    description: "Ideal for growing businesses",
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
    name: "Custom Enterprise Solution",
    price: "Prices will vary",
    description: "Tailored solutions for large organizations",
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
  const [isVisible, setIsVisible] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="relative w-full min-h-screen bg-white dark:bg-gradient-to-br dark:from-black dark:via-yellow-900 dark:to-black transition-colors duration-500">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 w-full h-full opacity-50 bg-white dark:bg-gradient-to-br dark:from-black dark:via-yellow-900 dark:to-black dark:animate-gradient-x"></div>
      </div>
      <motion.div 
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAzMG0tMjggMGEyOCAyOCAwIDEgMCA1NiAwYTI4IDI4IDAgMSAwLTU2IDB6IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAzMG0tMjggMGEyOCAyOCAwIDEgMCA1NiAwYTI4IDI4IDAgMSAwLTU2IDB6IiBzdHJva2U9IiNmZmQ3MDAiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc>')]"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
          transition: {
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
      />
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl font-extrabold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 dark:from-yellow-400 dark:to-yellow-600"
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex flex-col h-full bg-white dark:bg-gray-800 border-yellow-600 dark:border-yellow-400">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{plan.name}</CardTitle>
                  <CardDescription className="text-3xl font-semibold text-gray-900 dark:text-white">
                    {plan.price}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{plan.description}</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        {feature.included ? (
                          <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0" />
                        )}
                        <span className={`${feature.included ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 line-through'}`}>{feature.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white dark:text-black">
                    {index === 2 ? 'Contact Us' : 'Get Started'}
                    <Zap className="w-4 h-4 ml-2" />
                  </Button>
                </CardFooter>
                {index === 1 && (
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-yellow-600 to-yellow-800 dark:from-yellow-400 dark:to-yellow-600 text-white dark:text-black">
                    Popular
                  </Badge>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.h2 
          className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-800 dark:from-yellow-400 dark:to-yellow-600"
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
            <Card key={index} className="flex flex-col h-full bg-white dark:bg-gray-800 border-yellow-600 dark:border-yellow-400">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <category.icon className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  <CardTitle className="text-yellow-600 dark:text-yellow-400">{category.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
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
          <Button className="bg-yellow-600 hover:bg-yellow-700 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white dark:text-black text-lg px-8 py-4 rounded-full">
            Schedule a Consultation
            <ChevronDown className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
      <style jsx global>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        
        }
        .animate-gradient-x {
          animation: gradient-x 15s ease infinite;
          background-size: 400% 400%;
        }
      `}</style>
    </div>
  )
}