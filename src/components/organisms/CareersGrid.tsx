// organisms/CareersGrid.tsx

import JobCard from "../molecules/JobCard";

export default function CareersGrid() {
  return (
    <div className="bg-[#f3f1ec] py-16 px-6">
      
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          
          <JobCard
            title="Python Developer (Django)"
            experience="1-5 Years"
            location="Gwalior/Noida"
            posted="Yesterday"
          />

          <JobCard
            title="Digital Marketing Intern"
            experience="0-1 Years"
            location="Gwalior"
            posted="2 days ago"
          />

          <JobCard
            title="React Native Developer"
            experience="1-5 Years"
            location="Gwalior"
            posted="10 days ago"
          />

          <JobCard
            title="Internship"
            experience="0 - 6 Months"
            location="Gwalior"
            posted="16 days ago"
          />

          <JobCard
            title="MERNSTACK"
            experience="0-2"
            location="Gwalior/Noida"
            posted="16 days ago"
          />

        </div>

      </div>
    </div>
  );
}