import Image from "next/image";
import Link from "next/link";
import { dreamSpaces, facilities, dreamGalleryImages, dreamReviews, type GalleryCategory } from "@/lib/data";
import BookingEngine from "@/components/BookingEngine";
import GalleryWithTabs from "@/components/GalleryWithTabs";
import Reviews from "@/components/Reviews";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Dream Studio Brașov — Studio open-space Silver Mountain",
  description:
    "Dream Studio — studio open-space de lux cu 2 băi și balcon cu vedere la piscină în complexul Silver Mountain Poiana Brașov. 54 m² utili + 9 m² balcon.",
};

const iconMap: Record<string, string> = {
  wifi: "📶", terrace: "🌅", kitchen: "🍳", fireplace: "🔥", parking: "🚗",
  playground: "🧸", football: "⚽", pingpong: "🏓", badminton: "🏸", ev: "🔌",
  pool: "🏊", spa: "💆", fitness: "🏋️", restaurant: "🍽️", baby: "👶",
  ski: "⛷️", elevator: "🛗",
};

const dreamTabs: { key: GalleryCategory; label: string }[] = [
  { key: "toate", label: "Toate" },
  { key: "living", label: "Living & Dormitor" },
  { key: "dormitor", label: "Dormitor" },
  { key: "bucatarie", label: "Bucătărie" },
  { key: "bai", label: "Băi" },
  { key: "balcon", label: "Balcon" },
  { key: "hol", label: "Hol" },
  { key: "exterior", label: "Exterior" },
];

export default function DreamStudioPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden mb-16">
        <Image
          src="/images/dream-studio/Dream_Bucatarie_1.jpeg"
          alt="Dream Studio Poiana Brașov — bucătărie"
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
              Dream <span className="text-gradient-gold">Studio</span>
            </h1>
            <p className="text-cream/80 text-lg max-w-2xl mx-auto">
              Studio open-space cu 2 băi și balcon cu vedere la piscină
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
                src="/images/dream-studio/Dream_Dormitor_2.jpeg"
                alt="Dream Studio — living & dormitor"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6 text-cream/80 leading-relaxed">
              <p className="text-gold text-sm font-semibold uppercase tracking-[0.3em]">
                Despre apartament
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-cream">
                Dream Studio
              </h2>
              <div className="w-24 h-px gold-line" />
              <p>
                Așa cum îi spune și numele, Dream Studio este locul ideal unde
                confortul modern întâlnește relaxarea absolută. Situat în cadrul
                selectului complex Silver Mountain, acest studio open-space
                impresionează prin spațiul său generos și designul interior cald,
                fiind refugiul perfect pentru cupluri, familii mici sau prieteni
                care caută o evadare la munte.
              </p>
              <p>
                Piesa de rezistență a proprietății este balconul privat cu vedere
                directă spre piscină și peisajul montan din jur. Este locul perfect
                unde să îți începi dimineața respirând aerul curat de munte sau unde
                să te relaxezi seara, într-o atmosferă liniștită și exclusivistă.
              </p>
              <p>
                Deși este un studio, proprietatea sparge tiparele și îți oferă un
                nivel de confort rar întâlnit: 2 băi. Astfel, te bucuri de
                toată intimitatea și spațiul de care ai nevoie, fără niciun compromis.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Slogan */}
        <Reveal>
          <div className="mb-20 py-10 px-6 text-center bg-gradient-to-br from-gold/10 via-transparent to-gold/5 border-y border-gold/20">
            <p className="font-display text-2xl md:text-3xl text-cream leading-relaxed max-w-3xl mx-auto">
              Alegerea ideală pentru o evadare romantică sau un concediu de
              reîncărcare. Alege să visezi cu ochii deschiși în
              <span className="text-gradient-gold"> inima naturii</span>!
            </p>
          </div>
        </Reveal>

        {/* Caracteristici rapide */}
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            <div className="text-center p-6 bg-night-light border border-border-dark">
              <p className="text-gold text-3xl font-bold">54</p>
              <p className="text-muted text-xs uppercase tracking-wider mt-2">mp utili</p>
            </div>
            <div className="text-center p-6 bg-night-light border border-border-dark">
              <p className="text-gold text-3xl font-bold">9</p>
              <p className="text-muted text-xs uppercase tracking-wider mt-2">mp balcon</p>
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
              Distribuția suprafețelor · 54 mp utili + 9 mp balcon
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-night border border-border-dark">
                <p className="text-gold text-2xl font-bold">32</p>
                <p className="text-muted text-xs uppercase tracking-wider mt-1">mp · Living + Dormitor</p>
              </div>
              <div className="text-center p-4 bg-night border border-border-dark">
                <p className="text-gold text-2xl font-bold">9</p>
                <p className="text-muted text-xs uppercase tracking-wider mt-1">mp · Balcon</p>
              </div>
              <div className="text-center p-4 bg-night border border-border-dark">
                <p className="text-gold text-2xl font-bold">5</p>
                <p className="text-muted text-xs uppercase tracking-wider mt-1">mp · Bucătărie</p>
              </div>
              <div className="text-center p-4 bg-night border border-border-dark">
                <p className="text-gold text-2xl font-bold">4</p>
                <p className="text-muted text-xs uppercase tracking-wider mt-1">mp · Baie 1</p>
              </div>
              <div className="text-center p-4 bg-night border border-border-dark">
                <p className="text-gold text-2xl font-bold">4</p>
                <p className="text-muted text-xs uppercase tracking-wider mt-1">mp · Hol</p>
              </div>
              <div className="text-center p-4 bg-night border border-border-dark">
                <p className="text-gold text-2xl font-bold">2.5</p>
                <p className="text-muted text-xs uppercase tracking-wider mt-1">mp · Baie 2</p>
              </div>
              <div className="text-center p-4 bg-gold/10 border border-gold/30">
                <p className="text-gold text-2xl font-bold">54</p>
                <p className="text-gold/70 text-xs uppercase tracking-wider mt-1">mp · Total</p>
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
            <GalleryWithTabs images={dreamGalleryImages} tabs={dreamTabs} />
          </div>
        </Reveal>

        {/* Spații */}
        <Reveal>
          <div className="mb-20">
            <h2 className="font-display text-3xl font-bold text-cream text-center mb-2">
              Spațiile Dream Studio
            </h2>
            <div className="w-24 h-px gold-line mx-auto mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dreamSpaces.map((space, i) => (
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

        {/* Testimoniale */}
        <Reviews reviews={dreamReviews} />

        {/* Link către Happy Place */}
        <Reveal>
          <div className="text-center p-12 bg-gradient-to-br from-gold/10 via-transparent to-gold/5 border border-gold/20">
            <p className="text-gold text-sm font-semibold uppercase tracking-[0.3em] mb-4">
              Descoperă și
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-6">
              Happy <span className="text-gradient-gold">Place</span>
            </h2>
            <p className="text-cream/70 max-w-2xl mx-auto mb-8">
              Apartament cu 2 camere, 2 băi și terasă panoramică la etajul 5 —
              ideal pentru familii sau grupuri de prieteni.
            </p>
            <Link
              href="/apartamente/happy-place"
              className="inline-block px-8 py-4 border border-gold text-gold text-sm font-semibold uppercase tracking-wider no-underline transition-all hover:bg-gold hover:text-night"
            >
              Vezi Happy Place →
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
