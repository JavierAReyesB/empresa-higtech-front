'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function AboutSection() {
  const { theme } = useTheme()
  const pathname = usePathname()
  const isSpanish = pathname?.includes('/es')
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.7,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <section id="about" className='flex flex-col items-center justify-center py-24 px-8 text-center backdrop-blur-sm border border-white/10 rounded-xl mx-4 my-8 geo-card'>
      <motion.h2 
        custom={0}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='text-4xl md:text-5xl font-bold mb-8 geo-text-gradient'
      >
        {isSpanish ? 'Sobre Mí' : 'About Me'}
      </motion.h2>
      
      <div className="flex flex-col md:flex-row items-center justify-center mb-10 gap-10">
        {/* Placeholder para foto profesional - reemplazar con tu foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/10 shadow-lg"
        >
          {/* Reemplazar con tu foto: <Image src="/tu-foto.jpg" alt="Omar Somoza" width={256} height={256} /> */}
          <div className="w-full h-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 flex items-center justify-center">
            <span className="text-6xl font-semibold text-white/70">OS</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:w-1/2 text-left"
        >
          <p className="text-lg text-foreground/70 mb-4">
            {isSpanish 
              ? "Con más de 12 años en el sector tecnológico, he liderado proyectos para startups y grandes empresas, combinando visión estratégica con conocimiento técnico para entregar soluciones digitales de impacto."
              : "With over 12 years in the tech industry, I've led projects for startups and large companies, combining strategic vision with technical expertise to deliver impactful digital solutions."}
          </p>
          <p className="text-lg text-foreground/70 mb-4">
            {isSpanish 
              ? "Me especializo en guiar equipos multidisciplinarios para traducir objetivos de negocio en productos tecnológicos excepcionales que generan valor medible."
              : "I specialize in guiding multidisciplinary teams to translate business objectives into exceptional tech products that generate measurable value."}
          </p>
          <p className="text-lg text-foreground/70">
            {isSpanish 
              ? "Como fundador de Avanzadi, ayudo a empresas a potenciar su transformación digital con estrategias personalizadas y soluciones tecnológicas avanzadas."
              : "As the founder of Avanzadi, I help companies enhance their digital transformation with tailored strategies and advanced technological solutions."}
          </p>
        </motion.div>
      </div>
      
      <motion.div 
        custom={1}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl'
      >
        <div className='backdrop-blur-sm rounded-lg p-5 border border-white/10 geo-card hover:border-white/20 transition-all'>
          <h3 className='text-xl font-semibold mb-2 text-foreground'>
            {isSpanish ? 'Liderazgo' : 'Leadership'}
          </h3>
          <p className='text-sm text-foreground/70'>
            {isSpanish 
              ? 'Dirección estratégica que inspira equipos y maximiza resultados.'
              : 'Strategic direction that inspires teams and maximizes results.'}
          </p>
        </div>
        
        <div className='backdrop-blur-sm rounded-lg p-5 border border-white/10 geo-card hover:border-white/20 transition-all'>
          <h3 className='text-xl font-semibold mb-2 text-foreground'>
            {isSpanish ? 'Innovación' : 'Innovation'}
          </h3>
          <p className='text-sm text-foreground/70'>
            {isSpanish
              ? 'Soluciones creativas y disruptivas para desafíos complejos.'
              : 'Creative and disruptive solutions for complex challenges.'}
          </p>
        </div>
        
        <div className='backdrop-blur-sm rounded-lg p-5 border border-white/10 geo-card hover:border-white/20 transition-all'>
          <h3 className='text-xl font-semibold mb-2 text-foreground'>
            {isSpanish ? 'Confianza' : 'Trust'}
          </h3>
          <p className='text-sm text-foreground/70'>
            {isSpanish
              ? 'Relaciones basadas en transparencia, integridad y resultados.'
              : 'Relationships based on transparency, integrity, and results.'}
          </p>
        </div>
        
        <div className='backdrop-blur-sm rounded-lg p-5 border border-white/10 geo-card hover:border-white/20 transition-all'>
          <h3 className='text-xl font-semibold mb-2 text-foreground'>
            {isSpanish ? 'Impacto' : 'Impact'}
          </h3>
          <p className='text-sm text-foreground/70'>
            {isSpanish
              ? 'Compromiso con resultados medibles que generan valor real.'
              : 'Commitment to measurable results that generate real value.'}
          </p>
        </div>
      </motion.div>
      
      <motion.p 
        custom={2}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='text-xl max-w-4xl mt-10 text-foreground/70 italic'
      >
        {isSpanish
          ? '"Como Project Manager y líder técnico, no solo dirijo proyectos, transformo desafíos en oportunidades. Mi objetivo es guiar a empresas y personas hacia soluciones digitales que marquen la diferencia, con estrategia, claridad y confianza."'
          : '"As a Project Manager and technical leader, I don\'t just manage projects, I transform challenges into opportunities. My goal is to guide companies and people towards digital solutions that make a difference, with strategy, clarity, and confidence."'}
      </motion.p>
    </section>
  )
}