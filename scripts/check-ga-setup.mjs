import { BetaAnalyticsDataClient } from '@google-analytics/data';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function testGAConnection() {
  try {
    // Log environment variables (redacting sensitive data)
    console.log('Environment check:');
    console.log('- GA_CREDENTIALS exists:', !!process.env.GA_CREDENTIALS);
    console.log('- GA_PROPERTY_ID exists:', !!process.env.GA_PROPERTY_ID);

    // Read and parse the GA credentials environment variable
    const gaCredentials = JSON.parse(process.env.GA_CREDENTIALS || '{}');
    const websiteUrl = 'https://www.cleanslatepressurewashingnola.com';
    
    console.log('\nCredentials check:');
    console.log('- Available websites:', Object.keys(gaCredentials));
    console.log('- Testing website:', websiteUrl);
    
    const credentialsPath = gaCredentials[websiteUrl];
    console.log('- Credentials path:', credentialsPath);

    if (!credentialsPath) {
      throw new Error(`No credentials path found for ${websiteUrl}`);
    }

    // Get absolute path to credentials file
    const absoluteCredentialsPath = path.join(process.cwd(), credentialsPath);
    console.log('- Looking for credentials file at:', absoluteCredentialsPath);

    if (!fs.existsSync(absoluteCredentialsPath)) {
      throw new Error(`Credentials file not found at: ${absoluteCredentialsPath}`);
    }

    // Read and parse credentials
    const credentials = JSON.parse(fs.readFileSync(absoluteCredentialsPath, 'utf8'));
    console.log('- Successfully loaded credentials file');
    console.log('- Credentials contain client_email:', !!credentials.client_email);
    console.log('- Credentials contain private_key:', !!credentials.private_key);

    // Initialize the Analytics client
    const analyticsDataClient = new BetaAnalyticsDataClient({
      credentials: credentials,
    });
    console.log('\nAnalytics client initialized successfully');

    // Get property ID from environment
    const propertyId = process.env.GA_PROPERTY_ID;
    console.log('Using property ID:', propertyId);

    // Run a simple test report
    console.log('\nRunning test report...');
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

    console.log('\nSuccessfully retrieved report:');
    console.log(JSON.stringify(response, null, 2));
  } catch (error) {
    console.error('\nError testing GA connection:');
    console.error('- Error name:', error.name);
    console.error('- Error message:', error.message);
    if (error.stack) {
      console.error('\nStack trace:');
      console.error(error.stack);
    }
    process.exit(1);
  }
}

testGAConnection();