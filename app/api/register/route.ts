import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'
import { isValidClientCode, getClientByCode } from '@/lib/clientCodes'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    await prisma.$connect()
    console.log("Successfully connected to the database")

    const { username, email, password, clientCode } = await req.json()
    console.log("Received registration data:", { username, email, clientCode })

    // Validate input
    if (!username || !email || !password || !clientCode) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    if (!isValidClientCode(clientCode)) {
      console.log("Invalid client code:", clientCode)
      return NextResponse.json({ message: "Invalid client code" }, { status: 400 })
    }

    const clientInfo = getClientByCode(clientCode)
    console.log("Client info:", clientInfo)

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: { OR: [{ username }, { email }] }
    })

    if (existingUser) {
      console.log("User already exists:", existingUser)
      return NextResponse.json({ message: "Username or email already exists" }, { status: 400 })
    }

    let client = await prisma.client.findUnique({ where: { clientCode } })
    if (!client) {
      client = await prisma.client.create({
        data: {
          name: clientInfo?.name || 'Unknown Client',
          clientCode
        }
      })
      console.log("Created new client:", client)
    } else {
      console.log("Found existing client:", client)
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

    console.log("User created successfully:", user)

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 })
  } catch (error) {
    console.error("Detailed error in registration:", error)
    if (error instanceof Error) {
      return NextResponse.json({ message: "Registration failed", error: error.message }, { status: 500 })
    }
    return NextResponse.json({ message: "An unknown error occurred during registration" }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
