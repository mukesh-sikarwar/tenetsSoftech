type Props = {
  text: string;
};

export default function Title({ text }: Props) {
  return (
    <h2 className="text-white text-3xl md:text-5xl font-medium mb-8 tracking-wide">
      {text}
    </h2>
  );
}