"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.history, href: "#history" },
    { label: t.nav.vision, href: "#vision" },
    { label: t.nav.products, href: "#products" },
    { label: t.nav.whyUs, href: "#why-us" },
    { label: t.nav.quote, href: "#quote" },
  ];

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
                <Image src="/Logo.jpeg" alt="Power Control Systems" width={160} height={48} className="h-10 w-auto object-contain" />
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">{t.footer.desc}</p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/80 mb-5">
              {t.footer.quickLinks}
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button onClick={() => scrollTo(link.href)} className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/80 mb-5">
              {t.footer.contact}
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">{t.footer.website}</span>
                <a href="https://power-control-systems.com" className="hover:text-white transition-colors">
                  power-control-systems.com
                </a>
              </li>
              <li>
                <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">{t.footer.region}</span>
                {t.footer.regionValue}
              </li>
              <li>
                <span className="block text-white/40 text-xs uppercase tracking-wider mb-1">{t.footer.sectors}</span>
                {t.footer.sectorsValue}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
          <p className="text-white/30 text-xs">{t.footer.established}</p>
        </div>
      </div>
    </footer>
  );
}
