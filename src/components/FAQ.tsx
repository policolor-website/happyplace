"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "Ce ore sunt check-in-ul și check-out-ul?",
    answer:
      "Check-in-ul se face începând cu ora 14:00, iar check-out-ul până la ora 11:00. Pentru arrivări târzii sau cerințe speciale, vă rugăm să ne contactați pe WhatsApp.",
  },
  {
    question: "Cum se face rezervarea?",
    answer:
      "Rezervarea se face prin WhatsApp la numărul 0722 335 357. Trimiteți-ne datele de check-in, check-out și numărul de oaspeți, iar noi vă confirmăm disponibilitatea.",
  },
  {
    question: "Aveți parcare gratuită?",
    answer:
      "Da, toți oaspeții Happy Place beneficiază gratuit de un loc de parcare subterană pazită în complexul Silver Mountain.",
  },
  {
    question: "Accesul la SPA este inclus?",
    answer:
      "Accesul la centrul SPA din complex (piscină interioară, piscină exterioară infinity încălzită, jacuzzi, saună) este cu cost suplimentar pentru oaspeții Happy Place. SPA se află într-o altă clădire, la 150 m de apartament.",
  },
  {
    question: "Ce atracții turistice sunt în apropiere?",
    answer:
      "Poiana Brașov oferă numeroase atracții: Partia Bradul (3.3 km), Masivul Postăvarul cu trasee montane, centrul istoric Brașov (12 km), Biserica Neagră, Tâmpa, Castelul Bran și Mănăstirile din zonă.",
  },
  {
    question: "Apartamentul are bucătărie complet utilată?",
    answer:
      "Da, bucătăria este complet utilată cu plită electrică, cuptor cu microunde, frigider, fierbător și espressor Nespresso. Vase și ustensile complete. Din partea noastră aveți gratuit ceai, cafea și băuturi la sosire.",
  },
  {
    question: "Care este politica de anulare a rezervării?",
    answer:
      "Anularea este gratuită cu minim 48 de ore înainte de data check-in-ului. Pentru anulări în termen mai scurt, se poate reține o noapte de cazare.",
  },
  {
    question: "Aveți WiFi gratuit?",
    answer:
      "Da, apartamentul dispune de WiFi gratuit de mare viteză în toate spațiile, ideal atât pentru relaxare cu Netflix, cât și pentru muncă remote.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqItems.map((item, i) => (
        <div
          key={i}
          className="bg-night-light border border-border-dark overflow-hidden transition-colors hover:border-gold/30"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 p-5 text-left bg-transparent border-0 cursor-pointer"
          >
            <span className="text-cream font-semibold text-sm md:text-base">
              {item.question}
            </span>
            <span
              className={`text-gold text-xl shrink-0 transition-transform duration-300 ${
                open === i ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          <div
            className="grid transition-all duration-300 ease-in-out"
            style={{
              gridTemplateRows: open === i ? "1fr" : "0fr",
            }}
          >
            <div className="overflow-hidden">
              <p className="px-5 pb-5 text-cream/70 text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
