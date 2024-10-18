import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Rocket, Trophy, Globe, Zap, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-16 space-y-16">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">About RayDunn Web Solutions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering businesses with innovative web solutions and stunning digital experiences
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">Our Story</h2>
            <p className="text-lg text-muted-foreground">
              RayDunn Web Solutions was founded with a vision to help businesses thrive in the digital landscape. 
              Based in New Orleans, LA, we've grown from a passionate solo developer to a dedicated team of web 
              professionals, each bringing unique skills and perspectives to our projects.
            </p>
            <p className="text-lg text-muted-foreground">
              Since our inception, we've had the privilege of working with diverse clients, from local small 
              businesses to growing enterprises. Our commitment to quality and client satisfaction has been the 
              cornerstone of our success and continued growth.
            </p>
          </div>
          <div className="relative h-64 md:h-full">
            <Image
              src="/raydunnlogoheadert.webp"
              alt="RayDunn Web Solutions team"
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Innovation", description: "We embrace cutting-edge technologies to deliver modern, efficient solutions.", icon: <Rocket className="h-6 w-6" /> },
              { title: "Quality", description: "We ensure every project meets the highest standards of performance and reliability.", icon: <Trophy className="h-6 w-6" /> },
              { title: "Client-Focused", description: "We prioritize our clients' needs and goals in every decision we make.", icon: <Users className="h-6 w-6" /> },
              { title: "Accessibility", description: "We create inclusive websites that cater to all users, regardless of their abilities.", icon: <Globe className="h-6 w-6" /> },
              { title: "Transparency", description: "We maintain open communication and honesty throughout our client relationships.", icon: <Shield className="h-6 w-6" /> },
              { title: "Continuous Improvement", description: "We constantly refine our skills to stay ahead in the fast-paced web industry.", icon: <Zap className="h-6 w-6" /> },
            ].map((value) => (
              <Card key={value.title} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      {value.icon}
                    </div>
                    <Badge variant="secondary" className="text-lg font-semibold">
                      {value.title}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-center">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Custom Web Development", "Responsive Design", "E-commerce Solutions", "SEO Optimization", "Website Maintenance", "Performance Tuning", "Content Management Systems", "Web Hosting"].map((skill) => (
              <Badge key={skill} variant="outline" className="text-lg py-2 px-4 justify-center">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        <section className="bg-secondary/30 rounded-lg p-8 text-center space-y-6">
          <h2 className="text-3xl font-semibold">Ready to Elevate Your Online Presence?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's collaborate to create a website that truly represents your brand and drives your business forward. 
            Our team is ready to turn your vision into a stunning digital reality.
          </p>
          <Button asChild size="lg" className="mt-4">
            <Link href="/contact">
              Get Your Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </section>
      </div>
    </div>
  )
}