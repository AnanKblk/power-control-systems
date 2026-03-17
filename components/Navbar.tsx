"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "History", href: "#history" },
  { label: "Vision", href: "#vision" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Get a Quote", href: "#quote" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary shadow-lg py-3"
          : "bg-primary/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNavClick("#home")} className="shrink-0">
          <div className="bg-white rounded-lg px-3 py-1.5">
            <Image
              src="/Logo.jpeg"
              alt="Power Control Systems"
              width={160}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </div>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.label === "Get a Quote" ? (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="ml-4 bg-accent hover:bg-yellow-600 text-white text-sm font-semibold px-4 py-2 rounded transition-colors duration-200"
                >
                  {link.label}
                </button>
              </li>
            ) : (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-white/80 hover:text-white text-sm font-medium px-3 py-2 rounded hover:bg-white/10 transition-all duration-200"
                >
                  {link.label}
                </button>
              </li>
            )
          )}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-primary border-t border-white/10">
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`w-full text-left px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                    link.label === "Get a Quote"
                      ? "text-accent font-semibold"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
