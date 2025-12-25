export interface ScheduleItem {
    hari: string;
    waktu: string;
    kelas: string;
    trainer: string;
    slot: number;
}

export const scheduleData: ScheduleItem[] = [
    {
        hari: "Senin",
        waktu: "06:00 - 07:30",
        kelas: "Personal Training",
        trainer: "Coach Ryan",
        slot: 5
    },
    {
        hari: "Senin",
        waktu: "18:00 - 19:00",
        kelas: "HIIT - High Intensity",
        trainer: "Coach Sarah",
        slot: 8
    },
    {
        hari: "Selasa",
        waktu: "07:00 - 08:30",
        kelas: "Strength Training",
        trainer: "Coach Michael",
        slot: 6
    },
    {
        hari: "Selasa",
        waktu: "19:00 - 20:00",
        kelas: "Functional Training",
        trainer: "Coach Ryan",
        slot: 7
    },
    {
        hari: "Rabu",
        waktu: "06:00 - 07:00",
        kelas: "Cardio Burn",
        trainer: "Coach Sarah",
        slot: 10
    },
    {
        hari: "Rabu",
        waktu: "18:30 - 19:30",
        kelas: "Core & Abs",
        trainer: "Coach Dina",
        slot: 8
    },
    {
        hari: "Kamis",
        waktu: "07:00 - 08:30",
        kelas: "Personal Training",
        trainer: "Coach Michael",
        slot: 5
    },
    {
        hari: "Kamis",
        waktu: "18:00 - 19:30",
        kelas: "Functional Training",
        trainer: "Coach Ryan",
        slot: 6
    },
    {
        hari: "Jumat",
        waktu: "07:00 - 08:00",
        kelas: "Core & Abs",
        trainer: "Coach Dina",
        slot: 8
    },
    {
        hari: "Jumat",
        waktu: "19:00 - 20:00",
        kelas: "HIIT - High Intensity",
        trainer: "Coach Sarah",
        slot: 8
    },
    {
        hari: "Sabtu",
        waktu: "08:00 - 10:00",
        kelas: "Full Body Workout",
        trainer: "Coach Michael",
        slot: 10
    },
    {
        hari: "Sabtu",
        waktu: "10:30 - 11:30",
        kelas: "Strength Training",
        trainer: "Coach Ryan",
        slot: 7
    },
    {
        hari: "Minggu",
        waktu: "09:00 - 10:30",
        kelas: "Yoga & Recovery",
        trainer: "Coach Dina",
        slot: 12
    },
    {
        hari: "Minggu",
        waktu: "11:00 - 12:00",
        kelas: "Cardio Burn",
        trainer: "Coach Sarah",
        slot: 10
    }
];
