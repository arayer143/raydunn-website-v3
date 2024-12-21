"use client"

import { useEffect, useState } from 'react'
import { useSession } from "next-auth/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Home, Droplets, Calendar, ExternalLink } from 'lucide-react'
import { getCleanSlateAnalyticsData } from '@/lib/googleAnalytics'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export function CleanSlateDashboard() {
  const { data: session, status } = useSession()
  const [analyticsData, setAnalyticsData] = useState({
    visitors: 0,
    pageViews: 0,
    bounceRate: "0%",
    leadsGenerated: 0
  })
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchAnalyticsData() {
      try {
        const data = await getCleanSlateAnalyticsData()
        setAnalyticsData(data)
      } catch (error) {
        setError("Failed to fetch analytics data. Please check your configuration and try again.")
        console.error("Error fetching analytics data:", error)
      }
    }
    fetchAnalyticsData()
  }, [])

  if (status === "loading") {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  if (status === "unauthenticated") {
    return <div className="flex items-center justify-center h-screen">Access Denied</div>
  }

  if (!session?.user) {
    return <div className="flex items-center justify-center h-screen">No user data available</div>
  }

  const serviceData = {
    jobsCompleted: 312,
    squareFootageCleaned: 450000,
    residentialJobs: 245,
    commercialJobs: 67
  }

  const paymentData = {
    lastPayment: "2024-01-15",
    amount: "$149.99",
    nextDue: "2024-02-15"
  }

  const pastPayments = [
    { date: "2024-01-15", amount: "$149.99", description: "Monthly website maintenance" },
    { date: "2023-12-15", amount: "$149.99", description: "Monthly website maintenance" },
    { date: "2023-11-15", amount: "$149.99", description: "Monthly website maintenance" }
  ]

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <Image src="/cleanslatelol-whiteBG.webp" alt="Clean Slate Logo" width={100} height={100} className="rounded-full" />
          <h1 className="text-3xl font-bold">Clean Slate Pressure Washing Dashboard</h1>
        </div>
        <Button asChild variant="outline">
          <a href="https://cleanslatepressurewashingnola.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
            Visit Website
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-lg">
          <CardHeader className="bg-blue-50 dark:bg-blue-900">
            <CardTitle className="text-blue-700 dark:text-blue-100">Website Performance</CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <dl className="space-y-4">
              {[
                { label: "Website Visitors", value: analyticsData.visitors },
                { label: "Page Views", value: analyticsData.pageViews },
                { label: "Bounce Rate", value: analyticsData.bounceRate },
                { label: "Leads Generated", value: analyticsData.leadsGenerated },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-2 last:border-b-0">
                  <dt className="font-medium text-gray-600 dark:text-gray-300">{item.label}:</dt>
                  <dd className="font-bold text-blue-600 dark:text-blue-300">{item.value}</dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader className="bg-green-50 dark:bg-green-900">
            <CardTitle className="text-green-700 dark:text-green-100">Service Statistics</CardTitle>
            <CardDescription>All time metrics</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Droplets, color: "text-blue-500", label: "Jobs Completed", value: serviceData.jobsCompleted },
                { icon: Calendar, color: "text-green-500", label: "Sq Ft Cleaned", value: serviceData.squareFootageCleaned.toLocaleString() },
                { icon: Home, color: "text-orange-500", label: "Residential", value: serviceData.residentialJobs },
                { icon: Building2, color: "text-purple-500", label: "Commercial", value: serviceData.commercialJobs },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  <p className="text-2xl font-bold">{item.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader className="bg-purple-50 dark:bg-purple-900">
            <CardTitle className="text-purple-700 dark:text-purple-100">Website Maintenance</CardTitle>
            <CardDescription>Subscription details</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <dl className="space-y-4">
              {[
                { label: "Last Payment", value: paymentData.lastPayment },
                { label: "Amount", value: paymentData.amount },
                { label: "Next Due", value: paymentData.nextDue },
              ].map((item, index) => (
                <div key={index} className="flex justify-between border-b pb-2 last:border-b-0">
                  <dt className="font-medium text-gray-600 dark:text-gray-300">{item.label}:</dt>
                  <dd className="font-bold text-purple-600 dark:text-purple-300">{item.value}</dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8 shadow-lg">
        <CardHeader className="bg-gray-50 dark:bg-gray-800">
          <CardTitle className="text-gray-700 dark:text-gray-100">Payment History</CardTitle>
          <CardDescription>Past website maintenance payments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 font-medium text-gray-600 dark:text-gray-300">Date</th>
                  <th className="px-6 py-3 font-medium text-gray-600 dark:text-gray-300">Description</th>
                  <th className="px-6 py-3 font-medium text-gray-600 dark:text-gray-300 text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {pastPayments.map((payment, index) => (
                  <tr key={index} className="border-b dark:border-gray-700">
                    <td className="px-6 py-4">{payment.date}</td>
                    <td className="px-6 py-4">{payment.description}</td>
                    <td className="px-6 py-4 text-right font-medium text-gray-900 dark:text-gray-100">{payment.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

