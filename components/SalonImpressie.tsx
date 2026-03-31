export default function SalonImpressie() {
  return (
    <section id="salon" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-purple-600 font-semibold text-sm tracking-widest uppercase mb-3">Welkom bij ons</span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Onze Salon
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stap binnen in een wereld van rust en verwennerij. Onze salon is ingericht met aandacht voor detail en comfort, zodat u zich direct thuis voelt.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-400"></div>
            <div className="w-2 h-2 rounded-full bg-pink-400"></div>
            <div className="h-px w-24 bg-gradient-to-r from-purple-400 to-pink-400"></div>
            <div className="w-2 h-2 rounded-full bg-purple-400"></div>
            <div className="h-px w-12 bg-gradient-to-r from-pink-400 to-transparent"></div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4" style={{ gridAutoRows: "220px" }}>

          {/* Groot: behandelkamer */}
          <div className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl group">
            <img src="/salon/behandelkamer.jpg" alt="Behandelkamer" className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-medium text-sm bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">Behandelkamer</span>
            </div>
          </div>

          {/* Nagels */}
          <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl group">
            <img src="/salon/nagels.jpg" alt="Nagelverzorging" className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-medium text-sm bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">Nagelverzorging</span>
            </div>
          </div>

          {/* Wenkbrauwen */}
          <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl group">
            <img src="/salon/wenkbrauwen.jpg" alt="Wenkbrauwen & wimpers" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-medium text-sm bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">Wenkbrauwen</span>
            </div>
          </div>

          {/* Gezichtsbehandeling breed */}
          <div className="col-span-2 row-span-1 relative overflow-hidden rounded-2xl group">
            <img src="/salon/gezichtsbehandeling.jpg" alt="Gezichtsbehandeling" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-medium text-sm bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">Gezichtsbehandeling</span>
            </div>
          </div>

          {/* Receptie */}
          <div className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl group">
            <img src="/salon/receptie.jpg" alt="Receptie" className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-medium text-sm bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">Receptie</span>
            </div>
          </div>

          {/* Producten breed */}
          <div className="col-span-2 row-span-1 relative overflow-hidden rounded-2xl group">
            <img src="/salon/producten.jpg" alt="Producten" className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-medium text-sm bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">Onze producten</span>
            </div>
          </div>

        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-2xl bg-purple-50 hover:bg-purple-100 transition-colors">
            <div className="text-3xl mb-3">✨</div>
            <h3 className="font-bold text-gray-900 text-lg mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Premium Omgeving</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Een luxueuze en rustgevende sfeer voor de ultieme verwenervaring.</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-purple-50 hover:bg-purple-100 transition-colors">
            <div className="text-3xl mb-3">🌿</div>
            <h3 className="font-bold text-gray-900 text-lg mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Duurzame Producten</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Wij werken uitsluitend met hoogwaardige, milieuvriendelijke huidverzorgingsproducten.</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-purple-50 hover:bg-purple-100 transition-colors">
            <div className="text-3xl mb-3">💜</div>
            <h3 className="font-bold text-gray-900 text-lg mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Persoonlijke Aandacht</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Elke behandeling wordt afgestemd op uw individuele huidtype en wensen.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
