import { BetaAnalyticsDataClient } from '@google-analytics/data';

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

const getClientCredentials = (clientCode: string): ClientCredentials => {
  const clientEmail = process.env[`${clientCode}_GA_CLIENT_EMAIL`];
  const privateKey = process.env[`${clientCode}_GA_PRIVATE_KEY`];
  const propertyId = process.env[`${clientCode}_GA_PROPERTY_ID`];

  if (!clientEmail || !privateKey || !propertyId) {
    throw new Error(`Incomplete credentials for client code: ${clientCode}`);
  }

  return {
    clientEmail,
    privateKey: privateKey.replace(/\\n/g, '\n'),
    propertyId,
  };
};

export async function getAnalyticsData(clientCode: string): Promise<AnalyticsData> {
  try {
    const credentials = getClientCredentials(clientCode);

    const analyticsDataClient = new BetaAnalyticsDataClient({
      credentials: {
        client_email: credentials.clientEmail,
        private_key: credentials.privateKey,
      },
    });

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
    });

    const latestMetrics = response.rows?.[0]?.metricValues ?? [];

    return {
      visitors: Number(latestMetrics[0]?.value) || 0,
      pageViews: Number(latestMetrics[1]?.value) || 0,
      conversions: Number(latestMetrics[2]?.value) || 0,
      avgSessionDuration: Number(latestMetrics[3]?.value) || 0,
      engagementRate: Number(latestMetrics[4]?.value) || 0,
      sessionsPerUser: Number(latestMetrics[5]?.value) || 0,
      newUsers: Number(latestMetrics[6]?.value) || 0,
    };
  } catch (error) {
    console.error('Error fetching Google Analytics data:', error);
    throw error;
  }
}
