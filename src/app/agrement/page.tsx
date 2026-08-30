import Image from "next/image";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import Facilities from "@/components/Facilities";
import { amenities } from "@/lib/data";

export const metadata = {
  title: "Facilități — Happy Place Brașov",
  description:
    "Facilitățile complexului Silver Mountain Poiana Brașov: centru SPA, 2 piscine, restaurant NOIR, parcare subteran, sală de fitness, loc de joacă exterior pentru copii și schi.",
};

export default function AmenitiesPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
        <div className="relative text-center mb-12 py-16">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/happy-place/Happy_Place_Brasov_27.jpeg"
              alt=""
              fill
              className="object-cover opacity-10"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <h1 className="font-display text-5xl font-bold text-cream mb-4">
              Facilități complex
            </h1>
            <p className="text-muted text-lg">Silver Mountain Resort &amp; SPA · Poiana Brașov</p>
            <div className="w-24 h-px gold-line mx-auto mt-6" />
          </div>
        </div>

      <div className="max-w-7xl mx-auto px-6">

        <Reveal>
          <p className="text-cream/70 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Complexul Silver Mountain Resort &amp; SPA oferă o gamă completă de
            facilități pentru oaspeții Happy Place. De la relaxare în centrul
            SPA cu piscine și saună, la mese la restaurantul NOIR, parcare
            subterană gratuită și activități pentru copii. Totul la doar 150 m
            de apartament.
          </p>
        </Reveal>

      </div>

      <Facilities />

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, i) => (
            <Reveal key={amenity.slug} delay={i * 80}>
              <div className="group bg-night-light border border-border-dark overflow-hidden card-hover h-full flex flex-col">
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={amenity.image}
                    alt={amenity.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-night/80 to-transparent" />
                  <div className="absolute top-4 left-4 text-3xl">
                    {amenity.icon}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-bold text-cream mb-3 group-hover:text-gold transition-colors">
                    {amenity.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                    {amenity.shortDescription}
                  </p>
                  <Link
                    href={`/agrement/${amenity.slug}`}
                    className="text-gold text-sm font-semibold uppercase tracking-wider no-underline transition-colors hover:text-gold-light"
                  >
                    Vezi detalii →
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-16 p-8 bg-night-light border border-border-dark text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-cream mb-4">
              Cel mai bun preț garantat, fără comisioane ascunse
            </h2>
            <p className="text-cream/80 text-sm md:text-base mb-6 max-w-2xl mx-auto leading-relaxed">
              Suntem proprietari privați în complexul Silver Mountain. Beneficiați
              de aceeași locație exclusivistă, dar cu servicii personalizate și
              prețuri competitive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/camere"
                className="px-8 py-4 bg-gold text-night text-sm font-semibold uppercase tracking-wider no-underline transition-all hover:bg-gold-light"
              >
                Rezervă acum
              </Link>
              <a
                href="tel:0722335357"
                className="px-8 py-4 border border-cream/30 text-cream text-sm font-semibold uppercase tracking-wider no-underline transition-all hover:border-gold hover:text-gold"
              >
                Sună: 0722 335 357
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
