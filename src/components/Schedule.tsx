"use client";

import { motion } from "framer-motion";
import { scheduleData } from "@/data/schedule";
import { Clock, User, MessageCircle } from "lucide-react";

export default function Schedule() {
    const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

    return (
        <section className="py-24 bg-[#020617]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full text-[#60A5FA] text-sm font-medium mb-6">
                        Jadwal Mingguan
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Jadwal <span className="gradient-text">Kelas</span>
                    </h2>
                    <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
                        Pilih waktu yang paling sesuai dengan rutinitas Anda
                    </p>
                </motion.div>

                {/* Schedule Grid */}
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
                                className="bg-[#1E293B] rounded-2xl overflow-hidden border border-[#3B82F6]/10"
                            >
                                {/* Day Header */}
                                <div className="bg-[#3B82F6]/5 px-6 py-4 border-b border-[#3B82F6]/10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-white">
                                            {day}
                                        </h3>
                                        <span className="text-sm text-[#94A3B8] bg-[#0F172A] px-4 py-1.5 rounded-full">
                                            {daySchedule.length} kelas
                                        </span>
                                    </div>
                                </div>

                                {/* Classes */}
                                <div className="divide-y divide-[#3B82F6]/10">
                                    {daySchedule.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="px-6 py-5 hover:bg-[#3B82F6]/5 transition-colors"
                                        >
                                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                                {/* Class Info */}
                                                <div className="flex-1">
                                                    <h4 className="text-lg font-semibold text-white mb-2">
                                                        {item.kelas}
                                                    </h4>
                                                    <div className="flex flex-wrap items-center gap-4 text-sm text-[#94A3B8]">
                                                        <span className="flex items-center gap-2">
                                                            <Clock size={14} className="text-[#3B82F6]" />
                                                            {item.waktu}
                                                        </span>
                                                        <span className="flex items-center gap-2">
                                                            <User size={14} className="text-[#3B82F6]" />
                                                            {item.trainer}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Slot & CTA */}
                                                <div className="flex items-center gap-6">
                                                    <div className="text-center">
                                                        <div className="text-2xl font-bold text-[#3B82F6]">
                                                            {item.slot}
                                                        </div>
                                                        <div className="text-xs text-[#64748B]">
                                                            slot tersedia
                                                        </div>
                                                    </div>
                                                    <a
                                                        href="https://wa.me/6281234567890"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="btn-primary px-6 py-2.5 text-sm flex items-center gap-2"
                                                    >
                                                        <MessageCircle size={16} />
                                                        Daftar
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
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
