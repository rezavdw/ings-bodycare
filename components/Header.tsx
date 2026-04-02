"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home", key: "home" },
  { label: "Salon", href: "#salon", key: "salon" },
  { label: "Behandelingen", href: "#behandelingen", key: "behandelingen" },
  { label: "Producten", href: "#producten", key: "producten" },
  { label: "Team", href: "#team", key: "team" },
  { label: "Aanbieding", href: "#aanbieding", key: "aanbieding" },
  { label: "Vacature", href: "#vacature", key: "vacature" },
  { label: "Contact", href: "#contact", key: "contact" },
];

const sections = ["home", "salon", "behandelingen", "producten", "team", "aanbieding", "vacature", "contact"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      let active = "home";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) active = id;
      });
      setActiveSection(active);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    navTo(href);
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-white/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <button onClick={() => navTo("#home")} className="flex items-center gap-2 group">
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
                key={link.key}
                onClick={() => navTo(link.href)}
                data-navlink={link.key}
                className="nav-link text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors relative"
                style={
                  activeSection === link.key
                    ? { color: "#111827", fontWeight: "600" }
                    : undefined
                }
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => navTo("#behandelingen")}
              className="ml-2 px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-purple-700 hover:shadow-lg transition-all duration-200"
            >
              Boek afspraak
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            id="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-purple-50 transition-colors"
            aria-label="Menu openen"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className="block h-0.5 bg-gray-700 transition-all duration-300"
                style={
                  menuOpen
                    ? { transform: "rotate(45deg) translateY(8px)" }
                    : undefined
                }
              />
              <span
                className="block h-0.5 bg-gray-700 transition-all duration-300"
                style={menuOpen ? { opacity: "0" } : undefined}
              />
              <span
                className="block h-0.5 bg-gray-700 transition-all duration-300"
                style={
                  menuOpen
                    ? { transform: "rotate(-45deg) translateY(-8px)" }
                    : undefined
                }
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 bg-white/95 backdrop-blur-md border-t border-purple-100"
        style={
          menuOpen
            ? { maxHeight: "600px", opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <nav className="flex flex-col px-4 py-4 gap-1">
          {navLinks.map((link) => (
            <button
              key={link.key}
              onClick={() => handleNavClick(link.href)}
              className="text-left px-4 py-2.5 rounded-lg text-gray-700 hover:bg-purple-50 hover:text-purple-700 font-medium transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#behandelingen")}
            className="mt-2 px-4 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:shadow-lg transition-all"
          >
            Boek afspraak
          </button>
        </nav>
      </div>
    </header>
  );
}
