"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useProfile } from "@/lib/hooks/useProfile";

export default function AboutSection() {
  const { theme } = useTheme();
  const pathname = usePathname();
  const isSpanish = pathname?.includes("/es");
  
  // Get profile data from resources
  const { data: profile } = useProfile();
  const aboutData = profile.about;

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
  };

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center py-24 px-8 text-center backdrop-blur-sm border border-white/10 rounded-xl mx-4 my-8 geo-card"
    >
      <motion.h2
        custom={0}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-8 geo-text-gradient"
      >
        {aboutData.title}
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center justify-center mb-10 gap-10">
        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/10 shadow-lg"
        >
          <img
            src={profile.profileImage2}
            alt={profile.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:w-1/2 text-left"
        >
          <p className="text-lg text-foreground/70 mb-4">
            {aboutData.description}
          </p>

          <p className="text-lg text-foreground/70">
            {aboutData.history}
          </p>
        </motion.div>
      </div>

      <motion.div
        custom={1}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl"
      >
        {aboutData.skills.map((skill, index) => (
          <div key={index} className="backdrop-blur-sm rounded-lg p-5 border border-white/10 geo-card hover:border-white/20 transition-all">
            <h3 className="text-xl font-semibold mb-2 text-foreground">
              {skill}
            </h3>
            <p className="text-sm text-foreground/70">
              {/* Add descriptions if available in the profile */}
              {isSpanish 
                ? "Habilidad profesional clave"
                : "Key professional skill"}
            </p>
          </div>
        ))}
      </motion.div>

      <motion.p
        custom={2}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-xl max-w-4xl mt-10 text-foreground/70 italic"
      >
        {`"${profile.name} - ${profile.role}"`}
      </motion.p>
    </section>
  );
}