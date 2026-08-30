export const contact = {
  phone: "0722 335 357",
  phoneIntl: "40722335357",
  email: "office@resort-silvermountain.ro",
  address: "Strada Doinașului, Nr. 10, G1, Ap. 51",
  city: "Poiana Brașov, România",
  complex: "Silver Mountain Resort & SPA",
  mapsQuery: "Silver Mountain Resort Poiana Brasov",
};

export interface Space {
  slug: string;
  name: string;
  price: number;
  size: number;
  capacity: string;
  beds: string;
  baths: number;
  image: string;
  gallery: string[];
  description: string;
  facilities: string[];
}

export const spaces: Space[] = [
  {
    slug: "living",
    name: "Living & Zonă de relaxare",
    price: 650,
    size: 64,
    capacity: "4 Persoane",
    beds: "Canapea extensibilă",
    baths: 2,
    image: "/images/happy-place/Happy_Place_Brasov_1.jpeg",
    gallery: [
      "/images/happy-place/Happy_Place_Brasov_1.jpeg",
      "/images/happy-place/Happy_Place_Brasov_2.jpeg",
      "/images/happy-place/Happy_Place_Brasov_3.jpeg",
      "/images/happy-place/Happy_Place_Brasov_4.jpeg",
      "/images/happy-place/Happy_Place_Brasov_5.jpeg",
      "/images/happy-place/Happy_Place_Brasov_6.jpeg",
    ],
    description:
      "Apartamentul Happy Place oferă un living spațios cu zonă de relaxare, canapea extensibilă și șemineu. Cu o suprafață totală de 64 m², apartamentul este amplasat la etajul 5 și oferă o terasă panoramică de 10 mp cu perspectivă asupra întregii văi.\n\nZona de living este locul ideal pentru momente de relaxare în familie. TV smart cu Netflix, internet WiFi de mare viteză și încălzire în toate spațiile. Din partea noastră aveți gratuit ceai, cafea, capsule pentru espressorul Nespresso, băuturi în frigider, papuci de casă, halate și cosmetice la băi.\n\nTerasa panoramică suspendată parcă deasupra pădurii este atracția principală a apartamentului. Ce poate fi mai plăcut decât să-ți savurezi cafeaua de dimineață privind valea, iar seara să ai cerul cu stele deasupra capului.\n\nSpatii cu acces gratuit în complex: loc de joacă exterior pentru copii, teren de mini fotbal, masă de ping-pong, teren de badminton și parcare în exterior cu stații de încărcare pentru mașini electrice.\n\nLoc de parcare subteran cu pază 24/7, inclus în prețul cazării — uiți iarna de grija deszăpezirii mașinii, iar vara, automobilul îți este protejat de căldura excesivă a soarelui.\n\nNotă: Apartamentul este locuință privată în complexul Silver Mountain. Accesul la facilitățile mari ale complexului (SPA, piscine, restaurant NOIR, sală de fitness) NU este inclus în prețul cazării și se achiziționează separat de la recepția complexului.",
    facilities: [
      "WiFi gratuit",
      "TV smart cu Netflix",
      "Canapea extensibilă",
      "Șemineu",
      "Zonă de relaxare",
      "Încălzire",
      "Terasă panoramică",
    ],
  },
  {
    slug: "dormitor-principal",
    name: "Dormitor principal",
    price: 650,
    size: 64,
    capacity: "2 Persoane",
    beds: "Pat King Size",
    baths: 2,
    image: "/images/happy-place/Happy_Place_Brasov_7.jpeg",
    gallery: [
      "/images/happy-place/Happy_Place_Brasov_7.jpeg",
      "/images/happy-place/Happy_Place_Brasov_8.jpeg",
      "/images/happy-place/Happy_Place_Brasov_9.jpeg",
      "/images/happy-place/Happy_Place_Brasov_10.jpeg",
      "/images/happy-place/Happy_Place_Brasov_11.jpeg",
      "/images/happy-place/Happy_Place_Brasov_12.jpeg",
    ],
    description:
      "Dormitorul principal dispune de pat King Size confortabil, lenjerie de pat de calitate, prosoape și papuci de casă. Camera are garderobă sau dulap, priză lângă pat și suport pentru haine.\n\nFerestrele oferă vedere la munte și la piscină, iar dimineața lumina naturală transformă camera într-un spațiu cald și primitor. Este locul perfect pentru odihnă după o zi petrecută pe pârtie sau în complexul SPA.\n\nToate detaliile sunt gândite pentru confortul tău: articole de toaletă gratuite, usucător de păr, produse pentru curățare și dezinfectant pentru mâini.",
    facilities: [
      "Pat King Size",
      "Lenjerie de pat",
      "Prosoape",
      "Garderobă sau dulap",
      "Priză lângă pat",
      "Vedere la munte",
      "Încălzire",
    ],
  },
  {
    slug: "dormitor-secundar",
    name: "Dormitor secundar",
    price: 650,
    size: 64,
    capacity: "2 Persoane",
    beds: "Canapea extensibilă",
    baths: 2,
    image: "/images/happy-place/Happy_Place_Brasov_13.jpeg",
    gallery: [
      "/images/happy-place/Happy_Place_Brasov_13.jpeg",
      "/images/happy-place/Happy_Place_Brasov_14.jpeg",
      "/images/happy-place/Happy_Place_Brasov_15.jpeg",
      "/images/happy-place/Happy_Place_Brasov_16.jpeg",
      "/images/happy-place/Happy_Place_Brasov_17.jpeg",
      "/images/happy-place/Happy_Place_Brasov_18.jpeg",
    ],
    description:
      "Al doilea dormitor al apartamentului Happy Place oferă spațiu confortabil pentru încă două persoane, cu canapea extensibilă și acces la baia comună. Camera are TV cu ecran plat, încălzire și vedere spre pădure.\n\nIdeal pentru copii sau prieteni, dormitorul secundar completează capacitatea totală de 4 persoane a apartamentului. Lenjerie de pat și prosoape incluse, la fel ca în toate spațiile.",
    facilities: [
      "Canapea extensibilă",
      "TV cu ecran plat",
      "Lenjerie de pat",
      "Prosoape",
      "Încălzire",
      "Vedere la pădure",
    ],
  },
  {
    slug: "bucatarie",
    name: "Bucătărie complet utilată",
    price: 650,
    size: 64,
    capacity: "Self-catering",
    beds: "-",
    baths: 0,
    image: "/images/happy-place/Happy_Place_Brasov_19.jpeg",
    gallery: [
      "/images/happy-place/Happy_Place_Brasov_19.jpeg",
      "/images/happy-place/Happy_Place_Brasov_20.jpeg",
      "/images/happy-place/Happy_Place_Brasov_21.jpeg",
      "/images/happy-place/Happy_Place_Brasov_22.jpeg",
    ],
    description:
      "Bucătăria privată a apartamentului Happy Place este complet utilată pentru prepararea tuturor meselor. Dotată cu plită electrică, cuptor cu microunde, frigider, fierbător și espressor Nespresso.\n\nVase și ustensile de bucătărie complete, zonă de luat masa, aparat de ceai și cafea. Din partea noastră aveți gratuit ceai, cafea și băuturi în frigider la sosire.\n\nPentru mesele pe care nu doriți să le pregătiți, restaurantul NOIR din complex oferă preparate culinare de excepție, în clădirea multifuncțională la doar 50 m de apartament.",
    facilities: [
      "Plită electrică",
      "Cuptor cu microunde",
      "Frigider",
      "Fierbător",
      "Espressor Nespresso",
      "Vase și ustensile",
      "Zonă de luat masa",
    ],
  },
  {
    slug: "bai",
    name: "2 băi private",
    price: 650,
    size: 64,
    capacity: "2 băi",
    beds: "-",
    baths: 2,
    image: "/images/happy-place/Happy_Place_Brasov_23.jpeg",
    gallery: [
      "/images/happy-place/Happy_Place_Brasov_23.jpeg",
      "/images/happy-place/Happy_Place_Brasov_24.jpeg",
      "/images/happy-place/Happy_Place_Brasov_25.jpeg",
      "/images/happy-place/Happy_Place_Brasov_26.jpeg",
    ],
    description:
      "Apartamentul dispune de două băi private complete: una cu cada mare pentru relaxare și cealaltă cu dus. Ambele au bideu și toaletă suplimentară, articole de toaletă gratuite, prosoape, papuci de casă și usucător de păr.\n\nCurățenia este o prioritate: produse pentru curățare, dezinfectant pentru mâini și hârtie igienică disponibile în ambele băi.",
    facilities: [
      "Baie cu cada mare",
      "Baie cu dus",
      "Bideu",
      "Articole de toaletă gratuite",
      "Prosoape",
      "Papuci de casă",
      "Usucător de păr",
    ],
  },
  {
    slug: "terasa-panoramica",
    name: "Terasă panoramică",
    price: 650,
    size: 64,
    capacity: "Perspectivă asupra văii",
    beds: "-",
    baths: 0,
    image: "/images/happy-place/Happy_Place_Brasov_27.jpeg",
    gallery: [
      "/images/happy-place/Happy_Place_Brasov_27.jpeg",
      "/images/happy-place/Happy_Place_Brasov_28.jpeg",
      "/images/happy-place/Happy_Place_Brasov_29.jpeg",
      "/images/happy-place/Happy_Place_Brasov_30.jpeg",
      "/images/happy-place/Happy_Place_Brasov_31.jpeg",
      "/images/happy-place/Happy_Place_Brasov_32.jpeg",
      "/images/happy-place/Happy_Place_Brasov_33.jpeg",
    ],
    description:
      "Terasa panoramică a apartamentului, situat la etajul 5, oferă o perspectivă superbă asupra întregii văi. Este atracția principală și zona preferată de toți turiștii noștri.\n\nCe poate fi mai plăcut decât să-ți savurezi cafeaua de dimineată de pe un balcon suspendat parcă deasupra pădurii, să ai seara cerul cu stele deasupra capului și să respiri adânc în fiecare zi aerul curat de munte. Relaxare, liniște și un peisaj care îți taie respirația.\n\nTerasa este spațioasă, mobilată și orientată pentru a capta cea mai bună lumină atât la răsărit, cât și la apus.",
    facilities: [
      "Perspectivă asupra văii",
      "Etajul 5",
      "Mobilată",
      "Balcon",
      "Vedere la munte",
      "Vedere la piscină",
      "Aer curat de munte",
    ],
  },
];

export const facilities = [
  { icon: "wifi", label: "WiFi gratuit", desc: "Internet de mare viteză în tot apartamentul" },
  { icon: "terrace", label: "Terasă panoramică", desc: "Perspectivă asupra văii de la etajul 5" },
  { icon: "kitchen", label: "Bucătărie privată", desc: "Espressor Nespresso + capsule cafea gratuite" },
  { icon: "fireplace", label: "Șemineu", desc: "Atmosferă caldă în zona de living" },
  { icon: "parking", label: "Parcare subteran 24/7", desc: "Inclusă în preț · Pază non-stop" },
  { icon: "playground", label: "Loc de joacă copii", desc: "Exterior · Acces gratuit în complex" },
  { icon: "football", label: "Teren mini fotbal", desc: "Acces gratuit în complex" },
  { icon: "pingpong", label: "Masă de ping-pong", desc: "Acces gratuit în complex" },
  { icon: "badminton", label: "Teren de badminton", desc: "Acces gratuit în complex" },
  { icon: "ev", label: "Încărcare auto electric", desc: "Stații de încărcare în parcare exterior" },
  { icon: "pool", label: "2 piscine", desc: "Interioară + exterioară infinity · Cost suplimentar" },
  { icon: "spa", label: "Centru SPA", desc: "Jacuzzi, saună, masaj · Cost suplimentar" },
  { icon: "fitness", label: "Sală de fitness", desc: "Echipament complet în complex · Cost suplimentar" },
  { icon: "restaurant", label: "Restaurant NOIR", desc: "Preparate de excepție la 50 m · Contra-cost" },
  { icon: "baby", label: "Patut & scaun copil", desc: "La cerere · Contra-cost" },
  { icon: "ski", label: "Schi", desc: "Pârtii accesibile cu ski-bus din fața complexului" },
  { icon: "elevator", label: "Lift", desc: "Acces la etajele superioare" },
];

export const reviews = [
  {
    name: "Oaspete verificat",
    rating: 5,
    text: "Un apartament superb în Silver Mountain! Terasa panoramică de la etajul 5 oferă o vedere incredibilă. Ne-am simțit ca acasă.",
  },
  {
    name: "Familie Popescu",
    rating: 5,
    text: "Am stat cu 2 adulți și 2 copii. Spațiu generos, curat, cu tot ce ai nevoie. Copiii au adorat piscina și locul de joacă.",
  },
  {
    name: "Maria Ionescu",
    rating: 5,
    text: "Locație excelentă în Poiana Brașov, liniște deplină, aer curat. Espressorul Nespresso și detaliile de gazdă au făcut diferența.",
  },
  {
    name: "Andrei Georgescu",
    rating: 5,
    text: "Apartamentul este exact ca în poze. Pat King Size confortabil, bucătărie complet utilată, WiFi rapid. Recomand cu drag!",
  },
  {
    name: "Cuplu tânăr",
    rating: 5,
    text: "O escapadă perfectă. Terasa cu vedere la munte seara, cu stele deasupra, este de poveste. Vom reveni cu siguranță.",
  },
  {
    name: "Grup de prieteni",
    rating: 5,
    text: "Complexul Silver Mountain oferă totul: SPA, restaurant, piscină. Apartamentul Happy Place este unul dintre cele mai frumoase.",
  },
];

export const blogPosts = [
  {
    slug: "poiana-brasov-destinatia-de-iarna-din-inima-muntilor",
    title: "Poiana Brașov, destinația de iarnă din inima munților",
    excerpt: "Poiana Brașov oferă condiții excelente pentru schi, snowboard și drumeții, cu acces la pârtii prin ski-bus din fața complexului...",
    image: "/images/happy-place/Happy_Place_Brasov_1.jpeg",
  },
  {
    slug: "masivul-postavaru-trasee-si-panorame",
    title: "Masivul Postăvaru, trasee și panorame",
    excerpt: "Masivul Postăvarul domină peisajul Poianei Brașov și oferă trasee montane spectaculoase cu vedere panoramică asupra întregii văi...",
    image: "/images/happy-place/Happy_Place_Brasov_7.jpeg",
  },
  {
    slug: "restaurantul-noir-experienta-culinara-in-poiana-brasov",
    title: "Restaurantul NOIR, experiență culinară în Poiana Brașov",
    excerpt: "Restaurantul NOIR din complexul Silver Mountain oferă preparate culinare de excepție, cu evenimente ocazionale de muzică live în serile de sâmbătă...",
    image: "/images/happy-place/Happy_Place_Brasov_19.jpeg",
  },
];

export type GalleryCategory = "toate" | "interior" | "terasa" | "complex";

export interface GalleryImage {
  src: string;
  category: "interior" | "terasa" | "complex";
  title: string;
}

export const galleryImages: GalleryImage[] = [
  // Interior - living, dormitoare, bucătărie, băi
  { src: "/images/happy-place/Happy_Place_Brasov_1.jpeg", category: "interior", title: "Living" },
  { src: "/images/happy-place/Happy_Place_Brasov_2.jpeg", category: "interior", title: "Living" },
  { src: "/images/happy-place/Happy_Place_Brasov_3.jpeg", category: "interior", title: "Living" },
  { src: "/images/happy-place/Happy_Place_Brasov_4.jpeg", category: "interior", title: "Living" },
  { src: "/images/happy-place/Happy_Place_Brasov_5.jpeg", category: "interior", title: "Living" },
  { src: "/images/happy-place/Happy_Place_Brasov_6.jpeg", category: "interior", title: "Living" },
  { src: "/images/happy-place/Happy_Place_Brasov_7.jpeg", category: "interior", title: "Dormitor principal" },
  { src: "/images/happy-place/Happy_Place_Brasov_8.jpeg", category: "interior", title: "Dormitor principal" },
  { src: "/images/happy-place/Happy_Place_Brasov_9.jpeg", category: "interior", title: "Dormitor principal" },
  { src: "/images/happy-place/Happy_Place_Brasov_10.jpeg", category: "interior", title: "Dormitor principal" },
  { src: "/images/happy-place/Happy_Place_Brasov_11.jpeg", category: "interior", title: "Dormitor principal" },
  { src: "/images/happy-place/Happy_Place_Brasov_12.jpeg", category: "interior", title: "Dormitor principal" },
  { src: "/images/happy-place/Happy_Place_Brasov_13.jpeg", category: "interior", title: "Dormitor secundar" },
  { src: "/images/happy-place/Happy_Place_Brasov_14.jpeg", category: "interior", title: "Dormitor secundar" },
  { src: "/images/happy-place/Happy_Place_Brasov_15.jpeg", category: "interior", title: "Dormitor secundar" },
  { src: "/images/happy-place/Happy_Place_Brasov_16.jpeg", category: "interior", title: "Dormitor secundar" },
  { src: "/images/happy-place/Happy_Place_Brasov_17.jpeg", category: "interior", title: "Dormitor secundar" },
  { src: "/images/happy-place/Happy_Place_Brasov_18.jpeg", category: "interior", title: "Dormitor secundar" },
  { src: "/images/happy-place/Happy_Place_Brasov_19.jpeg", category: "interior", title: "Bucătărie" },
  { src: "/images/happy-place/Happy_Place_Brasov_20.jpeg", category: "interior", title: "Bucătărie" },
  { src: "/images/happy-place/Happy_Place_Brasov_21.jpeg", category: "interior", title: "Bucătărie" },
  { src: "/images/happy-place/Happy_Place_Brasov_22.jpeg", category: "interior", title: "Bucătărie" },
  { src: "/images/happy-place/Happy_Place_Brasov_23.jpeg", category: "interior", title: "Baie" },
  { src: "/images/happy-place/Happy_Place_Brasov_24.jpeg", category: "interior", title: "Baie" },
  { src: "/images/happy-place/Happy_Place_Brasov_25.jpeg", category: "interior", title: "Baie" },
  { src: "/images/happy-place/Happy_Place_Brasov_26.jpeg", category: "interior", title: "Baie" },
  // Terasă panoramică
  { src: "/images/happy-place/Happy_Place_Brasov_27.jpeg", category: "terasa", title: "Terasă panoramică" },
  { src: "/images/happy-place/Happy_Place_Brasov_28.jpeg", category: "terasa", title: "Terasă panoramică" },
  { src: "/images/happy-place/Happy_Place_Brasov_29.jpeg", category: "terasa", title: "Terasă panoramică" },
  { src: "/images/happy-place/Happy_Place_Brasov_30.jpeg", category: "terasa", title: "Terasă panoramică" },
  { src: "/images/happy-place/Happy_Place_Brasov_31.jpeg", category: "terasa", title: "Terasă panoramică" },
  { src: "/images/happy-place/Happy_Place_Brasov_32.jpeg", category: "terasa", title: "Terasă panoramică" },
  { src: "/images/happy-place/Happy_Place_Brasov_33.jpeg", category: "terasa", title: "Terasă panoramică" },
];

export function getSpaceBySlug(slug: string): Space | undefined {
  return spaces.find((s) => s.slug === slug);
}

export interface Amenity {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  icon: string;
  gallery: string[];
}

export const amenities: Amenity[] = [
  {
    slug: "centru-spa",
    title: "Centru SPA & Wellness",
    shortDescription:
      "Piscină interioară, piscină exterioară infinity încălzită, jacuzzi, saună umedă și uscată.",
    description:
      "Centrul SPA din complexul Silver Mountain vă pune la dispoziție o experiență completă de relaxare. Piscina interioară încălzită este perfectă pentru orice sezon, iar piscina exterioară infinity, amplasată la ultimul etaj al clădirii multifuncționale, oferă o panoramă superbă asupra pădurilor și munților.\n\nJacuzzi-ul cu hidroterapie, sauna umedă și sauna uscată completează experiența SPA. La recepția SPA se oferă prosoape pentru piscină.\n\nSPA și restaurantul NOIR se află în aceeași clădire multifuncțională, la doar 50 m de apartament. Minorii au acces la Centrul SPA doar însoțiți de adulți.\n\nTarife SPA (3 ore):\n• Adulți: 145 lei/persoană\n• Copii 3-9 ani: 75 lei/persoană\n• Copii sub 3 ani: acces gratuit\n\nTariful include acces integral la: piscina interioară, piscina exterioară infinity încălzită, jacuzzi, saună umedă și uscată. Centrul SPA este gestionat de o firmă specializată și au acces exclusiv doar turiștii cazați în complexul Silver Mountain. Plata se face separat la recepția SPA.",
    image: "/images/happy-place/Happy_Place_Brasov_27.jpeg",
    icon: "💆",
    gallery: [
      "/images/happy-place/Happy_Place_Brasov_27.jpeg",
      "/images/happy-place/Happy_Place_Brasov_28.jpeg",
      "/images/happy-place/Happy_Place_Brasov_29.jpeg",
    ],
  },
  {
    slug: "restaurant-noir",
    title: "Restaurant NOIR",
    shortDescription:
      "Preparate culinare de excepție în restaurantul complexului, cu evenimente ocazionale de muzică live în serile de sâmbătă.",
    description:
      "Restaurantul NOIR din complexul Silver Mountain este locul perfect pentru clipe memorabile petrecute într-un ambient select. Staff-ul profesionist vă asigură buna-dispoziție, iar meniul oferă preparate culinare de excepție, pizza și o selecție de vinuri.\n\nÎn serile de sâmbătă se organizează ocazional evenimente cu muzică live și atmosferă relaxată. La Restaurantul NOIR se organizează în fiecare an seri speciale cu meniu și program artistic de Crăciun și de Revelion. Restaurantul este deschis pentru toate mesele zilei, fiind ideal atât pentru mic dejun, cât și pentru cină în familie sau în cuplu.\n\nSituat în clădirea multifuncțională, la doar 50 m de apartamentul Happy Place, restaurantul este accesibil ușor fără mașină.\n\nMic dejun bufet suedez:\n• Program: 08:30 - 10:30\n• Preț: 99 lei/persoană\n• Bufet foarte bogat: omletă, iaurt, brânzeturi, mezeluri, prăjituri, fructe, cafea, sucuri și chiar șampanie\n\nMicul dejun se servește la restaurantul NOIR, în aceeași clădire cu SPA-ul. Plata se face separat la restaurant.",
    image: "/images/happy-place/Happy_Place_Brasov_19.jpeg",
    icon: "🍽️",
    gallery: [
      "/images/happy-place/Happy_Place_Brasov_19.jpeg",
      "/images/happy-place/Happy_Place_Brasov_20.jpeg",
    ],
  },
  {
    slug: "parcare-subterana",
    title: "Parcare subteran cu pază 24/7",
    shortDescription:
      "Loc de parcare subteran cu pază non-stop, inclus în prețul cazării.",
    description:
      "Oaspeții apartamentului Happy Place beneficiază de un loc de parcare subteran cu pază 24/7, inclus în prețul cazării. Uiți iarna de grija deszăpezirii mașinii, iar vara, automobilul îți este protejat de căldura excesivă a soarelui.\n\nAccesul se face direct din complex, fără a fi nevoie să parcați pe stradă. Parcarea asigură securitatea vehiculului pe tot parcursul sejurului.",
    image: "/images/happy-place/Happy_Place_Brasov_1.jpeg",
    icon: "🚗",
    gallery: [
      "/images/happy-place/Happy_Place_Brasov_1.jpeg",
    ],
  },
  {
    slug: "loc-de-joaca",
    title: "Loc de joacă exterior pentru copii",
    shortDescription:
      "Loc de joacă exterior în complex, ideal pentru familii cu copii mici.",
    description:
      "Complexul Silver Mountain dispune de un loc de joacă exterior pentru copii, perfect pentru oaspeții care călătoresc în familie. Copiii se pot bucura de spațiu de joacă în siguranță, în timp ce părinții se relaxează în SPA sau la restaurant.\n\nExistă și teren de fotbal și grădină amenajată în complex, pentru activități în aer liber.",
    image: "/images/happy-place/Happy_Place_Brasov_13.jpeg",
    icon: "🧸",
    gallery: [
      "/images/happy-place/Happy_Place_Brasov_13.jpeg",
    ],
  },
  {
    slug: "sala-fitness",
    title: "Sală de fitness",
    shortDescription:
      "Sală de fitness complet echipată în clădirea multifuncțională a complexului.",
    description:
      "Sală de fitness complet echipată, situată în clădirea multifuncțională a complexului Silver Mountain, lângă piscină. Accesibilă oaspeților pentru menținerea formei fizice pe parcursul sejurului.\n\nIdeală pentru o sesiune de exerciții dimineața, înainte de a ieși pe pârtie sau de a explora zona Poiana Brașov.",
    image: "/images/happy-place/Happy_Place_Brasov_22.jpeg",
    icon: "🏋️",
    gallery: [
      "/images/happy-place/Happy_Place_Brasov_22.jpeg",
    ],
  },
  {
    slug: "schi-snowboard",
    title: "Schi & Snowboard",
    shortDescription:
      "Pârtii de schi accesibile iarna cu ski-bus din fața complexului.",
    description:
      "Poiana Brașov oferă condiții excelente pentru schi și snowboard, cu pârtii de dificultate variată. Pârtiile de schi sunt accesibile iarna cu ski-bus care pleacă direct din fața complexului Silver Mountain.\n\nEchipament de schi poate fi închiriat la fața locului, iar școli de schi cu instructori calificați sunt disponibile pentru începători. Sezonul de schi se întinde de obicei din decembrie până în martie.\n\nDupă o zi pe pârtie, centrul SPA din complex este locul ideal pentru relaxare musculară în jacuzzi sau saună.",
    image: "/images/happy-place/Happy_Place_Brasov_27.jpeg",
    icon: "⛷️",
    gallery: [
      "/images/happy-place/Happy_Place_Brasov_27.jpeg",
      "/images/happy-place/Happy_Place_Brasov_28.jpeg",
    ],
  },
  {
    slug: "spatii-acces-gratuit",
    title: "Spații cu acces gratuit",
    shortDescription:
      "Loc de joacă exterior pentru copii, teren de mini fotbal, ping-pong, badminton și parcare cu stații de încărcare auto electrice.",
    description:
      "Complexul Silver Mountain oferă oaspeților Happy Place acces gratuit la mai multe spații de recreere în aer liber.\n\nCopiii se pot bucura de locul de joacă exterior amenajat în siguranță, iar pentru activitățile sportive aveți la dispoziție teren de mini fotbal, masă de ping-pong și teren de badminton.\n\nParcarea exterioară este gratuită pentru vizitatori și dispune de stații de încărcare pentru mașini electrice.\n\nToate aceste facilități sunt incluse gratuit în sejurul dumneavoastră, fără costuri suplimentare.",
    image: "/images/happy-place/Happy_Place_Brasov_13.jpeg",
    icon: "🧸",
    gallery: [
      "/images/happy-place/Happy_Place_Brasov_13.jpeg",
      "/images/happy-place/Happy_Place_Brasov_14.jpeg",
    ],
  },
];

export function getAmenityBySlug(slug: string): Amenity | undefined {
  return amenities.find((a) => a.slug === slug);
}
