import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard | RayDunn Web Solutions',
  description: 'Client dashboard for RayDunn Web Solutions',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}

