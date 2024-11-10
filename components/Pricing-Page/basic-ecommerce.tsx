import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, ArrowRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BasicEcommerce() {
  const features = [
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
  ]

  const faqItems = [
    {
      question: "How many products can I list with the Basic E-commerce package?",
      answer: "The Basic E-commerce package allows you to list up to 50 products. This is suitable for small to medium-sized businesses or those just starting their online store. If you need to list more products, you might want to consider our Professional E-commerce package."
    },
    {
      question: "What payment gateways are supported?",
      answer: "We integrate with popular and secure payment gateways such as Stripe and PayPal. These allow your customers to make payments using credit cards, debit cards, and other common payment methods. If you have a specific payment gateway in mind, please let us know, and we'll check if it's compatible with our system."
    },
    {
      question: "Can customers create accounts on my e-commerce site?",
      answer: "Yes, the Basic E-commerce package includes customer account functionality. This allows your customers to create accounts, save their information for future purchases, and view their order history. It's a great way to build customer loyalty and streamline the shopping experience."
    },
    {
      question: "What kind of inventory management is included?",
      answer: "The Basic E-commerce package includes a basic inventory management system. This allows you to track stock levels, receive low stock notifications, and manually update product quantities. While it doesn't include advanced features like automated reordering, it provides the essential tools needed to manage your inventory effectively."
    }
  ]

  const processSteps = [
    {
      title: "Requirements Gathering",
      description: "We discuss your product range, target audience, and specific e-commerce needs to tailor the solution."
    },
    {
      title: "Store Design",
      description: "Our designers create an attractive and user-friendly online store that showcases your products effectively."
    },
    {
      title: "E-commerce Development",
      description: "We build your store with secure payment integration, product management, and order processing capabilities."
    },
    {
      title: "Product Setup",
      description: "We help you set up your initial product catalog, including descriptions, images, and pricing."
    },
    {
      title: "Testing & Quality Assurance",
      description: "Rigorous testing is performed to ensure smooth checkout processes and overall functionality."
    },
    {
      title: "Launch & Support",
      description: "We launch your online store and provide one month of dedicated support to ensure a successful start."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Basic E-commerce Package</h1>
      <p className="text-xl text-center mb-16 text-muted-foreground">Start selling online with essential features</p>

      <div className="flex justify-center mb-16">
        <Card className="w-full max-w-4xl">
          <CardHeader>
            <CardTitle className="text-2xl">Package Overview</CardTitle>
            <CardDescription>Everything you need to start your online store</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 p-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Features</h3>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
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
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Pricing</h3>
                <div className="mb-6 p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">
                    $3,000
                  </div>
                  <div className="text-sm font-medium">One-time setup fee</div>
                </div>
                <div className="mb-6">
                  <div className="text-3xl font-bold">
                    $200
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
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Basic E-commerce Package?</h2>
        <Tabs defaultValue="easytomanage" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
            <TabsTrigger value="easytomanage">Easy to Manage</TabsTrigger>
            <TabsTrigger value="securepayments">Secure Payments</TabsTrigger>
            <TabsTrigger value="mobileoptimized">Mobile-Optimized</TabsTrigger>
          </TabsList>
          <TabsContent value="easytomanage">
            <Card>
              <CardHeader>
                <CardTitle>Easy to Manage</CardTitle>
                <CardDescription>Streamlined operations for your online store</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Our Basic E-commerce package is designed for ease of use:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>User-friendly admin panel for managing products and orders</li>
                  <li>Simple inventory management system</li>
                  <li>Easy product upload and categorization</li>
                  <li>Straightforward order processing and fulfillment</li>
                  <li>Basic reporting to track your store's performance</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="securepayments">
            <Card>
              <CardHeader>
                <CardTitle>Secure Payments</CardTitle>
                <CardDescription>Safe and smooth transactions for your customers</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>We prioritize the security of your online transactions:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Integration with trusted payment gateways</li>
                  <li>SSL encryption for all transactions</li>
                  <li>PCI DSS compliance for credit card processing</li>
                  <li>Fraud prevention measures</li>
                  <li>Secure customer account management</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="mobileoptimized">
            <Card>
              <CardHeader>
                <CardTitle>Mobile-Optimized</CardTitle>
                <CardDescription>Reach customers on any device</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Our e-commerce solutions are fully responsive:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Optimized shopping experience on smartphones and tablets</li>
                  <li>Fast loading times on mobile networks</li>
                  <li>Easy-to-use mobile checkout process</li>
                  <li>Mobile-friendly product images and descriptions</li>
                  <li>Touch-friendly navigation and buttons</li>
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
        <h2 className="text-3xl font-bold mb-4">Ready to Start Selling Online?</h2>
        <p className="text-xl text-muted-foreground mb-8">Let's create an e-commerce store that helps your business grow.</p>
        <Button size="lg" className="gap-2">
          Contact Us <ArrowRight className="w-4 h-4" />
        </Button>
      </section>
    </div>
  )
}