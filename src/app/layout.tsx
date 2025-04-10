import type { Metadata } from 'next'
import { Pacifico } from "next/font/google"
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

export const metadata: Metadata = {
  title: 'HigTech - Soluciones Tecnológicas',
  description: 'Innovamos con tecnología para un mundo mejor. Creamos soluciones digitales que transforman empresas.'
}

// Split into client component and server layout
import ClientLayout from '@/components/ClientLayout'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={pacifico.variable} suppressHydrationWarning>
      <body className='geo-bg antialiased'>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="higtech-theme"
        >
          <ClientLayout>
            <Header />
            {children}
            <Footer />
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}