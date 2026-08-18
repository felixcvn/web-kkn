import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import QuickFacts from "@/components/quick-facts/QuickFacts";
import AboutSection from "@/components/about/AboutSection";
import ProgramCarousel from "@/components/program-carousel/ProgramCarousel";
import ActivitiesSection from "@/components/activities/ActivitiesSection";
import MembersSection from "@/components/members/MembersSection";
import GallerySection from "@/components/gallery/GallerySection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-softblack overflow-hidden selection:bg-sage-light selection:text-sage-dark">
      {/* 01 Navigation */}
      <Navbar />

      {/* 02 Hero Section with Curved Portrait Carousel */}
      <Hero />

      {/* 03 Quick Facts */}
      <QuickFacts />

      {/* 04 About / The Place */}
      <AboutSection />

      {/* 05 Program Kerja Horizontal Carousel */}
      <ProgramCarousel />

      {/* 06 Field Notes / Activities */}
      <ActivitiesSection />

      {/* 07 The People (12 Members) */}
      <MembersSection />

      {/* 08 Editorial Gallery with Masonry & Lightbox */}
      <GallerySection />

      {/* 09 Closing Section & Footer */}
      <Footer />
    </main>
  );
}
