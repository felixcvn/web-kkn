"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { KKN_INFO } from "@/data/kknData";
import PortraitCarousel from "./PortraitCarousel";
import TypewriterHeadline from "./TypewriterHeadline";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // 3D Perspective Scroll Unfold Transform Values
  const rotateX = useTransform(scrollYProgress, [0, 0.35], [16, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.35], [0.92, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.35], [-25, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0.9, 1]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen pt-28 pb-10 flex flex-col justify-between bg-cream overflow-hidden"
      style={{ perspective: "1200px" }}
    >
      {/* Watermark Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none -z-10 filter sepia-[0.35] hue-rotate-15"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/80 via-transparent to-cream -z-10 pointer-events-none" />

      {/* 3D Scroll Unfold Stage */}
      <motion.div
        style={{
          rotateX,
          scale,
          translateY,
          opacity,
          transformStyle: "preserve-3d",
        }}
        className="w-full flex flex-col justify-between flex-1 transition-transform duration-75"
      >
        {/* Top Header Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center relative z-10 flex flex-col items-center">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="editorial-badge mb-6"
          >
            <MapPin className="w-3.5 h-3.5 text-darkteal shrink-0" />
            <span>{KKN_INFO.heroTagline}</span>
            <span className="text-darkteal/40">•</span>
            <span className="font-normal text-darkteal">
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
            className="max-w-2xl mx-auto text-base sm:text-lg text-softblack/80 font-sans leading-relaxed mb-8 font-medium"
          >
            {KKN_INFO.heroDescription}
          </motion.p>

          {/* Action Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-8"
          >
            <a
              href="#about"
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-lg bg-darkteal text-cream hover:bg-teal text-xs font-bold uppercase tracking-wider transition-all shadow-sm hover:-translate-y-0.5"
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
      </motion.div>
    </section>
  );
}
