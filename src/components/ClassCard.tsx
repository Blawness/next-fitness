"use client";

import { motion } from "framer-motion";
import { ClassType } from "@/data/classes";
import { scaleOnHover } from "@/lib/animations";

interface ClassCardProps {
    classData: ClassType;
}

export default function ClassCard({ classData }: ClassCardProps) {
    const intensityColors = {
        Low: "bg-blue-500/20 text-blue-400 border-blue-500/30",
        Medium: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
        High: "bg-red-500/20 text-red-400 border-red-500/30"
    };

    return (
        <motion.div
            {...scaleOnHover}
            className="bg-[#141414] border border-[#00ff87]/20 rounded-2xl p-6 hover:border-[#00ff87]/50 transition-colors"
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{classData.nama}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${intensityColors[classData.intensitas]}`}>
                    {classData.intensitas}
                </span>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {classData.deskripsi}
            </p>

            {/* Duration */}
            <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                <span>⏱️ {classData.durasi}</span>
            </div>

            {/* Benefits */}
            <div className="space-y-2 mb-4">
                <h4 className="text-[#00ff87] text-sm font-semibold">Manfaat:</h4>
                <ul className="space-y-1">
                    {classData.manfaat.slice(0, 3).map((manfaat, idx) => (
                        <li key={idx} className="text-gray-400 text-xs flex items-start gap-2">
                            <span className="text-[#00ff87] mt-0.5">✓</span>
                            <span>{manfaat}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* CTA */}
            <motion.a
                href="/jadwal"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full text-center bg-gradient-to-r from-[#00ff87]/10 to-[#00d4ff]/10 border border-[#00ff87]/30 text-[#00ff87] py-2.5 rounded-lg font-semibold text-sm hover:border-[#00ff87] transition-colors"
            >
                Lihat Jadwal
            </motion.a>
        </motion.div>
    );
}
