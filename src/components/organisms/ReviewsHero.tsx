"use client";

import Image from "next/image";

export default function ReviewsHero() {
  return (
    <section className="relative w-full h-[300px] md:h-[425px]">
      
      {/* Background Image */}
      <Image
        src="/Reviewspage.jpg"
        alt="reviews"
        fill
        priority
        className="object-cover object-[75%_20%]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text */}
      <div className="absolute inset-0 flex items-center px-10 md:px-20">
        <h1 className="text-white text-4xl md:text-5xl font-medium">
          Reviews
        </h1>
      </div>

    </section>
  );
}