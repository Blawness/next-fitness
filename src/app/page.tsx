"use client";

import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import ClassCard from "@/components/ClassCard";
import { classesData } from "@/data/classes";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Kelas Section */}
      <section className="py-24 section-darker">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#00ff87]/10 border border-[#00ff87]/30 text-[#00ff87] text-sm font-semibold mb-6">
              Program Latihan
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Jenis <span className="gradient-text">Kelas Kami</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Berbagai pilihan program yang dirancang khusus untuk membantu Anda mencapai tujuan fitness
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classesData.slice(0, 6).map((classItem, idx) => (
              <motion.div
                key={classItem.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <ClassCard classData={classItem} />
              </motion.div>
            ))}
          </div>

          {/* View All Classes */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a href="/jadwal" className="btn-secondary inline-block">
              Lihat Semua Program →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Schedule Preview */}
      <Schedule />

      {/* Why Choose Us */}
      <section className="py-24 section-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] text-sm font-semibold mb-6">
              Keunggulan Kami
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Kenapa Memilih <span className="gradient-text">Fitness Elite?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Program Personal",
                desc: "Setiap program disesuaikan dengan tujuan dan kemampuan fisik Anda untuk hasil yang optimal",
                color: "#00ff87"
              },
              {
                icon: "👨‍🏫",
                title: "Trainer Bersertifikat",
                desc: "Dibimbing oleh trainer profesional dengan sertifikasi internasional dan pengalaman bertahun-tahun",
                color: "#00d4ff"
              },
              {
                icon: "📍",
                title: "Lokasi Premium",
                desc: "Berlokasi strategis di Kemang, Jakarta Selatan dengan akses mudah dan parkir luas",
                color: "#ff6b6b"
              },
              {
                icon: "⏰",
                title: "Jadwal Fleksibel",
                desc: "Pilihan jadwal lengkap dari pagi hingga malam, 7 hari seminggu sesuai rutinitas Anda",
                color: "#ffc107"
              },
              {
                icon: "📊",
                title: "Progress Terukur",
                desc: "Tracking progress dan evaluasi berkala untuk memastikan Anda mencapai target",
                color: "#a855f7"
              },
              {
                icon: "🏋️",
                title: "Fasilitas Premium",
                desc: "Equipment modern berstandar internasional dalam ruangan ber-AC yang nyaman",
                color: "#ec4899"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group card-glass rounded-3xl p-8 text-center"
              >
                <div
                  className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center text-4xl"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00ff87] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00ff87]/5 via-transparent to-[#00d4ff]/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ff87]/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#00ff87]/10 border border-[#00ff87]/30 text-[#00ff87] text-sm font-semibold mb-6">
              Mulai Perjalanan Anda
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Siap Memulai <span className="gradient-text">Transformasi</span> Anda?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran spesial member baru
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary text-lg px-10 py-5 inline-flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat via WhatsApp
              </motion.a>
              <motion.a
                href="/kontak"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary text-lg px-10 py-5"
              >
                Lihat Lokasi
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
