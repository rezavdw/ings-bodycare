"use client";

import { useState, useEffect, useCallback } from "react";

const SHOW_LIMIT = 9;

const MONTH_NAMES_NL = [
  "Januari", "Februari", "Maart", "April", "Mei", "Juni",
  "Juli", "Augustus", "September", "Oktober", "November", "December",
];
const DAY_NAMES = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];

type Avail = Record<number, { on: boolean; start: string; end: string }>;

function defaultAvail(): Avail {
  const a: Avail = {};
  for (let d = 0; d < 7; d++) {
    const weekend = d === 0 || d === 6;
    a[d] = { on: true, start: "09:00", end: weekend ? "16:00" : "22:00" };
  }
  return a;
}

function getAvail(staffName: string): Avail {
  if (!staffName || staffName === "Geen voorkeur") return defaultAvail();
  try {
    const raw = localStorage.getItem("ibc_avail_" + staffName);
    if (!raw) return defaultAvail();
    return JSON.parse(raw);
  } catch {
    return defaultAvail();
  }
}

interface Treatment {
  cat: string;
  catLabel: string;
  catColor: string;
  name: string;
  price: string;
  duration: string;
  nameExtra?: string;
}

const treatments: Treatment[] = [
  // GEZICHT
  { cat: "gezicht", catLabel: "Gezicht", catColor: "text-purple-500", name: "Reinigende gezichtsbehandeling", price: "€65", duration: "1 uur" },
  { cat: "gezicht", catLabel: "Gezicht", catColor: "text-purple-500", name: "Mannen gezichtsbehandeling", price: "€65", duration: "1 uur" },
  { cat: "gezicht", catLabel: "Gezicht", catColor: "text-purple-500", name: "Ontspannende gezichtsbehandeling", price: "€65", duration: "1 uur" },
  { cat: "gezicht", catLabel: "Gezicht", catColor: "text-purple-500", name: "Uursarrangement", price: "€67", duration: "1 uur" },
  { cat: "gezicht", catLabel: "Gezicht", catColor: "text-purple-500", name: "Complete gezichtsbehandeling", price: "€81", duration: "1 uur 30 min" },
  { cat: "gezicht", catLabel: "Gezicht", catColor: "text-purple-500", name: "Deluxe gezichtsbehandeling", price: "€89", duration: "1 uur 30 min" },
  { cat: "gezicht", catLabel: "Gezicht", catColor: "text-purple-500", name: "Tiener gezichtsbehandeling", price: "€47", duration: "45 min" },
  { cat: "gezicht", catLabel: "Gezicht", catColor: "text-purple-500", name: "Peeling gezichtsbehandeling", price: "€77", duration: "1 uur", nameExtra: "Gigi Ester C" },
  { cat: "gezicht", catLabel: "Gezicht", catColor: "text-purple-500", name: "Pit Stop reiniging", price: "€36", duration: "30 min" },
  // MASSAGE
  { cat: "massage", catLabel: "Massage", catColor: "text-pink-500", name: "Rug-schouder-nek massage", price: "€33", duration: "25 min" },
  { cat: "massage", catLabel: "Massage", catColor: "text-pink-500", name: "Gezicht-schouder-décolleté massage", price: "€33", duration: "25 min" },
  { cat: "massage", catLabel: "Massage", catColor: "text-pink-500", name: "Rug-schouder-nek-been massage", price: "€45", duration: "40 min" },
  { cat: "massage", catLabel: "Massage", catColor: "text-pink-500", name: "Rug-schouder-nek massage & scrub", price: "€45", duration: "40 min" },
  // PEDICURE
  { cat: "pedicure", catLabel: "Pedicure", catColor: "text-emerald-600", name: "Pedicure", price: "€38,50", duration: "45 min" },
  { cat: "pedicure", catLabel: "Pedicure", catColor: "text-emerald-600", name: "Verwenpedicure", price: "€51", duration: "1 uur" },
  { cat: "pedicure", catLabel: "Pedicure", catColor: "text-emerald-600", name: "Pedicure kort", price: "€17,50", duration: "15 min" },
  { cat: "pedicure", catLabel: "Pedicure", catColor: "text-emerald-600", name: "Pedicure incl. lakken", price: "€41", duration: "45 min" },
  { cat: "pedicure", catLabel: "Pedicure", catColor: "text-emerald-600", name: "Pedicure incl. lakken + flesje nagellak", price: "€46", duration: "45 min" },
  { cat: "pedicure", catLabel: "Pedicure", catColor: "text-emerald-600", name: "Verwenpedicure incl. lakken", price: "€53,50", duration: "1 uur" },
  { cat: "pedicure", catLabel: "Pedicure", catColor: "text-emerald-600", name: "Verwenpedicure incl. lak + flesje nagellak", price: "€58,50", duration: "1 uur" },
  // WIMPERS
  { cat: "wimpers", catLabel: "Wimpers & Wenkbrauwen", catColor: "text-amber-600", name: "Verven wimpers", price: "€19", duration: "30 min" },
  { cat: "wimpers", catLabel: "Wimpers & Wenkbrauwen", catColor: "text-amber-600", name: "Verven wenkbrauwen", price: "€15", duration: "15 min" },
  { cat: "wimpers", catLabel: "Wimpers & Wenkbrauwen", catColor: "text-amber-600", name: "Verven wimpers & wenkbrauwen", price: "€29", duration: "30 min" },
  { cat: "wimpers", catLabel: "Wimpers & Wenkbrauwen", catColor: "text-amber-600", name: "Epileren", price: "€15", duration: "15 min" },
  { cat: "wimpers", catLabel: "Wimpers & Wenkbrauwen", catColor: "text-amber-600", name: "Epileren + verven wenkbrauwen", price: "€28", duration: "30 min" },
  { cat: "wimpers", catLabel: "Wimpers & Wenkbrauwen", catColor: "text-amber-600", name: "Verven wimpers & wenkbrauwen + epileren", price: "€38", duration: "45 min" },
  // HARSEN
  { cat: "harsen", catLabel: "Harsen", catColor: "text-rose-500", name: "Harsen bovenlip", price: "€11", duration: "15 min" },
  { cat: "harsen", catLabel: "Harsen", catColor: "text-rose-500", name: "Harsen kin", price: "€11", duration: "15 min" },
  { cat: "harsen", catLabel: "Harsen", catColor: "text-rose-500", name: "Harsen bovenlip en kin", price: "€20", duration: "15 min" },
  { cat: "harsen", catLabel: "Harsen", catColor: "text-rose-500", name: "Harsen onderbenen", price: "€28", duration: "30 min" },
  { cat: "harsen", catLabel: "Harsen", catColor: "text-rose-500", name: "Harsen bovenbenen", price: "€28", duration: "30 min" },
  { cat: "harsen", catLabel: "Harsen", catColor: "text-rose-500", name: "Harsen onder- en bovenbenen", price: "€48", duration: "40 min" },
  { cat: "harsen", catLabel: "Harsen", catColor: "text-rose-500", name: "Harsen oksels", price: "€25", duration: "20 min" },
  { cat: "harsen", catLabel: "Harsen", catColor: "text-rose-500", name: "Harsen rug of armen", price: "€28", duration: "30 min" },
  // OVERIG
  { cat: "overig", catLabel: "Overig", catColor: "text-indigo-500", name: "Nabehandeling", price: "Nader te bepalen", duration: "2 uur" },
  { cat: "overig", catLabel: "Overig", catColor: "text-indigo-500", name: "Wimperlifting", price: "€50", duration: "1 uur" },
  { cat: "overig", catLabel: "Overig", catColor: "text-indigo-500", name: "Manicure + gratis nagellak", price: "€48", duration: "50 min" },
  // DERMAPEN
  { cat: "dermapen", catLabel: "Dermapen", catColor: "text-sky-600", name: "Dermapen 4 incl. rondom ogen", price: "€145", duration: "1 uur 45 min" },
  { cat: "dermapen", catLabel: "Dermapen", catColor: "text-sky-600", name: "Dermapen 4 alleen rondom ogen", price: "€45", duration: "30 min" },
  { cat: "dermapen", catLabel: "Dermapen", catColor: "text-sky-600", name: "Dermapen 4 Microneedle", price: "€110", duration: "1 uur 30 min" },
];

const categories = [
  { key: "alle", label: "Alle" },
  { key: "gezicht", label: "Gezicht" },
  { key: "massage", label: "Massage" },
  { key: "pedicure", label: "Pedicure" },
  { key: "wimpers", label: "Wimpers & Wenkbrauwen" },
  { key: "harsen", label: "Harsen" },
  { key: "overig", label: "Overig" },
  { key: "dermapen", label: "Dermapen" },
];

const STAFF_PINS: Record<string, string> = {
  "Ingrid Slieker": "1234",
  "Natasja Hoefakker": "2345",
  "Janine Koning": "3456",
};

interface BookingState {
  treatment: string;
  price: string;
  duration: string;
  staff: string;
  date: string;
  time: string;
}

interface CalDay {
  date: Date;
  dateStr: string;
  isPast: boolean;
  isUnavailable: boolean;
  isSelected: boolean;
  dayNum: number;
}

function buildCalendar(year: number, month: number, selectedDate: string, staff: string): { days: CalDay[]; startOffset: number } {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startOffset = (firstDay.getDay() + 6) % 7;
  const avail = getAvail(staff);
  const days: CalDay[] = [];
  for (let d = 1; d <= daysInMonth; d++) {
    const cellDate = new Date(year, month, d);
    const dow = cellDate.getDay();
    const dateStr =
      cellDate.getFullYear() +
      "-" +
      String(cellDate.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(d).padStart(2, "0");
    const isPast = cellDate < today;
    const dayAvail = avail[dow];
    const isUnavailable = !dayAvail || !dayAvail.on;
    const isSelected = selectedDate === dateStr;
    days.push({ date: cellDate, dateStr, isPast, isUnavailable, isSelected, dayNum: d });
  }
  return { days, startOffset };
}

function getTimeSlots(staff: string, dateStr: string): string[] {
  if (!dateStr) return [];
  const date = new Date(dateStr);
  const day = date.getDay();
  const avail = getAvail(staff);
  const dayAvail = avail[day];
  if (!dayAvail || !dayAvail.on) return [];
  const [startH, startM] = dayAvail.start.split(":").map(Number);
  const [endH, endM] = dayAvail.end.split(":").map(Number);
  const startMins = startH * 60 + startM;
  const endMins = endH * 60 + endM;
  const slots: string[] = [];
  for (let m = startMins; m < endMins; m += 30) {
    const h = Math.floor(m / 60);
    const min = m % 60;
    slots.push((h < 10 ? "0" : "") + h + ":" + (min === 0 ? "00" : "30"));
  }
  return slots;
}

export default function Behandelingen() {
  const [activeCat, setActiveCat] = useState("alle");
  const [allExpanded, setAllExpanded] = useState(false);

  // Booking modal
  const [modalOpen, setModalOpen] = useState(false);
  const [booking, setBooking] = useState<BookingState>({ treatment: "", price: "", duration: "", staff: "", date: "", time: "" });
  const [step, setStep] = useState(1);

  // Calendar
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const [calYear, setCalYear] = useState(today.getFullYear());
  const [calMonth, setCalMonth] = useState(today.getMonth());

  // Confirmation
  const [confirmData, setConfirmData] = useState({ treatment: "", staff: "", date: "", time: "" });

  const filteredTreatments = activeCat === "alle" ? treatments : treatments.filter((t) => t.cat === activeCat);
  const isAll = activeCat === "alle";
  const visibleCount = filteredTreatments.length;
  const showMoreVisible = isAll && visibleCount > SHOW_LIMIT;
  const displayedTreatments = isAll && !allExpanded ? filteredTreatments.slice(0, SHOW_LIMIT) : filteredTreatments;

  const handleFilterCat = (cat: string) => {
    setActiveCat(cat);
    setAllExpanded(false);
  };

  const openBooking = (name: string, price: string, duration: string) => {
    setBooking({ treatment: name, price, duration, staff: "", date: "", time: "" });
    setStep(1);
    setCalYear(today.getFullYear());
    setCalMonth(today.getMonth());
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeBooking = useCallback(() => {
    setModalOpen(false);
    document.body.style.overflow = "";
  }, []);

  const selectStaff = (name: string) => {
    setBooking((prev) => ({ ...prev, staff: name, date: "", time: "" }));
  };

  const calNav = (dir: number) => {
    let newMonth = calMonth + dir;
    let newYear = calYear;
    if (newMonth > 11) { newMonth = 0; newYear = calYear + 1; }
    else if (newMonth < 0) { newMonth = 11; newYear = calYear - 1; }
    setCalMonth(newMonth);
    setCalYear(newYear);
  };

  const calSelectDate = (dateStr: string) => {
    setBooking((prev) => ({ ...prev, date: dateStr, time: "" }));
  };

  const selectTime = (slot: string) => {
    setBooking((prev) => ({ ...prev, time: slot }));
  };

  const goStep = (n: number) => setStep(n);

  const submitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const dateObj = new Date(booking.date);
    const dateStr = dateObj.toLocaleDateString("nl-NL", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    setConfirmData({ treatment: booking.treatment, staff: booking.staff, date: dateStr, time: booking.time });
    setStep(4);
  };

  // Close on Escape
  useEffect(() => {
    if (!modalOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") closeBooking(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [modalOpen, closeBooking]);

  const { days, startOffset } = buildCalendar(calYear, calMonth, booking.date, booking.staff);
  const timeSlots = getTimeSlots(booking.staff, booking.date);
  const stepLabels = ["", "Stap 1 van 3: Medewerker", "Stap 2 van 3: Datum & tijd", "Stap 3 van 3: Uw gegevens", "Afgerond"];
  const stepTitles = ["", "Kies een medewerker", "Kies datum & tijd", "Uw gegevens", "Bevestiging"];

  const clockIcon = (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" strokeWidth="2" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2" />
    </svg>
  );

  return (
    <>
      <section id="behandelingen" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-pink-600 font-semibold text-sm tracking-widest uppercase mb-3">Ons aanbod</span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Behandelingen
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Kies een categorie en boek direct een afspraak bij een medewerker naar keuze.
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Liever bellen?{" "}
              <a href="tel:0306663992" className="text-purple-600 font-medium hover:underline">030-6663992</a>
            </p>
          </div>

          {/* Category tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-8" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => handleFilterCat(cat.key)}
                className="shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all"
                style={
                  activeCat === cat.key
                    ? { background: "#111827", color: "#fff" }
                    : { background: "#f3f4f6", color: "#6b7280" }
                }
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Treatment grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {displayedTreatments.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-all flex flex-col gap-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-wide mb-1 ${t.catColor}`}>{t.catLabel}</p>
                    <h3 className="font-semibold text-gray-900 text-base leading-snug">
                      {t.name}
                      {t.nameExtra && (
                        <span className="text-gray-400 font-normal text-xs"> {t.nameExtra}</span>
                      )}
                    </h3>
                  </div>
                  <span className="font-bold text-gray-900 text-base shrink-0">{t.price}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-400 text-xs">
                  {clockIcon}
                  {t.duration}
                </div>
                <button
                  onClick={() => openBooking(t.name, t.price, t.duration)}
                  className="mt-auto w-full py-2 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-purple-700 transition-colors"
                >
                  Boek nu
                </button>
              </div>
            ))}
          </div>

          {/* Show more / less button */}
          {showMoreVisible && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setAllExpanded((prev) => !prev)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 bg-white text-gray-700 text-sm font-semibold hover:border-purple-400 hover:text-purple-700 transition-all"
              >
                <span>{allExpanded ? "Toon minder" : `Toon alle ${visibleCount} behandelingen`}</span>
                <svg
                  className="w-4 h-4 transition-transform"
                  style={allExpanded ? { transform: "rotate(180deg)" } : undefined}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Booking Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeBooking}></div>
          {/* Modal */}
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">

            {/* Header */}
            <div className="flex items-start justify-between p-6 pb-4 border-b border-gray-100">
              <div>
                <p className="text-xs text-gray-400 font-medium mb-0.5">{stepLabels[step]}</p>
                <h3
                  className="text-lg font-bold text-gray-900"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {stepTitles[step]}
                </h3>
              </div>
              <button
                onClick={closeBooking}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors shrink-0 ml-4"
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Treatment summary bar */}
            <div className="mx-6 mt-4 bg-purple-50 rounded-xl px-4 py-3 flex items-center justify-between gap-3">
              <div>
                <p className="font-semibold text-gray-900 text-sm">{booking.treatment}</p>
                <p className="text-gray-500 text-xs">{booking.duration}</p>
              </div>
              <span className="font-bold text-purple-700 text-sm shrink-0">{booking.price}</span>
            </div>

            {/* Step content */}
            <div className="p-6">

              {/* STEP 1: Medewerker */}
              {step === 1 && (
                <div>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      { name: "Geen voorkeur", sub: "Eerste beschikbare medewerker", img: null },
                      { name: "Ingrid Slieker", sub: "Eigenaresse, schoonheidsspecialiste & pedicure", img: "/team/ingrid.jpg" },
                      { name: "Natasja Hoefakker", sub: "Pedicure", img: "/team/natasja.jpg" },
                      { name: "Janine Koning", sub: "Schoonheidsspecialiste & PMU artist", img: "/team/janine.jpg" },
                    ].map((staff) => (
                      <button
                        key={staff.name}
                        onClick={() => selectStaff(staff.name)}
                        className="text-left px-4 py-3 rounded-xl border-2 transition-all flex items-center gap-3"
                        style={
                          booking.staff === staff.name
                            ? { borderColor: "#7c3aed", background: "#faf5ff" }
                            : { borderColor: "#e5e7eb" }
                        }
                      >
                        {staff.img ? (
                          <img src={staff.img} className="w-10 h-10 rounded-full object-cover object-top shrink-0" alt={staff.name} />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-lg shrink-0">👤</div>
                        )}
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{staff.name}</p>
                          <p className="text-gray-400 text-xs">{staff.sub}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => goStep(2)}
                    disabled={!booking.staff}
                    className="mt-5 w-full py-3 rounded-xl font-semibold text-sm transition-all"
                    style={
                      booking.staff
                        ? { background: "#111827", color: "#fff" }
                        : { background: "#e5e7eb", color: "#9ca3af", cursor: "not-allowed" }
                    }
                  >
                    Volgende
                  </button>
                </div>
              )}

              {/* STEP 2: Datum & Tijd */}
              {step === 2 && (
                <div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Datum</label>
                      <div className="rounded-xl border border-gray-200 overflow-hidden">
                        {/* Calendar header */}
                        <div className="flex items-center justify-between px-4 py-2.5 bg-gray-50 border-b border-gray-200">
                          <button
                            type="button"
                            onClick={() => calNav(-1)}
                            className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <span className="font-semibold text-gray-800 text-sm">
                            {MONTH_NAMES_NL[calMonth]} {calYear}
                          </span>
                          <button
                            type="button"
                            onClick={() => calNav(1)}
                            className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                        {/* Day headers */}
                        <div className="grid grid-cols-7 border-b border-gray-100">
                          {["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"].map((d) => (
                            <span key={d} className="text-center text-xs font-semibold text-gray-400 py-1.5">{d}</span>
                          ))}
                        </div>
                        {/* Day grid */}
                        <div className="grid grid-cols-7 gap-px bg-gray-100 p-px">
                          {Array.from({ length: startOffset }).map((_, i) => (
                            <div key={`empty-${i}`} className="bg-white py-1" />
                          ))}
                          {days.map((day) => {
                            if (day.isSelected) {
                              return (
                                <button
                                  key={day.dateStr}
                                  type="button"
                                  className="bg-purple-600 text-white font-bold text-xs py-1.5 rounded text-center transition-all"
                                  onClick={() => calSelectDate(day.dateStr)}
                                >
                                  {day.dayNum}
                                </button>
                              );
                            }
                            if (day.isPast) {
                              return (
                                <button
                                  key={day.dateStr}
                                  type="button"
                                  disabled
                                  className="bg-white text-gray-300 text-xs py-1.5 rounded text-center cursor-not-allowed"
                                >
                                  {day.dayNum}
                                </button>
                              );
                            }
                            if (day.isUnavailable) {
                              return (
                                <button
                                  key={day.dateStr}
                                  type="button"
                                  disabled
                                  className="bg-red-50 text-red-300 text-xs py-1.5 rounded text-center cursor-not-allowed"
                                  title="Niet beschikbaar"
                                >
                                  {day.dayNum}
                                </button>
                              );
                            }
                            return (
                              <button
                                key={day.dateStr}
                                type="button"
                                onClick={() => calSelectDate(day.dateStr)}
                                className="bg-white hover:bg-purple-50 hover:text-purple-700 text-gray-700 font-medium text-xs py-1.5 rounded text-center transition-all"
                              >
                                {day.dayNum}
                              </button>
                            );
                          })}
                        </div>
                        {/* Legend */}
                        <div className="flex items-center gap-4 px-4 py-2 bg-gray-50 border-t border-gray-100">
                          <span className="flex items-center gap-1.5 text-xs text-gray-400">
                            <span className="w-3 h-3 rounded-sm bg-red-100 inline-block"></span>Niet beschikbaar
                          </span>
                          <span className="flex items-center gap-1.5 text-xs text-gray-400">
                            <span className="w-3 h-3 rounded-sm bg-white border border-gray-200 inline-block"></span>Beschikbaar
                          </span>
                          <span className="flex items-center gap-1.5 text-xs text-gray-400">
                            <span className="w-3 h-3 rounded-sm bg-purple-600 inline-block"></span>Gekozen
                          </span>
                        </div>
                      </div>
                    </div>

                    {booking.date && (
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Beschikbare tijden</label>
                        {timeSlots.length > 0 ? (
                          <div className="grid grid-cols-4 gap-2">
                            {timeSlots.map((slot) => (
                              <button
                                key={slot}
                                type="button"
                                onClick={() => selectTime(slot)}
                                className="py-1.5 rounded-[10px] border-2 text-xs font-semibold transition-all"
                                style={
                                  booking.time === slot
                                    ? { borderColor: "#7c3aed", background: "#7c3aed", color: "white" }
                                    : { borderColor: "#e5e7eb", color: "#374151" }
                                }
                              >
                                {slot}
                              </button>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm text-gray-400 text-center py-2">
                            {booking.staff && booking.staff !== "Geen voorkeur" ? booking.staff : "Deze medewerker"} is niet beschikbaar op deze dag
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="flex gap-3 mt-5">
                    <button
                      onClick={() => goStep(1)}
                      className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition-all"
                    >
                      Terug
                    </button>
                    <button
                      onClick={() => goStep(3)}
                      disabled={!booking.date || !booking.time}
                      className="flex-1 py-3 rounded-xl font-semibold text-sm transition-all"
                      style={
                        booking.date && booking.time
                          ? { background: "#111827", color: "#fff" }
                          : { background: "#e5e7eb", color: "#9ca3af", cursor: "not-allowed" }
                      }
                    >
                      Volgende
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Gegevens */}
              {step === 3 && (
                <div>
                  <form onSubmit={submitBooking} className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Naam <span className="text-pink-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="b-naam"
                        required
                        placeholder="Uw volledige naam"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-gray-900 text-sm placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        E-mailadres <span className="text-pink-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="b-email"
                        required
                        placeholder="uw@email.nl"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-gray-900 text-sm placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Telefoonnummer <span className="text-pink-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="b-telefoon"
                        required
                        placeholder="+31 6 12345678"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-gray-900 text-sm placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Opmerking</label>
                      <textarea
                        id="b-opmerking"
                        rows={2}
                        placeholder="Bijzonderheden of wensen..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-gray-900 text-sm placeholder-gray-400 resize-none"
                      />
                    </div>
                    <div className="flex gap-3 pt-1">
                      <button
                        type="button"
                        onClick={() => goStep(2)}
                        className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition-all"
                      >
                        Terug
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-3 rounded-xl bg-gray-900 text-white font-semibold text-sm hover:bg-purple-700 transition-all"
                      >
                        Bevestigen
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* STEP 4: Bevestiging */}
              {step === 4 && (
                <div className="text-center py-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4
                    className="text-xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Afspraak aangevraagd!
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-1">
                    We bevestigen uw afspraak zo snel mogelijk via e-mail of telefoon.
                  </p>
                  <div className="mt-4 bg-gray-50 rounded-xl p-4 text-left text-sm space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Behandeling</span>
                      <span className="font-medium text-gray-900 text-right max-w-[55%]">{confirmData.treatment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Medewerker</span>
                      <span className="font-medium text-gray-900">{confirmData.staff}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Datum</span>
                      <span className="font-medium text-gray-900">{confirmData.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Tijd</span>
                      <span className="font-medium text-gray-900">{confirmData.time}</span>
                    </div>
                  </div>
                  <button
                    onClick={closeBooking}
                    className="mt-5 w-full py-3 rounded-xl bg-gray-900 text-white font-semibold text-sm hover:bg-purple-700 transition-all"
                  >
                    Sluiten
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </>
  );
}
