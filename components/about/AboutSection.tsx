"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, BookOpen, HeartHandshake, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { KKN_INFO } from "@/data/kknData";

export default function AboutSection() {
  const [activeQuote, setActiveQuote] = useState(0);

  const quotes = [
    "Bergerak bersama, bermakna selamanya.",
    "Bukan sekadar program, tapi merajut persaudaraan di Bangsalsari.",
    "Senyum warga dan kehangatan posko adalah energi pengabdian kami.",
  ];

  const handleNextQuote = () => {
    setActiveQuote((prev) => (prev + 1) % quotes.length);
    confetti({
      particleCount: 25,
      spread: 40,
      origin: { y: 0.5 },
      colors: ["#FAF6E8", "#9EE2DB", "#288584"],
    });
  };

  return (
    <section id="about" className="py-24 bg-cream relative overflow-hidden">
      {/* Clearly Visible Transparent Photography Watermark (Opacity 14%) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none -z-10 filter sepia-[0.3]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/80 to-cream -z-10 pointer-events-none" />

      {/* Floating Ambient Glow Orbs */}
      <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-mint/45 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-mint text-darkteal text-xs font-bold uppercase tracking-wider mb-4 border border-darkteal/15 shadow-sm">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Jurnal Pengabdian 01</span>
              <span>•</span>
              <span>Bangsalsari</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-softblack tracking-tight leading-tight">
              {KKN_INFO.aboutHeading}
            </h2>
          </div>

          <p className="text-sm font-sans text-darkteal font-bold italic max-w-xs border-l-2 border-darkteal pl-4 py-1">
            "Bukan sekadar menggugurkan kewajiban akademik, melainkan merajut persaudaraan di bumi Bangsalsari."
          </p>
        </div>

        {/* Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Story Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-base sm:text-lg text-softblack font-sans leading-relaxed"
          >
            <p className="first-letter:text-6xl first-letter:font-serif first-letter:font-normal first-letter:text-darkteal first-letter:float-left first-letter:mr-4 first-letter:leading-none">
              {KKN_INFO.aboutBodyParagraph1}
            </p>
            <p className="text-softblack/80 font-medium">
              {KKN_INFO.aboutBodyParagraph2}
            </p>

            {/* Interactive Handwritten Note */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              onClick={handleNextQuote}
              className="p-6 rounded-[28px] bg-cream-light border-2 border-darkteal/20 shadow-soft relative overflow-hidden cursor-pointer group"
            >
              <div className="absolute top-3 right-3 text-darkteal/20 group-hover:text-darkteal/40 transition-colors">
                <HeartHandshake className="w-14 h-14" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-darkteal font-sans flex items-center gap-1.5 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-darkteal" />
                Catatan Posko Utama (Klik untuk Ganti Kutipan)
              </span>
              <p className="font-serif italic text-softblack text-lg sm:text-xl font-medium">
                "{quotes[activeQuote]}"
              </p>
            </motion.div>
          </motion.div>

          {/* Documentary Photo Framing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-[36px] overflow-hidden shadow-card border-4 border-cream-light transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80"
                alt="KKN Bangsalsari Team & Warga"
                className="w-full h-[440px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-softblack/60 via-transparent to-transparent" />

              {/* Photo Caption Tape Overlay */}
              <div className="absolute top-4 left-4 bg-mint/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-darkteal/20 text-xs font-bold text-softblack shadow-sm">
                📍 Desa Bangsalsari, Jember
              </div>
            </div>

            {/* Floating Quote Badge */}
            <div className="absolute -bottom-8 -left-4 sm:-left-8 max-w-sm p-6 rounded-[28px] bg-cream-light/95 backdrop-blur-md shadow-floating border-2 border-darkteal/20 z-20 transform -rotate-1">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-full bg-mint text-darkteal shrink-0 shadow-sm">
                  <Quote className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-serif italic font-semibold text-softblack text-base sm:text-lg leading-snug">
                    "{KKN_INFO.aboutQuote}"
                  </p>
                  <p className="text-xs font-sans text-darkteal font-bold uppercase tracking-wider mt-2">
                    — KKN Bangsalsari 2026
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
