import Image from "next/image";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "Despre Noi — Happy Place Brașov",
  description:
    "Happy Place Brașov — apartament de lux în complexul Silver Mountain Poiana Brașov, cu 2 camere, 2 băi, terasă panoramică și acces la SPA și piscine.",
};

export default function DespreNoiPage() {
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
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <h1 className="font-display text-5xl font-bold text-cream mb-4">
              Despre Noi
            </h1>
            <p className="text-muted text-lg">Happy Place · Silver Mountain · Poiana Brașov</p>
            <div className="w-24 h-px gold-line mx-auto mt-6" />
          </div>
        </div>

      <div className="max-w-5xl mx-auto px-6">

        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
            <div className="relative aspect-4/3 overflow-hidden">
              <Image
                src="/images/happy-place/Happy_Place_Brasov_27.jpeg"
                alt="Happy Place Poiana Brașov — terasă panoramică"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="space-y-6 text-cream/80 leading-relaxed">
              <p className="text-lg">
                Happy Place este un apartament cu 2 camere, 2 băi și suprafață
                generoasă de 64 m², situat la etajul 5 în complexul Silver
                Mountain Resort &amp; SPA din Poiana Brașov. Terasa panoramică
                oferă o perspectivă superbă asupra întregii văi.
              </p>
              <p>
                Complexul Silver Mountain este format din patru clădiri de
                apartamente și o clădire multifuncțională cu SPA, piscină
                interioară, piscină exterioară infinity încălzită, jacuzzi,
                saună, sală de fitness și restaurantul NOIR. Este poziționat
                în Poiana Mică, înconjurat de pădure, cu acces direct la pârtiile de schi iarna prin ski-bus care pleacă din fața complexului.
              </p>
              <p>
                Ce poate fi mai plăcut decât să-ți savurezi cafeaua de
                dimineață de pe un balcon suspendat parcă deasupra pădurii,
                să ai seara cerul cu stele deasupra capului și să respiri
                adânc aerul curat de munte. Relaxare, liniște și un peisaj
                care îți taie respirația.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-night-light border border-border-dark p-6 text-center card-hover">
              <div className="text-3xl mb-3">�</div>
              <h3 className="text-cream font-semibold mb-2">Terasă panoramică</h3>
              <p className="text-muted text-sm">
                Terasă la etajul 5 cu vedere superbă asupra întregii văi
              </p>
            </div>
            <div className="bg-night-light border border-border-dark p-6 text-center card-hover">
              <div className="text-3xl mb-3">�</div>
              <h3 className="text-cream font-semibold mb-2">2 piscine</h3>
              <p className="text-muted text-sm">
                Piscină interioară și exterioară infinity încălzită în complex
              </p>
            </div>
            <div className="bg-night-light border border-border-dark p-6 text-center card-hover">
              <div className="text-3xl mb-3">🚗</div>
              <h3 className="text-cream font-semibold mb-2">Parcare subterană 24/7</h3>
              <p className="text-muted text-sm">
                Pază non-stop, inclusă în preț. Uiți iarna de deszăpezire, vara de căldura soarelui
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-night-light border border-border-dark p-6 text-center">
              <p className="font-display text-3xl font-bold text-gold">64</p>
              <p className="text-muted text-xs uppercase tracking-wider mt-1">m² suprafață</p>
            </div>
            <div className="bg-night-light border border-border-dark p-6 text-center">
              <p className="font-display text-3xl font-bold text-gold">2+2</p>
              <p className="text-muted text-xs uppercase tracking-wider mt-1">Camere + băi</p>
            </div>
            <div className="bg-night-light border border-border-dark p-6 text-center">
              <p className="font-display text-3xl font-bold text-gold">5</p>
              <p className="text-muted text-xs uppercase tracking-wider mt-1">Etaj</p>
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
                    În complexul Silver Mountain Poiana Brașov,
                    înconjurat de pădure, cu acces la toate
                    facilitățile complexului.
                  </p>
                </div>
              </div>
              <div className="bg-night-light border border-border-dark p-6 flex gap-4">
                <div className="text-2xl shrink-0">🛏️</div>
                <div>
                  <h3 className="text-cream font-semibold mb-1">Confort premium</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Pat King Size, canapea extensibilă, șemineu, 2 TV smart cu
                    Netflix, bucătărie complet utilată cu espressor Nespresso.
                  </p>
                </div>
              </div>
              <div className="bg-night-light border border-border-dark p-6 flex gap-4">
                <div className="text-2xl shrink-0">�</div>
                <div>
                  <h3 className="text-cream font-semibold mb-1">Terasă panoramică</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Terasă la etajul 5 cu vedere superbă asupra întregii văi,
                    orientată pentru cea mai bună lumină la răsărit și apus.
                  </p>
                </div>
              </div>
              <div className="bg-night-light border border-border-dark p-6 flex gap-4">
                <div className="text-2xl shrink-0">💆</div>
                <div>
                  <h3 className="text-cream font-semibold mb-1">SPA &amp; Wellness</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Acces la centrul SPA din complex: piscină interioară,
                    piscină exterioară infinity încălzită, jacuzzi, saună și
                    sală de fitness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-12 p-8 bg-night-light border border-border-dark">
            <h2 className="font-display text-2xl font-bold text-cream mb-4">
              Facilități incluse în cazare
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "WiFi gratuit",
                "TV smart cu Netflix",
                "2 băi private (cadă + dus)",
                "Bucătărie complet utilată",
                "Espressor Nespresso + capsule",
                "Șemineu",
                "Pat King Size",
                "Canapea extensibilă",
                "Terasă panoramică 10 mp",
                "Parcare subterană 24/7 inclusă",
                "Capsule cafea gratuite",
                "Ceai, băuturi, papuci, halate",
              ].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-cream/80">
                  <span className="text-gold">✦</span>
                  {f}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-6 p-6 bg-night-light border border-border-dark">
            <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
              Spații cu acces gratuit în complex
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                "Loc de joacă exterior pentru copii",
                "Teren de mini fotbal",
                "Masă de ping-pong",
                "Teren de badminton",
                "Parcare exterior gratuită",
                "Stații încărcare auto electrice",
              ].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-cream/80">
                  <span className="text-gold">✦</span>
                  {f}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="mt-6 p-6 bg-night border border-gold/30">
            <h3 className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
              Facilități complex Silver Mountain — acces cu cost suplimentar
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-3">
              Apartamentul Happy Place este locuință privată în complexul Silver
              Mountain. Următoarele facilități ale complexului NU sunt incluse în
              prețul cazării și se achiziționează separat de la recepția complexului:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                "Centru SPA & jacuzzi",
                "Piscină interioară",
                "Piscină exterioară infinity",
                "Saună umedă și uscată",
                "Sală de fitness",
                "Restaurant NOIR",
              ].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-muted">
                  <span className="text-gold/60">◦</span>
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
