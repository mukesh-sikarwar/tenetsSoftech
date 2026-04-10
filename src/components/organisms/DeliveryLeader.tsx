import Heading from "../atoms/AboutFounderHeading";
import TeamCard from "../molecules/AboutTeamCard";

export default function DeliveryLeaderShip() {
  return (
    <section className="bg-gray-100 py-16">
      
      <div className="max-w-5xl mx-auto bg-white shadow-md p-10">
        
        {/* Heading */}
        <div className="text-center">
          <Heading>Delivery Leadership</Heading>

          {/* Pink Underline */}
          <div className="w-80 h-1 bg-pink-500 mx-auto mt-3"></div>
        </div>

        {/* Team Members */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 mt-12">
          
          <TeamCard
            image="/image/image_large.png"
            name="Rohit Arora"
            role="Delivery Head (Middle East & APAC)"
          />

          <TeamCard
            image="/image/Neelam_Mam.png"
            name="Neelam Jain"
            role="Director of Degital Business"
          />

          <TeamCard
            image="/image/Tony_Sir.png"
            name="Tony Timbol"
            role="Agile Coach, Mentor & IT Consultant"
          />

        </div>
      </div>

    </section>
  );
}