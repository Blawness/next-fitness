"use client";

import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#0a0a0a]" />

            {/* Animated Circles */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-20 right-10 w-96 h-96 bg-[#00ff87]/10 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, -90, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-20 left-10 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-3xl"
            />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    {...slideInLeft}
                    className="inline-block mb-4 px-4 py-2 bg-[#141414] border border-[#00ff87]/30 rounded-full"
                >
                    <span className="text-[#00ff87] text-sm font-semibold">
                        📍 Kemang, Jakarta Selatan
                    </span>
                </motion.div>

                <motion.h1
                    {...fadeInUp}
                    className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
                >
                    <span className="bg-gradient-to-r from-[#00ff87] to-[#00d4ff] bg-clip-text text-transparent">
                        FITNESS ELITE
                    </span>
                    <br />
                    <span className="text-white">Private Class</span>
                </motion.h1>

                <motion.p
                    {...fadeInUp}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto"
                >
                    Latihan eksklusif dengan trainer profesional untuk mencapai <span className="text-[#00ff87] font-semibold">hasil maksimal</span>. Jadwal fleksibel, program dipersonalisasi sesuai tujuan Anda.
                </motion.p>

                <motion.div
                    {...fadeInUp}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <motion.a
                        href="/jadwal"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-[#00ff87] to-[#00d4ff] text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#00ff87]/50 transition-shadow"
                    >
                        Lihat Jadwal Kelas
                    </motion.a>
                    <motion.a
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-[#00ff87] text-[#00ff87] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#00ff87]/10 transition-colors"
                    >
                        Konsultasi Gratis
                    </motion.a>
                </motion.div>

                {/* Stats */}
                <motion.div
                    {...slideInRight}
                    transition={{ delay: 0.6 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                >
                    {[
                        { label: "Trainer Profesional", value: "4+" },
                        { label: "Jenis Kelas", value: "8+" },
                        { label: "Member Aktif", value: "100+" },
                        { label: "Jam Operasional", value: "14" }
                    ].map((stat, idx) => (
                        <div key={idx} className="text-center">
                            <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#00ff87] to-[#00d4ff] bg-clip-text text-transparent mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-500">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-[#00ff87] rounded-full flex justify-center">
                    <motion.div className="w-1.5 h-1.5 bg-[#00ff87] rounded-full mt-2" />
                </div>
            </motion.div>
        </section>
    );
}
