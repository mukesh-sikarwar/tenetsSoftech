import HeroSlider from "@/components/organisms/HeroSlider";
import OverlayCard from "@/components/organisms/OverlayCard";
import MainLayout from "@/components/templates/MainLayout";

export default function Home() {
  return (
    <MainLayout>

      {/* Hero Slider */}
      <HeroSlider />

      {/* Overlay Cards */}
      <div className="flex flex-wrap gap-6 justify-center py-10">
        
        <OverlayCard
          title="Web Development"
          description="Modern websites build karte hain"
          overlayText={
        <>
      Web Development <br />
      <span className="underline">Read more</span>
    </>
  }
/>
<OverlayCard
  title="App Development"
  description="Modern App build karte hain"
  overlayText={
    <>
      App Development <br />
      <span className="underline">Read more</span>
    </>
  }
/>

       

      </div>

    </MainLayout>
  );
}