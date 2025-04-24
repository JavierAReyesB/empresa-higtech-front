/**
 * TypewriterText Component
 *
 * A text animation component that mimics typewriter effect by sequentially
 * displaying characters with a configurable typing speed.
 */

"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface TypewriterTextProps {
  text: string;
}

const TypewriterText = ({ text }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  // Mount effect to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Small delay before starting typing to ensure it starts from zero
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
      }, 150); // typing speed - adjust as needed

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, startTyping]);

  return (
    <span
      className={cn(
        "text-5xl sm:text-xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wide font-dancing whitespace-nowrap border-r-2 animate-caret",
        mounted && theme === "light"
          ? "light geo-hero-title"
          : "text-white border-white"
      )}
    >
      {displayText}
    </span>
  );
};

export default TypewriterText;
