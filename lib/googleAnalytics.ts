import { BetaAnalyticsDataClient } from '@google-analytics/data'
import fs from 'fs'
import path from 'path'

export async function getAnalyticsData(websiteUrl: string) {
  console.log('[GA] Starting analytics data fetch for:', websiteUrl)
  
  try {
    // Verify GA_CREDENTIALS exists
    if (!process.env.GA_CREDENTIALS) {
      throw new Error('GA_CREDENTIALS environment variable is not set')
    }

    // Parse GA credentials and get the correct credentials file
    const gaCredentials = JSON.parse(process.env.GA_CREDENTIALS)
    const credentialsPath = gaCredentials[websiteUrl]
    
    if (!credentialsPath) {
      throw new Error(`GA credentials not found for website: ${websiteUrl}`)
    }

    // Get absolute path and verify credentials file exists
    const absoluteCredentialsPath = path.join(process.cwd(), credentialsPath)
    if (!fs.existsSync(absoluteCredentialsPath)) {
      throw new Error(`Credentials file not found at: ${absoluteCredentialsPath}`)
    }

    // Read credentials file
    const credentials = JSON.parse(fs.readFileSync(absoluteCredentialsPath, 'utf8'))
    console.log('[GA] Successfully loaded credentials file')

    // Initialize Analytics client with credentials
    const analyticsDataClient = new BetaAnalyticsDataClient({
      credentials: credentials,
    })

    const propertyId = process.env.GA_PROPERTY_ID
    if (!propertyId) {
      throw new Error('GA_PROPERTY_ID is not set in environment variables')
    }

    // Run the report with more detailed metrics
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: '7daysAgo',
          endDate: 'today',
        },
      ],
      dimensions: [
        {
          name: 'date',  // Add dimension to track by date
        },
      ],
      metrics: [
        {
          name: 'activeUsers',
        },
        {
          name: 'screenPageViews',
        },
        {
          name: 'bounceRate',
        },
        {
          name: 'conversions',
        },
      ],
    })

    // Log the raw response for debugging
    console.log('[GA] Raw response:', JSON.stringify(response, null, 2))

    // Get the most recent day's metrics (last row)
    const latestMetrics = response.rows?.[response.rows.length - 1]?.metricValues ?? []

    return {
      visitors: Number(latestMetrics[0]?.value) || 0,
      pageViews: Number(latestMetrics[1]?.value) || 0,
      bounceRate: Number(latestMetrics[2]?.value) || 0,
      leadsGenerated: Number(latestMetrics[3]?.value) || 0,
    }
  } catch (error) {
    console.error('[GA] Error in getAnalyticsData:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    })
    throw error
  }
}

