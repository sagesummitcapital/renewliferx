# Renew Life RX — renewliferx.com

A modern Next.js 14 (App Router) rebuild of renewliferx.com — fully responsive, animated, and ready to deploy on Vercel.

---

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build a production bundle:

```bash
npm run build
npm start
```

---

## What's in here

```
renewliferx/
├─ app/                    # All pages (Next.js App Router)
│  ├─ layout.tsx           # Root layout, fonts, metadata, JSON-LD
│  ├─ page.tsx             # Home
│  ├─ globals.css          # Brand styles, design tokens, HubSpot form polish
│  ├─ how-it-works/
│  ├─ treatments/
│  │  ├─ page.tsx                          # Treatments hub
│  │  ├─ trt-hrt-men/
│  │  ├─ womens-hormone-optimization/
│  │  ├─ medical-weight-loss/
│  │  └─ peptide-therapy/
│  ├─ blood-work/
│  ├─ why-renew-life/
│  ├─ faq/
│  ├─ schedule-a-call/     # Primary HubSpot form location
│  ├─ contact/             # Secondary HubSpot form location
│  ├─ privacy/  hipaa/  terms/   # Legal stubs (review with counsel)
│  ├─ sitemap.ts  robots.ts  not-found.tsx
├─ components/             # Reusable UI
│  ├─ Header.tsx           # Sticky header with dropdown nav + mobile drawer
│  ├─ Footer.tsx           # Footer with disclaimers
│  ├─ Hero.tsx             # Animated homepage hero (video + SVG fallback)
│  ├─ HubSpotForm.tsx      # HubSpot embed (singleton script loader)
│  ├─ JourneySteps.tsx     # 7-step patient journey
│  ├─ TreatmentCard.tsx
│  ├─ Reveal.tsx           # Framer Motion scroll reveal
│  ├─ SectionHeader.tsx    # eyebrow + h2 + subtitle
│  ├─ PageHero.tsx         # Inner page hero
│  ├─ CTASection.tsx       # Reusable CTA band
│  ├─ FAQItem.tsx          # Accordion
│  └─ DisclaimerBlock.tsx  # Compliance disclaimer card (default + trt variants)
├─ lib/
│  ├─ site.ts              # Single source of truth: company info, phone, email, address, HubSpot config, nav
│  └─ cn.ts                # clsx helper
├─ public/
│  ├─ brand/               # Logos, icons, patient journey, brand kit (already populated)
│  ├─ images/              # Drop hero-poster.jpg here (optional)
│  ├─ hero.mp4             # ⬅️ Drop your hero video here when ready
│  └─ hero.webm            # ⬅️ (Optional) WebM version
├─ tailwind.config.ts      # Brand tokens (colors, fonts, animations)
├─ next.config.js          # Includes legacy URL redirects
├─ vercel.json
└─ package.json
```

---

## How to edit content

### Site-wide info — phone, email, address, HubSpot
Edit `lib/site.ts`. The phone number, email, address, HubSpot portal/form ID, and main navigation all live here. Change once and it propagates everywhere.

### Page content
Each page lives in its own folder under `/app/`. The file is always called `page.tsx`. Open it, edit the JSX, save — it hot-reloads in dev.

### Header & footer
- `components/Header.tsx` — sticky header with the nav defined in `lib/site.ts`
- `components/Footer.tsx` — disclaimers, address, links

---

## The hero video

The homepage hero in `components/Hero.tsx` loads two things in priority order:

1. `/public/hero.mp4` (and optionally `/public/hero.webm`)
2. An animated CSS-gradient + Framer Motion SVG fallback (sunrise + ocean + figure silhouette)

**The animated fallback is always running underneath the video, so the page looks complete even with no MP4.** When you have a video ready:

1. Save it as `public/hero.mp4` (and ideally `public/hero.webm` for smaller file sizes)
2. (Optional) Save a poster frame as `public/images/hero-poster.jpg`
3. Done — it'll load automatically on next page view

**Recommended specs:** 1920×1080, 8–15 seconds, looping seamlessly, < 4 MB. Mute it (browsers won't autoplay audio).

---

## How the HubSpot form works

The form is the existing HubSpot form (portal `4078883`, form `3528a8d6-bbf1-4b04-a14d-4a38a30fb1d2`) — credentials are set in `lib/site.ts`.

The component (`components/HubSpotForm.tsx`) loads HubSpot's `v2.js` script once per session, then renders the form into a unique target div. It supports multiple instances on the same page if needed.

The form lives on:
- `/schedule-a-call` (primary CTA destination across the site)
- `/contact`

Other pages route users to those two pages instead of embedding the form, per your spec.

The form's visual styling is overridden in `app/globals.css` under the `.hs-form-wrap` selector — fonts, colors, button, focus rings all match the brand.

If HubSpot's script fails to load, the user sees a fallback message with the phone and email instead.

---

## Deploying to Vercel

1. Push this directory to a GitHub repo
2. In Vercel, click "Add New Project" → import the repo
3. Vercel auto-detects Next.js. **No environment variables required.**
4. Click Deploy

The first deploy takes ~2 minutes. Custom domains (renewliferx.com) are added in the Vercel project settings.

---

## Brand tokens

Defined in `tailwind.config.ts` and `app/globals.css`:

| Token | Hex | Tailwind class |
|---|---|---|
| Brand Blue | `#234EA2` | `text-brand-blue` / `bg-brand-blue` |
| Brand Blue Dark | `#1B3D80` | `bg-brand-blue-dark` |
| Brand Green | `#0B7A3E` | `text-brand-green` |
| Brand Green Light | `#2EAE5E` | `bg-brand-green-light` |
| Charcoal | `#2B2F36` | `text-brand-charcoal` |
| Ink | `#0E1421` | `bg-brand-ink` |
| Mist | `#F2F5F9` | `bg-brand-mist` |

**Fonts**: Montserrat (display) + Lato (body), both loaded via `next/font/google`.

---

## Adding a redirect

Edit `next.config.js` and add to the `redirects()` array. Existing redirects preserve the old site's URL structure (e.g., `/hrt-for-men` → `/treatments/trt-hrt-men`).

```js
{ source: "/old-url", destination: "/new-url", permanent: true }
```

---

## Legal pages

`/privacy`, `/hipaa`, and `/terms` are starting templates. **Have legal counsel review and finalize them before publishing.** They're written to be straightforward to edit — open the corresponding `page.tsx` file and revise.

---

## Compliance notes

The site copy has been written with TRT/HRT advertising compliance in mind:
- "Treatment is not guaranteed" disclaimers throughout
- "Only a licensed physician can diagnose and prescribe" language
- Clinical eligibility and exclusion language on the TRT page
- Lab cadence + annual visit + refill requirements clearly stated
- Footer + per-page disclaimer block (`components/DisclaimerBlock.tsx`)

If your legal team has additional language they want included, edit `components/DisclaimerBlock.tsx` (one place, applies everywhere it's rendered) and `components/Footer.tsx`.

---

## Tech stack

- **Next.js 14** (App Router, RSC where appropriate)
- **TypeScript**
- **Tailwind CSS 3.4**
- **Framer Motion** for animations
- **lucide-react** for icons
- **HubSpot Forms** v2 embed
- **Vercel** for hosting

---

## Questions?

Most edits are simple: open `lib/site.ts` for global info, the relevant `app/.../page.tsx` for page content, or a component file under `components/` for reusable pieces.
