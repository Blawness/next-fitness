export interface ClassType {
    id: string;
    nama: string;
    deskripsi: string;
    durasi: string;
    intensitas: "Low" | "Medium" | "High";
    manfaat: string[];
}

export const classesData: ClassType[] = [
    {
        id: "personal-training",
        nama: "Personal Training",
        deskripsi: "Latihan one-on-one dengan trainer profesional, program disesuaikan dengan tujuan personal Anda.",
        durasi: "60-90 menit",
        intensitas: "Medium",
        manfaat: [
            "Program latihan yang dipersonalisasi",
            "Bimbingan intensif dari trainer",
            "Hasil lebih cepat dan terukur",
            "Fleksibel sesuai jadwal Anda"
        ]
    },
    {
        id: "hiit",
        nama: "HIIT - High Intensity",
        deskripsi: "Latihan interval intensitas tinggi untuk membakar kalori maksimal dalam waktu singkat.",
        durasi: "45-60 menit",
        intensitas: "High",
        manfaat: [
            "Bakar kalori hingga 500-800 per sesi",
            "Tingkatkan metabolisme",
            "Efisien waktu",
            "Build stamina & endurance"
        ]
    },
    {
        id: "strength-training",
        nama: "Strength Training",
        deskripsi: "Fokus pada peningkatan kekuatan otot menggunakan beban dan resistance training.",
        durasi: "75-90 menit",
        intensitas: "Medium",
        manfaat: [
            "Bangun massa otot",
            "Tingkatkan kekuatan tubuh",
            "Boost metabolisme",
            "Cegah osteoporosis"
        ]
    },
    {
        id: "functional-training",
        nama: "Functional Training",
        deskripsi: "Latihan gerakan fungsional untuk aktivitas sehari-hari yang lebih baik.",
        durasi: "60-90 menit",
        intensitas: "Medium",
        manfaat: [
            "Tingkatkan mobilitas",
            "Cegah cedera",
            "Balance & koordinasi",
            "Applicable untuk kehidupan nyata"
        ]
    },
    {
        id: "cardio-burn",
        nama: "Cardio Burn",
        deskripsi: "Latihan kardio intensif untuk kesehatan jantung dan pembakaran lemak.",
        durasi: "45-60 menit",
        intensitas: "High",
        manfaat: [
            "Kesehatan jantung optimal",
            "Bakar lemak efektif",
            "Tingkatkan stamina",
            "Detoksifikasi melalui keringat"
        ]
    },
    {
        id: "core-abs",
        nama: "Core & Abs",
        deskripsi: "Fokus pada penguatan otot inti, perut, dan stabilitas tubuh.",
        durasi: "45-60 menit",
        intensitas: "Medium",
        manfaat: [
            "Six-pack abs definition",
            "Postur tubuh lebih baik",
            "Core strength optimal",
            "Cegah nyeri punggung"
        ]
    },
    {
        id: "full-body",
        nama: "Full Body Workout",
        deskripsi: "Latihan komprehensif yang menargetkan seluruh kelompok otot tubuh.",
        durasi: "90-120 menit",
        intensitas: "High",
        manfaat: [
            "Latih semua muscle groups",
            "Pembakaran kalori maksimal",
            "Efisien untuk busy people",
            "Improve overall fitness"
        ]
    },
    {
        id: "yoga-recovery",
        nama: "Yoga & Recovery",
        deskripsi: "Sesi yoga untuk pemulihan otot, fleksibilitas, dan relaksasi pikiran.",
        durasi: "60-90 menit",
        intensitas: "Low",
        manfaat: [
            "Tingkatkan fleksibilitas",
            "Pemulihan otot optimal",
            "Redakan stress",
            "Mind-body connection"
        ]
    }
];
