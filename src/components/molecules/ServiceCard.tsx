import Icon from "../atoms/ServicesIcon";
import Heading from "../atoms/ServicesHeading";

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function ServiceCard({ icon, title, description }: Props) {
  return (
    <div className="flex flex-col items-center justify-center px-12 py-16 border-r last:border-r-0 border-gray-200 bg-gray-100">
      <Icon className="text-5xl">{icon}</Icon>
      <Heading title={title} description={description} />
    </div>
  );
}