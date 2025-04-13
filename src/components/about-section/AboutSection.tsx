'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'

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
      
      <motion.div 
        custom={1}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='flex flex-col md:flex-row gap-8 max-w-5xl'
      >
        <div className='flex-1 backdrop-blur-sm rounded-lg p-6 border border-white/10 geo-card hover:border-white/20 transition-all'>
          <h3 className='text-2xl font-semibold mb-3 text-foreground'>
            {isSpanish ? 'Mi Enfoque' : 'My Approach'}
          </h3>
          <p className='text-lg text-foreground/70'>
            {isSpanish 
              ? 'Combino liderazgo estratégico con expertise técnico para transformar ideas en soluciones digitales exitosas, maximizando el retorno de inversión y minimizando riesgos.'
              : 'I combine strategic leadership with technical expertise to transform ideas into successful digital solutions, maximizing return on investment while minimizing risks.'}
          </p>
        </div>
        
        <div className='flex-1 backdrop-blur-sm rounded-lg p-6 border border-white/10 geo-card hover:border-white/20 transition-all'>
          <h3 className='text-2xl font-semibold mb-3 text-foreground'>
            {isSpanish ? 'Mi Experiencia' : 'My Experience'}
          </h3>
          <p className='text-lg text-foreground/70'>
            {isSpanish
              ? 'Más de 12 años dirigiendo proyectos tecnológicos complejos, desde startups hasta grandes corporaciones, siempre enfocado en resultados medibles y calidad excepcional.'
              : 'Over 12 years leading complex technology projects, from startups to large corporations, always focused on measurable results and exceptional quality.'}
          </p>
        </div>
      </motion.div>
      
      <motion.p 
        custom={2}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='text-xl max-w-4xl mt-8 text-foreground/80'
      >
        {isSpanish
          ? 'Como director de proyectos y líder técnico, mi misión es ayudar a empresas y organizaciones a alcanzar sus objetivos estratégicos a través de soluciones digitales innovadoras y eficientes, siempre priorizando la comunicación clara y la entrega de valor.'
          : 'As a project director and technical leader, my mission is to help businesses and organizations achieve their strategic goals through innovative and efficient digital solutions, always prioritizing clear communication and value delivery.'}
      </motion.p>
    </section>
  )
}