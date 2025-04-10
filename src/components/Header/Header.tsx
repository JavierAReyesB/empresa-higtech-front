'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Search, ShoppingCart, User, Menu, X, Sun, Moon } from 'lucide-react'
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
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

export default function Header() {
  const { resolvedTheme, setTheme } = useTheme()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  }

  // ✅ Enlaces corregidos
  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'BlackGestionTime', href: '/blackgestiontime' },
    { name: 'Páginas Web a Medida', href: '/paginas-web-a-medida' },
    { name: 'Proyecto AI Teacher', href: '/aiteacher' }
  ]

  const cartItemCount = 3

  // Don't render theme-specific parts until mounted (client-side)
  if (!mounted) {
    return (
      <header className='w-full border-b border-white/10 bg-transparent backdrop-blur-sm z-10'>
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
    <header className='w-full border-b border-white/10 bg-transparent backdrop-blur-sm z-10'>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className='container mx-auto px-4'
      >
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <Link
            href='/'
            className='flex items-center border border-white/20 rounded-full p-2 geo-card'
          >
            <span className='text-xl font-bold text-foreground'>HigTech</span>
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
            {/* Search */}
            <div className='relative border border-white/20 rounded-full'>
              {isSearchOpen ? (
                <div className='absolute right-0 top-0 w-60 flex items-center'>
                  <Input
                    className='rounded-l-full bg-white/5 text-foreground border-white/20'
                    placeholder='Buscar...'
                    autoFocus
                    onBlur={() => setIsSearchOpen(false)}
                  />
                  <Button
                    variant='ghost'
                    size='icon'
                    className='rounded-l-none border-white/20'
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X className='h-4 w-4 stroke-foreground' />
                  </Button>
                </div>
              ) : (
                <Button
                  variant='ghost'
                  size='icon'
                  className='geo-card rounded-full'
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className='h-5 w-5 stroke-foreground' />
                </Button>
              )}
            </div>

            {/* Theme Toggle */}
            <Button
              variant='ghost'
              size='icon'
              onClick={toggleTheme}
              className='border border-white/20 rounded-full geo-card'
            >
              {resolvedTheme === 'light' ? (
                <Moon className='h-5 w-5 stroke-foreground' />
              ) : (
                <Sun className='h-5 w-5 stroke-foreground' />
              )}
            </Button>

            {/* Shopping Cart */}
            <Button
              variant='ghost'
              size='icon'
              className='relative border border-white/20 rounded-full geo-card'
              asChild
            >
              <Link href='/carrito'>
                <ShoppingCart className='h-5 w-5 stroke-foreground' />
                {cartItemCount > 0 && (
                  <Badge className='absolute -top-2 -right-2 px-1.5 py-0.5 text-xs bg-primary text-primary-foreground'>
                    {cartItemCount}
                  </Badge>
                )}
              </Link>
            </Button>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  className='border border-white/20 rounded-full geo-card'
                >
                  <User className='h-5 w-5 stroke-foreground' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end' className='geo-card border-white/10 bg-background/70 backdrop-blur-lg text-foreground'>
                <DropdownMenuItem asChild className='hover:bg-white/10'>
                  <Link href='/login' className='text-foreground'>
                    Iniciar sesión
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className='hover:bg-white/10'>
                  <Link href='/registro' className='text-foreground'>
                    Registrarse
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* CTA Button */}
            <Button className='hidden sm:flex border border-white/20 bg-white/5 text-foreground rounded-full hover:bg-white/10 geo-card'>
              Comprar ahora
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant='ghost'
                  size='icon'
                  className='lg:hidden border border-white/20 rounded-full geo-card'
                >
                  <Menu className='h-5 w-5 stroke-foreground' />
                </Button>
              </SheetTrigger>
              <SheetContent side='right' className='geo-bg border-l border-white/10'>
                <nav className='flex flex-col space-y-4 mt-8'>
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.name}>
                      <Link
                        href={item.href}
                        className={`px-3 py-2 rounded-full text-sm font-medium border border-white/10 text-foreground transition ${
                          pathname === item.href
                            ? 'bg-white/10'
                            : 'hover:bg-white/5'
                        } geo-card`}
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <Button className='w-full border border-white/20 bg-white/5 text-foreground rounded-full hover:bg-white/10 geo-card'>
                      Comprar ahora
                    </Button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.div>
    </header>
  )
}