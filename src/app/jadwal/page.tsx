import type { Metadata } from "next";
import Schedule from "@/components/Schedule";

export const metadata: Metadata = {
    title: "Jadwal Kelas - Fitness Elite",
    description: "Lihat jadwal lengkap kelas fitness private di Fitness Elite, Kemang Jakarta Selatan. Senin sampai Minggu.",
};

export default function JadwalPage() {
    return (
        <main className="pt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-black mb-4">
                        Jadwal <span className="bg-gradient-to-r from-[#00ff87] to-[#00d4ff] bg-clip-text text-transparent">Kelas</span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Pilih waktu yang paling sesuai dengan jadwal Anda
                    </p>
                </div>
            </div>

            <Schedule />
        </main>
    );
}
