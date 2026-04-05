import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";

export default function ServicesHeroContent() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20">
      
      <Heading text="Services" />

      <Paragraph
        text="Agility combined with design-led engineering, cloud and analytics driven marketing results in great products, faster"
      />

    </div>
  );
}