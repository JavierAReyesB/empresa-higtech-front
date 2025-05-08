"use client";

import type React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Globe } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Linkedin,
  Github,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Sun,
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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`relative w-full border-t border-border/40 bg-background ${
        isDarkMode ? "dark" : ""
      }`}
      id="contacto"
    >
      {/* Back to top button */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transform">
        <motion.button
          onClick={scrollToTop}
          className="flex h-12 w-24 items-center justify-center rounded-t-full border border-border/40 bg-background shadow-sm transition-all hover:bg-muted"
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: showScrollTop ? 1 : 0.8 }}
        >
          <ChevronUp size={20} className="text-primary" />
        </motion.button>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Contact Section - Now as main focus */}
        <div className="mx-auto mb-16 max-w-4xl">
          <motion.div
            className="rounded-xl border border-border/40 bg-background p-8 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h3 className="mb-4 text-3xl md:text-4xl font-bold geo-text-gradient">
                {isSpanish ? "Contacto" : "Contact Me"}
              </h3>
              <p className="mb-6 text-muted-foreground max-w-2xl mx-auto">
                {isSpanish
                  ? "¿Interesado en trabajar juntos? Completa el siguiente formulario y me pondré en contacto contigo lo antes posible."
                  : "Interested in working together? Fill out the form below and I'll get back to you as soon as possible."}
              </p>

              <form
                onSubmit={handleSubmit}
                className="mx-auto grid grid-cols-1 gap-4 max-w-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      placeholder={isSpanish ? "Nombre" : "Name"}
                      required
                      className="h-11 w-full rounded-md border-border/40 bg-background/50"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder={isSpanish ? "Correo electrónico" : "Email"}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-11 w-full rounded-md border-border/40 bg-background/50"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <Input
                    type="text"
                    placeholder={isSpanish ? "Asunto" : "Subject"}
                    required
                    className="h-11 w-full rounded-md border-border/40 bg-background/50"
                  />
                </div>

                <div>
                  <textarea
                    placeholder={isSpanish ? "Mensaje" : "Message"}
                    required
                    rows={4}
                    className="w-full rounded-md border border-border/40 bg-background/50 p-3"
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="h-11 w-full rounded-md"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? isSpanish
                        ? "Enviando..."
                        : "Sending..."
                      : isSpanish
                      ? "Enviar mensaje"
                      : "Send message"}
                  </Button>
                </motion.div>
              </form>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.p
                    className="mt-4 text-sm text-green-600"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {isSpanish
                      ? "¡Gracias por tu mensaje! Me pondré en contacto contigo pronto."
                      : "Thank you for your message! I'll get back to you soon."}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Social links and direct contact */}
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <a
                  href={footerData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-foreground/60 hover:text-primary transition-colors"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={footerData.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-foreground/60 hover:text-primary transition-colors"
                >
                  <Instagram size={18} />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.avanzadi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-foreground/60 hover:text-primary transition-colors"
                >
                  <Globe size={18} />
                  <span>Avanzadi</span>
                </a>
                <a
                  href={`mailto:${footerData.contactEmail}`}
                  className="flex items-center space-x-2 text-foreground/60 hover:text-primary transition-colors"
                >
                  <Mail size={18} />
                  <span>{footerData.contactEmail}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <Separator className="my-8 opacity-30" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between space-y-4 text-center text-sm text-muted-foreground md:flex-row md:space-y-0 md:text-left">
          <div>
            {footerData.copyright}
          </div>
          <div className="text-sm font-light italic text-foreground/50">
            {isSpanish
              ? "Construyamos juntos el futuro de la tecnología."
              : "Let's build the future of tech together."}
          </div>
          <div className="flex items-center space-x-1">
            <motion.a
              href="https://www.avanzadi.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground/60 transition-colors hover:text-primary"
              whileHover={{ y: -1 }}
            >
              Avanzadi
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}