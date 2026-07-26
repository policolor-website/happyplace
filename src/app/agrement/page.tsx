import Image from "next/image";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export const metadata = {
  title: "Agrement — Pensiunea Angela Vatra Dornei",
  description:
    "Activități de agrement în Vatra Dornei: Centru SPA, turism ecvestru, mountain biking, easy rafting, off-road, parc de aventură, parcul din stațiune și pârtii de schi.",
};

const activities = [
  {
    slug: "centru-spa",
    title: "Centru SPA Pensiunea Angela",
    description:
      "Distracție și relaxare în cel mai nou centru SPA din Vatra Dornei. Vino să te bucuri de momente de răsfăț și wellbeing într-un cadru modern și confortabil.",
    image: "/images/agrement/62-screen.jpg",
    icon: "💆",
  },
  {
    slug: "turism-ecvestru",
    title: "Turism ecvestru",
    description:
      "Lecții de călărie sau plimbări prin pădure cu cei mai frumoși cai din Bucovina. O experiență unică în mijlocul naturii, potrivită pentru începători și avansați.",
    image: "/images/agrement/275-screen.jpg",
    icon: "🐎",
  },
  {
    slug: "mountain-biking",
    title: "Mountain biking",
    description:
      "Una dintre metodele de agrement care vă va aduce un nivel de adrenalină crescut — mișcare, provocare și multă distracție pe traseele montane din Vatra Dornei.",
    image: "/images/agrement/8-screen.jpg",
    icon: "🚵",
  },
  {
    slug: "easy-rafting",
    title: "Easy rafting",
    description:
      "Una dintre cele mai apreciate variante de agrement. Peisaje superbe, mișcare, adrenalină și distracție în echipă pe râurile din zona Bucovinei!",
    image: "/images/agrement/10-screen.jpg",
    icon: "🚣",
  },
  {
    slug: "off-road",
    title: "Off-Road",
    description:
      "Explorați munții Bucovinei și admirați peisajele superbe și sălbatice în condiții de maximă siguranță! O aventură cu jeep-uri autentice pe trasee de munte.",
    image: "/images/agrement/124-screen.jpg",
    icon: "🚙",
  },
  {
    slug: "titi-s-adventure-park",
    title: "Titi's Adventure Park",
    description:
      "Distrează-te în natură, cățără-te în copaci sau dă-te cu tiroliana în cel mai nou parc de aventură din Vatra Dornei! Perfect pentru familii și grupuri de prieteni.",
    image: "/images/agrement/132-screen.jpg",
    icon: "🌳",
  },
  {
    slug: "parcul-din-statiune",
    title: "Parcul din stațiune",
    description:
      "O plimbare în parcul din centrul stațiunii rămâne una dintre cele mai îndrăgite metode de relaxare în Vatra Dornei. Alei umbroase, flori și liniște.",
    image: "/images/agrement/112-screen.jpg",
    icon: "🏞️",
  },
  {
    slug: "partii-de-ski",
    title: "Pârtii de schi",
    description:
      "4 pârtii de schi — una dintre ele fiind a doua ca lungime din România — vă așteaptă în stațiune. Distracția depinde doar de voi! Sezon de iarnă excelent pentru schi și snowboard.",
    image: "/images/agrement/19-screen.jpg",
    icon: "⛷️",
  },
];

export default function AgrementPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl font-bold text-cream mb-4">
            Agrement
          </h1>
          <p className="text-muted text-lg">Activități și atracții în Vatra Dornei</p>
          <div className="w-24 h-px gold-line mx-auto mt-6" />
        </div>

        <Reveal>
          <p className="text-cream/70 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Vatra Dornei oferă o gamă variată de activități de agrement pentru
            toate gusturile și vârstele. De la relaxare în SPA la adrenalină pe
            pârtii de schi, de la plimbări călare la aventuri off-road —
            Pensiunea Angela este punctul de plecare perfect pentru toate aceste
            experiențe.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, i) => (
            <Reveal key={activity.slug} delay={i * 80}>
              <div className="group bg-night-light border border-border-dark overflow-hidden card-hover h-full flex flex-col">
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-night/80 to-transparent" />
                  <div className="absolute top-4 left-4 text-3xl">
                    {activity.icon}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-bold text-cream mb-3 group-hover:text-gold transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                    {activity.description}
                  </p>
                  <Link
                    href="/contact"
                    className="text-gold text-sm font-semibold uppercase tracking-wider no-underline transition-colors hover:text-gold-light"
                  >
                    Rezervă →
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-16 p-8 bg-night-light border border-border-dark text-center">
            <h2 className="font-display text-2xl font-bold text-cream mb-4">
              Vrei să te bucuri de aceste activități?
            </h2>
            <p className="text-muted text-sm mb-6 max-w-2xl mx-auto">
              Contactează-ne pentru a organiza experiența ta perfectă în Vatra Dornei.
              Te ajutăm cu recomandări și rezervări pentru toate activitățile de agrement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/camere"
                className="px-8 py-4 bg-gold text-night text-sm font-semibold uppercase tracking-wider no-underline transition-all hover:bg-gold-light"
              >
                Rezervă cazare
              </Link>
              <a
                href="tel:0727795599"
                className="px-8 py-4 border border-cream/30 text-cream text-sm font-semibold uppercase tracking-wider no-underline transition-all hover:border-gold hover:text-gold"
              >
                Sună: 0727 795 599
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
