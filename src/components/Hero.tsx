"use client";

import { motion } from "framer-motion";
import { Calendar, MessageCircle, Users, Award, Dumbbell, Clock } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function Hero() {
    const stats = [
        { value: "4+", label: "Trainer Pro", icon: Award },
        { value: "8+", label: "Jenis Kelas", icon: Dumbbell },
        { value: "100+", label: "Member Aktif", icon: Users },
        { value: "7", label: "Hari/Minggu", icon: Clock }
    ];

    return (
        <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
            {/* Background Image */}
            <div className="absolute inset-0 w-full">
                <Image
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
                    alt="Fitness gym"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20 lg:py-24">
                <div className="w-full max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center"
                    >
                        <Badge variant="outline" className="mb-6 sm:mb-10 text-primary border-primary/30 bg-primary/10 px-4 py-2">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse mr-2" />
                            Kemang, Jakarta Selatan
                        </Badge>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-10 text-foreground"
                    >
                        Transform Your Body with{" "}
                        <span className="gradient-text">Private Training</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 sm:mb-14 max-w-3xl mx-auto leading-relaxed"
                    >
                        Latihan eksklusif dengan trainer profesional bersertifikat.
                        Program dipersonalisasi untuk hasil maksimal sesuai tujuan Anda.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
                    >
                        <Button
                            asChild
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 text-base"
                        >
                            <a href="/jadwal">
                                <Calendar className="size-5" />
                                Lihat Jadwal Kelas
                            </a>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base"
                        >
                            <a
                                href="https://wa.me/6281234567890"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MessageCircle className="size-5" />
                                Konsultasi Gratis
                            </a>
                        </Button>
                    </motion.div>
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="mt-14 sm:mt-20 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full max-w-4xl mx-auto"
                >
                    {stats.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <Card
                                key={idx}
                                className="bg-card/60 backdrop-blur-sm border-border"
                            >
                                <CardContent className="p-6 text-center">
                                    <div className="flex justify-center mb-3">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                            <Icon className="size-6 text-primary" />
                                        </div>
                                    </div>
                                    <div className="text-3xl font-bold text-foreground mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-10"
            >
                <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-primary rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
