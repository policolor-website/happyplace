"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const sliderImages = [
  { src: "/images/pensiunea-angela/328.jpg", alt: "Exterior Pensiunea Angela" },
  { src: "/images/pensiunea-angela/354.jpg", alt: "Camera triplă" },
  { src: "/images/agrement/62-screen.jpg", alt: "Centru SPA" },
  { src: "/images/pensiunea-angela/358.jpg", alt: "Camera dublă" },
  { src: "/images/agrement/275-screen.jpg", alt: "Turism ecvestru" },
  { src: "/images/pensiunea-angela/364.jpg", alt: "Restaurant" },
  { src: "/images/pensiunea-angela/383.jpg", alt: "Casuța din copac" },
  { src: "/images/agrement/19-screen.jpg", alt: "Pârtii de schi" },
  { src: "/images/pensiunea-angela/389.jpg", alt: "SPA" },
  { src: "/images/pensiunea-angela/335.jpg", alt: "Exterior Pensiunea Angela" },
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateCount = () => {
      setVisibleCount(window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const total = sliderImages.length;
  const maxIndex = total - visibleCount;

  const next = useCallback(() => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-12 bg-night overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Galerie
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">
            Descoperă Pensiunea Angela
          </h2>
          <div className="w-24 h-px gold-line mx-auto mt-6" />
        </div>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-[1200ms] ease-in-out gap-4"
            style={{
              transform: `translateX(-${current * (100 / visibleCount)}%)`,
            }}
          >
            {sliderImages.map((img, i) => (
              <div
                key={i}
                className="relative aspect-4/3 md:aspect-16/9 shrink-0 overflow-hidden border border-border-dark group"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-night/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-cream text-sm font-medium">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                current === i
                  ? "w-8 bg-gold"
                  : "w-2 bg-border-dark hover:bg-gold/50"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
