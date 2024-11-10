import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfessionalEcommerce() {
  const features = [
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
  ]

  const faqItems = [
    {
      question: "How does the unlimited products feature work?",
      answer: "With our Professional E-commerce package, you can list as many products as you need without any restrictions. This is perfect for businesses with large inventories or those planning to scale up their product offerings over time."
    },
    {
      question: "Can you explain the abandoned cart recovery feature?",
      answer: "Abandoned cart recovery is a powerful tool that automatically sends reminder emails to customers who have added items to their cart but didn't complete the purchase. This feature can significantly boost your sales by encouraging customers to return and complete their transactions."
    },
    {
      question: "What kind of AI-powered product recommendations are included?",
      answer: "Our AI-powered recommendation engine analyzes customer behavior, purchase history, and product relationships to suggest relevant items to your customers. This can increase average order value and improve the overall shopping experience by helping customers discover products they might be interested in."
    },
    {
      question: "How does the Augmented Reality (AR) product preview work?",
      answer: "The AR product preview feature allows customers to visualize products in their own space using their smartphone camera. This is particularly useful for furniture, decor, and other home goods, as it helps customers make more confident purchasing decisions by seeing how the product would look in their environment."
    }
  ]

  const processSteps = [
    {
      title: "Comprehensive Analysis",
      description: "We conduct an in-depth analysis of your business, products, and target market to create a tailored e-commerce strategy."
    },
    {
      title: "Advanced Store Design",
      description: "Our designers create a unique, high-converting store design with advanced features and seamless user experience."
    },
    {
      title: "Robust E-commerce Development",
      description: "We build a powerful e-commerce platform with advanced features, ensuring scalability and optimal performance."
    },
    {
      title: "Integration & Customization",
      description: "We integrate advanced tools and customize features to meet your specific business needs and processes."
    },
    {
      title: "Thorough Testing",
      description: "We conduct extensive testing of all features, including payment gateways, inventory management, and user flows."
    },
    {
      title: "Launch & Extended Support",
      description: "After launch, we provide 3 months of dedicated support to ensure your e-commerce store performs optimally and you're leveraging all its features."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Professional E-commerce Package</h1>
      <p className="text-xl text-center mb-16 text-muted-foreground">Advanced solutions to scale your online business</p>

      <div className="flex justify-center mb-16 max-w-4xl mx-auto">
        <Card className="w-full max-w-4xl">
          <CardHeader>
            <CardTitle className="text-2xl">Package Overview</CardTitle>
            <CardDescription>Comprehensive features for a powerful online store</CardDescription>
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
                    $5,000
                  </div>
                  <div className="text-sm font-medium">One-time setup fee</div>
                </div>
                <div className="mb-6">
                  <div className="text-3xl font-bold">
                    $500
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
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Professional E-commerce Package?</h2>
        <Tabs defaultValue="advanced" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="advanced">Advanced Features</TabsTrigger>
            <TabsTrigger value="scalability">Scalability</TabsTrigger>
            <TabsTrigger value="conversion">Conversion Optimization</TabsTrigger>
          </TabsList>
          <TabsContent value="advanced">
            <Card>
              <CardHeader>
                <CardTitle>Advanced Features</CardTitle>
                <CardDescription>Powerful tools for your online store</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Our Professional E-commerce package includes cutting-edge features:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>AI-powered product recommendations for increased sales</li>
                  <li>Augmented Reality (AR) product previews for enhanced customer experience</li>
                  <li>Advanced inventory management with multi-location support</li>
                  <li>Subscription and recurring billing capabilities</li>
                  <li>Integration with ERP systems for streamlined operations</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="scalability">
            <Card>
              <CardHeader>
                <CardTitle>Scalability</CardTitle>
                <CardDescription>Grow your business without limits</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Our solution is designed to scale with your business:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Support for unlimited products and high traffic volumes</li>
                  <li>Multi-currency and multi-language capabilities for global expansion</li>
                  <li>Flexible architecture to add new features and integrations</li>
                  <li>Advanced caching and performance optimization for fast loading times</li>
                  <li>Scalable hosting infrastructure to handle growth</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="conversion">
            <Card>
              <CardHeader>
                <CardTitle>Conversion Optimization</CardTitle>
                <CardDescription>Turn visitors into customers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>We focus on maximizing your store's conversion rate:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Abandoned cart recovery to recapture lost sales</li>
                  <li>Personalized product recommendations to increase average order value</li>
                  <li>Optimized checkout process for higher conversion rates</li>
                  <li>A/B testing capabilities to refine your store's performance</li>
                  <li>Advanced analytics for data-driven decision making</li>
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
        <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Online Business?</h2>
        <p className="text-xl text-muted-foreground mb-8">Let's create a powerful e-commerce platform that drives growth and success.</p>
        <Button size="lg" className="gap-2">
          Contact Us <ArrowRight className="w-4 h-4" />
        </Button>
      </section>
    </div>
  )
}