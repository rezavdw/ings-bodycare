"use client";

export default function Hero() {
  const navTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Hero background image */}
      <img
        src="/dermatologist.jpg"
        alt="Professionele schoonheidsbehandeling bij Ing's Body Care"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/40 to-purple-900/50"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></span>
          <span className="text-white/90 text-sm font-medium">Schoonheidssalon in Vleuten, Utrecht</span>
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Jouw Schoonheid,<br />
          <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">Onze Passie</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-xl mx-auto leading-relaxed font-light">
          Professionele schoonheids&shy;behandelingen op maat in een luxueuze omgeving in het hart van Vleuten.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navTo("#behandelingen")}
            className="px-8 py-4 rounded-full bg-white text-gray-900 font-semibold text-base hover:bg-purple-100 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Boek een afspraak
          </button>
          <button
            onClick={() => navTo("#behandelingen")}
            className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold text-base hover:bg-white/20 hover:border-white/50 transition-all duration-300"
          >
            Bekijk behandelingen
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-sm mx-auto">
          <div className="text-center">
            <div
              className="text-3xl font-extrabold text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              15+
            </div>
            <div className="text-white/60 text-xs mt-1 font-medium uppercase tracking-wide">Jaar ervaring</div>
          </div>
          <div className="text-center border-x border-white/20">
            <div
              className="text-3xl font-extrabold text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              500+
            </div>
            <div className="text-white/60 text-xs mt-1 font-medium uppercase tracking-wide">Klanten</div>
          </div>
          <div className="text-center">
            <div
              className="text-3xl font-extrabold text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              35+
            </div>
            <div className="text-white/60 text-xs mt-1 font-medium uppercase tracking-wide">Behandelingen</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => navTo("#salon")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors group"
        aria-label="Scroll naar beneden"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Ontdek meer</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-2 group-hover:border-white/60 transition-colors">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce"></div>
        </div>
      </button>
    </section>
  );
}
