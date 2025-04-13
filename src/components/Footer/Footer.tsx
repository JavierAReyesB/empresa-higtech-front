'use client'

import type React from 'react'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import {
  Linkedin,
  Github,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Sun,
  Moon,
  ChevronUp
} from 'lucide-react'

export default function Footer() {
  const pathname = usePathname()
  const isSpanish = pathname?.includes('/es')
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setEmail('')

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1000)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer
      className={`relative w-full border-t border-border/40 bg-background ${
        isDarkMode ? 'dark' : ''
      }`}
    >
      {/* Back to top button */}
      <div className='absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transform'>
        <motion.button
          onClick={scrollToTop}
          className='flex h-12 w-24 items-center justify-center rounded-t-full border border-border/40 bg-background shadow-sm transition-all hover:bg-muted'
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: showScrollTop ? 1 : 0.8 }}
        >
          <ChevronUp size={20} className='text-primary' />
        </motion.button>
      </div>

      <div className='container mx-auto px-4 py-16'>
        {/* Newsletter Section - Moved to top for emphasis */}
        <div className='mx-auto mb-16 max-w-4xl'>
          <motion.div
            className='rounded-xl border border-border/40 bg-background p-8 shadow-sm'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className='text-center'>
              <h3 className='mb-2 text-2xl font-light tracking-tight'>
                {isSpanish ? (
                  <>
                    Recibe mis{' '}
                    <span className='font-semibold text-primary'>
                      actualizaciones profesionales
                    </span>
                  </>
                ) : (
                  <>
                    Receive my{' '}
                    <span className='font-semibold text-primary'>
                      professional updates
                    </span>
                  </>
                )}
              </h3>
              <p className='mb-6 text-muted-foreground'>
                {isSpanish 
                  ? 'Suscríbete para mantenerte al día con mis últimos proyectos y servicios.'
                  : 'Subscribe to stay up to date with my latest projects and services.'}
              </p>

              <form
                onSubmit={handleSubmit}
                className='mx-auto flex max-w-md flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0'
              >
                <div className='relative flex-1'>
                  <Input
                    type='email'
                    placeholder={isSpanish ? 'Tu correo electrónico' : 'Your email'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='h-11 w-full rounded-md border-border/40 bg-background px-4'
                    disabled={isSubmitting}
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type='submit'
                    className='h-11 w-full rounded-md px-6 sm:w-auto'
                    disabled={isSubmitting}
                  >
                    {isSubmitting 
                      ? (isSpanish ? 'Enviando...' : 'Sending...') 
                      : (isSpanish ? 'Suscribirse' : 'Subscribe')}
                  </Button>
                </motion.div>
              </form>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.p
                    className='mt-4 text-sm text-green-600'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {isSpanish 
                      ? '¡Gracias por suscribirte! Pronto recibirás mis actualizaciones.'
                      : 'Thank you for subscribing! You will receive my updates soon.'}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Main Footer Content */}
        <div className='grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3'>
          {/* Brand Section */}
          <div className='space-y-6'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='flex items-center'
            >
              <img
                src='/next.svg'
                alt='Omar Somoza'
                width='40'
                height='40'
                className='mr-3'
              />

              <span className='text-xl font-light tracking-tight'>
                Omar<span className='font-semibold'>Somoza</span>
              </span>
            </motion.div>
            <p className='text-sm leading-relaxed text-muted-foreground'>
              {isSpanish
                ? 'Director de proyectos y líder técnico con pasión por transformar desafíos empresariales en soluciones digitales exitosas.'
                : 'Project director and technical leader with a passion for transforming business challenges into successful digital solutions.'}
            </p>
            <div className='flex space-x-3'>
              <motion.a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{
                  y: -3,
                  backgroundColor: 'rgba(var(--primary-rgb), 0.1)'
                }}
                className='flex h-9 w-9 items-center justify-center rounded-full border border-border/40 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary'
              >
                <Linkedin size={16} />
                <span className='sr-only'>LinkedIn</span>
              </motion.a>
              <motion.a
                href='https://github.com'
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{
                  y: -3,
                  backgroundColor: 'rgba(var(--primary-rgb), 0.1)'
                }}
                className='flex h-9 w-9 items-center justify-center rounded-full border border-border/40 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary'
              >
                <Github size={16} />
                <span className='sr-only'>GitHub</span>
              </motion.a>
              <motion.a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{
                  y: -3,
                  backgroundColor: 'rgba(var(--primary-rgb), 0.1)'
                }}
                className='flex h-9 w-9 items-center justify-center rounded-full border border-border/40 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary'
              >
                <Twitter size={16} />
                <span className='sr-only'>Twitter</span>
              </motion.a>
              <motion.a
                href='https://youtube.com'
                target='_blank'
                rel='noopener noreferrer'
                whileHover={{
                  y: -3,
                  backgroundColor: 'rgba(var(--primary-rgb), 0.1)'
                }}
                className='flex h-9 w-9 items-center justify-center rounded-full border border-border/40 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary'
              >
                <Youtube size={16} />
                <span className='sr-only'>YouTube</span>
              </motion.a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className='space-y-6'>
            <div>
              <h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground'>
                {isSpanish ? 'Navegación' : 'Navigation'}
              </h3>
              <ul className='grid grid-cols-2 gap-2'>
                {(isSpanish 
                  ? ['Inicio', 'Servicios', 'Proyectos', 'Testimonios', 'Contacto'] 
                  : ['Home', 'Services', 'Projects', 'Testimonials', 'Contact']
                ).map((item, i) => (
                  <motion.li key={item} whileHover={{ x: 3 }}>
                    <Link
                      href={i === 0 ? (isSpanish ? '/es' : '/') : `#${['', 'servicios', 'proyectos', 'testimonios', 'contacto'][i]}`}
                      className='text-sm text-foreground transition-colors hover:text-primary'
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground'>
                {isSpanish ? 'Servicios' : 'Services'}
              </h3>
              <ul className='space-y-2'>
                {(isSpanish
                  ? [
                      { name: 'Dirección de Proyectos', href: '#servicios' },
                      { name: 'Liderazgo Técnico', href: '#servicios' },
                      { name: 'Estrategia Digital', href: '#servicios' }
                    ]
                  : [
                      { name: 'Project Management', href: '#servicios' },
                      { name: 'Technical Leadership', href: '#servicios' },
                      { name: 'Digital Strategy', href: '#servicios' }
                    ]
                ).map((service) => (
                  <motion.li key={service.name} whileHover={{ x: 3 }}>
                    <Link
                      href={service.href}
                      className='text-sm text-foreground transition-colors hover:text-primary'
                    >
                      {service.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className='space-y-6'>
            <div>
              <h3 className='mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground'>
                {isSpanish ? 'Contacto' : 'Contact'}
              </h3>
              <ul className='space-y-4'>
                <li className='flex items-center text-sm text-foreground'>
                  <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary'>
                    <Mail size={14} />
                  </div>
                  <a
                    href='mailto:omar.somoza@example.com'
                    className='ml-3 hover:text-primary hover:underline'
                  >
                    omar.somoza@example.com
                  </a>
                </li>
                <li className='flex items-center text-sm text-foreground'>
                  <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary'>
                    <Phone size={14} />
                  </div>
                  <a
                    href='tel:+34600000000'
                    className='ml-3 hover:text-primary hover:underline'
                  >
                    +34 600 000 000
                  </a>
                </li>
                <li className='flex items-start text-sm text-foreground'>
                  <div className='mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary'>
                    <MapPin size={14} />
                  </div>
                  <span className='ml-3 leading-tight'>
                    Madrid, España
                  </span>
                </li>
              </ul>
            </div>

            <div className='rounded-lg border border-border/40 p-4'>
              <div className='flex items-center justify-between'>
                <span className='text-xs font-medium text-muted-foreground'>
                  {isSpanish ? 'Preferencia de tema' : 'Theme preference'}
                </span>
                <div className='flex items-center space-x-2'>
                  <Switch
                    id='dark-mode'
                    checked={isDarkMode}
                    onCheckedChange={toggleDarkMode}
                    className='data-[state=checked]:bg-primary'
                  />
                  <Label htmlFor='dark-mode' className='cursor-pointer text-xs'>
                    {isDarkMode ? (
                      <div className='flex items-center'>
                        <Moon size={12} className='mr-1' />
                        <span>{isSpanish ? 'Oscuro' : 'Dark'}</span>
                      </div>
                    ) : (
                      <div className='flex items-center'>
                        <Sun size={12} className='mr-1' />
                        <span>{isSpanish ? 'Claro' : 'Light'}</span>
                      </div>
                    )}
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className='my-8 opacity-30' />

        {/* Bottom Footer */}
        <div className='flex flex-col items-center justify-between space-y-4 text-center text-xs text-muted-foreground md:flex-row md:space-y-0 md:text-left'>
          <div>© {currentYear} Omar Somoza. {isSpanish ? 'Todos los derechos reservados.' : 'All rights reserved.'}</div>
          <div className='flex items-center space-x-1'>
            <span>{isSpanish ? 'Creado con' : 'Built with'}</span>
            <motion.a
              href='https://nextjs.org'
              target='_blank'
              rel='noopener noreferrer'
              className='font-medium text-foreground transition-colors hover:text-primary'
              whileHover={{ y: -1 }}
            >
              Next.js
            </motion.a>
            <span>·</span>
            <motion.a
              href='https://tailwindcss.com'
              target='_blank'
              rel='noopener noreferrer'
              className='font-medium text-foreground transition-colors hover:text-primary'
              whileHover={{ y: -1 }}
            >
              Tailwind CSS
            </motion.a>
            <span>·</span>
            <motion.a
              href='https://vercel.com'
              target='_blank'
              rel='noopener noreferrer'
              className='font-medium text-foreground transition-colors hover:text-primary'
              whileHover={{ y: -1 }}
            >
              Vercel
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}