import Image from "next/image";
import SubText from "../atoms/AboutFounderSubText";

type Props = {
  image: string;
  name: string;
  role: string;
};

export default function TeamCard({ image, name, role }: Props) {
  return (
    <div className="flex flex-col items-center text-center">
      
      <div className="relative w-[220px] h-[220px]">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain"
        />
      </div>

      <h3 className="mt-4 text-blue-600 text-lg font-medium">
        {name}
      </h3>

      <SubText className="mt-1 text-sm">
        {role}
      </SubText>
    </div>
  );
}