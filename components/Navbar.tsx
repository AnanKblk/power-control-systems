"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.history, href: "#history" },
    { label: t.nav.vision, href: "#vision" },
    { label: t.nav.products, href: "#products" },
    { label: t.nav.whyUs, href: "#why-us" },
    { label: t.nav.quote, href: "#quote" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary shadow-lg py-3" : "bg-primary/90 backdrop-blur-sm py-4"
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
            link.label === t.nav.quote ? (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="ml-2 bg-accent hover:bg-yellow-600 text-white text-sm font-semibold px-4 py-2 rounded transition-colors duration-200"
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

          {/* Language toggle */}
          <li>
            <button
              onClick={toggleLang}
              className="ml-2 border border-white/30 hover:border-white text-white/80 hover:text-white text-sm font-bold px-3 py-2 rounded transition-all duration-200 min-w-[52px]"
            >
              {lang === "en" ? "عربي" : "EN"}
            </button>
          </li>
        </ul>

        {/* Mobile: lang toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="border border-white/30 text-white/80 text-sm font-bold px-3 py-1.5 rounded transition-all duration-200"
          >
            {lang === "en" ? "عربي" : "EN"}
          </button>
          <button
            className="text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
                    link.label === t.nav.quote
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
