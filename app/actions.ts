'use server'

import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY

if (!resendApiKey) {
  throw new Error('RESEND_API_KEY is not set in the environment variables')
}

const resend = new Resend(resendApiKey)

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    return { success: false, error: 'Missing required fields' }
  }

  try {
    const data = await resend.emails.send({
      from: 'https://raydunn-website-v3.vercel.app/',
      to: ['alexrayer7@gmail.com'],
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    })

    return { success: true, data }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error: 'Failed to send email' }
  }
}