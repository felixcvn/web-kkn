"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, X, GraduationCap, Award, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { MEMBERS_DATA, Member } from "@/data/kknData";

export default function MembersSection() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const handleOpenMember = (member: Member) => {
    setSelectedMember(member);
    confetti({
      particleCount: 35,
      spread: 55,
      origin: { y: 0.6 },
      colors: ["#FFF6B8", "#9EE2DB", "#58B5AA", "#288584"],
    });
  };

  return (
    <section id="members" className="py-24 bg-cream-light border-y border-darkteal/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-mint text-softblack text-xs font-bold uppercase tracking-wider mb-4 border border-darkteal/15">
            <span>Section 04</span>
            <span>•</span>
            <span>Anggota Tim KKN</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-softblack tracking-tight leading-tight">
            Orang-orang di balik <br />
            <span className="italic text-darkteal font-light">perjalanan pengabdian ini.</span>
          </h2>
          <p className="text-softblack/75 text-base sm:text-lg font-sans mt-4">
            10 mahasiswa lintas program studi yang bersatu memadukan ide, karya, dan kehangatan di Bangsalsari.
          </p>
        </div>

        {/* Member Portrait Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {MEMBERS_DATA.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => handleOpenMember(member)}
              className="group cursor-pointer flex flex-col items-center text-center"
            >
              {/* Member Card Frame */}
              <div className="relative w-full aspect-[4/5] rounded-[28px] overflow-hidden bg-cream border-2 border-darkteal/15 shadow-soft group-hover:shadow-hover group-hover:border-darkteal transition-all duration-300 group-hover:-translate-y-2">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darkteal-dark/90 via-darkteal-dark/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Member Badge Overlay */}
                <div className="absolute bottom-4 left-3 right-3 text-cream text-left sm:text-center">
                  <span className="inline-block px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-mint text-softblack mb-1.5 shadow-sm">
                    {member.role}
                  </span>
                  <h3 className="font-serif font-bold text-lg text-cream leading-tight">
                    {member.name}
                  </h3>
                </div>
              </div>

              {/* Subtext */}
              <span className="text-xs text-darkteal font-semibold font-sans mt-2.5">
                {member.faculty}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Member Profile Modal Popup */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-softblack/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-cream max-w-xl w-full rounded-[36px] overflow-hidden shadow-floating border-2 border-darkteal/20 max-h-[90vh] flex flex-col"
            >
              {/* Modal Banner */}
              <div className="relative h-64 sm:h-72 w-full">
                <img
                  src={selectedMember.photo}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-mint text-darkteal hover:bg-mint-dark flex items-center justify-center shadow-md font-bold"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-darkteal-dark/95 via-darkteal-dark/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-cream">
                  <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-mint text-softblack mb-2 shadow-sm">
                    {selectedMember.role}
                  </span>
                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-cream">
                    {selectedMember.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-mint-light font-sans mt-1">
                    <GraduationCap className="w-4 h-4 text-mint" />
                    <span>{selectedMember.faculty}</span>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-darkteal mb-2">
                    Profil & Biografi
                  </h4>
                  <p className="text-softblack/85 font-sans text-base leading-relaxed">
                    {selectedMember.bio}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-cream-light border border-darkteal/15 space-y-1">
                  <div className="flex items-center gap-2 text-darkteal text-xs font-bold uppercase tracking-wider">
                    <Award className="w-4 h-4" />
                    <span>Tanggung Jawab Utama</span>
                  </div>
                  <p className="text-sm text-softblack font-semibold">
                    {selectedMember.responsibility}
                  </p>
                </div>

                {selectedMember.quote && (
                  <div className="p-4 rounded-2xl bg-mint-light/60 border border-darkteal/20 italic text-sm text-softblack font-serif">
                    "{selectedMember.quote}"
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-cream-light border-t border-darkteal/10 flex items-center justify-between">
                <a
                  href={`https://instagram.com/${selectedMember.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-softblack hover:text-darkteal transition-colors"
                >
                  <Instagram className="w-4 h-4 text-darkteal" />
                  <span>{selectedMember.instagram}</span>
                </a>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="px-6 py-2.5 rounded-full bg-darkteal text-cream text-sm font-semibold hover:bg-teal shadow-md"
                >
                  Tutup Profil
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
