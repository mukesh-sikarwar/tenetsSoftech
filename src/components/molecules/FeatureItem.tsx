// molecules/FeatureItem.tsx
import Icon from "../atoms/Icon";
import Text from "../atoms/Text";

type Props = {
  icon: string;
  title: string;
};

export default function FeatureItem({ icon, title }: Props) {
  return (
    <div className="flex items-center gap-4 group transition duration-300 hover:translate-x-2">
      
      <Icon
        src={icon}
        alt={title}
        className="w-14 h-14 transition duration-300 group-hover:scale-110"
      />

      <Text className="text-gray-700 text-lg font-medium">
        {title}
      </Text>
    </div>
  );
}