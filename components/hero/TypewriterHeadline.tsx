"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PHRASES = [
  "Memberi Makna.",
  "Mengabdi Tulus.",
  "Tumbuh Bersama.",
  "Mengukir Kenangan.",
];

export default function TypewriterHeadline() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const targetPhrase = PHRASES[phraseIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setCurrentText(targetPhrase.substring(0, currentText.length + 1));
        setTypingSpeed(110);

        if (currentText === targetPhrase) {
          // Pause at full phrase before deleting
          setTypingSpeed(2200);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setCurrentText(targetPhrase.substring(0, currentText.length - 1));
        setTypingSpeed(60);

        if (currentText === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
          setTypingSpeed(300);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, typingSpeed]);

  const wordsLine1 = ["Satu", "Tim,", "Banyak", "Cerita."];

  return (
    <div className="max-w-7xl mx-auto mb-5 text-center px-2">
      <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[82px] font-normal text-softblack tracking-tight leading-[1.12]">
        {/* Line 1: Kept strictly on 1 single line */}
        <span className="block whitespace-nowrap overflow-hidden">
          <span className="inline-flex justify-center gap-x-[0.25em]">
            {wordsLine1.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </span>
        </span>

        {/* Line 2: Kept strictly on line 2 with Dark Teal theme */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="italic font-light text-darkteal block whitespace-nowrap overflow-hidden mt-1"
        >
          <span className="inline-flex items-center justify-center">
            <span>Bersama,&nbsp;</span>
            <span className="relative inline-block text-darkteal font-light">
              {currentText}
              {/* Blinking Cursor */}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-[4px] h-[0.75em] bg-darkteal ml-1 align-baseline rounded-full"
              />
            </span>
          </span>
        </motion.span>
      </h1>
    </div>
  );
}
