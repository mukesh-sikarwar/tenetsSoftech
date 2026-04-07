"use client";

import { useState } from "react";
import SliderImage from "../atoms/SliderImage";

type Slide = {
  src: string;
  alt: string;
};

type Props = {
  slides: Slide[];
};

export default function Carousel({ slides }: Props) {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative w-full h-[350px] md:h-[400px] overflow-hidden">
        
      
      {/* Image */}
      <SliderImage
        src={slides[current].src}
        alt={slides[current].alt}
      />

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === current ? "bg-red-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}