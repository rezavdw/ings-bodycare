export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    if (typeof window !== "undefined") {
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
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
              Professionele schoonheidsbehandelingen in Vleuten, Leidsche Rijn
              Utrecht. Uw verwennerij is onze passie.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                {
                  href: "https://instagram.com",
                  label: "Instagram",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  ),
                },
                {
                  href: "https://facebook.com",
                  label: "Facebook",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  href: "https://wa.me/31612345678",
                  label: "WhatsApp",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-purple-800 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 flex items-center justify-center transition-all duration-200 text-purple-300 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white font-semibold mb-4"
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
                    onClick={() => scrollTo(link.href)}
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
              className="text-white font-semibold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Contact
            </h4>
            <div className="space-y-3 text-sm text-purple-300">
              <p>
                Vleutensevaart 100
                <br />
                3532 AD Utrecht
              </p>
              <p>
                <a
                  href="tel:+31612345678"
                  className="hover:text-pink-300 transition-colors"
                >
                  +31 6 12 34 56 78
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@ingsbodycare.nl"
                  className="hover:text-pink-300 transition-colors"
                >
                  info@ingsbodycare.nl
                </a>
              </p>
              <div className="pt-2">
                <p className="text-purple-400 text-xs uppercase tracking-wide mb-1">
                  Openingstijden
                </p>
                <p>Ma – Vr: 09:00 – 19:00</p>
                <p>Za: 09:00 – 17:00</p>
                <p>Zo: Gesloten</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-purple-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-purple-400">
          <p>
            &copy; {currentYear} Ing&apos;s Body Care. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-pink-300 transition-colors">
              Privacybeleid
            </a>
            <a href="#" className="hover:text-pink-300 transition-colors">
              Algemene voorwaarden
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
