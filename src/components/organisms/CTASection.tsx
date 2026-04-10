"use client";

import Image from "next/image";
import Title from "../atoms/ServicesTitle";
import Button from "../atoms/ServicesButton";
import Overlay from "../molecules/ServicesOverlay";

export default function CTASection() {
  return (
    <section className="relative w-full h-[300px] md:h-[400px]">
      
      {/* Background Image */}
      <Image
        src="/image/cta-bg.jpg"
        alt="cta"
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay Content */}
      <Overlay>
        <Title text="Looking for our expert services?" />
        <Button text="Talk to our Experts!" />
      </Overlay>

    </section>
  );
}