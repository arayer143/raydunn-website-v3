import { BetaAnalyticsDataClient } from '@google-analytics/data';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function testGAConnection() {
  try {
    // Read and parse the GA credentials environment variable
    const gaCredentials = JSON.parse(process.env.GA_CREDENTIALS || '{}');
    const websiteUrl = 'https://www.cleanslatepressurewashingnola.com';
    const credentialsPath = gaCredentials[websiteUrl];

    if (!credentialsPath) {
      throw new Error(`No credentials found for ${websiteUrl}`);
    }

    // Get absolute path to credentials file
    const absoluteCredentialsPath = path.join(process.cwd(), credentialsPath);
    console.log('Looking for credentials file at:', absoluteCredentialsPath);

    if (!fs.existsSync(absoluteCredentialsPath)) {
      throw new Error(`Credentials file not found at: ${absoluteCredentialsPath}`);
    }

    // Read and parse credentials
    const credentials = JSON.parse(fs.readFileSync(absoluteCredentialsPath, 'utf8'));
    console.log('Successfully loaded credentials');

    // Initialize the Analytics client
    const analyticsDataClient = new BetaAnalyticsDataClient({
      credentials: credentials,
    });
    console.log('Successfully initialized Analytics client');

    // Get property ID from environment
    const propertyId = process.env.GA_PROPERTY_ID;
    if (!propertyId) {
      throw new Error('GA_PROPERTY_ID is not set in environment variables');
    }

    // Run a simple test report
    console.log('Running test report...');
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
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
      ],
    });

    console.log('Successfully retrieved report:');
    console.log(JSON.stringify(response, null, 2));
  } catch (error) {
    console.error('Error testing GA connection:', error);
    process.exit(1);
  }
}

testGAConnection();

