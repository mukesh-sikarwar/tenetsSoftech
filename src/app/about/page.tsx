import AboutOurClients from "@/components/organisms/AboutClientLogo";
import AboutSection from "@/components/organisms/AboutSection";
import DeliveryLeaderShip from "@/components/organisms/DeliveryLeader";
import FoundingTeam from "@/components/organisms/FoundingTeam";
import LatestNewsletter from "@/components/organisms/LatestNewsletter";
import WhyChooseUs from "@/components/organisms/WhyChooseUs";
import MainLayout from "@/components/templates/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <AboutSection />
      <FoundingTeam />
      <DeliveryLeaderShip /> 
      <WhyChooseUs />
      <AboutOurClients />
      <LatestNewsletter />
    </MainLayout>
  );
}