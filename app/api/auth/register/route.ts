import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'
import { getClientCodes } from '@/lib/clientCodes'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    await prisma.$connect()

    const { username, email, password, clientCode } = await req.json()

    // Validate input
    if (!username || !email || !password || !clientCode) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const clientCodes = getClientCodes()
    if (!Object.keys(clientCodes).includes(clientCode)) {
      return NextResponse.json({ error: "Invalid client code" }, { status: 400 })
    }

    const clientInfo = clientCodes[clientCode]

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: { OR: [{ username }, { email }] }
    })

    if (existingUser) {
      return NextResponse.json({ error: "Username or email already exists" }, { status: 400 })
    }

    let client = await prisma.client.findUnique({ where: { clientCode } })
    if (!client) {
      client = await prisma.client.create({
        data: {
          name: clientInfo.name,
          clientCode
        }
      })
    }

    const hashedPassword = await hash(password, 12)

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        clientCode,
        clientId: client.id,
        name: username
      }
    })

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 })
  } catch (error) {
    console.error("Error in registration:", error)
    if (error instanceof Error) {
      return NextResponse.json({ error: "Registration failed: " + error.message }, { status: 500 })
    }
    return NextResponse.json({ error: "An unknown error occurred during registration" }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

