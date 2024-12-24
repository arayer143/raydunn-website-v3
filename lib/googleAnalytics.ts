import { BetaAnalyticsDataClient } from '@google-analytics/data';

const propertyId = process.env.GA_PROPERTY_ID;

export async function getCleanSlateAnalyticsData() {
  const credentialsString = process.env.GOOGLE_APPLICATION_CREDENTIALS;
  
  if (!credentialsString) {
    throw new Error('GOOGLE_APPLICATION_CREDENTIALS environment variable is not set');
  }

  let credentials;
  try {
    credentials = JSON.parse(credentialsString);
  } catch (error) {
    console.error('Failed to parse GOOGLE_APPLICATION_CREDENTIALS:', credentialsString);
    throw new Error('Failed to parse GOOGLE_APPLICATION_CREDENTIALS JSON');
  }

  if (!credentials.client_email) {
    console.error('Parsed credentials:', credentials);
    throw new Error('client_email is missing from GOOGLE_APPLICATION_CREDENTIALS');
  }

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

    return {
      visitors: response.rows?.[0]?.metricValues?.[0]?.value || '0',
      pageViews: response.rows?.[0]?.metricValues?.[1]?.value || '0',
      bounceRate: response.rows?.[0]?.metricValues?.[2]?.value || '0',
      leadsGenerated: response.rows?.[0]?.metricValues?.[3]?.value || '0',
    };
  } catch (error) {
    console.error('Error fetching Google Analytics data:', error);
    throw error;
  }
}

export async function getPristineCleanAnalyticsData() {
  // Implement similar to getCleanSlateAnalyticsData
  // but with different propertyId if needed
  throw new Error('Not implemented');
}

export async function getOutkastAnalyticsData() {
  // Implement similar to getCleanSlateAnalyticsData
  // but with different propertyId if needed
  throw new Error('Not implemented');
}

