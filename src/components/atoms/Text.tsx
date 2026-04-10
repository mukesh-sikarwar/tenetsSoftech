// atoms/Text.tsx
type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Text({ children, className }: Props) {
  return <p className={className}>{children}</p>;
}