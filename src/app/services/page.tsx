import CTASection from "@/components/organisms/CTASection";
import LatestNewsletter from "@/components/organisms/LatestNewsletter";
import ServicesHero from "@/components/organisms/ServicesHero";
import ServicesSection from "@/components/organisms/ServicesSection";
import MainLayout from "@/components/templates/MainLayout";

export default function Services() {
  return (
    <MainLayout>
      <ServicesHero />
      <ServicesSection />
      <CTASection />
      <LatestNewsletter />
      
    </MainLayout>
  );
}