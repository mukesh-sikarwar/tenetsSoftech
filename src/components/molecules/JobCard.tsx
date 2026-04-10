// molecules/JobCard.tsx

import { Briefcase, MapPin } from "lucide-react";

type Props = {
  title: string;
  experience: string;
  location: string;
  posted: string;
};

export default function JobCard({
  title,
  experience,
  location,
  posted,
}: Props) {
  return (
    <div className="bg-gray-100 border border-gray-300 p-6 w-full max-w-[420px]">
      
      {/* Title */}
      <h3 className="text-red-600 text-xl font-medium mb-4">
        {title}
      </h3>

      {/* Experience */}
      <div className="flex items-center gap-3 text-gray-600 mb-2">
        <Briefcase size={18} />
        <span>{experience}</span>
      </div>

      {/* Location */}
      <div className="flex items-center gap-3 text-gray-600 mb-2">
        <MapPin size={18} />
        <span>{location}</span>
      </div>

      {/* Posted */}
      <p className="text-gray-600 mt-2">
        Posted : {posted}
      </p>
    </div>
  );
}