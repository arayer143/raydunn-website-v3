"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Globe, Laptop, Palette, Server, Smartphone, Zap, Shield, Users, CheckCircle } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"


const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function ServicesPage() {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Design",
      description: "Create stunning, responsive websites that captivate your audience and drive engagement."
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Front-end Development",
      description: "Build interactive and dynamic user interfaces using the latest web technologies."
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Back-end Development",
      description: "Develop robust server-side applications and APIs to power your web solutions."
    },

    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Craft intuitive and visually appealing user experiences that delight your customers."
    },
    {
      icon: <Laptop className="h-8 w-8" />,
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
    <div className="min-h-screen ">
    <header className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-950 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAzMG0tMjggMGEyOCAyOCAwIDEgMCA1NiAwYTI4IDI4IDAgMSAwLTU2IDB6IiBzdHJva2U9IiM5M2MzZWUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAzMG0tMjggMGEyOCAyOCAwIDEgMCA1NiAwYTI4IDI4IDAgMSAwLTU2IDB6IiBzdHJva2U9IiM2MzY2ZjEiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgb3BhY2l0eT0iMC4zIi8+PC9zdmc+')]"
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
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="text-center"
          initial="initial"
          animate="animate"
          variants={fadeUp}
        >
          <h1 className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-300">Our Web Development Services</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-200">
            We offer a comprehensive range of web development services to help your business thrive in the digital world.
          </p>
        </motion.div>
      </div>
    </header>

      <main className="space-y-20 py-16">
        <section className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center justify-center bg-primary/10 rounded-full p-3 w-16 h-16 mx-auto mb-4">
                        <div className="text-primary">
                          {service.icon}
                        </div>
                      </div>
                      <CardTitle className="text-xl text-center">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <Separator className="max-w-4xl mx-auto" />

        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4 text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                At RayDunn Web Solutions, we believe in a collaborative and transparent approach to web development. 
                We work closely with our clients at every stage of the project to ensure we deliver solutions that 
                not only meet but exceed expectations.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                {[
                  { icon: <Zap className="h-8 w-8" />, title: "Agile Development", description: "We use agile methodologies to ensure flexibility and rapid delivery." },
                  { icon: <Shield className="h-8 w-8" />, title: "Security First", description: "We prioritize the security of your data and applications at every step." },
                  { icon: <Users className="h-8 w-8" />, title: "User-Centric", description: "We focus on creating intuitive and accessible user experiences." },
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="bg-primary/20 rounded-full p-3 mb-4">
                      <div className="text-primary">{item.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <Separator className="max-w-4xl mx-auto" />

        <section className="w-full bg-gradient-to-b from-background to-secondary/20 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Why Choose RayDunn Web Solutions?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 max-w-5xl mx-auto">
            {reasons.map((reason, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex justify-center"
              >
                <Card className="h-full w-full max-w-md transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
                  <CardHeader className="flex flex-col items-center text-center pb-2">
                    <div className="bg-primary/10 rounded-full p-3 mb-4">
                      {reason.icon}
                    </div>
                    <CardTitle className="text-xl">{reason.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">{reason.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>

        <motion.div 
          className="bg-primary text-primary-foreground rounded-lg p-8 text-center shadow-2xl max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Web Development Project?</h2>
          <p className="text-lg mb-6 text-primary-foreground/80">
            Let's discuss how we can bring your vision to life with our expert web development services.
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold hover:bg-secondary/90">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </main>
    </div>
  )
}