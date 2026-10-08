# watchtower-website

React + Vite site for the Watchtower app. The landing page is a WebGL
experience in `public/kage.html`; the documentation lives at `?view=docs`.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — production build into `dist/`

## Deploy

GitHub Pages via the `Deploy to GitHub Pages` Actions workflow on `main`.
Live at https://ferelking242.github.io/watchtower-website/

## Docs structure

Navigation is defined once in `src/i18n.js` as `SECTION_GROUPS` (group key plus
an ordered list of page ids). `SECTION_IDS` and `SECTION_ICONS` derive from it.
Adding a page means:

1. Add the id to the right group in `SECTION_GROUPS`.
2. Add an icon in `SECTION_ICONS`.
3. Add the label to `NAV_LABELS` for every locale (fallback is English).
4. Add the page to `src/content/en.js` with `title`, `body`, `marker`, `code`,
   `subsections` (five `[title, body]` pairs) and `facts`.

Each page renders its subsections as anchored cards, so the right-hand outline
is generated from the same array.

## Content and locales

`src/content/en.js` is the authoritative base. Locale files in
`src/content/*.js` are prose overlays merged over it by `src/content/index.js`;
`code` and `marker` are inherited from English because code is
language-independent. A locale can localize only some pages and fall back for
the rest, so a new page never needs all fifteen translations at once.

## Conventions

- Prose in the docs is English and avoids em dashes.
- Locale keys are kebab-case and must match the `SECTION_GROUPS` ids exactly.
  A camelCase key silently renders an empty label.
- Verify with `npm run build`, then check the deployed asset hashes match the
  new build before calling a change live.
