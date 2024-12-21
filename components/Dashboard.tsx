"use client"

import { useSession } from "next-auth/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Dashboard() {
  const { data: session } = useSession()

  // This is where you'd fetch the actual data from your API
  const analyticsData = {
    visitors: 1234,
    pageViews: 5678,
    bounceRate: "45%",
  }

  const paymentData = {
    lastPayment: "2023-05-15",
    amount: "$299.99",
    nextDue: "2023-06-15",
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Website Analytics</CardTitle>
          <CardDescription>Last 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <dl className="space-y-2">
            <div className="flex justify-between">
              <dt>Visitors:</dt>
              <dd>{analyticsData.visitors}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Page Views:</dt>
              <dd>{analyticsData.pageViews}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Bounce Rate:</dt>
              <dd>{analyticsData.bounceRate}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Payment Information</CardTitle>
          <CardDescription>Monthly subscription</CardDescription>
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
  )
}

