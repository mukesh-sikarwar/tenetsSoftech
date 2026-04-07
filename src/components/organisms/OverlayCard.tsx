"use client";

type Props = {
    title: string;
    description: string;
    overlayText: string;
};

export default function OverlayCard({
    title,
    description,
    overlayText,
}: Props) {
    return (
        <div>
        
            <div>
                <div className="group relative w-[300px] h-[350px] bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer">
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 transition-all duration-500 group-hover:-translate-x-full">
                      <h3 className="text-xl font-semibold mb-2">{title}</h3>
                       <p className="text-gray-600">{description}</p>
                    </div>

                   {/* Overlay Content */}
                   <div className="absolute inset-0 flex justify-center items-center bg-red-500 text-white p-6 translate-y-full transition-all duration-500 group-hover:translate-y-0">
                       <p className="text-center">{overlayText}</p>
                   </div>
               </div>
            </div>
        </div>
    );
}