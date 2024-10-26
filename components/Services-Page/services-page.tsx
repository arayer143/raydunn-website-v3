"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Globe, Laptop, Palette, Server, Smartphone, Zap, Shield, Users, CheckCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

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

  const reasons = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Experienced Team",
      description: "Our skilled developers bring years of experience and expertise to every project, ensuring high-quality solutions tailored to your needs."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Cutting-Edge Technology",
      description: "We stay up-to-date with the latest trends and best practices in web development, ensuring your project is built with the future in mind."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Ongoing Support",
      description: "We provide continuous support and maintenance for your web solutions, ensuring they remain secure, up-to-date, and performing optimally."
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Custom Solutions",
      description: "We create tailored web solutions that align perfectly with your business goals, ensuring maximum impact and ROI for your digital presence."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 dark:from-background dark:to-secondary/10">
      <header className="bg-primary text-primary-foreground py-20 px-4 text-center relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAzMG0tMjggMGEyOCAyOCAwIDEgMCA1NiAwYTI4IDI4IDAgMSAwLTU2IDB6IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBvcGFjaXR5PSIwLjMiLz48L3N2Zz4=')]"
          style={{ color: 'currentColor' }}
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
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">Our Web Development Services</h1>
          <p className="max-w-2xl mx-auto text-lg text-primary-foreground/80">
            We offer a comprehensive range of web development services to help your business thrive in the digital world.
          </p>
        </div>
      </header>

      <main className="space-y-20">
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="flex flex-col transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl group bg-gradient-to-r from-primary/80 via-primary to-primary/80 dark:from-primary/60 dark:via-primary/80 dark:to-primary/60"
              >
                <CardHeader>
                  <div className="flex items-center justify-center bg-primary-foreground/10 rounded-full p-3 w-16 h-16 mx-auto transition-colors duration-300 group-hover:bg-primary-foreground/20">
                    <div className="text-primary-foreground transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-center mt-4 text-primary-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-center text-primary-foreground/80">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-muted py-16">
          <div className="container mx-auto px-4 text-center space-y-6">
            <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              At RayDunn Web Solutions, we believe in a collaborative and transparent approach to web development. 
              We work closely with our clients at every stage of the project to ensure we deliver solutions that 
              not only meet but exceed expectations.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {[
                { icon: <Zap className="h-8 w-8" />, title: "Agile Development", description: "We use agile methodologies to ensure flexibility and rapid delivery." },
                { icon: <Shield className="h-8 w-8" />, title: "Security First", description: "We prioritize the security of your data and applications at every step." },
                { icon: <Users className="h-8 w-8" />, title: "User-Centric", description: "We focus on creating intuitive and accessible user experiences." },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-primary/20 rounded-full p-3 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose RayDunn Web Solutions?</h2>
          <div className="grid gap-12 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </section>


        <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Web Development Project?</h2>
          <p className="text-lg mb-6 text-primary-foreground/80">
            Let's discuss how we can bring your vision to life with our expert web development services.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold hover:bg-secondary/90">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}