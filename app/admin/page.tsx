"use client";

import { useState } from "react";
import {
  Users,
  Briefcase,
  Calendar,
  Image as ImageIcon,
  Plus,
  Trash2,
  Edit,
  ArrowLeft,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { MEMBERS_DATA, PROGRAMS_DATA, ACTIVITIES_DATA, GALLERY_DATA, Member, Program } from "@/data/kknData";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"members" | "programs" | "activities" | "gallery">("members");
  const [membersList, setMembersList] = useState<Member[]>(MEMBERS_DATA);
  const [programsList, setProgramsList] = useState<Program[]>(PROGRAMS_DATA);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState("");

  const triggerNotify = (msg: string) => {
    setNotificationMsg(msg);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const handleDeleteMember = (id: string) => {
    setMembersList(membersList.filter((m) => m.id !== id));
    triggerNotify("Anggota berhasil dihapus dari data!");
  };

  const handleDeleteProgram = (id: string) => {
    setProgramsList(programsList.filter((p) => p.id !== id));
    triggerNotify("Program kerja berhasil dihapus!");
  };

  return (
    <div className="min-h-screen bg-cream text-softblack font-sans">
      {/* Top Admin Header */}
      <header className="bg-cream-light border-b border-darkteal/15 py-4 px-6 sticky top-0 z-30 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-darkteal hover:text-teal transition-colors bg-mint-light px-3.5 py-1.5 rounded-full border border-darkteal/15"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Website</span>
          </a>
          <h1 className="font-serif text-xl font-bold text-softblack hidden sm:block">
            Dashboard Manajemen KKN 2026
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs bg-darkteal text-cream font-semibold px-3.5 py-1 rounded-full shadow-sm">
            Admin Mode
          </span>
        </div>
      </header>

      {/* Notification Banner */}
      {showNotification && (
        <div className="fixed top-20 right-6 z-50 bg-darkteal text-cream px-5 py-3 rounded-2xl shadow-floating flex items-center gap-2 text-sm font-semibold animate-bounce">
          <CheckCircle className="w-5 h-5 text-mint" />
          <span>{notificationMsg}</span>
        </div>
      )}

      {/* Main Admin Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Metric Cards Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-cream-light p-5 rounded-[24px] border border-darkteal/15 shadow-soft">
            <div className="flex items-center justify-between text-darkteal">
              <span className="text-xs font-bold uppercase tracking-wider">Anggota Tim</span>
              <Users className="w-5 h-5 text-darkteal" />
            </div>
            <span className="font-serif text-3xl font-bold block mt-2 text-softblack">
              {membersList.length}
            </span>
          </div>

          <div className="bg-cream-light p-5 rounded-[24px] border border-darkteal/15 shadow-soft">
            <div className="flex items-center justify-between text-darkteal">
              <span className="text-xs font-bold uppercase tracking-wider">Program Kerja</span>
              <Briefcase className="w-5 h-5 text-darkteal" />
            </div>
            <span className="font-serif text-3xl font-bold block mt-2 text-softblack">
              {programsList.length}
            </span>
          </div>

          <div className="bg-cream-light p-5 rounded-[24px] border border-darkteal/15 shadow-soft">
            <div className="flex items-center justify-between text-darkteal">
              <span className="text-xs font-bold uppercase tracking-wider">Kegiatan Log</span>
              <Calendar className="w-5 h-5 text-darkteal" />
            </div>
            <span className="font-serif text-3xl font-bold block mt-2 text-softblack">
              {ACTIVITIES_DATA.length}
            </span>
          </div>

          <div className="bg-cream-light p-5 rounded-[24px] border border-darkteal/15 shadow-soft">
            <div className="flex items-center justify-between text-darkteal">
              <span className="text-xs font-bold uppercase tracking-wider">Foto Galeri</span>
              <ImageIcon className="w-5 h-5 text-darkteal" />
            </div>
            <span className="font-serif text-3xl font-bold block mt-2 text-softblack">
              {GALLERY_DATA.length}
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-darkteal/15 pb-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab("members")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "members"
                  ? "bg-darkteal text-cream shadow-sm"
                  : "bg-cream-light text-softblack/70 hover:bg-mint-light"
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Kelola Members ({membersList.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("programs")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "programs"
                  ? "bg-darkteal text-cream shadow-sm"
                  : "bg-cream-light text-softblack/70 hover:bg-mint-light"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Kelola Program ({programsList.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("activities")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "activities"
                  ? "bg-darkteal text-cream shadow-sm"
                  : "bg-cream-light text-softblack/70 hover:bg-mint-light"
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Catatan Kegiatan</span>
            </button>

            <button
              onClick={() => setActiveTab("gallery")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === "gallery"
                  ? "bg-darkteal text-cream shadow-sm"
                  : "bg-cream-light text-softblack/70 hover:bg-mint-light"
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>Galeri Foto</span>
            </button>
          </div>

          <button
            onClick={() => triggerNotify("Fitur Tambah Item baru siap dihubungkan ke Supabase!")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-darkteal text-cream text-xs font-bold uppercase tracking-wider hover:bg-teal transition-all shadow-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Item Baru</span>
          </button>
        </div>

        {/* Tab Content: Members */}
        {activeTab === "members" && (
          <div className="bg-cream-light rounded-[28px] border border-darkteal/15 overflow-hidden shadow-soft">
            <div className="p-4 border-b border-darkteal/15 flex items-center justify-between">
              <span className="text-sm font-bold text-softblack">Daftar Anggota Kelompok</span>
              <span className="text-xs text-darkteal font-semibold">Total {membersList.length} Orang</span>
            </div>
            <div className="divide-y divide-darkteal/10 overflow-x-auto">
              {membersList.map((member) => (
                <div
                  key={member.id}
                  className="p-4 flex items-center justify-between gap-4 hover:bg-cream/70 transition-colors"
                >
                  <div className="flex items-center gap-4 min-w-[240px]">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-darkteal/20"
                    />
                    <div>
                      <h4 className="font-serif font-bold text-softblack text-base">{member.name}</h4>
                      <p className="text-xs text-darkteal font-semibold">{member.role}</p>
                    </div>
                  </div>

                  <div className="hidden md:block text-xs text-softblack/70 max-w-xs truncate">
                    {member.faculty} • {member.instagram}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => triggerNotify(`Edit data ${member.name}`)}
                      className="p-2 rounded-full bg-mint-light hover:bg-mint text-softblack text-xs transition-colors"
                    >
                      <Edit className="w-4 h-4 text-darkteal" />
                    </button>
                    <button
                      onClick={() => handleDeleteMember(member.id)}
                      className="p-2 rounded-full bg-cream hover:bg-mint text-softblack text-xs transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content: Programs */}
        {activeTab === "programs" && (
          <div className="bg-cream-light rounded-[28px] border border-darkteal/15 overflow-hidden shadow-soft">
            <div className="p-4 border-b border-darkteal/15 flex items-center justify-between">
              <span className="text-sm font-bold text-softblack">Daftar Program Kerja</span>
              <span className="text-xs text-darkteal font-semibold">Total {programsList.length} Program</span>
            </div>
            <div className="divide-y divide-darkteal/10 overflow-x-auto">
              {programsList.map((program) => (
                <div
                  key={program.id}
                  className="p-4 flex items-center justify-between gap-4 hover:bg-cream/70 transition-colors"
                >
                  <div className="flex items-center gap-4 min-w-[280px]">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-14 h-10 rounded-xl object-cover border border-darkteal/15"
                    />
                    <div>
                      <h4 className="font-serif font-bold text-softblack text-base">{program.title}</h4>
                      <span className="text-xs text-darkteal font-semibold">{program.category}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => triggerNotify(`Edit program ${program.title}`)}
                      className="p-2 rounded-full bg-mint-light hover:bg-mint text-softblack text-xs transition-colors"
                    >
                      <Edit className="w-4 h-4 text-darkteal" />
                    </button>
                    <button
                      onClick={() => handleDeleteProgram(program.id)}
                      className="p-2 rounded-full bg-cream hover:bg-mint text-softblack text-xs transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content: Activities & Gallery */}
        {(activeTab === "activities" || activeTab === "gallery") && (
          <div className="bg-cream-light p-8 rounded-[28px] border border-darkteal/15 text-center space-y-4">
            <Sparkles className="w-10 h-10 text-darkteal mx-auto" />
            <h3 className="font-serif text-2xl font-bold text-softblack">
              Kelola Data {activeTab === "activities" ? "Catatan Kegiatan" : "Galeri Foto"}
            </h3>
            <p className="text-sm font-sans text-softblack/75 max-w-md mx-auto">
              Data terhubung langsung dengan skema database Supabase PostgreSQL & Storage. Silakan konfigurasikan `NEXT_PUBLIC_SUPABASE_URL` pada file lingkungan `.env` untuk sinkronisasi cloud real-time.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
