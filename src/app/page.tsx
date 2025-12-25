"use client";

import Hero from "@/components/Hero";
import Schedule from "@/components/Schedule";
import ClassesSection from "@/components/ClassesSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";

export default function Home() {

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Classes Section */}
      <ClassesSection />

      {/* Schedule Section */}
      <Schedule />

      {/* Features Section */}
      <FeaturesSection />

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
