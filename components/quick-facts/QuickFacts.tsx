"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Sparkles, HeartHandshake } from "lucide-react";
import confetti from "canvas-confetti";
import { QUICK_FACTS } from "@/data/kknData";

export default function QuickFacts() {
  const [clickedFact, setClickedFact] = useState<string | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case "MapPin":
        return <MapPin className="w-6 h-6 text-darkteal" />;
      case "Calendar":
        return <Calendar className="w-6 h-6 text-darkteal" />;
      case "Users":
        return <Users className="w-6 h-6 text-darkteal" />;
      case "Sparkles":
      default:
        return <Sparkles className="w-6 h-6 text-darkteal" />;
    }
  };

  const handleFactClick = (label: string) => {
    setClickedFact(label);
    confetti({
      particleCount: 35,
      spread: 50,
      origin: { y: 0.6 },
      colors: ["#FFF6B8", "#9EE2DB", "#58B5AA", "#288584"],
    });
    setTimeout(() => setClickedFact(null), 2500);
  };

  return (
    <section id="quick-facts" className="py-16 bg-cream-light border-y border-darkteal/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-mint-light text-darkteal text-xs font-semibold uppercase tracking-wider border border-darkteal/15">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Fakta Pengabdian • Klik untuk Efek Seru!</span>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUICK_FACTS.map((fact, index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleFactClick(fact.label)}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="editorial-card p-6 rounded-[28px] flex items-center gap-4 bg-cream/70 cursor-pointer relative group overflow-hidden border border-darkteal/15 hover:border-darkteal shadow-soft"
            >
              {/* Background Glow Effect on Click */}
              {clickedFact === fact.label && (
                <motion.div
                  initial={{ scale: 0, opacity: 0.5 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-mint rounded-full pointer-events-none"
                />
              )}

              <div className="w-14 h-14 rounded-2xl bg-mint-light group-hover:bg-mint flex items-center justify-center shrink-0 border border-darkteal/10 transition-colors shadow-sm">
                {getIcon(fact.iconName)}
              </div>

              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-wider text-darkteal/70">
                  {fact.label}
                </span>
                <span className="font-serif text-2xl font-bold text-softblack mt-0.5 group-hover:text-darkteal transition-colors">
                  {fact.value}
                </span>
                <span className="text-xs text-darkteal font-medium mt-0.5">
                  {fact.subtext}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
