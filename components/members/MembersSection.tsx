"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, X, GraduationCap, Award } from "lucide-react";
import { MEMBERS_DATA, Member } from "@/data/kknData";

import TiltCard from "@/components/ui/TiltCard";

export default function MembersSection() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const handleOpenMember = (member: Member) => {
    setSelectedMember(member);
  };

  return (
    <section id="members" className="py-24 bg-cream-light border-y border-darkteal/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="editorial-badge mb-4">
            <span>04</span>
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
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="w-full"
            >
              <TiltCard onClick={() => handleOpenMember(member)} className="w-full">
                <div className="group cursor-pointer flex flex-col items-center text-center">
                  {/* Member Card Frame */}
                  <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-cream border border-darkteal/20 shadow-sm group-hover:shadow-md group-hover:border-darkteal/50 transition-all duration-300">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover object-[center_15%] group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-darkteal-dark/95 via-darkteal-dark/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                    {/* Member Badge Overlay */}
                    <div className="absolute bottom-4 left-3 right-3 text-cream text-left sm:text-center">
                      <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-mint text-softblack mb-1.5 shadow-sm">
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
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Member Profile Modal Popup */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-softblack/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-cream max-w-xl w-full rounded-2xl overflow-hidden shadow-floating border border-darkteal/20 max-h-[90vh] flex flex-col"
            >
              {/* Modal Banner */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden">
                <img
                  src={selectedMember.photo}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover object-[center_15%]"
                />
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-md bg-cream-light text-darkteal hover:bg-mint border border-darkteal/20 flex items-center justify-center shadow-md font-bold transition-transform hover:scale-105"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-darkteal-dark/95 via-darkteal-dark/25 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 text-cream">
                  <span className="inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-mint text-softblack mb-2 shadow-sm">
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

                <div className="p-4 rounded-xl bg-cream-light border border-darkteal/15 space-y-1">
                  <div className="flex items-center gap-2 text-darkteal text-xs font-bold uppercase tracking-wider">
                    <Award className="w-4 h-4" />
                    <span>Tanggung Jawab Utama</span>
                  </div>
                  <p className="text-sm text-softblack font-semibold">
                    {selectedMember.responsibility}
                  </p>
                </div>

                {selectedMember.quote && (
                  <div className="p-4 rounded-xl bg-mint-light/40 border border-darkteal/20 italic text-sm text-softblack font-serif">
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
                  className="px-5 py-2 rounded-lg bg-darkteal text-cream text-xs font-bold uppercase tracking-wider hover:bg-teal shadow-sm"
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
