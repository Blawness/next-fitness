"use client";

import { motion } from "framer-motion";
import { scheduleData } from "@/data/schedule";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Schedule() {
    const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

    return (
        <section className="py-20 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div {...fadeInUp} className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-black mb-4">
                        Jadwal <span className="bg-gradient-to-r from-[#00ff87] to-[#00d4ff] bg-clip-text text-transparent">Kelas Minggu Ini</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Pilih jadwal yang sesuai dengan waktu Anda
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    {days.map((day) => {
                        const daySchedule = scheduleData.filter((item) => item.hari === day);

                        if (daySchedule.length === 0) return null;

                        return (
                            <motion.div
                                key={day}
                                variants={fadeInUp}
                                className="bg-[#141414] rounded-2xl border border-[#00ff87]/20 overflow-hidden"
                            >
                                {/* Day Header */}
                                <div className="bg-gradient-to-r from-[#00ff87]/20 to-[#00d4ff]/20 border-b border-[#00ff87]/30 px-6 py-4">
                                    <h3 className="text-2xl font-bold text-white">{day}</h3>
                                </div>

                                {/* Classes */}
                                <div className="divide-y divide-[#00ff87]/10">
                                    {daySchedule.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="px-6 py-4 hover:bg-[#1a1a1a] transition-colors"
                                        >
                                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                                <div className="flex-1">
                                                    <h4 className="text-lg font-semibold text-white mb-1">
                                                        {item.kelas}
                                                    </h4>
                                                    <div className="flex items-center gap-4 text-sm text-gray-400">
                                                        <span className="flex items-center gap-1">
                                                            ⏰ {item.waktu}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            👤 {item.trainer}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-4">
                                                    <div className="text-sm">
                                                        <span className="text-gray-500">Slot tersedia:</span>
                                                        <span className="ml-2 text-[#00ff87] font-semibold">{item.slot}</span>
                                                    </div>
                                                    <motion.a
                                                        href="https://wa.me/6281234567890"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className="bg-gradient-to-r from-[#00ff87] to-[#00d4ff] text-black px-6 py-2 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-[#00ff87]/50 transition-shadow"
                                                    >
                                                        Daftar
                                                    </motion.a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
