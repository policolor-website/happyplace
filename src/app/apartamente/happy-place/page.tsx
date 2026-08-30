import Image from "next/image";
import Link from "next/link";
import { spaces, facilities, galleryImages, type GalleryCategory } from "@/lib/data";
import BookingEngine from "@/components/BookingEngine";
import GalleryWithTabs from "@/components/GalleryWithTabs";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Happy Place Brașov — Apartament 2 camere Silver Mountain",
  description:
    "Happy Place — apartament de lux cu 2 camere, 2 băi și terasă panoramică la etajul 5 în complexul Silver Mountain Poiana Brașov. 64 m² utili + 10 m² terasă.",
};

const iconMap: Record<string, string> = {
  wifi: "📶", terrace: "🌅", kitchen: "🍳", fireplace: "🔥", parking: "🚗",
  playground: "🧸", football: "⚽", pingpong: "🏓", badminton: "🏸", ev: "🔌",
  pool: "🏊", spa: "💆", fitness: "🏋️", restaurant: "🍽️", baby: "👶",
  ski: "⛷️", elevator: "🛗",
};

const happyTabs: { key: GalleryCategory; label: string }[] = [
  { key: "toate", label: "Toate" },
  { key: "living", label: "Living" },
  { key: "dormitor", label: "Dormitor" },
  { key: "bucatarie", label: "Bucătărie" },
  { key: "bai", label: "Băi" },
  { key: "terasa", label: "Terasă" },
  { key: "spa", label: "SPA" },
  { key: "restaurant", label: "Restaurant" },
  { key: "parcare", label: "Parcare" },
  { key: "exterior", label: "Exterior" },
  { key: "hol", label: "Hol" },
];

export default function HappyPlacePage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden mb-16">
        <Image
          src="/images/happy-place/Happy_Terasa_4.jpeg"
          alt="Happy Place Poiana Brașov — terasă panoramică"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-gold text-sm font-semibold uppercase tracking-[0.3em] mb-4">
              Silver Mountain · Poiana Brașov
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-cream mb-4">
              Happy <span className="text-gradient-gold">Place</span>
            </h1>
            <p className="text-cream/80 text-lg max-w-2xl mx-auto">
              Apartament de lux cu 2 camere, 2 băi și terasă panoramică la etajul 5
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Booking */}
        <div className="mb-16">
          <BookingEngine />
        </div>

        {/* Descriere */}
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative aspect-4/3 overflow-hidden">
              <Image
                src="/images/happy-place/Happy_Living_main.jpeg"
                alt="Happy Place — living"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6 text-cream/80 leading-relaxed">
              <p className="text-gold text-sm font-semibold uppercase tracking-[0.3em]">
                Despre apartament
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-cream">
                Apartament de lux în Poiana Brașov
              </h2>
              <div className="w-24 h-px gold-line" />
              <p>
                Happy Place este un apartament cu 2 camere, 2 băi și suprafață
                generoasă de 64 m², situat la etajul 5 în complexul Silver Mountain
                Resort &amp; SPA din Poiana Brașov. Terasa panoramică oferă o
                perspectivă superbă asupra întregii văi.
              </p>
              <p>
                Ce poate fi mai plăcut decât să-ți savurezi cafeaua de dimineață
                de pe un balcon suspendat parcă deasupra pădurii, să ai seara cerul
                cu stele deasupra capului și să respiri adânc aerul curat de munte.
                Relaxare, liniște și un peisaj care îți taie respirația.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Caracteristici rapide */}
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            <div className="text-center p-6 bg-night-light border border-border-dark">
              <p className="text-gold text-3xl font-bold">64</p>
              <p className="text-muted text-xs uppercase tracking-wider mt-2">mp utili</p>
            </div>
            <div className="text-center p-6 bg-night-light border border-border-dark">
              <p className="text-gold text-3xl font-bold">10</p>
              <p className="text-muted text-xs uppercase tracking-wider mt-2">mp terasă</p>
            </div>
            <div className="text-center p-6 bg-night-light border border-border-dark">
              <p className="text-gold text-3xl font-bold">2</p>
              <p className="text-muted text-xs uppercase tracking-wider mt-2">băi</p>
            </div>
            <div className="text-center p-6 bg-night-light border border-border-dark">
              <p className="text-gold text-3xl font-bold">4</p>
              <p className="text-muted text-xs uppercase tracking-wider mt-2">oaspeți</p>
            </div>
          </div>
        </Reveal>

        {/* Distribuția suprafețelor */}
        <Reveal>
          <div className="mb-20 p-8 bg-night-light border border-border-dark">
            <h3 className="font-display text-xl font-bold text-cream mb-6 text-center">
              Distribuția suprafețelor · 64 mp utili + 10 mp terasă
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-night border border-border-dark">
                <p className="text-gold text-2xl font-bold">25</p>
                <p className="text-muted text-xs uppercase tracking-wider mt-1">mp · Living</p>
              </div>
              <div className="text-center p-4 bg-night border border-border-dark">
                <p className="text-gold text-2xl font-bold">19</p>
                <p className="text-muted text-xs uppercase tracking-wider mt-1">mp · Dormitor</p>
              </div>
              <div className="text-center p-4 bg-night border border-border-dark">
                <p className="text-gold text-2xl font-bold">10</p>
                <p className="text-muted text-xs uppercase tracking-wider mt-1">mp · Terasă</p>
              </div>
              <div className="text-center p-4 bg-night border border-border-dark">
                <p className="text-gold text-2xl font-bold">8</p>
                <p className="text-muted text-xs uppercase tracking-wider mt-1">mp · Baie 1</p>
              </div>
              <div className="text-center p-4 bg-night border border-border-dark">
                <p className="text-gold text-2xl font-bold">5</p>
                <p className="text-muted text-xs uppercase tracking-wider mt-1">mp · Bucătărie</p>
              </div>
              <div className="text-center p-4 bg-night border border-border-dark">
                <p className="text-gold text-2xl font-bold">4</p>
                <p className="text-muted text-xs uppercase tracking-wider mt-1">mp · Hol</p>
              </div>
              <div className="text-center p-4 bg-night border border-border-dark">
                <p className="text-gold text-2xl font-bold">3</p>
                <p className="text-muted text-xs uppercase tracking-wider mt-1">mp · Baie 2</p>
              </div>
              <div className="text-center p-4 bg-gold/10 border border-gold/30">
                <p className="text-gold text-2xl font-bold">64</p>
                <p className="text-gold/70 text-xs uppercase tracking-wider mt-1">mp · Total util</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Galerie */}
        <Reveal>
          <div className="mb-20">
            <h2 className="font-display text-3xl font-bold text-cream text-center mb-2">
              Galerie foto
            </h2>
            <div className="w-24 h-px gold-line mx-auto mb-8" />
            <GalleryWithTabs images={galleryImages} tabs={happyTabs} />
          </div>
        </Reveal>

        {/* Spații */}
        <Reveal>
          <div className="mb-20">
            <h2 className="font-display text-3xl font-bold text-cream text-center mb-2">
              Spațiile apartamentului
            </h2>
            <div className="w-24 h-px gold-line mx-auto mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {spaces.map((space, i) => (
                <Reveal key={space.slug} delay={i * 80}>
                  <Link href={`/camere/${space.slug}`} className="group block no-underline">
                    <div className="relative overflow-hidden aspect-4/3 mb-5">
                      <Image
                        src={space.image}
                        alt={space.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-night/80 to-transparent" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-cream mb-2 group-hover:text-gold transition-colors">
                      {space.name}
                    </h3>
                    <p className="text-muted text-sm mb-4">
                      {space.size} m² · {space.capacity}{space.beds !== "-" && ` · ${space.beds}`}
                    </p>
                    <span className="text-gold text-sm font-semibold uppercase tracking-wider">
                      Vezi detalii →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Facilități */}
        <Reveal>
          <div className="mb-20">
            <h2 className="font-display text-3xl font-bold text-cream text-center mb-2">
              Facilități
            </h2>
            <div className="w-24 h-px gold-line mx-auto mb-8" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {facilities.map((f, i) => (
                <Reveal key={f.label} delay={i * 60}>
                  <div className="card-hover bg-night-light border border-border-dark p-6 text-center h-full">
                    <div className="text-3xl mb-3">{iconMap[f.icon] || "✨"}</div>
                    <h3 className="text-cream font-semibold text-sm mb-1">{f.label}</h3>
                    <p className="text-muted text-xs">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Link către Dream Studio */}
        <Reveal>
          <div className="text-center p-12 bg-gradient-to-br from-gold/10 via-transparent to-gold/5 border border-gold/20">
            <p className="text-gold text-sm font-semibold uppercase tracking-[0.3em] mb-4">
              Descoperă și
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-6">
              Dream <span className="text-gradient-gold">Studio</span>
            </h2>
            <p className="text-cream/70 max-w-2xl mx-auto mb-8">
              Studio open-space cu balcon cu vedere spre piscină, 2 băi
              și design cald — refugiul perfect pentru cupluri sau familii mici.
            </p>
            <Link
              href="/apartamente/dream-studio"
              className="inline-block px-8 py-4 border border-gold text-gold text-sm font-semibold uppercase tracking-wider no-underline transition-all hover:bg-gold hover:text-night"
            >
              Vezi Dream Studio →
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
