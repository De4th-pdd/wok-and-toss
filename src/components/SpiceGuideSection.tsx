'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Flame, MessageCircle, Info } from 'lucide-react';
import { siteConfig } from '@/lib/config';

interface SpiceCategoryData {
  id: string;
  categoryTitle: string;
  subtitle: string;
  levels: {
    label: string;
    levelName: string;
    heatRank: number; // 0 to 5
    colorTheme: {
      bg: string;
      text: string;
      border: string;
      dot: string;
    };
    description: string;
    dishes: string[];
  }[];
}

const SPICE_GUIDES: SpiceCategoryData[] = [
  {
    id: 'noodles',
    categoryTitle: 'Noodles & Chowmein',
    subtitle: 'From gentle garlic-soy tosses to blistered Sichuan chili woks',
    levels: [
      {
        label: 'Mild Heat',
        levelName: 'Mild',
        heatRank: 1,
        colorTheme: {
          bg: 'bg-amber-50',
          text: 'text-amber-900',
          border: 'border-amber-200',
          dot: 'bg-amber-500',
        },
        description: 'Gentle, comforting wok tosses highlighting aromatic garlic, scallions, and soy savory reduction without aggressive burn.',
        dishes: ['Classic Chicken Chowmein', 'Vegetable Chowmein'],
      },
      {
        label: 'Low to Medium Heat',
        levelName: 'Low to Medium',
        heatRank: 2,
        colorTheme: {
          bg: 'bg-orange-50',
          text: 'text-orange-900',
          border: 'border-orange-200',
          dot: 'bg-orange-500',
        },
        description: 'A noticeable, balanced warmth with cracked pepper and subtle chilies that complements succulent meats and mushrooms.',
        dishes: ['House Special Chowmein', 'Classic Beef Chowmein', 'Classic Prawn Chowmein', 'Shroom Chowmein'],
      },
      {
        label: 'Very Spicy Heat',
        levelName: 'Very Spicy',
        heatRank: 4,
        colorTheme: {
          bg: 'bg-red-50',
          text: 'text-red-950',
          border: 'border-red-300',
          dot: 'bg-red-600',
        },
        description: 'High-heat wok noodles tossed with fresh bird’s eye green chilies, chili flakes, and fiery Sichuan chili oils for true chili cravers.',
        dishes: ['Chilli Chicken Chowmein', 'Firecracker Chicken Chowmein'],
      },
    ],
  },
  {
    id: 'chicken-gravies',
    categoryTitle: 'Chicken Gravies',
    subtitle: '6-tier nuanced heat scale for rich, velvety wok reductions',
    levels: [
      {
        label: 'Not Spicy',
        levelName: 'Not Spicy',
        heatRank: 0,
        colorTheme: {
          bg: 'bg-stone-50',
          text: 'text-stone-800',
          border: 'border-stone-200',
          dot: 'bg-stone-400',
        },
        description: 'Sweet, velvety, or delicate nutty reductions without chili heat. Focused on pure richness and comforting flavors.',
        dishes: ['Sweet & Sassy Chicken', 'Golden Almond Chicken', 'Nutty Cashew Chicken'],
      },
      {
        label: 'Mild Heat',
        levelName: 'Mild',
        heatRank: 1,
        colorTheme: {
          bg: 'bg-amber-50',
          text: 'text-amber-900',
          border: 'border-amber-200',
          dot: 'bg-amber-500',
        },
        description: 'Subtle sweet-tangy or gentle Sichuan aromatics with smooth warming undertones.',
        dishes: ['Schezwan Chicken', 'Shashlik Stir Chicken'],
      },
      {
        label: 'Low to Medium Heat',
        levelName: 'Low to Medium',
        heatRank: 2,
        colorTheme: {
          bg: 'bg-orange-50',
          text: 'text-orange-900',
          border: 'border-orange-200',
          dot: 'bg-orange-500',
        },
        description: 'Classic Indo-Chinese savory balance with ginger, garlic, and fresh herbs.',
        dishes: ['OG Manchurian Chicken', 'Vegetable Chicken'],
      },
      {
        label: 'Medium Heat',
        levelName: 'Medium',
        heatRank: 3,
        colorTheme: {
          bg: 'bg-orange-100',
          text: 'text-orange-950',
          border: 'border-orange-300',
          dot: 'bg-orange-600',
        },
        description: 'Prominent cracked Sarawak black peppercorns offering deep, fragrant, peppery warmth.',
        dishes: ['Black Pepper Smash Chicken'],
      },
      {
        label: 'Spicy Heat',
        levelName: 'Spicy',
        heatRank: 4,
        colorTheme: {
          bg: 'bg-red-50',
          text: 'text-red-900',
          border: 'border-red-300',
          dot: 'bg-red-600',
        },
        description: 'Fiery wok-seared whole dried chilies, roasted peanuts, bird’s eye peppers, and caramelized onions.',
        dishes: ['Kung Pao Kick Chicken', 'Onion Fire Chicken', 'Chilli Dry Chicken'],
      },
      {
        label: 'Extra Spicy Heat',
        levelName: 'Extra Spicy',
        heatRank: 5,
        colorTheme: {
          bg: 'bg-roastedChilli-light',
          text: 'text-roastedChilli',
          border: 'border-roastedChilli/40',
          dot: 'bg-roastedChilli',
        },
        description: 'Maximum wok blaze: blistering chili pastes and ghost pepper reduction crafted for extreme heat enthusiasts.',
        dishes: ['Firecracker Chicken Gravy'],
      },
    ],
  },
  {
    id: 'beef-prawn-gravies',
    categoryTitle: 'Beef & Prawn Gravies',
    subtitle: 'Hearty wok gravies paired with caramelized onions and roasted garlic',
    levels: [
      {
        label: 'Low to Medium Heat',
        levelName: 'Low to Medium',
        heatRank: 2,
        colorTheme: {
          bg: 'bg-orange-50',
          text: 'text-orange-900',
          border: 'border-orange-200',
          dot: 'bg-orange-500',
        },
        description: 'Rich roasted garlic cloves and slow-aged dark soy reductions that elevate natural meat and seafood flavors.',
        dishes: ['Garlic Bomb Beef', 'Original Beef Gravy', 'Garlic Bomb Prawns', 'Garden Prawns'],
      },
      {
        label: 'Medium Heat',
        levelName: 'Medium',
        heatRank: 3,
        colorTheme: {
          bg: 'bg-orange-100',
          text: 'text-orange-950',
          border: 'border-orange-300',
          dot: 'bg-orange-600',
        },
        description: 'Wok-charred mushrooms, sweet capsicums, and cracked red pepper flakes in deep umami broth.',
        dishes: ['Veggie Fire Beef', 'Shroom Fire Beef', 'Veggie Fire Prawns'],
      },
      {
        label: 'Spicy Heat',
        levelName: 'Spicy',
        heatRank: 4,
        colorTheme: {
          bg: 'bg-red-50',
          text: 'text-red-900',
          border: 'border-red-300',
          dot: 'bg-red-600',
        },
        description: 'High-heat wok caramelized sweet onions tossed with beef or ocean prawns in dark chili reduction.',
        dishes: ['Onion Fire Beef', 'Onion Fire Prawns', 'Beef Chilli Dry'],
      },
      {
        label: 'Extra Spicy Heat',
        levelName: 'Extra Spicy',
        heatRank: 5,
        colorTheme: {
          bg: 'bg-roastedChilli-light',
          text: 'text-roastedChilli',
          border: 'border-roastedChilli/40',
          dot: 'bg-roastedChilli',
        },
        description: 'Intense chili reduction with crushed whole red chilies and garlic oil for beef and succulent jumbo prawns.',
        dishes: ['Firecracker Beef', 'Firecracker Prawns'],
      },
    ],
  },
];

export default function SpiceGuideSection() {
  const [activeTab, setActiveTab] = useState('noodles');
  const activeGuide = SPICE_GUIDES.find((g) => g.id === activeTab) || SPICE_GUIDES[0];

  return (
    <section className="py-20 bg-smokedSoy text-ricePaper relative overflow-hidden" id="spice-guide">
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-roastedChilli/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-toastedSesame/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-toastedSesame/30 bg-smokedSoy-950/80 text-xs font-semibold uppercase tracking-widest text-toastedSesame mb-4">
            <Flame className="w-3.5 h-3.5 text-roastedChilli" />
            <span>Art-Directed Heat Architecture</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-warmPorcelain">
            The Wok &amp; Toss Spice Guide
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ricePaper/80 leading-relaxed font-sans">
            Every dish at Wok &amp; Toss is prepared fresh to order. We don&apos;t believe in one generic heat scale—our spice profiles are tailored to the cut of meat, the wok glaze, and your personal craving.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3" role="tablist" aria-label="Spice Categories">
          {SPICE_GUIDES.map((guide) => (
            <button
              key={guide.id}
              role="tab"
              aria-selected={activeTab === guide.id}
              onClick={() => setActiveTab(guide.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 border ${
                activeTab === guide.id
                  ? 'bg-roastedChilli text-warmPorcelain border-roastedChilli shadow-lg scale-105'
                  : 'bg-smokedSoy-100 text-ricePaper/80 border-toastedSesame/20 hover:text-warmPorcelain hover:bg-smokedSoy-50'
              }`}
            >
              {guide.categoryTitle}
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="mt-12 bg-smokedSoy-950/80 rounded-3xl border border-toastedSesame/20 p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-toastedSesame/15 gap-4">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-warmPorcelain">
                {activeGuide.categoryTitle}
              </h3>
              <p className="mt-1 text-sm text-toastedSesame font-sans">
                {activeGuide.subtitle}
              </p>
            </div>
            <div className="flex items-center space-x-2 text-xs text-ricePaper/70 bg-smokedSoy-100/60 px-3 py-1.5 rounded-lg border border-toastedSesame/20 self-start sm:self-auto">
              <Info className="w-4 h-4 text-toastedSesame shrink-0" />
              <span>Click any dish to order on WhatsApp</span>
            </div>
          </div>

          {/* Vertical Heat Scale List */}
          <div className="mt-8 space-y-6">
            {activeGuide.levels.map((lvl) => (
              <div
                key={lvl.levelName}
                className="p-5 sm:p-6 rounded-2xl bg-smokedSoy-100/50 border border-toastedSesame/15 hover:border-toastedSesame/40 transition-colors flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                {/* Left: Heat Badge & Rank */}
                <div className="flex items-start sm:items-center space-x-4 shrink-0 lg:w-72">
                  <div className="flex items-center space-x-1 shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <Flame
                        key={i}
                        className={`w-4 h-4 ${
                          i < (lvl.heatRank === 0 ? 0 : lvl.heatRank)
                            ? 'text-roastedChilli fill-roastedChilli'
                            : 'text-smokedSoy-50 fill-none'
                        }`}
                      />
                    ))}
                  </div>
                  <div>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${lvl.colorTheme.bg} ${lvl.colorTheme.text} ${lvl.colorTheme.border}`}
                    >
                      {lvl.label}
                    </span>
                    <span className="block text-[11px] text-ricePaper/60 mt-0.5">
                      {lvl.heatRank === 0 ? 'Zero Chili Heat' : `Heat Intensity: Level ${lvl.heatRank} of 5`}
                    </span>
                  </div>
                </div>

                {/* Middle: Sensory Description */}
                <div className="flex-1">
                  <p className="text-sm text-ricePaper/85 leading-relaxed font-sans">
                    {lvl.description}
                  </p>
                </div>

                {/* Right: Dishes at this level */}
                <div className="lg:w-80 shrink-0">
                  <div className="text-[11px] uppercase tracking-wider text-toastedSesame font-semibold mb-2">
                    Dishes in this level:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {lvl.dishes.map((dish) => {
                      const msg = encodeURIComponent(
                        `Hi Wok & Toss! I'd like to order: ${dish} (${lvl.levelName} heat). Please confirm today's price and delivery availability.`
                      );
                      const waUrl = `https://wa.me/923191932923?text=${msg}`;

                      return (
                        <a
                          key={dish}
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 text-xs px-2.5 py-1 rounded-md bg-smokedSoy-950 text-warmPorcelain hover:text-toastedSesame border border-toastedSesame/20 hover:border-toastedSesame transition-all"
                          title={`Order ${dish} via WhatsApp`}
                        >
                          <span>{dish}</span>
                          <span className="text-roastedChilli text-[10px]">&rarr;</span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Spice Customization Box (Direct Brand Fact) */}
          <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-roastedChilli/20 via-toastedSesame/15 to-transparent border border-roastedChilli/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start space-x-3">
              <Flame className="w-5 h-5 text-roastedChilli shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-lg font-bold text-warmPorcelain">
                  Want Your Spice Level Customized?
                </h4>
                <p className="text-xs sm:text-sm text-ricePaper/80 font-sans mt-0.5">
                  The original graphics explicitly confirm that spice levels can be adjusted to your taste. Contact us on WhatsApp to request milder, extra hot, or tailored chili amounts.
                </p>
              </div>
            </div>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-roastedChilli hover:bg-roastedChilli-hover text-warmPorcelain text-xs font-semibold tracking-wide shrink-0 transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask for Custom Spice</span>
            </a>
          </div>
        </div>

        {/* Bottom CTA to explore all menu dishes */}
        <div className="mt-12 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border border-toastedSesame/40 text-ricePaper hover:text-warmPorcelain hover:bg-smokedSoy-100 transition-colors text-sm font-semibold"
          >
            <span>Browse Full Menu by Category</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
