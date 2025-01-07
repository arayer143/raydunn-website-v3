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
    console.error(`Missing credentials for client code: ${clientCode}`);
    console.error(`Client Email: ${clientEmail ? 'Set' : 'Missing'}`);
    console.error(`Private Key: ${privateKey ? 'Set' : 'Missing'}`);
    console.error(`Property ID: ${propertyId ? 'Set' : 'Missing'}`);
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
      visitors: parseInt(latestMetrics[0]?.value ?? '0', 10),
      pageViews: parseInt(latestMetrics[1]?.value ?? '0', 10),
      conversions: parseInt(latestMetrics[2]?.value ?? '0', 10),
      avgSessionDuration: parseFloat(latestMetrics[3]?.value ?? '0'),
      engagementRate: parseFloat(latestMetrics[4]?.value ?? '0'),
      sessionsPerUser: parseFloat(latestMetrics[5]?.value ?? '0'),
      newUsers: parseInt(latestMetrics[6]?.value ?? '0', 10),
    };
  } catch (error) {
    console.error('Error fetching Google Analytics data:', error);
    throw new Error(`Failed to fetch analytics data for client ${clientCode}: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
