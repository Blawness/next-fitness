"use client";

import { motion } from "framer-motion";
import { ClassType } from "@/data/classes";

interface ClassCardProps {
    classData: ClassType;
}

export default function ClassCard({ classData }: ClassCardProps) {
    const intensityConfig = {
        Low: {
            bg: "bg-emerald-500/10",
            text: "text-emerald-400",
            border: "border-emerald-500/30",
            icon: "🧘"
        },
        Medium: {
            bg: "bg-amber-500/10",
            text: "text-amber-400",
            border: "border-amber-500/30",
            icon: "💪"
        },
        High: {
            bg: "bg-rose-500/10",
            text: "text-rose-400",
            border: "border-rose-500/30",
            icon: "🔥"
        }
    };

    const config = intensityConfig[classData.intensitas];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group relative card-glass rounded-3xl p-8 overflow-hidden"
        >
            {/* Gradient Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ff87] via-[#00d4ff] to-[#00ff87]" />

            {/* Header */}
            <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00ff87] transition-colors">
                        {classData.nama}
                    </h3>
                    <div className="flex items-center gap-3 text-gray-400 text-sm">
                        <span className="flex items-center gap-1.5">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {classData.durasi}
                        </span>
                    </div>
                </div>
                <span className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold ${config.bg} ${config.text} border ${config.border}`}>
                    <span>{config.icon}</span>
                    {classData.intensitas}
                </span>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-base leading-relaxed mb-6">
                {classData.deskripsi}
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
                {classData.manfaat.slice(0, 4).map((manfaat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#00ff87]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3.5 h-3.5 text-[#00ff87]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span className="text-gray-300 text-sm">{manfaat}</span>
                    </div>
                ))}
            </div>

            {/* CTA Button */}
            <motion.a
                href="/jadwal"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full text-center py-4 rounded-2xl font-bold text-base bg-gradient-to-r from-[#00ff87]/20 to-[#00d4ff]/20 border-2 border-[#00ff87]/40 text-[#00ff87] hover:border-[#00ff87] hover:shadow-lg hover:shadow-[#00ff87]/20 transition-all"
            >
                Lihat Jadwal Kelas
            </motion.a>
        </motion.div>
    );
}
