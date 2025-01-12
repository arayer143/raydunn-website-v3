import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import GoogleAnalytics from '@/components/GoogleAnalytics';

import { Providers } from "@/components/Providers";

export const metadata: Metadata = {
  title: {
    default: 'RayDunn Web Solutions',
    template: '%s | RayDunn Web Solutions',
  },
  description: 'RayDunn Web Solutions crafts stunning, high-performance websites that captivate and convert. Boost your digital presence with our innovative designs. Contact us!',
  keywords: ['Next.js', 'React', 'JavaScript', 'Web Development', 'RayDunn Web Solutions'],
  authors: [{ name: 'Alex Rayer' }],
  creator: 'Alex Rayer',
  publisher: 'RayDunn Web Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'RayDunn Web Solutions',
    description: 'RayDunn Web Solutions crafts stunning, high-performance websites that captivate and convert. Boost your digital presence with our innovative designs. Contact us!',
    url: 'https://raydunnsolutions.com',
    siteName: 'RayDunn Web Solutions',
    images: [
      {
        url: 'https://raydunnsolutions.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RayDunn Web Solutions Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RayDunn Web Solutions',
    description: 'RayDunn Web Solutions crafts stunning, high-performance websites that captivate and convert. Boost your digital presence with our innovative designs. Contact us!',
    creator: '@yourtwitterhandle',
    images: ['https://raydunnsolutions.com/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>
          {children}
          <SpeedInsights />
          <Analytics />
          <GoogleAnalytics />
        </Providers>
      </body>
    </html>
  );
}
