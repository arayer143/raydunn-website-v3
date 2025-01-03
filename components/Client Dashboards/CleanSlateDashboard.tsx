"use client"

import { useEffect, useState } from 'react'
import { useSession } from "next-auth/react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { AlertCircle, ExternalLink, Users, Eye, MousePointer, Clock, BarChart, UserPlus, DollarSign } from 'lucide-react'
import Image from 'next/image'

interface AnalyticsData {
  visitors: number;
  pageViews: number;
  conversions: number;
  avgSessionDuration: number;
  engagementRate: number;
  sessionsPerUser: number;
  newUsers: number;
}

export function CleanSlateDashboard() {
  const { data: session, status } = useSession()
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchAnalyticsData() {
      if (session?.user?.websiteUrl) {
        setIsLoading(true)
        setError(null)
        try {
          const response = await fetch(`/api/analytics/${encodeURIComponent(session.user.websiteUrl)}`)
          if (!response.ok) {
            throw new Error('Failed to fetch analytics data')
          }
          const data = await response.json()
          setAnalyticsData(data)
        } catch (error) {
          console.error("Error fetching analytics data:", error)
          setError("Failed to fetch analytics data. Please check your configuration and try again.")
        } finally {
          setIsLoading(false)
        }
      }
    }
    fetchAnalyticsData()
  }, [session])

  if (status === "loading") {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  if (status === "unauthenticated") {
    return <div className="flex items-center justify-center h-screen">Access Denied</div>
  }

  if (!session?.user) {
    return <div className="flex items-center justify-center h-screen">No user data available</div>
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

  const metricCards = [
    { label: "Visitors", value: analyticsData?.visitors, icon: Users },
    { label: "Page Views", value: analyticsData?.pageViews, icon: Eye },
    { label: "Conversions", value: analyticsData?.conversions, icon: MousePointer },
    { label: "Avg. Session Duration", value: analyticsData?.avgSessionDuration, icon: Clock, format: (value: number) => `${(value / 60).toFixed(2)} min` },
    { label: "Engagement Rate", value: analyticsData?.engagementRate, icon: BarChart, format: (value: number) => `${(value * 100).toFixed(2)}%` },
    { label: "Sessions per User", value: analyticsData?.sessionsPerUser, icon: Users },
    { label: "New Users", value: analyticsData?.newUsers, icon: UserPlus },
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

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8">
        {metricCards.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.label}</CardTitle>
                <metric.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <Skeleton className="h-8 w-[100px]" />
                ) : (
                  <div className="text-2xl font-bold">
                    {metric.format 
                      ? metric.format(metric.value as number) 
                      : metric.value?.toLocaleString() ?? 'N/A'}
                  </div>
                )}
                {!isLoading && metric.value !== undefined && (
                  <Progress 
                    value={((metric.value as number) / (Math.max(metric.value as number, 100))) * 100} 
                    className="mt-2"
                  />
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Card className="shadow-lg mb-8">
          <CardHeader className="bg-purple-50 dark:bg-purple-900">
            <CardTitle className="text-purple-700 dark:text-purple-100">Website Maintenance</CardTitle>
            <CardDescription>Subscription details</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <dl className="space-y-4">
              {[
                { label: "Last Payment", value: paymentData.lastPayment, icon: DollarSign },
                { label: "Amount", value: paymentData.amount, icon: DollarSign },
                { label: "Next Due", value: paymentData.nextDue, icon: DollarSign },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-2 last:border-b-0">
                  <dt className="font-medium text-gray-600 dark:text-gray-300 flex items-center">
                    <item.icon className="h-4 w-4 mr-2" />
                    {item.label}:
                  </dt>
                  <dd className="font-bold text-purple-600 dark:text-purple-300">{item.value}</dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
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
      </motion.div>
    </div>
  )
}
