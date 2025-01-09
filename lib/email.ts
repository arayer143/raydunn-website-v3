import nodemailer from 'nodemailer'

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

export async function sendContactFormEmail(name: string, email: string, message: string) {
  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: process.env.CONTACT_FORM_TO_EMAIL,
    subject: 'New Contact Form Submission',
    text: `
Name: ${name}
Email: ${email}
Message: ${message}
    `,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('Contact form email sent successfully')
  } catch (error) {
    console.error('Error sending contact form email:', error)
    throw new Error('Failed to send contact form email')
  }
}

export async function sendPasswordResetEmail(email: string, resetToken: string) {
  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password?token=${resetToken}`

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: email,
    subject: 'Reset Your Password',
    text: `Please use the following link to reset your password: ${resetUrl}`,
    html: `
      <h2>Password Reset Request</h2>
      <p>You requested a password reset. Please use the following link to reset your password:</p>
      <p><a href="${resetUrl}">Reset Password</a></p>
      <p>If you didn't request this, please ignore this email.</p>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('Password reset email sent successfully')
  } catch (error) {
    console.error('Error sending password reset email:', error)
    throw new Error('Failed to send password reset email')
  }
}
