"use client";

import { useState } from "react";

const DAY_NAMES = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];

const STAFF_PINS: Record<string, string> = {
  "Ingrid Slieker": "1234",
  "Natasja Hoefakker": "2345",
  "Janine Koning": "3456",
};

type Avail = Record<number, { on: boolean; start: string; end: string }>;

function defaultAvail(): Avail {
  const a: Avail = {};
  for (let d = 0; d < 7; d++) {
    const weekend = d === 0 || d === 6;
    a[d] = { on: true, start: "09:00", end: weekend ? "16:00" : "22:00" };
  }
  return a;
}

function getAvail(staffName: string): Avail {
  try {
    const raw = localStorage.getItem("ibc_avail_" + staffName);
    if (!raw) return defaultAvail();
    return JSON.parse(raw);
  } catch {
    return defaultAvail();
  }
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Staff portal state
  const [portalOpen, setPortalOpen] = useState(false);
  const [spStaff, setSpStaff] = useState("");
  const [spPin, setSpPin] = useState("");
  const [spPinError, setSpPinError] = useState(false);
  const [spLoggedIn, setSpLoggedIn] = useState(false);
  const [spAvail, setSpAvail] = useState<Avail>(defaultAvail());
  const [spSaved, setSpSaved] = useState(false);

  const openPortal = () => {
    setPortalOpen(true);
    setSpStaff("");
    setSpPin("");
    setSpPinError(false);
    setSpLoggedIn(false);
    document.body.style.overflow = "hidden";
  };

  const closePortal = () => {
    setPortalOpen(false);
    document.body.style.overflow = "";
  };

  const spSelectStaff = (name: string) => {
    setSpStaff(name);
    setSpPin("");
    setSpPinError(false);
  };

  const spDoLogin = () => {
    if (!spStaff) return;
    if (spPin !== STAFF_PINS[spStaff]) {
      setSpPinError(true);
      setSpPin("");
      return;
    }
    setSpPinError(false);
    const avail = getAvail(spStaff);
    setSpAvail(avail);
    setSpLoggedIn(true);
  };

  const spLogout = () => {
    setSpLoggedIn(false);
    setSpStaff("");
    setSpPin("");
    setSpPinError(false);
  };

  const spToggleDay = (d: number, checked: boolean) => {
    setSpAvail((prev) => ({ ...prev, [d]: { ...prev[d], on: checked } }));
  };

  const spSetTime = (d: number, field: "start" | "end", value: string) => {
    setSpAvail((prev) => ({ ...prev, [d]: { ...prev[d], [field]: value } }));
  };

  const spSave = () => {
    localStorage.setItem("ibc_avail_" + spStaff, JSON.stringify(spAvail));
    setSpSaved(true);
    setTimeout(() => setSpSaved(false), 3000);
  };

  return (
    <>
      <footer className="bg-purple-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">IBC</span>
                </div>
                <span
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Ing&apos;s Body Care
                </span>
              </div>
              <p className="text-purple-300 text-sm leading-relaxed max-w-sm mb-6">
                Professionele schoonheidsbehandelingen in Vleuten, Leidsche Rijn Utrecht. Uw verwennerij is onze passie.
              </p>
              <div className="flex gap-3">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/ingridslieker/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-purple-800 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 flex items-center justify-center transition-all duration-200 text-purple-300 hover:text-white"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/ingsbodycare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-purple-800 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 flex items-center justify-center transition-all duration-200 text-purple-300 hover:text-white"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="font-semibold text-white mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Snelle links
              </h4>
              <ul className="space-y-2">
                {[
                  { label: "Home", href: "#home" },
                  { label: "Onze Salon", href: "#salon" },
                  { label: "Behandelingen", href: "#behandelingen" },
                  { label: "Producten", href: "#producten" },
                  { label: "Ons Team", href: "#team" },
                  { label: "Aanbieding", href: "#aanbieding" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => navTo(link.href)}
                      className="text-purple-300 hover:text-pink-300 text-sm transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4
                className="font-semibold text-white mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Contact
              </h4>
              <div className="space-y-3 text-sm text-purple-300">
                <p>
                  Gevestigd in Sportcity<br />
                  Parkzichtlaan 207<br />
                  3451 GX Vleuten
                </p>
                <p>
                  <a href="tel:0306663992" className="hover:text-pink-300 transition-colors">030-6663992</a>
                </p>
                <p>
                  <a href="mailto:info@ingsbodycare.nl" className="hover:text-pink-300 transition-colors">info@ingsbodycare.nl</a>
                </p>
                <div className="pt-2">
                  <p className="text-purple-400 text-xs uppercase tracking-wide mb-1">Openingstijden</p>
                  <p>Ma t/m Vr: 09:00 tot 22:00</p>
                  <p>Za &amp; Zo: 09:00 tot 16:00</p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-purple-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-purple-400">
            <p>&copy; {currentYear} Ing&apos;s Body Care. Alle rechten voorbehouden.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-pink-300 transition-colors">Privacybeleid</a>
              <a href="#" className="hover:text-pink-300 transition-colors">Algemene voorwaarden</a>
              <button onClick={openPortal} className="hover:text-pink-300 transition-colors">Medewerkers portaal</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Staff Portal Modal */}
      {portalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] flex flex-col overflow-hidden">

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2
                  className="font-bold text-gray-900 text-lg"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Medewerkers Portaal
                </h2>
              </div>
              <button
                onClick={closePortal}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Login view */}
            {!spLoggedIn && (
              <div className="px-6 py-6 flex flex-col gap-4 overflow-y-auto">
                <p className="text-gray-500 text-sm">Log in om je beschikbaarheid te beheren.</p>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Medewerker</label>
                  <div className="flex flex-col gap-2">
                    {["Ingrid Slieker", "Natasja Hoefakker", "Janine Koning"].map((name) => (
                      <button
                        key={name}
                        onClick={() => spSelectStaff(name)}
                        className="text-left px-4 py-3 rounded-xl border-2 text-sm font-medium text-gray-700 transition-all"
                        style={
                          spStaff === name
                            ? { borderColor: "#7c3aed", background: "#faf5ff", color: "#6d28d9" }
                            : { borderColor: "#e5e7eb" }
                        }
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                </div>
                {spStaff && (
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Pincode</label>
                    <input
                      type="password"
                      inputMode="numeric"
                      maxLength={4}
                      placeholder="0000"
                      value={spPin}
                      onChange={(e) => { setSpPin(e.target.value); setSpPinError(false); }}
                      onKeyDown={(e) => { if (e.key === "Enter") spDoLogin(); }}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-gray-900 text-center text-xl tracking-widest font-bold"
                    />
                    {spPinError && (
                      <p className="mt-2 text-sm text-red-500 text-center">Onjuiste pincode, probeer opnieuw.</p>
                    )}
                  </div>
                )}
                {spStaff && (
                  <button
                    onClick={spDoLogin}
                    className="w-full py-3 rounded-xl bg-gray-900 text-white font-semibold text-sm hover:bg-purple-700 transition-all"
                  >
                    Inloggen
                  </button>
                )}
              </div>
            )}

            {/* Editor view */}
            {spLoggedIn && (
              <div className="flex flex-col flex-1 overflow-hidden">
                <div className="px-6 pt-4 pb-3 border-b border-gray-100 flex items-center justify-between shrink-0">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{spStaff}</p>
                    <p className="text-xs text-gray-400">Stel je beschikbaarheid in per dag</p>
                  </div>
                  <button
                    onClick={spLogout}
                    className="text-xs text-purple-600 hover:text-pink-600 font-medium transition-colors"
                  >
                    Uitloggen
                  </button>
                </div>
                <div className="overflow-y-auto flex-1 px-6 py-4 space-y-3">
                  {Array.from({ length: 7 }).map((_, d) => (
                    <div key={d} className="bg-gray-50 rounded-xl px-4 py-3">
                      <div className="flex items-center justify-between mb-0">
                        <span className="font-semibold text-gray-800 text-sm w-28">{DAY_NAMES[d]}</span>
                        {/* Toggle */}
                        <label className="relative inline-block w-10 h-[22px]">
                          <input
                            type="checkbox"
                            className="opacity-0 w-0 h-0"
                            checked={spAvail[d]?.on ?? true}
                            onChange={(e) => spToggleDay(d, e.target.checked)}
                          />
                          <span
                            className="absolute cursor-pointer inset-0 rounded-[22px] transition-colors duration-200"
                            style={{ background: spAvail[d]?.on ? "#7c3aed" : "#d1d5db" }}
                            onClick={() => spToggleDay(d, !(spAvail[d]?.on ?? true))}
                          >
                            <span
                              className="absolute w-4 h-4 bg-white rounded-full bottom-[3px] transition-transform duration-200"
                              style={{ left: 3, transform: spAvail[d]?.on ? "translateX(18px)" : "translateX(0)" }}
                            />
                          </span>
                        </label>
                      </div>
                      {spAvail[d]?.on && (
                        <div className="flex items-center gap-3 mt-3 flex-wrap">
                          <div className="flex items-center gap-2">
                            <label className="text-xs text-gray-500">Van</label>
                            <input
                              type="time"
                              value={spAvail[d]?.start ?? "09:00"}
                              onChange={(e) => spSetTime(d, "start", e.target.value)}
                              className="px-2 py-1.5 rounded-lg border border-gray-200 text-sm text-gray-800 focus:border-purple-400 outline-none"
                            />
                          </div>
                          <div className="flex items-center gap-2">
                            <label className="text-xs text-gray-500">Tot</label>
                            <input
                              type="time"
                              value={spAvail[d]?.end ?? "17:00"}
                              onChange={(e) => spSetTime(d, "end", e.target.value)}
                              className="px-2 py-1.5 rounded-lg border border-gray-200 text-sm text-gray-800 focus:border-purple-400 outline-none"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="px-6 pb-5 pt-3 shrink-0 border-t border-gray-100">
                  {spSaved && (
                    <p className="text-center text-sm text-green-600 font-medium mb-2">Beschikbaarheid opgeslagen!</p>
                  )}
                  <button
                    onClick={spSave}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold text-sm hover:shadow-lg transition-all"
                  >
                    Opslaan
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
}
