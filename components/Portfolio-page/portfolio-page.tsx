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
      description: "Website for Clean Slate Pressure Washing LLC ",
      image: "/cleanslatelol-whiteBG.webp",
      category: "Website",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      link: "https://cleanslatepressurewashingnola.com/",
      portfolioPage: "/portfolio/clean-slate"
    },
    {
      id: 2,
      title: "Pristin Clean Soft Wash ",
      description: "Website for Pristine Clean Soft Wash LLC",
      image: "/pristinecleanlogo.webp",
      category: "Website",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      link: "https://pristinecleansoftwash.com/",
      portfolioPage: "/portfolio/pristine-clean"
    },
    {
      id: 3,
      title: "OutKast Industrial Group",
      description: "Website for OutKast Industrial Group LLC",
      image: "/outkast-logo.webp",
      category: "Website",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      link: "https://outkastindustrial.com/",
      portfolioPage: "/portfolio/outkast"
    },

    {
      id: 4,
      title: "Jessie Boudreaux Social Media",
      description: "Turnkey WordPress solution for a social media company",
      image: "/jessie-boudreaux-logo.webp",
      category: "Website",
      technologies: ["WordPress", "Custom Theme", "Responsive Design"],
      link: "https://jessieboudreaux.com/",
      portfolioPage: "/portfolio/jessie-boudreaux"
    }
  ]

  const categories = ["All", "Web Application", "Website"]

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
                        width={300}
                        height={200}
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
                    <CardFooter className="flex justify-between">
                      <Button asChild variant="outline" className="w-[48%]">
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                          View Project
                        </Link>
                      </Button>
                      <Button asChild className="w-[48%]">
                        <Link href={project.portfolioPage}>
                          Read More
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
