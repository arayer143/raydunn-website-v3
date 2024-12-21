import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { CleanSlateDashboard } from "@/components/Client Dashboards/CleanSlateDashboard"
import { PristineCleanDashboard } from "@/components/Client Dashboards/PristineCleanDashboard"
import { OutkastDashboard } from "@/components/Client Dashboards/OutkastDashboard"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    console.log("No session or user found, redirecting to login")
    redirect('/login')
  }

  console.log("User websiteUrl:", session.user.websiteUrl)

  switch (session.user.websiteUrl) {
    case "https://www.cleanslatepressurewashingnola.com":
      return <CleanSlateDashboard />
    case "https://www.pristinecleansoftwash.com":
      return <PristineCleanDashboard />
    case "https://outkastindustrial.com":
      return <OutkastDashboard />
    default:
      console.log("Invalid websiteUrl:", session.user.websiteUrl)
      return <div>Invalid client website URL</div>
  }
}

