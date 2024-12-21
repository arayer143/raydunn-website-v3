import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    console.log("Middleware executing for path:", req.nextUrl.pathname)
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        console.log("Middleware authorization check, token:", token ? "exists" : "does not exist")
        return !!token
      },
    },
  }
)

export const config = {
  matcher: ["/dashboard/:path*", "/settings/:path*"],
}

