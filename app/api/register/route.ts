import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import bcrypt from "bcrypt"
import { clientUrls, clientNames } from "@/lib/clientUrls"

export async function POST(req: Request) {
  try {
    const { username, email, password, websiteUrl } = await req.json()

    if (!clientUrls.includes(websiteUrl)) {
      return NextResponse.json({ message: "Invalid website URL" }, { status: 400 })
    }

    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { username },
          { email }
        ]
      }
    })

    if (existingUser) {
      return NextResponse.json({ message: "Username or email already exists" }, { status: 400 })
    }

    let client = await prisma.client.findUnique({
      where: { websiteUrl }
    })

    if (!client) {
      client = await prisma.client.create({
        data: {
          name: clientNames[websiteUrl as keyof typeof clientNames] || websiteUrl.split('//')[1],
          websiteUrl
        }
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        websiteUrl,
        clientId: client.id,
        name: username, // Using username as the initial name
      },
    })

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ 
      message: "An error occurred during registration", 
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}

