type Props = {
  children: React.ReactNode;
};

export default function Overlay({ children }: Props) {
  return (
    <div className="absolute inset-0 bg-red-600/80 flex flex-col items-center justify-center text-center px-4">
      {children}
    </div>
  );
}