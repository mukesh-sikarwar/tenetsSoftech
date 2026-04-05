import NavLink from "../atoms/NavLink";

export default function NavMenu() {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <NavLink href="/" label="Home" />
      <NavLink href="/about" label="About Us" />
      <NavLink href="/services" label="Services" />
      <NavLink href="/career" label="Career" />
      <NavLink href="/review" label="Review" />
      <NavLink href="/gallery" label="Gallery" />
      <NavLink href="/contact" label="Contact Us" />
    </div>
  );
}