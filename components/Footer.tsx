"use client";

import Image from "next/image";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "History", href: "#history" },
  { label: "Vision", href: "#vision" },
  { label: "Mission", href: "#mission" },
  { label: "Products", href: "#products" },
  { label: "Why Us", href: "#why-us" },
  { label: "Get a Quote", href: "#quote" },
];

export default function Footer() {
  const scrollTo = (anchor: string) => {
    document.querySelector(anchor)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <div className="inline-block bg-white rounded-lg px-3 py-2">
                <Image
                  src="/Logo.jpeg"
                  alt="Power Control Systems"
                  width={160}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Trusted supplier of gas equipment, instrumentation, hydraulics,
              and industrial safety systems since 1994.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/80 mb-5">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/60 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/80 mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">
                  Website
                </span>
                <a
                  href="https://power-control-systems.com"
                  className="hover:text-white transition-colors"
                >
                  power-control-systems.com
                </a>
              </li>
              <li>
                <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">
                  Region
                </span>
                Middle East & North Africa
              </li>
              <li>
                <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">
                  Sectors
                </span>
                Oil · Gas · Industrial
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Power Control Systems. All rights
            reserved.
          </p>
          <p className="text-white/30 text-xs">
            Established 1994 · Restructured 2006 · 30+ Years of Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
