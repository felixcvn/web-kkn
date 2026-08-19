"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import { GALLERY_DATA, GalleryItem } from "@/data/kknData";

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    "Semua",
    "Edukasi",
    "UMKM",
    "Sosialisasi",
    "Lingkungan",
    "Kebersamaan",
  ];

  const filteredGallery =
    activeCategory === "Semua"
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.category === activeCategory);

  const handleOpenLightbox = (item: GalleryItem) => {
    setLightboxItem(item);
  };

  return (
    <section id="gallery" className="py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="editorial-badge mb-4">
              <span>05</span>
              <span>•</span>
              <span>Arsip Foto Dokumen</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-softblack tracking-tight leading-tight">
              Galeri Dokumentasi <br />
              <span className="italic text-darkteal font-light">Perjalanan Bangsalsari.</span>
            </h2>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-darkteal text-cream shadow-sm"
                    : "bg-cream-light text-softblack/80 hover:bg-mint-light border border-darkteal/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry Grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredGallery.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => handleOpenLightbox(item)}
                className="editorial-card break-inside-avoid rounded-2xl overflow-hidden bg-cream-light cursor-pointer group relative border border-darkteal/20 hover:border-darkteal/50"
              >
                {/* Photo */}
                <div className="relative w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkteal-dark/90 via-darkteal-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-cream" />

                  {/* Hover Overlay Details */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-mint text-softblack mb-2 shadow-md">
                      {item.category}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-cream leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-mint-light/90 font-sans mt-1 line-clamp-2">
                      {item.caption}
                    </p>
                    <div className="flex items-center justify-between text-[11px] text-cream/80 font-sans mt-3 pt-3 border-t border-cream/20">
                      <span>{item.date}</span>
                      <Maximize2 className="w-4 h-4 text-mint" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-softblack/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full flex flex-col items-center"
            >
              {/* Lightbox Image */}
              <div className="relative rounded-2xl overflow-hidden border border-mint/30 max-h-[75vh] w-full flex justify-center bg-black shadow-floating">
                {/* Close button */}
                <button
                  onClick={() => setLightboxItem(null)}
                  className="absolute top-4 right-4 z-20 w-9 h-9 rounded-md bg-cream-light/90 hover:bg-mint text-darkteal border border-darkteal/20 flex items-center justify-center font-bold shadow-md transition-transform hover:scale-105"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
                <img
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  className="max-h-[75vh] w-auto object-contain"
                />
              </div>

              {/* Lightbox Caption Box */}
              <div className="mt-4 bg-cream rounded-xl p-5 w-full max-w-2xl text-center border border-darkteal/20 shadow-xl">
                <span className="inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-mint text-softblack mb-2 shadow-sm">
                  {lightboxItem.category} • {lightboxItem.date}
                </span>
                <h3 className="font-serif font-bold text-xl text-softblack">
                  {lightboxItem.title}
                </h3>
                <p className="text-sm font-sans text-softblack/80 mt-1">
                  {lightboxItem.caption}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
