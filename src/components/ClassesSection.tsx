"use client";

import { motion } from "framer-motion";
import ClassCard from "@/components/ClassCard";
import { classesData } from "@/data/classes";

export default function ClassesSection() {
  return (
    <section id="kelas" className="py-16 sm:py-20 lg:py-24 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full text-[#60A5FA] text-sm font-medium mb-4 sm:mb-6">
            Program Latihan
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Jenis <span className="gradient-text">Kelas Kami</span>
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg max-w-2xl mx-auto">
            Berbagai pilihan program untuk membantu Anda mencapai tujuan fitness
          </p>
        </motion.div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classesData.slice(0, 6).map((classItem, idx) => (
            <motion.div
              key={classItem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <ClassCard classData={classItem} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
