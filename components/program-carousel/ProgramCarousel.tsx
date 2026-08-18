"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, X, Sparkles, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import { PROGRAMS_DATA, Program } from "@/data/kknData";

export default function ProgramCarousel() {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -360 : 360;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleOpenProgram = (program: Program) => {
    setSelectedProgram(program);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.5 },
      colors: ["#FFF6B8", "#9EE2DB", "#58B5AA", "#288584"],
    });
  };

  return (
    <section id="programs" className="py-24 bg-cream-light border-y border-darkteal/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-mint text-softblack text-xs font-bold uppercase tracking-wider mb-4 border border-darkteal/15">
              <span>Section 02</span>
              <span>•</span>
              <span>Program Kerja Utama</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-softblack tracking-tight leading-tight">
              Program yang kami jalankan <br />
              <span className="italic text-darkteal font-light">untuk memberi dampak nyata.</span>
            </h2>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full bg-cream hover:bg-darkteal hover:text-cream text-softblack border border-darkteal/20 flex items-center justify-center transition-all duration-200 shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full bg-cream hover:bg-darkteal hover:text-cream text-softblack border border-darkteal/20 flex items-center justify-center transition-all duration-200 shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Program Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {PROGRAMS_DATA.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => handleOpenProgram(program)}
              className="editorial-card snap-start shrink-0 w-[300px] sm:w-[350px] rounded-[28px] overflow-hidden bg-cream cursor-pointer group flex flex-col justify-between border-2 border-darkteal/15 hover:border-darkteal"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-mint text-softblack shadow-md">
                      {program.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-softblack group-hover:text-darkteal transition-colors duration-200 leading-snug">
                    {program.title}
                  </h3>
                  <p className="text-sm text-softblack/75 font-sans mt-3 line-clamp-3 leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Arrow */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-darkteal/10 mt-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-darkteal font-sans">
                  Detail Program
                </span>
                <div className="w-9 h-9 rounded-full bg-mint-light group-hover:bg-darkteal group-hover:text-cream text-darkteal flex items-center justify-center transition-all duration-300 shadow-sm">
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Program Detail Modal Popup */}
      <AnimatePresence>
        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-softblack/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-cream max-w-2xl w-full rounded-[36px] overflow-hidden shadow-floating border-2 border-darkteal/20 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header Image */}
              <div className="relative h-56 sm:h-64 w-full">
                <img
                  src={selectedProgram.image}
                  alt={selectedProgram.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-mint-light text-darkteal hover:bg-mint flex items-center justify-center shadow-md font-bold"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-mint text-softblack shadow-md">
                    {selectedProgram.category}
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-softblack">
                    {selectedProgram.title}
                  </h3>
                  <p className="text-sm font-sans text-darkteal font-semibold mt-1">
                    Target: {selectedProgram.targetAudience}
                  </p>
                </div>

                <div className="space-y-3 text-softblack/85 text-base leading-relaxed">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-darkteal">
                    Gambaran Pelaksanaan
                  </h4>
                  <p>{selectedProgram.fullContent}</p>
                </div>

                <div className="p-5 rounded-2xl bg-mint-light/60 border border-darkteal/20 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-darkteal shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-darkteal">
                      Dampak Program
                    </h5>
                    <p className="text-sm text-softblack font-semibold mt-1">
                      {selectedProgram.impact}
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 bg-cream-light border-t border-darkteal/10 flex justify-end">
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="px-6 py-2.5 rounded-full bg-darkteal text-cream text-sm font-semibold hover:bg-teal transition-colors shadow-md"
                >
                  Tutup Informasi
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
