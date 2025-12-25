import type { Metadata } from "next";
import Schedule from "@/components/Schedule";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

export const metadata: Metadata = {
    title: "Jadwal Kelas - Fitness Elite",
    description: "Lihat jadwal lengkap kelas fitness private di Fitness Elite, Kemang Jakarta Selatan.",
};

export default function JadwalPage() {
    return (
        <main className="pt-20 dark">
            {/* Header - Simplified */}
            <div className="py-12 bg-background border-b border-border">
                <div className="max-w-5xl mx-auto px-4 lg:px-6 text-center">
                    <Badge variant="outline" className="mb-4 text-primary border-primary/30 bg-primary/10">
                        <Calendar className="size-3" />
                        Jadwal Terbaru
                    </Badge>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                        Jadwal <span className="gradient-text">Kelas</span>
                    </h1>
                    <p className="text-muted-foreground text-base max-w-xl mx-auto">
                        Pilih waktu yang paling sesuai dengan jadwal Anda
                    </p>
                </div>
            </div>

            <Schedule />
        </main>
    );
}
