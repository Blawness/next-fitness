"use client";

import { motion } from "framer-motion";
import { Target, Award, MapPin, Clock, TrendingUp, Dumbbell } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: Target,
      title: "Program Personal",
      desc: "Program disesuaikan dengan tujuan dan kemampuan fisik Anda"
    },
    {
      icon: Award,
      title: "Trainer Bersertifikat",
      desc: "Dibimbing oleh trainer profesional dengan sertifikasi internasional"
    },
    {
      icon: MapPin,
      title: "Lokasi Strategis",
      desc: "Berlokasi di Kemang, Jakarta Selatan dengan akses mudah"
    },
    {
      icon: Clock,
      title: "Jadwal Fleksibel",
      desc: "Pilihan jadwal lengkap dari pagi hingga malam, 7 hari seminggu"
    },
    {
      icon: TrendingUp,
      title: "Progress Terukur",
      desc: "Tracking progress dan evaluasi berkala untuk hasil optimal"
    },
    {
      icon: Dumbbell,
      title: "Fasilitas Modern",
      desc: "Equipment berstandar internasional dalam ruangan ber-AC"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full text-[#60A5FA] text-sm font-medium mb-4 sm:mb-6">
            Keunggulan Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Kenapa Memilih <span className="gradient-text">Next Fitness?</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group bg-[#1E293B] rounded-2xl p-8 border border-[#3B82F6]/10 hover:border-[#3B82F6]/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center mb-6 group-hover:bg-[#3B82F6]/20 transition-colors">
                  <Icon size={28} className="text-[#3B82F6]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#3B82F6] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-[#94A3B8] leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
