'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
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
        Sobre Nosotros
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
          <h3 className='text-2xl font-semibold mb-3 text-white'>Nuestra Misión</h3>
          <p className='text-lg text-white/70'>
            Transformar ideas en soluciones tecnológicas que impulsen el éxito de nuestros clientes, 
            ofreciendo herramientas digitales innovadoras y eficientes.
          </p>
        </div>
        
        <div className='flex-1 backdrop-blur-sm rounded-lg p-6 border border-white/10 geo-card hover:border-white/20 transition-all'>
          <h3 className='text-2xl font-semibold mb-3 text-white'>Nuestra Visión</h3>
          <p className='text-lg text-white/70'>
            Ser referentes en la industria tecnológica, reconocidos por nuestra excelencia, 
            creatividad y capacidad para adelantarnos a las necesidades digitales del futuro.
          </p>
        </div>
      </motion.div>
      
      <motion.p 
        custom={2}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='text-xl max-w-4xl mt-8 text-white/80'
      >
        Somos una empresa innovadora que ofrece soluciones tecnológicas de alta
        calidad. Nos enfocamos en mejorar la productividad y eficiencia de
        nuestros clientes a través de herramientas digitales avanzadas.
      </motion.p>
    </section>
  )
}