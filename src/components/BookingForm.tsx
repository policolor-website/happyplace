"use client";

import { useState, useMemo } from "react";
import { format, differenceInCalendarDays } from "date-fns";
import DatePicker from "./DatePicker";

export default function BookingForm({
  spaceName,
}: {
  spaceName: string;
}) {
  const today = new Date();
  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2);

  const [checkIn, setCheckIn] = useState(format(today, "yyyy-MM-dd"));
  const [checkOut, setCheckOut] = useState(format(dayAfterTomorrow, "yyyy-MM-dd"));
  const [guests, setGuests] = useState("2");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const nights = useMemo(
    () => differenceInCalendarDays(new Date(checkOut), new Date(checkIn)),
    [checkIn, checkOut]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (nights < 2) {
      setError("Cazarea este de minimum 2 nopți. Selectează un check-out cu cel puțin 2 nopți după check-in.");
      return;
    }
    setError("");

    const message =
      `Rezervare Happy Place Brașov\n\n` +
      `Spațiu: ${spaceName}\n` +
      `Check-in: ${checkIn}\n` +
      `Check-out: ${checkOut}\n` +
      `Nopți: ${nights}\n` +
      `Oaspeți: ${guests}\n` +
      `Nume: ${name || "-"}\n` +
      `Telefon: ${phone || "-"}\n\n` +
      `Vă rog să confirmați disponibilitatea și prețul. Mulțumesc!`;

    const whatsappUrl = `https://wa.me/40722335357?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-night-light border border-border-dark p-6">
      <h3 className="text-gold font-semibold text-lg mb-4">Rezervă acest spațiu</h3>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label className="block text-xs text-muted uppercase tracking-wider mb-1">Check-in</label>
          <DatePicker
            value={checkIn}
            onChange={setCheckIn}
            placeholder="Check-in"
          />
        </div>
        <div>
          <label className="block text-xs text-muted uppercase tracking-wider mb-1">Check-out</label>
          <DatePicker
            value={checkOut}
            onChange={setCheckOut}
            placeholder="Check-out"
            minDate={checkIn ? new Date(new Date(checkIn).getTime() + 2 * 86400000) : undefined}
          />
        </div>
      </div>
      <div className="mb-3">
        <label className="block text-xs text-muted uppercase tracking-wider mb-1">Oaspeți</label>
        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full bg-night border border-border-dark text-cream px-3 py-2 text-sm focus:border-gold focus:outline-none transition-colors"
        >
          <option value="1">1 persoană</option>
          <option value="2">2 persoane</option>
          <option value="3">3 persoane</option>
          <option value="4">4 persoane</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="block text-xs text-muted uppercase tracking-wider mb-1">Nume</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Numele tău"
          className="w-full bg-night border border-border-dark text-cream px-3 py-2 text-sm focus:border-gold focus:outline-none transition-colors"
        />
      </div>
      <div className="mb-4">
        <label className="block text-xs text-muted uppercase tracking-wider mb-1">Telefon</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Numărul tău de telefon"
          className="w-full bg-night border border-border-dark text-cream px-3 py-2 text-sm focus:border-gold focus:outline-none transition-colors"
        />
      </div>
      {error && (
        <p className="text-red-400 text-xs mb-3">{error}</p>
      )}
      <button
        type="submit"
        className="w-full px-6 py-3 bg-gold text-night text-sm font-semibold uppercase tracking-wider transition-all hover:bg-gold-light cursor-pointer border-0"
      >
        Rezervă
      </button>
      <p className="text-muted text-xs mt-3 text-center">
        Cazare minimum 2 nopți · Rezervarea se trimite prin WhatsApp.
      </p>
    </form>
  );
}
