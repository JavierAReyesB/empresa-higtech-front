'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { Star, Building, Briefcase, Award, Activity } from 'lucide-react'

export default function TestimonialsSection() {
  const { theme } = useTheme()
  const pathname = usePathname()
  const isSpanish = pathname?.includes('/es')
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  }

  // Testimonios/palabras sobre Omar
  const testimonials = isSpanish ? [
    {
      text: "Omar transformó nuestro enfoque digital con una combinación perfecta de liderazgo estratégico y experticia técnica. Su capacidad para entender problemas complejos y traducirlos en soluciones viables fue invaluable.",
      author: "María García",
      company: "CTO, FinTech Innovación",
      stars: 5
    },
    {
      text: "Trabajar con Omar significó tener un socio que realmente entendió nuestras necesidades. Su enfoque estratégico y su capacidad para llevar proyectos a buen término ha sido clave para el éxito de nuestras iniciativas digitales.",
      author: "Carlos Mendoza",
      company: "Director Digital, Grupo Logística+",
      stars: 5
    }
  ] : [
    {
      text: "Omar transformed our digital approach with a perfect combination of strategic leadership and technical expertise. His ability to understand complex problems and translate them into viable solutions was invaluable.",
      author: "Maria Garcia",
      company: "CTO, FinTech Innovation",
      stars: 5
    },
    {
      text: "Working with Omar meant having a partner who truly understood our needs. His strategic approach and ability to successfully deliver projects has been key to the success of our digital initiatives.",
      author: "Carlos Mendoza",
      company: "Digital Director, Logistics+ Group",
      stars: 5
    }
  ];

  // Casos de éxito / Highlights
  const projectHighlights = isSpanish ? [
    {
      icon: <Building className="h-5 w-5 text-cyan-400" />,
      sector: "Sector Financiero",
      challenge: "Migración de sistema legacy con más de 1M de usuarios activos",
      solution: "Estrategia de migración gradual con arquitectura de microservicios",
      result: "Cero tiempo de inactividad, reducción del 40% en costos operativos"
    },
    {
      icon: <Briefcase className="h-5 w-5 text-violet-400" />,
      sector: "Retail",
      challenge: "Integración omnicanal con 200+ puntos de venta físicos",
      solution: "Plataforma centralizada con APIs para sincronización en tiempo real",
      result: "Aumento del 28% en ventas cruzadas, experiencia de cliente unificada"
    },
    {
      icon: <Award className="h-5 w-5 text-amber-400" />,
      sector: "Educación",
      challenge: "Digitalización de formación corporativa en 5 países",
      solution: "LMS personalizado con gamificación y métricas de aprendizaje",
      result: "Reducción del 70% en costos de formación, aumento del 35% en compromiso"
    },
    {
      icon: <Activity className="h-5 w-5 text-emerald-400" />,
      sector: "Salud",
      challenge: "Sistema de gestión de datos clínicos para hospital de 500 camas",
      solution: "Arquitectura segura con workflows optimizados para personal médico",
      result: "Reducción del 60% en tiempo administrativo, mejora en seguridad de datos"
    },
  ] : [
    {
      icon: <Building className="h-5 w-5 text-cyan-400" />,
      sector: "Financial Sector",
      challenge: "Legacy system migration with over 1M active users",
      solution: "Gradual migration strategy with microservices architecture",
      result: "Zero downtime, 40% reduction in operational costs"
    },
    {
      icon: <Briefcase className="h-5 w-5 text-violet-400" />,
      sector: "Retail",
      challenge: "Omnichannel integration with 200+ physical stores",
      solution: "Centralized platform with APIs for real-time synchronization",
      result: "28% increase in cross-selling, unified customer experience"
    },
    {
      icon: <Award className="h-5 w-5 text-amber-400" />,
      sector: "Education",
      challenge: "Corporate training digitalization across 5 countries",
      solution: "Custom LMS with gamification and learning metrics",
      result: "70% reduction in training costs, 35% increase in engagement"
    },
    {
      icon: <Activity className="h-5 w-5 text-emerald-400" />,
      sector: "Healthcare",
      challenge: "Clinical data management system for 500-bed hospital",
      solution: "Secure architecture with optimized workflows for medical staff",
      result: "60% reduction in administrative time, improved data security"
    },
  ];

  return (
    <section id="testimonios" className='py-24 px-8 backdrop-blur-sm mx-4 my-8 mb-16 border border-white/10 rounded-xl geo-card'>
      {/* Sección de casos de éxito / Project Highlights */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className='text-4xl md:text-5xl font-bold mb-10 text-center geo-text-gradient'
      >
        {isSpanish ? 'Casos de Éxito' : 'Project Highlights'}
      </motion.h2>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20'
      >
        {projectHighlights.map((project, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className='p-6 backdrop-blur-sm rounded-xl border border-white/10 geo-card hover:border-white/20 transition-all h-full flex flex-col'
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-white/5 mr-3">
                {project.icon}
              </div>
              <h3 className='text-lg font-semibold text-foreground'>
                {project.sector}
              </h3>
            </div>
            
            <div className="flex-1 flex flex-col space-y-3">
              <div>
                <p className='text-foreground/40 text-sm font-medium'>
                  {isSpanish ? 'DESAFÍO' : 'CHALLENGE'}
                </p>
                <p className='text-foreground/80 text-sm'>
                  {project.challenge}
                </p>
              </div>
              
              <div>
                <p className='text-foreground/40 text-sm font-medium'>
                  {isSpanish ? 'SOLUCIÓN' : 'SOLUTION'}
                </p>
                <p className='text-foreground/80 text-sm'>
                  {project.solution}
                </p>
              </div>
              
              <div>
                <p className='text-foreground/40 text-sm font-medium'>
                  {isSpanish ? 'RESULTADO' : 'RESULT'}
                </p>
                <p className='text-foreground/80 text-sm font-medium'>
                  {project.result}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Sección de testimonios */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className='text-3xl md:text-4xl font-bold mb-10 text-center geo-text-gradient'
      >
        {isSpanish ? 'Palabras Sobre Mí' : 'What They Say'}
      </motion.h2>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'
      >
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className='p-8 backdrop-blur-sm rounded-xl border border-white/10 geo-card hover:border-white/20 transition-all'
          >
            <div className="flex mb-4">
              {[...Array(testimonial.stars)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            
            <p className='text-foreground/80 italic mb-6 text-lg'>
              &quot;{testimonial.text}&quot;
            </p>
            
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-white font-bold text-lg">
                {testimonial.author.charAt(0)}
              </div>
              <div className="ml-4">
                <h3 className='text-lg font-semibold text-foreground'>
                  {testimonial.author}
                </h3>
                <p className="text-foreground/60 text-sm">{testimonial.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="mt-16 text-center"
      >
        <p className="text-xl md:text-2xl font-light text-foreground/50 max-w-2xl mx-auto">
          {isSpanish
            ? "Creo en el poder de la tecnología bien dirigida para cambiar empresas y vidas."
            : "I believe in the power of well-directed technology to change businesses and lives."}
        </p>
      </motion.div>
    </section>
  )
}