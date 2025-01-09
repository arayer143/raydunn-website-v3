import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function findUserByEmail(email: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    })
    return user
  } catch (error) {
    console.error('Error finding user by email:', error)
    throw error
  }
}

