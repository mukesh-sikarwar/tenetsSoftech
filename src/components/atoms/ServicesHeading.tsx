type Props = {
  title: string;
  description: string;
};

export default function Heading({ title, description }: Props) {
  return (
    <div className="text-center">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-7 max-w-xs">
        {description}
      </p>
    </div>
  );
}