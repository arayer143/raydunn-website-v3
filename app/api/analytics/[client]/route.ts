import { NextResponse } from 'next/server'
import { google } from 'googleapis'

const analyticsreporting = google.analyticsreporting('v4')

type ClientConfig = {
  clientEmail: string;
  privateKey: string;
  viewId: string;
}

const clientConfigs: Record<string, ClientConfig> = {
  cleanSlate: {
    clientEmail: process.env.CLEAN_SLATE_GA_CLIENT_EMAIL || '',
    privateKey: process.env.CLEAN_SLATE_GA_PRIVATE_KEY?.replace(/\\n/g, '\n') || '',
    viewId: process.env.CLEAN_SLATE_GA_VIEW_ID || '',
  },
  pristineClean: {
    clientEmail: process.env.PRISTINE_CLEAN_GA_CLIENT_EMAIL || '',
    privateKey: process.env.PRISTINE_CLEAN_GA_PRIVATE_KEY?.replace(/\\n/g, '\n') || '',
    viewId: process.env.PRISTINE_CLEAN_GA_VIEW_ID || '',
  },
  outkast: {
    clientEmail: process.env.OUTKAST_GA_CLIENT_EMAIL || '',
    privateKey: process.env.OUTKAST_GA_PRIVATE_KEY?.replace(/\\n/g, '\n') || '',
    viewId: process.env.OUTKAST_GA_VIEW_ID || '',
  },
}

export async function GET(
  request: Request,
  { params }: { params: { client: string } }
) {
  const clientKey = params.client as keyof typeof clientConfigs
  const config = clientConfigs[clientKey]

  if (!config) {
    return NextResponse.json({ error: 'Invalid client' }, { status: 400 })
  }

  if (!config.clientEmail || !config.privateKey || !config.viewId) {
    return NextResponse.json({ error: 'Missing configuration' }, { status: 500 })
  }

  const auth = new google.auth.JWT({
    email: config.clientEmail,
    key: config.privateKey,
    scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
  })

  try {
    const response = await analyticsreporting.reports.batchGet({
      auth,
      requestBody: {
        reportRequests: [
          {
            viewId: config.viewId,
            dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
            metrics: [
              { expression: 'ga:sessions' },
              { expression: 'ga:pageviews' },
              { expression: 'ga:bounceRate' },
              { expression: 'ga:goalCompletionsAll' },
            ],
          },
        ],
      },
    })

    const report = response.data.reports?.[0]
    const rows = report?.data?.rows

    if (!rows || rows.length === 0) {
      return NextResponse.json({
        visitors: 0,
        pageViews: 0,
        bounceRate: '0%',
        leadsGenerated: 0,
      })
    }

    const metrics = rows[0].metrics?.[0].values

    if (!metrics || metrics.length < 4) {
      return NextResponse.json({ error: 'Incomplete metrics data' }, { status: 500 })
    }

    return NextResponse.json({
      visitors: parseInt(metrics[0]) || 0,
      pageViews: parseInt(metrics[1]) || 0,
      bounceRate: (parseFloat(metrics[2]) || 0).toFixed(2) + '%',
      leadsGenerated: parseInt(metrics[3]) || 0,
    })
  } catch (error) {
    console.error(`Error fetching Google Analytics data for ${clientKey}:`, error)
    return NextResponse.json({ error: 'Failed to fetch analytics data' }, { status: 500 })
  }
}
