"use client";

import Image from "next/image";
import ServicesHeroContent from "../molecules/ServicesHeroContent";

export default function ServicesHero() {
  return (
    <section className="relative w-full h-[320px] md:h-[420px]">
      
      {/* Background Image */}
      <Image
        src="/services-section.jpeg"
        alt="services"
        fill
        priority
        className="object-cover object-[75%_10%]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900/40"></div>

      {/* Content */}
      <ServicesHeroContent />

    </section>
  );
}