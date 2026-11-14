import { useI18n } from "fumadocs-ui/contexts/i18n";
import { useMemo, useState } from "react";
import reference from "../data/layout-reference.json";

interface Parameter {
  key: string;
  label: string;
  type: string;
  kind: string;
  default: string | null;
  aliases: string[];
  description: string | null;
  example: string | null;
  group: string;
}

interface ComponentEntry {
  id: string;
  className: string;
  label: string;
  category: string;
  description: string;
  family: string;
  selectable: boolean;
  aliases: string[];
}

const categories = reference.categories as { name: string; ids: string[] }[];
const components = reference.components as ComponentEntry[];
const byId = new Map(components.map((c) => [c.id, c]));

const copy = {
  en: {
    search: "Search an id, a label or a family…",
    all: "All categories",
    ids: "component ids",
    aliases: "aliases",
    categories: "categories",
    copied: "Copied",
    copy: "Copy id",
    hidden: "Compatibility only",
    aliasesLabel: "Aliases",
    family: "Family",
    empty: "No id matches this search.",
    paramsTitle: "Parameter palette",
    paramsIntro:
      "Every family shares the common palette; a few families add their own keys. Pick a family to see exactly what its cards accept.",
    common: "Common to every family",
  },
  fr: {
    search: "Rechercher un id, un libellé ou une famille…",
    all: "Toutes les catégories",
    ids: "ids de composants",
    aliases: "alias",
    categories: "catégories",
    copied: "Copié",
    copy: "Copier l'id",
    hidden: "Compatibilité seule",
    aliasesLabel: "Alias",
    family: "Famille",
    empty: "Aucun id ne correspond à cette recherche.",
    paramsTitle: "Palette de paramètres",
    paramsIntro:
      "Toutes les familles partagent la palette commune ; quelques-unes ajoutent leurs propres clés. Choisissez une famille pour voir ce que ses cartes acceptent.",
    common: "Commun à toutes les familles",
  },
};

const families = Object.keys(reference.familyParams) as string[];
const commonKeys = new Set(
  (reference.commonParams as Parameter[]).map((p) => p.key),
);

function ParameterRow({ parameter }: { parameter: Parameter }) {
  const aliases = parameter.aliases.length ? parameter.aliases.join(", ") : "—";
  const def = parameter.default ?? "—";
  return (
    <div className="grid gap-1 border-b border-fd-border/60 py-3 last:border-0 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-4">
      <div className="space-y-1">
        <code className="rounded bg-fd-muted px-1.5 py-0.5 text-sm font-semibold text-fd-foreground">
          {parameter.key}
        </code>
        <p className="text-xs text-fd-muted-foreground">
          {parameter.type} · {parameter.label}
        </p>
      </div>
      <div className="space-y-1">
        {parameter.description && (
          <p className="text-sm leading-6 text-fd-foreground/90">
            {parameter.description}
          </p>
        )}
        <p className="text-xs text-fd-muted-foreground">
          default <code>{def}</code>
          {parameter.example && (
            <>
              {" · "}exemple <code>{parameter.example}</code>
            </>
          )}
          {parameter.aliases.length > 0 && (
            <>
              {" · "}alias <code>{aliases}</code>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default function LayoutReference({ locale }: { locale?: string }) {
  const { locale: activeLocale } = useI18n();
  const text = (locale ?? activeLocale) === "fr" ? copy.fr : copy.en;
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [copied, setCopied] = useState<string | null>(null);
  const [family, setFamily] = useState(families[0]);

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return components.filter((entry) => {
      if (category !== "all" && entry.category !== category) return false;
      if (!needle) return true;
      const haystack = [
        entry.id,
        entry.label,
        entry.className,
        entry.family,
        entry.description,
        ...entry.aliases,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(needle);
    });
  }, [query, category]);

  const grouped = useMemo(() => {
    const map = new Map<string, ComponentEntry[]>();
    for (const entry of visible) {
      const list = map.get(entry.category) ?? [];
      list.push(entry);
      map.set(entry.category, list);
    }
    return [...map.entries()];
  }, [visible]);

  const familyParams = reference.familyParams[
    family as keyof typeof reference.familyParams
  ] as Parameter[];
  const extras = familyParams.filter((p) => !commonKeys.has(p.key));

  async function copyId(id: string) {
    try {
      await navigator.clipboard.writeText(id);
      setCopied(id);
      window.setTimeout(() => setCopied((c) => (c === id ? null : c)), 1200);
    } catch {
      /* clipboard unavailable: the id stays selectable on screen */
    }
  }

  return (
    <div className="not-prose my-8 space-y-8">
      <section className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {[
            [reference.idCount, text.ids],
            [reference.aliasCount, text.aliases],
            [categories.length, text.categories],
          ].map(([value, label]) => (
            <div
              key={String(label)}
              className="rounded-xl border border-fd-border bg-fd-card px-3 py-2 text-center"
            >
              <p className="text-xl font-semibold text-fd-foreground">{value}</p>
              <p className="text-[0.7rem] uppercase tracking-wider text-fd-muted-foreground">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={text.search}
            className="w-full rounded-xl border border-fd-border bg-fd-card px-3 py-2 text-sm text-fd-foreground outline-none placeholder:text-fd-muted-foreground focus:border-fd-primary"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategory("all")}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
              category === "all"
                ? "border-fd-primary bg-fd-primary text-fd-primary-foreground"
                : "border-fd-border text-fd-muted-foreground hover:border-fd-primary/60"
            }`}
          >
            {text.all}
          </button>
          {categories.map((entry) => (
            <button
              key={entry.name}
              type="button"
              onClick={() => setCategory(entry.name)}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                category === entry.name
                  ? "border-fd-primary bg-fd-primary text-fd-primary-foreground"
                  : "border-fd-border text-fd-muted-foreground hover:border-fd-primary/60"
              }`}
            >
              {entry.name} · {entry.ids.length}
            </button>
          ))}
        </div>

        {grouped.length === 0 && (
          <p className="rounded-xl border border-dashed border-fd-border px-4 py-6 text-center text-sm text-fd-muted-foreground">
            {text.empty}
          </p>
        )}

        <div className="space-y-6">
          {grouped.map(([name, entries]) => (
            <div key={name} className="space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-fd-primary">
                {name}
              </h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {entries.map((entry) => (
                  <div
                    key={entry.id}
                    className="group flex items-start justify-between gap-3 rounded-xl border border-fd-border bg-fd-card px-3 py-2"
                  >
                    <div className="min-w-0 space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <code className="truncate text-sm font-semibold text-fd-foreground">
                          {entry.id}
                        </code>
                        {!entry.selectable && (
                          <span className="rounded-full border border-fd-border px-2 py-0.5 text-[0.65rem] text-fd-muted-foreground">
                            {text.hidden}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-fd-muted-foreground">
                        {entry.label} · {entry.family}
                      </p>
                      {entry.aliases.length > 0 && (
                        <p className="text-[0.7rem] text-fd-muted-foreground/80">
                          {text.aliasesLabel} : {entry.aliases.join(", ")}
                        </p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => copyId(entry.id)}
                      title={text.copy}
                      className="shrink-0 rounded-lg border border-fd-border px-2 py-1 text-[0.7rem] text-fd-muted-foreground opacity-0 transition group-hover:opacity-100 focus:opacity-100 hover:border-fd-primary/60 hover:text-fd-foreground"
                    >
                      {copied === entry.id ? text.copied : text.copy}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-fd-foreground">
            {text.paramsTitle}
          </h2>
          <p className="max-w-3xl text-sm leading-6 text-fd-muted-foreground">
            {text.paramsIntro}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {families.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => setFamily(name)}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                family === name
                  ? "border-fd-primary bg-fd-primary text-fd-primary-foreground"
                  : "border-fd-border text-fd-muted-foreground hover:border-fd-primary/60"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
        <div className="rounded-2xl border border-fd-border bg-fd-card px-4 py-2">
          <p className="border-b border-fd-border/60 py-2 text-xs font-semibold uppercase tracking-wider text-fd-muted-foreground">
            {text.common} · {(reference.commonParams as Parameter[]).length}
          </p>
          {(reference.commonParams as Parameter[]).map((parameter) => (
            <ParameterRow key={parameter.key} parameter={parameter} />
          ))}
          {extras.length > 0 && (
            <>
              <p className="border-b border-fd-border/60 pt-4 pb-2 text-xs font-semibold uppercase tracking-wider text-fd-primary">
                {family} · +{extras.length}
              </p>
              {extras.map((parameter) => (
                <ParameterRow key={parameter.key} parameter={parameter} />
              ))}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
