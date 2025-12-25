"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ClassType } from "@/data/classes";
import { Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ClassCardProps {
    classData: ClassType;
}

// Map class types to Unsplash images
const classImages: Record<string, string> = {
    "personal-training": "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
    "hiit": "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=600&q=80",
    "strength-training": "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=600&q=80",
    "functional-training": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
    "cardio-burn": "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=600&q=80",
    "core-abs": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    "full-body": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    "yoga-recovery": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80"
};

export default function ClassCard({ classData }: ClassCardProps) {
    const intensityConfig = {
        Low: {
            className: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
        },
        Medium: {
            className: "bg-amber-500/20 text-amber-400 border-amber-500/30"
        },
        High: {
            className: "bg-rose-500/20 text-rose-400 border-rose-500/30"
        }
    };

    const config = intensityConfig[classData.intensitas];
    const imageUrl = classImages[classData.id] || classImages["personal-training"];
    // Fallback image URL in case the primary image fails to load
    const placeholderImage = "https://via.placeholder.com/600x400?text=No+Image";
    // Local image source state to support runtime fallback
    const [imageSrc, setImageSrc] = useState<string>(imageUrl);
    const handleImageError = () => setImageSrc(placeholderImage);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
        >
            <Card className="group bg-card overflow-hidden border-border hover:border-primary/30 transition-all h-full">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt={classData.nama}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={handleImageError}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />

                    {/* Intensity Badge */}
                    <div className="absolute top-4 right-4">
                        <Badge
                            variant="outline"
                            className={config.className}
                        >
                            {classData.intensitas}
                        </Badge>
                    </div>
                </div>

                {/* Content */}
                <CardContent className="p-6">
                    {/* Header */}
                    <div className="mb-4">
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {classData.nama}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                            <Clock className="size-3.5" />
                            <span>{classData.durasi}</span>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {classData.deskripsi}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-2 mb-6">
                        {classData.manfaat.slice(0, 3).map((manfaat, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span className="text-muted-foreground text-sm">{manfaat}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <Button
                        asChild
                        variant="outline"
                        className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                        <a href="/jadwal">
                            Lihat Jadwal
                            <ArrowRight className="size-4" />
                        </a>
                    </Button>
                </CardContent>
            </Card>
        </motion.div>
    );
}
