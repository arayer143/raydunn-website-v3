"use client"

import { useEffect, useState } from 'react'
import { useSession } from "next-auth/react"
import Link from 'next/link'
import { motion } from "framer-motion"
import { format, isThisMonth, parseISO } from 'date-fns'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { AlertCircle, Users, Eye, MousePointer, Clock, BarChart, UserPlus, Home, Phone, Mail, MessageSquare } from 'lucide-react'
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
  status: string;
}

function PaymentStatusCheck({ payments }: { payments: Payment[] }) {
  if (payments.length === 0) return null;

  const sortedPayments = [...payments].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const mostRecentPayment = sortedPayments[0];
  const mostRecentPaymentDate = parseISO(mostRecentPayment.date);
  const isCurrentMonth = isThisMonth(mostRecentPaymentDate);

  return (
    <Alert variant={isCurrentMonth ? "default" : "destructive"} className="mb-6">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Payment Status</AlertTitle>
      <AlertDescription>
        {isCurrentMonth
          ? `Your most recent payment was on ${format(mostRecentPaymentDate, 'MMMM d, yyyy')}. You're up to date!`
          : `Your last payment was on ${format(mostRecentPaymentDate, 'MMMM d, yyyy')}. A new payment may be due this month.`}
      </AlertDescription>
    </Alert>
  );
}

export function CleanSlateDashboard({ clientInfo }: { clientInfo: ClientInfo }) {
  const { data: session, status } = useSession()
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null)
  const [payments, setPayments] = useState<Payment[]>([])
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
          
          if (!analyticsResponse.ok) {
            throw new Error('Failed to fetch analytics data')
          }

          const analyticsData = await analyticsResponse.json()
          setAnalyticsData(analyticsData)

          if (paymentsResponse.ok) {
            const paymentsData = await paymentsResponse.json()
            setPayments(paymentsData.payments || [])
          } else {
            console.warn('Failed to fetch payment data, but continuing with analytics')
          }
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
    { label: "Visitors", value: analyticsData?.visitors, icon: Users, description: "The total number of unique users who have visited your website." },
    { label: "Page Views", value: analyticsData?.pageViews, icon: Eye, description: "The total number of pages viewed across all sessions." },
    { label: "Conversions", value: analyticsData?.conversions, icon: MousePointer, description: "The number of times a user completes a desired action, such as making a purchase or signing up." },
    { label: "Avg. Session Duration", value: analyticsData?.avgSessionDuration, icon: Clock, format: (value: number) => `${(value / 60).toFixed(2)} min`, description: "The average length of time users spend on your website per session." },
    { label: "Engagement Rate", value: analyticsData?.engagementRate, icon: BarChart, format: (value: number) => `${(value * 100).toFixed(2)}%`, description: "The percentage of engaged sessions (lasting longer than 10 seconds) out of total sessions." },
    { label: "Sessions per User", value: analyticsData?.sessionsPerUser, icon: Users, description: "The average number of sessions per user, indicating how often users return to your site." },
    { label: "New Users", value: analyticsData?.newUsers, icon: UserPlus, description: "The number of first-time visitors to your website." },
  ]

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Image src="/cleanslatelol-whiteBG.webp" alt="Clean Slate Logo" width={50} height={50} className="rounded-full" />
                <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">Clean Slate Dashboard</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <Link href="/" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  <Home className="mr-1 h-4 w-4" />
                  Home
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Analytics Overview</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {metricCards.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Card className="bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105">
                          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{metric.label}</CardTitle>
                            <metric.icon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                          </CardHeader>
                          <CardContent>
                            {isLoading ? (
                              <Skeleton className="h-8 w-[100px]" />
                            ) : (
                              <motion.div
                                className="text-2xl font-bold"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 100, delay: index * 0.1 + 0.2 }}
                              >
                                {metric.value !== undefined && metric.value !== null
                                  ? (metric.format 
                                      ? metric.format(metric.value as number) 
                                      : metric.value.toLocaleString())
                                  : 'N/A'}
                              </motion.div>
                            )}
                          </CardContent>
                        </Card>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{metric.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <Card className="bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Payment History</CardTitle>
                <CardDescription>Recent website maintenance payments</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ) : payments && payments.length > 0 ? (
                  <>
                    <PaymentStatusCheck payments={payments} />
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[100px]">Date</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                            <TableHead className="text-center">Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {payments.map((payment, index) => (
                            <motion.tr
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                              <TableCell className="font-medium">{format(parseISO(payment.date), 'MMM d, yyyy')}</TableCell>
                              <TableCell>{payment.description}</TableCell>
                              <TableCell className="text-right">${payment.amount.toFixed(2)}</TableCell>
                              <TableCell className="text-center">
                                <Badge
                                  className={payment.status.toLowerCase() === 'paid' ? 'bg-green-500 hover:bg-green-600' : ''}
                                >
                                  {payment.status}
                                </Badge>
                              </TableCell>
                            </motion.tr>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </>
                ) : (
                  <p className="text-gray-500 dark:text-gray-400">No payment history available.</p>
                )}
              </CardContent>
            </Card>
          </section>

          <section>
            <Card className="bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center">Contact Information</CardTitle>
                <CardDescription className="text-center">Get in touch with us for any questions or concerns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center space-y-6">
                  <motion.div
                    className="flex items-center justify-center w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <MessageSquare className="h-6 w-6 mr-2 text-blue-500" />
                    <span className="text-lg">Live chat available 9 AM - 5 PM EST</span>
                  </motion.div>
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white"
                        onClick={() => window.location.href = 'tel:9858692356'}
                      >
                        <Phone className="h-5 w-5" />
                        <span>Call Us</span>
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
                        onClick={() => window.location.href = 'mailto:raydunntech@gmail.com'}
                      >
                        <Mail className="h-5 w-5" />
                        <span>Email Us</span>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  )
}

