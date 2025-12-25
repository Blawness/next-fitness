"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="kontak" className="py-16 sm:py-20 lg:py-24 bg-[#0F172A]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <Badge variant="outline" className="mb-4 text-primary border-primary/30 bg-primary/10">
            <MessageCircle className="size-3" />
            Hubungi Kami
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Kontak <span className="gradient-text">Kami</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Mulai transformasi fitness Anda hari ini
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">
                  Informasi Kontak
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="size-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Alamat</h4>
                    <p className="text-muted-foreground text-sm">
                      Kemang Raya, Jakarta Selatan<br />
                      DKI Jakarta 12730
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="size-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telepon</h4>
                    <a href="tel:+6281234567890" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                      +62 812-3456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="size-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a href="mailto:info@fitnesselite.id" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                      info@fitnesselite.id
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="size-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Jam Operasional</h4>
                    <p className="text-muted-foreground text-sm">
                      Senin - Jumat: 06:00 - 21:00<br />
                      Sabtu - Minggu: 08:00 - 20:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button
              asChild
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25"
            >
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-5" />
                Chat via WhatsApp
              </a>
            </Button>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border h-full">
              <CardHeader>
                <CardTitle className="text-lg text-foreground">
                  Lokasi Kami
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square rounded-xl overflow-hidden bg-muted border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.8359746985567!2d106.81629931476897!3d-6.289166395457308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1f2c9e4c8c9%3A0x9d7f5e5f5e5f5e5f!2sKemang%2C%20Jakarta%20Selatan!5e0!3m2!1sen!2sid!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Next Fitness Location"
                  />
                </div>
                <p className="text-muted-foreground text-sm mt-4 text-center">
                  Mudah dijangkau dari berbagai area Jakarta Selatan
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
