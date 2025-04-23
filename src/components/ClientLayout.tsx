'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-r to-transparent ${gradient} backdrop-blur-[2px] border-2 border-[#e5c38c]/[0.7] shadow-[0_8px_32px_0_rgba(229,195,140,0.4)] dark:border-white/[0.15] dark:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(229,195,140,0.5),transparent_70%)] dark:after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]`}
        />
      </motion.div>
    </motion.div>
  )
}

export default function ClientLayout({
  children
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false)
    }, 800)
    
    // Allow scrolling
    document.body.style.overflow = 'auto';
  }, [])

  return (
    <>
      {/* Background shapes */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-[#e5c38c]/[0.40] dark:from-indigo-500/[0.05]"
          className="left-[-30%] md:left-[-5%] top-[-10%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-[#efdcb9]/[0.40] dark:from-rose-500/[0.05]"
          className="right-[-25%] md:right-[0%] top-[95%] md:top-[75%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-[#e5c38c]/[0.35] dark:from-violet-500/[0.05]"
          className="left-[-25%] md:left-[10%] bottom-[35%] md:bottom-[10%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-[#824a2a]/[0.30] dark:from-amber-500/[0.05]"
          className="right-[-25%] md:right-[20%] top-[45%] md:top-[15%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-[#693e25]/[0.35] dark:from-cyan-500/[0.05]"
          className="left-[60%] md:left-[25%] top-[60%] md:top-[10%]"
        />
      </div>
      
      {/* Loading screen */}
      <AnimatePresence>
        {loading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-background flex items-center justify-center z-50"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-16 h-16 border-4 border-[#e5c38c] dark:border-indigo-500 border-t-transparent rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
      
      {children}
    </>
  )
}