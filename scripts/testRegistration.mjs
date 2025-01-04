import { PrismaClient } from '@prisma/client'
import fetch from 'node-fetch'
import crypto from 'crypto'

const prisma = new PrismaClient()

async function testRegistration() {
  try {
    // Generate unique username and email
    const uniqueId = crypto.randomBytes(4).toString('hex')
    const username = `testuser_${uniqueId}`
    const email = `testuser_${uniqueId}@example.com`
    const password = 'TestPassword123!'
    const clientCode = 'CSPW2024X' // Use a valid client code from your .env file

    console.log(`Attempting to register user: ${username}`)

    // Attempt to register the user
    const response = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
        clientCode,
      }),
    })

    const result = await response.json()

    if (response.ok) {
      console.log('Registration successful:', result)

      // Verify user was added to the database
      const user = await prisma.user.findUnique({
        where: { username: username },
      })

      if (user) {
        console.log('User found in database:', user)
      } else {
        console.log('User not found in database')
      }
    } else {
      console.error('Registration failed:', result)
    }
  } catch (error) {
    console.error('Error during test:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testRegistration()