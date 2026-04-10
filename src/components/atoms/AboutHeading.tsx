type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Heading({ children, className }: Props) {
  return (
    <h2 className={`text-4xl md:text-5xl font-bold text-white ${className}`}>
      {children}
    </h2>
  );
}