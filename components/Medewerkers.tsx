export default function Medewerkers() {
  return (
    <section id="team" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-pink-600 font-semibold text-sm tracking-widest uppercase mb-3">Ons team</span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Maak Kennis Met Ons Team
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ons enthousiaste team van gediplomeerde schoonheidsspecialisten staat klaar om u de best mogelijke behandeling te geven.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Ingrid Slieker */}
          <div className="group text-center bg-white rounded-2xl p-8 shadow-sm border border-purple-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="relative w-32 h-32 mx-auto mb-5">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="/team/ingrid.jpg"
                  alt="Ingrid Slieker"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <h3
              className="text-xl font-bold text-gray-900 mb-1"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ingrid Slieker
            </h3>
            <p className="text-sm font-medium text-purple-600 mb-4">Eigenaresse, schoonheidsspecialiste &amp; pedicure</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Ingrid is de drijvende kracht achter Ing&apos;s Body Care. Met haar brede expertise in huidverzorging en pedicure staat zij garant voor persoonlijke aandacht en topkwaliteit bij elke behandeling.
            </p>
          </div>

          {/* Natasja Hoefakker */}
          <div className="group text-center bg-white rounded-2xl p-8 shadow-sm border border-purple-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="relative w-32 h-32 mx-auto mb-5">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="/team/natasja.jpg"
                  alt="Natasja Hoefakker"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <h3
              className="text-xl font-bold text-gray-900 mb-1"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Natasja Hoefakker
            </h3>
            <p className="text-sm font-medium text-purple-600 mb-4">Pedicure</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Natasja is gespecialiseerd in pedicurebehandelingen en zorgt met vakkundige handen en een warm hart voor verzorgde en gezonde voeten bij elke klant.
            </p>
          </div>

          {/* Janine Koning */}
          <div className="group text-center bg-white rounded-2xl p-8 shadow-sm border border-purple-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="relative w-32 h-32 mx-auto mb-5">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src="/team/janine.jpg"
                  alt="Janine Koning"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <h3
              className="text-xl font-bold text-gray-900 mb-1"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Janine Koning
            </h3>
            <p className="text-sm font-medium text-purple-600 mb-4">Schoonheidsspecialiste &amp; PMU artist</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Janine combineert haar expertise als schoonheidsspecialiste met permanente make-up (PMU). Ze werkt nauwkeurig en creatief voor een verfijnd en natuurlijk resultaat.
            </p>
          </div>

        </div>

        <div className="mt-14 text-center">
          <div className="inline-block bg-white rounded-2xl border border-purple-100 shadow-sm px-8 py-6">
            <p className="text-gray-600 mb-2">Vragen over onze behandelingen?</p>
            <a
              href="mailto:info@ingsbodycare.nl"
              className="text-purple-600 font-semibold hover:text-pink-600 transition-colors"
            >
              Stuur ons een e-mail &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
