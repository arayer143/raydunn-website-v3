import { NextResponse } from 'next/server'
import { verifyPasswordResetToken, updateUserPassword } from '@/lib/auth'

export async function POST(req: Request) {
  try {
    const { password, token } = await req.json()

    const email = await verifyPasswordResetToken(token)
    if (!email) {
      return NextResponse.json({ error: 'Invalid or expired token' }, { status: 400 })
    }

    await updateUserPassword(email, password)

    return NextResponse.json({ message: 'Password reset successful' })
  } catch (error) {
    console.error('Error in reset password route:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

