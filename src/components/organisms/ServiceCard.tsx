type Props = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  buttonText?: string;
};

export default function ServiceCard({
  title,
  description,
  icon = "☁️",
  buttonText = "Read More →",
}: Props) {
  return (
    <div className="group relative w-[350px] h-[380px] border border-gray-200 flex flex-col items-center justify-center text-center px-6 overflow-hidden cursor-pointer">

      {/* Normal Content */}
      <div className="z-10 transition duration-300 group-hover:opacity-0">
        
        {/* Icon */}
        <div className="mb-4 text-red-500 text-5xl">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-700 mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Hover Overlay */}
      <div className="
        absolute inset-0 bg-red-500 
        flex flex-col items-center justify-center 
        text-white px-6 text-center 
        opacity-0 group-hover:opacity-100 
        transition duration-300
      ">

        {/* Title animation */}
        <h3 className="
          mb-3 
          transform -translate-x-6 opacity-0
          group-hover:translate-x-0 group-hover:opacity-100
          transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
        ">
          {title}
        </h3>

        {/* Button animation */}
        <button className="
          mt-4 border border-white px-4 py-2 
          transform translate-x-6 opacity-0
          group-hover:translate-x-0 group-hover:opacity-100
          transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] delay-200
          hover:bg-white hover:text-red-500
        ">
          {buttonText}
        </button>

      </div>
    </div>
  );
}



// type Props = {
//   title?: string;
//   description?: string;
// };

// export default function ServiceCard({
//   title = "Website/Software Development",
//   description = "Help companies traverse the complex Digital Transformation journey leveraging cutting-edge technologies",
// }: Props) {
//   return (
//     <div className="group relative w-[350px] h-[380px] border border-gray-200 flex flex-col items-center justify-center text-center px-6 overflow-hidden cursor-pointer">

//       {/* Normal Content */}
//       <div className="z-10 transition duration-300 group-hover:opacity-0">
        
//         {/* Icon */}
//         <div className="mb-4 text-red-500 text-5xl">
//           ☁️
//         </div>

//         {/* Title */}
//         <h3 className="text-xl font-semibold text-gray-700 mb-3">
//           {title}
//         </h3>

//         {/* Description */}
//         <p className="text-gray-500 text-sm leading-relaxed">
//           {description}
//         </p>
//       </div>

//       {/* Hover Overlay */}
// <div className="
//   absolute inset-0 bg-red-500 
//   flex flex-col items-center justify-center 
//   text-white px-6 text-center 
//   opacity-0 group-hover:opacity-100 
//   transition duration-300
// ">
//   {/* Title → LEFT to RIGHT */}
//   <h3 className="text-xl font-semibold mb-3 
//     transform -translate-x-full 
//     group-hover:translate-x-0 
//     transition duration-500">
//     {title}
//   </h3>

//   {/* Button → RIGHT to LEFT */}
//   <button className="mt-4 border border-white px-4 py-2 
//     transform translate-x-full 
//     group-hover:translate-x-0 
//     transition duration-500 delay-300
//     hover:bg-white hover:text-red-500">
//     Read More →
//   </button>

// </div>
//       {/* <div className="absolute inset-0 bg-red-500 flex flex-col items-center justify-center text-white px-6 text-center transform translate-y-full group-hover:translate-y-0 transition duration-500">

//         <h3 className="text-xl font-semibold mb-3">
//           {title}
//         </h3>

//         <button className="mt-4 border border-white px-4 py-2 hover:bg-white hover:text-red-500 transition">
//           Read More →
//         </button>
//       </div> */}
//     </div>
//   );
// }