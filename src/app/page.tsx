"use client";

import { motion } from "framer-motion";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import AISection from "@/components/ai-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { usePathname } from "next/navigation";
import { useProfile } from "@/lib/hooks/useProfile";

// Animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

export default function Home() {
  // These variables are unused in this component but needed for proper page structure
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const pathname = usePathname();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //  const isSpanish = pathname?.includes("/es");

  // Get profile data - used indirectly by child components
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //const { data: profile } = useProfile();

  return (
    <main className="flex flex-col min-h-screen overflow-visible bg-transparent text-white">
      {/* Hero Section */}
      <div className="mb-20">
        <HeroSection />
      </div>

      {/* About Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="mb-20"
      >
        <AboutSection />
      </motion.div>

      {/* Services Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="mb-20"
      >
        <ServicesSection />
      </motion.div>

      {/* AI Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="mb-20"
      >
        <AISection />
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
        className="mb-20"
      >
        <TestimonialsSection />
      </motion.div>
    </main>
  );
}
