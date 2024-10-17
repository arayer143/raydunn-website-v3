
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


export default function AboutPage() {
  return (
    <>

    <div className="container mx-auto px-4 py-12 space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">About TechCraft Solutions</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Crafting digital experiences that transform businesses and delight users
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Our Story</h2>
        <p className="text-lg text-muted-foreground">
          Founded in 2015, TechCraft Solutions has been at the forefront of web development innovation. 
          We started as a small team of passionate developers and have grown into a full-service digital 
          agency, helping businesses of all sizes establish and enhance their online presence.
        </p>
      </section>



      <section className="space-y-6">
        <h2 className="text-3xl font-semibold">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Innovation", description: "We stay ahead of the curve, embracing new technologies and methodologies." },
            { title: "Quality", description: "We never compromise on the quality of our work, ensuring robust and scalable solutions." },
            { title: "Collaboration", description: "We believe in the power of teamwork, both internally and with our clients." },
            { title: "User-Centric", description: "We put users at the heart of every project, creating intuitive and engaging experiences." },
            { title: "Integrity", description: "We operate with transparency and honesty in all our business dealings." },
            { title: "Continuous Learning", description: "We're committed to ongoing education and professional development." },
          ].map((value) => (
            <Card key={value.title}>
              <CardContent className="p-6 space-y-2">
                <Badge variant="secondary">{value.title}</Badge>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>


    </div>
    </>
  )
}