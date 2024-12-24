import { BetaAnalyticsDataClient } from '@google-analytics/data';

export interface AnalyticsData {
  visitors: number;
  pageViews: number;
  bounceRate: number;
  leadsGenerated: number;
}

const propertyId = process.env.GA_PROPERTY_ID;

export async function getCleanSlateAnalyticsData(): Promise<AnalyticsData> {
  if (typeof window !== 'undefined') {
    throw new Error('This function should only be called from the server side');
  }

  if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    throw new Error('GOOGLE_APPLICATION_CREDENTIALS environment variable is not set');
  }

  const credentials = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS);

  const analyticsDataClient = new BetaAnalyticsDataClient({
    credentials: credentials,
  });

  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: '7daysAgo',
          endDate: 'today',
        },
      ],
      metrics: [
        { name: 'activeUsers' },
        { name: 'screenPageViews' },
        { name: 'bounceRate' },
        { name: 'conversions' },
      ],
    });

    const visitors = Number(response.rows?.[0]?.metricValues?.[0]?.value) || 0;
    const pageViews = Number(response.rows?.[0]?.metricValues?.[1]?.value) || 0;
    const bounceRate = Number(response.rows?.[0]?.metricValues?.[2]?.value) || 0;
    const leadsGenerated = Number(response.rows?.[0]?.metricValues?.[3]?.value) || 0;

    return {
      visitors,
      pageViews,
      bounceRate,
      leadsGenerated
    };
  } catch (error) {
    console.error('Error fetching Google Analytics data:', error);
    throw error;
  }
}
