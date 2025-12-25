"use client";

import { motion } from "framer-motion";
import { Target, Award, Users, Heart } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
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
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zml0bmVzcyUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Coach Dina",
      specialty: "Yoga & Recovery",
      experience: "7+ tahun",
      certification: "RYT-200 Certified",
      image: "https://images.unsplash.com/photo-1697060598741-7ca9b696febb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBpbGF0ZXN8ZW58MHx8MHx8fDA%3D"
    }
  ];

  return (
    <section id="tentang" className="py-16 sm:py-20 lg:py-24 bg-[#020617]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center mb-14 sm:mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="outline" className="mb-6 text-primary border-primary/30 bg-primary/10">
              Tentang Kami
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Personal Training yang <span className="gradient-text">Berbeda</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Next Fitness didirikan dengan misi untuk memberikan pengalaman fitness yang personal dan eksklusif. Kami percaya bahwa setiap orang memiliki tujuan dan kemampuan yang berbeda.
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

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Nilai <span className="gradient-text">Kami</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14 sm:mb-16 lg:mb-24">
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
                    <h4 className="text-lg font-bold text-foreground mb-2">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {value.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Trainers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <Badge variant="outline" className="mb-4 text-primary border-primary/30 bg-primary/10">
            Tim Kami
          </Badge>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            Trainer <span className="gradient-text">Profesional</span>
          </h3>
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
                  <h4 className="text-lg font-bold text-foreground mb-1">
                    {trainer.name}
                  </h4>
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
  );
}
