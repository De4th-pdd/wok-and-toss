# Wok & Toss — Brand Identity & Design System Specification

**Version:** 1.0.0  
**Creative Direction:** Modern Asian Food Editorial — Premium, Warm, Confident & Appetite-Led  
**Target Market:** Rawalpindi & Islamabad (Twin Cities, Pakistan)

---

## 1. Brand Essence & Voice

Wok & Toss Chinese Food is an independent wok-kitchen craft brand delivering high-heat Chinese food across Rawalpindi and Islamabad. 

### Brand Personality
- **Warm & Confident:** High culinary standards without pretentiousness. The brand communicates with direct, appetite-focused warmth.
- **Wok-Honest:** The food is prepared with real high-flame wok hei, freshly diced aromatics, and rich house sauces. No artificial claims or fake ratings.
- **Editorial & Restrained:** Inspired by independent culinary journals and contemporary Asian gastronomic studios, balancing dark wok-seasoned surfaces with clean, warm cream dining cards.

### Core Brand Messaging (Verified In-Market)
- *"Hot, saucy, wok-tossed Chinese, made fresh for you."*
- *"Chinese food for your cravings."*
- *"Wok says toss."*

### What We Never Do
- ❌ No generic red-and-yellow fast-food clichés.
- ❌ No fake review counters, star badges, or fabricated awards.
- ❌ No stock food photography or AI-generated fantasy meals.
- ❌ No emoji category badges (no 🍜, 🥡, 🥢 in navigation).
- ❌ No neon glows, glassy blur backdrops, or distracting micro-animations.

---

## 2. Colour Palette & Token Hierarchy

The color system draws directly from the natural materials of wok cooking—cast iron patina, unbleached rice paper, simmering chili oils, copper culinary accents, and roasted sesame seeds.

| Token Name | Hex Code | Role & Usage Hierarchy | Contrast & Accessibility Rules |
|---|---|---|---|
| **Smoked Soy** | `#171715` | Hero banner, header, footer, dark editorial feature panels | Paired with Warm Porcelain (`#FFFAF2`) or Rice Paper (`#F3EBDD`) for high-contrast AAA reading. |
| **Rice Paper** | `#F3EBDD` | Section transitions, secondary surfaces, pill backgrounds | Used as a soothing background surface; never used for thin text. |
| **Warm Porcelain** | `#FFFAF2` | Primary menu canvas, dish detail cards, editorial prose surfaces | Primary light background ensuring pristine legibility. |
| **Roasted Chilli** | `#A8482F` | Primary Action CTA, WhatsApp ordering triggers, active states | Minimum 4.5:1 contrast against light backgrounds; rich brick-red, never neon. |
| **Wok Copper** | `#C7653B` | Restrained decorative accents, thin borders, flame details | Strictly decorative or large scale; never small text on cream. |
| **Toasted Sesame** | `#C2A36B` | Spice-scale indicators, subtle badge outlines, category subtitles | Used for heat-level badges and metallic brand framing. |
| **Secondary Muted Text**| `#73675A` | Meta-data, portion descriptions, helper notes, timestamps | Minimum 4.5:1 contrast on Porcelain surfaces. |

---

## 3. Typography Hierarchy

### Typefaces
- **Editorial Headings:** `Newsreader` (Google Fonts, Optical Size variable, Serif). Elegant, literary, and evocative of high-end culinary publications.
- **Interface & Content:** `Manrope` (Google Fonts, Geometric Sans-Serif). Modern, crisp, highly legible for menu items, pricing, nutritional badges, and navigational controls.

### Type Scale

| Level | Font Family | Size / Leading | Weight | Tracking | Usage |
|---|---|---|---|---|---|
| **Display 1** | Newsreader | 3.5rem – 4.5rem (56–72px) / 1.05 | Medium (500) | -0.02em | Hero headline ("Hot, saucy, wok-tossed Chinese.") |
| **Display 2** | Newsreader | 2.5rem – 3.25rem (40–52px) / 1.15 | Medium (500) | -0.015em | Major section titles (Menu, Spice Guide, About) |
| **Heading 3** | Newsreader | 1.75rem – 2.0rem (28–32px) / 1.25 | SemiBold (600) | 0.0em | Category headers (Noodles, Gravies, Soups) |
| **Heading 4** | Manrope | 1.125rem – 1.25rem (18–20px) / 1.35 | Bold (700) | 0.01em | Dish item names, modal titles |
| **Body Large** | Manrope | 1.125rem (18px) / 1.6 | Regular (400) | 0.0em | Lead intro paragraphs |
| **Body Normal**| Manrope | 0.9375rem – 1.0rem (15–16px) / 1.55 | Regular (400) | 0.0em | Dish descriptions, operational copy |
| **Caption/UI** | Manrope | 0.75rem – 0.8125rem (12–13px) / 1.4 | SemiBold (600) | 0.05em (caps) | Spice badges, price status, tags |

---

## 4. The Wok & Toss Spice Architecture

Wok & Toss features an authentic multi-tier spice customization matrix. Unlike generic fast-food 1–5 stars, the brand organizes heat by culinary category:

### Category 1: Noodles & Chowmein
- **Mild:** Classic Chicken, Vegetable
- **Low to Medium:** House Special, Classic Beef, Classic Prawn, Shroom
- **Very Spicy:** Chilli Chicken, Firecracker Chicken

### Category 2: Chicken Gravies
- **Not Spicy:** Sweet & Sassy, Golden Almond, Nutty Cashew
- **Mild:** Schezwan, Shashlik
- **Low to Medium:** OG Manchurian, Vegetable Chicken
- **Medium:** Black Pepper Smash
- **Spicy:** Kung Pao Kick, Onion Fire
- **Extra Spicy:** Firecracker

### Category 3: Beef & Prawn Gravies
- **Low to Medium:** Garlic Bomb, Original
- **Medium:** Veggie Fire, Shroom Fire
- **Spicy:** Onion Fire
- **Extra Spicy:** Firecracker

### Customization Notice
Every dish's spice profile is customizable. In accordance with original brand collateral:
> *"Spice levels can be fine-tuned to your personal craving by mentioning your preference in your WhatsApp order message."*

---

## 5. UI Components & Interaction Principles

### 1. Navigation Header
- Smoked Soy background with subtle frosted border (`border-toastedSesame/20`).
- Left: Verified Wok & Toss brand mark (gold emblem with red flame).
- Center: Semantic nav links (`Menu`, `Spice Guide`, `How to Order`, `About & Service Area`).
- Right: Direct WhatsApp CTA (`Order on WhatsApp`).
- Sticky behavior with smooth backdrop blur for seamless scrolling.

### 2. Menu Item Cards
- Surface: Warm Porcelain (`#FFFAF2`) with soft 1px border (`#E7DEC9`).
- Dish Title in bold Manrope with price (confirmed PKR or dynamic "Ask for today's price").
- Category-accurate spice indicator pill with color-coded heat level (e.g. Mild, Medium, Fiery).
- Dish description from verified brand records.
- Product-aware "Order on WhatsApp" trigger with pre-filled message URL.

### 3. Spice Level Vertical & Tabbed Scale
- Recreated from original brand spice carousel.
- Interactive filter allowing guests to select heat preference and inspect all corresponding dishes.
- Dual visual + text accessibility: color pill, flame icon counter, and explicit written heat descriptor.

### 4. WhatsApp Food-Commerce UX Funnel
- Direct integration without fictitious cart or checkout barriers.
- Generates pre-formatted WhatsApp URLs:
  ```
  https://wa.me/923191932923?text=Hi%20Wok%20%26%20Toss%21%20I%27d%20like%20to%20order%20the%20[Dish%20Name]%20([Spice%20Level]).%20My%20area%20is%20[Area]%20for%20[Count]%20people.
  ```
- Guests retain full control to edit their message before dispatch.
