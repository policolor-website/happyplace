import Image from "next/image";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "Despre Noi — Pensiunea Angela Vatra Dornei",
  description:
    "Pensiunea Angela Vatra Dornei — cazare confortabilă în inima Bucovinei, cu camere cu baie proprie, frigider, WiFi și balcon.",
};

export default function DespreNoiPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
        <div className="relative text-center mb-12 py-16">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/pensiunea-angela/328.jpg"
              alt=""
              fill
              className="object-cover opacity-10"
            />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <h1 className="font-display text-5xl font-bold text-cream mb-4">
              Despre Noi
            </h1>
            <p className="text-muted text-lg">Pensiunea Angela · Vatra Dornei</p>
            <div className="w-24 h-px gold-line mx-auto mt-6" />
          </div>
        </div>

      <div className="max-w-5xl mx-auto px-6">

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
            <div className="relative aspect-4/3 overflow-hidden">
              <Image
                src="/images/camere/Angela_cazare.jpg"
                alt="Pensiunea Angela Vatra Dornei"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="space-y-6 text-cream/80 leading-relaxed">
              <p className="text-lg">
                Pensiunea Angela este situată în Vatra Dornei, stațiune montană
                renumită din Bucovina, apreciată pentru aerul curat, izvoarele
                termale și peisajele spectaculoase. Oferim cazare de calitate
                într-un cadru natural de excepție, cu vedere la munte și acces
                rapid la principalele atracții din zonă.
              </p>
              <p>
                Locația noastră îți oferă acces rapid la principalele atracții
                turistice din zonă: Munții Călimani, Mănăstirile pictate din
                Bucovina (Voroneț, Humor, Sucevița), izvoarele termale și
                parcul din Vatra Dornei. Pensiunea este poziționată ideal
                pentru explorarea acestor obiective.
              </p>
              <p>
                Îmbinăm confortul modern cu liniștea naturii. Dispunem de camere
                confortabile dotate cu WiFi, TV, baie proprie, frigider și
                balcon cu vedere la munte. În curte ai acces la grădină și
                parcare gratuită, perfecte pentru relaxare.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-night-light border border-border-dark p-6 text-center card-hover">
              <div className="text-3xl mb-3">🏔️</div>
              <h3 className="text-cream font-semibold mb-2">Vedere la munte</h3>
              <p className="text-muted text-sm">
                Camere cu balcon și priveliște spre munții Bucovinei
              </p>
            </div>
            <div className="bg-night-light border border-border-dark p-6 text-center card-hover">
              <div className="text-3xl mb-3">🌲</div>
              <h3 className="text-cream font-semibold mb-2">Casuța din copac</h3>
              <p className="text-muted text-sm">
                Un spațiu unic de cazare, ideal pentru cupluri și iubitori de natură
              </p>
            </div>
            <div className="bg-night-light border border-border-dark p-6 text-center card-hover">
              <div className="text-3xl mb-3">🚗</div>
              <h3 className="text-cream font-semibold mb-2">Parcare gratuită</h3>
              <p className="text-muted text-sm">
                Parcare privată la fața locului, inclusă pentru toți oaspeții
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-night-light border border-border-dark p-6 text-center">
              <p className="font-display text-3xl font-bold text-gold">5</p>
              <p className="text-muted text-xs uppercase tracking-wider mt-1">Tipuri camere</p>
            </div>
            <div className="bg-night-light border border-border-dark p-6 text-center">
              <p className="font-display text-3xl font-bold text-gold">WiFi</p>
              <p className="text-muted text-xs uppercase tracking-wider mt-1">Gratuit</p>
            </div>
            <div className="bg-night-light border border-border-dark p-6 text-center">
              <p className="font-display text-3xl font-bold text-gold">24/7</p>
              <p className="text-muted text-xs uppercase tracking-wider mt-1">Recepție</p>
            </div>
            <div className="bg-night-light border border-border-dark p-6 text-center">
              <p className="font-display text-3xl font-bold text-gold">★ 5</p>
              <p className="text-muted text-xs uppercase tracking-wider mt-1">Recenzii pozitive</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12">
            <h2 className="font-display text-3xl font-bold text-cream mb-6 text-center">
              De ce să ne alegi
            </h2>
            <div className="w-24 h-px gold-line mx-auto mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-night-light border border-border-dark p-6 flex gap-4">
                <div className="text-2xl shrink-0">📍</div>
                <div>
                  <h3 className="text-cream font-semibold mb-1">Locație excelentă</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Situați în Vatra Dornei, la distanță mică de atracțiile
                    turistice principale: Munții Călimani, Mănăstirile din Bucovina,
                    izvoare termale și parcul dendrologic.
                  </p>
                </div>
              </div>
              <div className="bg-night-light border border-border-dark p-6 flex gap-4">
                <div className="text-2xl shrink-0">🛏️</div>
                <div>
                  <h3 className="text-cream font-semibold mb-1">Camere confortabile</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Fiecare cameră are baie proprie, frigider, TV, WiFi și balcon.
                    Proaspăt renovate, curate și spațioase, pentru un sejur plăcut.
                  </p>
                </div>
              </div>
              <div className="bg-night-light border border-border-dark p-6 flex gap-4">
                <div className="text-2xl shrink-0">🏡</div>
                <div>
                  <h3 className="text-cream font-semibold mb-1">Casuța din copac</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Cel mai nou spațiu de cazare, un loc de poveste cu aranjament
                    tradițional, perfect pentru o experiență unică în Bucovina.
                  </p>
                </div>
              </div>
              <div className="bg-night-light border border-border-dark p-6 flex gap-4">
                <div className="text-2xl shrink-0">💆</div>
                <div>
                  <h3 className="text-cream font-semibold mb-1">Relaxare & Natură</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Aer curat, liniște, grădină și peisaje montane spectaculoase.
                    Vatra Dornei este renumită pentru izvoarele sale termale și
                    tratamente naturale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-12 p-8 bg-night-light border border-border-dark">
            <h2 className="font-display text-2xl font-bold text-cream mb-4">
              Facilități incluse
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "WiFi gratuit",
                "TV",
                "Baie proprie",
                "Parcare gratuită",
                "Grădină",
                "Balcon cu vedere la munte",
                "Frigider",
                "Acces internet",
                "Casuță din copac",
              ].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-cream/80">
                  <span className="text-gold">✦</span>
                  {f}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-16">
            <h2 className="font-display text-3xl font-bold text-cream mb-6 text-center">
              Întrebări frecvente
            </h2>
            <div className="w-24 h-px gold-line mx-auto mb-8" />
            <FAQ />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
