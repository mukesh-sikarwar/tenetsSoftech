type Props = {
  text: string;
};

export default function HomeButton({ text }: Props) {
  return (
    <button className="border border-red-500 text-red-500 px-8 py-3 hover:bg-red-500 hover:text-white transition duration-300">
      {text}
    </button>
  );
}