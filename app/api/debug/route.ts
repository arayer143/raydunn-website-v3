import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const userCount = await prisma.user.count()
    return NextResponse.json({
      databaseConnection: 'success',
      userCount,
      nextAuthUrl: process.env.NEXTAUTH_URL,
      nodeEnv: process.env.NODE_ENV,
    })
  } catch (error) {
    console.error('Debug route error:', error)
    return NextResponse.json({
      databaseConnection: 'error',
      error: error instanceof Error ? error.message : 'Unknown error',
      nextAuthUrl: process.env.NEXTAUTH_URL,
      nodeEnv: process.env.NODE_ENV,
    }, { status: 500 })
  }
}

