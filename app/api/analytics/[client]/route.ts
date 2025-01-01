import { NextResponse } from 'next/server'
import { getAnalyticsData } from '@/lib/googleAnalytics'

export async function GET(
  request: Request,
  { params }: { params: { client: string } }
) {
  const clientWebsiteUrl = params.client

  console.log(`[API Route] Fetching analytics for: ${clientWebsiteUrl}`)
  console.log(`[API Route] Environment check:`, {
    hasGACredentials: !!process.env.GA_CREDENTIALS,
    hasPropertyId: !!process.env.GA_PROPERTY_ID,
    nodeEnv: process.env.NODE_ENV
  })

  try {
    const analyticsData = await getAnalyticsData(clientWebsiteUrl)
    console.log('[API Route] Analytics data retrieved successfully:', analyticsData)
    return NextResponse.json(analyticsData)
  } catch (error) {
    console.error('[API Route] Error details:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    })
    
    if (process.env.NODE_ENV === 'development') {
      return NextResponse.json({
        error: 'Failed to fetch analytics data',
        details: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined
      }, { status: 500 })
    }
    return NextResponse.json({ error: 'Failed to fetch analytics data' }, { status: 500 })
  }
}
