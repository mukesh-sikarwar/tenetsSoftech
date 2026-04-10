type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Icon({ children, className }: Props) {
  return (
    <div className={`text-red-500 mb-6 flex justify-center ${className}`}>
      {children}
    </div>
  );
}