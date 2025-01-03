import { BetaAnalyticsDataClient } from '@google-analytics/data'

interface ClientCredentials {
  clientEmail: string;
  privateKey: string;
  propertyId: string;
}

interface AnalyticsData {
  visitors: number;
  pageViews: number;
  conversions: number;
  avgSessionDuration: number;
  engagementRate: number;
  sessionsPerUser: number;
  newUsers: number;
}

const clientCredentials: Record<string, ClientCredentials> = {
  'https://www.cleanslatepressurewashingnola.com': {
    clientEmail: process.env.CLEANSLATE_GA_CLIENT_EMAIL || '',
    privateKey: process.env.CLEANSLATE_GA_PRIVATE_KEY?.replace(/\\n/g, '\n') || '',
    propertyId: process.env.CLEANSLATE_GA_PROPERTY_ID || '',
  },
  // Add other clients here as needed
}

export async function getAnalyticsData(websiteUrl: string): Promise<AnalyticsData> {
  console.log('[GA] Starting analytics data fetch for:', websiteUrl)
  
  try {
    const credentials = clientCredentials[websiteUrl]

    if (!credentials) {
      throw new Error(`No credentials found for website: ${websiteUrl}`)
    }

    console.log('[GA] Credentials check:', {
      hasClientEmail: !!credentials.clientEmail,
      hasPrivateKey: !!credentials.privateKey,
      hasPropertyId: !!credentials.propertyId
    });

    if (!credentials.clientEmail || !credentials.privateKey || !credentials.propertyId) {
      console.log('[GA] Credentials check:', {
        hasClientEmail: !!credentials.clientEmail,
        hasPrivateKey: !!credentials.privateKey,
        hasPropertyId: !!credentials.propertyId
      });
      throw new Error(`Incomplete credentials for website: ${websiteUrl}`)
    }

    console.log('[GA] Credentials found:', {
      clientEmail: credentials.clientEmail,
      privateKeyLength: credentials.privateKey.length,
      propertyId: credentials.propertyId
    })

    const analyticsDataClient = new BetaAnalyticsDataClient({
      credentials: {
        client_email: credentials.clientEmail,
        private_key: credentials.privateKey,
      },
    })

    console.log('[GA] Analytics client created, attempting to run report')

    const [response] = await analyticsDataClient.runReport({
      property: `properties/${credentials.propertyId}`,
      dateRanges: [
        {
          startDate: '30daysAgo',
          endDate: 'today',
        },
      ],
      metrics: [
        { name: 'activeUsers' },
        { name: 'screenPageViews' },
        { name: 'conversions' },
        { name: 'averageSessionDuration' },
        { name: 'engagementRate' },
        { name: 'sessionsPerUser' },
        { name: 'newUsers' },
      ],
    })

    console.log('[GA] Report run successfully, processing data')

    const latestMetrics = response.rows?.[0]?.metricValues ?? []

    return {
      visitors: Number(latestMetrics[0]?.value) || 0,
      pageViews: Number(latestMetrics[1]?.value) || 0,
      conversions: Number(latestMetrics[2]?.value) || 0,
      avgSessionDuration: Number(latestMetrics[3]?.value) || 0,
      engagementRate: Number(latestMetrics[4]?.value) || 0,
      sessionsPerUser: Number(latestMetrics[5]?.value) || 0,
      newUsers: Number(latestMetrics[6]?.value) || 0,
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
