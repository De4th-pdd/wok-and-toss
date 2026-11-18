'use client';

import React, { useState } from 'react';
import { MENU_ITEMS } from '@/data/menu';
import { MessageCircle, CheckCircle2, Send, Edit3, Users, MapPin } from 'lucide-react';

export default function OrderStepSection() {
  const [selectedDishId, setSelectedDishId] = useState<string>(MENU_ITEMS[0]?.id || 'classic-chicken-chowmein');
  const [selectedSpice, setSelectedSpice] = useState<string>('Mild');
  const [deliveryArea, setDeliveryArea] = useState<string>('Rawalpindi / Islamabad');
  const [peopleCount, setPeopleCount] = useState<number>(2);

  const selectedDish = MENU_ITEMS.find((d) => d.id === selectedDishId) || MENU_ITEMS[0];

  const generatedMessage = `Hi Wok & Toss! Please confirm today's menu & availability:
• Dish: ${selectedDish?.name || 'Classic Chicken Chowmein'}
• Spice Level: ${selectedSpice}
• Area: ${deliveryArea}
• Ordering for: ${peopleCount} people
Please send current prices and delivery time. Thank you!`;

  const waUrl = `https://wa.me/923191932923?text=${encodeURIComponent(generatedMessage)}`;

  const steps = [
    {
      number: '01',
      title: 'Browse & Choose',
      description: 'Explore verified Chinese chowmein, sizzling gravies, fried rice, and master soups.',
    },
    {
      number: '02',
      title: 'Select Spice Level',
      description: 'Pick your preferred heat from gentle mild to blistered firecracker.',
    },
    {
      number: '03',
      title: 'Send on WhatsApp',
      description: 'Message with your selected dishes, your delivery area, and party count.',
    },
    {
      number: '04',
      title: 'Confirm Live Details',
      description: 'Receive today’s verified prices, current kitchen availability, and delivery timings directly.',
    },
    {
      number: '05',
      title: 'Fresh Wok Delivery',
      description: 'Your food is tossed fresh on intense wok flame and delivered piping hot across the Twin Cities.',
    },
  ];

  return (
    <section className="py-20 bg-warmPorcelain text-smokedSoy border-t border-ricePaper-dark/50" id="how-to-order">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-toastedSesame/40 bg-ricePaper text-xs font-semibold uppercase tracking-widest text-mutedText-dark mb-4">
            <MessageCircle className="w-3.5 h-3.5 text-roastedChilli" />
            <span>Direct WhatsApp Food-Commerce</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-smokedSoy">
            How to Order at Wok &amp; Toss
          </h2>
          <p className="mt-4 text-base sm:text-lg text-mutedText leading-relaxed font-sans">
            We cook every order from scratch. No automated third-party carts or cold warehouse food. Follow our straightforward 5-step ordering funnel directly via WhatsApp.
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((st) => (
            <div
              key={st.number}
              className="bg-warmPorcelain-card p-6 rounded-2xl border border-ricePaper-dark/80 relative shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-3xl font-extrabold text-toastedSesame/40 block">
                  {st.number}
                </span>
                <h3 className="font-serif text-lg font-bold text-smokedSoy mt-2">
                  {st.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-mutedText leading-relaxed">
                  {st.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-ricePaper-dark/40 flex items-center text-[11px] font-semibold text-roastedChilli">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                <span>Verified Step</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive WhatsApp Order Builder */}
        <div className="mt-16 bg-smokedSoy text-ricePaper rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-toastedSesame/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Input Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-toastedSesame font-semibold">
                  Interactive Message Builder
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-warmPorcelain mt-1">
                  Draft Your WhatsApp Order
                </h3>
                <p className="mt-2 text-sm text-ricePaper/80 font-sans">
                  Choose a dish, select your heat level, and specify your area. We will format a clean WhatsApp message for you to edit and send.
                </p>
              </div>

              {/* Dish Selector */}
              <div>
                <label htmlFor="dish-select" className="block text-xs font-semibold uppercase tracking-wider text-ricePaper mb-2">
                  1. Select Dish
                </label>
                <select
                  id="dish-select"
                  value={selectedDishId}
                  onChange={(e) => setSelectedDishId(e.target.value)}
                  className="w-full bg-smokedSoy-100 border border-toastedSesame/30 rounded-xl px-4 py-3 text-warmPorcelain text-sm focus:ring-2 focus:ring-wokCopper focus:border-wokCopper outline-none"
                >
                  {MENU_ITEMS.map((item) => (
                    <option key={item.id} value={item.id} className="bg-smokedSoy text-warmPorcelain">
                      {item.name} ({item.spiceLevel})
                    </option>
                  ))}
                </select>
              </div>

              {/* Spice Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ricePaper mb-2">
                  2. Choose Preferred Spice
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {['Not Spicy', 'Mild', 'Low to Med', 'Medium', 'Spicy', 'Extra Spicy'].map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setSelectedSpice(lvl)}
                      className={`px-2.5 py-2 rounded-xl text-xs font-semibold transition-all text-center border ${
                        selectedSpice === lvl
                          ? 'bg-roastedChilli text-warmPorcelain border-roastedChilli shadow-md'
                          : 'bg-smokedSoy-100 text-ricePaper/70 border-toastedSesame/20 hover:text-warmPorcelain hover:bg-smokedSoy-50'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Delivery Area & Number of People */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="delivery-area" className="block text-xs font-semibold uppercase tracking-wider text-ricePaper mb-2 flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-toastedSesame" />
                    <span>3. Delivery Area / Sector</span>
                  </label>
                  <input
                    id="delivery-area"
                    type="text"
                    value={deliveryArea}
                    onChange={(e) => setDeliveryArea(e.target.value)}
                    placeholder="e.g. Bahria Phase 4, Saddar, F-7, DHA"
                    className="w-full bg-smokedSoy-100 border border-toastedSesame/30 rounded-xl px-4 py-3 text-warmPorcelain text-sm focus:ring-2 focus:ring-wokCopper outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="people-count" className="block text-xs font-semibold uppercase tracking-wider text-ricePaper mb-2 flex items-center space-x-1">
                    <Users className="w-3.5 h-3.5 text-toastedSesame" />
                    <span>4. Ordering For</span>
                  </label>
                  <select
                    id="people-count"
                    value={peopleCount}
                    onChange={(e) => setPeopleCount(Number(e.target.value))}
                    className="w-full bg-smokedSoy-100 border border-toastedSesame/30 rounded-xl px-4 py-3 text-warmPorcelain text-sm focus:ring-2 focus:ring-wokCopper outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                      <option key={num} value={num} className="bg-smokedSoy text-warmPorcelain">
                        {num} {num === 1 ? 'Person' : 'People'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Right: Live Preview Box & Launch CTA */}
            <div className="lg:col-span-5 bg-smokedSoy-950 p-6 sm:p-8 rounded-2xl border border-toastedSesame/30 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-toastedSesame/20 text-xs text-toastedSesame">
                  <div className="flex items-center space-x-2">
                    <Edit3 className="w-4 h-4 text-roastedChilli" />
                    <span className="font-semibold uppercase tracking-wider">Live WhatsApp Message Preview</span>
                  </div>
                  <span className="text-[10px] bg-smokedSoy-100 px-2 py-0.5 rounded text-ricePaper/70">
                    Editable in App
                  </span>
                </div>

                <div className="mt-4 bg-smokedSoy/90 p-4 rounded-xl border border-toastedSesame/15 font-mono text-xs sm:text-sm text-warmPorcelain/95 whitespace-pre-wrap leading-relaxed">
                  {generatedMessage}
                </div>
              </div>

              <div>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl bg-roastedChilli hover:bg-roastedChilli-hover text-warmPorcelain font-bold tracking-wide shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4 text-warmPorcelain" />
                  <span>Send Message to +92 319 1932923</span>
                </a>
                <p className="mt-3 text-center text-[11px] text-ricePaper/60">
                  Opens official WhatsApp. You can review and edit before sending.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
