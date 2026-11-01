import { useI18n } from "fumadocs-ui/contexts/i18n";
import { useEffect, useMemo, useState } from "react";

type ExtensionCategory =
  | "watch"
  | "manga"
  | "novel"
  | "music"
  | "game"
  | "subtitles"
  | "plugins";

interface ExtensionEntry {
  id: string;
  category: ExtensionCategory;
  name: string;
  languages: string[];
  version: string;
  description: string;
  website: string;
  sourceCodeUrl: string;
  tags: string[];
  adult: boolean;
  login: boolean;
  requiresAccount: boolean;
  addedAt: string;
}

interface CatalogueData {
  source: string;
  generatedAt: string;
  extensions: ExtensionEntry[];
}

const categories: ExtensionCategory[] = [
  "watch",
  "manga",
  "novel",
  "music",
  "game",
  "subtitles",
  "plugins",
];

const labels = {
  en: {
    title: "Explore the extensions",
    intro:
      "Browse the real Watchtower extensions registry. Search by name, source, language, or tag.",
    search: "Search extensions",
    allTypes: "All categories",
    allLanguages: "All languages",
    includeAdult: "Include adult sources",
    showing: "showing",
    of: "of",
    sources: "extensions",
    loading: "Loading the extension catalogue…",
    loadError: "The catalogue could not be loaded.",
    retry: "Reload",
    empty: "No extensions match these filters.",
    previous: "Previous",
    next: "Next",
    page: "Page",
    visit: "Visit source",
    code: "Source code",
    version: "Version",
    login: "Login",
    account: "Account required",
    adult: "Adult",
    all: "All languages",
    multi: "Multilingual",
    repository: "Open extension repository",
    categories: {
      watch: "Anime & video",
      manga: "Manga & comics",
      novel: "Novels",
      music: "Music",
      game: "Games",
      subtitles: "Subtitles",
      plugins: "Plugins",
    },
  },
  fr: {
    title: "Explorer les extensions",
    intro:
      "Parcourez le vrai registre des extensions Watchtower. Recherchez par nom, source, langue ou mot-clé.",
    search: "Rechercher une extension",
    allTypes: "Toutes les catégories",
    allLanguages: "Toutes les langues",
    includeAdult: "Inclure les sources adultes",
    showing: "affichées",
    of: "sur",
    sources: "extensions",
    loading: "Chargement du catalogue d’extensions…",
    loadError: "Le catalogue n’a pas pu être chargé.",
    retry: "Recharger",
    empty: "Aucune extension ne correspond à ces filtres.",
    previous: "Précédent",
    next: "Suivant",
    page: "Page",
    visit: "Visiter la source",
    code: "Code source",
    version: "Version",
    login: "Connexion",
    account: "Compte requis",
    adult: "Adulte",
    all: "Toutes les langues",
    multi: "Multilingue",
    repository: "Ouvrir le dépôt d’extensions",
    categories: {
      watch: "Anime et vidéo",
      manga: "Manga et BD",
      novel: "Romans",
      music: "Musique",
      game: "Jeux",
      subtitles: "Sous-titres",
      plugins: "Plugins",
    },
  },
} as const;

function safeUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:"
      ? url.toString()
      : undefined;
  } catch {
    return undefined;
  }
}

function languageName(
  code: string,
  locale: string,
  copy: { all: string; multi: string },
) {
  if (code === "all") return copy.all;
  if (code === "multi") return copy.multi;

  try {
    return (
      new Intl.DisplayNames([locale], { type: "language" }).of(code) ??
      code.toUpperCase()
    );
  } catch {
    return code.toUpperCase();
  }
}

export default function ExtensionCatalogue() {
  const { locale = "en" } = useI18n();
  const copy = locale === "fr" ? labels.fr : labels.en;
  const [entries, setEntries] = useState<ExtensionEntry[]>();
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<ExtensionCategory | "all">("all");
  const [language, setLanguage] = useState("all");
  const [includeAdult, setIncludeAdult] = useState(false);
  const [page, setPage] = useState(0);
  const pageSize = 24;

  useEffect(() => {
    const controller = new AbortController();
    const catalogueUrl = `${import.meta.env.BASE_URL}catalogue/extensions.json`;

    fetch(catalogueUrl, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Catalogue request failed: ${response.status}`);
        }
        return response.json() as Promise<CatalogueData>;
      })
      .then((data) => {
        if (!Array.isArray(data.extensions)) {
          throw new Error("Catalogue response has no extension list");
        }
        setEntries(data.extensions);
      })
      .catch((reason: unknown) => {
        if (reason instanceof DOMException && reason.name === "AbortError") return;
        setError(true);
      });

    return () => controller.abort();
  }, []);

  useEffect(() => {
    setPage(0);
  }, [category, includeAdult, language, search]);

  const availableLanguages = useMemo(() => {
    if (!entries) return [];
    return [...new Set(entries.flatMap((entry) => entry.languages))]
      .filter((value) => value && value !== "all")
      .sort((a, b) =>
        languageName(a, locale, copy).localeCompare(languageName(b, locale, copy)),
      );
  }, [copy, entries, locale]);

  const visibleEntries = useMemo(() => {
    if (!entries) return [];

    const query = search.trim().toLocaleLowerCase();
    return entries
      .filter((entry) => category === "all" || entry.category === category)
      .filter(
        (entry) =>
          language === "all" ||
          entry.languages.includes(language) ||
          entry.languages.includes("all"),
      )
      .filter((entry) => includeAdult || !entry.adult)
      .filter((entry) => {
        if (!query) return true;
        const searchable = [
          entry.name,
          entry.website,
          entry.description,
          ...entry.languages,
          ...entry.tags,
        ]
          .join(" ")
          .toLocaleLowerCase();
        return searchable.includes(query);
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [category, entries, includeAdult, language, search]);
  const pageCount = Math.ceil(visibleEntries.length / pageSize);
  const pagedEntries = visibleEntries.slice(page * pageSize, (page + 1) * pageSize);

  return (
    <section className="not-prose my-8 space-y-6" aria-label={copy.title}>
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fd-primary">
          Watchtower · Extensions
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-fd-foreground">
          {copy.title}
        </h2>
        <p className="max-w-2xl text-sm leading-6 text-fd-muted-foreground">
          {copy.intro}
        </p>
      </header>

      <div className="space-y-4 rounded-2xl border border-fd-border bg-fd-card p-4">
        <label className="sr-only" htmlFor="extension-search">
          {copy.search}
        </label>
        <input
          id="extension-search"
          className="w-full rounded-xl border border-fd-border bg-fd-background px-4 py-3 text-sm text-fd-foreground outline-none placeholder:text-fd-muted-foreground focus-visible:ring-2 focus-visible:ring-fd-ring"
          type="search"
          placeholder={copy.search}
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <div className="flex flex-wrap items-center gap-3">
          <label className="sr-only" htmlFor="extension-language">
            {copy.allLanguages}
          </label>
          <select
            id="extension-language"
            className="min-w-48 rounded-lg border border-fd-border bg-fd-background px-3 py-2 text-sm text-fd-foreground"
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
          >
            <option value="all">{copy.allLanguages}</option>
            {availableLanguages.map((value) => (
              <option key={value} value={value}>
                {languageName(value, locale, copy)}
              </option>
            ))}
          </select>
          <label className="flex items-center gap-2 text-sm text-fd-muted-foreground">
            <input
              type="checkbox"
              checked={includeAdult}
              onChange={(event) => setIncludeAdult(event.target.checked)}
            />
            {copy.includeAdult}
          </label>
        </div>
        <div className="flex flex-wrap gap-2" aria-label={copy.allTypes}>
          <button
            type="button"
            onClick={() => setCategory("all")}
            aria-pressed={category === "all"}
            className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
              category === "all"
                ? "border-fd-primary bg-fd-primary text-fd-primary-foreground"
                : "border-fd-border text-fd-muted-foreground hover:bg-fd-accent"
            }`}
          >
            {copy.allTypes}
          </button>
          {categories.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setCategory(value)}
              aria-pressed={category === value}
              className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                category === value
                  ? "border-fd-primary bg-fd-primary text-fd-primary-foreground"
                  : "border-fd-border text-fd-muted-foreground hover:bg-fd-accent"
              }`}
            >
              {copy.categories[value]}
            </button>
          ))}
        </div>
      </div>

      {error ? (
        <div
          className="rounded-xl border border-fd-border bg-fd-card p-6 text-sm"
          role="alert"
        >
          <p>{copy.loadError}</p>
          <button
            type="button"
            className="mt-3 rounded-lg border border-fd-border px-3 py-2 hover:bg-fd-accent"
            onClick={() => window.location.reload()}
          >
            {copy.retry}
          </button>
        </div>
      ) : entries ? (
        <>
          <p className="text-sm text-fd-muted-foreground" aria-live="polite">
            {visibleEntries.length.toLocaleString(locale)} {copy.showing} {copy.of}{" "}
            {entries.length.toLocaleString(locale)} {copy.sources}
          </p>
          {visibleEntries.length ? (
            <div className="grid gap-3 md:grid-cols-2">
              {pagedEntries.map((entry) => {
                const website = safeUrl(entry.website);
                const sourceCode = safeUrl(entry.sourceCodeUrl);

                return (
                  <article
                    key={entry.id}
                    className="flex min-w-0 flex-col gap-4 rounded-2xl border border-fd-border bg-fd-card p-4 transition-colors hover:border-fd-primary/50"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-fd-primary/10 text-lg font-semibold text-fd-primary"
                        aria-hidden="true"
                      >
                        {entry.name.trim().charAt(0).toLocaleUpperCase()}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="truncate font-semibold text-fd-foreground">
                            {entry.name}
                          </h3>
                          <span className="rounded-full bg-fd-secondary px-2 py-0.5 text-[10px] text-fd-secondary-foreground">
                            {copy.categories[entry.category]}
                          </span>
                          {entry.adult && (
                            <span className="rounded-full border border-fd-border px-2 py-0.5 text-[10px] text-fd-muted-foreground">
                              {copy.adult}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 truncate text-xs text-fd-muted-foreground">
                          {entry.languages
                            .map((value) => languageName(value, locale, copy))
                            .join(" · ")}
                          {entry.version ? ` · ${copy.version} ${entry.version}` : ""}
                        </p>
                      </div>
                    </div>

                    <p className="line-clamp-3 min-h-12 text-sm leading-5 text-fd-muted-foreground">
                      {entry.description || entry.website}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {entry.login && (
                        <span className="rounded-md bg-fd-secondary/70 px-2 py-1 text-[10px] text-fd-secondary-foreground">
                          {copy.login}
                        </span>
                      )}
                      {entry.requiresAccount && (
                        <span className="rounded-md bg-fd-secondary/70 px-2 py-1 text-[10px] text-fd-secondary-foreground">
                          {copy.account}
                        </span>
                      )}
                      {entry.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-fd-border px-2 py-1 text-[10px] text-fd-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex flex-wrap gap-2 border-t border-fd-border pt-3">
                      {website && (
                        <a
                          href={website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg bg-fd-primary px-3 py-2 text-xs font-medium text-fd-primary-foreground hover:opacity-90"
                        >
                          {copy.visit}
                        </a>
                      )}
                      {sourceCode && (
                        <a
                          href={sourceCode}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-lg border border-fd-border px-3 py-2 text-xs text-fd-foreground hover:bg-fd-accent"
                        >
                          {copy.code}
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <p className="rounded-xl border border-fd-border bg-fd-card p-6 text-sm text-fd-muted-foreground">
              {copy.empty}
            </p>
          )}
          {pageCount > 1 && (
            <nav
              className="flex items-center justify-between gap-3"
              aria-label={`${copy.page} navigation`}
            >
              <button
                type="button"
                disabled={page === 0}
                onClick={() => setPage((current) => Math.max(0, current - 1))}
                className="rounded-lg border border-fd-border px-3 py-2 text-sm text-fd-foreground enabled:hover:bg-fd-accent disabled:cursor-not-allowed disabled:opacity-40"
              >
                {copy.previous}
              </button>
              <span className="text-xs text-fd-muted-foreground" aria-live="polite">
                {copy.page} {page + 1} / {pageCount}
              </span>
              <button
                type="button"
                disabled={page >= pageCount - 1}
                onClick={() =>
                  setPage((current) => Math.min(pageCount - 1, current + 1))
                }
                className="rounded-lg border border-fd-border px-3 py-2 text-sm text-fd-foreground enabled:hover:bg-fd-accent disabled:cursor-not-allowed disabled:opacity-40"
              >
                {copy.next}
              </button>
            </nav>
          )}
        </>
      ) : (
        <p
          className="rounded-xl border border-fd-border bg-fd-card p-6 text-sm text-fd-muted-foreground"
          role="status"
        >
          {copy.loading}
        </p>
      )}

      <a
        href="https://github.com/ferelking242/watchtower-extensions"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex text-sm text-fd-primary underline-offset-4 hover:underline"
      >
        {copy.repository}
      </a>
    </section>
  );
}
