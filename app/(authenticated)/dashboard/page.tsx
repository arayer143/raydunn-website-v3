import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { CleanSlateDashboard } from "@/components/Client Dashboards/CleanSlateDashboard"
import { PristineCleanDashboard } from "@/components/Client Dashboards/PristineCleanDashboard"
import { OutkastDashboard } from "@/components/Client Dashboards/OutkastDashboard"
import { getClientCodes, ClientInfo } from "@/lib/clientCodes"
import { DashboardThemeWrapper } from "@/components/DashboardThemeWrapper"
import Navbar from "@/components/Navbar"

const dashboardComponents: { [key: string]: React.ComponentType<{ clientInfo: ClientInfo }> } = {
  "CSPW2024X": CleanSlateDashboard,
  "PCSW2024Y": PristineCleanDashboard,
  "OKIND2024Z": OutkastDashboard,
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    redirect('/login')
  }

  const clientCode = session.user.clientCode
  const clientCodes = getClientCodes()

  if (!clientCode || !clientCodes[clientCode]) {
    return (
      <>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
          <div className="p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">Invalid Client Code</h1>
            <p className="text-gray-700 dark:text-gray-300">The client code associated with your account is invalid. Please contact support for assistance.</p>
          </div>
        </div>
      </>
    )
  }

  const clientInfo = clientCodes[clientCode]

  if (!clientInfo) {
    return (
      <>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
          <div className="p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">Client Information Not Found</h1>
            <p className="text-gray-700 dark:text-gray-300">We couldn't find the information associated with your client code. Please contact support for assistance.</p>
          </div>
        </div>
      </>
    )
  }

  const DashboardComponent = dashboardComponents[clientCode]

  if (!DashboardComponent) {
    return (
      <>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
          <div className="p-8 dark:bg-gray-800 shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-4">Dashboard Not Configured</h1>
            <p className="text-gray-700 dark:text-gray-300">The dashboard for your client code is not yet configured. Please contact support for assistance.</p>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <DashboardThemeWrapper clientInfo={clientInfo}>
        <DashboardComponent clientInfo={clientInfo} />
      </DashboardThemeWrapper>
    </>
  )
}