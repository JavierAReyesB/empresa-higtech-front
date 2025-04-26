'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { Monitor, LineChart, Lightbulb, MessageCircle } from 'lucide-react'
import { useProfile } from '@/lib/hooks/useProfile'

export default function ServicesSection() {
  const { theme } = useTheme()
  const pathname = usePathname()
  const isSpanish = pathname?.includes('/es')
  
  // Get profile data from resources
  const { data: profile } = useProfile()
  const servicesData = profile.services
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  }

  // Map service items to icons
  const serviceIcons = [
    <Monitor key="monitor" className="h-8 w-8 text-indigo-400" />,
    <LineChart key="linechart" className="h-8 w-8 text-rose-400" />,
    <Lightbulb key="lightbulb" className="h-8 w-8 text-amber-400" />,
    <MessageCircle key="message" className="h-8 w-8 text-emerald-400" />
  ]
  
  // Map service items to colors
  const serviceColors = ["indigo", "rose", "amber", "emerald"]

  return (
    <section id="servicios" className='py-24 px-8 backdrop-blur-sm mx-4 my-8 border border-white/10 rounded-xl geo-card'>
      <div className='max-w-6xl mx-auto'>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='text-4xl md:text-5xl font-bold mb-10 text-center geo-text-gradient'
        >
          {servicesData.title}
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'
        >
          {servicesData.items.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`p-8 backdrop-blur-sm rounded-xl border border-white/10 geo-card hover:border-white/20 transition-all duration-300`}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className={`mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-${serviceColors[index % serviceColors.length]}-500/10 border border-${serviceColors[index % serviceColors.length]}-500/20`}>
                {serviceIcons[index % serviceIcons.length]}
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-foreground'>
                {service.title}
              </h3>
              <p className='text-foreground/70 mb-4'>
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-12 text-foreground/50 text-lg font-light italic"
        >
          {servicesData.description}
        </motion.div>
      </div>
    </section>
  )
}