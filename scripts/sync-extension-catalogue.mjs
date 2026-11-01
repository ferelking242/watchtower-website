import { mkdir, writeFile } from "node:fs/promises";

const repository =
  "https://github.com/ferelking242/watchtower-extensions";
const rawIndex =
  "https://raw.githubusercontent.com/ferelking242/watchtower-extensions/main/index";
const sourceCategories = ["watch", "manga", "novel", "music", "game", "subtitles"];
const records = [];

function clean(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function languagesFor(entry) {
  const values = Array.isArray(entry.langs)
    ? entry.langs
    : [entry.lang ?? "all"];

  return [...new Set(values.map((value) => clean(value).toLowerCase()).filter(Boolean))];
}

async function fetchJson(url) {
  const response = await fetch(url, { signal: AbortSignal.timeout(30_000) });
  if (!response.ok) {
    throw new Error(`Could not download ${url}: HTTP ${response.status}`);
  }
  return response.json();
}

for (const category of sourceCategories) {
  const entries = await fetchJson(`${rawIndex}/${category}.json`);
  if (!Array.isArray(entries)) {
    throw new Error(`Unexpected data format in the ${category} index`);
  }

  for (const entry of entries) {
    records.push({
      id: `${category}-${entry.id}`,
      category,
      name: clean(entry.name),
      languages: languagesFor(entry),
      version: clean(entry.version),
      description: clean(entry.description || entry.notes).slice(0, 500),
      website: clean(entry.baseUrl),
      sourceCodeUrl: clean(entry.sourceCodeUrl),
      tags: Array.isArray(entry.tags)
        ? entry.tags.map(clean).filter(Boolean).slice(0, 12)
        : [],
      adult: entry.isNsfw === true,
      login: entry.login === true,
      requiresAccount: entry.requiresAccount === true,
      addedAt: clean(entry.addedAt),
    });
  }
}

const pluginIndex = await fetchJson(`${rawIndex}/plugins.json`);
if (!Array.isArray(pluginIndex.plugins)) {
  throw new Error("Unexpected data format in the plugins index");
}

for (const entry of pluginIndex.plugins) {
  records.push({
    id: clean(entry.id),
    category: "plugins",
    name: clean(entry.name),
    languages: ["all"],
    version: clean(entry.version),
    description: clean(entry.description || entry.longDescription).slice(0, 500),
    website: clean(entry.repository),
    sourceCodeUrl: clean(entry.repository),
    tags: Array.isArray(entry.tags)
      ? entry.tags.map(clean).filter(Boolean).slice(0, 12)
      : [],
    adult: entry.isNsfw === true,
    login: false,
    requiresAccount: entry.requiresAccount === true,
    addedAt: clean(entry.publishedAt),
  });
}

records.sort(
  (left, right) =>
    left.category.localeCompare(right.category) ||
    left.name.localeCompare(right.name),
);

const uniqueIds = new Set(records.map((entry) => entry.id));
if (uniqueIds.size !== records.length) {
  throw new Error("The extension registry contains duplicate IDs");
}

await mkdir(new URL("../src/data/", import.meta.url), {
  recursive: true,
});
await writeFile(
  new URL("../src/data/extensions.json", import.meta.url),
  JSON.stringify({
    source: `${repository}/tree/main/index`,
    generatedAt: new Date().toISOString(),
    extensions: records,
  }),
);

console.log(
  `Updated the local catalogue with ${records.length} extensions from ${repository}.`,
);
