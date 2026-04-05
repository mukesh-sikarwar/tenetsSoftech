type Props = {
  text: string;
};

export default function OutlineButton({ text }: Props) {
  return (
    <div className="flex justify-center mt-10">
      <button className="border border-red-500 text-red-500 px-8 py-2 hover:bg-red-500 hover:text-white transition">
        {text}
      </button>
    </div>
  );
}