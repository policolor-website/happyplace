"use client";

import { useState, useEffect, useCallback } from "react";
import Reveal from "./Reveal";

interface Review {
  name: string;
  rating: number;
  text: string;
}

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-1 mb-4">
    {Array.from({ length: rating }).map((_, i) => (
      <span key={i} className="text-gold text-lg">★</span>
    ))}
  </div>
);

export default function ReviewsSlider({ title, reviews }: { title: string; reviews: Review[] }) {
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

  const total = reviews.length;
  const maxIndex = total - visibleCount;

  const next = useCallback(() => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="py-16 bg-night overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-12">
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Părerea oaspeților
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">
            {title}
          </h2>
          <div className="w-24 h-px gold-line mx-auto mt-6" />
        </Reveal>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-[1200ms] ease-in-out gap-6"
            style={{
              transform: `translateX(-${current * (100 / visibleCount)}%)`,
            }}
          >
            {reviews.map((review, i) => (
              <div
                key={`${review.name}-${i}`}
                className="shrink-0"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <div className="bg-night-light border border-border-dark p-8 h-full card-hover">
                  <Stars rating={review.rating} />
                  <p className="text-cream/80 text-sm leading-relaxed mb-6 italic line-clamp-6">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <p className="text-gold font-semibold text-sm">— {review.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                current === i
                  ? "w-8 bg-gold"
                  : "w-2 bg-border-dark hover:bg-gold/50"
              }`}
              aria-label={`Review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
