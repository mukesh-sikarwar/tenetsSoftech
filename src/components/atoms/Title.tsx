type Props = {
  text: string;
};

export default function Title({ text }: Props) {
  return (
    <h2 className="text-4xl md:text-5xl font-medium text-gray-800 text-center mb-4">
      {text}
    </h2>
  );
}