"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryImages, dreamGalleryImages, type GalleryCategory } from "@/lib/data";
import Reveal from "@/components/Reveal";

type Apartment = "happy" | "dream";

const happyTabs: { key: GalleryCategory; label: string }[] = [
  { key: "toate", label: "Toate" },
  { key: "living", label: "Living" },
  { key: "dormitor", label: "Dormitor" },
  { key: "bucatarie", label: "Bucătărie" },
  { key: "bai", label: "Băi" },
  { key: "terasa", label: "Terasă" },
  { key: "spa", label: "SPA" },
  { key: "restaurant", label: "Restaurant" },
  { key: "parcare", label: "Parcare" },
  { key: "exterior", label: "Exterior" },
  { key: "hol", label: "Hol" },
];

const dreamTabs: { key: GalleryCategory; label: string }[] = [
  { key: "toate", label: "Toate" },
  { key: "living", label: "Living & Dormitor" },
  { key: "dormitor", label: "Dormitor" },
  { key: "bucatarie", label: "Bucătărie" },
  { key: "bai", label: "Băi" },
  { key: "balcon", label: "Balcon" },
  { key: "hol", label: "Hol" },
  { key: "exterior", label: "Exterior" },
];

export default function GalleryPage() {
  const [apartment, setApartment] = useState<Apartment>("happy");
  const [activeTab, setActiveTab] = useState<GalleryCategory>("toate");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const currentTabs = apartment === "happy" ? happyTabs : dreamTabs;
  const currentImages = apartment === "happy" ? galleryImages : dreamGalleryImages;

  const filtered =
    activeTab === "toate"
      ? currentImages
      : currentImages.filter((img) => img.category === activeTab);

  const switchApartment = (apt: Apartment) => {
    setApartment(apt);
    setActiveTab("toate");
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
        <div className="relative text-center mb-12 py-16">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={apartment === "happy" ? "/images/happy-place/Happy_Terasa_1.jpeg" : "/images/dream-studio/Dream_Balcon_1.jpeg"}
              alt=""
              fill
              className="object-cover opacity-10"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <h1 className="font-display text-5xl font-bold text-cream mb-4">Galerie</h1>
            <p className="text-muted text-lg">Happy Place & Dream Studio · Poiana Brașov</p>
            <div className="w-24 h-px gold-line mx-auto mt-6" />
          </div>
        </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Apartment selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <button
            onClick={() => switchApartment("happy")}
            className={`px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-all border ${
              apartment === "happy"
                ? "bg-gold text-night border-gold"
                : "bg-transparent text-cream border-border-dark hover:border-gold hover:text-gold"
            }`}
          >
            Happy Place
          </button>
          <button
            onClick={() => switchApartment("dream")}
            className={`px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-all border ${
              apartment === "dream"
                ? "bg-gold text-night border-gold"
                : "bg-transparent text-cream border-border-dark hover:border-gold hover:text-gold"
            }`}
          >
            Dream Studio
          </button>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {currentTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-2.5 text-sm font-semibold uppercase tracking-wider transition-all border ${
                activeTab === tab.key
                  ? "bg-gold text-night border-gold"
                  : "bg-transparent text-cream border-border-dark hover:border-gold hover:text-gold"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((img, i) => (
            <Reveal key={`${img.src}-${i}`} delay={(i % 4) * 60}>
              <button
                onClick={() => setLightbox(img.src)}
                className="relative aspect-square overflow-hidden block w-full cursor-pointer border-0 bg-transparent p-0 group"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-night/0 group-hover:bg-night/30 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-night/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-cream text-xs font-medium">{img.title}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-100 bg-night/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
          style={{ animation: "fadeIn 0.3s ease forwards" }}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-cream hover:text-gold text-3xl bg-transparent border-0 cursor-pointer"
          >
            ✕
          </button>
          <div className="relative w-full max-w-4xl aspect-4/3">
            <Image
              src={lightbox}
              alt="Galerie"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
