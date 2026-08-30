import Link from "next/link";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-night-light">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <Reveal>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-cream mb-6">
            Îți oferim o vacanță <span className="text-gradient-gold">de neuitat</span>
          </h2>
          <p className="text-lg text-cream/80 mb-10 leading-relaxed">
            Aici, muntele nu este doar o destinație, ci un stil de viață.
            Rezervă acum și bucură-te de experiența unică la Happy Place Poiana Brașov.
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
