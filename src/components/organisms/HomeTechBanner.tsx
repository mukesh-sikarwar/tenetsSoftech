// organisms/TechBanner.tsx
import Button from "../atoms/Button";

export default function HomeTechBanner() {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center text-center">
      
      {/* Background Image */}
      <img
        src="/image/technology-bg.jpg"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* White Overlay */}
      <div className="absolute inset-0 bg-white/90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 text-gray-800">
        
        <h2 className="text-xl md:text-2xl font-semibold">
          We are a one-stop destination for all digital solution, be it website designing,
        </h2>

        <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-600">
          Web development is about solving complex problems on the web through creative and cutting edge technologies. 
          To see this through, we at Digimonk Technologies provide a complete end to end web solutions that help brands 
          to leverage their business.
        </p>

        <div className="mt-6">
          <Button>View all technologies</Button>
        </div>
      </div>
    </div>
  );
}