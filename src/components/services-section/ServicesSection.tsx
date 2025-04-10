'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Monitor, Smartphone, LightbulbIcon } from 'lucide-react'

export default function ServicesSection() {
  const { theme } = useTheme()
  
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

  return (
    <section id="servicios" className='py-24 px-8 backdrop-blur-sm mx-4 my-8 border border-white/10 rounded-xl geo-card'>
      <div className='max-w-6xl mx-auto'>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='text-4xl md:text-5xl font-bold mb-12 text-center geo-text-gradient'
        >
          Nuestros Servicios
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className='grid md:grid-cols-3 gap-8'
        >
          {/* Servicio 1 */}
          <motion.div 
            variants={itemVariants}
            className='p-8 backdrop-blur-sm rounded-xl border border-white/10 geo-card hover:border-white/20 transition-all duration-300'
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className='mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500/10 border border-indigo-500/20'>
              <Monitor className='h-8 w-8 text-indigo-400' />
            </div>
            <h3 className='text-2xl font-semibold mb-4 text-foreground'>
              Desarrollo Web
            </h3>
            <p className='text-foreground/70'>
              Creamos sitios web modernos y responsivos utilizando las últimas
              tecnologías. Diseños únicos que capturan la esencia de tu marca.
            </p>
            <motion.a 
              href="#" 
              className='inline-block mt-6 text-indigo-400 hover:text-indigo-300 font-medium'
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Conocer más →
            </motion.a>
          </motion.div>

          {/* Servicio 2 */}
          <motion.div 
            variants={itemVariants}
            className='p-8 backdrop-blur-sm rounded-xl border border-white/10 geo-card hover:border-white/20 transition-all duration-300'
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className='mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-500/10 border border-rose-500/20'>
              <Smartphone className='h-8 w-8 text-rose-400' />
            </div>
            <h3 className='text-2xl font-semibold mb-4 text-foreground'>
              Aplicaciones Móviles
            </h3>
            <p className='text-foreground/70'>
              Diseñamos y desarrollamos apps para iOS y Android con alto
              rendimiento. Experiencias móviles fluidas y atractivas.
            </p>
            <motion.a 
              href="#" 
              className='inline-block mt-6 text-rose-400 hover:text-rose-300 font-medium'
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Conocer más →
            </motion.a>
          </motion.div>

          {/* Servicio 3 */}
          <motion.div 
            variants={itemVariants}
            className='p-8 backdrop-blur-sm rounded-xl border border-white/10 geo-card hover:border-white/20 transition-all duration-300'
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className='mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20'>
              <LightbulbIcon className='h-8 w-8 text-amber-400' />
            </div>
            <h3 className='text-2xl font-semibold mb-4 text-foreground'>
              Consultoría Tecnológica
            </h3>
            <p className='text-foreground/70'>
              Ofrecemos asesoría para optimizar procesos y digitalizar empresas.
              Transforma tu negocio con soluciones personalizadas.
            </p>
            <motion.a 
              href="#" 
              className='inline-block mt-6 text-amber-400 hover:text-amber-300 font-medium'
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Conocer más →
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}