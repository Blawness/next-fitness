"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function KontakPage() {
    return (
        <main className="pt-20">
            <section className="py-20 bg-gradient-to-br from-[#0a0a0a] to-[#141414] min-h-screen">
                <div className="max-w-6xl mx-auto px-6">
                    <motion.div {...fadeInUp} className="text-center mb-12">
                        <h1 className="text-4xl md:text-6xl font-black mb-6">
                            Hubungi <span className="bg-gradient-to-r from-[#00ff87] to-[#00d4ff] bg-clip-text text-transparent">Kami</span>
                        </h1>
                        <p className="text-xl text-gray-400">
                            Mulai transformasi fitness Anda hari ini
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="bg-[#141414] border border-[#00ff87]/20 rounded-2xl p-8">
                                <h2 className="text-2xl font-bold text-[#00ff87] mb-6">Informasi Kontak</h2>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="text-2xl">📍</div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">Alamat</h3>
                                            <p className="text-gray-400 text-sm">
                                                Kemang Raya, Jakarta Selatan<br />
                                                DKI Jakarta 12730
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="text-2xl">📱</div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">Telepon</h3>
                                            <a href="tel:+6281234567890" className="text-gray-400 text-sm hover:text-[#00ff87] transition-colors">
                                                +62 812-3456-7890
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="text-2xl">📧</div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">Email</h3>
                                            <a href="mailto:info@fitnesselite.id" className="text-gray-400 text-sm hover:text-[#00ff87] transition-colors">
                                                info@fitnesselite.id
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="text-2xl">⏰</div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">Jam Operasional</h3>
                                            <p className="text-gray-400 text-sm">
                                                Senin - Jumat: 06:00 - 21:00<br />
                                                Sabtu - Minggu: 08:00 - 20:00
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 pt-6 border-t border-[#00ff87]/20">
                                    <h3 className="font-semibold text-white mb-4">Media Sosial</h3>
                                    <div className="flex gap-4">
                                        {[
                                            { icon: "📷", name: "Instagram", link: "#" },
                                            { icon: "📘", name: "Facebook", link: "#" },
                                            { icon: "🎵", name: "TikTok", link: "#" }
                                        ].map((social) => (
                                            <motion.a
                                                key={social.name}
                                                href={social.link}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className="w-12 h-12 bg-[#0a0a0a] hover:bg-[#00ff87]/20 border border-[#00ff87]/30 rounded-full flex items-center justify-center text-2xl transition-colors"
                                                aria-label={social.name}
                                            >
                                                {social.icon}
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <motion.a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="block w-full bg-gradient-to-r from-[#00ff87] to-[#00d4ff] text-black text-center px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-[#00ff87]/50 transition-shadow"
                            >
                                💬 Chat via WhatsApp
                            </motion.a>
                        </motion.div>

                        {/* Map */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#141414] border border-[#00ff87]/20 rounded-2xl p-8"
                        >
                            <h2 className="text-2xl font-bold text-[#00ff87] mb-6">Lokasi Kami</h2>
                            <div className="aspect-square rounded-xl overflow-hidden bg-[#0a0a0a] border border-[#00ff87]/10">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8359746985567!2d106.81629931476897!3d-6.289166395457308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1f2c9e4c8c9%3A0x9d7f5e5f5e5f5e5f!2sKemang%2C%20Jakarta%20Selatan!5e0!3m2!1sen!2sid!4v1234567890123"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Fitness Elite Location"
                                />
                            </div>
                            <p className="text-gray-400 text-sm mt-4 text-center">
                                Mudah dijangkau dari berbagai area Jakarta Selatan
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
