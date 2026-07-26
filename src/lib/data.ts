export interface Room {
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

export const rooms: Room[] = [
  {
    slug: "camera-dubla",
    name: "Camera dublă",
    price: 150,
    size: 16,
    capacity: "2 Persoane",
    beds: "1 Pat dublu",
    baths: 1,
    image: "/images/camere/1logo-dubla.jpg",
    gallery: [
      "/images/camere/1logo-dubla.jpg",
    ],
    description:
      "Camerele duble cu baie proprie sunt camere cu pat dublu, aflate în corpul de clădire A. În total punem la dispoziția turiștilor 5 camere de acest tip.\n\nToate camerele beneficiază de internet wireless, televizor și încălzire centrală.\n\nToți turiștii au acces la o bucătărie complet echipată situată la parterul corpului de clădire A.\n\nDe asemenea, turiștii pot lua masa la restaurantul cu circuit închis (unde au acces doar turiștii cazați în pensiune) și unde pot alege dintre diverse sortimente culinare bucovinene.",
    facilities: [
      "WiFi gratuit",
      "TV",
      "Baie proprie",
      "Încălzire centrală",
      "Bucătărie comună",
      "Restaurant",
    ],
  },
  {
    slug: "camera-dubla-cu-balcon",
    name: "Camera dublă cu balcon",
    price: 180,
    size: 18,
    capacity: "2 Persoane",
    beds: "1 Pat dublu",
    baths: 1,
    image: "/images/camere/poti2388_1024x683.jpg",
    gallery: [
      "/images/camere/poti2388_1024x683.jpg",
    ],
    description:
      "Camerele duble cu baie proprie și balcon sunt camere cu pat dublu, aflate în corpul de clădire B. În total punem la dispoziția turiștilor 6 camere de acest tip.\n\nToate camerele beneficiază de internet wireless, televizor, frigider, încălzire centrală și balcon cu priveliște superbă spre munții din apropiere.\n\nTuriștii pot lua masa la restaurantul cu circuit închis (unde au acces doar turiștii cazați în pensiune) aflat la parterul corpului de clădire B și unde pot alege dintre diverse sortimente culinare bucovinene.",
    facilities: [
      "WiFi gratuit",
      "TV",
      "Baie proprie",
      "Frigider",
      "Încălzire centrală",
      "Balcon cu vedere la munte",
      "Restaurant",
    ],
  },
  {
    slug: "camera-tripla",
    name: "Camera triplă",
    price: 200,
    size: 20,
    capacity: "3 Persoane",
    beds: "2 Paturi",
    baths: 1,
    image: "/images/camere/1logo-tripla.jpg",
    gallery: [
      "/images/camere/1logo-tripla.jpg",
    ],
    description:
      "Camerele triple cu baie proprie sunt camere cu două paturi, aflate în corpul de clădire A. În total punem la dispoziția turiștilor 2 camere de acest tip.\n\nToate camerele beneficiază de internet wireless, televizor și încălzire centrală.\n\nToți turiștii au acces la o bucătărie complet echipată situată la parterul corpului de clădire A.\n\nDe asemenea, turiștii pot lua masa la restaurantul cu circuit închis (unde au acces doar turiștii cazați în pensiune) și unde pot alege dintre diverse sortimente culinare bucovinene.",
    facilities: [
      "WiFi gratuit",
      "TV",
      "Baie proprie",
      "Încălzire centrală",
      "Bucătărie comună",
      "Restaurant",
    ],
  },
  {
    slug: "camera-tripla-cu-balcon",
    name: "Camera triplă cu balcon",
    price: 230,
    size: 22,
    capacity: "3 Persoane",
    beds: "2 Paturi",
    baths: 1,
    image: "/images/camere/poti2374_1024x683.jpg",
    gallery: [
      "/images/camere/poti2374_1024x683.jpg",
    ],
    description:
      "Camerele triple cu baie proprie și balcon sunt camere cu două paturi, aflate în corpul de clădire B. În total punem la dispoziția turiștilor 4 camere de acest tip.\n\nToate camerele beneficiază de internet wireless, televizor, balcon și încălzire centrală.\n\nToți turiștii pot lua masa la restaurantul cu circuit închis (unde au acces doar turiștii cazați în pensiune) situat la parterul corpului de clădire B și unde pot alege dintre diverse sortimente culinare bucovinene.",
    facilities: [
      "WiFi gratuit",
      "TV",
      "Baie proprie",
      "Încălzire centrală",
      "Balcon",
      "Restaurant",
    ],
  },
  {
    slug: "casuta-din-copac",
    name: "Casuța din copac",
    price: 280,
    size: 25,
    capacity: "2 Persoane",
    beds: "1 Pat matrimonial",
    baths: 1,
    image: "/images/camere/6.jpg",
    gallery: [
      "/images/camere/6.jpg",
    ],
    description:
      "Este cel mai nou spațiu de cazare de la PENSIUNEA ANGELA creat special pentru dvs. Întreg aranjamentul tradițional din interior vă va face să vă simțiți ca acasă. Acest minunat loc oferă toate condițiile pentru dvs: baie în cameră, pat matrimonial, TV, balcon și frigider. Vă așteptăm cu drag în acest loc de poveste.",
    facilities: [
      "WiFi gratuit",
      "TV",
      "Baie în cameră",
      "Frigider",
      "Balcon",
      "Pat matrimonial",
    ],
  },
];

export const facilities = [
  { icon: "car", label: "Parcare gratuită", desc: "Parcare privată la fața locului" },
  { icon: "wifi", label: "WiFi gratuit", desc: "Internet în toate spațiile" },
  { icon: "garden", label: "Grădină & Terasă", desc: "Spațiu verde pentru relaxare" },
  { icon: "bbq", label: "Grătar", desc: "Grătar disponibil în curte" },
  { icon: "kids", label: "Copii bineveniți", desc: "Spațiu prietenos pentru familii" },
  { icon: "balcony", label: "Balcon", desc: "Camere cu balcon și vedere la munte" },
  { icon: "breakfast", label: "Mic dejun", desc: "Mic dejun la cerere" },
  { icon: "accessible", label: "Accesibil", desc: "Acces pentru persoane cu dizabilități" },
];

export const reviews = [
  {
    name: "Oaspete verificat",
    rating: 5,
    text: "O experiență minunată la Pensiunea Angela! Locație excelentă în Vatra Dornei, camere curate și confortabile, gazde primitori. Recomandăm cu drag!",
  },
  {
    name: "Familie Popescu",
    rating: 5,
    text: "Am petrecut un sejur de neuitat. Casuța din copac este absolut fascinantă, un loc de poveste! Copiii au adorat-o. Vom reveni cu siguranță.",
  },
  {
    name: "Maria Ionescu",
    rating: 5,
    text: "Pensiune curată, personnel amabil, poziție foarte bună pentru explorarea zonei Vatra Dornei. Peisaje superbe și liniște deplină.",
  },
  {
    name: "Andrei Georgescu",
    rating: 5,
    text: "Camere spațioase, baie proprie, frigider, tot ce ai nevoie. Gazdele sunt foarte attenți la detalii. Mulțumim pentru tot!",
  },
  {
    name: "Cuplu tânăr",
    rating: 5,
    text: "O oază de liniște în mijlocul naturii. Aer curat, peisaje montane superbe și cazare confortabilă. Perfect pentru o escapadă.",
  },
  {
    name: "Grup de prieteni",
    rating: 5,
    text: "Am fost în grup și ne-am simțit excelent. Camerele triplu cu balcon sunt foarte spațioase. Recomandăm Pensiunea Angela!",
  },
];

export const blogPosts = [
  {
    slug: "muntii-calimani-paradisul-turistilor-in-vatra-dornei",
    title: "Munții Călimani — Paradisul turiștilor în Vatra Dornei",
    excerpt: "Munții Călimani oferă trasee spectaculoase, aer curat și peisaje de neuitat, la doar câțiva km de Pensiunea Angela...",
    image: "/images/pensiunea-angela/328.jpg",
  },
  {
    slug: "izvoarele-termale-si-băile-din-vatra-dornei",
    title: "Izvoarele termale și băile din Vatra Dornei",
    excerpt: "Vatra Dornei este renumită pentru izvoarele sale termale și băile minerale, ideal pentru relaxare și tratament...",
    image: "/images/pensiunea-angela/340.jpg",
  },
  {
    slug: "mănăstirile-din-bucovina-obiective-unesco",
    title: "Mănăstirile din Bucovina — Obiective UNESCO",
    excerpt: "Mănăstirile pictate din Bucovina, printre care Voroneț, Humor și Sucevița, sunt obiective UNESCO la doar o oră de Vatra Dornei...",
    image: "/images/pensiunea-angela/355.jpg",
  },
];

export type GalleryCategory = "toate" | "camere" | "exterior" | "facilitati";

export interface GalleryImage {
  src: string;
  category: "camere" | "exterior" | "facilitati";
  title: string;
}

export const galleryImages: GalleryImage[] = [
  // Exterior
  { src: "/images/pensiunea-angela/328.jpg", category: "exterior", title: "Exterior" },
  { src: "/images/pensiunea-angela/329.jpg", category: "exterior", title: "Exterior" },
  { src: "/images/pensiunea-angela/330.jpg", category: "exterior", title: "Exterior" },
  { src: "/images/pensiunea-angela/331.jpg", category: "exterior", title: "Exterior" },
  { src: "/images/pensiunea-angela/332.jpg", category: "exterior", title: "Exterior" },
  { src: "/images/pensiunea-angela/333.jpg", category: "exterior", title: "Exterior" },
  { src: "/images/pensiunea-angela/334.jpg", category: "exterior", title: "Exterior" },
  { src: "/images/pensiunea-angela/335.jpg", category: "exterior", title: "Exterior" },
  { src: "/images/pensiunea-angela/336.jpg", category: "exterior", title: "Exterior" },
  { src: "/images/pensiunea-angela/337.jpg", category: "exterior", title: "Exterior" },
  { src: "/images/pensiunea-angela/338.jpg", category: "exterior", title: "Exterior" },
  { src: "/images/pensiunea-angela/339.jpg", category: "exterior", title: "Exterior" },
  { src: "/images/pensiunea-angela/340.jpg", category: "exterior", title: "Exterior" },
  { src: "/images/pensiunea-angela/341.jpg", category: "exterior", title: "Exterior" },
  { src: "/images/pensiunea-angela/342.jpg", category: "exterior", title: "Exterior" },
  { src: "/images/pensiunea-angela/343.jpg", category: "exterior", title: "Exterior" },
  { src: "/images/pensiunea-angela/344.jpg", category: "exterior", title: "Exterior" },
  { src: "/images/pensiunea-angela/345.jpg", category: "exterior", title: "Exterior" },
  { src: "/images/pensiunea-angela/346.jpg", category: "exterior", title: "Exterior" },
  { src: "/images/pensiunea-angela/347.jpg", category: "exterior", title: "Exterior" },
  { src: "/images/pensiunea-angela/348.jpg", category: "exterior", title: "Exterior" },
  { src: "/images/pensiunea-angela/349.jpg", category: "exterior", title: "Exterior" },
  { src: "/images/pensiunea-angela/350.jpg", category: "exterior", title: "Exterior" },
  { src: "/images/pensiunea-angela/351.jpg", category: "exterior", title: "Exterior" },
  { src: "/images/pensiunea-angela/352.jpg", category: "exterior", title: "Exterior" },
  { src: "/images/pensiunea-angela/353.jpg", category: "exterior", title: "Exterior" },
  // Camere
  { src: "/images/pensiunea-angela/354.jpg", category: "camere", title: "Camera triplă" },
  { src: "/images/pensiunea-angela/355.jpg", category: "camere", title: "Camera triplă" },
  { src: "/images/pensiunea-angela/356.jpg", category: "camere", title: "Camera triplă" },
  { src: "/images/pensiunea-angela/357.jpg", category: "camere", title: "Camera triplă" },
  { src: "/images/pensiunea-angela/358.jpg", category: "camere", title: "Camera dublă" },
  { src: "/images/pensiunea-angela/359.jpg", category: "camere", title: "Camera dublă" },
  { src: "/images/pensiunea-angela/360.jpg", category: "camere", title: "Hol" },
  { src: "/images/pensiunea-angela/361.jpg", category: "camere", title: "Camera dublă" },
  { src: "/images/pensiunea-angela/362.jpg", category: "camere", title: "Scară acces" },
  { src: "/images/pensiunea-angela/363.jpg", category: "camere", title: "Camera triplă" },
  { src: "/images/pensiunea-angela/366.jpg", category: "camere", title: "Camera triplă" },
  { src: "/images/pensiunea-angela/367.jpg", category: "camere", title: "Camera dublă" },
  { src: "/images/pensiunea-angela/368.jpg", category: "camere", title: "Camera dublă" },
  { src: "/images/pensiunea-angela/369.jpg", category: "camere", title: "Camera dublă" },
  { src: "/images/pensiunea-angela/370.jpg", category: "camere", title: "Camera triplă" },
  { src: "/images/pensiunea-angela/371.jpg", category: "camere", title: "Camera dublă" },
  { src: "/images/pensiunea-angela/372.jpg", category: "camere", title: "Camera triplă" },
  { src: "/images/pensiunea-angela/373.jpg", category: "camere", title: "Camera dublă" },
  { src: "/images/pensiunea-angela/374.jpg", category: "camere", title: "Scară acces" },
  { src: "/images/pensiunea-angela/383.jpg", category: "camere", title: "Casuța din copac" },
  { src: "/images/pensiunea-angela/384.jpg", category: "camere", title: "Casuța din copac" },
  { src: "/images/pensiunea-angela/385.jpg", category: "camere", title: "Casuța din copac" },
  { src: "/images/pensiunea-angela/386.jpg", category: "camere", title: "Casuța din copac" },
  { src: "/images/pensiunea-angela/387.jpg", category: "camere", title: "Casuța din copac" },
  { src: "/images/pensiunea-angela/388.jpg", category: "camere", title: "Casuța din copac" },
  // Facilitati
  { src: "/images/pensiunea-angela/364.jpg", category: "facilitati", title: "Restaurant" },
  { src: "/images/pensiunea-angela/365.jpg", category: "facilitati", title: "Restaurant" },
  { src: "/images/pensiunea-angela/389.jpg", category: "facilitati", title: "SPA" },
  { src: "/images/pensiunea-angela/390.jpg", category: "facilitati", title: "SPA" },
  { src: "/images/pensiunea-angela/391.jpg", category: "facilitati", title: "SPA" },
  { src: "/images/pensiunea-angela/392.jpg", category: "facilitati", title: "SPA" },
  { src: "/images/pensiunea-angela/393.jpg", category: "facilitati", title: "SPA" },
  { src: "/images/pensiunea-angela/394.jpg", category: "facilitati", title: "SPA" },
  { src: "/images/pensiunea-angela/395.jpg", category: "facilitati", title: "SPA" },
];

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find((r) => r.slug === slug);
}
