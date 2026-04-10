// molecules/ClientLogo.tsx
import Image from "../atoms/Image";

type Props = {
  src: string;
};

export default function ClientLogo({ src }: Props) {
  return (
    <div className="flex items-center justify-center shadow-md ">
      
      <Image
        src={src}
        alt="client"
        className="w-full h-full object-contain"
      />
    </div>
  );
}