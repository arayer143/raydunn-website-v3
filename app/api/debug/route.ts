import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const userCount = await prisma.user.count()
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        websiteUrl: true,
        clientId: true,
        client: {
          select: {
            name: true,
          },
        },
      },
    })

    return NextResponse.json({
      status: 'success',
      message: 'Database connection successful',
      userCount,
      users,
    })
  } catch (error) {
    console.error('Database connection error:', error)
    return NextResponse.json({
      status: 'error',
      message: 'Database connection failed',
      error: error instanceof Error ? error.message : String(error),
    }, { status: 500 })
  }
}

