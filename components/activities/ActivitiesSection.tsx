"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, X, ArrowUpRight } from "lucide-react";
import confetti from "canvas-confetti";
import { ACTIVITIES_DATA, Activity } from "@/data/kknData";

export default function ActivitiesSection() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  const handleOpenActivity = (activity: Activity) => {
    setSelectedActivity(activity);
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.6 },
      colors: ["#FFF6B8", "#9EE2DB", "#288584"],
    });
  };

  return (
    <section id="activities" className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-mint text-softblack text-xs font-bold uppercase tracking-wider mb-4 border border-darkteal/15">
            <span>Section 03</span>
            <span>•</span>
            <span>Catatan Lapangan & Kegiatan</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-softblack tracking-tight leading-tight">
            Setiap momen, <br />
            <span className="italic text-darkteal font-light">menjadi kenangan mendalam.</span>
          </h2>
        </div>

        {/* Asymmetric Activity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACTIVITIES_DATA.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleOpenActivity(activity)}
              className="editorial-card rounded-[28px] overflow-hidden bg-cream-light cursor-pointer group flex flex-col justify-between border-2 border-darkteal/15 hover:border-darkteal"
            >
              <div>
                {/* Cover Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={activity.coverImage}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkteal-dark/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-cream">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-mint text-softblack shadow-md">
                      {activity.category}
                    </span>
                    <span className="text-xs font-semibold flex items-center gap-1 text-cream bg-darkteal/80 px-2.5 py-0.5 rounded-full backdrop-blur-md">
                      <Calendar className="w-3.5 h-3.5" />
                      {activity.date}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-softblack group-hover:text-darkteal transition-colors leading-snug">
                    {activity.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-darkteal font-semibold mt-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{activity.location}</span>
                  </div>
                  <p className="text-sm text-softblack/75 font-sans mt-3 line-clamp-3 leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-darkteal/10 mt-auto">
                <span className="text-xs font-bold uppercase tracking-wider text-darkteal">
                  Lihat Dokumentasi
                </span>
                <ArrowUpRight className="w-4 h-4 text-darkteal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Activity Detail Modal */}
      <AnimatePresence>
        {selectedActivity && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-softblack/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-cream max-w-2xl w-full rounded-[36px] overflow-hidden shadow-floating border-2 border-darkteal/20 max-h-[90vh] flex flex-col"
            >
              <div className="relative h-64 w-full">
                <img
                  src={selectedActivity.coverImage}
                  alt={selectedActivity.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedActivity(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-mint text-darkteal hover:bg-mint-dark flex items-center justify-center shadow-md font-bold"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
                <div className="flex items-center gap-3 text-xs text-darkteal font-bold uppercase tracking-wider">
                  <span className="px-2.5 py-0.5 rounded-full bg-mint text-softblack">{selectedActivity.category}</span>
                  <span>•</span>
                  <span>{selectedActivity.date}</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-softblack">
                  {selectedActivity.title}
                </h3>
                <div className="flex items-center gap-1.5 text-sm text-darkteal font-semibold">
                  <MapPin className="w-4 h-4 text-darkteal" />
                  <span>{selectedActivity.location}</span>
                </div>
                <p className="text-softblack/85 font-sans text-base leading-relaxed pt-2">
                  {selectedActivity.description}
                </p>
              </div>

              <div className="p-6 bg-cream-light border-t border-darkteal/10 flex justify-end">
                <button
                  onClick={() => setSelectedActivity(null)}
                  className="px-6 py-2.5 rounded-full bg-darkteal text-cream text-sm font-semibold hover:bg-teal shadow-md"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
