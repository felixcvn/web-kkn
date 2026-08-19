"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, BookOpen, HeartHandshake } from "lucide-react";
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
  };

  return (
    <section id="about" className="py-24 bg-cream relative overflow-hidden">
      {/* Transparent Photography Watermark */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none -z-10 filter sepia-[0.3]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/80 to-cream -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="editorial-badge mb-4">
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

            {/* Interactive Note */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              onClick={handleNextQuote}
              className="p-6 rounded-2xl bg-cream-light border border-darkteal/20 shadow-sm relative overflow-hidden cursor-pointer group"
            >
              <div className="absolute top-3 right-3 text-darkteal/20 group-hover:text-darkteal/40 transition-colors">
                <HeartHandshake className="w-12 h-12" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-darkteal font-sans block mb-1">
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
            <div className="relative rounded-2xl overflow-hidden shadow-card border-2 border-darkteal/15">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80"
                alt="KKN Bangsalsari Team & Warga"
                className="w-full h-[440px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-softblack/60 via-transparent to-transparent" />

              {/* Photo Caption Tape Overlay */}
              <div className="absolute top-4 left-4 bg-cream-light px-3.5 py-1.5 rounded-md border border-darkteal/20 text-xs font-bold text-softblack shadow-md">
                📍 Desa Bangsalsari, Jember
              </div>
            </div>

            {/* Floating Quote Badge */}
            <div className="absolute -bottom-8 -left-4 sm:-left-8 max-w-sm p-5 rounded-2xl bg-cream-light border-2 border-darkteal/25 shadow-xl z-20">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-darkteal text-cream shrink-0 shadow-sm">
                  <Quote className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-serif italic font-bold text-softblack text-base sm:text-lg leading-snug">
                    "{KKN_INFO.aboutQuote}"
                  </p>
                  <p className="text-xs font-sans text-darkteal font-extrabold uppercase tracking-wider mt-2">
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
