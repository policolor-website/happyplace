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

export interface Activity {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  icon: string;
  gallery: string[];
}

export const activities: Activity[] = [
  {
    slug: "centru-spa",
    title: "Centru SPA Pensiunea Angela",
    shortDescription:
      "Distracție și relaxare în cel mai nou centru SPA din Vatra Dornei.",
    description:
      "Vă invităm să vă bucurați de relaxare în cea mai nouă locație marca Pensiunea Angela. Centrul SPA vă pune la dispoziție o piscină interioară generoasă, două jacuzzi pentru relaxare și terapie și o saună uscată.\n\nIndiferent de sezon, centrul SPA este locul ideal pentru a vă relaxa după o zi de drumeție sau schi. Piscina interioară încălzită vă oferă confort pe tot parcursul anului, iar jacuzzi-urile cu apă termală sunt perfecte pentru terapie și relaxare musculară.\n\nSauna uscată completează experiența SPA, ajutând la detoxifierea organismului și la relaxarea profundă. Vă așteptăm să descoperiți un oasis de liniște și wellbeing în inima Bucovinei.",
    image: "/images/agrement/62-screen.jpg",
    icon: "💆",
    gallery: [
      "/images/agrement/62-screen.jpg",
      "/images/pensiunea-angela/389.jpg",
      "/images/pensiunea-angela/390.jpg",
      "/images/pensiunea-angela/391.jpg",
      "/images/pensiunea-angela/392.jpg",
      "/images/pensiunea-angela/393.jpg",
      "/images/pensiunea-angela/394.jpg",
      "/images/pensiunea-angela/395.jpg",
    ],
  },
  {
    slug: "turism-ecvestru",
    title: "Turism ecvestru",
    shortDescription:
      "Lecții de călărie sau plimbări prin pădure cu cei mai frumoși cai din Bucovina.",
    description:
      "Descoperă Bucovina din șaua calului! Turismul ecvestru este una dintre cele mai apreciate forme de agrement din zona Vatra Dornei.\n\nOferim lecții de călărie pentru începători și plimbări organizate prin pădure pentru cei mai experimentați. Caii noștri sunt docili, bine dresați și perfecți pentru explorarea traseelor montane din jurul pensiunii.\n\nPlimbările călare te duc prin peisaje spectaculoase, pe poteci forestiere și prin poieni cu flori sălbatice. Este o experiență unică care îmbină dragostea pentru animale cu pasiunea pentru natură și aventură.\n\nIndiferent dacă ești la prima călărie sau ești un călăreț experimentat, turismul ecvestru în Bucovina este o experiență de neuitat.",
    image: "/images/agrement/275-screen.jpg",
    icon: "🐎",
    gallery: [
      "/images/agrement/275-screen.jpg",
      "/images/agrement/276-screen.jpg",
      "/images/agrement/277-screen.jpg",
      "/images/agrement/278-screen.jpg",
      "/images/agrement/279-screen.jpg",
      "/images/agrement/280-screen.jpg",
      "/images/agrement/281-screen.jpg",
      "/images/agrement/282-screen.jpg",
      "/images/agrement/283-screen.jpg",
      "/images/agrement/284-screen.jpg",
      "/images/agrement/285-screen.jpg",
    ],
  },
  {
    slug: "mountain-biking",
    title: "Mountain biking",
    shortDescription:
      "Adrenalină, mișcare și multă distracție pe traseele montane din Vatra Dornei.",
    description:
      "Una dintre metodele de agrement care vă va aduce un nivel de adrenalină crescut — mișcare, provocare și multă distracție pe traseele montane din Vatra Dornei.\n\nZona oferă trasee variate pentru mountain biking, de la poteci forestiere ușoare până la trasee tehnice pentru cicliști avansați. Peisajele spectaculoase și aerul curat fac fiecare pedală să merite.\n\nVatra Dornei este o destinație ideală pentru pasionații de mountain biking, cu trasee care străbat păduri de conifere, pajiști alpine și zone cu vedere panoramică spre munții Bucovinei.\n\nEchipamentul necesar poate fi închiriat local, iar traseele sunt marcate și accesibile pe tot parcursul sezonului cald.",
    image: "/images/agrement/8-screen.jpg",
    icon: "🚵",
    gallery: [
      "/images/agrement/8-screen.jpg",
    ],
  },
  {
    slug: "easy-rafting",
    title: "Easy rafting",
    shortDescription:
      "Peisaje superbe, mișcare, adrenalină și distracție în echipă pe râurile din Bucovina.",
    description:
      "Una dintre cele mai apreciate variante de agrement. Peisaje superbe, mișcare, adrenalină și distracție în echipă pe râurile din zona Bucovinei!\n\nEasy rafting este o activitate potrivită pentru familii și grupuri de prieteni, care nu necesită experiență anterioară. Bărcile sunt conduse de instructori experimentați care se asigură că experiența este sigură și plăcută.\n\nTraseele de rafting din zona Vatra Dornei oferă peisaje montane spectaculoase, cu ape cristaline și maluri împădurite. Este o modalitate unică de a descoperi natura sălbatică a Bucovinei dintr-o perspectivă diferită.\n\nEchipamentul de siguranță (veste, căști) este inclus, iar instructorii vă ghidează pe tot parcursul descenderii.",
    image: "/images/agrement/10-screen.jpg",
    icon: "🚣",
    gallery: [
      "/images/agrement/10-screen.jpg",
    ],
  },
  {
    slug: "off-road",
    title: "Off-Road",
    shortDescription:
      "Aventură cu jeep-uri autentice pe trasee de munte în munții Bucovinei.",
    description:
      "Explorați munții Bucovinei și admirați peisajele superbe și sălbatice în condiții de maximă siguranță! O aventură cu jeep-uri autentice pe trasee de munte care vă vor lăsa fără cuvinte.\n\nTraseele off-road din zona Vatra Dornei străbat terenuri variate — de la drumuri forestiere la poteci montane abrupte — oferindu-vă acces la zone greu accesibile și peisaje de o frumusețe rară.\n\nJeep-urile sunt echipate corespunzător pentru teren dificil, iar șoferii experimentați se asigură că aventura este sigură și plină de adrenalină. Este activitatea ideală pentru iubitorii de natură și off-road care vor să descopere Bucovina dincolo de drumurile asfaltate.\n\nVă recomandăm să aveți la dumneavoastră haine confortabile, încălțăminte rezistentă și o cameră foto pentru a imortaliza peisajele spectaculoase.",
    image: "/images/agrement/124-screen.jpg",
    icon: "🚙",
    gallery: [
      "/images/agrement/124-screen.jpg",
      "/images/agrement/125-screen.jpg",
      "/images/agrement/126-screen.jpg",
      "/images/agrement/127-screen.jpg",
      "/images/agrement/128-screen.jpg",
      "/images/agrement/129-screen.jpg",
      "/images/agrement/130-screen.jpg",
      "/images/agrement/131-screen.jpg",
    ],
  },
  {
    slug: "titi-s-adventure-park",
    title: "Titi's Adventure Park",
    shortDescription:
      "Parc de aventură cu cățărare în copaci și tiroliană în Vatra Dornei.",
    description:
      "Distrează-te în natură, cățără-te în copaci sau dă-te cu tiroliana în cel mai nou parc de aventură din Vatra Dornei!\n\nTiti's Adventure Park oferă trasee de dificultate variată, potrivite pentru copii, adolescenți și adulți. De la trasee ușoare la sol, până la platforme suspendate în copaci și tiroliane care îți taie respirația — toate în siguranță, cu echipament certificat și instructori profesioniști.\n\nParcul este amplasat în mijlocul pădurii, oferind un cadru natural spectaculos pentru aventură. Este locul ideal pentru familii, grupuri de prieteni sau team-building-uri companii.\n\nEchipamentul de siguranță (harnașament, cască) este inclus, iar personalul parcului vă ghidează și supraveghează pe tot parcursul experienței.",
    image: "/images/agrement/132-screen.jpg",
    icon: "🌳",
    gallery: [
      "/images/agrement/132-screen.jpg",
      "/images/agrement/133-screen.jpg",
      "/images/agrement/134-screen.jpg",
      "/images/agrement/135-screen.jpg",
      "/images/agrement/136-screen.jpg",
      "/images/agrement/137-screen.jpg",
      "/images/agrement/138-screen.jpg",
      "/images/agrement/139-screen.jpg",
      "/images/agrement/140-screen.jpg",
      "/images/agrement/141-screen.jpg",
      "/images/agrement/142-screen.jpg",
      "/images/agrement/143-screen.jpg",
    ],
  },
  {
    slug: "parcul-din-statiune",
    title: "Parcul din stațiune",
    shortDescription:
      "Plimbare relaxantă în parcul central din Vatra Dornei — alei, flori și liniște.",
    description:
      "O plimbare în parcul din centrul stațiunii rămâne una dintre cele mai îndrăgite metode de relaxare în Vatra Dornei.\n\nParcul dendrologic din Vatra Dornei este renumit pentru aleile sale umbroase, florile variate și atmosfera liniștită. Aici poți admira specii de arbori rari, te poți relaxa pe băncuțe sub copaci sau te poți plimba pe aleile pavate.\n\nParcul găzduiește și izvoare cu apă minerală, unde poți gusta apă proaspătă direct din sursă. Este locul preferat al turiștilor pentru plimbări de seară și momente de relaxare în mijlocul naturii.\n\nÎn fiecare sezon, parcul își schimbă înfățișarea — primăvara cu flori, vara cu verdele intens, toamna cu culori aurii și iarna cu zăpadă cristalină — oferind un peisaj de poveste în orice perioadă a anului.",
    image: "/images/agrement/112-screen.jpg",
    icon: "🏞️",
    gallery: [
      "/images/agrement/112-screen.jpg",
      "/images/agrement/113-screen.jpg",
      "/images/agrement/114-screen.jpg",
      "/images/agrement/115-screen.jpg",
      "/images/agrement/116-screen.jpg",
      "/images/agrement/117-screen.jpg",
      "/images/agrement/118-screen.jpg",
      "/images/agrement/119-screen.jpg",
      "/images/agrement/120-screen.jpg",
      "/images/agrement/121-screen.jpg",
      "/images/agrement/122-screen.jpg",
      "/images/agrement/123-screen.jpg",
    ],
  },
  {
    slug: "partii-de-ski",
    title: "Pârtii de schi",
    shortDescription:
      "4 pârtii de schi — a doua ca lungime din România — în stațiunea Vatra Dornei.",
    description:
      "4 pârtii de schi — una dintre ele fiind a doua ca lungime din România — vă așteaptă în stațiune. Distracția depinde doar de voi!\n\nVatra Dornei oferă condiții excelente pentru schi și snowboard, cu pârtii de dificultate variată, de la începători la avansați. Pârtiile sunt deservite de telescaune și instalații de transport pe cablu, iar sezonul de schi se întinde de obicei din decembrie până în martie.\n\nPârtia principală, una dintre cele mai lungi din România, oferă o coborâre spectaculoasă cu vedere panoramică asupra munților Bucovinei. Pentru începători, există pârtii mai ușoare și școli de schi cu instructori calificați.\n\nEchipament de schi poate fi închiriat la fața locului, iar infrastructura din stațiune oferă toate facilitățile necesare pentru un sejur de iarnă complet: cafenele, restaurant, spații de relaxare după o zi pe pârtie.",
    image: "/images/agrement/19-screen.jpg",
    icon: "⛷️",
    gallery: [
      "/images/agrement/19-screen.jpg",
    ],
  },
];

export function getActivityBySlug(slug: string): Activity | undefined {
  return activities.find((a) => a.slug === slug);
}
