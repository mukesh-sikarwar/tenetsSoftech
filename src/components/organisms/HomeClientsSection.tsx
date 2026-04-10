import Title from "../atoms/Title";
import Subtitle from "../atoms/Subtitle";
import Button from "../atoms/HomeButton";
import ProjectCard from "../molecules/HomeProjectCard";

export default function HomeClientsSection() {
  return (
    <section className="bg-[#f5f5f5] py-16 px-4">
      
      <Title text="What Clients Say" />

      <Subtitle text="We are a one-stop destination for all digital solution, be it website designing, digital marketing, SEO, mobile apps." />

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        <ProjectCard src="/image/kibu1.jpeg" alt="project1" />
        <ProjectCard src="/image/kibu2.jpeg" alt="project2" />
        <ProjectCard src="/image/kibu3.jpeg" alt="project3" />

      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <Button text="Read All Stories" />
      </div>

    </section>
  );
}