type Props = {
  text: string;
};

export default function Paragraph({ text }: Props) {
  return (
    <p className="max-w-xl text-sm md:text-base leading-6 text-gray-200 mt-4">
      {text}
    </p>
  );
}