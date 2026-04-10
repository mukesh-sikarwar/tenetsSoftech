type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Text({ children, className }: Props) {
  return (
    <p className={`text-white/80 text-lg ${className}`}>
      {children}
    </p>
  );
}