import ServiceCard from "../molecules/ServiceCard";
import { Cloud, Smartphone, Lightbulb, Settings, Layout, Video } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3">
        
        {/* ROW 1 */}
        <ServiceCard
          icon={<Cloud size={50} />}
          title="Website/Software Development"
          description="Help companies traverse the complex Digital Transformation journey leveraging cutting-edge technologies"
        />

        <ServiceCard
          icon={<Smartphone size={50} />}
          title="Android/IOS Mobile App Development"
          description="Build disruptive products with a design-led engineering approach"
        />

        <ServiceCard
          icon={<Lightbulb size={50} />}
          title="DevOps Development"
          description="Create delightful experiences that impact customer satisfaction, brand perception and conversion rates."
        />

        {/* ROW 2 */}
        <ServiceCard
          icon={<Settings size={50} />}
          title="Digital Marketing/SEO"
          description="Automate end to end delivery pipeline and scale up infrastructure across leading Cloud platforms."
        />

        <ServiceCard
          icon={<Layout size={50} />}
          title="UI Design"
          description="Personalized, contextual and consistent digital experience across channels."
        />

        <ServiceCard
          icon={<Video size={50} />}
          title="Graphic Designing"
          description="Help media industries optimize and deliver video content."
        />

      </div>
    </section>
  );
}