import FooterLink from "../atoms/FooterLink";

type Props = {
  title: string;
  links: string[];
};

export default function FooterColumn({ title, links }: Props) {
  return (
    <div>
      <h3 className="font-semibold text-gray-700 mb-4">
        {title}
      </h3>

      {links.map((link, i) => (
        <FooterLink key={i} text={link} />
      ))}
    </div>
  );
}