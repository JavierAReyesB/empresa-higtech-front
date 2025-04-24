/**
 * TypewriterText Component
 * 
 * A text animation component that mimics typewriter effect by sequentially
 * displaying characters with a configurable typing speed.
 */

"use client";

import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
}

const TypewriterText = ({ text }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

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
    <span className="text-lg sm:text-xl md:text-7xl text-sm text-foreground/60 tracking-wide font-dancing whitespace-nowrap border-r-2 border-foreground animate-caret">
      {displayText}
    </span>
  );
};

export default TypewriterText;