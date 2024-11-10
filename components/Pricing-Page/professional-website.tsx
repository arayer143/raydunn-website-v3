import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "lucide-react"

export default function ProfessionalWebsite() {
  const features = [
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
  ]

  const faqItems = [
    {
      question: "What additional features do I get with the Professional Website package?",
      answer: "The Professional Website package includes all features from the Basic package, plus advanced SEO optimization, custom animations, blog integration, Google Analytics setup, PWA functionality, API integration, A/B testing setup, and more. It's designed for businesses that need a more robust online presence."
    },
    {
      question: "Can you explain what PWA functionality means?",
      answer: "Progressive Web App (PWA) functionality allows your website to behave more like a native mobile app. This includes features like offline access, push notifications, and the ability to add the website to the home screen on mobile devices, providing a more app-like experience for your users."
    },
    {
      question: "What is a headless CMS and why is it beneficial?",
      answer: "A headless CMS (Content Management System) separates the content management from the front-end presentation. This allows for greater flexibility in how your content is displayed and distributed across different platforms. It's particularly useful for businesses that need to publish content across multiple channels or require frequent content updates."
    },
    {
      question: "How does the 3 months of support work?",
      answer: "For the first three months after your website goes live, our team will provide extended support. This includes addressing any issues, making minor adjustments, and answering your questions. We'll also help you understand how to use your new features effectively, ensuring you get the most out of your professional website."
    }
  ]

  const processSteps = [
    {
      title: "In-depth Discovery",
      description: "We conduct a thorough analysis of your business, market, and competitors to develop a comprehensive website strategy."
    },
    {
      title: "Advanced Design",
      description: "Our designers create a unique, visually striking layout with custom animations and interactions tailored to your brand."
    },
    {
      title: "Robust Development",
      description: "Our developers build a high-performance website with advanced features, ensuring scalability and optimal functionality."
    },
    {
      title: "Content Strategy",
      description: "We help you develop a content strategy, including blog integration and advanced SEO optimization."
    },
    {
      title: "Extensive Testing",
      description: "We perform thorough testing across devices and browsers, including A/B testing setup for continuous improvement."
    },
    {
      title: "Launch & Extended Support",
      description: "After launch, we provide 3 months of dedicated support to ensure your website performs optimally and you're leveraging all its features."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Professional Website Package</h1>
      <p className="text-xl text-center mb-16 text-muted-foreground">Advanced solutions for growing businesses and organizations</p>

      <div className="flex justify-center mb-16 max-w-4xl mx-auto">
        <Card className="w-full max-w-4xl">
          <CardHeader>
            <CardTitle className="text-2xl">Package Overview</CardTitle>
            <CardDescription>Comprehensive features for a powerful online presence</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 p-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Features</h3>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Pricing</h3>
                <div className="mb-6 p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">
                    $3,000
                  </div>
                  <div className="text-sm font-medium">One-time design fee</div>
                </div>
                <div className="mb-6">
                  <div className="text-3xl font-bold">
                    $250
                    <span className="text-sm font-normal text-muted-foreground"> / month</span>
                  </div>
                  <div className="text-sm text-muted-foreground">Ongoing maintenance & support</div>
                </div>
                <Button className="w-full">Get Started</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mr-2">
                    {index + 1}
                  </span>
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Professional Website Package?</h2>
        <Tabs defaultValue="advanced" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="advanced">Advanced Features</TabsTrigger>
            <TabsTrigger value="performance">High Performance</TabsTrigger>
            <TabsTrigger value="scalability">Scalability</TabsTrigger>
          </TabsList>
          <TabsContent value="advanced">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Features</CardTitle>
                <CardDescription>Elevate your online presence</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Our Professional Website package includes cutting-edge features to set your site apart:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Progressive Web App (PWA) functionality for app-like experience</li>
                  <li>Custom animations and interactions for engaging user experience</li>
                  <li>Advanced SEO optimization for improved search engine rankings</li>
                  <li>A/B testing setup for continuous improvement</li>
                  <li>Integration with headless CMS for flexible content management</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="performance">
            <Card>
              <CardHeader>
                <CardTitle>High Performance</CardTitle>
                <CardDescription>Lightning-fast and responsive</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>We ensure your website performs at its best:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Advanced performance optimization techniques</li>
                  <li>Fast loading times across all devices and network conditions</li>
                  <li>Efficient caching and content delivery strategies</li>
                  <li>Optimized images and assets for quick loading</li>
                  <li>Regular performance audits and improvements</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="scalability">
            <Card>
              <CardHeader>
                <CardTitle>Scalability</CardTitle>
                <CardDescription>Grow without limits</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Our Professional Website package is designed to grow with your business:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Flexible architecture that can handle increased traffic and content</li>
                  <li>Easy integration with third-party services and APIs</li>
                  <li>Support for expanding to multiple languages or regions</li>
                  <li>Ability to add e-commerce functionality in the future</li>
                  <li>Ongoing support and updates to keep your site cutting-edge</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Online Presence?</h2>
        <p className="text-xl text-muted-foreground mb-8">Let's create a professional website that drives results for your business.</p>
        <Button size="lg" className="gap-2">
          Contact Us <ArrowRight className="w-4 h-4" />
        </Button>
      </section>
    </div>
  )
}