import Link from "next/link";
import Image from "next/image";
import { spaces } from "@/lib/data";
import BookingEngine from "@/components/BookingEngine";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Spații — Happy Place Brașov",
  description: "Descoperă spațiile apartamentului Happy Place din Silver Mountain Poiana Brașov: living, dormitor principal, dormitor secundar, bucătărie, băi și terasă panoramică.",
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
                  <div className="absolute bottom-4 left-4">
                    <p className="text-gold text-xs font-semibold uppercase tracking-wider">
                      De la {space.price} lei/noapte
                    </p>
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-cream mb-2 group-hover:text-gold transition-colors">
                  {space.name}
                </h3>
                <p className="text-muted text-sm mb-4">
                  {space.size} m² · {space.capacity} · {space.beds}
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
