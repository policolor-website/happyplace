"use client";

import { useState, useMemo } from "react";
import { format, differenceInCalendarDays } from "date-fns";
import DatePicker from "./DatePicker";

export default function BookingEngine() {
  const today = new Date();
  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

  const [checkIn, setCheckIn] = useState(format(today, "yyyy-MM-dd"));
  const [checkOut, setCheckOut] = useState(format(dayAfterTomorrow, "yyyy-MM-dd"));
  const [guests, setGuests] = useState("2");
  const [apartment, setApartment] = useState("happy");
  const [error, setError] = useState("");

  const nights = useMemo(
    () => differenceInCalendarDays(new Date(checkOut), new Date(checkIn)),
    [checkIn, checkOut]
  );

  const apartmentName = apartment === "happy" ? "Happy Place" : "Dream Studio";

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkIn || !checkOut) return;

    if (nights < 2) {
      setError("Cazarea este de minimum 2 nopți. Te rugăm să selectezi un check-out cu cel puțin 2 nopți după check-in.");
      return;
    }
    setError("");

    const message =
      `Rezervare ${apartmentName} Brașov\n\n` +
      `Apartament: ${apartmentName}\n` +
      `Check-in: ${checkIn}\n` +
      `Check-out: ${checkOut}\n` +
      `Nopți: ${nights}\n` +
      `Oaspeți: ${guests}\n\n` +
      `Vă rog să confirmați disponibilitatea și prețul. Mulțumesc!`;

    const whatsappUrl = `https://wa.me/40722335357?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-night-light border border-border-dark p-4 md:p-6">
      <h3 className="font-display text-xl font-bold text-cream mb-4">
        Verifică disponibilitatea
      </h3>
      <form onSubmit={handleBooking} className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div>
          <label className="block text-xs text-gold uppercase tracking-wider mb-1.5">
            Apartament
          </label>
          <select
            value={apartment}
            onChange={(e) => setApartment(e.target.value)}
            className="w-full bg-night border border-border-dark text-cream px-4 py-2.5 text-sm focus:border-gold focus:outline-none transition-colors"
          >
            <option value="happy">Happy Place</option>
            <option value="dream">Dream Studio</option>
          </select>
        </div>
        <div>
          <label className="block text-xs text-gold uppercase tracking-wider mb-1.5">
            Check-in
          </label>
          <DatePicker
            value={checkIn}
            onChange={setCheckIn}
            placeholder="Check-in"
          />
        </div>
        <div>
          <label className="block text-xs text-gold uppercase tracking-wider mb-1.5">
            Check-out
          </label>
          <DatePicker
            value={checkOut}
            onChange={setCheckOut}
            placeholder="Check-out"
            minDate={checkIn ? new Date(new Date(checkIn).getTime() + 2 * 86400000) : undefined}
          />
        </div>
        <div>
          <label className="block text-xs text-gold uppercase tracking-wider mb-1.5">
            Oaspeți
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full bg-night border border-border-dark text-cream px-4 py-2.5 text-sm focus:border-gold focus:outline-none transition-colors"
          >
            <option value="1">1 persoană</option>
            <option value="2">2 persoane</option>
            <option value="3">3 persoane</option>
            <option value="4">4 persoane</option>
          </select>
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full px-6 py-2.5 bg-gold text-night text-sm font-semibold uppercase tracking-wider transition-all hover:bg-gold-light cursor-pointer border-0"
          >
            Rezervă
          </button>
        </div>
      </form>

      {error && (
        <p className="text-red-400 text-xs mt-4">{error}</p>
      )}

      <p className="text-muted text-xs mt-4">
        Cazare minimum 2 nopți · Rezervarea se trimite prin WhatsApp · Vă vom confirma disponibilitatea și prețul.
      </p>
      <div className="mt-3 p-3 bg-night border border-gold/20">
        <p className="text-gold text-xs font-semibold">
          Cel mai bun preț garantat, fără comisioane ascunse
        </p>
        <p className="text-muted text-xs mt-1 leading-relaxed">
          Suntem proprietari privați în complexul Silver Mountain. Beneficiați
          de aceeași locație exclusivistă, dar cu servicii personalizate și
          prețuri competitive.
        </p>
      </div>
    </div>
  );
}
