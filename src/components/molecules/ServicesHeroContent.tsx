import Title from "../atoms/ServicesTitle";
import Paragraph from "../atoms/Paragraph";

export default function HeroContent() {
  return (
    <div className="z-10 max-w-2xl">
      <Title text="Services" />
      <Paragraph text="Agility combined with design-led engineering, cloud and analytics driven marketing results in great products, faster" />
    </div>
  );
}