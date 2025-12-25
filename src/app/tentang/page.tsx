"use client";

import type { Metadata } from "next";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function TentangPage() {
    return (
        <main className="pt-20">
            <section className="py-20 bg-gradient-to-br from-[#0a0a0a] to-[#141414]">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div {...fadeInUp} className="text-center mb-12">
                        <h1 className="text-4xl md:text-6xl font-black mb-6">
                            Tentang <span className="bg-gradient-to-r from-[#00ff87] to-[#00d4ff] bg-clip-text text-transparent">Fitness Elite</span>
                        </h1>
                        <p className="text-xl text-gray-400">
                            Private class eksklusif untuk mencapai fitness goals Anda
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="prose prose-invert max-w-none"
                    >
                        <div className="bg-[#141414] border border-[#00ff87]/20 rounded-2xl p-8 mb-8">
                            <h2 className="text-2xl font-bold text-[#00ff87] mb-4">Cerita Kami</h2>
                            <p className="text-gray-300 leading-relaxed">
                                Fitness Elite didirikan dengan misi untuk memberikan pengalaman fitness yang personal dan eksklusif.
                                Kami percaya bahwa setiap orang memiliki tujuan dan kemampuan yang berbeda, sehingga pendekatan
                                one-size-fits-all tidak efektif.
                            </p>
                            <p className="text-gray-300 leading-relaxed mt-4">
                                Berlokasi di Kemang, Jakarta Selatan, kami menyediakan fasilitas modern dengan trainer profesional
                                bersertifikat yang siap membantu Anda mencapai hasil maksimal.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-[#141414] border border-[#00ff87]/20 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-[#00ff87] mb-3">Visi Kami</h3>
                                <p className="text-gray-300 text-sm">
                                    Menjadi pusat fitness private class terbaik di Jakarta yang mengutamakan kualitas,
                                    personalisasi, dan hasil terukur.
                                </p>
                            </div>
                            <div className="bg-[#141414] border border-[#00ff87]/20 rounded-2xl p-6">
                                <h3 className="text-xl font-bold text-[#00ff87] mb-3">Misi Kami</h3>
                                <p className="text-gray-300 text-sm">
                                    Memberikan program latihan yang dipersonalisasi dengan bimbingan trainer profesional
                                    untuk membantu setiap member mencapai transformasi fisik yang diimpikan.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#141414] border border-[#00ff87]/20 rounded-2xl p-8">
                            <h2 className="text-2xl font-bold text-[#00ff87] mb-6">Tim Trainer Kami</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    {
                                        name: "Coach Ryan",
                                        specialty: "Strength & Personal Training",
                                        experience: "8+ tahun",
                                        certification: "ISSA Certified"
                                    },
                                    {
                                        name: "Coach Sarah",
                                        specialty: "HIIT & Cardio",
                                        experience: "6+ tahun",
                                        certification: "ACE Certified"
                                    },
                                    {
                                        name: "Coach Michael",
                                        specialty: "Functional Training",
                                        experience: "10+ tahun",
                                        certification: "NASM Certified"
                                    },
                                    {
                                        name: "Coach Dina",
                                        specialty: "Yoga & Core Training",
                                        experience: "7+ tahun",
                                        certification: "RYT-200 Certified"
                                    }
                                ].map((trainer, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="bg-[#0a0a0a] border border-[#00ff87]/10 rounded-xl p-6"
                                    >
                                        <h4 className="text-lg font-bold text-white mb-2">{trainer.name}</h4>
                                        <p className="text-[#00d4ff] text-sm mb-2">{trainer.specialty}</p>
                                        <div className="text-gray-400 text-xs space-y-1">
                                            <p>📅 Pengalaman: {trainer.experience}</p>
                                            <p>🏆 {trainer.certification}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
