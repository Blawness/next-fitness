"use client";

import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import ClassCard from "@/components/ClassCard";
import { classesData } from "@/data/classes";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Kelas Section */}
      <section className="py-20 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Jenis <span className="bg-gradient-to-r from-[#00ff87] to-[#00d4ff] bg-clip-text text-transparent">Kelas Kami</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Berbagai pilihan program untuk mencapai tujuan fitness Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classesData.map((classItem) => (
              <ClassCard key={classItem.id} classData={classItem} />
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Preview */}
      <Schedule />

      {/* Why Choose Us */}
      <section className="py-20 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Kenapa Memilih <span className="bg-gradient-to-r from-[#00ff87] to-[#00d4ff] bg-clip-text text-transparent">Fitness Elite?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Program Personal",
                desc: "Setiap program disesuaikan dengan tujuan dan kemampuan Anda"
              },
              {
                icon: "👨‍🏫",
                title: "Trainer Profesional",
                desc: "Dibimbing oleh trainer bersertifikat dan berpengalaman"
              },
              {
                icon: "📍",
                title: "Lokasi Strategis",
                desc: "Berlokasi di Kemang, Jakarta Selatan dengan akses mudah"
              },
              {
                icon: "⏰",
                title: "Jadwal Fleksibel",
                desc: "Pilihan jadwal dari pagi hingga malam, Senin sampai Minggu"
              },
              {
                icon: "💪",
                title: "Hasil Terukur",
                desc: "Progress tracking dan evaluasi berkala untuk hasil maksimal"
              },
              {
                icon: "🏋️",
                title: "Fasilitas Lengkap",
                desc: "Equipment modern dan ruangan nyaman untuk latihan optimal"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#0a0a0a] border border-[#00ff87]/20 rounded-2xl p-6 hover:border-[#00ff87]/50 transition-colors"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a0a0a] to-[#141414]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Siap Mulai <span className="bg-gradient-to-r from-[#00ff87] to-[#00d4ff] bg-clip-text text-transparent">Transformasi</span> Anda?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran spesial
            </p>
            <motion.a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-[#00ff87] to-[#00d4ff] text-black px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#00ff87]/50 transition-shadow"
            >
              Chat via WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
