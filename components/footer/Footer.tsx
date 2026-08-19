"use client";

import { motion } from "framer-motion";
import { Instagram, Mail, ArrowUpRight, Heart, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import { KKN_INFO } from "@/data/kknData";

export default function Footer() {
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#FFF6B8", "#9EE2DB", "#58B5AA", "#288584"],
    });
  };

  return (
    <footer id="closing" className="bg-cream pt-16 pb-12 border-t border-darkteal/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Emotional Closing CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[36px] bg-darkteal text-cream p-8 sm:p-14 lg:p-20 overflow-hidden shadow-floating mb-20 border-2 border-darkteal/30"
        >
          {/* Subtle Glow & Background Accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal/30 rounded-full blur-3xl -z-0 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-mint/20 rounded-full blur-3xl -z-0 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mint text-softblack text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-4 h-4 text-darkteal" />
              <span>KKN Kolaboratif Desa Bangsalsari</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-cream leading-tight">
              Perjalanan kami belum selesai.
            </h2>

            <p className="font-sans text-base sm:text-xl text-mint-light/90 font-light leading-relaxed max-w-xl mx-auto">
              Ikuti terus cerita kami, dan jadilah bagian dari perjalanan yang memberi dampak bermakna bagi desa.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={KKN_INFO.instagramUrl}
                target="_blank"
                rel="noreferrer"
                onClick={triggerConfetti}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-cream hover:bg-cream-light text-softblack font-bold text-sm sm:text-base tracking-wide transition-all shadow-md hover:shadow-hover hover:-translate-y-1"
              >
                <Instagram className="w-5 h-5 text-darkteal" />
                <span>Ikuti Kami di Instagram</span>
                <ArrowUpRight className="w-4 h-4 text-darkteal" />
              </a>

              <a
                href={`mailto:${KKN_INFO.contactEmail}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-mint/20 hover:bg-mint/35 text-cream border border-mint/40 text-sm font-semibold transition-all"
              >
                <Mail className="w-4 h-4 text-mint" />
                <span>Hubungi Posko KKN</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer Navigation & Credits */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-darkteal/15">
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              {KKN_INFO.logoUrl ? (
                <img
                  src={KKN_INFO.logoUrl}
                  alt="Logo KKN Bangsalsari"
                  className="w-9 h-9 object-contain rounded-full border border-darkteal/20 bg-cream-light p-0.5 shadow-sm"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
              ) : null}
              <div className={`w-9 h-9 rounded-full bg-darkteal flex items-center justify-center text-cream font-serif text-sm font-bold shadow-sm ${KKN_INFO.logoUrl ? 'hidden' : ''}`}>
                K
              </div>
              <span className="font-serif font-bold text-xl text-softblack">
                {KKN_INFO.groupName}
              </span>
            </div>
            <p className="text-sm text-softblack/75 font-sans max-w-sm">
              Arsip digital pengabdian masyarakat di {KKN_INFO.village}, {KKN_INFO.district}, {KKN_INFO.regency}, {KKN_INFO.province}.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm font-sans">
            <div>
              <h4 className="font-serif font-bold text-softblack text-base mb-3">Navigasi</h4>
              <ul className="space-y-2 text-softblack/75">
                <li><a href="#hero" className="hover:text-darkteal transition-colors">Beranda</a></li>
                <li><a href="#about" className="hover:text-darkteal transition-colors">Tentang Kami</a></li>
                <li><a href="#programs" className="hover:text-darkteal transition-colors">Program Kerja</a></li>
                <li><a href="#activities" className="hover:text-darkteal transition-colors">Catatan Kegiatan</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold text-softblack text-base mb-3">Komunitas</h4>
              <ul className="space-y-2 text-softblack/75">
                <li><a href="#members" className="hover:text-darkteal transition-colors">Anggota Tim</a></li>
                <li><a href="#gallery" className="hover:text-darkteal transition-colors">Galeri Foto</a></li>
                <li><a href="/admin" className="hover:text-darkteal transition-colors">Admin Dashboard</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold text-softblack text-base mb-3">Lokasi Posko</h4>
              <p className="text-xs text-softblack/75 leading-relaxed">
                Bangsalsari, Kecamatan Bangsalsari, Kabupaten Jember, Jawa Timur 68154
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-softblack/65">
          <p>© 2026 KKN Bangsalsari. All rights reserved.</p>
          <div className="flex items-center gap-1 font-semibold">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-darkteal fill-darkteal inline" />
            <span>oleh Tim KKN Bangsalsari Jember</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
