import { NextRequest, NextResponse } from 'next/server'
import { getAnalyticsData } from '@/lib/googleAnalytics'

export async function GET(
  request: NextRequest,
  { params }: { params: { client: string } }
) {
  const clientCode = params.client.toUpperCase();

  console.log(`[API Route] Fetching analytics for client: ${clientCode}`);
  console.log(`[API Route] Environment variables:`, {
    clientEmail: process.env[`${clientCode}_GA_CLIENT_EMAIL`] ? 'Set' : 'Missing',
    privateKey: process.env[`${clientCode}_GA_PRIVATE_KEY`] ? 'Set' : 'Missing',
    propertyId: process.env[`${clientCode}_GA_PROPERTY_ID`] ? 'Set' : 'Missing',
  });

  try {
    const analyticsData = await getAnalyticsData(clientCode)
    console.log('[API Route] Analytics data retrieved successfully:', analyticsData)
    return NextResponse.json(analyticsData)
  } catch (error: unknown) {
    console.error('[API Route] Error fetching analytics data:', {
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


