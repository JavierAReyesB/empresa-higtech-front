'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { Monitor, LineChart, Lightbulb } from 'lucide-react'

export default function ServicesSection() {
  const { theme } = useTheme()
  const pathname = usePathname()
  const isSpanish = pathname?.includes('/es')
  
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

  const services = [
    {
      icon: <Monitor className="h-8 w-8 text-indigo-400" />,
      title: isSpanish ? "Dirección de Proyectos" : "Project Management",
      description: isSpanish 
        ? "Planificación, ejecución y entrega de proyectos digitales con metodologías ágiles, garantizando resultados de alta calidad dentro del tiempo y presupuesto." 
        : "Planning, execution, and delivery of digital projects using agile methodologies, ensuring high-quality results within time and budget constraints.",
      color: "indigo",
      href: "#"
    },
    {
      icon: <LineChart className="h-8 w-8 text-rose-400" />,
      title: isSpanish ? "Liderazgo Técnico" : "Technical Leadership",
      description: isSpanish 
        ? "Guía estratégica para equipos de desarrollo, estableciendo estándares técnicos, arquitecturas escalables y prácticas de código que garantizan soluciones robustas." 
        : "Strategic guidance for development teams, establishing technical standards, scalable architectures, and coding practices that ensure robust solutions.",
      color: "rose",
      href: "#"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-amber-400" />,
      title: isSpanish ? "Estrategia Digital" : "Digital Strategy",
      description: isSpanish 
        ? "Desarrollo de estrategias digitales alineadas con objetivos de negocio, identificando oportunidades de transformación con impacto medible en resultados." 
        : "Development of digital strategies aligned with business objectives, identifying transformation opportunities with measurable impact on results.",
      color: "amber",
      href: "#"
    }
  ]

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
          {isSpanish ? 'Mis Servicios' : 'My Services'}
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className='grid md:grid-cols-3 gap-8'
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`p-8 backdrop-blur-sm rounded-xl border border-white/10 geo-card hover:border-white/20 transition-all duration-300`}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className={`mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-${service.color}-500/10 border border-${service.color}-500/20`}>
                {service.icon}
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-foreground'>
                {service.title}
              </h3>
              <p className='text-foreground/70'>
                {service.description}
              </p>
              <motion.a 
                href={service.href} 
                className={`inline-block mt-6 text-${service.color}-400 hover:text-${service.color}-300 font-medium`}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {isSpanish ? 'Conocer más →' : 'Learn more →'}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}