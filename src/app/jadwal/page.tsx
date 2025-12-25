import type { Metadata } from "next";
import Schedule from "@/components/Schedule";

export const metadata: Metadata = {
    title: "Jadwal Kelas - Fitness Elite",
    description: "Lihat jadwal lengkap kelas fitness private di Fitness Elite, Kemang Jakarta Selatan.",
};

export default function JadwalPage() {
    return (
        <main className="pt-20">
            {/* Header */}
            <div className="py-16 bg-[#0F172A]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Jadwal <span className="bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">Kelas</span>
                    </h1>
                    <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
                        Pilih waktu yang paling sesuai dengan jadwal Anda
                    </p>
                </div>
            </div>

            <Schedule />
        </main>
    );
}
