"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />

            {/* Animated Background Elements */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-20 w-[500px] h-[500px] bg-gradient-to-br from-[#00ff87]/20 to-transparent rounded-full blur-3xl"
            />
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-gradient-to-br from-[#00d4ff]/20 to-transparent rounded-full blur-3xl"
            />

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                         linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                backgroundSize: '80px 80px'
            }} />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16">
                <div className="text-center">
                    {/* Location Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#141414]/80 backdrop-blur-sm border border-[#00ff87]/30 rounded-full mb-8"
                    >
                        <span className="w-2 h-2 bg-[#00ff87] rounded-full animate-pulse" />
                        <span className="text-[#00ff87] text-sm font-semibold">
                            Kemang, Jakarta Selatan
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight"
                    >
                        <span className="gradient-text">FITNESS ELITE</span>
                        <br />
                        <span className="text-white">Private Class</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        Latihan eksklusif dengan <span className="text-[#00ff87] font-semibold">trainer profesional</span> untuk
                        mencapai hasil maksimal. Program dipersonalisasi sesuai tujuan Anda.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
                    >
                        <motion.a
                            href="/jadwal"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-primary text-lg px-10 py-5 inline-flex items-center gap-3"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            Lihat Jadwal Kelas
                        </motion.a>
                        <motion.a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-secondary text-lg px-10 py-5 inline-flex items-center gap-3"
                        >
                            Konsultasi Gratis
                        </motion.a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                    >
                        {[
                            { value: "4+", label: "Trainer Profesional", icon: "👨‍🏫" },
                            { value: "8+", label: "Jenis Kelas", icon: "🏋️" },
                            { value: "100+", label: "Member Aktif", icon: "💪" },
                            { value: "7", label: "Hari / Minggu", icon: "📅" }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -4 }}
                                className="card-glass rounded-2xl p-6 text-center"
                            >
                                <div className="text-3xl mb-2">{stat.icon}</div>
                                <div className="text-3xl md:text-4xl font-black gradient-text mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="w-7 h-12 border-2 border-[#00ff87]/50 rounded-full flex justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 16, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-[#00ff87] rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
