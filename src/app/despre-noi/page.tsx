import Image from "next/image";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import ImageSlider from "@/components/ImageSlider";
import DreamStudioSlider from "@/components/DreamStudioSlider";

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
              src="/images/happy-place/Happy_Living_main.jpeg"
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
                src="/images/happy-place/Happy_Dormitor_1.jpeg"
                alt="Happy Place Poiana Brașov — dormitor principal"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="space-y-6 text-cream/80 leading-relaxed">
              <p className="text-lg">
                Bine ai venit la Happy Place, unde fiecare zi începe cu zâmbetul
                pe buze! Situat în celebrul complex Silver Mountain din Poiana
                Brașov, acest apartament cu 2 camere a fost gândit special pentru
                a-ți oferi vacanța perfectă la munte, fiind un refugiu premium
                în inima naturii! Apartamentul combină designul modern de
                interior cu peisajele montane spectaculoase, pe care le poți
                admira chiar din confortul patului.
              </p>
              <p>
                Fie că vii pentru un weekend plin de adrenalină pe pârtiile de
                schi sau pentru o escapadă relaxantă în aer curat, Happy Place
                este locul unde grijile dispar. Apartamentul este extrem de
                spațios și complet echipat pentru a găzdui confortabil până la
                4 persoane.
              </p>
              <p>
                Elementul vedetă? O terasă panoramică generoasă, unde îți poți
                savura cafeaua dimineața în timp ce admiri crestele munților și
                pădurea de brazi, sau unde te poți relaxa la apus după o zi
                activă. Pentru ca intimitatea și confortul tău să fie depline,
                proprietatea dispune de 2 băi, eliminând orice timp de
                așteptare atunci când te pregătești de ieșire.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="my-12 py-10 px-6 text-center bg-gradient-to-br from-gold/10 via-transparent to-gold/5 border-y border-gold/20">
            <p className="font-display text-2xl md:text-3xl text-cream leading-relaxed max-w-3xl mx-auto">
              <span className="text-gold">Atmosferă primitoare</span>, design
              modern, cald și aerisit, gândit special pentru a te face să te
              simți instantaneu <span className="text-gradient-gold">acasă</span>.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="my-12">
            <h2 className="font-display text-3xl font-bold text-cream text-center mb-2">
              Descoperă Happy Place
            </h2>
            <div className="w-24 h-px gold-line mx-auto mb-8" />
            <ImageSlider />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="my-12 p-8 bg-night-light border border-border-dark">
            <h3 className="font-display text-xl font-bold text-cream mb-6 text-center">
              Distribuția suprafețelor
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
              <h3 className="text-cream font-semibold mb-2">Parcare subteran 24/7</h3>
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
                "Parcare subteran 24/7 inclus",
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

        {/* ============ DREAM STUDIO ============ */}
        <div id="dream-studio" className="scroll-mt-32">
          <Reveal delay={200}>
            <div className="text-center mt-20 mb-12">
              <p className="text-gold text-sm font-semibold uppercase tracking-[0.3em] mb-4">
                Al doilea apartament
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-4">
                Dream <span className="text-gradient-gold">Studio</span>
              </h2>
              <div className="w-24 h-px gold-line mx-auto mt-6" />
            </div>
          </Reveal>

          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src="/images/dream-studio/Dream_Dormitor_2.jpeg"
                  alt="Dream Studio Poiana Brașov — balcon cu vedere spre piscină"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <div className="space-y-6 text-cream/80 leading-relaxed">
                <p className="text-lg">
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

          <Reveal delay={200}>
            <div className="my-12 py-10 px-6 text-center bg-gradient-to-br from-gold/10 via-transparent to-gold/5 border-y border-gold/20">
              <p className="font-display text-2xl md:text-3xl text-cream leading-relaxed max-w-3xl mx-auto">
                Alegerea ideală pentru o evadare romantică sau un concediu de
                reîncărcare. Alege să visezi cu ochii deschiși în
                <span className="text-gradient-gold"> inima naturii</span>!
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="my-12">
              <h2 className="font-display text-3xl font-bold text-cream text-center mb-2">
                Descoperă Dream Studio
              </h2>
              <div className="w-24 h-px gold-line mx-auto mb-8" />
              <DreamStudioSlider />
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="my-12 p-8 bg-night-light border border-border-dark">
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
        </div>

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
