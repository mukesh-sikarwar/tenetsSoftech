type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SubText({ children, className }: Props) {
  return (
    <p className={`text-gray-600 ${className}`}>
      {children}
    </p>
  );
}