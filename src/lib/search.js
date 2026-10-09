// Builds a fuzzy index over the documentation so the sidebar search can rank
// results and jump straight to the matching block, not just the page.
import Fuse from "fuse.js";

export function buildSearchIndex(sections, labels, content) {
  const documents = [];

  for (const section of sections) {
    const page = content[section.id];
    if (!page) continue;
    const navLabel = labels[section.key] || section.id;

    documents.push({
      id: section.id,
      key: section.key,
      kind: "page",
      anchor: "docs-summary",
      title: page.title,
      navLabel,
      haystack: [navLabel, page.title, page.body].filter(Boolean).join(" ")
    });

    (page.subsections || []).forEach(([title, body], index) => {
      documents.push({
        id: section.id,
        key: section.key,
        kind: "subsection",
        anchor: `docs-subsection-${index}`,
        title,
        navLabel,
        haystack: [navLabel, title, body].filter(Boolean).join(" ")
      });
    });
  }

  return new Fuse(documents, {
    includeScore: true,
    threshold: 0.34,
    ignoreLocation: true,
    minMatchCharLength: 2,
    keys: [
      { name: "title", weight: 0.6 },
      { name: "navLabel", weight: 0.25 },
      { name: "haystack", weight: 0.15 }
    ]
  });
}

// Collapses the flat matches into one entry per page, keeping the best-scoring
// subsection so the sidebar can offer a direct jump into the page.
export function rankSearch(fuse, query, limit = 12) {
  if (!query.trim()) return [];
  const results = fuse.search(query.trim(), { limit: 60 });
  const byPage = new Map();

  for (const result of results) {
    const doc = result.item;
    const score = result.score ?? 1;
    const existing = byPage.get(doc.id);
    if (!existing) {
      byPage.set(doc.id, { page: doc, score, target: doc, targets: [doc] });
      continue;
    }
    existing.targets.push(doc);
    if (score < existing.score) {
      existing.score = score;
      existing.target = doc;
    }
  }

  return [...byPage.values()]
    .sort((a, b) => a.score - b.score)
    .slice(0, limit);
}
