import { BetaAnalyticsDataClient } from '@google-analytics/data';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

const clientCode = 'CLEANSLATE';

const clientEmail = process.env[`${clientCode}_GA_CLIENT_EMAIL`];
const privateKey = process.env[`${clientCode}_GA_PRIVATE_KEY`]?.replace(/\\n/g, '\n');
const propertyId = process.env[`${clientCode}_GA_PROPERTY_ID`];

if (!clientEmail || !privateKey || !propertyId) {
  console.error('Missing required environment variables');
  process.exit(1);
}

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_email: clientEmail,
    private_key: privateKey,
  },
});

async function runReport() {
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
      ],
    });

    console.log('Report result:');
    response.rows?.forEach(row => {
      console.log(row.metricValues?.map(metricValue => metricValue.value).join(' | '));
    });
  } catch (error) {
    console.error('Error running report:', error);
  }
}

runReport();