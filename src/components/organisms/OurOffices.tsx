import OfficeGrid from "../molecules/OfficeGrid";

export default function OurOffices() {
  return (
    <section className="bg-[#eef1f5] py-20 px-6 md:px-20 text-center">
      
      {/* Heading */}
      <h2 className="text-4xl text-gray-700 font-medium">
        Our Offices
      </h2>

      {/* Arrow */}
      <div className="mt-3 text-pink-500 text-xl">
        ↓
      </div>

      {/* Grid */}
      <OfficeGrid />

    </section>
  );
}