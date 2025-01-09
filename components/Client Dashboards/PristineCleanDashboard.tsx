"use client"

import { useEffect, useState } from 'react'
import { useSession } from "next-auth/react"
import Link from 'next/link'
import { motion } from "framer-motion"
import { format, parseISO, isSameMonth } from 'date-fns'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Skeleton } from "@/components/ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { AlertCircle, Users, Eye, MousePointer, Clock, BarChart, UserPlus, Home, Phone, Mail, MessageSquare, CheckCircle, XCircle, ExternalLink } from 'lucide-react'
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

interface PaymentStatusCheckProps {
  payments: Payment[];
  quickBooksInvoiceUrl: string;
}

function PaymentStatusCheck({ payments, quickBooksInvoiceUrl }: PaymentStatusCheckProps) {
  if (payments.length === 0) return null;

  const sortedPayments = [...payments].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const mostRecentPayment = sortedPayments[0];
  const mostRecentPaymentDate = parseISO(mostRecentPayment.date);
  const today = new Date();
  const isPaid = mostRecentPayment.status.toLowerCase() !== 'open';
  const isUpToDate = isSameMonth(mostRecentPaymentDate, today) && isPaid;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`mb-6 p-4 rounded-lg shadow-lg ${
        isUpToDate ? 'bg-green-100 dark:bg-green-800' : 'bg-red-100 dark:bg-red-800'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {isUpToDate ? (
            <CheckCircle className="h-6 w-6 text-green-500 dark:text-green-300" />
          ) : (
            <XCircle className="h-6 w-6 text-red-500 dark:text-red-300" />
          )}
          <h3 className={`text-lg font-semibold ${
            isUpToDate ? 'text-green-700 dark:text-green-200' : 'text-red-700 dark:text-red-200'
          }`}>
            Payment Status
          </h3>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 500, damping: 15 }}
        >
          <Badge className={`text-sm ${
            isUpToDate ? 'bg-green-200 text-green-800 dark:bg-green-700 dark:text-green-100' : 'bg-red-200 text-red-800 dark:bg-red-700 dark:text-red-100'
          }`}>
            {isUpToDate ? 'Up to Date' : 'Payment Due'}
          </Badge>
        </motion.div>
      </div>
      <p className={`mt-2 ${
        isUpToDate ? 'text-green-600 dark:text-green-200' : 'text-red-600 dark:text-red-200'
      }`}>
        {isUpToDate
          ? `Your most recent payment was on ${format(mostRecentPaymentDate, 'MMMM d, yyyy')}. You're up to date!`
          : `You have not paid as of ${format(today, 'MMMM d, yyyy')}. Please pay now.`}
      </p>
      {!isUpToDate && (
        <div className="mt-4">
          <Link href={quickBooksInvoiceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            View Invoice in QuickBooks
            <ExternalLink className="ml-2 -mr-1 h-4 w-4" />
          </Link>
        </div>
      )}
    </motion.div>
  );
}

interface PristineCleanDashboardProps {
  clientInfo: ClientInfo;
}

export function PristineCleanDashboard({ clientInfo }: PristineCleanDashboardProps) {
  const { data: session, status } = useSession()
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null)
  const [payments, setPayments] = useState<Payment[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const quickBooksInvoiceUrl = "https://connect.intuit.com/portal/app/CommerceNetwork/view/scs-v1-a21a13f789574159b3f4ade1b66d78e9e42d03b7eca041fdb817a78e38917fd52b8be7fcf27b46b5848d31218e69b900?locale=en_US"

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
                <Image src="/pristinecleanlogo.webp" alt="Pristine Clean Logo" width={50} height={50} className="rounded-full" />
                <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">Pristine Clean Dashboard</span>
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
                    <PaymentStatusCheck payments={payments} quickBooksInvoiceUrl={quickBooksInvoiceUrl} />
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-gray-100 dark:bg-gray-700">
                            <TableHead className="w-[100px] font-bold">Date</TableHead>
                            <TableHead className="font-bold">Description</TableHead>
                            <TableHead className="text-right font-bold">Amount</TableHead>
                            <TableHead className="text-center font-bold">Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {payments.map((payment, index) => {
                            const paymentDate = parseISO(payment.date);
                            const isPaid = payment.status.toLowerCase() !== 'open';
                            return (
                              <motion.tr
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}
                              >
                                <TableCell className="font-medium">{format(paymentDate, 'MMM d, yyyy')}</TableCell>
                                <TableCell>{payment.description}</TableCell>
                                <TableCell className="text-right">${payment.amount.toFixed(2)}</TableCell>
                                <TableCell className="text-center">
                                  <Badge
                                    className={isPaid ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'}
                                  >
                                    {isPaid ? 'Paid' : 'Open'}
                                  </Badge>
                                </TableCell>
                              </motion.tr>
                            );
                          })}
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