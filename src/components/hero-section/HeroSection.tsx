"use client";

import { color, motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Linkedin, Instagram, ExternalLink, PlayCircle } from "lucide-react";
import VideoPlayer from "../VideoPlayer";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
  SheetTrigger,
} from "../ui/sheet";

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

// Social Media Drawer Content Component
const SocialMediaDrawer = ({
  title,
  description,
  url,
  icon,
  type = "default",
}: {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  type?: "default" | "instagram" | "linkedin" | "avanzadi";
}) => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-white/30 transition-all cursor-pointer hover:translate-y-[-3px] hover:scale-110">
          {icon}
        </div>
      </SheetTrigger>
      <SheetContent className="w-[350px] sm:w-[400px] bg-background/80 backdrop-blur-lg border border-white/10">
        <SheetHeader>
          <SheetTitle className="text-xl">{title}</SheetTitle>
          <SheetDescription className="text-foreground/70">
            {description}
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6 flex flex-col gap-4">
          {/* iPhone 16 Pro mockup container */}
          <div className="mx-auto w-[300px] h-[600px] bg-black rounded-[45px] p-3 border-[14px] border-gray-800 relative shadow-xl">
            {/* Dynamic Island */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-8 bg-black rounded-b-3xl z-10 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-black border border-gray-700 mr-12"></div>
              <div className="w-4 h-4 rounded-full bg-black border border-gray-700"></div>
            </div>

            {/* Screen content */}
            <div className="w-full h-full rounded-[32px] overflow-hidden bg-white/5 relative flex flex-col">
              {/* Status bar */}
              <div className="h-8 w-full bg-black/30 backdrop-blur-sm flex items-center justify-between px-6 text-[10px] text-white">
                <span>
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-white/70"></div>
                  <div className="w-3 h-3 rounded-full bg-white/70"></div>
                  <div className="w-3 h-3 rounded-full bg-white/70"></div>
                </div>
              </div>

              {/* Main content based on type */}
              {type === "instagram" ? (
                <div className="flex-1 overflow-hidden">
                  {/* Instagram header */}
                  <div className="h-12 bg-black flex items-center justify-between px-4 border-b border-white/10">
                    <span className="text-white font-medium text-lg">
                      Instagram
                    </span>
                    <div className="flex items-center space-x-4">
                      <Instagram size={18} className="text-white" />
                    </div>
                  </div>

                  {/* Instagram content */}
                  <div className="bg-gradient-to-b from-purple-900/20 to-rose-900/20 h-full p-2">
                    <div className="bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm">
                      <img
                        src="/images/pfOmar.jpg"
                        alt="Instagram Preview"
                        className="w-full aspect-square object-cover"
                      />
                      <div className="p-3">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-500 to-purple-600"></div>
                          <span className="text-white text-sm font-medium">
                            omarsomoza1
                          </span>
                        </div>
                        <p className="text-white/80 text-xs">
                          Transformando desafíos empresariales en soluciones
                          digitales exitosas. #DigitalTransformation #Leadership
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : type === "linkedin" ? (
                <div className="flex-1 overflow-hidden">
                  {/* LinkedIn header */}
                  <div className="h-12 bg-[#0A66C2] flex items-center justify-between px-3 border-b border-white/10">
                    <span className="text-white font-medium text-lg">
                      LinkedIn
                    </span>
                    <div className="flex items-center space-x-4">
                      <Linkedin size={18} className="text-white" />
                    </div>
                  </div>

                  {/* LinkedIn content */}
                  <div className="bg-white h-full overflow-y-auto">
                    {/* Profile cover */}
                    <div className="h-16 bg-gradient-to-r from-blue-900 to-blue-600"></div>

                    {/* Profile header */}
                    <div className="relative px-3">
                      <div className="absolute -top-8 left-3 w-16 h-16 rounded-full border-4 border-white overflow-hidden">
                        <img
                          src="/images/pfOmar.jpg"
                          alt="Profile"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="pt-10 pb-3">
                        <h3 className="text-black font-bold text-lg">
                          Omar Somoza
                        </h3>
                        <p className="text-gray-600 text-xs">
                          Project Director & Technical Leader
                        </p>
                        <p className="text-gray-500 text-xs">
                          Founder at Avanzadi
                        </p>
                        <div className="flex items-center text-gray-500 text-xs mt-1">
                          <span>Buenos Aires, Argentina</span>
                          <span className="mx-1">•</span>
                          <span className="text-[#0A66C2] font-medium">
                            500+ connections
                          </span>
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-2 mt-3">
                          <div className="px-4 py-1 rounded bg-[#0A66C2] text-white text-xs font-medium">
                            Connect
                          </div>
                          <div className="px-4 py-1 rounded border border-[#0A66C2] text-[#0A66C2] text-xs font-medium">
                            Message
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* About */}
                    <div className="mt-2 px-3 py-2 border-t border-gray-200">
                      <h4 className="text-black font-bold text-sm">About</h4>
                      <p className="text-gray-600 text-xs mt-1">
                        Project Director & Technical Leader with a solid
                        background in digital transformation. Expert in leading
                        technical teams and delivering high-impact projects.
                      </p>
                    </div>

                    {/* Experience */}
                    <div className="mt-2 px-3 py-2 border-t border-gray-200">
                      <h4 className="text-black font-bold text-sm">
                        Experience
                      </h4>
                      <div className="mt-2">
                        <div className="flex">
                          <div className="w-8 h-8 bg-gray-100 rounded flex-shrink-0"></div>
                          <div className="ml-2">
                            <p className="text-black font-medium text-xs">
                              Founder
                            </p>
                            <p className="text-gray-600 text-xs">Avanzadi</p>
                            <p className="text-gray-500 text-[10px]">
                              2019 - Present
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : type === "avanzadi" ? (
                <div className="flex-1 overflow-hidden">
                  {/* Avanzadi header */}
                  <div className="h-12 bg-black flex items-center justify-between px-3 border-b border-white/10">
                    <span className="text-white font-medium text-lg">
                      Avanzadi
                    </span>
                    <div className="flex items-center space-x-4">
                      <ExternalLink size={18} className="text-white" />
                    </div>
                  </div>

                  {/* Avanzadi content - scaled iframe */}
                  <div className="flex-1 overflow-hidden bg-white">
                    <div className="w-full h-full transform scale-[0.40] origin-top-left">
                      <iframe
                        src={url}
                        className="w-[700px] h-[1200px] border-none"
                        title={title}
                        scrolling="no"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  src={url}
                  className="flex-1 w-full border-none"
                  title={title}
                />
              )}

              {/* iPhone bottom line */}
              <div className="h-[5px] mt-auto mx-auto w-[40%] bg-gray-700 rounded-full"></div>

              {/* iPhone gesture bar */}
              <div className="h-8 bg-transparent backdrop-blur-sm flex items-center justify-around">
                <div className="w-30 h-1 bg-white/80 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
            >
              <ExternalLink size={16} />
              <span>Abrir en nueva pestaña</span>
            </a>
            <SheetClose className="px-4 py-2 rounded-md bg-background/30 text-foreground/70 hover:bg-background/50 transition-colors">
              Cerrar
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
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
  const isSpanish = pathname?.includes("/es");

  // Esperar a que todas las animaciones terminen y luego mostrar el badge
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBadge(true);
    }, 1000); // 4 segundos total para esperar todas las animaciones (incluyendo loader)

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
    <div className="relative h-[100vh] md:h-[100vh] max-h-[800px] md:max-h-none w-full flex items-center justify-center">
      {/* Background Video (Mobile only) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-[center_30%] z-0 md:hidden"
        poster="/images/pfOmar.jpg"
      >
        <source src="/videos/omar-presentation.mp4" type="video/mp4" />
      </video>
      {/* Background Image (Desktop only) */}
      <img
        src="/images/pfOmar.jpg"
        alt="Omar Somoza"
        className="absolute inset-0 w-full h-full object-cover object-[center_30%] z-0 hidden md:block"
      />
      <div className="absolute inset-0 bg-black/60 z-[1]" />{" "}
      {/* Dark overlay */}
      <div className="absolute inset-0 z-[2]">
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
            <p className="text-base sm:text-lg md:text-xl  mb-2 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              {isSpanish
                ? "Transformando desafíos empresariales en soluciones digitales exitosas."
                : "Transforming business challenges into successful digital solutions."}
            </p>
            <p className="text-sm sm:text-base text-foreground/30 mb-5 font-light tracking-wide max-w-xl mx-auto px-4">
              {isSpanish ? "Fundador de Avanzadi" : "Founder at Avanzadi"}
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
                <span className="text-sm font-medium">
                  {isSpanish ? "Ver presentación" : "Watch introduction"}
                </span>
              </motion.button>
            </div>

            {/* Redes sociales con drawers */}
            <div className="flex justify-center space-x-4 mb-8">
              <SocialMediaDrawer
                title="LinkedIn"
                description="Perfil profesional de Omar Somoza"
                url="https://www.linkedin.com/in/omar-somoza-230b71228"
                icon={<Linkedin size={20} className="text-foreground/60" />}
                type="linkedin"
              />

              <SocialMediaDrawer
                title="Instagram"
                description="Cuenta personal de Omar Somoza"
                url="https://www.instagram.com/omarsomoza1/"
                icon={<Instagram size={20} className="text-foreground/60" />}
                type="instagram"
              />

              <SocialMediaDrawer
                title="Avanzadi"
                description="Empresa de desarrollo de software fundada por Omar Somoza"
                url="https://www.avanzadi.com/"
                icon={
                  <span className="text-foreground/60 text-sm font-medium px-2">
                    Avanzadi
                  </span>
                }
                type="avanzadi"
              />
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
      {/* Gradiente superior */}
      <div className="absolute inset-0 bg-gradient-to-t via-transparent to-background/80 pointer-events-none z-[3]" />
      {/* Gradiente inferior para suavizar la transición */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/90 to-transparent pointer-events-none z-[3]" />
      {/* Video Modal */}
      <VideoPlayer
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
        videoSrc="/videos/omar-presentation.mp4"
      />
    </div>
  );
}
