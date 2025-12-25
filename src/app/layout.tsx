import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactButton from "@/components/FloatingContactButton";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Next Fitness - Private Class Eksklusif di Kemang Jakarta Selatan",
  description: "Latihan fitness private class dengan trainer profesional di Kemang, Jakarta Selatan. Jadwal fleksibel, program dipersonalisasi untuk hasil maksimal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`dark ${inter.variable} ${outfit.variable}`}>
      <body className="antialiased font-sans">
        <Header />
        {children}
        <Footer />
        <FloatingContactButton />
      </body>
    </html>
  );
}
