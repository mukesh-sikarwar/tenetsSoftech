import LatestNewsletter from "@/components/organisms/LatestNewsletter";
import ReviewsHero from "@/components/organisms/ReviewsHero";
import ReviewsSection from "@/components/organisms/ReviewsSection";
import MainLayout from "@/components/templates/MainLayout";

export default function Galleryt() {
  return (
    <MainLayout>
      <ReviewsHero />
      <ReviewsSection />
      <LatestNewsletter />
    </MainLayout>
  );
}