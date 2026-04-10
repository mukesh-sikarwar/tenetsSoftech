import FooterColumn from "../molecules/FooterColumn";
import SocialIcons from "../atoms/SocialIcon";

export default function Footer() {
  return (
    <footer className="bg-white px-6 md:px-20 py-16">
      
      <div className="grid md:grid-cols-3 gap-10">
        
        {/* Column 1 */}
        <FooterColumn
          title="Who We Are"
          links={[
            "Home",
            "Reviews",
            "Career",
            "About Us",
            "Privacy Policy",
            "Refund Policy",
          ]}
        />

        {/* Column 2 */}
        <FooterColumn
          title="What We Do"
          links={[
            "Website Development",
            "DevOps Development",
            "UI Design",
            "Android/IOS Development",
            "Digital Marketing/SEO",
            "Graphic Designing",
          ]}
        />

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold text-gray-700 mb-4">
            Connect With Us
          </h3>

          <SocialIcons />

          {/* Logo */}
          <div className="mt-10">
            <img
              src="/logo.jpg" 
              alt="logo"
              className="w-24 h-auto"
            />
          </div>

          {/* Styled Text */}
          <p className="text-sm font-semibold mt-2">
            ©2026{" "}
            <span className="bg-gradient-to-r from-red-500 to-blue-900 bg-clip-text text-transparent">
              Tenets Softech
            </span>
          </p>
        </div>

      </div>
    </footer>
  );
}