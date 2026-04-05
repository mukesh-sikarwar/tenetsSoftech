type Props = {
  title: string;
  img: string;
};

export default function BlogCard({ title, img }: Props) {
  return (
    <div className="flex items-center bg-white shadow-md rounded-md p-4 gap-6 hover:shadow-lg transition">
      
      {/* Image */}
      <img
        src={img}
        alt="blog"
        className="w-32 h-20 object-cover rounded"
      />

      {/* Text */}
      <p className="text-gray-700 text-base leading-6">
        {title}
      </p>

    </div>
  );
}