"use client";

import Image from "next/image";
import HeroContent from "../molecules/ServicesHeroContent";

export default function ServicesHero() {
  return (
    <section className="relative w-full h-[300px] md:h-[400px]">
      
      {/* Background Image */}
      <Image
        src="/image/services-section.jpeg" // 👈 apni image
        alt="services"
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center px-6 md:px-16">
        <HeroContent />
      </div>

    </section>
  );
}