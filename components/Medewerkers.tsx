import Image from "next/image";

interface TeamMember {
  name: string;
  title: string;
  description: string;
  image: string;
  specialties: string[];
}

const team: TeamMember[] = [
  {
    name: "Ing Nguyen",
    title: "Eigenaar & Senior Schoonheidsspecialiste",
    description:
      "Met meer dan 15 jaar ervaring in de schoonheidsindustrie heeft Ing een verfijnde techniek ontwikkeld voor huidverbetering en anti-aging behandelingen. Haar passie voor schoonheid en persoonlijke aandacht maakt elke klantervaring uniek.",
    image: "https://placehold.co/400x400/ede9fe/7c3aed?text=Ing+Nguyen",
    specialties: ["Huidverbetering", "Anti-aging", "Gezichtsbehandeling"],
  },
  {
    name: "Lisa de Vries",
    title: "Schoonheidsspecialiste",
    description:
      "Gespecialiseerd in huidverbetering en geavanceerde gezichtsbehandelingen. Lisa volgt constant de nieuwste ontwikkelingen in de skincare wereld en vertaalt deze naar effectieve behandelprotocollen voor haar klanten.",
    image: "https://placehold.co/400x400/fce7f3/ec4899?text=Lisa+de+Vries",
    specialties: ["Skincare", "Peeling", "Maskers"],
  },
  {
    name: "Sophie Bakker",
    title: "Nagelstyliste",
    description:
      "Creatief en nauwkeurig, Sophie transformeert uw nagels tot ware kunstwerkjes. Met een oog voor detail en een passie voor design biedt ze zowel klassieke als trendy nagelkunst aan, altijd met de hoogste zorgstandaard.",
    image: "https://placehold.co/400x400/f3e8ff/8b5cf6?text=Sophie+Bakker",
    specialties: ["Nagelkunst", "Gelnagels", "Pedicure"],
  },
];

export default function Medewerkers() {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block text-pink-600 font-semibold text-sm tracking-widest uppercase mb-3">
            Ons team
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Maak Kennis Met Ons Team
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ons enthousiaste team van gediplomeerde schoonheidsspecialisten staat
            klaar om u de best mogelijke behandeling te geven.
          </p>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group text-center bg-white rounded-2xl p-8 shadow-sm border border-purple-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative w-32 h-32 mx-auto mb-5">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 blur-md opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="128px"
                  />
                </div>
              </div>

              {/* Name & Title */}
              <h3
                className="text-xl font-bold text-gray-900 mb-1"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {member.name}
              </h3>
              <p className="text-sm font-medium text-purple-600 mb-4">
                {member.title}
              </p>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                {member.description}
              </p>

              {/* Specialties */}
              <div className="flex flex-wrap gap-2 justify-center">
                {member.specialties.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-medium bg-purple-100 text-purple-700 px-3 py-1 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Join team CTA */}
        <div className="mt-14 text-center">
          <div className="inline-block bg-white rounded-2xl border border-purple-100 shadow-sm px-8 py-6">
            <p className="text-gray-600 mb-2">
              Wil jij ook deel uitmaken van ons team?
            </p>
            <a
              href="mailto:info@ingsbodycare.nl"
              className="text-purple-600 font-semibold hover:text-pink-600 transition-colors"
            >
              Stuur ons een e-mail →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
