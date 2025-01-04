import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import { compare } from "bcrypt"
import { getClientByCode, ClientInfo } from "@/lib/clientCodes"

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

        const clientInfo = getClientByCode(user.clientCode)

        if (!clientInfo) {
          throw new Error("Client information not found")
        }

        return {
          id: user.id,
          username: user.username,
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
        token.clientCode = user.clientCode
        token.clientId = user.clientId
        token.clientName = user.clientName
        token.clientInfo = user.clientInfo
      }
      return token
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id
        session.user.username = token.username as string
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

