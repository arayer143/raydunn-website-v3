import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string
      username: string
      websiteUrl: string
      clientId: string
      clientName: string
    } & DefaultSession["user"]
  }

  interface User {
    username: string
    websiteUrl: string
    clientId: string
    clientName: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    username: string
    websiteUrl: string
    clientId: string
    clientName: string
  }
}



