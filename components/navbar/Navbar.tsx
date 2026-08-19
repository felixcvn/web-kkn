"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { KKN_INFO } from "@/data/kknData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "#hero" },
    { name: "Tentang", href: "#about" },
    { name: "Program", href: "#programs" },
    { name: "Kegiatan", href: "#activities" },
    { name: "Tim Kami", href: "#members" },
    { name: "Galeri", href: "#gallery" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm py-3.5 border-b border-darkteal/15"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between relative">
          {/* Logo / Group Name */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            {KKN_INFO.logoUrl ? (
              <img
                src={KKN_INFO.logoUrl}
                alt="Logo KKN Bangsalsari"
                className="w-9 h-9 object-contain rounded-full border border-darkteal/20 bg-cream-light p-0.5 shadow-sm transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
            ) : null}
            <div className={`w-9 h-9 rounded-full bg-darkteal flex items-center justify-center text-cream font-serif text-base font-bold shadow-sm transition-transform duration-300 group-hover:scale-105 ${KKN_INFO.logoUrl ? 'hidden' : ''}`}>
              K
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base text-softblack tracking-tight leading-tight">
                KKN Kolaboratif
              </span>
              <span className="text-[10px] font-bold text-darkteal tracking-widest uppercase">
                Desa Bangsalsari
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-1 bg-cream-light/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-darkteal/20 shadow-sm md:absolute md:left-1/2 md:-translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold text-softblack/80 hover:text-darkteal hover:bg-mint-light/50 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#closing"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-darkteal hover:bg-teal text-cream text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm hover:-translate-y-0.5"
            >
              <span>Ikuti Perjalanan</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cream" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-cream-light border border-darkteal/20 text-softblack focus:outline-none shadow-sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-darkteal" />
              ) : (
                <Menu className="w-5 h-5 text-darkteal" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-cream/98 backdrop-blur-xl z-40 px-6 py-8 flex flex-col justify-between border-t border-darkteal/10 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif text-softblack hover:text-darkteal py-2 border-b border-darkteal/10 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-darkteal font-sans uppercase">→</span>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-darkteal/10">
            <a
              href="#closing"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-darkteal text-cream text-xs font-bold uppercase tracking-wider shadow-md"
            >
              <span>Ikuti Perjalanan Kami</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="text-center text-xs text-softblack/60 mt-4 font-sans">
              {KKN_INFO.groupName} • {KKN_INFO.village}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
