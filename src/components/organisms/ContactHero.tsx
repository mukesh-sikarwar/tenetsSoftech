import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative w-full h-[300px] md:h-[400px]">
      
      {/* Background Image */}
      <Image
        src="/contact-bg.jpg" // 👉 apni image public folder me daalo
        alt="contact"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-5xl font-semibold">
          Contact Us
        </h1>
      </div>
    </section>
  );
}