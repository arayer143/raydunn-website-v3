import { BetaAnalyticsDataClient } from '@google-analytics/data';

export interface AnalyticsData {
  visitors: number;
  pageViews: number;
  bounceRate: number;
  leadsGenerated: number;
}

export async function getCleanSlateAnalyticsData(): Promise<AnalyticsData> {
  const credentialsString = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  
  if (!credentialsString) {
    throw new Error('GOOGLE_APPLICATION_CREDENTIALS environment variable is not set');
  }

  let credentials;
  try {
    credentials = JSON.parse(credentialsString);
  } catch (error) {
    console.error('Failed to parse GOOGLE_APPLICATION_CREDENTIALS:', error);
    throw new Error('Invalid GOOGLE_APPLICATION_CREDENTIALS format');
  }

  const analyticsDataClient = new BetaAnalyticsDataClient({
    credentials: credentials,
  });

  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${process.env.GA_PROPERTY_ID}`,
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
