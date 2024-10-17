import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Globe, Laptop, Palette, Server, Smartphone } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: <Globe className="h-8 w-8 mb-2" />,
      title: "Web Design",
      description: "Create stunning, responsive websites that captivate your audience and drive engagement."
    },
    {
      icon: <Code className="h-8 w-8 mb-2" />,
      title: "Front-end Development",
      description: "Build interactive and dynamic user interfaces using the latest web technologies."
    },
    {
      icon: <Server className="h-8 w-8 mb-2" />,
      title: "Back-end Development",
      description: "Develop robust server-side applications and APIs to power your web solutions."
    },
    {
      icon: <Smartphone className="h-8 w-8 mb-2" />,
      title: "Mobile App Development",
      description: "Create cross-platform mobile apps that provide seamless experiences on all devices."
    },
    {
      icon: <Palette className="h-8 w-8 mb-2" />,
      title: "UI/UX Design",
      description: "Craft intuitive and visually appealing user experiences that delight your customers."
    },
    {
      icon: <Laptop className="h-8 w-8 mb-2" />,
      title: "E-commerce Solutions",
      description: "Build secure and scalable online stores that drive sales and grow your business."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-12 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Our Web Development Services</h1>
        <p className="max-w-2xl mx-auto text-lg">
          We offer a comprehensive range of web development services to help your business thrive in the digital world.
        </p>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-center">{service.icon}</div>
                <CardTitle className="text-xl text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-center">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="mb-8 text-muted-foreground">
            Contact us today to discuss how we can help bring your web development ideas to life.
          </p>
          <Button size="lg">Get in Touch</Button>
        </section>
      </main>
    </div>
  )
}