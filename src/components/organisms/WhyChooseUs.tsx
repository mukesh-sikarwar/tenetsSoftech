// organisms/WhyChooseUs.tsx
import FeatureItem from "../molecules/FeatureItem";

export default function WhyChooseUs() {
  return (
    <div className="bg-gray-100 py-16 px-8 flex flex-col justify-center items-center">
      
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-gray-800 mb-12">
        Why choose us
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-20">
        
        <FeatureItem
          icon="/image/Authenticity.png"
          title="Authenticity"
        />

        <FeatureItem
          icon="/image/Governance_0.png"
          title="Data Privacy"
        />

        <FeatureItem
          icon="/image/sales_suport.png"
          title="Excellent After-Sales Support"
        />

        <FeatureItem
          icon="/image/acmanager.png"
          title="Dedicated Account Manager"
        />

      </div>
    </div>
  );
}