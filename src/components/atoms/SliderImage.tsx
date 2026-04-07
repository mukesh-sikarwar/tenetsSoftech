type Props = {
  src: string;
  alt: string;
};

export default function SliderImage({ src, alt }: Props) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-[350px] object-center bg-gray-100"
    />
  );
}