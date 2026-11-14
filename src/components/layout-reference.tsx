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

interface Strings {
  search: string;
  all: string;
  ids: string;
  aliases: string;
  categories: string;
  copied: string;
  copy: string;
  hidden: string;
  aliasesLabel: string;
  family: string;
  empty: string;
  paramsTitle: string;
  paramsIntro: string;
  common: string;
  defaultLabel: string;
  exampleLabel: string;
}

const copy: Record<string, Strings> = {
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
    defaultLabel: "default",
    exampleLabel: "example",
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
    defaultLabel: "défaut",
    exampleLabel: "exemple",
  },
  es: {
    search: "Buscar un id, una etiqueta o una familia…",
    all: "Todas las categorías",
    ids: "ids de componentes",
    aliases: "alias",
    categories: "categorías",
    copied: "Copiado",
    copy: "Copiar id",
    hidden: "Solo compatibilidad",
    aliasesLabel: "Alias",
    family: "Familia",
    empty: "Ningún id coincide con esta búsqueda.",
    paramsTitle: "Paleta de parámetros",
    paramsIntro:
      "Todas las familias comparten la paleta común; algunas añaden sus propias claves. Elige una familia para ver exactamente lo que aceptan sus tarjetas.",
    common: "Común a todas las familias",
    defaultLabel: "por defecto",
    exampleLabel: "ejemplo",
  },
  pt: {
    search: "Buscar um id, um rótulo ou uma família…",
    all: "Todas as categorias",
    ids: "ids de componentes",
    aliases: "alias",
    categories: "categorias",
    copied: "Copiado",
    copy: "Copiar id",
    hidden: "Apenas compatibilidade",
    aliasesLabel: "Alias",
    family: "Família",
    empty: "Nenhum id corresponde a esta pesquisa.",
    paramsTitle: "Paleta de parâmetros",
    paramsIntro:
      "Todas as famílias compartilham a paleta comum; algumas adicionam as suas próprias chaves. Escolha uma família para ver exatamente o que as suas cartas aceitam.",
    common: "Comum a todas as famílias",
    defaultLabel: "predefinição",
    exampleLabel: "exemplo",
  },
  de: {
    search: "Nach id, Label oder Familie suchen…",
    all: "Alle Kategorien",
    ids: "Komponenten-ids",
    aliases: "Aliasse",
    categories: "Kategorien",
    copied: "Kopiert",
    copy: "id kopieren",
    hidden: "Nur Kompatibilität",
    aliasesLabel: "Aliasse",
    family: "Familie",
    empty: "Kein id passt zu dieser Suche.",
    paramsTitle: "Parameter-Palette",
    paramsIntro:
      "Alle Familien teilen die gemeinsame Palette; einige fügen eigene Schlüssel hinzu. Wähle eine Familie, um genau zu sehen, was ihre Karten akzeptieren.",
    common: "Für alle Familien gemeinsam",
    defaultLabel: "Standard",
    exampleLabel: "Beispiel",
  },
  it: {
    search: "Cerca un id, un'etichetta o una famiglia…",
    all: "Tutte le categorie",
    ids: "id dei componenti",
    aliases: "alias",
    categories: "categorie",
    copied: "Copiato",
    copy: "Copia id",
    hidden: "Solo compatibilità",
    aliasesLabel: "Alias",
    family: "Famiglia",
    empty: "Nessun id corrisponde a questa ricerca.",
    paramsTitle: "Palette dei parametri",
    paramsIntro:
      "Tutte le famiglie condividono la palette comune; alcune aggiungono le proprie chiavi. Scegli una famiglia per vedere esattamente cosa accettano le sue schede.",
    common: "Comune a tutte le famiglie",
    defaultLabel: "predefinito",
    exampleLabel: "esempio",
  },
  ru: {
    search: "Поиск по id, названию или семейству…",
    all: "Все категории",
    ids: "id компонентов",
    aliases: "алиасы",
    categories: "категории",
    copied: "Скопировано",
    copy: "Копировать id",
    hidden: "Только совместимость",
    aliasesLabel: "Алиасы",
    family: "Семейство",
    empty: "Ни один id не соответствует запросу.",
    paramsTitle: "Палитра параметров",
    paramsIntro:
      "Все семейства используют общую палитру; некоторые добавляют свои ключи. Выберите семейство, чтобы точно увидеть, что принимают его карточки.",
    common: "Общее для всех семейств",
    defaultLabel: "по умолчанию",
    exampleLabel: "пример",
  },
  ar: {
    search: "ابحث عن معرّف أو تسمية أو عائلة…",
    all: "كل الفئات",
    ids: "معرّفات المكوّنات",
    aliases: "الأسماء البديلة",
    categories: "الفئات",
    copied: "تم النسخ",
    copy: "نسخ المعرّف",
    hidden: "للتوافق فقط",
    aliasesLabel: "الأسماء البديلة",
    family: "العائلة",
    empty: "لا يوجد معرّف يطابق هذا البحث.",
    paramsTitle: "لوحة المعاملات",
    paramsIntro:
      "تتشارك كل العائلات اللوحة المشتركة؛ وتضيف بعضها مفاتيح خاصة بها. اختر عائلة لترى بالضبط ما تقبله بطاقاتها.",
    common: "مشترك بين كل العائلات",
    defaultLabel: "افتراضي",
    exampleLabel: "مثال",
  },
  ja: {
    search: "id・ラベル・ファミリーを検索…",
    all: "すべてのカテゴリ",
    ids: "コンポーネント id",
    aliases: "別名",
    categories: "カテゴリ",
    copied: "コピーしました",
    copy: "id をコピー",
    hidden: "互換性のみ",
    aliasesLabel: "別名",
    family: "ファミリー",
    empty: "この検索に一致する id はありません。",
    paramsTitle: "パラメータ パレット",
    paramsIntro:
      "すべてのファミリーは共通パレットを共有し、一部は独自のキーを追加します。ファミリーを選ぶと、そのカードが受け付ける内容を正確に確認できます。",
    common: "すべてのファミリー共通",
    defaultLabel: "既定",
    exampleLabel: "例",
  },
  ko: {
    search: "id, 라벨 또는 패밀리 검색…",
    all: "모든 카테고리",
    ids: "컴포넌트 id",
    aliases: "별칭",
    categories: "카테고리",
    copied: "복사됨",
    copy: "id 복사",
    hidden: "호환성 전용",
    aliasesLabel: "별칭",
    family: "패밀리",
    empty: "이 검색과 일치하는 id가 없습니다.",
    paramsTitle: "파라미터 팔레트",
    paramsIntro:
      "모든 패밀리는 공통 팔레트를 공유하며 일부는 자체 키를 추가합니다. 패밀리를 선택하면 해당 카드가 허용하는 항목을 정확히 확인할 수 있습니다.",
    common: "모든 패밀리 공통",
    defaultLabel: "기본값",
    exampleLabel: "예",
  },
  zh: {
    search: "搜索 id、标签或家族…",
    all: "所有分类",
    ids: "组件 id",
    aliases: "别名",
    categories: "分类",
    copied: "已复制",
    copy: "复制 id",
    hidden: "仅兼容",
    aliasesLabel: "别名",
    family: "家族",
    empty: "没有匹配此搜索的 id。",
    paramsTitle: "参数面板",
    paramsIntro:
      "所有家族共享通用面板；部分家族会添加自己的键。选择家族即可准确查看其卡片接受的参数。",
    common: "所有家族通用",
    defaultLabel: "默认",
    exampleLabel: "示例",
  },
  tr: {
    search: "id, etiket veya aile ara…",
    all: "Tüm kategoriler",
    ids: "bileşen id'leri",
    aliases: "takma adlar",
    categories: "kategoriler",
    copied: "Kopyalandı",
    copy: "id'yi kopyala",
    hidden: "Yalnızca uyumluluk",
    aliasesLabel: "Takma adlar",
    family: "Aile",
    empty: "Bu aramayla eşleşen id yok.",
    paramsTitle: "Parametre paleti",
    paramsIntro:
      "Tüm aileler ortak paleti paylaşır; bazıları kendi anahtarlarını ekler. Kartlarının tam olarak neyi kabul ettiğini görmek için bir aile seçin.",
    common: "Tüm ailelerde ortak",
    defaultLabel: "varsayılan",
    exampleLabel: "örnek",
  },
  hi: {
    search: "id, लेबल या फ़ैमिली खोजें…",
    all: "सभी श्रेणियाँ",
    ids: "कंपोनेंट id",
    aliases: "उपनाम",
    categories: "श्रेणियाँ",
    copied: "कॉपी किया गया",
    copy: "id कॉपी करें",
    hidden: "केवल संगतता",
    aliasesLabel: "उपनाम",
    family: "फ़ैमिली",
    empty: "इस खोज से कोई id मेल नहीं खाता।",
    paramsTitle: "पैरामीटर पैलेट",
    paramsIntro:
      "सभी फ़ैमिलियाँ साझा पैलेट साझा करती हैं; कुछ अपनी कुंजियाँ जोड़ती हैं। किसी फ़ैमिली को चुनें और देखें कि उसके कार्ड वास्तव में क्या स्वीकार करते हैं।",
    common: "सभी फ़ैमिलियों में साझा",
    defaultLabel: "डिफ़ॉल्ट",
    exampleLabel: "उदाहरण",
  },
  id: {
    search: "Cari id, label, atau famili…",
    all: "Semua kategori",
    ids: "id komponen",
    aliases: "alias",
    categories: "kategori",
    copied: "Disalin",
    copy: "Salin id",
    hidden: "Hanya kompatibilitas",
    aliasesLabel: "Alias",
    family: "Famili",
    empty: "Tidak ada id yang cocok dengan pencarian ini.",
    paramsTitle: "Palet parameter",
    paramsIntro:
      "Semua famili berbagi palet umum; sebagian menambahkan kuncinya sendiri. Pilih famili untuk melihat persis apa yang diterima kartunya.",
    common: "Umum untuk semua famili",
    defaultLabel: "bawaan",
    exampleLabel: "contoh",
  },
  th: {
    search: "ค้นหา id ป้ายกำกับ หรือตระกูล…",
    all: "ทุกหมวดหมู่",
    ids: "id ของคอมโพเนนต์",
    aliases: "นามแฝง",
    categories: "หมวดหมู่",
    copied: "คัดลอกแล้ว",
    copy: "คัดลอก id",
    hidden: "เพื่อความเข้ากันได้เท่านั้น",
    aliasesLabel: "นามแฝง",
    family: "ตระกูล",
    empty: "ไม่มี id ใดตรงกับการค้นหานี้",
    paramsTitle: "ชุดพารามิเตอร์",
    paramsIntro:
      "ทุกตระกูลใช้ชุดพารามิเตอร์ร่วมกัน บางตระกูลเพิ่มคีย์ของตนเอง เลือกตระกูลเพื่อดูว่าการ์ดของตระกูลนั้นรองรับอะไรบ้าง",
    common: "ใช้ร่วมกันทุกตระกูล",
    defaultLabel: "ค่าเริ่มต้น",
    exampleLabel: "ตัวอย่าง",
  },
};

// Catalogue section heading, per locale. Kept out of the Strings object above
// because it is one line of prose rather than UI chrome shared by the whole
// component.
const idsHeadings: Record<string, [string, string]> = {
  en: [
    "The component id catalogue",
    `Every id you can write in \`component\`, grouped by the category the registry assigns it. Filter by category, search by id or family, and copy an id in one click. ${reference.idCount} ids, ${reference.aliasCount} aliases.`,
  ],
  fr: [
    "Catalogue des ids de composants",
    `Tous les ids que vous pouvez écrire dans \`component\`, groupés par la catégorie que leur attribue le registre. Filtrez par catégorie, cherchez par id ou famille, copiez un id en un clic. ${reference.idCount} ids, ${reference.aliasCount} alias.`,
  ],
  es: [
    "Catálogo de ids de componentes",
    `Todos los ids que puedes escribir en \`component\`, agrupados por la categoría que les asigna el registro. Filtra por categoría, busca por id o familia y copia un id con un clic. ${reference.idCount} ids, ${reference.aliasCount} alias.`,
  ],
  pt: [
    "Catálogo de ids de componentes",
    `Todos os ids que pode escrever em \`component\`, agrupados pela categoria que o registro lhes atribui. Filtre por categoria, pesquise por id ou família e copie um id com um clique. ${reference.idCount} ids, ${reference.aliasCount} alias.`,
  ],
  de: [
    "Katalog der Komponenten-ids",
    `Alle ids, die du in \`component\` schreiben kannst, gruppiert nach der Kategorie des Registers. Nach Kategorie filtern, nach id oder Familie suchen, ein id mit einem Klick kopieren. ${reference.idCount} ids, ${reference.aliasCount} Aliasse.`,
  ],
  it: [
    "Catalogo degli id dei componenti",
    `Tutti gli id che puoi scrivere in \`component\`, raggruppati per la categoria assegnata dal registro. Filtra per categoria, cerca per id o famiglia e copia un id con un clic. ${reference.idCount} id, ${reference.aliasCount} alias.`,
  ],
  ru: [
    "Каталог id компонентов",
    `Все id, которые можно указать в \`component\`, сгруппированные по категории реестра. Фильтруйте по категории, ищите по id или семейству, копируйте id одним нажатием. ${reference.idCount} id, ${reference.aliasCount} алиасов.`,
  ],
  ar: [
    "فهرس معرّفات المكوّنات",
    `كل المعرّفات التي يمكن كتابتها في \`component\`، مجمّعة حسب الفئة التي يمنحها السجل. رشّح حسب الفئة، وابحث بالمعرّف أو العائلة، وانسخ المعرّف بنقرة واحدة. ${reference.idCount} معرّفًا و${reference.aliasCount} اسمًا بديلًا.`,
  ],
  ja: [
    "コンポーネント id カタログ",
    `\`component\` に書けるすべての id を、レジストリのカテゴリ別にまとめました。カテゴリで絞り込み、id やファミリーで検索し、id をワンクリックでコピーできます。${reference.idCount} 個の id、${reference.aliasCount} 個の別名。`,
  ],
  ko: [
    "컴포넌트 id 카탈로그",
    `\`component\`에 쓸 수 있는 모든 id를 레지스트리 범주별로 모았습니다. 범주로 필터링하고 id나 패밀리로 검색하며 id를 한 번에 복사하세요. id ${reference.idCount}개, 별칭 ${reference.aliasCount}개.`,
  ],
  zh: [
    "组件 id 目录",
    `所有可写入 \`component\` 的 id，按注册表分配的类别分组。可按类别筛选、按 id 或家族搜索，并一键复制 id。共 ${reference.idCount} 个 id、${reference.aliasCount} 个别名。`,
  ],
  tr: [
    "Bileşen id kataloğu",
    `\`component\` alanına yazabileceğiniz tüm id'ler, kayıt defterinin atadığı kategoriye göre gruplanmıştır. Kategoriye göre filtreleyin, id veya aile ile arayın, bir id'yi tek tıkla kopyalayın. ${reference.idCount} id, ${reference.aliasCount} takma ad.`,
  ],
  hi: [
    "कंपोनेंट id सूची",
    `वे सभी id जो आप \`component\` में लिख सकते हैं, रजिस्ट्री द्वारा दी गई श्रेणी के अनुसार समूहित। श्रेणी से छाँटें, id या फ़ैमिली से खोजें, और एक क्लिक में id कॉपी करें। ${reference.idCount} id, ${reference.aliasCount} उपनाम।`,
  ],
  id: [
    "Katalog id komponen",
    `Semua id yang dapat Anda tulis di \`component\`, dikelompokkan menurut kategori yang diberikan registri. Saring per kategori, cari berdasarkan id atau famili, dan salin id dengan sekali klik. ${reference.idCount} id, ${reference.aliasCount} alias.`,
  ],
  th: [
    "แคตตาล็อก id ของคอมโพเนนต์",
    `id ทั้งหมดที่เขียนใน \`component\` ได้ จัดกลุ่มตามหมวดหมู่ที่รีจิสทรีกำหนด กรองตามหมวดหมู่ ค้นหาด้วย id หรือตระกูล และคัดลอก id ได้ในคลิกเดียว ${reference.idCount} id, ${reference.aliasCount} นามแฝง`,
  ],
};

const families = Object.keys(reference.familyParams) as string[];
const commonKeys = new Set(
  (reference.commonParams as Parameter[]).map((p) => p.key),
);

function ParameterRow({
  parameter,
  text,
}: {
  parameter: Parameter;
  text: Strings;
}) {
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
          {text.defaultLabel} <code>{def}</code>
          {parameter.example && (
            <>
              {" · "}
              {text.exampleLabel} <code>{parameter.example}</code>
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
  const active = locale ?? activeLocale ?? "en";
  const text = copy[active] ?? copy.en;
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [copied, setCopied] = useState<string | null>(null);
  const [family, setFamily] = useState(families[0]);
  const rtl = active === "ar";
  const [idsTitle, idsIntro] = idsHeadings[active] ?? idsHeadings.en;

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
    <div className="not-prose my-8 space-y-8" dir={rtl ? "rtl" : undefined}>
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

        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight text-fd-foreground">
            {idsTitle}
          </h2>
          <p className="max-w-3xl text-sm leading-6 text-fd-muted-foreground">
            {idsIntro}
          </p>
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

        <p className="text-xs text-fd-muted-foreground">
          {visible.length} / {components.length} · {text.ids}
        </p>

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
                      className="shrink-0 rounded-lg border border-fd-border px-2 py-1 text-[0.7rem] text-fd-muted-foreground transition hover:border-fd-primary/60 hover:text-fd-foreground focus:opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
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
            <ParameterRow key={parameter.key} parameter={parameter} text={text} />
          ))}
          {extras.length > 0 && (
            <>
              <p className="border-b border-fd-border/60 pt-4 pb-2 text-xs font-semibold uppercase tracking-wider text-fd-primary">
                {family} · +{extras.length}
              </p>
              {extras.map((parameter) => (
                <ParameterRow key={parameter.key} parameter={parameter} text={text} />
              ))}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
