import Image from "next/image";

interface Product {
  name: string;
  brand: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
}

const producten: Product[] = [
  {
    name: "Hydraterende Dagcrème",
    brand: "SkinLux Pro",
    description:
      "Intensief hydraterende dagcrème met hyaluronzuur en vitamine E voor een zachte, stralende huid gedurende de hele dag.",
    price: "€42",
    image: "https://placehold.co/300x300/fce7f3/ec4899?text=Dagcreme",
    badge: "Bestseller",
  },
  {
    name: "Anti-aging Serum",
    brand: "Derma Science",
    description:
      "Krachtig serum met retinol en peptiden dat fijne lijntjes zichtbaar vermindert en de huidstructuur verbetert.",
    price: "€68",
    image: "https://placehold.co/300x300/ede9fe/7c3aed?text=Serum",
    badge: "Nieuw",
  },
  {
    name: "Reinigende Toner",
    brand: "PureGlow",
    description:
      "Verfrissende toner met niacinamide en rozenbottelolie die poriën verfijnt en de huid in balans brengt.",
    price: "€28",
    image: "https://placehold.co/300x300/fce7f3/db2777?text=Toner",
  },
  {
    name: "Voedende Nachtcrème",
    brand: "SkinLux Pro",
    description:
      "Rijke nachtcrème met ceramiden en sheaboter voor intensieve voeding en herstel van de huid tijdens de slaap.",
    price: "€55",
    image: "https://placehold.co/300x300/f3e8ff/7c3aed?text=Nachtcreme",
    badge: "Bestseller",
  },
  {
    name: "Oogcontourcrème",
    brand: "Derma Science",
    description:
      "Delicate crème speciaal voor de kwetsbare huid rondom de ogen. Vermindert wallen en donkere kringen zichtbaar.",
    price: "€48",
    image: "https://placehold.co/300x300/ede9fe/8b5cf6?text=Oogcreme",
  },
  {
    name: "SPF50 Zonnebescherming",
    brand: "SunShield",
    description:
      "Lichte, niet-vettige zonnebrandcrème met breed spectrum SPF50 bescherming. Waterbestendig en geschikt voor dagelijks gebruik.",
    price: "€35",
    image: "https://placehold.co/300x300/fdf2f8/ec4899?text=SPF50",
  },
];

export default function Producten() {
  return (
    <section id="producten" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block text-purple-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Exclusief aanbod
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Onze Producten
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Verleng het salon-effect thuis met onze zorgvuldig geselecteerde
            huidverzorgingsproducten van topkwaliteit.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {producten.map((product) => (
            <div
              key={product.name}
              className="group bg-white rounded-2xl border border-pink-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-52 bg-gradient-to-br from-pink-50 to-purple-50 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-xs text-pink-500 font-semibold uppercase tracking-wide mb-1">
                      {product.brand}
                    </p>
                    <h3
                      className="text-lg font-bold text-gray-900"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {product.name}
                    </h3>
                  </div>
                  <span className="text-xl font-bold text-purple-700 ml-3 shrink-0">
                    {product.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <button className="w-full py-2.5 rounded-xl border-2 border-pink-400 text-pink-600 font-semibold text-sm hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all duration-200">
                  In winkelwagen
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info banner */}
        <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 border border-purple-100">
          <div className="text-4xl">🚚</div>
          <div className="text-center sm:text-left">
            <p className="font-semibold text-gray-900">
              Gratis verzending vanaf €75
            </p>
            <p className="text-gray-600 text-sm">
              Of haal uw producten op in onze salon in Vleuten.
            </p>
          </div>
          <div className="sm:ml-auto">
            <button className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold hover:shadow-lg transition-all">
              Bekijk alle producten
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
