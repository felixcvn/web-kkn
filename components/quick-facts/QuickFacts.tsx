"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Sparkles } from "lucide-react";
import { QUICK_FACTS } from "@/data/kknData";

import TiltCard from "@/components/ui/TiltCard";

export default function QuickFacts() {
  const getIcon = (name: string) => {
    switch (name) {
      case "MapPin":
        return <MapPin className="w-5 h-5 text-darkteal" />;
      case "Calendar":
        return <Calendar className="w-5 h-5 text-darkteal" />;
      case "Users":
        return <Users className="w-5 h-5 text-darkteal" />;
      case "Sparkles":
      default:
        return <Sparkles className="w-5 h-5 text-darkteal" />;
    }
  };

  return (
    <section id="quick-facts" className="py-16 bg-cream-light border-y border-darkteal/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <div className="editorial-badge">
            <span>Ringkasan Pengabdian</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {QUICK_FACTS.map((fact, index) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="w-full"
            >
              <TiltCard className="h-full">
                <div className="editorial-card h-full p-6 flex items-center gap-4 bg-cream/80 border border-darkteal/20 rounded-xl">
                  <div className="w-12 h-12 rounded-lg bg-mint/40 flex items-center justify-center shrink-0 border border-darkteal/15">
                    {getIcon(fact.iconName)}
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-darkteal/70">
                      {fact.label}
                    </span>
                    <span className="font-serif text-2xl font-bold text-softblack mt-0.5">
                      {fact.value}
                    </span>
                    <span className="text-xs text-darkteal font-medium mt-0.5">
                      {fact.subtext}
                    </span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
