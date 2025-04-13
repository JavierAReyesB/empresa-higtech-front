'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Search, Briefcase, User, Menu, X, Sun, Moon, Globe, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  
  const isSpanish = pathname?.includes('/es')

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  }

  // Enlaces acorde a un portafolio profesional
  const navItems = isSpanish ? [
    { name: 'Inicio', href: isSpanish ? '/es' : '/' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' }
  ] : [
    { name: 'Home', href: isSpanish ? '/es' : '/' },
    { name: 'Services', href: '#servicios' },
    { name: 'Projects', href: '#proyectos' },
    { name: 'Testimonials', href: '#testimonios' },
    { name: 'Contact', href: '#contacto' }
  ]

  // Don't render theme-specific parts until mounted (client-side)
  if (!mounted) {
    return (
      <header className='w-full bg-transparent backdrop-blur-[4px] z-10'>
        <div className='container mx-auto px-4'>
          <div className='flex h-16 items-center justify-between'>
            {/* Simplified loading state */}
            <div className='h-10 w-32'></div>
            <nav className='hidden lg:flex items-center space-x-4'>
              {navItems.map((item) => (
                <div key={item.name} className='h-10 w-24'></div>
              ))}
            </nav>
            <div className='flex items-center space-x-2'>
              <div className='h-10 w-10'></div>
              <div className='h-10 w-10'></div>
              <div className='h-10 w-10'></div>
              <div className='hidden sm:block h-10 w-32'></div>
              <div className='lg:hidden h-10 w-10'></div>
            </div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className='w-full bg-transparent backdrop-blur-[4px] fixed top-0 left-0 right-0 z-50'>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className='container mx-auto px-4 py-2'
      >
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <Link
            href={isSpanish ? '/es' : '/'}
            className='flex items-center border border-white/20 rounded-full p-2 geo-card'
          >
            <span className='text-xl font-bold text-foreground'>Omar Somoza</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center space-x-4'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-medium border border-white/10 text-foreground transition ${
                  pathname === item.href ? 'bg-white/10' : 'hover:bg-white/5'
                } geo-card`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side items */}
          <div className='flex items-center space-x-2'>
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className='border border-white/20 rounded-full geo-card flex items-center justify-center w-9 h-9 cursor-pointer hover:bg-white/5 transition-colors'>
                  <Globe className='h-5 w-5 stroke-foreground' />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end' className='geo-card border-white/10 bg-background/70 backdrop-blur-lg text-foreground'>
                <DropdownMenuItem onClick={() => window.location.href = "/"} className='hover:bg-white/10 cursor-pointer'>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.location.href = "/es"} className='hover:bg-white/10 cursor-pointer'>
                  Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <div 
              onClick={toggleTheme}
              className='border border-white/20 rounded-full geo-card flex items-center justify-center w-9 h-9 cursor-pointer hover:bg-white/5 transition-colors'
            >
              {resolvedTheme === 'light' ? (
                <Moon className='h-5 w-5 stroke-foreground' />
              ) : (
                <Sun className='h-5 w-5 stroke-foreground' />
              )}
            </div>

            {/* CTA Button */}
            <a href="#contacto" className='hidden sm:flex border border-white/20 bg-white/5 text-foreground rounded-full hover:bg-white/10 geo-card px-4 py-2 items-center text-sm font-medium'>
              <Mail className="h-4 w-4 mr-2" />
              {isSpanish ? 'Contactar' : 'Contact Me'}
            </a>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <div className='lg:hidden border border-white/20 rounded-full geo-card flex items-center justify-center w-9 h-9 cursor-pointer hover:bg-white/5 transition-colors'>
                  <Menu className='h-5 w-5 stroke-foreground' />
                </div>
              </SheetTrigger>
              <SheetContent side='right' className='geo-bg border-none'>
                <nav className='flex flex-col space-y-4 mt-8'>
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`px-3 py-2 rounded-full text-sm font-medium border border-white/10 text-foreground transition ${
                        pathname === item.href
                          ? 'bg-white/10'
                          : 'hover:bg-white/5'
                      } geo-card`}
                      onClick={() => document.querySelector('[data-radix-collection-item]')?.click()}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <a href="#contacto" className='flex border border-white/20 bg-white/5 text-foreground rounded-full hover:bg-white/10 geo-card px-4 py-2 items-center text-sm font-medium justify-center'>
                    <Mail className="h-4 w-4 mr-2" />
                    {isSpanish ? 'Contactar' : 'Contact Me'}
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.div>
    </header>
  )
}