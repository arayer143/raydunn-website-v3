import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Shield, Users } from "lucide-react"

export default function WhyChooseUsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-800 dark:text-gray-100">
          Why Choose Us
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          <ReasonCard
            icon={<Zap className="h-12 w-12 mb-4 text-gray-600 dark:text-gray-300" />}
            title="Fast & Efficient"
            description="We deliver high-performance websites that load quickly and run smoothly."
          />
          <ReasonCard
            icon={<Shield className="h-12 w-12 mb-4 text-gray-600 dark:text-gray-300" />}
            title="Secure & Reliable"
            description="Our solutions prioritize your data security and ensure consistent uptime."
          />
          <ReasonCard
            icon={<Users className="h-12 w-12 mb-4 text-gray-600 dark:text-gray-300" />}
            title="Client-Focused Approach"
            description="We work closely with you to understand and meet your specific needs."
          />
        </div>
      </div>
    </section>
  )
}

function ReasonCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="w-full max-w-sm bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out border border-gray-200 dark:border-gray-600">
      <CardHeader className="flex flex-col items-center pt-6">
        {icon}
        <CardTitle className="text-xl font-bold text-center mb-2 text-gray-800 dark:text-gray-100">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-gray-600 dark:text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}