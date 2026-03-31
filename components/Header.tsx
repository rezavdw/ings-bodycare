"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Salon", href: "#salon" },
  { label: "Behandelingen", href: "#behandelingen" },
  { label: "Producten", href: "#producten" },
  { label: "Team", href: "#team" },
  { label: "Aanbieding", href: "#aanbieding" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-sm">IBC</span>
            </div>
            <span
              className="text-xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ing&apos;s Body Care
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="ml-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Boek afspraak
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-purple-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu openen"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white/95 backdrop-blur-md border-t border-purple-100`}
      >
        <nav className="flex flex-col px-4 py-4 gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left px-4 py-2.5 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-700 font-medium transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            className="mt-2 px-4 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:shadow-lg transition-all"
          >
            Boek afspraak
          </button>
        </nav>
      </div>
    </header>
  );
}
