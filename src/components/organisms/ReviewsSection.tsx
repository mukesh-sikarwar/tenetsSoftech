import UsersGrid from "../molecules/UsersGrid";

export default function ReviewsSection() {
  return (
    <section className="bg-[#eef1f5] py-20 px-6 md:px-20 text-center">
      
      {/* Heading */}
      <h2 className="text-4xl text-gray-700 font-medium">
        Reviews
      </h2>

      {/* Paragraph */}
      <p className="max-w-3xl mx-auto mt-6 text-gray-600 leading-7">
        "Digimonk is a committed team of expert designers and programmers. They were very flexible and made all the changes I suggested very promptly. They stayed in touch regularly and addressed any concerns I had promptly. It was great working with this team and I will definitely hire them again for my upcoming projects."
      </p>

      {/* Users */}
      <UsersGrid />

    </section>
  );
}