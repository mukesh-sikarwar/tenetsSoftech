type Props = {
  text: string;
};

export default function Heading({ text }: Props) {
  return (
    <h1 className="text-4xl md:text-5xl font-medium text-white">
      {text}
    </h1>
  );
}