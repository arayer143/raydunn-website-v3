import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import { compare, hash } from "bcrypt"
import { getClientCodes, ClientInfo } from "@/lib/clientCodes"
import { randomBytes } from 'crypto'

// Generate a password reset token
export async function generatePasswordResetToken(email: string): Promise<string> {
  const token = randomBytes(32).toString('hex')
  const expires = new Date(Date.now() + 3600000) // 1 hour from now

  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (!user) {
    throw new Error('User not found')
  }

  await prisma.passwordResetToken.create({
    data: {
      userId: user.id,
      email,
      token,
      expires,
    },
  })

  return token
}

// Verify a password reset token
export async function verifyPasswordResetToken(token: string): Promise<string | null> {
  const passwordResetToken = await prisma.passwordResetToken.findUnique({
    where: { token },
  })

  if (!passwordResetToken || passwordResetToken.expires < new Date()) {
    return null
  }

  return passwordResetToken.email
}

// Update user's password
export async function updateUserPassword(email: string, newPassword: string): Promise<void> {
  const hashedPassword = await hash(newPassword, 10)
  await prisma.user.update({
    where: { email },
    data: { password: hashedPassword },
  })
  await prisma.passwordResetToken.deleteMany({ where: { email } })
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: {
            username: credentials.username
          },
          include: {
            client: true
          }
        })

        if (!user) {
          return null
        }

        const isPasswordValid = await compare(credentials.password, user.password)

        if (!isPasswordValid) {
          return null
        }

        const clientCodes = getClientCodes()
        const clientInfo = clientCodes[user.clientCode]

        if (!clientInfo) {
          throw new Error("Client information not found")
        }

        return {
          id: user.id,
          username: user.username,
          email: user.email,
          clientCode: user.clientCode,
          clientId: user.clientId,
          clientName: user.client.name,
          clientInfo: clientInfo
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.username = user.username
        token.email = user.email
        token.clientCode = user.clientCode
        token.clientId = user.clientId
        token.clientName = user.clientName
        token.clientInfo = user.clientInfo
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string
        session.user.username = token.username as string
        session.user.email = token.email as string
        session.user.clientCode = token.clientCode as string
        session.user.clientId = token.clientId as string
        session.user.clientName = token.clientName as string
        session.user.clientInfo = token.clientInfo as ClientInfo
      }
      return session
    }
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
}