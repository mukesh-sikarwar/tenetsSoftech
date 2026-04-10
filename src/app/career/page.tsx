import CareerCTA from "@/components/organisms/CareerCTA";
import CareersGrid from "@/components/organisms/CareersGrid";
import ExploreBanner from "@/components/organisms/ExploreBanner";
import LatestNewsletter from "@/components/organisms/LatestNewsletter";
import MainLayout from "@/components/templates/MainLayout";

export default function Career() {
  return (
    <MainLayout>
      <ExploreBanner />
      <CareersGrid />
      <CareerCTA />
      <LatestNewsletter />
    </MainLayout>
  );
}