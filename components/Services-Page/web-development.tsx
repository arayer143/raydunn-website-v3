import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Code, Zap, Layers, Users, Rocket } from 'lucide-react'

export default function WebDevelopmentService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Web Development Services
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground">
            Crafting powerful, scalable, and user-friendly web applications tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-6 text-primary">Cutting-Edge Web Solutions</h2>
            <p className="text-lg text-muted-foreground">
              Our expert team leverages the latest technologies and best practices to deliver high-performance, 
              responsive websites and web applications that drive your business forward.
            </p>
            <ul className="space-y-4">
              {[
                "Custom web application development",
                "Responsive design for all devices",
                "Progressive Web Apps (PWAs)",
                "API development and integration",
                "Database design and optimization",
                "Cloud deployment and scaling",
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
              alt="Web Development Illustration"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <Code className="h-10 w-10 text-primary" />,
              title: "Custom Development",
              description: "Tailor-made solutions that perfectly align with your business objectives and user needs."
            },
            {
              icon: <Zap className="h-10 w-10 text-primary" />,
              title: "Performance Optimization",
              description: "Lightning-fast load times and smooth user experiences across all devices and platforms."
            },
            {
              icon: <Layers className="h-10 w-10 text-primary" />,
              title: "Scalable Architecture",
              description: "Future-proof applications built to grow and evolve with your business requirements."
            },
            {
              icon: <Users className="h-10 w-10 text-primary" />,
              title: "User-Centric Design",
              description: "Intuitive interfaces and seamless user journeys that keep your audience engaged."
            },
            {
              icon: <Rocket className="h-10 w-10 text-primary" />,
              title: "Agile Development",
              description: "Flexible, iterative approach ensuring rapid delivery and continuous improvement."
            },
            {
              icon: <CheckCircle className="h-10 w-10 text-primary" />,
              title: "Quality Assurance",
              description: "Rigorous testing and quality control processes to ensure robust, bug-free applications."
            },
          ].map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-primary">
                  {feature.icon}
                  <span>{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Web Development Project?</h2>
          <p className="text-lg mb-6 text-primary-foreground/80">
            Let's discuss how we can bring your vision to life with our expert web development services.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold hover:bg-secondary/90">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}