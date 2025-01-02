import { BetaAnalyticsDataClient } from '@google-analytics/data';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env.local' });

async function testGAIntegration() {
  console.log('Starting Google Analytics Integration Test');

  const websiteUrl = 'https://www.cleanslatepressurewashingnola.com';
  
  // Log environment variables (without revealing sensitive data)
  console.log('Environment variables check:');
  console.log('CLEANSLATE_GA_CLIENT_EMAIL:', process.env.CLEANSLATE_GA_CLIENT_EMAIL ? 'Set' : 'Not set');
  console.log('CLEANSLATE_GA_PRIVATE_KEY:', process.env.CLEANSLATE_GA_PRIVATE_KEY ? 'Set' : 'Not set');
  console.log('CLEANSLATE_GA_PROPERTY_ID:', process.env.CLEANSLATE_GA_PROPERTY_ID ? 'Set' : 'Not set');

  try {
    const credentials = {
      clientEmail: process.env.CLEANSLATE_GA_CLIENT_EMAIL,
      privateKey: process.env.CLEANSLATE_GA_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      propertyId: process.env.CLEANSLATE_GA_PROPERTY_ID,
    };

    if (!credentials.clientEmail || !credentials.privateKey || !credentials.propertyId) {
      throw new Error('Incomplete credentials');
    }

    console.log('Credentials loaded successfully');

    const analyticsDataClient = new BetaAnalyticsDataClient({
      credentials: {
        client_email: credentials.clientEmail,
        private_key: credentials.privateKey,
      },
    });

    console.log('Analytics client created, attempting to run report');

    const [response] = await analyticsDataClient.runReport({
      property: `properties/${credentials.propertyId}`,
      dateRanges: [
        {
          startDate: '7daysAgo',
          endDate: 'today',
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
    });

    console.log('Report run successfully. Data:');
    console.log(JSON.stringify(response, null, 2));

    console.log('Google Analytics Integration Test Completed Successfully');
  } catch (error) {
    console.error('Error in Google Analytics Integration Test:', error);
  }
}

testGAIntegration();