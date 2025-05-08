"use client";

import type React from "react";
import { useState, useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Globe } from "lucide-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Switch } from "@/components/ui/switch";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Label } from "@/components/ui/label";
import {
  Linkedin,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Github,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Twitter,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Youtube,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Mail,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Phone,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  MapPin,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Sun,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Moon,
  ChevronUp,
  Instagram,
} from "lucide-react";
import { useProfile } from "@/lib/hooks/useProfile";

export default function Footer() {
  const pathname = usePathname();
  const isSpanish = pathname?.includes("/es");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Get profile data from resources
  const { data: profile } = useProfile();
  // Use language-specific content when available
  const footerData = isSpanish && profile.footer.es ? 
    { ...profile.footer, ...profile.footer.es } : profile.footer;

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");

      // Reset submitted state after a delay
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <footer id="contacto" className="py-12 mt-10 relative">
      <div className="mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20">
          {/* Column 1: Logo and Description */}
          <div className="space-y-6">
            <div className="text-xl font-semibold">{profile.name}</div>
            <p className="text-sm text-foreground/70 max-w-xs">
              {profile.role}
            </p>
            <div className="flex items-center space-x-3">
              <a
                href={profile.footer.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-6">
            <div className="text-sm font-semibold uppercase text-foreground/80">
              {isSpanish ? "Servicios" : "Services"}
            </div>
            <nav className="flex flex-col space-y-3">
              <a
                href="#"
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                AI {isSpanish ? "Integración" : "Integration"}
              </a>
              <a
                href="#"
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                {isSpanish ? "Desarrollo Web" : "Web Development"}
              </a>
              <a
                href="#"
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                {isSpanish ? "Consultoría técnica" : "Technical Consulting"}
              </a>
            </nav>
          </div>

          {/* Column 3: Pages */}
          <div className="space-y-6">
            <div className="text-sm font-semibold uppercase text-foreground/80">
              {isSpanish ? "Páginas" : "Pages"}
            </div>
            <nav className="flex flex-col space-y-3">
              <a
                href="#"
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                {isSpanish ? "Inicio" : "Home"}
              </a>
              <a
                href="#about"
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                {isSpanish ? "Sobre mí" : "About"}
              </a>
              <a
                href="#AiSection"
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                AI {isSpanish ? "Sección" : "Section"}
              </a>
              <a
                href="#contacto"
                className="text-sm text-foreground/70 hover:text-foreground transition-colors"
              >
                {isSpanish ? "Contacto" : "Contact"}
              </a>
            </nav>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-6">
            <div className="text-sm font-semibold uppercase text-foreground/80">
              {isSpanish ? "Mantente Informado" : "Stay Updated"}
            </div>
            <div className="relative">
              <form onSubmit={handleSubmit} className="group">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={isSpanish ? "Ingresa tu email..." : "Enter your email..."}
                  className="pr-12 border-white/10 bg-transparent text-foreground/70 focus:ring-0 focus:border-white/20"
                  required
                  disabled={isSubmitting || isSubmitted}
                />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-1 top-1 bg-transparent hover:bg-white/10 text-foreground"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 border-2 border-foreground/20 border-t-foreground/80 rounded-full animate-spin" />
                  ) : isSubmitted ? (
                    <span>{isSpanish ? "¡Enviado!" : "Sent!"}</span>
                  ) : (
                    <span>{isSpanish ? "Enviar" : "Send"}</span>
                  )}
                </Button>
              </form>
              <p className="mt-2 text-xs text-foreground/50">
                {isSpanish
                  ? "Recibe actualizaciones sobre proyectos y servicios."
                  : "Receive updates about projects and services."}
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-sm text-foreground/50 mb-4 md:mb-0">
            {footerData.copyright}
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-xs md:text-sm text-foreground/50">
              {isSpanish 
                ? "Hecho con pasión y tecnología moderna" 
                : "Made with passion and modern tech"}
            </div>
            <div className="h-4 w-[1px] bg-white/10" />
            <a
              href="#"
              className="text-xs md:text-sm text-foreground/50 hover:text-foreground transition-colors"
            >
              {isSpanish ? "Política de Privacidad" : "Privacy Policy"}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-foreground/10 backdrop-blur-lg border border-white/10 text-foreground/80 hover:bg-foreground/20 transition-colors shadow-lg"
          >
            <ChevronUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Current year calculation (could be used in future) */}
      {(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const currentYear = new Date().getFullYear();
        return null;
      })()}
    </footer>
  );
}