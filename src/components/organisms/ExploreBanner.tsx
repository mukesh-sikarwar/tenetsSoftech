// organisms/ExploreBanner.tsx

export default function ExploreBanner() {
  return (
    <div className="relative w-full h-[550px] flex items-center">
      
      {/* Background Image */}
      <img
        src="/image/careerpage.jpg"
        alt="career"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Light Overlay */}
      <div className="absolute"></div>

      {/* Gradient Overlay (left side fade) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 px-10 md:px-20">
        <h2 className="text-3xl md:text-5xl font-semibold text-white">
          Explore Digimonk with us!
        </h2>
      </div>

    </div>
  );
}