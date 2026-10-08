---
name: Docs architecture
description: How the multilingual Watchtower documentation site is structured and how to add sections or languages.
---

The docs live in `src/` with no framework beyond React + Vite:

- `src/i18n.js` — `LANGUAGES` (the 15 locales mirrored from the app's `lib/l10n/*.arb`), `SECTION_GROUPS`, `SECTION_ICONS`, and `UI` (chrome strings per language). `getUi`/`getDir` resolve a locale; `dir` is `rtl` for Arabic.
- `src/content/en.js` — the authoritative English content, keyed by section id. Each entry has `title`, `body`, `marker`, `code`, `subsections` (`[title, body]` pairs) and `facts`.
- `src/content/<code>.js` — prose overlays for the other 14 locales. They only override `title`, `body`, `subsections` and `facts`; `code` and `marker` always come from English because code is language-independent.
- `src/content/index.js` — merges each overlay over the English base and exposes `getContent(code)`.

**Why:** the app already ships 15 locales, so the docs offer exactly the same set instead of a partial list. Keeping code blocks in one place avoids translating identical snippets 15 times.

**How to apply:** to add a section, add its id to `SECTION_GROUPS` and `SECTION_ICONS` in `i18n.js`, add a `nav` label to every `UI[lang]` entry, then add the English entry in `en.js`. To add a language, add it to `LANGUAGES`, add a `UI[lang]` block, and create `src/content/<code>.js`. Any locale that omits a section automatically falls back to English. Verify with `npm run build` and the content-integrity script that checks all 15 locales expose all 18 sections.
