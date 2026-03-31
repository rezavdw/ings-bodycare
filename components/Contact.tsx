"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    const form = document.getElementById("contact-form") as HTMLFormElement | null;
    if (form) form.reset();
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-purple-600 font-semibold text-sm tracking-widest uppercase mb-3">Neem contact op</span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Boek een Afspraak
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Heeft u een vraag of wilt u een afspraak maken? Vul het formulier in of neem direct contact met ons op.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-8">
            <h3
              className="text-xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Stuur ons een bericht
            </h3>

            {submitted ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">💜</div>
                <h4
                  className="text-xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Bedankt voor uw bericht!
                </h4>
                <p className="text-gray-600">We nemen zo spoedig mogelijk contact met u op.</p>
                <button
                  onClick={resetForm}
                  className="mt-6 text-purple-600 underline text-sm hover:text-pink-600 transition-colors"
                >
                  Nieuw bericht sturen
                </button>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="naam" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Naam <span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="naam"
                    name="naam"
                    required
                    placeholder="Uw volledige naam"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-gray-900 placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                    E-mailadres <span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="uw@email.nl"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-gray-900 placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="telefoon" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    id="telefoon"
                    name="telefoon"
                    placeholder="+31 6 12345678"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-gray-900 placeholder-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="bericht" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Bericht <span className="text-pink-500">*</span>
                  </label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    required
                    rows={4}
                    placeholder="Vertel ons welke behandeling u wenst of stel uw vraag..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-gray-900 placeholder-gray-400 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold hover:shadow-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-200"
                >
                  Verstuur bericht
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-8">
              <h3
                className="text-xl font-bold text-gray-900 mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Contactgegevens
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center shrink-0 text-lg">📍</div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-0.5">Adres</p>
                    <p className="text-gray-600 text-sm">
                      Gevestigd in Sportcity<br />
                      Parkzichtlaan 207<br />
                      3451 GX Vleuten, Leidsche Rijn
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center shrink-0 text-lg">📞</div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-0.5">Telefoon</p>
                    <a href="tel:0306663992" className="text-purple-600 hover:text-pink-600 transition-colors text-sm">030-6663992</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center shrink-0 text-lg">✉️</div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-0.5">E-mail</p>
                    <a href="mailto:info@ingsbodycare.nl" className="text-purple-600 hover:text-pink-600 transition-colors text-sm">info@ingsbodycare.nl</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center shrink-0 text-lg">🕐</div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">Openingstijden</p>
                    <div className="space-y-0.5 text-sm text-gray-600">
                      <div className="flex justify-between gap-8">
                        <span>Maandag &ndash; Vrijdag</span>
                        <span className="font-medium text-gray-800">09:00 &ndash; 22:00</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span>Zaterdag &amp; Zondag</span>
                        <span className="font-medium text-gray-800">09:00 &ndash; 16:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-purple-100 shadow-sm h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2451.394218462697!2d5.0175!3d52.0825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDA0JzU3LjAiTiA1wrAwMScwMy4wIkU!5e0!3m2!1snl!2snl!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locatie Ing&apos;s Body Care"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
