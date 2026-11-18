# Wok & Toss Chinese Food — Official Website

> **"Hot, saucy, wok-tossed Chinese, made fresh for you."**  
> Premium modern Asian food editorial and direct WhatsApp food-commerce web application for Wok & Toss, serving Rawalpindi and Islamabad, Pakistan.

---

## 🥢 Overview

Wok & Toss is an independent culinary craft brand delivering high-heat Chinese food across the Twin Cities (Rawalpindi & Islamabad). This website is designed as a modern Asian food editorial experience—combining authentic high-heat wok hei visual storytelling, real kitchen fulfillment footage, a 5-tier spice guide, and a zero-friction WhatsApp food-commerce ordering funnel.

- **Cuisine:** Chinese Food
- **Service Area:** Rawalpindi & Islamabad, Pakistan
- **Kitchen Hours:** Daily 12:30 PM – 11:00 PM (Monday – Sunday)
- **WhatsApp Order Line:** `+92 319 1932923`
- **Facebook:** [Wok & Toss Chinese Food](https://www.facebook.com/1303363079535418)

---

## 🎨 Visual Identity & Design System

The visual design is art-directed as a high-end food publication rather than a generic fast-food template.

### Color Tokens
- **Smoked Soy (`#171715`):** Hero canvas, navigation bar, footer, and deep wok-seasoned surfaces.
- **Warm Porcelain (`#FFFAF2`):** Primary reading canvas and dish card surfaces.
- **Rice Paper (`#F3EBDD`):** Section transitions, pill backgrounds, and subtle badges.
- **Roasted Chilli (`#A8482F`):** Primary action triggers, WhatsApp order buttons, and active states.
- **Wok Copper (`#C7653B`):** Restrained decorative borders and heat accents.
- **Toasted Sesame (`#C2A36B`):** Metallic heat indicators, borders, and subheadings.
- **Secondary Muted Text (`#73675A`):** High-contrast meta copy and portion notes.

### Typography Hierarchy
- **Editorial Headings:** `Newsreader` (optical size variable serif).
- **Interface & Content:** `Manrope` (crisp, modern geometric sans-serif).

---

## 🌶️ The Wok & Toss Spice Architecture

Wok & Toss features an authentic category-specific heat customization system:

1. **Noodles & Chowmein:**
   - *Mild:* Classic Chicken, Vegetable
   - *Low to Medium:* House Special, Classic Beef, Classic Prawn, Shroom
   - *Very Spicy:* Chilli Chicken, Firecracker Chicken
2. **Chicken Gravies:**
   - *Not Spicy:* Sweet & Sassy, Golden Almond, Nutty Cashew
   - *Mild:* Schezwan Heat, Shashlik Stir
   - *Low to Medium:* OG Manchurian, Vegetable Chicken
   - *Medium:* Black Pepper Smash
   - *Spicy:* Kung Pao Kick, Onion Fire, Chilli Dry Chicken
   - *Extra Spicy:* Firecracker Chicken Gravy
3. **Beef & Prawn Gravies:**
   - *Low to Medium:* Garlic Bomb, Original
   - *Medium:* Veggie Fire, Shroom Fire
   - *Spicy:* Onion Fire, Beef Chilli Dry
   - *Extra Spicy:* Firecracker Beef, Firecracker Prawns

*All spice levels can be customized per customer request directly via WhatsApp.*

---

## 📦 Menu Data & Price Handling

Menu data is strictly centralized in `src/data/menu.ts`.

- **Confirmed Retail Prices:** Rendered cleanly in PKR (e.g. `Rs. 1,250 (M) / Rs. 1,400 (L)` or `Rs. 1,500`).
- **Unconfirmed / Seasonal Items:** Customer-facing price remains `null`, rendering as `"Ask for today's price"` with direct WhatsApp inquiry.
- **Supplier Reference Prices:** Maintained for internal cost reference only; strictly excluded from public display and structured data.
- **Zero Fake Deals:** Promotions require verified owner authorization before publishing.

---

## 🚀 WhatsApp Food-Commerce Funnel

Instead of fake shopping carts or automated checkout gates, the site streamlines the verified current customer journey:
1. Browse dishes and select preferred heat levels.
2. Use the **Interactive Order Composer** to pick dishes, spice levels, Twin Cities delivery sector, and party size.
3. Automatically generate an editable, pre-filled WhatsApp message.
4. Launch official WhatsApp chat with `+92 319 1932923` to confirm live availability and delivery timings.

---

## 🔍 Technical & Local SEO

- **Metadata API:** Unique titles, meta descriptions, open graph cards, and canonical links on all routes.
- **Structured Data (JSON-LD):**
  - `Restaurant` schema with verified business name, phone, cuisine, operating hours, and areaServed (`Rawalpindi`, `Islamabad`).
  - `FAQPage` schema on local FAQs.
- **Automated Discovery:**
  - `src/app/sitemap.ts` generates `/sitemap.xml` with priority weighting.
  - `src/app/robots.ts` generates `/robots.txt`.
  - `src/app/manifest.ts` generates PWA `/manifest.webmanifest`.
- **Assets:** Custom favicon (`/favicon.ico`), PWA icons (`/icon-192.png`, `/icon-512.png`), and Open Graph share card (`/og-image.jpg`).

---

## 🛠️ Technology Stack

- **Framework:** Next.js 15 (App Router, Static Generation)
- **Language:** TypeScript 5.9 (Strict Mode)
- **Styling:** Tailwind CSS 3.4
- **Icons:** Lucide React & Custom Brand SVGs
- **Fonts:** `next/font/google` (Newsreader & Manrope)
- **Package Manager:** pnpm

---

## 💻 Getting Started

### Installation
```bash
pnpm install
```

### Development Server
```bash
pnpm dev
# Runs on http://localhost:3000
```

### Type Check & Linting
```bash
pnpm tsc --noEmit
pnpm lint
```

### Production Build & Preview
```bash
pnpm build
pnpm start -p 3000
```

---

## 📄 Documentation

- [`/docs/wok-toss-asset-audit.md`](docs/wok-toss-asset-audit.md) — Comprehensive media audit and production catalog.
- [`/docs/wok-toss-brand-and-design-system.md`](docs/wok-toss-brand-and-design-system.md) — Brand identity, color tokens, and UI interaction specifications.

---

© 2026 Wok & Toss Chinese Food. All rights reserved.
