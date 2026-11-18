'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Flame } from 'lucide-react';

const SLIDES = [
  {
    title: 'Wok & Toss Brand Cover',
    subtitle: 'Chinese Food • Freshly Tossed',
    src: '/assets/slides/slide-1-cover.webp',
  },
  {
    title: 'Soups & Crispy Fried',
    subtitle: 'Hot & Sour Broths, Wings & Drumsticks',
    src: '/assets/slides/slide-2-soups-fried.webp',
  },
  {
    title: 'Chicken & Beef Rice Bowls',
    subtitle: 'Signature Gravies Served with Rice',
    src: '/assets/slides/slide-3-rice-bowls.webp',
  },
  {
    title: 'Bowls & Wok Fried Rice',
    subtitle: 'Classic Prawn, Egg & Beef Fried Rice',
    src: '/assets/slides/slide-4-bowls-rice.webp',
  },
  {
    title: 'Chowmein & Wok Boxes',
    subtitle: 'Signature Charred Noodles & Lunch Combos',
    src: '/assets/slides/slide-5-chowmein.webp',
  },
  {
    title: 'Gourmet Loaded Chips',
    subtitle: 'Crisp Fries Topped with Wok Reductions',
    src: '/assets/slides/slide-6-chips.webp',
  },
  {
    title: 'Sauce Dishes & Entrees',
    subtitle: 'Full Chicken & Beef Gravies',
    src: '/assets/slides/slide-7-sauce-dishes.webp',
  },
  {
    title: 'Prawns & Grand Platters',
    subtitle: 'Seafood Specials & Family Sharing Boxes',
    src: '/assets/slides/slide-8-prawns-platters.webp',
  },
  {
    title: 'Broke But Hungry Student Deals',
    subtitle: 'Budget Chowmein & Appetizer Combos',
    src: '/assets/slides/slide-9-student-deals.webp',
  },
];

export default function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-smokedSoy text-ricePaper overflow-hidden border-t border-toastedSesame/20" id="brand-archives">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-toastedSesame/40 bg-smokedSoy-950/80 text-xs font-semibold uppercase tracking-widest text-toastedSesame mb-4">
            <Flame className="w-3.5 h-3.5 text-roastedChilli" />
            <span>Official Brand Visual Archive</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-warmPorcelain">
            The Original Wok &amp; Toss Carousel
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ricePaper/80 leading-relaxed font-sans">
            Inspect the high-resolution brand slides that establish Wok &amp; Toss&apos;s signature black-and-gold visual identity, culinary categories, and spice tiers.
          </p>
        </div>

        {/* Carousel Showcase */}
        <div className="mt-12 relative max-w-2xl mx-auto">
          <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full rounded-3xl overflow-hidden border-2 border-toastedSesame/30 bg-smokedSoy-950 shadow-2xl">
            <Image
              src={SLIDES[currentIndex].src}
              alt={SLIDES[currentIndex].title}
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-contain"
              priority={currentIndex === 0}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-smokedSoy-950 via-smokedSoy-950/80 to-transparent p-6 text-center">
              <span className="text-xs uppercase tracking-widest text-toastedSesame font-semibold block">
                Slide {currentIndex + 1} of {SLIDES.length}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-warmPorcelain mt-1">
                {SLIDES[currentIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-ricePaper/70 mt-0.5">
                {SLIDES[currentIndex].subtitle}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-smokedSoy-950/90 border border-toastedSesame/40 text-warmPorcelain hover:text-toastedSesame hover:bg-smokedSoy flex items-center justify-center shadow-lg transition-all focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-smokedSoy-950/90 border border-toastedSesame/40 text-warmPorcelain hover:text-toastedSesame hover:bg-smokedSoy flex items-center justify-center shadow-lg transition-all focus:outline-none"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Thumbnail Selector Strip */}
        <div className="mt-8 flex justify-center items-center gap-2 overflow-x-auto pb-4 max-w-3xl mx-auto px-4">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.title}
              onClick={() => setCurrentIndex(index)}
              className={`relative w-14 h-18 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                currentIndex === index
                  ? 'border-roastedChilli scale-110 shadow-lg'
                  : 'border-toastedSesame/20 opacity-60 hover:opacity-100'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <Image
                src={slide.src}
                alt={slide.title}
                width={56}
                height={72}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
