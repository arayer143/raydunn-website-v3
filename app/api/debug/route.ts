import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    // Use prisma here
    const users = await prisma.user.findMany()
    return NextResponse.json({ users })
  } catch (error) {
    console.error('Error in debug route:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

