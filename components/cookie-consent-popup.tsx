'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { X } from 'lucide-react'
import { setCookie, getCookie } from '@/lib/cookies'

export function CookieConsentPopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consentGiven = getCookie('cookieConsent')
    if (!consentGiven) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    setCookie('cookieConsent', 'true', 365) // Set cookie for 1 year
    setIsVisible(false)
  }

  const handleDecline = () => {
    setCookie('cookieConsent', 'false', 365) // Set cookie for 1 year
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 bg-background border border-border rounded-lg p-6 shadow-lg z-50 max-w-2xl mx-auto"
        >
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <h2 className="text-lg font-semibold">Cookie Consent</h2>
              <Button variant="ghost" size="icon" onClick={() => setIsVisible(false)} aria-label="Close">
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              We use cookies to enhance your browsing experience, analyze our traffic, and provide social media features. 
              By clicking &quot;Accept&quot;, you consent to our use of cookies.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" onClick={handleDecline}>Decline</Button>
              <Button variant="default" size="sm" onClick={handleAccept}>Accept</Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}