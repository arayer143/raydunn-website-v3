import { NextResponse } from 'next/server'
import { getAnalyticsData } from '@/lib/googleAnalytics'
import { logEnvironmentVariables } from '@/lib/debugEnv';

export async function GET(
  request: Request,
  { params }: { params: { client: string } }
) {
  logEnvironmentVariables();
  const clientWebsiteUrl = params.client

  console.log(`[API Route] Fetching analytics for: ${clientWebsiteUrl}`)

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
    
    return NextResponse.json({
      error: 'Failed to fetch analytics data',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

