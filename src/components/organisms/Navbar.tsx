"use client";

import { useState, useEffect } from "react";
import Logo from "../atoms/Logo";
import MenuToggle from "../atoms/MenuToggle";
import NavMenu from "../molecules/NavMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 
      ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-16">

        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <NavMenu />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <MenuToggle open={open} toggle={() => setOpen(!open)} />
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 py-4 shadow-md">
          <NavMenu />
        </div>
      )}
    </nav>
  );
}