/**

 * HeroSection Component

 *

 * The main landing section featuring responsive design with animated text,

 * elegant shape elements, social media integration, and video presentation.

 */

"use client";

import { motion } from "framer-motion";

import { Pacifico } from "next/font/google";

import { useTheme } from "next-themes";

import { useState, useEffect } from "react";

import { usePathname } from "next/navigation";

import { Linkedin, Instagram, ExternalLink, PlayCircle } from "lucide-react";

import VideoPlayer from "../VideoPlayer";

import { cn } from "@/lib/utils";

// Import the extracted components

import TypewriterText from "./TypewriterText";

import ElegantShape from "./ElegantShape";

import SocialMediaDrawer from "./SocialMediaDrawer";

// Import the profile hook

import { useProfile } from "@/lib/hooks/useProfile";

const pacifico = Pacifico({
  subsets: ["latin"],

  weight: ["400"],

  variable: "--font-pacifico",
});

export default function HeroSection({
  badge,

  title1,

  title2,
}: {
  badge?: string;

  title1?: string;

  title2?: string;
}) {
  const { theme, resolvedTheme } = useTheme();

  const [showBadge, setShowBadge] = useState(false);

  const [showVideoModal, setShowVideoModal] = useState(false);

  const pathname = usePathname();

  const isSpanish = pathname?.includes("/es");

  const [mounted, setMounted] = useState(false);

  // Get profile data from resources

  const { data: profile } = useProfile();

  // Wait for all animations to finish and then show the badge

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBadge(true);
    }, 1000); // 4 seconds total to wait for all animations (including loader)

    return () => clearTimeout(timer);
  }, []);

  // Only enable client-side theme detection after hydration to prevent mismatch

  useEffect(() => {
    setMounted(true);
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

  // Use the geo-text-gradient class for all initial renders to prevent hydration mismatch

  // Only switch to theme-conditional classes after client-side mounting

  const titleClassName =
    mounted && theme === "light" ? "geo-hero-title" : "geo-text-gradient";

  // Get text content from profile resources

  const name = profile.name;

  // Use language-specific content when available
  const heroData =
    isSpanish && profile.hero.es ? profile.hero.es : profile.hero;

  const displayBadge = badge || name;

  const displayTitle1 = title1 || "Soluciones";

  const displayTitle2 = title2 || "digitales eficientes";

  return (
    <div className="relative h-[100vh] md:h-[100vh] max-h-[800px] md:max-h-none w-full flex items-center justify-center">
      {/* Background Video (Mobile only) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-[center_30%] z-0 md:hidden"
        poster={profile.profileImage}
      >
        <source src={profile.videoPresentation} type="video/mp4" />
      </video>
      {/* Background Image (Desktop only) */}
      <img
        src={profile.profileImage2}
        alt={profile.name}
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
              <TypewriterText text={displayBadge} />
            </motion.div>
          )}

          <motion.div custom={0} initial="hidden" animate="visible">
            <h1 className="text-xl sm:text-xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
              {/* Using the same class for server and client initial render */}

              <div
                className={cn(
                  "text-4xl sm:text-5xl md:text-8xl font-bold",

                  titleClassName
                )}
              >
                {heroData.greeting}
              </div>

              {/* Using the same class for server and client initial render */}

              <div
                className={cn("text-lg sm:text-xl md:text-5xl", titleClassName)}
              >
                {heroData.title}
              </div>
            </h1>
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl mb-2 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              {heroData.description}
            </p>

            <p className="text-sm sm:text-base text-foreground/30 mb-5 font-light tracking-wide max-w-xl mx-auto px-4">
              {heroData.subtitle}
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

            {/* Social media with drawers */}

            <div className="flex justify-center space-x-4 mb-8">
              <SocialMediaDrawer
                title="LinkedIn"
                description={`Perfil profesional de ${profile.name}`}
                url={profile.footer.socialLinks.linkedin}
                icon={<Linkedin size={20} className="text-foreground/60" />}
                type="linkedin"
              />

              <SocialMediaDrawer
                title="Instagram"
                description={`Cuenta personal de ${profile.name}`}
                url="https://www.instagram.com/"
                icon={<Instagram size={20} className="text-foreground/60" />}
                type="instagram"
              />

              <SocialMediaDrawer
                title="Avanzadi"
                description={`Empresa de desarrollo de software fundada por ${profile.name}`}
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
      {/* Top gradient */}
      <div className="absolute inset-0 bg-gradient-to-t via-transparent to-background/80 pointer-events-none z-[3]" />
      {/* Bottom gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/90 to-transparent pointer-events-none z-[3]" />
      {/* Video Modal */}
      <VideoPlayer
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
        videoSrc={profile.videoPresentation}
      />
    </div>
  );
}
