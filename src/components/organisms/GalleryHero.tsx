// organisms/GalleryHero.tsx

export default function GalleryHero() {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      
      {/* GRID */}
      <div className="grid grid-cols-3 grid-rows-2 h-full">
        
        {/* LEFT COLLAGE */}
        <img src="/image/gallery.jpg" className="w-full h-full object-cover" />
        <img src="/image/gallery.jpg" className="w-full h-full object-cover" />
        <img src="/image/gallery.jpg" className="w-full h-full object-cover" />

        <img src="/image/gallery.jpg" className="w-full h-full object-cover" />
        <img src="/image/gallery.jpg" className="w-full h-full object-cover" />
        <img src="/image/gallery.jpg" className="w-full h-full object-cover" />
      </div>

      {/* RIGHT BIG IMAGE */}
      <div className="absolute top-0 right-0 w-1/3 h-full">
        <img
          src="/image/gallery/img7.jpg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* TEXT */}
      <div className="absolute inset-0 flex items-center px-10 md:px-20">
        <h2 className="text-white text-3xl md:text-5xl font-semibold">
          Learn, Grow With Digimonk
        </h2>
      </div>

    </div>
  );
}