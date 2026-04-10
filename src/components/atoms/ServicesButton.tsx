type Props = {
  text: string;
};

export default function Button({ text }: Props) {
  return (
    <button className="border border-white text-white px-8 py-3 text-lg transition duration-300 hover:bg-white hover:text-red-600">
      {text}
    </button>
  );
}