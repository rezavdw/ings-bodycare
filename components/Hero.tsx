"use client";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-400/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-pink-300 animate-pulse" />
          <span className="text-white/90 text-sm font-medium">
            Schoonheidssalon in Vleuten, Utrecht
          </span>
        </div>

        {/* Heading */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Jouw Schoonheid,
          <br />
          <span className="bg-gradient-to-r from-pink-200 to-pink-400 bg-clip-text text-transparent">
            Onze Passie
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Bij Ing&apos;s Body Care bieden wij professionele schoonheids&shy;behandelingen
          op maat. Ontdek uw ware uitstraling in onze luxueuze salon in het
          hart van Vleuten.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-4 rounded-full bg-white text-purple-700 font-bold text-lg hover:bg-pink-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl"
          >
            Boek een afspraak
          </button>
          <button
            onClick={() => scrollTo("#behandelingen")}
            className="px-8 py-4 rounded-full bg-transparent border-2 border-white/70 text-white font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
          >
            Bekijk behandelingen
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "15+", label: "Jaar ervaring" },
            { value: "500+", label: "Tevreden klanten" },
            { value: "6", label: "Behandelingen" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl sm:text-3xl font-bold text-white"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {stat.value}
              </div>
              <div className="text-white/60 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("#salon")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors group"
        aria-label="Scroll naar beneden"
      >
        <span className="text-xs tracking-widest uppercase">Ontdek meer</span>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2 group-hover:border-white/70 transition-colors">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </button>
    </section>
  );
}
