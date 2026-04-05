import BlogCard from "../atoms/BlogCard";
import OutlineButton from "../atoms/OutlineButton";

export default function LatestNewsletter() {
  return (
    <section className="bg-[#eef1f5] py-20 px-6 md:px-20 text-center">
      
      {/* Heading */}
      <h2 className="text-4xl text-gray-700 font-medium">
        Latest Newsletter
      </h2>

      {/* Cards */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        
        <BlogCard
          img="https://picsum.photos/200/100?1"
          title="How to network when you don't have a big social circle"
        />

        <BlogCard
          img="https://picsum.photos/200/100?2"
          title="Google Search can now teach you how to pronounce tricky words"
        />

      </div>

      {/* Button */}
      <OutlineButton text="View All Blogs" />

    </section>
  );
}