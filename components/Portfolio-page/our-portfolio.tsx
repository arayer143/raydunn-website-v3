import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function OurPortfolio() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Our Portfolio
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Image
                  alt={`Project ${i}`}
                  className="object-cover w-full h-48"
                  height={200}
                  src={`/cleanslatelol-whiteBG.jpg`}
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width={300}
                />
                <CardHeader>
                  <CardTitle>Project {i}</CardTitle>
                  <CardDescription>Brief description of the project and its impact.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" size="sm">View Project</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            What Our Clients Say
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Image
                      alt="Client"
                      className="rounded-full"
                      height={40}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width={40}
                    />
                    <div>
                      <CardTitle className="text-lg">Client Name</CardTitle>
                      <CardDescription>Company</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  &quot;The team delivered an outstanding website that exceeded our expectations. Highly recommended!&quot;
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}