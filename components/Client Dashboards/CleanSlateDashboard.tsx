"use client"

import { useEffect, useState } from 'react'
import { useSession } from "next-auth/react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { AlertCircle, Users, Eye, MousePointer, Clock, BarChart, UserPlus, DollarSign } from 'lucide-react'
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

interface ClientInfo {
  name: string;
  code: string;
}

interface Payment {
  date: string;
  amount: number;
  description: string;
}

export function CleanSlateDashboard({ clientInfo }: { clientInfo: ClientInfo }) {
  const { data: session, status } = useSession()
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null)
  const [recentPayments, setRecentPayments] = useState<Payment[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      if (clientInfo.code) {
        setIsLoading(true)
        setError(null)
        try {
          const [analyticsResponse, paymentsResponse] = await Promise.all([
            fetch(`/api/analytics/${encodeURIComponent(clientInfo.code)}`),
            fetch(`/api/process-excel?clientCode=${encodeURIComponent(clientInfo.code)}`)
          ])
          if (!analyticsResponse.ok || !paymentsResponse.ok) {
            throw new Error('Failed to fetch data')
          }
          const analyticsData = await analyticsResponse.json()
          const paymentsData = await paymentsResponse.json()
          setAnalyticsData(analyticsData)
          setRecentPayments(paymentsData.recentPayments || [])
        } catch (error) {
          console.error("Error fetching data:", error)
          setError("Failed to fetch data. Please check your configuration and try again.")
        } finally {
          setIsLoading(false)
        }
      }
    }
    fetchData()
  }, [clientInfo.code])

  if (status === "loading") {
    return <div className="flex items-center justify-center h-screen">Loading...</div>
  }

  if (status === "unauthenticated") {
    return <div className="flex items-center justify-center h-screen">Access Denied</div>
  }

  if (!session?.user) {
    return <div className="flex items-center justify-center h-screen">No user data available</div>
  }

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
                    {metric.value !== undefined && metric.value !== null
                      ? (metric.format 
                          ? metric.format(metric.value as number) 
                          : metric.value.toLocaleString())
                      : 'N/A'}
                  </div>
                )}
                {!isLoading && metric.value !== undefined && metric.value !== null && (
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
                { label: "Last Payment", value: recentPayments[0]?.date || 'N/A', icon: DollarSign },
                { label: "Amount", value: recentPayments[0]?.amount !== undefined ? `$${recentPayments[0].amount.toFixed(2)}` : 'N/A', icon: DollarSign },
                { label: "Next Due", value: 'Contact support for details', icon: DollarSign },
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
            <CardDescription>Recent website maintenance payments</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            ) : recentPayments && recentPayments.length > 0 ? (
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
                    {recentPayments.map((payment, index) => (
                      <tr key={index} className="border-b dark:border-gray-700">
                        <td className="px-6 py-4">{payment.date || 'N/A'}</td>
                        <td className="px-6 py-4">{payment.description || 'N/A'}</td>
                        <td className="px-6 py-4 text-right font-medium text-gray-900 dark:text-gray-100">
                          {payment.amount !== undefined ? `$${payment.amount.toFixed(2)}` : 'N/A'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">No recent payments found.</p>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}