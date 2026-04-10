type Props = {
  text: string;
};

export default function Subtitle({ text }: Props) {
  return (
    <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
      {text}
    </p>
  );
}