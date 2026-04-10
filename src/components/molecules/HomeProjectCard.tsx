import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export default function ProjectCard({ src, alt }: Props) {
  return (
    <div className="overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={500}
        height={300}
        className="w-full h-auto object-cover"
      />
    </div>
  );
}