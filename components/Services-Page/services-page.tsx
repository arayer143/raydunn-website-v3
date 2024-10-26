"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Globe, Laptop, Palette, Server, Smartphone, Zap, Shield, Users } from "lucide-react"
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <header className="bg-primary text-white py-20 px-4 text-center relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAzMG0tMjggMGEyOCAyOCAwIDEgMCA1NiAwYTI4IDI4IDAgMSAwLTU2IDB6IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+')]"
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
          <p className="max-w-2xl mx-auto text-lg text-gray-100">
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
                className="flex flex-col transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl group bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900"
              >
                <CardHeader>
                  <div className="flex items-center justify-center bg-white/10 rounded-full p-3 w-16 h-16 mx-auto transition-colors duration-300 group-hover:bg-white/20">
                    <div className="text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-center mt-4 text-white">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-center text-white/80">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-gray-200 dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4 text-center space-y-6">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Our Approach</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
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
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 text-center space-y-8">
          <h2 className="text-3xl font-bold mb-4">Why Choose RayDunn Web Solutions?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With years of experience and a passion for cutting-edge technology, we're committed to delivering 
            high-quality web solutions that help your business grow. Our team of experts stays up-to-date with 
            the latest trends and best practices in web development to ensure your project is built with the 
            future in mind.
          </p>
          <ul className="text-left max-w-2xl mx-auto space-y-2">
            {[
              "Experienced and skilled development team",
              "Customized solutions tailored to your business needs",
              "Ongoing support and maintenance",
              "Transparent communication throughout the project",
              "Commitment to delivering on time and within budget"
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <Globe className="h-5 w-5 mr-2 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-primary text-white py-16 relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAzMG0tMjggMGEyOCAyOCAwIDEgMCA1NiAwYTI4IDI4IDAgMSAwLTU2IDB6IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+')]"
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
          <div className="container mx-auto px-4 text-center space-y-6 relative z-10">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Contact us today to discuss how we can help bring your web development ideas to life. 
              Let's create something amazing together!
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-4">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}