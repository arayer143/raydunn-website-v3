import { NextResponse } from 'next/server'
import { sendContactFormEmail } from '@/lib/email'

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await sendContactFormEmail(name, email, message)

    return NextResponse.json({ message: 'Contact form submitted successfully' })
  } catch (error) {
    console.error('Error in contact form route:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

