import Link from "next/link";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="relative py-20 overflow-hidden bg-night">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <Reveal>
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Rezervă direct
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-cream mb-6 leading-tight">
            Cel mai bun preț garantat,{" "}
            <span className="text-gradient-gold">fără comisioane ascunse</span>
          </h2>
          <p className="text-base md:text-lg text-cream/80 mb-10 leading-relaxed max-w-2xl mx-auto">
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
        </Reveal>
      </div>
    </section>
  );
}
