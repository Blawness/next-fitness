"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-[#141414] border-t border-[#00ff87]/10 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-[#00ff87] to-[#00d4ff] bg-clip-text text-transparent mb-4">
                            FITNESS ELITE
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Private class eksklusif di Kemang, Jakarta Selatan untuk mencapai fitness goals Anda.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[#00ff87] font-semibold mb-4">Menu</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-[#00ff87] transition-colors text-sm">
                                    Beranda
                                </Link>
                            </li>
                            <li>
                                <Link href="/jadwal" className="text-gray-400 hover:text-[#00ff87] transition-colors text-sm">
                                    Jadwal Kelas
                                </Link>
                            </li>
                            <li>
                                <Link href="/tentang" className="text-gray-400 hover:text-[#00ff87] transition-colors text-sm">
                                    Tentang Kami
                                </Link>
                            </li>
                            <li>
                                <Link href="/kontak" className="text-gray-400 hover:text-[#00ff87] transition-colors text-sm">
                                    Kontak
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-[#00ff87] font-semibold mb-4">Kontak</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>📍 Kemang, Jakarta Selatan</li>
                            <li>📧 info@fitnesselite.id</li>
                            <li>📱 +62 812-3456-7890</li>
                            <li className="pt-2">
                                <a
                                    href="https://wa.me/6281234567890"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-[#00ff87] text-black px-4 py-2 rounded-full text-xs font-semibold hover:bg-[#00d4ff] transition-colors"
                                >
                                    Chat WhatsApp
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-[#00ff87] font-semibold mb-4">Ikuti Kami</h4>
                        <div className="flex gap-4">
                            {[
                                { name: "Instagram", icon: "📷" },
                                { name: "Facebook", icon: "📘" },
                                { name: "TikTok", icon: "🎵" }
                            ].map((social) => (
                                <motion.a
                                    key={social.name}
                                    href="#"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-10 h-10 bg-[#1a1a1a] hover:bg-[#00ff87]/20 border border-[#00ff87]/30 rounded-full flex items-center justify-center text-xl transition-colors"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#00ff87]/10 pt-6 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Fitness Elite. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
