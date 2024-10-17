import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A fully responsive e-commerce platform with advanced filtering and search capabilities.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Web Application",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://example-ecommerce.com"
    },
    {
      id: 2,
      title: "Task Management Dashboard",
      description: "An intuitive task management system with real-time updates and team collaboration features.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Web Application",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
      link: "https://example-taskmanager.com"
    },
    {
      id: 3,
      title: "Fitness Tracking Mobile App",
      description: "A cross-platform mobile app for tracking workouts, nutrition, and health metrics.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Mobile App",
      technologies: ["React Native", "GraphQL", "AWS"],
      link: "https://example-fitnessapp.com"
    },
    {
      id: 4,
      title: "Corporate Website Redesign",
      description: "A modern, accessible website redesign for a Fortune 500 company, focusing on user experience and performance.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Website",
      technologies: ["Next.js", "Contentful", "Vercel"],
      link: "https://example-corporate.com"
    },
    {
      id: 5,
      title: "AI-Powered Chatbot",
      description: "An intelligent chatbot for customer support, integrating natural language processing and machine learning.",
      image: "/placeholder.svg?height=400&width=600",
      category: "AI & Machine Learning",
      technologies: ["Python", "TensorFlow", "DialogFlow", "Node.js"],
      link: "https://example-chatbot.com"
    },
    {
      id: 6,
      title: "Blockchain Voting System",
      description: "A secure and transparent voting system built on blockchain technology for organizational decision-making.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Blockchain",
      technologies: ["Solidity", "Ethereum", "Web3.js", "React"],
      link: "https://example-blockvote.com"
    }
  ]

  const categories = ["All", "Web Application", "Mobile App", "Website", "AI & Machine Learning", "Blockchain"]

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Portfolio</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore our diverse range of projects, showcasing our expertise in web development, mobile apps, and cutting-edge technologies.
        </p>
      </header>

      <Tabs defaultValue="All" className="mb-12">
        <TabsList className="flex flex-wrap justify-center">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="px-4 py-2">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => category === "All" || project.category === category)
                .map((project) => (
                  <Card key={project.id} className="flex flex-col">
                    <CardHeader>
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="rounded-t-lg object-cover h-48 w-full"
                      />
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription className="mt-2">{project.description}</CardDescription>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                          View Project
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <section className="text-center mt-16">
        <h2 className="text-3xl font-bold mb-4">Ready to start your project?</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Let&apos;s collaborate to bring your ideas to life with cutting-edge web solutions.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </section>
    </div>
  )
}