"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";

export default function DespreDreamStudio() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="py-24 bg-night-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative group">
              <div className="absolute -top-4 -right-4 w-full h-full border border-gold/40 z-0 transition-all duration-500 group-hover:top-4 group-hover:right-4" />
              <div className="absolute -bottom-4 -left-4 w-full h-full border border-gold/20 z-0 transition-all duration-500 group-hover:bottom-4 group-hover:left-4" />
              <div
                className="relative aspect-4/3 overflow-hidden z-10 bg-night transition-all duration-1000"
                style={{
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? "scale(1)" : "scale(1.1)",
                }}
              >
                <Image
                  src="/images/dream-studio/Dream_Dormitor_2.jpeg"
                  alt="Dream Studio Poiana Brașov — balcon cu vedere spre piscină"
                  fill
                  onLoad={() => setLoaded(true)}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-night/40" />
                <div className="absolute inset-0 bg-linear-to-t from-night/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
              {!loaded && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-night">
                  <div className="w-8 h-8 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6">
                Dream <span className="text-gradient-gold">Studio</span>
              </h2>
              <div className="w-24 h-px gold-line mb-6" />
              <p className="text-cream/80 leading-relaxed mb-4">
                Așa cum îi spune și numele, Dream Studio este locul ideal unde
                confortul modern întâlnește relaxarea absolută. Situat în cadrul
                selectului complex Silver Mountain, acest studio open-space
                impresionează prin spațiul său generos și designul interior cald,
                fiind refugiul perfect pentru cupluri, familii mici sau prieteni
                care caută o evadare la munte.
              </p>
              <p className="text-cream/70 leading-relaxed mb-8">
                Piesa de rezistență a proprietății este balconul privat cu vedere
                directă spre piscină și peisajul montan din jur. Deși este un
                studio, proprietatea sparge tiparele și îți oferă un nivel de
                confort rar întâlnit: 2 băi.
              </p>
              <Link
                href="/despre-noi#dream-studio"
                className="inline-block px-8 py-4 border border-gold text-gold text-sm font-semibold uppercase tracking-wider no-underline transition-all hover:bg-gold hover:text-night"
              >
                Vezi detalii
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
