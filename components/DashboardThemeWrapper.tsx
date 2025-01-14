'use client'

import { useTheme } from 'next-themes'
import { ClientInfo } from "@/lib/clientCodes"

interface DashboardThemeWrapperProps {
  children: React.ReactNode
  clientInfo: ClientInfo
}

export function DashboardThemeWrapper({ children, clientInfo }: DashboardThemeWrapperProps) {
  const { theme } = useTheme()

  return (
    <div className={`min-h-screen p-6 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
      <h1 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
        Welcome to {clientInfo.name} Dashboard
      </h1>
      {children}
    </div>
  )
}

