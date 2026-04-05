type Props = {
  text: string;
};

export default function FooterLink({ text }: Props) {
  return (
    <p className="text-gray-600 text-sm mb-2 hover:text-black cursor-pointer">
      {text}
    </p>
  );
}