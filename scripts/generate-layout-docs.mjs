// Generates the `layout-json` reference page (every locale) and refreshes the
// component-id lists in `layout-components`, straight from the JSON that the
// Dart registry exports.
//
// Source of truth: src/data/layout-reference.json, produced by
//   cd watchtower && dart run tool/dump_layout_reference.dart
// so the published documentation can never drift from the app registry.
//
// Run with: npm run docs:layout

import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const docsDir = join(here, "..", "content", "docs", "extension-development");
const data = JSON.parse(
  readFileSync(join(here, "..", "src", "data", "layout-reference.json"), "utf8"),
);

const LOCALES = [
  "en", "fr", "es", "pt", "de", "it", "ru", "ar",
  "ja", "ko", "zh", "tr", "hi", "id", "th",
];

// ── Shared, locale-independent fragments ────────────────────────────────────

const groupOf = (group) => data.commonParams.filter((p) => p.group === group);

function paramTable(params) {
  const rows = params.map((p) => {
    const aliases = p.aliases.length ? p.aliases.join(", ") : "—";
    const def = p.default ?? "—";
    const meaning = p.description ?? p.label;
    return `| \`${p.key}\` | ${p.type} | ${def} | ${aliases} | ${meaning} |`;
  });
  return [
    "| Parameter | Type | Default | Aliases | Meaning |",
    "| --- | --- | --- | --- | --- |",
    ...rows,
  ].join("\n");
}

function familyExtrasTable() {
  const common = new Set(data.commonParams.map((p) => p.key));
  const rows = [];
  for (const [family, params] of Object.entries(data.familyParams)) {
    const extras = params.filter((p) => !common.has(p.key));
    if (!extras.length) continue;
    const label = extras
      .map((p) => {
        const opts = p.type.startsWith("string (") ? ` (${p.type})` : "";
        const def = p.default && p.default !== "—" ? ` = ${p.default}` : "";
        return `\`${p.key}\`${opts}${def}`;
      })
      .join(", ");
    rows.push(`| ${family} | ${label} |`);
  }
  return [
    "| Renderer family | Extra parameters |",
    "| --- | --- |",
    ...rows,
  ].join("\n");
}

function idCatalog() {
  const blocks = data.categories.map((category) => {
    const ids = category.ids.join(", ");
    return `# ${category.name} (${category.ids.length})\n${ids}`;
  });
  return "```text\n" + blocks.join("\n") + "\n```";
}

function aliasTable() {
  const entries = Object.entries(data.aliases);
  if (!entries.length) return "";
  const rows = entries.map(
    ([id, aliases]) => `| \`${id}\` | ${aliases.map((a) => `\`${a}\``).join(", ")} |`,
  );
  return [
    "| Canonical id | Accepted aliases |",
    "| --- | --- |",
    ...rows,
  ].join("\n");
}

// ── Per-locale prose ─────────────────────────────────────────────────────────
// Headings and the short explanatory paragraphs are translated. Parameter and
// id tables keep their English identifiers on purpose: those are the exact
// strings a layout author types, so they must not be translated.

const T = {
  en: {
    title: "Layout JSON reference",
    fullTitle: "The complete layout.json contract and parameter catalogue.",
    description:
      `Every key a layout section accepts, grouped by purpose, with the exact spelling the renderer reads. The registry exposes ${data.idCount} stable ids (${data.aliasCount} aliases). Cards are bare: the section owns the title, subtitle, icon and Tout voir action; the card only draws its content.`,
    intro: [
      ["How a layout is loaded",
        "A source links a declarative layout with `uiLayout` (a repository-relative path such as `ui-layouts/example.json`) and `uiLayoutVersion`. The app downloads it from the raw `main` branch, validates it and renders registered native components. The file is data, not code: it never runs in the source sandbox."],
      ["Root shape",
        "The root object needs a numeric `schemaVersion` (at least 1) and a `home` object. `home.sections` is an ordered array. `browse`, `detail` and `player` are optional overrides. When no layout is declared, Watchtower falls back to its standard Popular, Latest and Search screens."],
      ["Section object",
        "Every section needs a unique, non-empty `id` and a registered `component`. The `id` is passed to `getCustomList(id, page)`, so it must map to real source data. Unknown component ids and duplicate or empty ids fail validation instead of rendering an empty block."],
      ["Where each key goes",
        "Top-level section keys describe the section itself. Card behaviour belongs in the `params` object, which the renderer reads key by key. Only use keys the chosen component family supports; an unknown key is ignored, not an error."],
      ["Cards are bare",
        "Every card draws only its own content. No card ships a header (\"Top 10\", \"Popular\", \"All >\") and no card ships a background panel. The hosting section renders the heading, the subtitle, the icon and the Tout voir action. The panel you see in the developer gallery is the gallery preview frame, and it is never drawn when the component is used in a real page. Put the label in the section, never in the card: to change the heading text, set `title` on the section, not inside `params`."],
    ],
    keyTableTitle: "Section keys",
    layoutTitle: "Layout parameters",
    layoutIntro: "These control the geometry of the row or grid that wraps the cards.",
    layoutNote: "`spacingX` wins over `spacing` horizontally and `spacingY` wins over `spacing` vertically. Use `spacing` alone when you want the same gap on both axes.",
    effectsTitle: "Effects parameters",
    effectsIntro: "These change how a card looks or moves without changing its data.",
    effectsNote: "`mirror` and `reverse` differ by one step. `mirror` moves the visual to the right and keeps the text left-aligned; `reverse` moves the visual to the right and also right-aligns the text. Use `mirror` for a subtle alternation, `reverse` when the card must read from the right edge.",
    contentTitle: "Content parameters",
    contentIntro: "Content parameters override or complete the values that come from the source items. Leave them out to use the item's own data.",
    generalTitle: "General parameters",
    generalIntro: "These name the section and cap how much it shows. They are read from the section, not from the card.",
    familyTitle: "Family-specific parameters",
    familyIntro: "Every id belongs to one renderer family. Most keys are shared by all families; the table lists the extras a family adds on top of the common palette.",
    idsTitle: "The component id catalogue",
    idsIntro: `The registry exposes ${data.idCount} stable kebab-case ids across ${data.categories.length} categories. These are exactly what you write in \`component\`.`,
    aliasTitle: "Aliases",
    aliasIntro: "Aliases resolve to the same card. They stay valid for existing layouts but new layouts should use the canonical id.",
    variantsTitle: "One card, many variants",
    variantsIntro: "Several patterns repeat across the catalogue, and each is a single component with parameters rather than several near-identical widgets. A variant is always a parameter, never a second component id.",
    catalogueNote:
      "A full interactive catalogue of every id and every parameter palette sits at the end of this page: filter by category, copy an id in one click, and switch renderer family to see exactly what its cards accept. It is generated from the app registry, so it always matches the shipping build.",
    validationTitle: "Validation rules",
    validation: [
      "`schemaVersion` is at least 1 and `home` is an object.",
      "Section ids are unique and non-empty.",
      "`component` is a registered id from the id catalogue below.",
      "Each home section id has a matching `getCustomList(id, page)` implementation.",
      "Malformed JSON, missing components and unknown ids are rejected, not ignored.",
    ],
    cheatTitle: "Cheat sheet",
    cheat: [
      "Cards are bare: heading, subtitle, icon and Tout voir live on the section.",
      "Layout keys describe geometry, effect keys describe look and motion, content keys override item data.",
      "`spacingX` / `spacingY` beat `spacing` on their own axis.",
      "`mirror` moves the visual right; `reverse` moves it right and right-aligns the text.",
      "`style` picks the progress variant; `percent`, `color`, `animation` and `chevron` refine it.",
      "`poster-row` carries the badge variant: `showRank`, `showBigRank`, `showRating`, `showViews`, `showMeta`.",
      "`autoScroll` plus `speed` drives the episode carousel; `tilt` drives the universe carousel.",
      "A variant is a parameter, never a second component id.",
    ],
  },
  fr: {
    title: "Référence layout.json",
    fullTitle: "Le contrat complet de layout.json et le catalogue des paramètres.",
    description:
      `Chaque clé acceptée par une section de mise en page, regroupée par usage, avec l'orthographe exacte que lit le moteur. Le registre expose ${data.idCount} ids stables (${data.aliasCount} alias). Les cartes sont nues : la section possède le titre, le sous-titre, l'icône et l'action Tout voir ; la carte ne dessine que son contenu.`,
    intro: [
      ["Chargement d'une mise en page",
        "Une source lie une mise en page déclarative avec `uiLayout` (un chemin relatif au dépôt tel que `ui-layouts/example.json`) et `uiLayoutVersion`. L'application la télécharge depuis la branche `main` brute, la valide et affiche les composants natifs enregistrés. Le fichier est une donnée, pas du code : il ne s'exécute jamais dans le bac à sable de la source."],
      ["Forme racine",
        "L'objet racine exige un `schemaVersion` numérique (au moins 1) et un objet `home`. `home.sections` est un tableau ordonné. `browse`, `detail` et `player` sont des remplacements facultatifs. Sans mise en page déclarée, Watchtower retombe sur ses écrans standard Popular, Latest et Search."],
      ["Objet de section",
        "Chaque section exige un `id` unique et non vide, et un `component` enregistré. L'`id` est transmis à `getCustomList(id, page)` : il doit donc correspondre à de vraies données. Les composants inconnus et les ids vides ou dupliqués échouent à la validation au lieu d'afficher un bloc vide."],
      ["Où va chaque clé",
        "Les clés de premier niveau décrivent la section elle-même. Le comportement des cartes va dans l'objet `params`, que le moteur lit clé par clé. N'utilisez que les clés prises en charge par la famille du composant choisi ; une clé inconnue est ignorée, ce n'est pas une erreur."],
      ["Les cartes sont nues",
        "Chaque carte ne dessine que son contenu. Aucune carte n'embarque d'en-tête (« Top 10 », « Populaires », « Tout voir > ») ni de panneau de fond. C'est la section hôte qui affiche le titre, le sous-titre, l'icône et l'action Tout voir. Le panneau visible dans la galerie développeur est le cadre d'aperçu, et il n'est jamais dessiné quand le composant est utilisé dans une vraie page. Mettez le libellé dans la section, jamais dans la carte : pour changer le titre, définissez `title` sur la section, pas dans `params`."],
    ],
    keyTableTitle: "Clés de section",
    layoutTitle: "Paramètres de disposition",
    layoutIntro: "Ils règlent la géométrie de la rangée ou de la grille qui entoure les cartes.",
    layoutNote: "`spacingX` prime sur `spacing` à l'horizontale et `spacingY` prime sur `spacing` à la verticale. Utilisez `spacing` seul pour un écart identique sur les deux axes.",
    effectsTitle: "Paramètres d'effets",
    effectsIntro: "Ils changent l'aspect ou le mouvement d'une carte sans changer ses données.",
    effectsNote: "`mirror` et `reverse` ne diffèrent que d'un cran. `mirror` place le visuel à droite et garde le texte aligné à gauche ; `reverse` place le visuel à droite et aligne aussi le texte à droite. Utilisez `mirror` pour une alternance discrète, `reverse` quand la carte doit se lire depuis le bord droit.",
    contentTitle: "Paramètres de contenu",
    contentIntro: "Ils remplacent ou complètent les valeurs issues des éléments de la source. Laissez-les de côté pour garder les données de l'élément.",
    generalTitle: "Paramètres généraux",
    generalIntro: "Ils nomment la section et limitent ce qu'elle affiche. Ils sont lus depuis la section, pas depuis la carte.",
    familyTitle: "Paramètres propres à une famille",
    familyIntro: "Chaque id appartient à une famille de moteur. La plupart des clés sont communes à toutes les familles ; le tableau liste les extras qu'une famille ajoute à la palette commune.",
    idsTitle: "Catalogue des ids de composants",
    idsIntro: `Le registre expose ${data.idCount} ids stables en kebab-case répartis en ${data.categories.length} catégories. Ce sont exactement ceux à écrire dans \`component\`.`,
    aliasTitle: "Alias",
    aliasIntro: "Les alias pointent vers la même carte. Ils restent valides pour les mises en page existantes, mais les nouvelles devraient utiliser l'id canonique.",
    variantsTitle: "Une carte, plusieurs variantes",
    variantsIntro: "Plusieurs motifs reviennent dans le catalogue, et chacun est un seul composant à paramètres plutôt que plusieurs widgets quasi identiques. Une variante est toujours un paramètre, jamais un second id de composant.",
    catalogueNote:
      "Un catalogue interactif complet de tous les ids et de toutes les palettes de paramètres se trouve en fin de page : filtrez par catégorie, copiez un id en un clic et changez de famille de moteur pour voir exactement ce que ses cartes acceptent. Il est généré depuis le registre de l'application : il correspond donc toujours à la version livrée.",
    validationTitle: "Règles de validation",
    validation: [
      "`schemaVersion` vaut au moins 1 et `home` est un objet.",
      "Les ids de section sont uniques et non vides.",
      "`component` est un id enregistré du catalogue d'ids ci-dessous.",
      "Chaque id de section a une implémentation `getCustomList(id, page)` correspondante.",
      "Le JSON mal formé, les composants manquants et les ids inconnus sont rejetés, pas ignorés.",
    ],
    cheatTitle: "Mémo",
    cheat: [
      "Les cartes sont nues : titre, sous-titre, icône et Tout voir vivent sur la section.",
      "Les clés de disposition décrivent la géométrie, les clés d'effet l'aspect et le mouvement, les clés de contenu remplacent les données.",
      "`spacingX` / `spacingY` priment sur `spacing` sur leur axe.",
      "`mirror` place le visuel à droite ; `reverse` le place à droite et aligne le texte à droite.",
      "`style` choisit la variante de progression ; `percent`, `color`, `animation` et `chevron` l'affinent.",
      "`poster-row` porte la variante de pastille : `showRank`, `showBigRank`, `showRating`, `showViews`, `showMeta`.",
      "`autoScroll` plus `speed` animent le carrousel d'épisodes ; `tilt` incline le carrousel d'univers.",
      "Une variante est un paramètre, jamais un second id de composant.",
    ],
  },
};

// Locales without a hand-written translation fall back to the English prose but
// keep a translated page title, so the page still appears in every language's
// navigation (matching how the rest of this documentation set is localized).
const FALLBACK_TITLES = {
  es: ["Referencia de layout.json", "El contrato completo de layout.json y el catálogo de parámetros."],
  pt: ["Referência do layout.json", "O contrato completo do layout.json e o catálogo de parâmetros."],
  de: ["layout.json-Referenz", "Der vollständige layout.json-Vertrag und der Parameterkatalog."],
  it: ["Riferimento layout.json", "Il contratto completo di layout.json e il catalogo dei parametri."],
  ru: ["Справочник layout.json", "Полный контракт layout.json и каталог параметров."],
  ar: ["مرجع layout.json", "عقد layout.json الكامل وفهرس المعاملات."],
  ja: ["layout.json リファレンス", "layout.json の完全なコントラクトとパラメータカタログ。"],
  ko: ["layout.json 레퍼런스", "layout.json 전체 계약과 매개변수 카탈로그."],
  zh: ["layout.json 参考", "完整的 layout.json 约定与参数目录。"],
  tr: ["layout.json referansı", "Eksiksiz layout.json sözleşmesi ve parametre kataloğu."],
  hi: ["layout.json संदर्भ", "पूर्ण layout.json अनुबंध और पैरामीटर सूची।"],
  id: ["Referensi layout.json", "Kontrak layout.json lengkap dan katalog parameter."],
  th: ["เอกสารอ้างอิง layout.json", "สัญญา layout.json ฉบับสมบูรณ์และแคตตาล็อกพารามิเตอร์"],
};

function buildPage(locale) {
  const t = T[locale] ?? T.en;
  const fb = FALLBACK_TITLES[locale];
  const title = locale === "en" ? t.title : fb ? fb[0] : t.title;
  const fullTitle = locale === "en" ? t.fullTitle : fb ? fb[1] : t.fullTitle;

  const out = [];
  out.push("---");
  out.push(`title: ${JSON.stringify(title)}`);
  out.push(`fullTitle: ${JSON.stringify(fullTitle)}`);
  out.push(`description: ${JSON.stringify(t.description)}`);
  out.push('marker: "23"');
  out.push("---");
  out.push("");

  const [loadHead, loadBody] = t.intro[0];
  const [rootHead, rootBody] = t.intro[1];
  const [sectionHead, sectionBody] = t.intro[2];
  const [keysHead, keysBody] = t.intro[3];
  const [bareHead, bareBody] = t.intro[4];

  out.push(`## ${loadHead}`, "", loadBody, "");
  out.push(`## ${rootHead}`, "", rootBody, "");
  out.push("```json", `{`, `  "schemaVersion": 1,`, `  "home": { "sections": [] }`, `}`, "```", "");
  out.push(`## ${sectionHead}`, "", sectionBody, "");
  out.push("```json", `{`,
    `  "id": "trending",`,
    `  "component": "spotlight",`,
    `  "title": "Tendances",`,
    `  "subtitle": "Mis à jour il y a 2 h",`,
    `  "icon": "whatshot",`,
    `  "accent": "primary",`,
    `  "seeAll": true,`,
    `  "paginated": true,`,
    `  "params": { "layout": "row", "items": 12 }`,
    `}`, "```", "");
  out.push(`## ${keysHead}`, "", keysBody, "");
  out.push("| Key | Type | Role |", "| --- | --- | --- |");
  out.push("| `id` | string | Data provider id passed to `getCustomList` |");
  out.push("| `component` | string | Registered component id |");
  out.push("| `title` | string | Section heading |");
  out.push("| `subtitle` | string | Heading sub-line |");
  out.push("| `icon` | string | Stable Material icon name |");
  out.push("| `accent` | string | Theme name or `#RRGGBB` |");
  out.push("| `seeAll` | boolean | Show the Tout voir action |");
  out.push("| `paginated` | boolean | Section loads more pages |");
  out.push("| `requiresAuth` | boolean | Section needs a signed-in account |");
  out.push("| `monthSelector` | boolean | Section shows a month picker |");
  out.push("| `params` | object | Card parameters (see below) |");
  out.push("");
  out.push(`## ${bareHead}`, "", bareBody, "");
  out.push(t.catalogueNote, "");
  out.push(`## ${t.variantsTitle}`, "", t.variantsIntro, "");
  out.push("### Progress card", "", "```json", "{", `  "id": "continue",`, `  "component": "watch-progress",`, `  "title": "Reprendre",`, `  "params": {`,
    `    "style": "percent",`, `    "percent": true,`, `    "color": "green",`,
    `    "animation": true,`, `    "chevron": true,`, `    "mirror": false,`, `    "reverse": false`,
    `  }`, "}", "```", "");
  out.push("### Episode carousel with auto-scroll", "", "```json", "{", `  "id": "episodes",`, `  "component": "episode-carousel",`, `  "title": "Épisodes",`,
    `  "params": { "autoScroll": true, "speed": 30, "tileWidth": 96 }`, "}", "```", "");
  out.push("### Mirrored season banner", "", "```json", "{", `  "id": "season",`, `  "component": "season-banner",`, `  "title": "Saison 2",`,
    `  "params": { "mirror": true, "coverWidth": 118 }`, "}", "```", "");
  out.push("### Poster row with a badge variant", "", "```json", "{", `  "id": "top10",`, `  "component": "poster-row",`, `  "title": "Top 10 cette semaine",`, `  "params": {`,
    `    "showBigRank": true,`, `    "showMeta": true,`, `    "spacingX": 10`, `  }`, "}", "```", "");
  out.push("### Tilted universe carousel", "", "```json", "{", `  "id": "universe",`, `  "component": "universe",`, `  "title": "Univers",`,
    `  "params": { "tilt": 0.05 }`, "}", "```", "");
  out.push("### Grid and spacing", "", "```json", "{", `  "id": "grid",`, `  "component": "poster",`, `  "title": "Catalogue",`, `  "params": {`,
    `    "layout": "grid",`, `    "columns": 4,`, `    "rows": 2,`, `    "spacingX": 14,`,
    `    "spacingY": 18,`, `    "items": 8`, `  }`, "}", "```", "");
  out.push(`## ${t.validationTitle}`, "");
  for (const line of t.validation) out.push(`- ${line}`);
  out.push("");
  out.push(`## ${t.cheatTitle}`, "");
  for (const line of t.cheat) out.push(`- ${line}`);
  out.push("");

  return out.join("\n");
}

let written = 0;
for (const locale of LOCALES) {
  const name = locale === "en" ? "layout-json.mdx" : `layout-json.${locale}.mdx`;
  writeFileSync(join(docsDir, name), buildPage(locale), "utf8");
  written++;
}

// ── Refresh the id catalogue inside layout-components (all locales) ─────────

function refreshComponentsPage(locale) {
  const name = locale === "en" ? "layout-components.mdx" : `layout-components.${locale}.mdx`;
  const path = join(docsDir, name);
  let text;
  try {
    text = readFileSync(path, "utf8");
  } catch {
    return false;
  }
  const total = data.idCount + data.aliasCount;

  // Counts in frontmatter and prose ("adds N stable card ids", "all N ids").
  text = text.replace(/adds \d+ stable card ids/g, `adds ${total} stable card ids`);
  text = text.replace(/ajoute \d+ ids de cartes stables/g, `ajoute ${total} ids de cartes stables`);
  text = text.replace(/all \d+ GalleryComponentCatalog ids/g, `all ${total} GalleryComponentCatalog ids`);
  text = text.replace(/les \d+ ids GalleryComponentCatalog/g, `les ${total} ids GalleryComponentCatalog`);
  text = text.replace(/## The \d+ gallery ids/g, `## The ${total} gallery ids`);
  text = text.replace(/## Les \d+ ids du catalogue/g, `## Les ${total} ids du catalogue`);
  text = text.replace(/contains \d+ stable gallery component ids/g, `contains ${total} stable gallery component ids`);
  text = text.replace(/contient \d+ ids stables de composants/g, `contient ${total} ids stables de composants`);

  // Replace the fenced id catalogue block with the freshly generated one.
  const fence = /```text\n[\s\S]*?\n```/;
  const generated = idCatalog();
  if (fence.test(text)) {
    text = text.replace(fence, generated);
  } else {
    text = `${text.trimEnd()}\n\n## The ${total} gallery ids\n\n${generated}\n`;
  }
  writeFileSync(path, text, "utf8");
  return true;
}

let componentsWritten = 0;
for (const locale of LOCALES) {
  if (refreshComponentsPage(locale)) componentsWritten++;
}

console.log(
  `layout-json: ${written} locale(s); layout-components refreshed: ${componentsWritten}; ` +
    `ids=${data.idCount} aliases=${data.aliasCount}`,
);
