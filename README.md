# Watchtower website

The public site for Watchtower: a Kage-inspired Three.js landing page and a
multilingual documentation site built with Astro and Fumadocs.

## Local development

```bash
npm ci
npm run dev
```

The landing page is served from `public/index.html` and `public/kage.html`.
The docs start at `/docs/`; Fumadocs serves the 15 app locales and builds the
search index locally.

## Documentation content

Write documentation as MDX in `content/docs/`. English pages use the base
filename; translated pages use the locale suffix, for example
`getting-started.fr.mdx`. Navigation and localized group labels live in the
matching `meta.json` files.

## Deployment

The `Deploy to GitHub Pages` workflow builds the static Astro output and
publishes `dist/` to GitHub Pages on every push to `main`. GitHub Actions builds
with the `/watchtower-website` base path; local development uses `/`.