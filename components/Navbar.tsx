'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Sun, Moon, Menu, ChevronDown, ChevronRight, UserCircle2 } from 'lucide-react'
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

const services = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "E-commerce Solutions", href: "/services/e-commerce" },
  { name: "SEO Optimization", href: "/services/seo" },
  { name: "Logo Design", href: "/services/logo-design" },
]

const portfolioItems = [
  { name: "Clean Slate Pressure Washing", href: "/portfolio/clean-slate" },
  { name: "Pristine Clean Soft Wash", href: "/portfolio/pristine-clean" },
  { name: "OutKast Industrial Group", href: "/portfolio/outkast" },
  { name: "JessieBoudreaux.com ", href: "/portfolio/jessie-boudreaux" },
]

const pricingTiers = [
  { name: "Basic Website", href: "/pricing/basic-website" },
  { name: "Professional Website", href: "/pricing/professional-website" },
  { name: "Basic E-commerce", href: "/pricing/basic-ecommerce" },
  { name: "Professional E-commerce", href: "/pricing/professional-ecommerce" },
]

export default function Component() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const [servicesOpen, setServicesOpen] = useState(false)
  const [portfolioOpen, setPortfolioOpen] = useState(false)
  const [pricingOpen, setPricingOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 flex items-center justify-start">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/PNG Transparent Logo.png" alt="RayDunn Logo" width={150} height={40} className="h-10 w-auto" />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-1 flex-1 justify-center">
            <NavLink href="/" active={pathname === "/"}>Home</NavLink>
            <NavLink href="/about" active={pathname === "/about"}>About</NavLink>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={pathname.startsWith("/services") ? "default" : "ghost"} className="text-sm font-medium">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/services" className="w-full font-medium">
                    All Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {services.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link href={service.href} className="w-full">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={pathname.startsWith("/portfolio") ? "default" : "ghost"} className="text-sm font-medium">
                  Portfolio <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuItem asChild>
                  <Link href="/portfolio" className="w-full font-medium">
                    All Projects
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {portfolioItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href} className="w-full">
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant={pathname.startsWith("/pricing") ? "default" : "ghost"} className="text-sm font-medium">
                  Pricing<ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64">
              <DropdownMenuItem asChild>
                  <Link href="/pricing" className="w-full font-medium">
                    All Plans
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {pricingTiers.map((tier) => (
                  <DropdownMenuItem key={tier.href} asChild>
                    <Link href={tier.href} className="w-full">
                      {tier.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <NavLink href="/contact" active={pathname === "/contact"}>Contact</NavLink>
          </nav>
          <div className="flex-1 flex items-center justify-end space-x-4">
            <Link href="/login" passHref>
              <Button variant="ghost" size="sm" className="text-sm font-medium">
                <UserCircle2 className="mr-2 h-4 w-4" />
                Login
              </Button>
            </Link>
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle theme"
                className="w-9 px-0"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            )}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-4">
                  <NavLink href="/" mobile active={pathname === "/"}>Home</NavLink>
                  <NavLink href="/about" mobile active={pathname === "/about"}>About</NavLink>
                  <div className="space-y-2">
                    <Button
                      variant="ghost"
                      className="w-full justify-between"
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      Services
                      <ChevronRight className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-90' : ''}`} />
                    </Button>
                    {servicesOpen && (
                      <div className="pl-4 space-y-2">
                        <NavLink href="/services" mobile active={pathname === "/services"}>All Services</NavLink>
                        {services.map((service) => (
                          <NavLink key={service.href} href={service.href} mobile active={pathname === service.href}>
                            {service.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Button
                      variant="ghost"
                      className="w-full justify-between"
                      onClick={() => setPortfolioOpen(!portfolioOpen)}
                    >
                      Portfolio
                      <ChevronRight className={`h-4 w-4 transition-transform ${portfolioOpen ? 'rotate-90' : ''}`} />
                    </Button>
                    {portfolioOpen && (
                      <div className="pl-4 space-y-2">
                        {portfolioItems.map((item) => (
                          <NavLink key={item.href} href={item.href} mobile active={pathname === item.href}>
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Button
                      variant="ghost"
                      className="w-full justify-between"
                      onClick={() => setPricingOpen(!pricingOpen)}
                    >
                      Pricing
                      <ChevronRight className={`h-4 w-4 transition-transform ${pricingOpen ? 'rotate-90' : ''}`} />
                    </Button>
                    {pricingOpen && (
                      <div className="pl-4 space-y-2">
                        {pricingTiers.map((tier) => (
                          <NavLink key={tier.href} href={tier.href} mobile active={pathname === tier.href}>
                            {tier.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                  <NavLink href="/login" mobile>
                    <UserCircle2 className="mr-2 h-4 w-4" />
                    Login
                  </NavLink>
                  <NavLink href="/contact" mobile active={pathname === "/contact"}>Contact</NavLink>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

function NavLink({ href, children, mobile = false, active = false }: { href: string; children: React.ReactNode; mobile?: boolean; active?: boolean }) {
  return (
    <Link href={href} passHref>
      <Button
        variant={active ? "default" : "ghost"}
        className={`${
          mobile ? 'justify-start w-full text-lg' : 'text-sm'
        } font-medium transition-colors hover:text-primary focus:text-primary focus:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
          active ? 'bg-primary text-primary-foreground hover:bg-primary/90' : ''
        }`}
      >
        {children}
      </Button>
    </Link>
  )
}