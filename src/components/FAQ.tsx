"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "Ce ore sunt check-in-ul și check-out-ul?",
    answer:
      "Check-in-ul se face începând cu ora 14:00, iar check-out-ul până la ora 11:00. Pentru arrivări târzii sau cerințe speciale, vă rugăm să ne contactați telefonic.",
  },
  {
    question: "Se poate plăti cu cardul la pensiune?",
    answer:
      "Da, acceptăm plăți cu cardul la fața locului, precum și numerar. De asemenea, puteți rezerva online prin telefon sau email.",
  },
  {
    question: "Aveți parcare gratuită?",
    answer:
      "Da, dispunem de parcare privată gratuită pentru toți oaspeții noștri, direct la fața locului.",
  },
  {
    question: "Se acceptă animale de companie?",
    answer:
      "Da, acceptăm animale de companie la cerere. Vă rugăm să ne anunțați în avans la rezervare.",
  },
  {
    question: "Ce atracții turistice sunt în apropiere?",
    answer:
      "Vatra Dornei oferă numeroase atracții: Munții Călimani, Mănăstirile din Bucovina (Voroneț, Humor, Sucevița), izvoare termale, parcul dendrologic, pârtii de schi și trasee montane. Pensiunea este poziționată ideal pentru explorarea zonei.",
  },
  {
    question: "Oferiți mic dejun?",
    answer:
      "Da, putem oferi mic dejun la cerere. Vă rugăm să ne anunțați în avans pentru a pregăti totul.",
  },
  {
    question: "Care este politica de anulare a rezervării?",
    answer:
      "Anularea este gratuită cu minim 48 de ore înainte de data check-in-ului. Pentru anulări în termen mai scurt, se poate reține o noapte de cazare.",
  },
  {
    question: "Aveți WiFi gratuit?",
    answer:
      "Da, toate camerele și spațiile comune dispun de WiFi gratuit cu acces internet.",
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
