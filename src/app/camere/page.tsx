import Link from "next/link";
import Image from "next/image";
import { spaces } from "@/lib/data";
import BookingEngine from "@/components/BookingEngine";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Spații — Happy Place Brașov",
  description: "Descoperă spațiile apartamentului Happy Place din Silver Mountain Poiana Brașov: living, dormitor principal, bucătărie, băi și terasă panoramică.",
};

export default function SpacesPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
        <div className="relative text-center mb-12 py-16">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/happy-place/Happy_Place_Brasov_1.jpeg"
              alt=""
              fill
              className="object-cover opacity-10"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <h1 className="font-display text-5xl font-bold text-cream mb-4">
              Spațiile apartamentului
            </h1>
            <p className="text-muted text-lg">Happy Place · Silver Mountain · Poiana Brașov</p>
            <div className="w-24 h-px gold-line mx-auto mt-6" />
          </div>
        </div>

      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-16">
          <BookingEngine />
        </div>

        <Reveal>
          <div className="mb-16 p-8 bg-night-light border border-border-dark">
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
    </div>
  );
}
