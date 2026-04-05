import ServiceCard from "../organisms/ServiceCard"
export default function ServicesSection() {
  return (
    <section className="py-16 flex flex-wrap gap-6 justify-center">
      
      <ServiceCard
        title="Website Development"
        description="Modern responsive websites build karte hain"
        icon="🌐"
      />

      <ServiceCard
        title="App Development"
        description="Android & iOS apps build karte hain"
        icon="📱"
      />

      <ServiceCard
        title="Digital Marketing"
        description="SEO & Ads se business grow karte hain"
        icon="📈"
      />

    </section>
  );
}