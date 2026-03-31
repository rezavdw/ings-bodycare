export default function Vacature() {
  return (
    <section id="vacature" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-pink-600 font-semibold text-sm tracking-widest uppercase mb-3">Kom ons team versterken</span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Vacature
          </h2>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl border border-purple-100 overflow-hidden">
          {/* Header strip */}
          <div className="bg-gradient-to-r from-purple-700 to-pink-600 px-8 py-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h3
                  className="text-xl sm:text-2xl font-bold text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Schoonheidsspecialist en/of Pedicure
                </h3>
                <p className="text-white/80 text-sm mt-1">Parttime &bull; Uren bespreekbaar</p>
              </div>
              <span className="self-start sm:self-center inline-block bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1.5 rounded-full shadow">
                Open sollicitatie
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="px-8 py-8">
            <p className="text-gray-700 text-base leading-relaxed mb-8">
              Werk jij graag in een energieke omgeving en lijkt het je leuk om klanten te verzorgen binnen de sfeer van een sportschool? Ter versterking van ons team en door uitbreiding van onze openingstijden zoeken wij een enthousiaste pedicure en/of schoonheidsspecialist. Uren zijn bespreekbaar.
            </p>

            {/* What we offer */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-purple-100 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Flexibele uren</p>
                  <p className="text-gray-500 text-xs mt-0.5">Uren in overleg</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-purple-100 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Sportcity Vleuten</p>
                  <p className="text-gray-500 text-xs mt-0.5">Unieke werkomgeving</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-purple-100 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Klein hecht team</p>
                  <p className="text-gray-500 text-xs mt-0.5">Warme werksfeer</p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-white rounded-2xl border border-purple-100 shadow-sm p-6">
              <p className="font-semibold text-gray-900 mb-1">Interesse? Neem gerust contact op:</p>
              <p className="text-gray-500 text-sm mb-4">Ingrid Slieker</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:0619900843"
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-purple-700 transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  06-19900843
                </a>
                <a
                  href="mailto:islieker@me.com"
                  className="flex items-center gap-2 px-5 py-3 rounded-full border border-purple-200 text-purple-700 text-sm font-semibold hover:bg-purple-50 transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  islieker@me.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
