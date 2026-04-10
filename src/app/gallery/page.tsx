import GalleryCards from "@/components/organisms/GalleryCards";
import GalleryHero from "@/components/organisms/GalleryHero";
import LatestNewsletter from "@/components/organisms/LatestNewsletter";
import LifeAtDigimonk from "@/components/organisms/LifeAtDigimonk";
import MainLayout from "@/components/templates/MainLayout";

export default function Galleryt() {
  return (
    <MainLayout>
      <GalleryHero />
      <LifeAtDigimonk />
      <GalleryCards />
      <LatestNewsletter />
    </MainLayout>
  );
}