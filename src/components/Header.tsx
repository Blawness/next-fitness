"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: "/", label: "Beranda" },
        { href: "/jadwal", label: "Jadwal" },
        { href: "/tentang", label: "Tentang" },
        { href: "/kontak", label: "Kontak" }
    ];

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/90 backdrop-blur-xl border-b border-[#3B82F6]/10">
            <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#1E40AF] flex items-center justify-center">
                            <span className="text-white font-bold text-lg">FE</span>
                        </div>
                        <span className="text-xl font-bold text-white">
                            Fitness<span className="text-[#3B82F6]">Elite</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-5 py-2.5 rounded-lg font-medium transition-all ${isActive(link.href)
                                        ? "bg-[#3B82F6]/10 text-[#3B82F6]"
                                        : "text-[#94A3B8] hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <a
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center gap-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 py-3 rounded-lg font-semibold transition-all"
                    >
                        Hubungi Kami
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden overflow-hidden"
                        >
                            <nav className="flex flex-col gap-2 py-6 border-t border-white/10 mt-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`px-4 py-3 rounded-lg font-medium transition-all ${isActive(link.href)
                                                ? "bg-[#3B82F6]/10 text-[#3B82F6]"
                                                : "text-[#94A3B8] hover:text-white hover:bg-white/5"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <a
                                    href="https://wa.me/6281234567890"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 bg-[#3B82F6] text-white px-4 py-3 rounded-lg font-semibold text-center"
                                >
                                    Hubungi Kami
                                </a>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
