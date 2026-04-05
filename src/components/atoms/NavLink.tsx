"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  label: string;
};

export default function NavLink({ href, label }: Props) {
  const pathname = usePathname();

  // ✅ Fixed active logic
  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <Link href={href} className="relative text-sm font-medium group">
      
      {/* Text */}
      <span
        className={`transition-colors duration-300 ${
          isActive ? "text-green-600" : "text-black"
        }`}
      >
        {label}
      </span>

      {/* Underline */}
      <span
        className={`
          absolute left-0 -bottom-1 h-[2px] w-full bg-green-600
          transform scale-x-0 origin-right
          transition-transform duration-300 ease-in-out
          
          group-hover:scale-x-100 group-hover:origin-left
          
          ${isActive ? "scale-x-100 origin-left" : ""}
        `}
      ></span>
    </Link>
  );
}