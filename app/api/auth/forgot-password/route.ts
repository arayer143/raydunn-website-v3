import { NextResponse } from 'next/server'
import { sendPasswordResetEmail } from '@/lib/email'
import { generatePasswordResetToken } from '@/lib/auth'
import { findUserByEmail } from '@/lib/db'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    const user = await findUserByEmail(email)
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const resetToken = await generatePasswordResetToken(email)
    await sendPasswordResetEmail(email, resetToken)

    return NextResponse.json({ message: 'Password reset email sent' })
  } catch (error) {
    console.error('Error in forgot password route:', error)
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

