# Gospel Truth Church Ethiopia — Next.js Site

A Next.js 14 (App Router) + TypeScript + Tailwind CSS site for Gospel Truth
Church Ethiopia, with light/dark theme support via `next-themes`.

## Setup

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Pages included

- `/` — Homepage (hero, welcome, schedule preview, sermons preview, beliefs preview, CTA)
- `/about` — About Us
- `/beliefs` — What We Believe (full doctrinal statements)
- `/sermons` — Sermon library preview (links to YouTube/Telegram)
- `/ministries` — Ministries overview
- `/events` — Upcoming events
- `/schedule` — Full weekly service schedule
- `/prayer` — Prayer request form
- `/contact` — Contact info

## Structure

- `app/` — pages (App Router)
- `components/` — Navbar, Footer, ThemeToggle, PrayerForm, etc.
- `lib/` — shared data (schedule, beliefs)

## Customize

- Edit `lib/schedule-data.ts` to change service times.
- Edit `lib/beliefs-data.ts` to change doctrinal statements.
- Replace placeholder sermon data in `app/sermons/page.tsx` and `app/page.tsx`.
- Wire up `components/prayer-form.tsx` to a real backend (e.g. Formspree, a serverless function, or your own API route) — it currently only shows a confirmation message.
- Add a real pastor photo and church photos under `public/` and reference them with `next/image`.

## Theme

Light/dark mode is handled by `next-themes`, toggled via the button in the
navbar. Default theme is `light`; it also respects system preference.
