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
          Aanbieding
          <br />
          <span className="text-pink-300">April 2026</span>
        </h2>

        {/* Description */}
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Ontvang de hele maand april 10% korting op de nachtcrème van Mineral Skin Cosmetics.
          Laat je huid herstellen terwijl je slaapt!
        </p>

        {/* Product highlights */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          {[
            "✓ Hydrateert, regenereert en revitaliseert de huid",
            "✓ Een rijke crème te gebruiken als masker",
            "✓ Unieke formule van vitamine E en 'superfruit'-ingrediënten",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 text-white/90 text-sm bg-white/10 rounded-full px-4 py-2"
            >
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Discount badge */}
        <div className="flex items-center justify-center mb-10">
          <div className="bg-yellow-400 text-yellow-900 font-bold text-xl px-6 py-3 rounded-full shadow-lg">
            10% korting
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
          Geldig t/m 30 april 2026.
        </p>
      </div>
    </section>
  );
}
