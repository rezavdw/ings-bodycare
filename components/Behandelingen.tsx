"use client";

import { useState } from "react";

interface Behandeling {
  id: string;
  icon: string;
  name: string;
  duration: string;
  price: string;
  description: string;
  popular?: boolean;
}

const behandelingen: Behandeling[] = [
  {
    id: "gezicht",
    icon: "✨",
    name: "Gezichtsbehandeling",
    duration: "60 min",
    price: "€65",
    description:
      "Een diepgaande reiniging en verzorging van uw huid op maat. Inclusief peeling, masker en hydratatie voor een stralende teint.",
    popular: true,
  },
  {
    id: "wenkbrauw",
    icon: "💁‍♀️",
    name: "Wenkbrauw & Wimper",
    duration: "45 min",
    price: "€45",
    description:
      "Perfecte wenkbrauwen en uitgesproken wimpers. Verven, harsen en stylen voor een gedefinieerde blik.",
  },
  {
    id: "massage",
    icon: "💆‍♀️",
    name: "Lichaamsmassage",
    duration: "75 min",
    price: "€85",
    description:
      "Een ontspannende of sportieve massage die spanning loslaat en uw lichaam en geest tot rust brengt.",
    popular: true,
  },
  {
    id: "ontharing",
    icon: "🌸",
    name: "Ontharing",
    duration: "30 min",
    price: "€35",
    description:
      "Professionele ontharing met warmwas voor een langdurig glad resultaat. Geschikt voor alle huidtypen.",
  },
  {
    id: "manicure",
    icon: "💅",
    name: "Manicure & Pedicure",
    duration: "60 min",
    price: "€55",
    description:
      "Verzorg uw handen en voeten met onze uitgebreide manicure en pedicure behandeling inclusief lakken.",
  },
  {
    id: "huidverbetering",
    icon: "🔬",
    name: "Huidverbetering",
    duration: "90 min",
    price: "€110",
    description:
      "Geavanceerde behandeling voor het verbeteren van de huidstructuur, vermindering van pigmentatie en anti-aging.",
    popular: true,
  },
];

export default function Behandelingen() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="behandelingen" className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block text-pink-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Ons aanbod
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Behandelingen
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Kies uit ons uitgebreide assortiment van professionele
            schoonheidsbehandelingen, allemaal uitgevoerd door ervaren
            specialisten.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {behandelingen.map((b) => (
            <div
              key={b.id}
              className="relative bg-white rounded-2xl shadow-sm border border-purple-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              {b.popular && (
                <div className="absolute -top-3 right-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Populair
                </div>
              )}

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {b.icon}
              </div>

              {/* Name */}
              <h3
                className="text-xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {b.name}
              </h3>

              {/* Duration & Price */}
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center gap-1 text-sm text-gray-500">
                  <svg
                    className="w-4 h-4 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6l4 2"
                    />
                  </svg>
                  {b.duration}
                </span>
                <span className="text-lg font-bold text-purple-700">
                  {b.price}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">
                {b.description}
              </p>

              {/* Button */}
              <button
                onClick={scrollToContact}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:shadow-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-200 text-sm"
              >
                Boek nu
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">
            Heeft u een specifieke wens of wilt u een behandeling op maat?
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-purple-600 text-purple-600 font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200"
          >
            Neem contact op
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
