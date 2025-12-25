"use client";

import { motion } from "framer-motion";
import { scheduleData } from "@/data/schedule";
import { Clock, User, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Schedule() {
    const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];

    // Get schedule for a specific day
    const getScheduleForDay = (day: string) => {
        return scheduleData.filter((item) => item.hari === day);
    };

    return (
        <section className="py-16 bg-background dark">
            <div className="max-w-5xl mx-auto px-4 lg:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <Badge variant="outline" className="mb-4 text-primary border-primary/30 bg-primary/10">
                        <Calendar className="size-3" />
                        Jadwal Mingguan
                    </Badge>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                        Jadwal <span className="gradient-text">Kelas</span>
                    </h2>
                    <p className="text-muted-foreground text-base max-w-xl mx-auto">
                        Pilih waktu yang sesuai dengan jadwal Anda
                    </p>
                </motion.div>

                {/* Schedule Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <Tabs defaultValue="Senin" className="w-full">
                        {/* Day Selector */}
                        <TabsList className="w-full h-auto flex flex-wrap justify-center gap-1 bg-card/50 p-2 rounded-xl mb-6">
                            {days.map((day) => (
                                <TabsTrigger
                                    key={day}
                                    value={day}
                                    className="px-4 py-2 text-sm font-medium rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all"
                                >
                                    {day}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {/* Schedule Content for Each Day */}
                        {days.map((day) => (
                            <TabsContent key={day} value={day} className="mt-0">
                                <div className="grid gap-4">
                                    {getScheduleForDay(day).length === 0 ? (
                                        <Card className="bg-card border-border">
                                            <CardContent className="py-12 text-center">
                                                <p className="text-muted-foreground">
                                                    Tidak ada kelas di hari {day}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    ) : (
                                        getScheduleForDay(day).map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: idx * 0.05 }}
                                            >
                                                <Card className="bg-card border-border hover:border-primary/30 transition-all duration-300">
                                                    <CardContent className="p-5">
                                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                                            {/* Class Info */}
                                                            <div className="flex-1 space-y-2">
                                                                <CardTitle className="text-lg text-foreground">
                                                                    {item.kelas}
                                                                </CardTitle>
                                                                <div className="flex flex-wrap items-center gap-3 text-sm">
                                                                    <span className="flex items-center gap-1.5 text-muted-foreground">
                                                                        <Clock className="size-3.5 text-primary" />
                                                                        {item.waktu}
                                                                    </span>
                                                                    <span className="flex items-center gap-1.5 text-muted-foreground">
                                                                        <User className="size-3.5 text-primary" />
                                                                        {item.trainer}
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            {/* Slot & CTA */}
                                                            <div className="flex items-center gap-4">
                                                                <div className="text-center px-3">
                                                                    <Badge
                                                                        variant={item.slot > 5 ? "secondary" : "outline"}
                                                                        className={`text-sm px-3 py-1 ${item.slot > 5
                                                                                ? "bg-green-500/20 text-green-400 border-green-500/30"
                                                                                : "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                                                                            }`}
                                                                    >
                                                                        {item.slot} slot
                                                                    </Badge>
                                                                </div>
                                                                <Button
                                                                    asChild
                                                                    size="sm"
                                                                    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25"
                                                                >
                                                                    <a
                                                                        href="https://wa.me/6281234567890"
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                    >
                                                                        <MessageCircle className="size-4" />
                                                                        Daftar
                                                                    </a>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </motion.div>
                                        ))
                                    )}
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </motion.div>

                {/* Quick Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-10"
                >
                    <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
                        <CardContent className="p-6">
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-foreground mb-1">
                                        Butuh jadwal khusus?
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Hubungi kami untuk mengatur sesi private khusus sesuai kebutuhan Anda
                                    </p>
                                </div>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                                >
                                    <a
                                        href="https://wa.me/6281234567890"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <MessageCircle className="size-4" />
                                        Hubungi Kami
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
