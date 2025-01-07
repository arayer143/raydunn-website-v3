import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs/promises'
import xlsx from 'xlsx'
import { getClientCodes } from '@/lib/clientCodes'

export async function GET(request: NextRequest) {
  const clientCode = request.nextUrl.searchParams.get('clientCode')
  
  if (!clientCode) {
    return NextResponse.json({ error: 'Client code is required' }, { status: 400 })
  }

  const clientCodes = getClientCodes()
  const clientInfo = clientCodes[clientCode]

  if (!clientInfo) {
    return NextResponse.json({ error: 'Invalid client code' }, { status: 400 })
  }

  const fileName = clientInfo.excelFileName
  const filePath = path.join(process.cwd(), 'data', fileName)

  try {
    await fs.access(filePath)
  } catch (error) {
    console.error(`Excel file not found for client ${clientCode}: ${filePath}`)
    return NextResponse.json({ payments: [] }, { status: 200 })
  }

  try {
    const fileBuffer = await fs.readFile(filePath)
    const workbook = xlsx.read(fileBuffer)
    const sheetName = workbook.SheetNames[0]
    const sheet = workbook.Sheets[sheetName]
    const data = xlsx.utils.sheet_to_json(sheet)

    const payments = data.map((row: any) => ({
      date: row.Date ? new Date(row.Date).toISOString().split('T')[0] : 'N/A',
      amount: typeof row.Amount === 'number' ? row.Amount : 0,
      description: row.Description || 'N/A',
      status: row.Status || 'N/A'
    }))

    return NextResponse.json({ payments })
  } catch (error) {
    console.error('Error processing Excel file:', error)
    return NextResponse.json({ error: 'Failed to process Excel file' }, { status: 500 })
  }
}

