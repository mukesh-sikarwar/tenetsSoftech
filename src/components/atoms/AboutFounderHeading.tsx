type Props = {
  children: React.ReactNode;
};

export default function Heading({ children }: Props) {
  return (
    <h2 className="text-4xl font-semibold text-gray-700 text-center">
      {children}
    </h2>
  );
}