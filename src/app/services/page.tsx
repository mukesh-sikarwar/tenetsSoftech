import ServiceCard from "@/components/organisms/ServiceCard";
import ServicesHero from "@/components/organisms/ServicesHero";
import MainLayout from "@/components/templates/MainLayout";

export default function Services() {
  return (
    <MainLayout>
      <ServicesHero  />
      <ServiceCard />
    </MainLayout>
  );
}