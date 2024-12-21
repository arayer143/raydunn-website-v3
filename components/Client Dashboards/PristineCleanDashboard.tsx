import { useEffect, useState } from 'react'
import { useSession } from "next-auth/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Home, Droplets, Calendar } from 'lucide-react'

export function PristineCleanDashboard() {
  const { data: session } = useSession()
  const analyticsData = {
    visitors: 1876,
    pageViews: 5234,
    bounceRate: "38%",
    leadsGenerated: 32
  }

  if (!session?.user) {
    return <div>Loading...</div>
  }

  const serviceData = {
    jobsCompleted: 289,
    squareFootageCleaned: 380000,
    residentialJobs: 198,
    commercialJobs: 91
  }

  const paymentData = {
    lastPayment: "2024-01-10",
    amount: "$149.99",
    nextDue: "2024-02-10"
  }

  const pastPayments = [
    { date: "2024-01-10", amount: "$149.99", description: "Monthly website maintenance" },
    { date: "2023-12-10", amount: "$149.99", description: "Monthly website maintenance" },
    { date: "2023-11-10", amount: "$149.99", description: "Monthly website maintenance" }
  ]

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Welcome to Pristine Clean Softwash Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Website Performance</CardTitle>
            <CardDescription>Last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div className="flex justify-between items-center">
                <dt>Website Visitors:</dt>
                <dd className="font-medium">{analyticsData.visitors}</dd>
              </div>
              <div className="flex justify-between items-center">
                <dt>Page Views:</dt>
                <dd className="font-medium">{analyticsData.pageViews}</dd>
              </div>
              <div className="flex justify-between items-center">
                <dt>Bounce Rate:</dt>
                <dd className="font-medium">{analyticsData.bounceRate}</dd>
              </div>
              <div className="flex justify-between items-center">
                <dt>Leads Generated:</dt>
                <dd className="font-medium">{analyticsData.leadsGenerated}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Service Statistics</CardTitle>
            <CardDescription>All time metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Droplets className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">Jobs Completed</span>
                </div>
                <p className="text-2xl font-bold">{serviceData.jobsCompleted}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">Sq Ft Cleaned</span>
                </div>
                <p className="text-2xl font-bold">{serviceData.squareFootageCleaned.toLocaleString()}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Home className="h-4 w-4 text-orange-500" />
                  <span className="text-sm font-medium">Residential</span>
                </div>
                <p className="text-2xl font-bold">{serviceData.residentialJobs}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-purple-500" />
                  <span className="text-sm font-medium">Commercial</span>
                </div>
                <p className="text-2xl font-bold">{serviceData.commercialJobs}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Website Maintenance</CardTitle>
            <CardDescription>Subscription details</CardDescription>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt>Last Payment:</dt>
                <dd>{paymentData.lastPayment}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Amount:</dt>
                <dd>{paymentData.amount}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Next Due:</dt>
                <dd>{paymentData.nextDue}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
          <CardDescription>Past website maintenance payments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase bg-muted">
                <tr>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Description</th>
                  <th className="px-4 py-2 text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {pastPayments.map((payment, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-2">{payment.date}</td>
                    <td className="px-4 py-2">{payment.description}</td>
                    <td className="px-4 py-2 text-right">{payment.amount}</td>
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
