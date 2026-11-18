import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/config';
import { MENU_ITEMS } from '@/data/menu';
import DishCard from '@/components/DishCard';
import SpiceGuideSection from '@/components/SpiceGuideSection';
import OrderStepSection from '@/components/OrderStepSection';
import FeaturedCarousel from '@/components/FeaturedCarousel';
import LocalSeoFaq from '@/components/LocalSeoFaq';
import {
  MessageCircle,
  Flame,
  Clock,
  MapPin,
  UtensilsCrossed,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export default function HomePage() {
  // Select authentic featured dishes that represent the core pillars of Wok & Toss
  const featuredDishes = MENU_ITEMS.filter((item) => item.isFeatured).slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen">
      {/* =========================================================
          1. HERO SECTION: Food-Led, Premium Editorial
          ========================================================= */}
      <section className="relative min-h-[92vh] flex items-center bg-smokedSoy text-ricePaper overflow-hidden">
        {/* Subtle background food video & ambient overlays */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/assets/video/noodle-pull-poster.webp"
            className="w-full h-full object-cover opacity-25 scale-105 filter saturate-150"
          >
            <source src="/assets/video/noodle-pull.mp4" type="video/mp4" />
          </video>
          {/* Multi-layer gradient overlays for pristine readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-smokedSoy-950 via-smokedSoy-900/90 to-smokedSoy/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-smokedSoy via-transparent to-smokedSoy/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Editorial Headline & Actions */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-smokedSoy-950/80 border border-toastedSesame/40 text-xs font-semibold uppercase tracking-widest text-toastedSesame shadow-md">
                <Flame className="w-3.5 h-3.5 text-roastedChilli shrink-0" />
                <span>Rawalpindi &amp; Islamabad • High-Heat Wok Hei</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-warmPorcelain leading-[1.08]">
                Hot, saucy, <br />
                <span className="italic font-normal text-toastedSesame">wok-tossed</span> Chinese.
              </h1>

              {/* Supporting Copy */}
              <p className="text-lg sm:text-xl text-ricePaper/85 leading-relaxed font-sans max-w-2xl font-light">
                Chinese food for your cravings in Rawalpindi &amp; Islamabad. Freshly charred chowmein, rich simmering gravies, and customizable spice levels prepared from scratch for every order.
              </p>

              {/* Verified Operating Facts */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-ricePaper/80 font-sans">
                <div className="flex items-center space-x-2 bg-smokedSoy-100/60 px-3.5 py-2 rounded-xl border border-toastedSesame/20">
                  <Clock className="w-4 h-4 text-toastedSesame shrink-0" />
                  <span>Daily 12:30 PM – 11:00 PM</span>
                </div>
                <div className="flex items-center space-x-2 bg-smokedSoy-100/60 px-3.5 py-2 rounded-xl border border-toastedSesame/20">
                  <MapPin className="w-4 h-4 text-toastedSesame shrink-0" />
                  <span>Twin Cities Delivery Coverage</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-roastedChilli hover:bg-roastedChilli-hover text-warmPorcelain font-bold text-base tracking-wide shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>Explore Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2.5 px-7 py-4 rounded-full bg-smokedSoy-100 hover:bg-smokedSoy-50 text-warmPorcelain border border-toastedSesame/40 font-semibold text-base tracking-wide shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5 text-roastedChilli" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>

              {/* Brand Mantra */}
              <div className="pt-2 text-xs font-mono tracking-widest text-toastedSesame/70 uppercase">
                &quot;Wok says toss.&quot; • WhatsApp: {siteConfig.phoneDisplay}
              </div>
            </div>

            {/* Right Column: Hero Visual Feature */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border frame */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-roastedChilli/40 via-toastedSesame/20 to-transparent blur-md -z-10" />

                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-toastedSesame/30 bg-smokedSoy-950 shadow-2xl">
                  <Image
                    src="/assets/dishes/chilli-dry-and-chowmein-combo.webp"
                    alt="Authentic Wok & Toss Chilli Dry Chicken and Chicken Chowmein Order"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-smokedSoy-950/90 via-transparent to-transparent" />

                  {/* Floating Appetite Pill */}
                  <div className="absolute bottom-6 inset-x-6 p-4 rounded-2xl bg-smokedSoy-950/90 border border-toastedSesame/30 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-toastedSesame block">
                          Real Order Fulfillment
                        </span>
                        <span className="font-serif text-lg font-bold text-warmPorcelain">
                          Chilli Dry &amp; Chowmein
                        </span>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-roastedChilli text-warmPorcelain">
                        Fiery Hot
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. THE WOK CRAFT EXPERIENCE: Appetite & Sizzle
          ========================================================= */}
      <section className="py-20 bg-warmPorcelain text-smokedSoy border-y border-ricePaper-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual clip & photo grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-ricePaper-dark shadow-sm bg-smokedSoy-950">
                <Image
                  src="/assets/dishes/signature-chowmein.webp"
                  alt="Wok Tossed Signature Chicken Chowmein"
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 px-2 py-1 rounded bg-smokedSoy-950/80 text-[10px] font-mono text-warmPorcelain">
                  Signature Chowmein
                </div>
              </div>

              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-ricePaper-dark shadow-sm bg-smokedSoy-950">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/assets/video/chilli-chicken-poster.webp"
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/video/chilli-chicken.mp4" type="video/mp4" />
                </video>
                <div className="absolute bottom-3 left-3 px-2 py-1 rounded bg-smokedSoy-950/80 text-[10px] font-mono text-warmPorcelain">
                  Sizzling Chilli Dry
                </div>
              </div>

              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-ricePaper-dark shadow-sm bg-smokedSoy-950">
                <Image
                  src="/assets/dishes/hot-and-sour-soup.webp"
                  alt="Rich Hot & Sour Broth with Egg Ribbons"
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 px-2 py-1 rounded bg-smokedSoy-950/80 text-[10px] font-mono text-warmPorcelain">
                  Hot &amp; Sour Broth
                </div>
              </div>

              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-ricePaper-dark shadow-sm bg-smokedSoy-950">
                <Image
                  src="/assets/dishes/lunch-box-feast.webp"
                  alt="Wok & Toss Combo Takeaway Box"
                  fill
                  sizes="(max-width: 768px) 50vw, 300px"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 px-2 py-1 rounded bg-smokedSoy-950/80 text-[10px] font-mono text-warmPorcelain">
                  3-Item Takeaway Box
                </div>
              </div>
            </div>

            {/* Narrative Editorial Column */}
            <div className="lg:col-span-6 space-y-6 lg:pl-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-toastedSesame/40 bg-ricePaper text-xs font-semibold uppercase tracking-widest text-mutedText-dark">
                <Sparkles className="w-3.5 h-3.5 text-roastedChilli" />
                <span>Culinary Philosophy</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-smokedSoy leading-tight">
                Real Wok Flame. <br />
                <span className="italic font-normal text-wokCopper">Freshly Tossed to Order.</span>
              </h2>
              <p className="text-base sm:text-lg text-mutedText leading-relaxed font-sans">
                At Wok &amp; Toss, every dish is seared individually over intense high-flame burners. We don&apos;t reheat pre-made food. The smoke of the wok, the crunch of fresh cabbage and carrots, the char of sliced chicken, and the aromatic burst of whole red chilies come together in minutes.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-roastedChilli/10 border border-roastedChilli/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Flame className="w-4 h-4 text-roastedChilli" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-smokedSoy">
                      Pure High-Heat Wok Hei
                    </h3>
                    <p className="text-sm text-mutedText mt-0.5">
                      Authentic wok caramelization that gives our chowmein and gravies their signature smokiness.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-toastedSesame/15 border border-toastedSesame/30 flex items-center justify-center shrink-0 mt-0.5">
                    <UtensilsCrossed className="w-4 h-4 text-toastedSesame-dark" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-smokedSoy">
                      Category-Specific Heat Customization
                    </h3>
                    <p className="text-sm text-mutedText mt-0.5">
                      Tailor your spice level from mild garlic to firecracker chili directly when messaging on WhatsApp.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/spice-guide"
                  className="inline-flex items-center space-x-2 text-roastedChilli hover:text-roastedChilli-hover font-semibold text-sm group"
                >
                  <span>Explore the full spice architecture</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. SIGNATURE DISH SPOTLIGHT
          ========================================================= */}
      <section className="py-20 bg-warmPorcelain-card text-smokedSoy" id="featured-menu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-toastedSesame/40 bg-ricePaper text-xs font-semibold uppercase tracking-widest text-mutedText-dark mb-3">
                <Flame className="w-3.5 h-3.5 text-roastedChilli" />
                <span>Verified Brand Specialties</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-smokedSoy">
                Featured Wok Creations
              </h2>
              <p className="mt-3 text-base text-mutedText max-w-xl font-sans">
                Tasted, verified, and celebrated. These signature dishes define the Wok &amp; Toss standard across Rawalpindi and Islamabad.
              </p>
            </div>
            <Link
              href="/menu"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border border-smokedSoy/20 hover:border-smokedSoy hover:bg-smokedSoy hover:text-warmPorcelain transition-all text-sm font-semibold self-start md:self-auto shrink-0"
            >
              <span>View Full Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Dish Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDishes.map((item) => (
              <DishCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          4. THE SPICE GUIDE SECTION (Recreated in full HTML/CSS)
          ========================================================= */}
      <SpiceGuideSection />

      {/* =========================================================
          5. THE ORIGINAL BRAND CAROUSEL SLIDESHOW
          ========================================================= */}
      <FeaturedCarousel />

      {/* =========================================================
          6. HOW TO ORDER (5-step process + Interactive Composer)
          ========================================================= */}
      <OrderStepSection />

      {/* =========================================================
          7. LOCAL SERVICE AREA & OPENING HOURS
          ========================================================= */}
      <section className="py-20 bg-ricePaper text-smokedSoy border-t border-ricePaper-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-warmPorcelain rounded-3xl p-8 sm:p-12 border border-ricePaper-dark/80 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-toastedSesame/40 bg-ricePaper text-xs font-semibold uppercase tracking-widest text-mutedText-dark">
                  <MapPin className="w-3.5 h-3.5 text-roastedChilli" />
                  <span>Twin Cities Coverage</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-smokedSoy">
                  Serving Rawalpindi &amp; Islamabad Daily
                </h2>
                <p className="text-base text-mutedText leading-relaxed font-sans max-w-2xl">
                  We prepare fresh Chinese meals seven days a week from 12:30 PM to 11:00 PM. Whether you need a quick lunch box in Saddar or Bahria, or a family banquet spread across Islamabad sectors, message us with your area and party count for instant availability.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-sm">
                  <div className="p-4 rounded-xl bg-warmPorcelain-card border border-ricePaper-dark/60">
                    <span className="block font-serif font-bold text-smokedSoy text-base">Kitchen Operating Hours</span>
                    <span className="text-mutedText block mt-1">Monday – Sunday: 12:30 PM – 11:00 PM</span>
                  </div>
                  <div className="p-4 rounded-xl bg-warmPorcelain-card border border-ricePaper-dark/60">
                    <span className="block font-serif font-bold text-smokedSoy text-base">WhatsApp Hot Line</span>
                    <span className="text-mutedText block mt-1">+92 319 1932923 (Fastest Response)</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 bg-smokedSoy text-ricePaper rounded-2xl border border-toastedSesame/30">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-toastedSesame/50 mb-3">
                  <Image
                    src="/assets/brand/logo.webp"
                    alt="Wok & Toss"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-serif text-xl font-bold text-warmPorcelain">
                  WOK &amp; TOSS
                </span>
                <span className="text-xs text-toastedSesame uppercase tracking-widest mt-0.5">
                  Freshly Tossed
                </span>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-roastedChilli hover:bg-roastedChilli-hover text-warmPorcelain text-xs font-bold uppercase tracking-wider transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send WhatsApp Request</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          8. LOCAL TWIN CITIES FAQS
          ========================================================= */}
      <LocalSeoFaq />

      {/* =========================================================
          9. FINAL PROMINENT WHATSAPP CTA
          ========================================================= */}
      <section className="py-20 bg-smokedSoy text-ricePaper relative overflow-hidden border-t border-toastedSesame/30">
        <div className="absolute inset-0 bg-radial-gradient from-roastedChilli/15 via-transparent to-transparent opacity-50" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-toastedSesame/40 bg-smokedSoy-950/80 text-xs font-semibold uppercase tracking-widest text-toastedSesame">
            <Flame className="w-3.5 h-3.5 text-roastedChilli" />
            <span>Ready for your craving?</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-warmPorcelain tracking-tight leading-tight">
            Craving Authentic Chinese in the Twin Cities?
          </h2>
          <p className="text-base sm:text-lg text-ricePaper/80 max-w-2xl mx-auto font-sans leading-relaxed">
            Message <span className="text-warmPorcelain font-semibold">&quot;MENU&quot;</span> on WhatsApp, specify your location and number of people ordering, and receive today&apos;s verified menu and delivery arrangements.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-roastedChilli hover:bg-roastedChilli-hover text-warmPorcelain font-bold text-base tracking-wide shadow-2xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 text-warmPorcelain" />
              <span>Message &quot;MENU&quot; on WhatsApp</span>
            </a>
            <Link
              href="/menu"
              className="inline-flex items-center space-x-2 px-7 py-4 rounded-full bg-smokedSoy-100 hover:bg-smokedSoy-50 text-warmPorcelain border border-toastedSesame/30 text-base font-semibold transition-all"
            >
              <span>Explore All Dishes</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-4 text-xs text-toastedSesame font-mono">
            WhatsApp Hotline: +92 319 1932923 • Daily 12:30 PM – 11:00 PM
          </div>
        </div>
      </section>
    </div>
  );
}
