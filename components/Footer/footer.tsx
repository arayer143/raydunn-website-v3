import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Facebook, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Contact Us</h3>
            <div className="flex space-x-4">
              <Button asChild variant="outline" size="icon">
                <Link href="tel:5046502562" aria-label="Call us">
                  <Phone className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon">
                <Link href="mailto:contact@raydunnsolutions.com" aria-label="Email us">
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Follow Us</h3>
            <div className="flex space-x-4">
              <Button asChild variant="outline" size="icon">
                <Link href="https://www.linkedin.com/company/raydunn-web-solutions/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon">
                <Link href="https://www.facebook.com/profile.php?id=61555772144949" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="icon">
                <Link href="https://www.google.com/business" target="_blank" rel="noopener noreferrer" aria-label="Google Business Profile">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm-1.504 16.5h3.008v-1.5h-3.008v1.5zm6.004-4.5H7.5v1.5h9v-1.5zm0-3H7.5v1.5h9V9zm0-3H7.5v1.5h9V6z" />
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">Home</Link>
              <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">About</Link>
              <Link href="/services" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">Services</Link>
              <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100">Contact</Link>
            </nav>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} RayDunn Web Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}