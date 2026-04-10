import Image from "next/image";
import AboutContent from "../molecules/AboutContent";

export default function AboutSection() {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Grid Images */}
      <div className="grid grid-cols-3 grid-rows-2 h-full">
        
        <div className="relative">
          <Image
            src="/image/change-img-2.jpg"
            alt="img1"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative col-span-2">
          <Image
          src="/image/change-img-2.jpg"
            alt="img2"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative col-span-2">
          <Image
           src="/image/change-img-2.jpg"
            alt="img3"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative">
          <Image
            src="/image/change-img-2.jpg"
            alt="img4"
            fill
            className="object-cover"
          />
        </div>

      </div>

      {/* Content */}
      <AboutContent />
    </section>
  );
}