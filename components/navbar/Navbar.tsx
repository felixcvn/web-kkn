"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
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

  const triggerNavbarConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.1, x: 0.85 },
      colors: ["#FFF6B8", "#9EE2DB", "#58B5AA", "#288584"],
    });
  };

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
          ? "bg-cream/95 backdrop-blur-md shadow-soft py-3 border-b border-darkteal/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Group Name */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            {KKN_INFO.logoUrl ? (
              <img
                src={KKN_INFO.logoUrl}
                alt="Logo KKN Bangsalsari"
                className="w-10 h-10 object-contain rounded-full border border-darkteal/15 bg-cream-light p-0.5 shadow-sm transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  // Fallback to text icon if image not found yet
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
            ) : null}
            <div className={`w-10 h-10 rounded-full bg-darkteal flex items-center justify-center text-cream font-serif text-lg font-bold shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${KKN_INFO.logoUrl ? 'hidden' : ''}`}>
              K
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg text-softblack tracking-tight leading-tight">
                KKN Kolaboratif
              </span>
              <span className="text-[11px] font-semibold text-darkteal tracking-wider uppercase">
                Desa Bangsalsari
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-cream-light/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-darkteal/15 shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-softblack hover:text-darkteal hover:bg-mint-light/60 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#closing"
              onClick={triggerNavbarConfetti}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-darkteal hover:bg-teal text-cream-light text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm hover:shadow-hover hover:-translate-y-0.5"
            >
              <span>Ikuti Perjalanan Kami</span>
              <ArrowUpRight className="w-4 h-4 text-cream" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-cream-light border border-darkteal/20 text-softblack focus:outline-none shadow-sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-darkteal" />
              ) : (
                <Menu className="w-6 h-6 text-darkteal" />
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
              onClick={() => {
                setMobileMenuOpen(false);
                triggerNavbarConfetti();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-darkteal text-cream text-sm font-semibold tracking-wide shadow-md"
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
