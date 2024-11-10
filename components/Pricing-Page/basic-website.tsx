import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, ArrowRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BasicWebsite() {
const features = [
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
]

const faqItems = [
  {
    question: "What is included in the responsive design?",
    answer: "Our responsive design ensures your website looks great on all devices, including desktops, tablets, and mobile phones. We use flexible layouts, images, and cascading stylesheet media queries to adapt the design to the viewing environment."
  },
  {
    question: "Can I add more pages later?",
    answer: "Yes, you can add more pages to your website later. However, the Basic Website package includes up to 5 pages. Additional pages may incur extra costs. Please contact our support team for more information on expanding your website."
  },
  {
    question: "What does basic SEO optimization include?",
    answer: "Our basic SEO optimization includes on-page elements such as meta titles, descriptions, header tags, and basic keyword optimization. We also ensure your website has a sitemap and is submitted to major search engines."
  },
  {
    question: "How does the 1 month of support work?",
    answer: "For the first month after your website goes live, our team will be available to address any issues, make minor adjustments, and answer your questions. This ensures a smooth launch and helps you get comfortable with your new website."
  }
]

const processSteps = [
  {
    title: "Discovery",
    description: "We start by understanding your business, goals, and target audience to create a tailored website strategy."
  },
  {
    title: "Design",
    description: "Our designers create a visually appealing and user-friendly layout that aligns with your brand identity."
  },
  {
    title: "Development",
    description: "Our developers bring the design to life, ensuring responsiveness and optimal performance across all devices."
  },
  {
    title: "Content Integration",
    description: "We populate your website with your provided content, optimizing it for search engines and user engagement."
  },
  {
    title: "Testing & Launch",
    description: "Rigorous testing is performed to ensure everything works perfectly before we launch your new website."
  },
  {
    title: "Support & Maintenance",
    description: "We provide one month of dedicated support to ensure a smooth transition and address any post-launch needs."
  }
]

return (
  <div className="container mx-auto px-4 py-16">
    <h1 className="text-4xl font-bold text-center mb-4">Basic Website Package</h1>
    <p className="text-xl text-center mb-16 text-muted-foreground">Perfect for small businesses and personal websites</p>

    <div className="flex justify-center mb-16 max-w-4xl mx-auto">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-2xl">Package Overview</CardTitle>
          <CardDescription>Everything you need to establish your online presence</CardDescription>
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
                  $1,500
                </div>
                <div className="text-sm font-medium">One-time design fee</div>
              </div>
              <div className="mb-6">
                <div className="text-3xl font-bold">
                  $100
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
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Basic Website Package?</h2>
      <Tabs defaultValue="professional" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
          <TabsTrigger value="professional">Professional Design</TabsTrigger>
          <TabsTrigger value="mobile">Mobile-Friendly</TabsTrigger>
          <TabsTrigger value="seo">SEO Optimized</TabsTrigger>
        </TabsList>
        <TabsContent value="professional">
          <Card>
            <CardHeader>
              <CardTitle>Professional Design</CardTitle>
              <CardDescription>Make a lasting first impression</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>Our team of experienced designers creates sleek, modern websites that effectively represent your brand and engage your visitors. We focus on:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Clean and intuitive user interfaces</li>
                <li>Consistent branding throughout the site</li>
                <li>Optimized user experience for increased conversions</li>
                <li>Custom graphics and imagery that align with your brand identity</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="mobile">
          <Card>
            <CardHeader>
              <CardTitle>Mobile-Friendly</CardTitle>
              <CardDescription>Reach customers on any device</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 tect-center">
              <p>In today's mobile-first world, having a responsive website is crucial. Our mobile-friendly designs ensure:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Seamless experience across desktops, tablets, and smartphones</li>
                <li>Fast loading times on mobile networks</li>
                <li>Touch-friendly navigation and buttons</li>
                <li>Improved Google rankings due to mobile optimization</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="seo">
          <Card>
            <CardHeader>
              <CardTitle>SEO Optimized</CardTitle>
              <CardDescription>Improve your online visibility</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>Our basic SEO optimization helps customers find you more easily online. We implement:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Keyword research and on-page optimization</li>
                <li>Meta titles and descriptions for all pages</li>
                <li>Proper heading structure and image alt tags</li>
                <li>XML sitemap creation and submission to search engines</li>
                <li>Basic local SEO setup for improved local search results</li>
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
      <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
      <p className="text-xl text-muted-foreground mb-8">Let's create a website that perfectly represents your brand and engages your audience.</p>
      <Button size="lg" className="gap-2">
        Contact Us <ArrowRight className="w-4 h-4" />
      </Button>
    </section>
  </div>
)
}