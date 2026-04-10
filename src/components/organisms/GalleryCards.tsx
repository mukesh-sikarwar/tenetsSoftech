// organisms/GalleryCards.tsx

const data = [
  {
    img: "/image/change-img-2.jpg",
    title: "Google Devfest 2k22",
    color: "bg-yellow-200",
    rotate: "-rotate-6",
  },
  {
    img: "/image/change-img-2.jpg",
    title: "Workshop on Latest Techniques in Linkedin Growth",
    color: "bg-green-200",
    rotate: "rotate-3",
  },
  {
   img: "/image/change-img-2.jpg",
    title: "Diwali Celebration 2k22",
    color: "bg-purple-200",
    rotate: "rotate-6",
  },
  {
    img: "/image/change-img-2.jpg",
    title: "Workshop on Latest Techniques in git",
    color: "bg-green-200",
    rotate: "-rotate-3",
  },
  {
    img: "/image/change-img-2.jpg",
    title: "Workshop on Latest Techniques in",
    color: "bg-yellow-100",
    rotate: "-rotate-6",
  },
  {
    img: "/image/change-img-2.jpg",
    title: "Art of Living",
    color: "bg-purple-200",
    rotate: "rotate-2",
  },
  {
    img: "/image/change-img-2.jpg",
    title: "Rishikesh Trip 2k21",
    color: "bg-yellow-200",
    rotate: "rotate-6",
  },
];

export default function GalleryCards() {
  return (
    <div className="bg-[#f3f1ec] py-20 px-6 flex flex-wrap justify-center gap-10">
      
      {data.map((item, i) => (
        <div
          key={i}
          className={`w-[220px] bg-white shadow-xl ${item.rotate} 
                      transition duration-300 hover:scale-105`}
        >
          
          {/* Image */}
          <img
            src={item.img}
            alt="gallery"
            className="w-full h-[180px] object-cover"
          />

          {/* Caption */}
          <div className={`${item.color} text-center p-3 text-sm font-medium`}>
            {item.title}
          </div>
        </div>
      ))}

    </div>
  );
}