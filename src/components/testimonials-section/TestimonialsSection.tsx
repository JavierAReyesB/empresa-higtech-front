'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Star } from 'lucide-react'

export default function TestimonialsSection() {
  const { theme } = useTheme()
  
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

  const testimonials = [
    {
      text: "El equipo hizo un trabajo increíble con nuestro sitio web. La experiencia de usuario y el diseño superaron todas nuestras expectativas.",
      author: "Juan Pérez",
      company: "TechSolutions Inc.",
      stars: 5
    },
    {
      text: "Nos ayudaron a digitalizar nuestra empresa de manera eficiente y profesional. La transición fue fluida y el resultado final es espectacular.",
      author: "Ana Gómez",
      company: "Innovatech",
      stars: 5
    },
    {
      text: "Gracias a ellos, ahora tenemos una app móvil increíble para nuestros clientes. Las reseñas son excelentes y nuestras ventas han aumentado.",
      author: "Carlos Ramírez",
      company: "MobileX",
      stars: 5
    }
  ];

  return (
    <section id="testimonios" className='py-24 px-8 backdrop-blur-sm mx-4 my-8 mb-16 border border-white/10 rounded-xl geo-card'>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className='text-4xl md:text-5xl font-bold mb-12 text-center geo-text-gradient'
      >
        Lo que dicen nuestros clientes
      </motion.h2>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'
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
                <h3 className='text-xl font-semibold text-foreground'>
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
        <a 
          href="#" 
          className="inline-flex items-center justify-center px-8 py-3 rounded-full text-primary-foreground bg-primary hover:bg-primary/90 font-medium text-lg transition-all shadow-lg hover:shadow-xl hover:shadow-primary/20"
        >
          Ver más testimonios
        </a>
      </motion.div>
    </section>
  )
}