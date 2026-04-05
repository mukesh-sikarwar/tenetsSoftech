type Props = {
  placeholder: string;
  value?: string;
  onChange?: (e: any) => void;
};

export default function Input({ placeholder, value, onChange }: Props) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2"
    />
  );
}