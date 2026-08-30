import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/happy-place/Happy_Terasa_4.jpeg"
          alt="Happy Place Poiana Brașov — terasă panoramică"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl py-20">
        <p
          className="text-gold text-sm font-semibold uppercase tracking-[0.3em] mb-4"
          style={{ animation: "fadeUp 0.8s ease forwards" }}
        >
          Silver Mountain · Poiana Brașov
        </p>
        <h1
          className="font-display text-4xl md:text-6xl font-bold text-cream leading-tight mb-4"
          style={{ animation: "fadeUp 0.8s ease 0.2s forwards", opacity: 0 }}
        >
          Happy <span className="text-gradient-gold">Place</span> Brașov
        </h1>
        <p
          className="text-base md:text-lg text-cream/80 max-w-2xl mx-auto mb-6 leading-relaxed"
          style={{ animation: "fadeUp 0.8s ease 0.4s forwards", opacity: 0 }}
        >
          Apartament de lux cu 2 camere, terasă panoramică la etajul 5 și vedere
          superbă asupra întregii văi. Relaxare, liniște și un peisaj care îți
          taie respirația.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animation: "fadeUp 0.8s ease 0.6s forwards", opacity: 0 }}
        >
          <Link
            href="/camere"
            className="px-8 py-4 bg-gold text-night text-sm font-semibold uppercase tracking-wider no-underline transition-all hover:bg-gold-light"
          >
            Rezervă acum
          </Link>
          <Link
            href="/galerie"
            className="px-8 py-4 border border-cream/30 text-cream text-sm font-semibold uppercase tracking-wider no-underline transition-all hover:border-gold hover:text-gold"
          >
            Vezi galeria
          </Link>
        </div>
        <div
          className="mt-8 max-w-2xl mx-auto"
          style={{ animation: "fadeUp 0.8s ease 0.8s forwards", opacity: 0 }}
        >
          <p className="text-gold text-base md:text-lg font-semibold leading-relaxed">
            Cel mai bun preț garantat, fără comisioane ascunse
          </p>
          <p className="text-cream/80 text-sm md:text-base mt-3 leading-relaxed">
            Suntem proprietari privați în complexul Silver Mountain. Beneficiați
            de aceeași locație exclusivistă, dar cu servicii personalizate și
            prețuri competitive.
          </p>
        </div>
      </div>
    </section>
  );
}
