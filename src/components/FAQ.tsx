"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "Ce ore sunt check-in-ul și check-out-ul?",
    answer:
      "Check-in-ul se face începând cu ora 15:00, iar check-out-ul până la ora 11:00. Accesul în apartament se face prin self-check-in la orice oră, cu un cod unic generat pentru fiecare rezervare. Codul se tastează pe clanța digitală a apartamentului — nu este nevoie de întâlnire cu gazda.",
  },
  {
    question: "Cum se face rezervarea?",
    answer:
      "Rezervarea se face prin WhatsApp la numărul 0722 335 357. Trimiteți-ne datele de check-in, check-out și numărul de oaspeți, iar noi vă confirmăm disponibilitatea.",
  },
  {
    question: "Aveți parcare gratuită?",
    answer:
      "Da, toți oaspeții Happy Place beneficiază de un loc de parcare subteran gratuit cu pază 24/7, inclus în prețul cazării. Uiți iarna de grija deszăpezirii mașinii, iar vara, automobilul îți este protejat de căldura excesivă a soarelui.",
  },
  {
    question: "Accesul la SPA, piscine și restaurant este inclus?",
    answer:
      "NU. Apartamentul Happy Place este locuință privată în complexul Silver Mountain. Accesul la facilitățile mari ale complexului (centru SPA, piscină interioară, piscină exterioară infinity, jacuzzi, saună, sală de fitness, restaurant NOIR) NU este inclus în prețul cazării și se achiziționează separat de la recepția complexului. SPA și restaurantul NOIR se află în aceeași clădire multifuncțională, la 50 m de apartament.",
  },
  {
    question: "Cât costă accesul la centrul SPA?",
    answer:
      "Centrul SPA este gestionat de o firmă specializată și au acces exclusiv doar turiștii cazați în complexul Silver Mountain. Tarife pentru 3 ore: 145 lei/adult, 75 lei/copil (3-9 ani), copiii sub 3 ani au acces gratuit. Tariful include acces integral la: piscina interioară, piscina exterioară infinity încălzită, jacuzzi, saună umedă și uscată. Plata se face separat la recepția SPA.",
  },
  {
    question: "Pot lua micul dejun la restaurant?",
    answer:
      "Da. Micul dejun se servește la restaurantul NOIR (în aceeași clădire cu SPA-ul) între orele 08:30 - 10:30, în sistem bufet suedez. Preț: 99 lei/persoană. Este un bufet foarte bogat: omletă, iaurt, brânzeturi, mezeluri, prăjituri, fructe, cafea, sucuri și chiar șampanie. Plata se face separat la restaurant.",
  },
  {
    question: "Ce facilități sunt incluse gratuit în complex?",
    answer:
      "Oaspeții Happy Place au acces gratuit în complex la: loc de joacă exterior pentru copii, teren de mini fotbal, masă de ping-pong, teren de badminton și parcare în exterior cu stații de încărcare pentru mașini electrice.",
  },
  {
    question: "Ce atracții turistice sunt în apropiere?",
    answer:
      "Poiana Brașov oferă numeroase atracții: pârtii de schi (accesibile iarna cu ski-bus din fața complexului), Masivul Postăvarul cu trasee montane, centrul istoric Brașov, Biserica Neagră, Tâmpa, Castelul Bran și Mănăstirile din zonă.",
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
