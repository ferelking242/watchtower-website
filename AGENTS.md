# watchtower-website

Astro 7 + Fumadocs documentation site, with the Kage WebGL landing experience
served from `public/index.html` and `public/kage.html`.

## Commands

- `npm run dev` — Astro dev server on port 5000
- `npm run build` — check local Kage assets and build the static site

## Deploy

GitHub Pages via the `Deploy to GitHub Pages` Actions workflow on `main`.
The workflow uses Node 24 and builds with the `/watchtower-website` base path.
Live at https://ferelking242.github.io/watchtower-website/

## Documentation

Documentation is stored as MDX in `content/docs/`. English pages use the base
filename; translated pages use `.<locale>.mdx`, matching the Fumadocs `dot`
parser. `meta.json` / `meta.<locale>.json` files define localized navigation.

The supported locales mirror the app: English, French, Spanish, Portuguese,
German, Italian, Russian, Arabic, Japanese, Korean, Chinese, Turkish, Hindi,
Indonesian, and Thai. Untranslated prose falls back to English.

The public voice is user-facing: explain what readers see in Watchtower and
what to do, rather than documenting implementation internals except in the
development section.

## Self-contained landing assets

Three.js, Kage foreground images, and web fonts are vendored in `public/`.
`public/kage.html` must reference local files with relative `./vendor/` or
`./assets/` paths, not CDN resources. Keep `public/index.html` in sync with the
Kage landing page because it is the GitHub Pages root document.
