import { readFile } from 'fs/promises';
import { join } from 'path';
import { read, utils } from 'xlsx';

const clientCodes = {
  'CSPW2024X': {
    name: 'Clean Slate Pressure Washing',
    excelFileName: 'cspw2024x_payments.xls'
  },
  'PCSW2024Y': {
    name: 'Pristine Clean Softwash',
    excelFileName: 'pcsw2024y_payments.xls'
  },
  'OKIND2024Z': {
    name: 'Outkast Industrial',
    excelFileName: 'okind2024z_payments.xls'
  }
};

async function processExcelFile(clientCode) {
  try {
    const clientInfo = clientCodes[clientCode];
    if (!clientInfo) {
      throw new Error(`Invalid client code: ${clientCode}`);
    }

    const filePath = join(process.cwd(), 'data', clientInfo.excelFileName);
    const fileBuffer = await readFile(filePath);
    const workbook = read(fileBuffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = utils.sheet_to_json(worksheet, { header: 1, raw: false });

    // Find the header row
    const headerRowIndex = data.findIndex(row => 
      row.includes('Date') && row.includes('Amount') && row.includes('Description')
    );

    if (headerRowIndex === -1) {
      throw new Error('Required columns not found in the Excel file');
    }

    const headers = data[headerRowIndex];
    const dateIndex = headers.indexOf('Date');
    const amountIndex = headers.indexOf('Amount');
    const descriptionIndex = headers.indexOf('Description');

    // Process the data to extract recent payments
    const recentPayments = data
      .slice(headerRowIndex + 1) // Start from the row after headers
      .filter(row => row[dateIndex] && row[amountIndex] && row[descriptionIndex]) // Ensure all required fields are present
      .slice(-5) // Get the last 5 entries
      .map(row => ({
        date: row[dateIndex],
        amount: parseFloat(row[amountIndex]),
        description: row[descriptionIndex]
      }));

    return {
      clientName: clientInfo.name,
      recentPayments
    };
  } catch (error) {
    console.error('Error processing Excel file:', error);
    throw error;
  }
}

async function getClientDashboardData(clientCode) {
  try {
    const data = await processExcelFile(clientCode);
    return {
      success: true,
      data
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

async function runTest() {
  const testCases = ['CSPW2024X', 'INVALID_CODE'];

  for (const clientCode of testCases) {
    console.log(`Testing client code: ${clientCode}`);
    const result = await getClientDashboardData(clientCode);
    console.log(JSON.stringify(result, null, 2));
    console.log('---');
  }
}

runTest();