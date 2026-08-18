"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { KKN_INFO } from "@/data/kknData";
import PortraitCarousel from "./PortraitCarousel";
import TypewriterHeadline from "./TypewriterHeadline";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-10 flex flex-col justify-between bg-cream overflow-hidden"
    >
      {/* 1. HIGH-VISIBILITY Transparent Documentary Photography Watermark (Opacity 16%) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none -z-10 filter sepia-[0.35] hue-rotate-15"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/80 via-transparent to-cream -z-10 pointer-events-none" />

      {/* 2. Distinct Floating Ambient Color Glow Orbs */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-mint/50 rounded-full blur-2xl -z-10 pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-teal/35 rounded-full blur-2xl -z-10 pointer-events-none"
      />

      {/* 3. Clearly Visible Watermark Typography */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 font-serif text-[110px] sm:text-[160px] md:text-[210px] font-bold text-darkteal/10 whitespace-nowrap pointer-events-none select-none tracking-widest -z-10 leading-none">
        BANGSALSARI
      </div>

      {/* Top Header Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center relative z-10">
        {/* Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream-light/95 border-2 border-darkteal/20 shadow-md mb-6 backdrop-blur-md"
        >
          <MapPin className="w-4 h-4 text-darkteal" />
          <span className="text-xs font-bold text-softblack uppercase tracking-widest">
            {KKN_INFO.heroTagline}
          </span>
          <span className="w-2 h-2 rounded-full bg-darkteal animate-pulse" />
          <span className="text-xs font-semibold text-darkteal">
            {KKN_INFO.district}, {KKN_INFO.regency}
          </span>
        </motion.div>

        {/* Dynamic Typewriter Motion Headline */}
        <TypewriterHeadline />

        {/* Short Subtext Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-softblack font-sans leading-relaxed mb-7 font-medium"
        >
          {KKN_INFO.heroDescription}
        </motion.p>

        {/* Action Button Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-8"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-darkteal text-cream hover:bg-teal text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-hover hover:-translate-y-0.5"
          >
            <span>Jelajahi Cerita KKN Bangsalsari</span>
            <ArrowUpRight className="w-4 h-4 text-cream" />
          </a>
        </motion.div>
      </div>

      {/* Full-bleed Edge-to-Edge Concave 3D Carousel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="w-full relative z-10"
      >
        <PortraitCarousel />
      </motion.div>
    </section>
  );
}
