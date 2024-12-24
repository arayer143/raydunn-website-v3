import { NextRequest, NextResponse } from 'next/server'
import { BetaAnalyticsDataClient } from '@google-analytics/data'

type ClientConfig = {
  credentials: string;
  propertyId: string;
}

const clientConfigs: Record<string, ClientConfig> = {
  cleanSlate: {
    credentials: process.env.CLEAN_SLATE_GOOGLE_APPLICATION_CREDENTIALS || '',
    propertyId: process.env.CLEAN_SLATE_GA_PROPERTY_ID || '',
  },
  // Add other clients here if needed
}

export async function GET(
  request: NextRequest,
  { params }: { params: { client: string } }
) {
  const clientKey = params.client as keyof typeof clientConfigs
  const config = clientConfigs[clientKey]

  if (!config) {
    return NextResponse.json({ error: 'Invalid client' }, { status: 400 })
  }

  if (!config.credentials || !config.propertyId) {
    return NextResponse.json({ error: 'Missing configuration' }, { status: 500 })
  }

  try {
    const credentials = JSON.parse(config.credentials)
    const analyticsDataClient = new BetaAnalyticsDataClient({ credentials });

    const [response] = await analyticsDataClient.runReport({
      property: `properties/${config.propertyId}`,
      dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
      metrics: [
        { name: 'sessions' },
        { name: 'screenPageViews' },
        { name: 'bounceRate' },
        { name: 'conversions' },
      ],
    });

    if (!response || !response.rows || response.rows.length === 0) {
      return NextResponse.json({
        visitors: 0,
        pageViews: 0,
        bounceRate: '0%',
        leadsGenerated: 0,
      })
    }

    const metrics = response.rows[0].metricValues

    if (!metrics || metrics.length < 4) {
      return NextResponse.json({ error: 'Incomplete metrics data' }, { status: 500 })
    }

    return NextResponse.json({
      visitors: parseInt(metrics[0].value || '0'),
      pageViews: parseInt(metrics[1].value || '0'),
      bounceRate: (parseFloat(metrics[2].value || '0') * 100).toFixed(2) + '%',
      leadsGenerated: parseInt(metrics[3].value || '0'),
    })
  } catch (error) {
    console.error(`Error fetching Google Analytics data for ${clientKey}:`, error)
    return NextResponse.json({ error: 'Failed to fetch analytics data' }, { status: 500 })
  }
}

