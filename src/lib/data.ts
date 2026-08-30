export const contact = {
  phone: "0722 335 357",
  phoneIntl: "40722335357",
  email: "office@resort-silvermountain.ro",
  address: "Strada Doinașului, Nr. 10, Bloc C, Et. 5, Ap. 51",
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
    size: 25,
    capacity: "4 Persoane",
    beds: "Canapea extensibilă",
    baths: 2,
    image: "/images/happy-place/Happy_Living_main.jpeg",
    gallery: [
      "/images/happy-place/Happy_Living_main.jpeg",
      "/images/happy-place/Happy_Living_2.jpeg",
      "/images/happy-place/Happy_Living_3.jpeg",
      "/images/happy-place/Happy_Living_4.jpeg",
      "/images/happy-place/Happy_Living_5.jpeg",
      "/images/happy-place/Happy_Living_6.jpeg",
      "/images/happy-place/Happy_Living_7.jpeg",
      "/images/happy-place/Happy_Living_8.jpeg",
      "/images/happy-place/Happy_Living_9.jpeg",
      "/images/happy-place/Happy_Living_10.jpeg",
      "/images/happy-place/Happy_Living_11.jpeg",
      "/images/happy-place/Happy_Living_12.jpeg",
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
    size: 19,
    capacity: "2 Persoane",
    beds: "Pat King Size",
    baths: 2,
    image: "/images/happy-place/Happy_Dormitor_1.jpeg",
    gallery: [
      "/images/happy-place/Happy_Dormitor_1.jpeg",
      "/images/happy-place/Happy_Dormitor_2.jpeg",
      "/images/happy-place/Happy_Dormitor_3.jpeg",
      "/images/happy-place/Happy_Dormitor_4.jpeg",
      "/images/happy-place/Happy_Dormitor_5.jpeg",
      "/images/happy-place/Happy_Dormitor_6.jpeg",
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
    slug: "bucatarie",
    name: "Bucătărie complet utilată",
    price: 650,
    size: 5,
    capacity: "Self-catering",
    beds: "-",
    baths: 0,
    image: "/images/happy-place/Happy_Bucatarie_main.jpeg",
    gallery: [
      "/images/happy-place/Happy_Bucatarie_main.jpeg",
      "/images/happy-place/Happy_Bucatarie_2.jpeg",
      "/images/happy-place/Happy_Bucatarie_3.jpeg",
      "/images/happy-place/Happy_Bucatarie_4.jpeg",
      "/images/happy-place/Happy_Bucatarie_5.jpeg",
      "/images/happy-place/Happy_Bucatarie_6.jpeg",
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
    size: 11,
    capacity: "2 băi",
    beds: "-",
    baths: 2,
    image: "/images/happy-place/Happy_Baie1_1.jpeg",
    gallery: [
      "/images/happy-place/Happy_Baie1_1.jpeg",
      "/images/happy-place/Happy_Baie1_2.jpeg",
      "/images/happy-place/Happy_Baie1_3.jpeg",
      "/images/happy-place/Happy_Baie1_4.jpeg",
      "/images/happy-place/Happy_Baie1_5.jpeg",
      "/images/happy-place/Happy_Baie2_1.jpeg",
      "/images/happy-place/Happy_Baie2_2.jpeg",
    ],
    description:
      "Apartamentul dispune de două băi private complete: baia principală are cada mare pentru relaxare, 2 lavoare, toaletă și bideu. Cea de-a doua baie are dus. Ambele băi sunt dotate cu articole de toaletă gratuite, prosoape, papuci de casă și usucător de păr.\n\nCurățenia este o prioritate: produse pentru curățare, dezinfectant pentru mâini și hârtie igienică disponibile în ambele băi.",
    facilities: [
      "Baie cu cada mare",
      "2 lavoare",
      "Bideu",
      "Baie cu dus",
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
    size: 10,
    capacity: "Perspectivă asupra văii",
    beds: "-",
    baths: 0,
    image: "/images/happy-place/Happy_Terasa_1.jpeg",
    gallery: [
      "/images/happy-place/Happy_Terasa_1.jpeg",
      "/images/happy-place/Happy_Terasa_2.jpeg",
      "/images/happy-place/Happy_Terasa_3.jpeg",
      "/images/happy-place/Happy_Terasa_4.jpeg",
      "/images/happy-place/Happy_Terasa_5.jpeg",
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
  {
    slug: "hol",
    name: "Hol de intrare",
    price: 0,
    size: 4,
    capacity: "Spațiu de tranziție",
    beds: "-",
    baths: 0,
    image: "/images/happy-place/Happy_Hol_1.jpeg",
    gallery: [
      "/images/happy-place/Happy_Hol_1.jpeg",
      "/images/happy-place/Happy_Hol_2.jpeg",
      "/images/happy-place/Happy_Hol_3.jpeg",
    ],
    description:
      "Hol de intrare spațios de 4 m², cu oglinzi. Primește oaspeții cu o atmosferă caldă și primitoare.",
    facilities: [
      "Oglindă",
      "Cuier",
      "Încălțăminte",
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
    name: "Cristina — România",
    rating: 5,
    text: "Apartamentul este superb, cu un spațiu generos! Check-in-ul a fost foarte ușor de făcut! Priveliștea este minunată, perfectă pentru a-ți bea cafeaua privind superbitatea naturii care te înconjoară! Apartamentul este foarte modern și foarte frumos amenajat! Comunicarea cu gazda a fost foarte ușoară! Doamna Andreea ne-a ajutat cu toate informațiile necesare și ne-a făcut să ne simțim ca acasă! Vă mulțumim frumos pentru experiența unică și superbă pe care am avut-o cu dumneavoastră! Sper să revenim curând!",
  },
  {
    name: "Elad — Israel",
    rating: 5,
    text: "Very comfortable, clean and classy apartment. Feels like an executive suite of a highly rated hotel — and for a much cheaper price. The view is just like in the pictures. There are 2 bathrooms with shower and toilet each — very comfortable and speeds up getting ready to leave, ideal for a family. Very spacious bathroom and rooms. You can opt to take the Silver Mountain hotel's breakfast which worth every lei: caviar and champagne, a vast selection of cheeses and hams, fresh salmon, delicious deserts and more. The host was very nice and responsive. Perfect stay.",
  },
  {
    name: "Amina — România",
    rating: 5,
    text: "Totul a fost perfect. Copiii n-au mai vrut să iasă afara azi de dragul brăduțului. Perfect a ieșit, parcă e scos din povești, nu ne așteptam. ❤️ Am simțit dragul cu care l-ați împodobit de când am intrat pe ușă, am aprins luminile la el înainte să ne dăm gecile jos, ca niște copii❤️. Mulțumim mult!",
  },
  {
    name: "Thekla — Germania",
    rating: 5,
    text: "We had a wonderful stay in this beautiful apartment in Poiana Brașov. The apartment is spacious, stylishly furnished, very clean and perfectly equipped. The large balcony with its breathtaking view over the surrounding forests was definitely the highlight — we enjoyed spending our evenings there. Communication with the host was excellent, and everything worked exactly as described. The apartment is in a great location, offering peace and beautiful scenery while still being only a short drive from Brașov. We would definitely stay here again and highly recommend this apartment to anyone visiting Poiana Brașov. Thank you very much for a fantastic stay!",
  },
  {
    name: "Sami — Franța",
    rating: 5,
    text: "Tout a été parfait du début à la fin. L'appartement est très bien situé, propre et spacieux. Les services à proximité piscine et spa très agréable. Les conseils que nous a donné Toma ont été excellent (restaurants à proximité et visites à faire).",
  },
  {
    name: "Ciprian — România",
    rating: 5,
    text: "Sejur superb. A fost o vacanță foarte frumoasă, cu multă liniște, apartamentul este dotat cu toate cele necesare unei șederi minunate. Priveliștea este printre cele mai bune văzute de noi până acum. Cazare foarte bună, căldură este din belșug (am fost cazați în noiembrie, 2-3 grade afară noaptea), canapeaua și patul foarte comode. De asemenea sunt 2 băi, una cu dus iar cealaltă cu o cadă imensă și 2 chiuvete. Restul se regăsește în descriere dar este absolut superb. Pozele nu fac cinste peisajului și confortului. Centrul SPA este vis-a-vis, cum s-a mai răspuns, este contra cost și este super, merită cel puțin o vizită în sejur. Vom reveni cu drag. Nota 10 gazdei.",
  },
];

export const blogPosts = [
  {
    slug: "poiana-brasov-destinatia-de-iarna-din-inima-muntilor",
    title: "Poiana Brașov, destinația de iarnă din inima munților",
    excerpt: "Poiana Brașov oferă condiții excelente pentru schi, snowboard și drumeții, cu acces la pârtii prin ski-bus din fața complexului...",
    image: "/images/happy-place/Happy_Living_main.jpeg",
  },
  {
    slug: "masivul-postavaru-trasee-si-panorame",
    title: "Masivul Postăvaru, trasee și panorame",
    excerpt: "Masivul Postăvarul domină peisajul Poianei Brașov și oferă trasee montane spectaculoase cu vedere panoramică asupra întregii văi...",
    image: "/images/happy-place/Happy_Dormitor_1.jpeg",
  },
  {
    slug: "restaurantul-noir-experienta-culinara-in-poiana-brasov",
    title: "Restaurantul NOIR, experiență culinară în Poiana Brașov",
    excerpt: "Restaurantul NOIR din complexul Silver Mountain oferă preparate culinare de excepție, cu evenimente ocazionale de muzică live în serile de sâmbătă...",
    image: "/images/happy-place/Happy_Bucatarie_main.jpeg",
  },
];

export type GalleryCategory =
  | "toate"
  | "living"
  | "dormitor"
  | "bucatarie"
  | "bai"
  | "terasa"
  | "spa"
  | "restaurant"
  | "parcare"
  | "exterior"
  | "balcon"
  | "hol";

export interface GalleryImage {
  src: string;
  category: Exclude<GalleryCategory, "toate">;
  title: string;
}

export const galleryImages: GalleryImage[] = [
  // Living (12)
  { src: "/images/happy-place/Happy_Living_main.jpeg", category: "living", title: "Living" },
  { src: "/images/happy-place/Happy_Living_2.jpeg", category: "living", title: "Living" },
  { src: "/images/happy-place/Happy_Living_3.jpeg", category: "living", title: "Living" },
  { src: "/images/happy-place/Happy_Living_4.jpeg", category: "living", title: "Living" },
  { src: "/images/happy-place/Happy_Living_5.jpeg", category: "living", title: "Living" },
  { src: "/images/happy-place/Happy_Living_6.jpeg", category: "living", title: "Living" },
  { src: "/images/happy-place/Happy_Living_7.jpeg", category: "living", title: "Living" },
  { src: "/images/happy-place/Happy_Living_8.jpeg", category: "living", title: "Living" },
  { src: "/images/happy-place/Happy_Living_9.jpeg", category: "living", title: "Living" },
  { src: "/images/happy-place/Happy_Living_10.jpeg", category: "living", title: "Living" },
  { src: "/images/happy-place/Happy_Living_11.jpeg", category: "living", title: "Living" },
  { src: "/images/happy-place/Happy_Living_12.jpeg", category: "living", title: "Living" },
  // Dormitor (6)
  { src: "/images/happy-place/Happy_Dormitor_1.jpeg", category: "dormitor", title: "Dormitor principal" },
  { src: "/images/happy-place/Happy_Dormitor_2.jpeg", category: "dormitor", title: "Dormitor principal" },
  { src: "/images/happy-place/Happy_Dormitor_3.jpeg", category: "dormitor", title: "Dormitor principal" },
  { src: "/images/happy-place/Happy_Dormitor_4.jpeg", category: "dormitor", title: "Dormitor principal" },
  { src: "/images/happy-place/Happy_Dormitor_5.jpeg", category: "dormitor", title: "Dormitor principal" },
  { src: "/images/happy-place/Happy_Dormitor_6.jpeg", category: "dormitor", title: "Dormitor principal" },
  // Bucătărie (6)
  { src: "/images/happy-place/Happy_Bucatarie_main.jpeg", category: "bucatarie", title: "Bucătărie" },
  { src: "/images/happy-place/Happy_Bucatarie_2.jpeg", category: "bucatarie", title: "Bucătărie" },
  { src: "/images/happy-place/Happy_Bucatarie_3.jpeg", category: "bucatarie", title: "Bucătărie" },
  { src: "/images/happy-place/Happy_Bucatarie_4.jpeg", category: "bucatarie", title: "Bucătărie" },
  { src: "/images/happy-place/Happy_Bucatarie_5.jpeg", category: "bucatarie", title: "Bucătărie" },
  { src: "/images/happy-place/Happy_Bucatarie_6.jpeg", category: "bucatarie", title: "Bucătărie" },
  // Băi (7)
  { src: "/images/happy-place/Happy_Baie1_1.jpeg", category: "bai", title: "Baie cu cada" },
  { src: "/images/happy-place/Happy_Baie1_2.jpeg", category: "bai", title: "Baie cu cada" },
  { src: "/images/happy-place/Happy_Baie1_3.jpeg", category: "bai", title: "Baie cu cada" },
  { src: "/images/happy-place/Happy_Baie1_4.jpeg", category: "bai", title: "Baie cu cada" },
  { src: "/images/happy-place/Happy_Baie1_5.jpeg", category: "bai", title: "Baie cu cada" },
  { src: "/images/happy-place/Happy_Baie2_1.jpeg", category: "bai", title: "Baie cu dus" },
  { src: "/images/happy-place/Happy_Baie2_2.jpeg", category: "bai", title: "Baie cu dus" },
  // Terasă (5)
  { src: "/images/happy-place/Happy_Terasa_1.jpeg", category: "terasa", title: "Terasă panoramică" },
  { src: "/images/happy-place/Happy_Terasa_2.jpeg", category: "terasa", title: "Terasă panoramică" },
  { src: "/images/happy-place/Happy_Terasa_3.jpeg", category: "terasa", title: "Terasă panoramică" },
  { src: "/images/happy-place/Happy_Terasa_4.jpeg", category: "terasa", title: "Terasă panoramică" },
  { src: "/images/happy-place/Happy_Terasa_5.jpeg", category: "terasa", title: "Terasă panoramică" },
  // Centrul SPA (10)
  { src: "/images/happy-place/Happy_SPA_1.jpeg", category: "spa", title: "Centru SPA" },
  { src: "/images/happy-place/Happy_SPA_2.jpeg", category: "spa", title: "Centru SPA" },
  { src: "/images/happy-place/Happy_SPA_3.jpeg", category: "spa", title: "Centru SPA" },
  { src: "/images/happy-place/Happy_SPA_4.jpeg", category: "spa", title: "Centru SPA" },
  { src: "/images/happy-place/Happy_SPA_5.jpeg", category: "spa", title: "Centru SPA" },
  { src: "/images/happy-place/Happy_SPA_6.jpeg", category: "spa", title: "Centru SPA" },
  { src: "/images/happy-place/Happy_SPA_7.jpeg", category: "spa", title: "Centru SPA" },
  { src: "/images/happy-place/Happy_SPA_8.jpeg", category: "spa", title: "Centru SPA" },
  { src: "/images/happy-place/Happy_SPA_9.jpeg", category: "spa", title: "Centru SPA" },
  { src: "/images/happy-place/Happy_SPA_10.jpeg", category: "spa", title: "Centru SPA" },
  // Restaurant NOIR (7)
  { src: "/images/happy-place/Happy_Restaurant_1.jpeg", category: "restaurant", title: "Restaurant NOIR" },
  { src: "/images/happy-place/Happy_Restaurant_2.jpeg", category: "restaurant", title: "Restaurant NOIR" },
  { src: "/images/happy-place/Happy_Restaurant_3.jpeg", category: "restaurant", title: "Restaurant NOIR" },
  { src: "/images/happy-place/Happy_Restaurant_4.jpeg", category: "restaurant", title: "Restaurant NOIR" },
  { src: "/images/happy-place/Happy_Restaurant_5.jpeg", category: "restaurant", title: "Restaurant NOIR" },
  { src: "/images/happy-place/Happy_Restaurant_6.jpeg", category: "restaurant", title: "Restaurant NOIR" },
  { src: "/images/happy-place/Happy_Restaurant_7.jpeg", category: "restaurant", title: "Restaurant NOIR" },
  // Parcare (6)
  { src: "/images/happy-place/Happy_Parcare_1.jpeg", category: "parcare", title: "Parcare subterană" },
  { src: "/images/happy-place/Happy_Parcare_2.jpeg", category: "parcare", title: "Parcare subterană" },
  { src: "/images/happy-place/Happy_Parcare_3.jpeg", category: "parcare", title: "Parcare subterană" },
  { src: "/images/happy-place/Happy_Parcare_4.jpeg", category: "parcare", title: "Parcare subterană" },
  { src: "/images/happy-place/Happy_Parcare_5.jpeg", category: "parcare", title: "Parcare subterană" },
  { src: "/images/happy-place/Happy_Parcare_6.jpeg", category: "parcare", title: "Parcare subterană" },
  // Zone exterior (12)
  { src: "/images/happy-place/Happy_Exterior_1.jpeg", category: "exterior", title: "Complex Silver Mountain" },
  { src: "/images/happy-place/Happy_Exterior_2.jpeg", category: "exterior", title: "Complex Silver Mountain" },
  { src: "/images/happy-place/Happy_Exterior_3.jpeg", category: "exterior", title: "Complex Silver Mountain" },
  { src: "/images/happy-place/Happy_Exterior_4.jpeg", category: "exterior", title: "Complex Silver Mountain" },
  { src: "/images/happy-place/Happy_Exterior_5.jpeg", category: "exterior", title: "Complex Silver Mountain" },
  { src: "/images/happy-place/Happy_Exterior_6.jpeg", category: "exterior", title: "Complex Silver Mountain" },
  { src: "/images/happy-place/Happy_Exterior_7.jpeg", category: "exterior", title: "Complex Silver Mountain" },
  { src: "/images/happy-place/Happy_Exterior_8.jpeg", category: "exterior", title: "Complex Silver Mountain" },
  { src: "/images/happy-place/Happy_Exterior_9.jpeg", category: "exterior", title: "Complex Silver Mountain" },
  { src: "/images/happy-place/Happy_Exterior_10.jpeg", category: "exterior", title: "Complex Silver Mountain" },
  { src: "/images/happy-place/Happy_Exterior_11.jpeg", category: "exterior", title: "Complex Silver Mountain" },
  { src: "/images/happy-place/Happy_Exterior_12.jpeg", category: "exterior", title: "Complex Silver Mountain" },
  { src: "/images/happy-place/Happy_Exterior_13.jpeg", category: "exterior", title: "Complex Silver Mountain" },
  { src: "/images/happy-place/Happy_Exterior_14.jpeg", category: "exterior", title: "Complex Silver Mountain" },
  { src: "/images/happy-place/Happy_Exterior_15.jpeg", category: "exterior", title: "Complex Silver Mountain" },
  // Hol (3)
  { src: "/images/happy-place/Happy_Hol_1.jpeg", category: "hol", title: "Hol" },
  { src: "/images/happy-place/Happy_Hol_2.jpeg", category: "hol", title: "Hol" },
  { src: "/images/happy-place/Happy_Hol_3.jpeg", category: "hol", title: "Hol" },
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
    image: "/images/happy-place/Happy_SPA_1.jpeg",
    icon: "💆",
    gallery: [
      "/images/happy-place/Happy_SPA_1.jpeg",
      "/images/happy-place/Happy_SPA_2.jpeg",
      "/images/happy-place/Happy_SPA_3.jpeg",
      "/images/happy-place/Happy_SPA_4.jpeg",
      "/images/happy-place/Happy_SPA_5.jpeg",
      "/images/happy-place/Happy_SPA_6.jpeg",
      "/images/happy-place/Happy_SPA_7.jpeg",
      "/images/happy-place/Happy_SPA_8.jpeg",
      "/images/happy-place/Happy_SPA_9.jpeg",
      "/images/happy-place/Happy_SPA_10.jpeg",
    ],
  },
  {
    slug: "restaurant-noir",
    title: "Restaurant NOIR",
    shortDescription:
      "Preparate culinare de excepție în restaurantul complexului, cu evenimente ocazionale de muzică live în serile de sâmbătă.",
    description:
      "Restaurantul NOIR din complexul Silver Mountain este locul perfect pentru clipe memorabile petrecute într-un ambient select. Staff-ul profesionist vă asigură buna-dispoziție, iar meniul oferă preparate culinare de excepție, pizza și o selecție de vinuri.\n\nÎn serile de sâmbătă se organizează ocazional evenimente cu muzică live și atmosferă relaxată. La Restaurantul NOIR se organizează în fiecare an seri cu meniu special și program artistic de Crăciun și de Revelion. Restaurantul este deschis pentru toate mesele zilei, fiind ideal atât pentru mic dejun, cât și pentru cină în familie sau în cuplu.\n\nSituat în clădirea multifuncțională, la doar 50 m de apartamentul Happy Place, restaurantul este accesibil ușor fără mașină.\n\nMic dejun bufet suedez:\n• Program: 08:30 - 10:30\n• Preț: 99 lei/persoană\n• Bufet foarte bogat: omletă, iaurt, brânzeturi, mezeluri, prăjituri, fructe, cafea, sucuri și chiar șampanie\n\nMicul dejun se servește la restaurantul NOIR, în aceeași clădire cu SPA-ul. Plata se face separat la restaurant.",
    image: "/images/happy-place/Happy_Restaurant_1.jpeg",
    icon: "🍽️",
    gallery: [
      "/images/happy-place/Happy_Restaurant_1.jpeg",
      "/images/happy-place/Happy_Restaurant_2.jpeg",
      "/images/happy-place/Happy_Restaurant_3.jpeg",
      "/images/happy-place/Happy_Restaurant_4.jpeg",
      "/images/happy-place/Happy_Restaurant_5.jpeg",
      "/images/happy-place/Happy_Restaurant_6.jpeg",
      "/images/happy-place/Happy_Restaurant_7.jpeg",
    ],
  },
  {
    slug: "parcare-subterana",
    title: "Parcare subteran cu pază 24/7",
    shortDescription:
      "Loc de parcare subteran cu pază non-stop, inclus în prețul cazării.",
    description:
      "Oaspeții apartamentului Happy Place beneficiază de un loc de parcare subteran cu pază 24/7, inclus în prețul cazării. Uiți iarna de grija deszăpezirii mașinii, iar vara, automobilul îți este protejat de căldura excesivă a soarelui.\n\nAccesul se face direct din complex, fără a fi nevoie să parcați pe stradă. Parcarea asigură securitatea vehiculului pe tot parcursul sejurului.",
    image: "/images/happy-place/Happy_Parcare_1.jpeg",
    icon: "🚗",
    gallery: [
      "/images/happy-place/Happy_Parcare_1.jpeg",
      "/images/happy-place/Happy_Parcare_2.jpeg",
      "/images/happy-place/Happy_Parcare_3.jpeg",
      "/images/happy-place/Happy_Parcare_4.jpeg",
      "/images/happy-place/Happy_Parcare_5.jpeg",
      "/images/happy-place/Happy_Parcare_6.jpeg",
    ],
  },
  {
    slug: "loc-de-joaca",
    title: "Loc de joacă exterior pentru copii",
    shortDescription:
      "Loc de joacă exterior în complex, ideal pentru familii cu copii mici.",
    description:
      "Complexul Silver Mountain dispune de un loc de joacă exterior pentru copii, perfect pentru oaspeții care călătoresc în familie. Copiii se pot bucura de spațiu de joacă în siguranță, în timp ce părinții se relaxează în SPA sau la restaurant.\n\nExistă și teren de fotbal și grădină amenajată în complex, pentru activități în aer liber.",
    image: "/images/happy-place/Happy_Joaca2.jpeg",
    icon: "🧸",
    gallery: [
      "/images/happy-place/Happy_Joaca2.jpeg",
    ],
  },
  {
    slug: "sala-fitness",
    title: "Sală de fitness",
    shortDescription:
      "Sală de fitness complet echipată în clădirea multifuncțională a complexului.",
    description:
      "Sală de fitness complet echipată, situată în clădirea multifuncțională a complexului Silver Mountain, lângă piscină. Accesibilă oaspeților pentru menținerea formei fizice pe parcursul sejurului.\n\nIdeală pentru o sesiune de exerciții dimineața, înainte de a ieși pe pârtie sau de a explora zona Poiana Brașov.",
    image: "/images/happy-place/Happy_Fitness.jpeg",
    icon: "🏋️",
    gallery: [
      "/images/happy-place/Happy_Fitness.jpeg",
    ],
  },
  {
    slug: "schi-snowboard",
    title: "Schi & Snowboard",
    shortDescription:
      "Pârtii de schi accesibile iarna cu ski-bus din fața complexului.",
    description:
      "Poiana Brașov oferă condiții excelente pentru schi și snowboard, cu pârtii de dificultate variată. Pârtiile de schi sunt accesibile iarna cu ski-bus care pleacă direct din fața complexului Silver Mountain.\n\nEchipament de schi poate fi închiriat la fața locului, iar școli de schi cu instructori calificați sunt disponibile pentru începători. Sezonul de schi se întinde de obicei din decembrie până în martie.\n\nDupă o zi pe pârtie, centrul SPA din complex este locul ideal pentru relaxare musculară în jacuzzi sau saună.",
    image: "/images/happy-place/Happy_Exterior_3.jpeg",
    icon: "⛷️",
    gallery: [
      "/images/happy-place/Happy_Exterior_3.jpeg",
      "/images/happy-place/Happy_Exterior_4.jpeg",
    ],
  },
  {
    slug: "spatii-acces-gratuit",
    title: "Spații cu acces gratuit",
    shortDescription:
      "Loc de joacă exterior pentru copii, teren de mini fotbal, ping-pong, badminton și parcare cu stații de încărcare auto electrice.",
    description:
      "Complexul Silver Mountain oferă oaspeților Happy Place acces gratuit la mai multe spații de recreere în aer liber.\n\nCopiii se pot bucura de locul de joacă exterior amenajat în siguranță, iar pentru activitățile sportive aveți la dispoziție teren de mini fotbal, masă de ping-pong și teren de badminton.\n\nParcarea exterioară este gratuită pentru vizitatori și dispune de stații de încărcare pentru mașini electrice.\n\nToate aceste facilități sunt incluse gratuit în sejurul dumneavoastră, fără costuri suplimentare.",
    image: "/images/happy-place/Happy_Spatii2.jpeg",
    icon: "🧸",
    gallery: [
      "/images/happy-place/Happy_Spatii2.jpeg",
      "/images/happy-place/Happy_Joaca.jpeg",
      "/images/happy-place/Happy_Exterior_1.jpeg",
      "/images/happy-place/Happy_Exterior_2.jpeg",
    ],
  },
];

export function getAmenityBySlug(slug: string): Amenity | undefined {
  return amenities.find((a) => a.slug === slug);
}

// ============ DREAM STUDIO ============

export const dreamStudio = {
  name: "Dream Studio",
  slug: "dream-studio",
  address: "Strada Doinașului, Nr. 10, Bloc C, Et. 1, Ap. 09",
  city: "Poiana Brașov, România",
  complex: "Silver Mountain Resort & SPA",
  size: 54,
  capacity: "4 Persoane",
  beds: "Pat Queen Size + canapea extensibilă",
  baths: 2,
  heroImage: "/images/dream-studio/Dream_Balcon_1.jpeg",
  description:
    "Așa cum îi spune și numele, Dream Studio este locul ideal unde confortul modern întâlnește relaxarea absolută. Situat în cadrul selectului complex Silver Mountain, acest studio open-space impresionează prin spațiul său generos și designul interior cald, fiind refugiul perfect pentru cupluri, familii mici sau prieteni care caută o evadare la munte. Acest studio elegant combină perfect rafinamentul unui hotel de lux cu intimitatea și confortul propriului tău sanctuar montan.\n\nPiesa de rezistență a proprietății este balconul privat cu vedere directă spre piscină și peisajul montan din jur. Este locul perfect unde să îți începi dimineața respirând aerul curat de munte sau unde să te relaxezi seara, într-o atmosferă liniștită și exclusivistă.\n\nDeși este un studio, proprietatea sparge tiparele și îți oferă un nivel de confort rar întâlnit: 2 băi. Astfel, te bucuri de toată intimitatea și spațiul de care ai nevoie, fără niciun compromis.",
};

export const dreamSpaces: Space[] = [
  {
    slug: "dream-living",
    name: "Living & Dormitor",
    price: 0,
    size: 32,
    capacity: "4 Persoane",
    beds: "Pat Queen Size + canapea extensibilă",
    baths: 2,
    image: "/images/dream-studio/Dream_Living_1.jpeg",
    gallery: [
      "/images/dream-studio/Dream_Living_1.jpeg",
      "/images/dream-studio/Dream_Living_2.jpeg",
      "/images/dream-studio/Dream_Living_3.jpeg",
      "/images/dream-studio/Dream_Living_4.jpeg",
      "/images/dream-studio/Dream_Living_5.jpeg",
      "/images/dream-studio/Dream_Living_6.jpeg",
      "/images/dream-studio/Dream_Living_7.jpeg",
      "/images/dream-studio/Dream_Living_8.jpeg",
      "/images/dream-studio/Dream_Dormitor_1.jpeg",
      "/images/dream-studio/Dream_Dormitor_2.jpeg",
      "/images/dream-studio/Dream_Dormitor_3.jpeg",
      "/images/dream-studio/Dream_Dormitor_4.jpeg",
      "/images/dream-studio/Dream_Dormitor_5.jpeg",
      "/images/dream-studio/Dream_Dormitor_6.jpeg",
      "/images/dream-studio/Dream_Dormitor_7.jpeg",
    ],
    description:
      "Studio open-space generos de 32 m², combină zona de living cu dormitorul într-un spațiu aerisit și modern. Pat Queen Size confortabil și canapea extensibilă pentru oaspeți suplimentari. Design cald cu accente de lux, TV cu ecran plat și vedere spre balcon.\n\nSpațiul este gândit pentru relaxare maximă, cu zone bine delimitate pentru somn, relaxare și luat masa. Lumina naturală abundentă creează o atmosferă primitoare pe tot parcursul zilei.",
    facilities: [
      "Pat Queen Size",
      "Canapea extensibilă",
      "TV cu ecran plat",
      "Lenjerie de pat",
      "Prosoape",
      "Încălzire",
      "Vedere spre balcon",
    ],
  },
  {
    slug: "dream-bucatarie",
    name: "Bucătărie",
    price: 0,
    size: 5,
    capacity: "Self-catering",
    beds: "-",
    baths: 0,
    image: "/images/dream-studio/Dream_Bucatarie_1.jpeg",
    gallery: [
      "/images/dream-studio/Dream_Bucatarie_1.jpeg",
      "/images/dream-studio/Dream_Bucatarie_2.jpeg",
      "/images/dream-studio/Dream_Bucatarie_3.jpeg",
      "/images/dream-studio/Dream_Bucatarie_4.jpeg",
      "/images/dream-studio/Dream_Bucatarie_5.jpeg",
    ],
    description:
      "Bucătărie compactă dar complet utilată de 5 m², cu toate electrocasnicele necesare pentru a pregăti mese complete. Frigider de mari dimensiuni, espressor Nespresso + capsule cafea gratuite.\n\nIdeală pentru micul dejun rapid sau pentru o cină relaxantă după o zi pe pârtie.",
    facilities: [
      "Plită incorporată în blat",
      "Hotă",
      "Frigider de mari dimensiuni",
      "Espressor Nespresso",
      "Capsule cafea gratuite",
      "Vase și ustensile complete",
      "Microunde",
    ],
  },
  {
    slug: "dream-bai",
    name: "2 băi private",
    price: 0,
    size: 7,
    capacity: "2 băi",
    beds: "-",
    baths: 2,
    image: "/images/dream-studio/Dream_Baie_1.jpeg",
    gallery: [
      "/images/dream-studio/Dream_Baie_1.jpeg",
      "/images/dream-studio/Dream_Baie_2.jpeg",
      "/images/dream-studio/Dream_Baie_3.jpeg",
      "/images/dream-studio/Dream_Baie_4.jpeg",
      "/images/dream-studio/Dream_Baie_5.jpeg",
      "/images/dream-studio/Dream_Baie_6.jpeg",
      "/images/dream-studio/Dream_Baie_7.jpeg",
    ],
    description:
      "Dream Studio dispune de 2 băi — un lux rar pentru un studio.\n\nAmbele băi sunt dotate cu articole de toaletă gratuite, prosoape, papuci de casă și usucător de păr.",
    facilities: [
      "2 băi",
      "Articole de toaletă gratuite",
      "Prosoape",
      "Papuci de casă",
      "Usucător de păr",
    ],
  },
  {
    slug: "dream-balcon",
    name: "Balcon cu vedere spre piscină",
    price: 0,
    size: 9,
    capacity: "Vedere spre piscină",
    beds: "-",
    baths: 0,
    image: "/images/dream-studio/Dream_Balcon_main.jpeg",
    gallery: [
      "/images/dream-studio/Dream_Balcon_main.jpeg",
      "/images/dream-studio/Dream_Balcon_2.jpeg",
      "/images/dream-studio/Dream_Balcon_3.jpeg",
      "/images/dream-studio/Dream_Balcon_4.jpeg",
      "/images/dream-studio/Dream_Balcon_5.jpeg",
    ],
    description:
      "Balcon privat de 9 m² cu vedere directă spre piscină și peisajul montan din jur. Piesa de rezistență a proprietății.\n\nLocul perfect unde să îți începi dimineața respirând aerul curat de munte sau unde să te relaxezi seara, într-o atmosferă liniștită și exclusivistă.",
    facilities: [
      "Vedere spre piscină",
      "Vedere la munte",
      "Mobilier de balcon",
      "Intim și exclusivist",
    ],
  },
  {
    slug: "dream-hol",
    name: "Hol de intrare",
    price: 0,
    size: 4,
    capacity: "Spațiu de tranziție",
    beds: "-",
    baths: 0,
    image: "/images/dream-studio/Dream_Hol_1.jpeg",
    gallery: [
      "/images/dream-studio/Dream_Hol_1.jpeg",
      "/images/dream-studio/Dream_Hol_2.jpeg",
      "/images/dream-studio/Dream_Hol_3.jpeg",
    ],
    description:
      "Hol de intrare spațios de 4 m², cu oglinzi. Primește oaspeții cu o atmosferă caldă și primitoare.",
    facilities: [
      "Oglindă",
      "Cuier",
      "Încălțăminte",
    ],
  },
];

export type DreamGalleryCategory =
  | "toate"
  | "living"
  | "dormitor"
  | "bucatarie"
  | "bai"
  | "balcon"
  | "hol";

export const dreamGalleryImages: GalleryImage[] = [
  // Living (8)
  { src: "/images/dream-studio/Dream_Living_1.jpeg", category: "living", title: "Living & Dormitor" },
  { src: "/images/dream-studio/Dream_Living_2.jpeg", category: "living", title: "Living & Dormitor" },
  { src: "/images/dream-studio/Dream_Living_3.jpeg", category: "living", title: "Living & Dormitor" },
  { src: "/images/dream-studio/Dream_Living_4.jpeg", category: "living", title: "Living & Dormitor" },
  { src: "/images/dream-studio/Dream_Living_5.jpeg", category: "living", title: "Living & Dormitor" },
  { src: "/images/dream-studio/Dream_Living_6.jpeg", category: "living", title: "Living & Dormitor" },
  { src: "/images/dream-studio/Dream_Living_7.jpeg", category: "living", title: "Living & Dormitor" },
  { src: "/images/dream-studio/Dream_Living_8.jpeg", category: "living", title: "Living & Dormitor" },
  // Dormitor (7)
  { src: "/images/dream-studio/Dream_Dormitor_1.jpeg", category: "dormitor", title: "Dormitor" },
  { src: "/images/dream-studio/Dream_Dormitor_2.jpeg", category: "dormitor", title: "Dormitor" },
  { src: "/images/dream-studio/Dream_Dormitor_3.jpeg", category: "dormitor", title: "Dormitor" },
  { src: "/images/dream-studio/Dream_Dormitor_4.jpeg", category: "dormitor", title: "Dormitor" },
  { src: "/images/dream-studio/Dream_Dormitor_5.jpeg", category: "dormitor", title: "Dormitor" },
  { src: "/images/dream-studio/Dream_Dormitor_6.jpeg", category: "dormitor", title: "Dormitor" },
  { src: "/images/dream-studio/Dream_Dormitor_7.jpeg", category: "dormitor", title: "Dormitor" },
  // Bucătărie (5)
  { src: "/images/dream-studio/Dream_Bucatarie_1.jpeg", category: "bucatarie", title: "Bucătărie" },
  { src: "/images/dream-studio/Dream_Bucatarie_2.jpeg", category: "bucatarie", title: "Bucătărie" },
  { src: "/images/dream-studio/Dream_Bucatarie_3.jpeg", category: "bucatarie", title: "Bucătărie" },
  { src: "/images/dream-studio/Dream_Bucatarie_4.jpeg", category: "bucatarie", title: "Bucătărie" },
  { src: "/images/dream-studio/Dream_Bucatarie_5.jpeg", category: "bucatarie", title: "Bucătărie" },
  // Băi (7)
  { src: "/images/dream-studio/Dream_Baie_1.jpeg", category: "bai", title: "Baie" },
  { src: "/images/dream-studio/Dream_Baie_2.jpeg", category: "bai", title: "Baie" },
  { src: "/images/dream-studio/Dream_Baie_3.jpeg", category: "bai", title: "Baie" },
  { src: "/images/dream-studio/Dream_Baie_4.jpeg", category: "bai", title: "Baie" },
  { src: "/images/dream-studio/Dream_Baie_5.jpeg", category: "bai", title: "Baie" },
  { src: "/images/dream-studio/Dream_Baie_6.jpeg", category: "bai", title: "Baie" },
  { src: "/images/dream-studio/Dream_Baie_7.jpeg", category: "bai", title: "Baie" },
  // Balcon (5)
  { src: "/images/dream-studio/Dream_Balcon_1.jpeg", category: "balcon", title: "Balcon" },
  { src: "/images/dream-studio/Dream_Balcon_2.jpeg", category: "balcon", title: "Balcon" },
  { src: "/images/dream-studio/Dream_Balcon_3.jpeg", category: "balcon", title: "Balcon" },
  { src: "/images/dream-studio/Dream_Balcon_4.jpeg", category: "balcon", title: "Balcon" },
  { src: "/images/dream-studio/Dream_Balcon_5.jpeg", category: "balcon", title: "Balcon" },
  // Hol (3)
  { src: "/images/dream-studio/Dream_Hol_1.jpeg", category: "hol", title: "Hol" },
  { src: "/images/dream-studio/Dream_Hol_2.jpeg", category: "hol", title: "Hol" },
  { src: "/images/dream-studio/Dream_Hol_3.jpeg", category: "hol", title: "Hol" },
  // Exterior (15 — comune cu Happy Place)
  { src: "/images/happy-place/Happy_Exterior_1.jpeg", category: "exterior", title: "Complex Silver Mountain" },
  { src: "/images/happy-place/Happy_Exterior_2.jpeg", category: "exterior", title: "Complex Silver Mountain" },
  { src: "/images/happy-place/Happy_Exterior_3.jpeg", category: "exterior", title: "Complex Silver Mountain" },
  { src: "/images/happy-place/Happy_Exterior_4.jpeg", category: "exterior", title: "Complex Silver Mountain" },
  { src: "/images/happy-place/Happy_Exterior_5.jpeg", category: "exterior", title: "Complex Silver Mountain" },
  { src: "/images/happy-place/Happy_Exterior_6.jpeg", category: "exterior", title: "Complex Silver Mountain" },
  { src: "/images/happy-place/Happy_Exterior_7.jpeg", category: "exterior", title: "Complex Silver Mountain" },
  { src: "/images/happy-place/Happy_Exterior_8.jpeg", category: "exterior", title: "Complex Silver Mountain" },
  { src: "/images/happy-place/Happy_Exterior_9.jpeg", category: "exterior", title: "Complex Silver Mountain" },
  { src: "/images/happy-place/Happy_Exterior_10.jpeg", category: "exterior", title: "Complex Silver Mountain" },
  { src: "/images/happy-place/Happy_Exterior_11.jpeg", category: "exterior", title: "Complex Silver Mountain" },
  { src: "/images/happy-place/Happy_Exterior_12.jpeg", category: "exterior", title: "Complex Silver Mountain" },
  { src: "/images/happy-place/Happy_Exterior_13.jpeg", category: "exterior", title: "Complex Silver Mountain" },
  { src: "/images/happy-place/Happy_Exterior_14.jpeg", category: "exterior", title: "Complex Silver Mountain" },
  { src: "/images/happy-place/Happy_Exterior_15.jpeg", category: "exterior", title: "Complex Silver Mountain" },
];

export const dreamSliderImages = [
  { src: "/images/dream-studio/Dream_Balcon_1.jpeg", alt: "Balcon cu vedere spre piscină" },
  { src: "/images/dream-studio/Dream_Living_1.jpeg", alt: "Living & Dormitor" },
  { src: "/images/dream-studio/Dream_Dormitor_1.jpeg", alt: "Dormitor" },
  { src: "/images/dream-studio/Dream_Bucatarie_1.jpeg", alt: "Bucătărie" },
  { src: "/images/dream-studio/Dream_Baie_1.jpeg", alt: "Baie" },
  { src: "/images/dream-studio/Dream_Balcon_2.jpeg", alt: "Balcon" },
  { src: "/images/dream-studio/Dream_Living_3.jpeg", alt: "Living & Dormitor" },
  { src: "/images/dream-studio/Dream_Balcon_4.jpeg", alt: "Balcon" },
  { src: "/images/dream-studio/Dream_Dormitor_3.jpeg", alt: "Dormitor" },
];

export function getDreamSpaceBySlug(slug: string): Space | undefined {
  return dreamSpaces.find((s) => s.slug === slug);
}
