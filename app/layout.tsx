import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: 'RayDunn Web Solutions',
    template: '%s | RayDunn Web Solutions',
  },
  description: 'RayDunn Web Solutions crafts stunning, high-performance websites that captivate and convert. Boost your digital presence with our innovative designs. Contact us!',
  keywords: ['Next.js', 'React', 'JavaScript'],
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
        url: 'https://raydunnsolutions.com/PNG Transparent Logo.png',
        width: 1200,
        height: 630,
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
    images: ['https://raydunnsolutions.com/PNG Transparent Logo.png'],
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
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
              <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}

        </ThemeProvider>
      </body>
    </html>
  );
}
