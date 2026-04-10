import Heading from "../atoms/AboutFounderHeading";
import TeamCard from "../molecules/AboutTeamCard";

export default function FoundingTeam() {
  return (
    <section className="bg-gray-100 py-16">
      
      <div className="max-w-5xl mx-auto bg-white shadow-md p-10">
        
        {/* Heading */}
        <div className="text-center">
          <Heading>Founding Team</Heading>

          {/* Pink Underline */}
          <div className="w-40 h-1 bg-pink-500 mx-auto mt-3"></div>
        </div>

        {/* Team Members */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 mt-12">
          
          <TeamCard
            image="/image/Gaurav-jain_leadership.png"
            name="Gaurav Jain"
            role="Founder & CEO"
          />

          <TeamCard
            image="/image/akshya_sir.png"
            name="Akshay Pratap Singh"
            role="Co-Founder, Business Analyst"
          />

        </div>
      </div>

    </section>
  );
}