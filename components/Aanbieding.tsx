"use client";

export default function Aanbieding() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="aanbieding" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-purple-700 to-pink-700" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 rounded-full px-5 py-2 mb-6">
          <span className="text-yellow-300 text-lg">⭐</span>
          <span className="text-yellow-200 font-bold text-sm tracking-wide uppercase">
            Aanbieding van de maand
          </span>
          <span className="text-yellow-300 text-lg">⭐</span>
        </div>

        {/* Title */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Complete Huidverbetering
          <br />
          <span className="text-pink-300">Pakket Maart 2026</span>
        </h2>

        {/* Description */}
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Profiteer deze maand van ons exclusieve huidverbeteringspakket. Een
          diepgaande gezichtsbehandeling (90 min) gecombineerd met een
          ontspannende lichaamsmassage (45 min) voor een totale verwenervaring.
          Inclusief gratis huidanalyse en gepersonaliseerd huidverzorgingsadvies.
        </p>

        {/* Treatment list */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          {[
            "✓ Gezichtsbehandeling (90 min)",
            "✓ Lichaamsmassage (45 min)",
            "✓ Huidanalyse",
            "✓ Adviesgesprek",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-white/90 text-sm bg-white/10 rounded-full px-4 py-2"
            >
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center justify-center gap-5 mb-10">
          <div className="text-center">
            <p className="text-white/50 text-sm mb-1">Normale prijs</p>
            <p className="text-white/60 text-2xl font-bold line-through">
              €175
            </p>
          </div>
          <div className="w-px h-12 bg-white/20" />
          <div className="text-center">
            <p className="text-pink-300 text-sm font-semibold mb-1">
              Aanbieding prijs
            </p>
            <p className="text-white text-4xl font-bold">€125</p>
          </div>
          <div className="bg-yellow-400 text-yellow-900 font-bold text-sm px-3 py-1.5 rounded-full shadow-lg">
            29% korting
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={scrollToContact}
          className="px-10 py-4 rounded-full bg-white text-purple-700 font-bold text-lg hover:bg-pink-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl mb-4"
        >
          Profiteer van deze aanbieding
        </button>
        <p className="text-white/50 text-sm">
          Geldig t/m 31 maart 2026. Op = op.
        </p>
      </div>
    </section>
  );
}
