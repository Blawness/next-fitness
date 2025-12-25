"use client";

import { motion } from "framer-motion";
import { scheduleData } from "@/data/schedule";

export default function Schedule() {
    const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

    const dayEmojis: Record<string, string> = {
        "Senin": "📅",
        "Selasa": "📅",
        "Rabu": "📅",
        "Kamis": "📅",
        "Jumat": "📅",
        "Sabtu": "🎉",
        "Minggu": "☀️"
    };

    return (
        <section className="py-24 section-dark">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full bg-[#00ff87]/10 border border-[#00ff87]/30 text-[#00ff87] text-sm font-semibold mb-6">
                        Jadwal Mingguan
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
                        Jadwal <span className="gradient-text">Kelas Minggu Ini</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Pilih waktu yang paling sesuai dengan rutinitas harian Anda
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {days.map((day, dayIdx) => {
                        const daySchedule = scheduleData.filter((item) => item.hari === day);

                        if (daySchedule.length === 0) return null;

                        return (
                            <motion.div
                                key={day}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: dayIdx * 0.05 }}
                                className="card-glass rounded-3xl overflow-hidden"
                            >
                                {/* Day Header */}
                                <div className="bg-gradient-to-r from-[#00ff87]/10 via-[#00d4ff]/10 to-transparent px-8 py-5 border-b border-white/5">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                            <span>{dayEmojis[day]}</span>
                                            {day}
                                        </h3>
                                        <span className="text-sm text-gray-400 bg-white/5 px-4 py-1.5 rounded-full">
                                            {daySchedule.length} kelas
                                        </span>
                                    </div>
                                </div>

                                {/* Classes */}
                                <div className="divide-y divide-white/5">
                                    {daySchedule.map((item, idx) => (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
                                            className="px-8 py-6 transition-colors"
                                        >
                                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                                <div className="flex-1">
                                                    <h4 className="text-xl font-bold text-white mb-2">
                                                        {item.kelas}
                                                    </h4>
                                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                                                        <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full">
                                                            <svg className="w-4 h-4 text-[#00ff87]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                            </svg>
                                                            {item.waktu}
                                                        </span>
                                                        <span className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full">
                                                            <svg className="w-4 h-4 text-[#00d4ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                            </svg>
                                                            {item.trainer}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-6">
                                                    <div className="text-center">
                                                        <div className="text-2xl font-bold text-[#00ff87]">{item.slot}</div>
                                                        <div className="text-xs text-gray-500">slot tersedia</div>
                                                    </div>
                                                    <motion.a
                                                        href="https://wa.me/6281234567890"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        className="btn-primary px-8 py-3 text-sm"
                                                    >
                                                        Daftar Sekarang
                                                    </motion.a>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
