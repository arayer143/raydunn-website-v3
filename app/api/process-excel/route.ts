import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { read, utils } from 'xlsx';
import { getClientCodes } from '@/lib/clientCodes';

export async function GET(req: NextRequest) {
  const clientCode = req.nextUrl.searchParams.get('clientCode');

  if (!clientCode) {
    return NextResponse.json({ error: 'Client code is required' }, { status: 400 });
  }

  const clientCodes = getClientCodes();
  const clientInfo = clientCodes[clientCode];

  if (!clientInfo) {
    return NextResponse.json({ error: 'Invalid client code' }, { status: 400 });
  }

  try {
    const filePath = join(process.cwd(), 'data', clientInfo.excelFileName);
    const fileBuffer = await readFile(filePath);
    const workbook = read(fileBuffer);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = utils.sheet_to_json(worksheet);

    // Process the data to extract recent payments
    const recentPayments = data
      .slice(-5) // Get the last 5 entries (adjust as needed)
      .map((row: any) => ({
        date: row.Date,
        amount: row.Amount,
        description: row.Description,
      }));

    return NextResponse.json({ recentPayments });
  } catch (error) {
    console.error('Error processing Excel file:', error);
    return NextResponse.json({ error: 'Failed to process Excel file' }, { status: 500 });
  }
}

