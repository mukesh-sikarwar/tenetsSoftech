import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex gap-4 mt-2 text-gray-600">
      <FaLinkedinIn className="cursor-pointer hover:text-black" />
      <FaTwitter className="cursor-pointer hover:text-black" />
      <FaFacebookF className="cursor-pointer hover:text-black" />
    </div>
  );
}