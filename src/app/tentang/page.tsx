"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Users, Target, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function TentangPage() {
    const trainers = [
        {
            name: "Coach Ryan",
            specialty: "Strength & Personal Training",
            experience: "8+ tahun",
            certification: "ISSA Certified",
            image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80"
        },
        {
            name: "Coach Sarah",
            specialty: "HIIT & Cardio",
            experience: "6+ tahun",
            certification: "ACE Certified",
            image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80"
        },
        {
            name: "Coach Michael",
            specialty: "Functional Training",
            experience: "10+ tahun",
            certification: "NASM Certified",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80"
        },
        {
            name: "Coach Dina",
            specialty: "Yoga & Recovery",
            experience: "7+ tahun",
            certification: "RYT-200 Certified",
            image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80"
        }
    ];

    const values = [
        {
            icon: Target,
            title: "Personal Approach",
            desc: "Setiap program disesuaikan dengan kebutuhan individu"
        },
        {
            icon: Award,
            title: "Professional Excellence",
            desc: "Trainer bersertifikat internasional dan berpengalaman"
        },
        {
            icon: Users,
            title: "Community",
            desc: "Komunitas supportif untuk mencapai tujuan bersama"
        },
        {
            icon: Heart,
            title: "Wellness Focus",
            desc: "Keseimbangan antara fisik dan mental wellness"
        }
    ];

    return (
        <main className="pt-20 dark">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1920&q=80"
                        alt="Fitness studio"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
                </div>

                <div className="relative max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                            Tentang <span className="gradient-text">Fitness Elite</span>
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Private class eksklusif untuk mencapai fitness goals Anda dengan bimbingan trainer profesional
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 bg-background">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Badge variant="outline" className="mb-6 text-primary border-primary/30 bg-primary/10">
                                Cerita Kami
                            </Badge>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Personal Training yang <span className="gradient-text">Berbeda</span>
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Fitness Elite didirikan dengan misi untuk memberikan pengalaman fitness yang personal dan eksklusif. Kami percaya bahwa setiap orang memiliki tujuan dan kemampuan yang berbeda.
                                </p>
                                <p>
                                    Berlokasi di Kemang, Jakarta Selatan, kami menyediakan fasilitas modern dengan trainer profesional bersertifikat yang siap membantu Anda mencapai hasil maksimal.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-[400px] rounded-2xl overflow-hidden"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
                                alt="Our gym"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-[#020617]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Nilai <span className="gradient-text">Kami</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, idx) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <Card className="bg-card border-border text-center h-full">
                                        <CardContent className="p-6">
                                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                                <Icon className="size-7 text-primary" />
                                            </div>
                                            <h3 className="text-lg font-bold text-foreground mb-2">
                                                {value.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm">
                                                {value.desc}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-24 bg-background">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <Badge variant="outline" className="mb-6 text-primary border-primary/30 bg-primary/10">
                            Tim Kami
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Trainer <span className="gradient-text">Profesional</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {trainers.map((trainer, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <Card className="group bg-card overflow-hidden border-border hover:border-primary/30 transition-all h-full">
                                    <div className="relative h-56 overflow-hidden">
                                        <Image
                                            src={trainer.image}
                                            alt={trainer.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <CardContent className="p-6">
                                        <h3 className="text-lg font-bold text-foreground mb-1">
                                            {trainer.name}
                                        </h3>
                                        <p className="text-primary text-sm mb-3">
                                            {trainer.specialty}
                                        </p>
                                        <div className="text-muted-foreground text-sm space-y-1">
                                            <p>📅 {trainer.experience}</p>
                                            <p>🏆 {trainer.certification}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
