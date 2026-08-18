"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MEMBERS_DATA, Member } from "@/data/kknData";
import { Sparkles, Heart } from "lucide-react";

export default function PortraitCarousel() {
  const [scrollPos, setScrollPos] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  // Triple array to create a seamless infinite marquee
  const extendedMembers = [...MEMBERS_DATA, ...MEMBERS_DATA, ...MEMBERS_DATA];
  const itemWidth = 290; // Larger card width (270px) + gap (20px)
  const singleLoopWidth = MEMBERS_DATA.length * itemWidth; // 10 * 290 = 2900px
  const initialOffset = singleLoopWidth;

  useEffect(() => {
    let animationFrameId: number;

    const loop = () => {
      if (!isHovered) {
        setScrollPos((prev) => {
          const next = prev + 0.95; // Smooth continuous scroll
          return next >= singleLoopWidth ? 0 : next;
        });
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, singleLoopWidth]);

  return (
    <div className="w-full overflow-hidden py-6 relative select-none">
      {/* Micro edge fade masks (left, right, bottom fade) */}
      <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-24 bg-gradient-to-r from-cream to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-24 bg-gradient-to-l from-cream to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-10 left-0 right-0 h-16 sm:h-28 bg-gradient-to-t from-cream via-cream/60 to-transparent z-20 pointer-events-none" />

      {/* Full-width 3D Stage Container */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full h-[500px] sm:h-[550px] md:h-[590px] flex items-center justify-center overflow-hidden py-4"
      >
        <div
          className="flex items-center gap-5 absolute left-1/2"
          style={{
            transform: `translateX(-${initialOffset + scrollPos}px)`,
            willChange: "transform",
          }}
        >
          {extendedMembers.map((member, idx) => {
            const itemX = idx * itemWidth - (initialOffset + scrollPos);
            const normalizedX = itemX / 600; // Expanded normalized curve width

            // Soft Concave Wall Perspective Curve preventing bottom cut-off
            const rotateY = Math.max(-30, Math.min(30, -normalizedX * 18));
            const absX = Math.abs(normalizedX);
            const scale = Math.max(0.84, 1.04 - absX * 0.07);
            const translateY = Math.pow(normalizedX, 2) * 8;

            return (
              <div
                key={`${member.id}-${idx}`}
                onClick={() => setSelectedMember(member)}
                className="shrink-0 cursor-pointer group transition-transform duration-200"
                style={{
                  width: "270px",
                  height: "430px",
                  transform: `perspective(1200px) rotateY(${rotateY}deg) scale(${scale}) translateY(${translateY}px)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="w-full h-full rounded-[30px] overflow-hidden bg-cream-light border-2 border-darkteal/15 shadow-card group-hover:shadow-hover group-hover:border-darkteal transition-all duration-300 relative">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkteal-dark/90 via-darkteal-dark/30 to-transparent" />

                  {/* Card Label Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-cream text-left">
                    <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-mint text-softblack mb-2 shadow-sm">
                      {member.role.split(" ")[0]}
                    </span>
                    <h3 className="font-serif font-bold text-xl text-cream leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-mint-light/90 font-sans mt-0.5 truncate">
                      {member.faculty}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Helper Subtext */}
      <div className="flex items-center justify-center gap-2 mt-2 text-xs font-sans text-softblack/60 font-medium relative z-30">
        <span className="w-2.5 h-2.5 rounded-full bg-darkteal animate-ping" />
        <span>Auto-sliding • Arahkan kursor untuk menjeda & klik foto untuk profil</span>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-softblack/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-cream p-6 sm:p-8 rounded-[36px] max-w-md w-full border-2 border-darkteal/20 shadow-floating text-center relative"
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 text-softblack/60 hover:text-darkteal font-bold text-sm w-8 h-8 rounded-full bg-mint-light flex items-center justify-center"
              >
                ✕
              </button>
              <img
                src={selectedMember.photo}
                alt={selectedMember.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-darkteal shadow-md"
              />
              <span className="px-3.5 py-1 rounded-full bg-mint text-softblack text-xs font-semibold uppercase tracking-wider">
                {selectedMember.role}
              </span>
              <h3 className="font-serif text-2xl font-bold text-softblack mt-3">
                {selectedMember.name}
              </h3>
              <p className="text-xs text-darkteal font-semibold mt-0.5">
                {selectedMember.faculty}
              </p>
              <p className="text-sm text-softblack/80 font-sans mt-4 italic bg-cream-light p-4 rounded-2xl border border-darkteal/10">
                "{selectedMember.bio}"
              </p>
              <div className="mt-6 pt-4 border-t border-darkteal/15 text-xs font-sans text-softblack/70">
                Tanggung Jawab: <span className="font-semibold text-darkteal">{selectedMember.responsibility}</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
