"use client";

import { motion } from "framer-motion";
import { Calendar, MessageCircle, Users, Award, Dumbbell, Clock } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    const stats = [
        { value: "4+", label: "Trainer Pro", icon: Award },
        { value: "8+", label: "Jenis Kelas", icon: Dumbbell },
        { value: "100+", label: "Member Aktif", icon: Users },
        { value: "7", label: "Hari/Minggu", icon: Clock }
    ];

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
                    alt="Fitness gym"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/70 to-[#0F172A]" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
                <div className="max-w-3xl">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full mb-8"
                    >
                        <span className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse" />
                        <span className="text-[#60A5FA] text-sm font-medium">
                            Kemang, Jakarta Selatan
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                    >
                        Transform Your Body with{" "}
                        <span className="gradient-text">Private Training</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-[#94A3B8] mb-10 max-w-2xl"
                    >
                        Latihan eksklusif dengan trainer profesional bersertifikat.
                        Program dipersonalisasi untuk hasil maksimal sesuai tujuan Anda.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a
                            href="/jadwal"
                            className="btn-primary inline-flex items-center justify-center gap-2 text-base"
                        >
                            <Calendar size={20} />
                            Lihat Jadwal Kelas
                        </a>
                        <a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary inline-flex items-center justify-center gap-2 text-base"
                        >
                            <MessageCircle size={20} />
                            Konsultasi Gratis
                        </a>
                    </motion.div>
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {stats.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={idx}
                                className="bg-[#1E293B]/60 backdrop-blur-sm border border-[#3B82F6]/10 rounded-2xl p-6 text-center"
                            >
                                <div className="flex justify-center mb-3">
                                    <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center">
                                        <Icon size={24} className="text-[#3B82F6]" />
                                    </div>
                                </div>
                                <div className="text-3xl font-bold text-white mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-[#94A3B8]">{stat.label}</div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-[#3B82F6]/30 rounded-full flex justify-center pt-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
