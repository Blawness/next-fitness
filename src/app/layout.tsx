import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fitness Elite - Private Class Eksklusif di Kemang Jakarta Selatan",
  description: "Latihan fitness private class dengan trainer profesional di Kemang, Jakarta Selatan. Jadwal fleksibel, program dipersonalisasi untuk hasil maksimal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
