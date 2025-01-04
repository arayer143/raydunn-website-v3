import { ClientInfo } from "@/lib/clientCodes"

declare module "next-auth" {
  interface User {
    id: string
    username: string
    clientCode: string
    clientId: string
    clientName: string
    clientInfo: ClientInfo
  }

  interface Session {
    user: User
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string
    username: string
    clientCode: string
    clientId: string
    clientName: string
    clientInfo: ClientInfo
  }
}

