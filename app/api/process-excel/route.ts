import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs/promises'
import * as XLSX from 'xlsx'
import { getClientCodes } from '@/lib/clientCodes'

export async function GET(request: NextRequest) {
  const clientCode = request.nextUrl.searchParams.get('clientCode')
  
  console.log(`Processing Excel for client code: ${clientCode}`)

  if (!clientCode) {
    console.log('Client code is missing')
    return NextResponse.json({ error: 'Client code is required' }, { status: 400 })
  }

  const clientCodes = getClientCodes()
  const clientInfo = clientCodes[clientCode]

  if (!clientInfo) {
    console.log(`Invalid client code: ${clientCode}`)
    return NextResponse.json({ error: 'Invalid client code' }, { status: 400 })
  }

  const fileName = clientInfo.excelFileName
  const filePath = path.join(process.cwd(), 'data', fileName)

  console.log(`Attempting to access file: ${filePath}`)

  try {
    await fs.access(filePath)
    console.log('File found, proceeding to read')
  } catch (error) {
    console.error(`Excel file not found for client ${clientCode}: ${filePath}`)
    return NextResponse.json({ payments: [] }, { status: 200 })
  }

  try {
    const fileBuffer = await fs.readFile(filePath)
    const workbook = XLSX.read(fileBuffer, { type: 'buffer', cellDates: true })
    const sheetName = workbook.SheetNames[0]
    const sheet = workbook.Sheets[sheetName]
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 })

    console.log(`Raw data from Excel:`, data)

    // Skip the header rows
    const payments = data.slice(2).map((row: any) => {
      const dateValue = row[0]
      let formattedDate = 'N/A'

      if (dateValue) {
        if (dateValue instanceof Date) {
          formattedDate = dateValue.toISOString().split('T')[0]
        } else if (typeof dateValue === 'string') {
          // Assuming the date is in MM/DD/YYYY format
          const [month, day, year] = dateValue.split('/')
          formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        }
      }

      return {
        date: formattedDate,
        amount: typeof row[5] === 'number' ? row[5] : 0,
        description: row[3] || 'N/A',
        status: row[6] || 'N/A'
      }
    }).filter((payment: any) => payment.amount > 0)

    console.log(`Processed payments:`, payments)

    return NextResponse.json({ payments })
  } catch (error) {
    console.error('Error processing Excel file:', error)
    return NextResponse.json({ error: 'Failed to process Excel file' }, { status: 500 })
  }
}