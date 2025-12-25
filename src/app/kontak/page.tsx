"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook, Youtube } from "lucide-react";

export default function KontakPage() {
    return (
        <main className="pt-20">
            {/* Header */}
            <section className="py-16 bg-[#0F172A]">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Hubungi <span className="gradient-text">Kami</span>
                        </h1>
                        <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
                            Mulai transformasi fitness Anda hari ini
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 bg-[#020617]">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {/* Info Card */}
                            <div className="bg-[#1E293B] rounded-2xl p-8 border border-[#3B82F6]/10">
                                <h2 className="text-xl font-bold text-white mb-6">
                                    Informasi Kontak
                                </h2>

                                <div className="space-y-5">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                                            <MapPin size={20} className="text-[#3B82F6]" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">Alamat</h3>
                                            <p className="text-[#94A3B8] text-sm">
                                                Kemang Raya, Jakarta Selatan<br />
                                                DKI Jakarta 12730
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                                            <Phone size={20} className="text-[#3B82F6]" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">Telepon</h3>
                                            <a href="tel:+6281234567890" className="text-[#94A3B8] hover:text-[#3B82F6] text-sm transition-colors">
                                                +62 812-3456-7890
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                                            <Mail size={20} className="text-[#3B82F6]" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">Email</h3>
                                            <a href="mailto:info@fitnesselite.id" className="text-[#94A3B8] hover:text-[#3B82F6] text-sm transition-colors">
                                                info@fitnesselite.id
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                                            <Clock size={20} className="text-[#3B82F6]" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-white mb-1">Jam Operasional</h3>
                                            <p className="text-[#94A3B8] text-sm">
                                                Senin - Jumat: 06:00 - 21:00<br />
                                                Sabtu - Minggu: 08:00 - 20:00
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social */}
                                <div className="mt-8 pt-6 border-t border-[#3B82F6]/10">
                                    <h3 className="font-semibold text-white mb-4">Media Sosial</h3>
                                    <div className="flex gap-3">
                                        {[
                                            { icon: Instagram, href: "#" },
                                            { icon: Facebook, href: "#" },
                                            { icon: Youtube, href: "#" }
                                        ].map((social, idx) => (
                                            <a
                                                key={idx}
                                                href={social.href}
                                                className="w-10 h-10 bg-[#0F172A] hover:bg-[#3B82F6]/20 border border-[#3B82F6]/20 rounded-lg flex items-center justify-center text-[#94A3B8] hover:text-[#3B82F6] transition-all"
                                            >
                                                <social.icon size={18} />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp CTA */}
                            <a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary w-full flex items-center justify-center gap-2 py-4"
                            >
                                <MessageCircle size={20} />
                                Chat via WhatsApp
                            </a>
                        </motion.div>

                        {/* Map */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#1E293B] rounded-2xl p-6 border border-[#3B82F6]/10"
                        >
                            <h2 className="text-xl font-bold text-white mb-6">
                                Lokasi Kami
                            </h2>
                            <div className="aspect-square rounded-xl overflow-hidden bg-[#0F172A] border border-[#3B82F6]/10">
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
                            <p className="text-[#94A3B8] text-sm mt-4 text-center">
                                Mudah dijangkau dari berbagai area Jakarta Selatan
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
