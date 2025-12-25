"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#020617] border-t border-[#1E293B]">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#1E40AF] flex items-center justify-center">
                                <span className="text-white font-bold text-lg">FE</span>
                            </div>
                            <span className="text-xl font-bold text-white">
                                Fitness<span className="text-[#3B82F6]">Elite</span>
                            </span>
                        </Link>
                        <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                            Private class eksklusif di Kemang, Jakarta Selatan untuk mencapai fitness goals Anda.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: Instagram, href: "#" },
                                { icon: Facebook, href: "#" },
                                { icon: Youtube, href: "#" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    className="w-10 h-10 bg-[#1E293B] hover:bg-[#3B82F6]/20 border border-[#3B82F6]/20 rounded-lg flex items-center justify-center text-[#94A3B8] hover:text-[#3B82F6] transition-all"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Menu</h4>
                        <ul className="space-y-3">
                            {[
                                { label: "Beranda", href: "/" },
                                { label: "Jadwal Kelas", href: "/jadwal" },
                                { label: "Tentang Kami", href: "/tentang" },
                                { label: "Kontak", href: "/kontak" }
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-[#94A3B8] hover:text-[#3B82F6] transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Layanan</h4>
                        <ul className="space-y-3">
                            {[
                                "Personal Training",
                                "HIIT Classes",
                                "Strength Training",
                                "Yoga & Recovery"
                            ].map((service) => (
                                <li key={service}>
                                    <span className="text-[#94A3B8] text-sm">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Kontak</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-[#3B82F6] mt-0.5 flex-shrink-0" />
                                <span className="text-[#94A3B8] text-sm">
                                    Kemang Raya, Jakarta Selatan
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-[#3B82F6] flex-shrink-0" />
                                <a href="mailto:info@fitnesselite.id" className="text-[#94A3B8] hover:text-[#3B82F6] text-sm transition-colors">
                                    info@fitnesselite.id
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-[#3B82F6] flex-shrink-0" />
                                <a href="tel:+6281234567890" className="text-[#94A3B8] hover:text-[#3B82F6] text-sm transition-colors">
                                    +62 812-3456-7890
                                </a>
                            </li>
                        </ul>
                        <a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                            Chat WhatsApp
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#1E293B] pt-8 text-center">
                    <p className="text-[#64748B] text-sm">
                        © {currentYear} Fitness Elite. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
