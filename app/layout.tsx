import type { Metadata } from "next";
import "./globals.css";
import { DM_Serif_Display as DM_Serif, Manrope as ManropeFont } from "next/font/google";

const fontSerif = DM_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const fontSans = ManropeFont({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cerita Bangsalsari | 2026",
  description: "Website KKN 2026 Bangsalsari, Jember — Digital Storytelling & Pengabdian Masyarakat. Bergerak bersama, bermakna selamanya.",
  keywords: ["KKN 2026", "Bangsalsari", "Jember", "Pengabdian Masyarakat", "Mahasiswa KKN"],
  authors: [{ name: "Tim KKN Bangsalsari 2026" }],
  icons: {
    icon: "/images/logo-kkn.png",
  },
  openGraph: {
    title: "Cerita Bangsalsari",
    description: "Arsip digital perjalanan pengabdian kelompok KKN 2026 Bangsalsari, Jember.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${fontSerif.variable} ${fontSans.variable}`}>
      <body className="bg-cream text-softblack font-sans antialiased selection:bg-sage-light selection:text-sage-dark">
        {children}
      </body>
    </html>
  );
}
