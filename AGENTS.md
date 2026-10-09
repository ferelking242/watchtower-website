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
an ordered list of entries). An entry is either a page id string or an object
`{ id, children }` for a parent with nested pages, as with Extensions. `SECTION_IDS`
and `SECTION_ICONS` derive from it, so nested pages count as real pages for
routing, pagers and search. Adding a page means:

1. Add the id to the right group in `SECTION_GROUPS`.
2. Add an icon in `SECTION_ICONS`.
3. Add the label to `NAV_LABELS` for every locale (fallback is English).
4. Add the page to `src/content/en.js` with `title`, `body`, `marker`, `code`,
   `subsections` (six `[title, body]` pairs, matching every other page) and
   `facts`.

Each page renders its subsections as anchored cards, so the right-hand outline
is generated from the same array.

The voice is user-facing: a page explains what the reader sees in the app and
what to do about it, not how the code is built. The Development group at the end
is the only place that discusses internals, and it does so from the point of
view of someone writing or hosting a source.

## Content and locales

`src/content/en.js` is the authoritative base. Locale files in
`src/content/*.js` are prose overlays merged over it by `src/content/index.js`;
`code` and `marker` are inherited from English because code is
language-independent. A locale can localize only some pages and fall back for
the rest, so a new page never needs all fifteen translations at once.

Overlays are merged by position and only trusted when their `subsections` and
`facts` lengths match the English base. A translation written against an older
structure therefore falls back to English rather than pairing translated
headings with the wrong paragraphs. `hasFullTranslation(code)` reports whether
a locale covers every section, and the language picker marks the others as
"partial". French is the reference translation and is kept in sync with English.

## Self-contained assets

The site is deliberately dependency-free at runtime. Three.js, the Kage
foreground images, the DM Mono and Manrope web fonts, and every other asset are
vendored into `public/` (`public/vendor/`, `public/assets/`). `src/styles.css`
imports `public/assets/fonts.css`, whose `url()` paths are relative to itself,
so the font files must stay beside it. `public/kage.html` references `./vendor/`
paths rather than any CDN. The only external URLs left in `dist/` are the
outbound links in the page itself.

## Components

- `src/lib/highlight.js` wraps a highlight.js core build with only the grammars
  the docs use. A code block's language is detected heuristically, so adding a
  page needs no language annotation. Token colours live in `styles.css` under
  `.hljs-*` for both themes.
- `src/lib/search.js` builds a Fuse.js index over page titles, subsection
  titles and bodies. While a query is active the sidebar shows ranked page hits
  that jump straight to the matching subsection instead of the whole tree.

## Conventions

- Prose in the docs is English and avoids em dashes.
- Locale keys are kebab-case and must match the `SECTION_GROUPS` ids exactly.
  A camelCase key silently renders an empty label.
- Verify with `npm run build`, then check the deployed asset hashes match the
  new build before calling a change live.
- New UI strings go in every locale's `UI` block in `src/i18n.js`; `getUi`
  falls back to English, so a missing key is silent rather than fatal.
