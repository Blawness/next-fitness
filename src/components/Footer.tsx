"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#020617] border-t border-border">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                                <span className="text-white font-bold text-lg">FE</span>
                            </div>
                            <span className="text-xl font-bold text-foreground">
                                Fitness<span className="text-primary">Elite</span>
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            Private class eksklusif di Kemang, Jakarta Selatan untuk mencapai fitness goals Anda.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { icon: Instagram, href: "#" },
                                { icon: Facebook, href: "#" },
                                { icon: Youtube, href: "#" }
                            ].map((social, idx) => (
                                <Button
                                    key={idx}
                                    variant="outline"
                                    size="icon"
                                    asChild
                                    className="border-border hover:border-primary hover:bg-primary/10 hover:text-primary"
                                >
                                    <a href={social.href}>
                                        <social.icon className="size-4" />
                                    </a>
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-foreground font-semibold mb-4">Menu</h4>
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
                                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-foreground font-semibold mb-4">Layanan</h4>
                        <ul className="space-y-3">
                            {[
                                "Personal Training",
                                "HIIT Classes",
                                "Strength Training",
                                "Yoga & Recovery"
                            ].map((service) => (
                                <li key={service}>
                                    <span className="text-muted-foreground text-sm">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-foreground font-semibold mb-4">Kontak</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="size-4 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground text-sm">
                                    Kemang Raya, Jakarta Selatan
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="size-4 text-primary flex-shrink-0" />
                                <a href="mailto:info@fitnesselite.id" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                                    info@fitnesselite.id
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="size-4 text-primary flex-shrink-0" />
                                <a href="tel:+6281234567890" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                                    +62 812-3456-7890
                                </a>
                            </li>
                        </ul>
                        <Button
                            asChild
                            size="sm"
                            className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                        >
                            <a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MessageCircle className="size-4" />
                                Chat WhatsApp
                            </a>
                        </Button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border pt-8 text-center">
                    <p className="text-muted-foreground text-sm">
                        © {currentYear} Fitness Elite. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
