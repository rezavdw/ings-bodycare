"use client";

export default function Hero() {
  const navTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Subtle background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-50 rounded-full blur-3xl opacity-70 translate-y-1/3 -translate-x-1/4"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></span>
          <span className="text-purple-700 text-sm font-medium">Schoonheidssalon in Vleuten, Utrecht</span>
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-[1.05] tracking-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Jouw Schoonheid,<br />
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Onze Passie</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed font-light">
          Professionele schoonheids&shy;behandelingen op maat in een luxueuze omgeving in het hart van Vleuten.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navTo("#contact")}
            className="px-8 py-4 rounded-full bg-gray-900 text-white font-semibold text-base hover:bg-purple-700 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Boek een afspraak
          </button>
          <button
            onClick={() => navTo("#behandelingen")}
            className="px-8 py-4 rounded-full bg-white border border-gray-200 text-gray-700 font-semibold text-base hover:border-purple-300 hover:text-purple-700 transition-all duration-300"
          >
            Bekijk behandelingen
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-sm mx-auto">
          <div className="text-center">
            <div
              className="text-3xl font-extrabold text-gray-900"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              15+
            </div>
            <div className="text-gray-400 text-xs mt-1 font-medium uppercase tracking-wide">Jaar ervaring</div>
          </div>
          <div className="text-center border-x border-gray-100">
            <div
              className="text-3xl font-extrabold text-gray-900"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              500+
            </div>
            <div className="text-gray-400 text-xs mt-1 font-medium uppercase tracking-wide">Klanten</div>
          </div>
          <div className="text-center">
            <div
              className="text-3xl font-extrabold text-gray-900"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              35+
            </div>
            <div className="text-gray-400 text-xs mt-1 font-medium uppercase tracking-wide">Behandelingen</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => navTo("#salon")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors group"
        aria-label="Scroll naar beneden"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Ontdek meer</span>
        <div className="w-6 h-10 border-2 border-gray-200 rounded-full flex items-start justify-center pt-2 group-hover:border-gray-400 transition-colors">
          <div className="w-1 h-2 bg-gray-300 rounded-full animate-bounce"></div>
        </div>
      </button>
    </section>
  );
}
