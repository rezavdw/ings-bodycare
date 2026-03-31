import Image from "next/image";

const salonImages = [
  {
    src: "https://placehold.co/600x400/f3e8ff/7c3aed?text=Behandelkamer",
    alt: "Behandelkamer",
    className: "col-span-2 row-span-2",
    width: 600,
    height: 400,
  },
  {
    src: "https://placehold.co/600x800/ede9fe/6d28d9?text=Relaxruimte",
    alt: "Relaxruimte",
    className: "col-span-1 row-span-2",
    width: 600,
    height: 800,
  },
  {
    src: "https://placehold.co/600x400/fce7f3/ec4899?text=Receptie",
    alt: "Receptie",
    className: "col-span-1 row-span-1",
    width: 600,
    height: 400,
  },
  {
    src: "https://placehold.co/600x400/f5f3ff/8b5cf6?text=Producten+Rek",
    alt: "Producten rek",
    className: "col-span-1 row-span-1",
    width: 600,
    height: 400,
  },
  {
    src: "https://placehold.co/600x400/fdf2f8/db2777?text=Nagelsalon",
    alt: "Nagelsalon",
    className: "col-span-1 row-span-1",
    width: 600,
    height: 400,
  },
  {
    src: "https://placehold.co/600x400/f3e8ff/7c3aed?text=Lounge",
    alt: "Lounge",
    className: "col-span-2 row-span-1",
    width: 600,
    height: 400,
  },
];

export default function SalonImpressie() {
  return (
    <section id="salon" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block text-purple-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Welkom bij ons
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Onze Salon
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stap binnen in een wereld van rust en verwennerij. Onze salon is
            ingericht met aandacht voor detail en comfort, zodat u zich direct
            thuis voelt.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-400" />
            <div className="w-2 h-2 rounded-full bg-pink-400" />
            <div className="h-px w-24 bg-gradient-to-r from-purple-400 to-pink-400" />
            <div className="w-2 h-2 rounded-full bg-purple-400" />
            <div className="h-px w-12 bg-gradient-to-r from-pink-400 to-transparent" />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {salonImages.map((img, i) => (
            <div
              key={i}
              className={`${img.className} relative overflow-hidden rounded-2xl group`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-medium text-sm bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: "✨",
              title: "Premium Omgeving",
              description:
                "Een luxueuze en rustgevende sfeer voor de ultieme verwenervaring.",
            },
            {
              icon: "🌿",
              title: "Duurzame Producten",
              description:
                "Wij werken uitsluitend met hoogwaardige, milieuvriendelijke huidverzorgingsproducten.",
            },
            {
              icon: "💜",
              title: "Persoonlijke Aandacht",
              description:
                "Elke behandeling wordt afgestemd op uw individuele huidtype en wensen.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-2xl bg-purple-50 hover:bg-purple-100 transition-colors"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3
                className="font-bold text-gray-900 text-lg mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
