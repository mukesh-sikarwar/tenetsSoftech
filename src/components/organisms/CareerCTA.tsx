// organisms/CareerCTA.tsx

export default function CareerCTA() {
  return (
    <div className="bg-[#fff] py-20 px-6 text-center">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-medium text-gray-700 leading-snug">
        Excited to work with us... <br />
        But don't see your positions listed
      </h2>

      {/* Button */}
      <button className="mt-10 border border-red-500 text-red-500 px-10 py-3 
                         text-lg transition duration-300 
                         hover:bg-red-500 hover:text-white">
        Send Your Resume
      </button>

    </div>
  );
}