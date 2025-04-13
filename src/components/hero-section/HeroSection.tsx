"use client";
import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Linkedin, Instagram, Github, PlayCircle } from "lucide-react";
import VideoPlayer from "../VideoPlayer";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
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
      className={cn("absolute", className)}
    ></motion.div>
  );
}

// Componente para animación de escritura
const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);
  
  // Pequeño retraso antes de empezar a escribir para asegurar que comienza desde cero
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (!startTyping) return;
    
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 150); // velocidad de escritura - ajustar según necesidad
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, startTyping]);

  return (
    <span className="text-lg sm:text-xl md:text-7xl text-sm text-foreground/60 tracking-wide font-dancing whitespace-nowrap border-r-2 border-foreground animate-caret">
      {displayText}
    </span>
  );
};

export default function HeroSection({
  badge = "Omar Somoza",
  title1 = "Soluciones",
  title2 = "digitales eficientes",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  const { theme } = useTheme();
  const [showBadge, setShowBadge] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const pathname = usePathname();
  const isSpanish = pathname?.includes('/es');

  // Esperar a que todas las animaciones terminen y luego mostrar el badge
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBadge(true);
    }, 4000); // 4 segundos total para esperar todas las animaciones (incluyendo loader)

    return () => clearTimeout(timer);
  }, []);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 1.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };
  return (
    <div className="relative h-[100vh] max-h-[800px] w-full flex items-center justify-center">
      <div className="absolute inset-0 " />
      <div className="absolute inset-0">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          {showBadge && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-8 md:mb-12"
            >
              <TypewriterText text={badge} />
            </motion.div>
          )}
          <motion.div custom={0} initial="hidden" animate="visible">
            <h1 className="text-xl sm:text-xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              <div className="geo-text-gradient">{title1}</div>
              <div className="geo-text-gradient text-lg sm:text-xl md:text-5xl">
                {title2}
              </div>
            </h1>
          </motion.div>
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-foreground/40 mb-2 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              {isSpanish 
                ? "Transformando desafíos empresariales en soluciones digitales exitosas."
                : "Transforming business challenges into successful digital solutions."}
            </p>
            <p className="text-sm sm:text-base text-foreground/30 mb-5 font-light tracking-wide max-w-xl mx-auto px-4">
              {isSpanish 
                ? "Fundador de Avanzadi"
                : "Founder at Avanzadi"}
            </p>
            
            {/* Video Button */}
            <div className="mb-5">
              <motion.button
                onClick={() => setShowVideoModal(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 transition-colors"
              >
                <PlayCircle size={18} />
                <span className="text-sm font-medium">{isSpanish ? "Ver presentación" : "Watch introduction"}</span>
              </motion.button>
            </div>
            
            {/* Redes sociales */}
            <div className="flex justify-center space-x-4 mb-8">
              <motion.a 
                href="https://www.linkedin.com/in/omar-somoza-230b71228" 
                target="_blank"
                whileHover={{ y: -3, scale: 1.1 }}
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-white/30 transition-all"
              >
                <Linkedin size={20} className="text-foreground/60" />
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/omarsomoza1/" 
                target="_blank"
                whileHover={{ y: -3, scale: 1.1 }}
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-white/30 transition-all"
              >
                <Instagram size={20} className="text-foreground/60" />
              </motion.a>
              <motion.a 
                href="https://www.avanzadi.com/" 
                target="_blank"
                whileHover={{ y: -3, scale: 1.1 }}
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-white/30 transition-all"
              >
                <span className="text-foreground/60 text-sm font-medium px-2">Avanzadi</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="mt-8"
          >
            <a
              href="#about"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/10 backdrop-blur-sm hover:border-white/30 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-foreground animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t  via-transparent to-background/80 pointer-events-none" />
      
      {/* Video Modal */}
      <VideoPlayer 
        isOpen={showVideoModal} 
        onClose={() => setShowVideoModal(false)}
        videoSrc="/videos/omar-presentation.mp4"
      />
    </div>
  );
}