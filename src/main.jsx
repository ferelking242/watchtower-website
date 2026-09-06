import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const GITHUB_URL = "https://github.com/ferelking242/watchtower";
const WATCHTOWER_VERSION = "8.1.160+160";
const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "pt-br", label: "Português (Brasil)", flag: "🇧🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "ko", label: "한국어", flag: "🇰🇷" },
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "tr", label: "Türkçe", flag: "🇹🇷" }
];

const Icon = ({ name, size = 18, strokeWidth = 1.6 }) => {
  const paths = {
    arrow: <><path d="M5 12h13"/><path d="m13 6 6 6-6 6"/></>,
    arrowUpRight: <><path d="M7 17 17 7"/><path d="M7 7h10v10"/></>,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M4 5.5v16"/><path d="M8 7h8"/><path d="M8 11h7"/></>,
    box: <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z"/><path d="m4.5 7.8 7.5 4.3 7.5-4.3"/><path d="M12 12.1V21"/></>,
    braces: <><path d="M8 4C6 4 6 6 6 8v1c0 2-1 3-3 3 2 0 3 1 3 3v1c0 2 0 4 2 4"/><path d="M16 4c2 0 2 2 2 4v1c0 2 1 3 3 3-2 0-3 1-3 3v1c0 2 0 4-2 4"/></>,
    check: <><path d="m5 12 4 4L19 6"/></>,
    chevron: <path d="m6 9 6 6 6-6"/>,
    close: <><path d="m6 6 12 12"/><path d="m18 6-12 12"/></>,
    code: <><path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/></>,
    copy: <><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></>,
    globe: <><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17"/><path d="M12 3.5c2.1 2.3 3.2 5.1 3.2 8.5s-1.1 6.2-3.2 8.5c-2.1-2.3-3.2-5.1-3.2-8.5S9.9 5.8 12 3.5Z"/></>,
    github: <><path d="M15 22v-3.2c.1-1.6-.5-2.3-1.4-2.8 4.6-.5 6.4-2.3 6.4-6.3a5 5 0 0 0-1.3-3.5A4.6 4.6 0 0 0 18.6 3s-1.2-.4-3.7 1.4a12.8 12.8 0 0 0-5.8 0C6.6 2.6 5.4 3 5.4 3a4.6 4.6 0 0 0-.1 3.2A5 5 0 0 0 4 9.7c0 4 1.8 5.8 6.4 6.3-.9.5-1.5 1.2-1.4 2.8V22"/><path d="M8.7 18.5c-3 .9-3-1.6-4.2-2"/></>,
    menu: <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>,
    package: <><path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z"/><path d="m4.5 7.8 7.5 4.3 7.5-4.3"/><path d="M12 12.1V21"/></>,
    play: <path d="m9 6 9 6-9 6z"/>,
    search: <><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 4.3 4.3"/></>,
    server: <><rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><path d="M7 7h.01M7 17h.01"/></>,
    spark: <><path d="m12 3 1.3 5.7L19 10l-5.7 1.3L12 17l-1.3-5.7L5 10l5.7-1.3z"/><path d="m19 17 .5 2.5L22 20l-2.5.5L19 23l-.5-2.5L16 20l2.5-.5z"/></>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>,
    moon: <path d="M20.2 15.2A8.5 8.5 0 0 1 8.8 3.8 8.5 8.5 0 1 0 20.2 15.2Z"/>,
    terminal: <><path d="m5 7 5 5-5 5"/><path d="M13 17h6"/></>,
    x: <><path d="m5 5 14 14"/><path d="m19 5-14 14"/></>
  };
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      {paths[name] || paths.spark}
    </svg>
  );
};

const translations = {
  en: {
    language: "English",
    groups: { map: "App map", extensions: "Extension system", experience: "Experience & UI", platform: "Platform" },
    nav: {
      overview: "Overview", appMap: "Application map", contentTypes: "Content types",
      extensionRuntime: "JS runtime", extensionTypes: "Extension types", extensionContract: "Source contract",
      uiSchema: "Native UI schema", layouts: "ui-layouts.json",
      watchHome: "Watch home", homeWidgets: "Home widgets",
      api: "Server API", gettingStarted: "Build locally", deployment: "Deploy"
    },
    heroEyebrow: "OPEN RUNTIME / DOCUMENTATION",
    heroTitle: <>Build the watchtower.<br /><em>Ship the view.</em></>,
    heroBody: "Watchtower is a cross-platform open media hub for manga, anime, series, music and novels, with local indexing, tracking, downloads and an extensible source runtime.",
    explore: "Explore the docs",
    github: "View on GitHub",
    featureLabel: "THE PATH",
    featureTitle: "One contract. Every extension.",
    featureBody: "The app, extension engine and native modules stay separate. Sources can change without forcing the player or library to change with them.",
    cards: [
      ["01", "Discover", "Browse sources and content through one consistent media surface."],
      ["02", "Extend", "Run JavaScript sources through QuickJS without native app code."],
      ["03", "Compose", "Connect Flutter, Rust, Go and Node runtimes around the same library."]
    ],
    docsLabel: "Documentation",
    introTitle: "A complete map of the Watchtower app.",
    introBody: "Watchtower combines a Flutter client, local libraries, JavaScript extensions, native bindings and an optional headless server in one self-hostable runtime.",
    quickstart: "Build the Flutter app",
    quickstartBody: "Install the toolchains, fetch Dart packages, and launch the cross-platform client.",
    install: "Run the headless server",
    installBody: "Use the Node.js server when sources need a cloud, VPS, Railway, Render or Docker deployment.",
    read: "Read guide",
    source: "Source",
    footer: "Open source media, kept in view.",
    loading: ["MAPPING THE SOURCES", "OPENING THE RUNTIME", "LOADING WATCHTOWER"]
  },
  fr: {
    language: "Français",
    groups: { map: "Carte de l’app", extensions: "Système d’extensions", experience: "Expérience & UI", platform: "Plateforme" },
    nav: {
      overview: "Vue d’ensemble", appMap: "Carte de l’application", contentTypes: "Types de contenus",
      extensionRuntime: "Runtime JS", extensionTypes: "Types d’extensions", extensionContract: "Contrat des sources",
      uiSchema: "Schéma UI natif", layouts: "ui-layouts.json",
      watchHome: "Accueil Watch", homeWidgets: "Widgets de l’accueil",
      api: "API serveur", gettingStarted: "Compiler localement", deployment: "Déployer"
    },
    heroEyebrow: "RUNTIME OUVERT / DOCUMENTATION",
    heroTitle: <>Construisez la tour.<br /><em>Livrez la vue.</em></>,
    heroBody: "Watchtower est un hub multimédia multiplateforme pour mangas, animés, séries, musiques et romans, avec indexation locale, suivi, téléchargements et runtime extensible.",
    explore: "Explorer la documentation",
    github: "Voir sur GitHub",
    featureLabel: "LE CHEMIN",
    featureTitle: "Un contrat. Chaque extension.",
    featureBody: "L’application, le moteur d’extensions et les modules natifs restent séparés. Les sources évoluent sans imposer de refaire le lecteur ou la bibliothèque.",
    cards: [
      ["01", "Découvrez", "Parcourez les sources et les contenus depuis une seule surface média."],
      ["02", "Étendez", "Exécutez des sources JavaScript avec QuickJS, sans code natif."],
      ["03", "Assemblez", "Reliez Flutter, Rust, Go et Node autour de la même bibliothèque."]
    ],
    docsLabel: "Documentation",
    introTitle: "La carte complète de l’application Watchtower.",
    introBody: "Watchtower réunit un client Flutter, des bibliothèques locales, des extensions JavaScript, des bindings natifs et un serveur headless optionnel.",
    quickstart: "Compiler l’application Flutter",
    quickstartBody: "Installez les toolchains, récupérez les paquets Dart et lancez le client multiplateforme.",
    install: "Lancer le serveur headless",
    installBody: "Utilisez le serveur Node.js pour déployer les sources dans le cloud, sur un VPS, Railway, Render ou Docker.",
    read: "Lire le guide",
    source: "Source",
    footer: "Des médias ouverts, toujours en vue.",
    loading: ["CARTOGRAPHIE DES SOURCES", "OUVERTURE DU RUNTIME", "CHARGEMENT DE WATCHTOWER"]
  }
};

const sectionGroups = [
  {
    key: "map",
    items: [
      { id: "overview", icon: "book", key: "overview" },
      { id: "app-map", icon: "server", key: "appMap" },
      { id: "content-types", icon: "package", key: "contentTypes" }
    ]
  },
  {
    key: "extensions",
    items: [
      { id: "extension-runtime", icon: "code", key: "extensionRuntime" },
      { id: "extension-types", icon: "box", key: "extensionTypes" },
      { id: "extension-contract", icon: "braces", key: "extensionContract" },
      { id: "ui-schema", icon: "spark", key: "uiSchema" },
      { id: "layouts", icon: "package", key: "layouts" }
    ]
  },
  {
    key: "experience",
    items: [
      { id: "watch-home", icon: "play", key: "watchHome" },
      { id: "home-widgets", icon: "book", key: "homeWidgets" }
    ]
  },
  {
    key: "platform",
    items: [
      { id: "api", icon: "terminal", key: "api" },
      { id: "getting-started", icon: "check", key: "gettingStarted" },
      { id: "deployment", icon: "arrowUpRight", key: "deployment" }
    ]
  }
];
const sections = sectionGroups.flatMap((group) => group.items);

function LoadingScreen({ copy, onFinish }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const started = performance.now();
    const duration = 2450;
    let frame;
    const tick = (now) => {
      const value = Math.min(100, Math.round(((now - started) / duration) * 100));
      setProgress(value);
      if (value < 100) frame = requestAnimationFrame(tick);
      else window.setTimeout(onFinish, 420);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onFinish]);
  const label = progress < 38 ? copy[0] : progress < 76 ? copy[1] : copy[2];
  return (
    <div className="loading-screen">
      <div className="loading-topline"><span>WATCHTOWER</span><span>V.01 / 2026</span></div>
      <div className="loading-center">
        <div className="loading-mark"><span /><i /><b /></div>
        <div className="loading-kanji">監 視 塔</div>
        <div className="loading-line"><span className="loading-label">{label}</span><span>{String(progress).padStart(3, "0")}%</span></div>
        <div className="loading-progress"><span style={{ width: `${progress}%` }} /></div>
      </div>
      <div className="loading-bottomline"><span>OPEN SOURCE / EXTENSIBLE BY DESIGN</span><span>SCROLL TO ENTER</span></div>
    </div>
  );
}

function LanguagePicker({ language, setLanguage }) {
  const [open, setOpen] = useState(false);
  const current = LANGUAGES.find((item) => item.code === language) || LANGUAGES[0];
  return (
    <div className="language-picker">
      <button className="language-trigger" onClick={() => setOpen(!open)} aria-expanded={open}>
        <Icon name="globe" size={15} /><span className="language-current"><b>{current.flag}</b>{current.code.toUpperCase()}</span><Icon name="chevron" size={13} />
      </button>
      {open && (
        <div className="language-menu" role="menu">
          {LANGUAGES.map((item) => (
            <button key={item.code} className={language === item.code ? "selected" : ""} onClick={() => { setLanguage(item.code); setOpen(false); }} role="menuitem">
              <span><b>{item.flag}</b>{item.label}</span><span>{language === item.code && <Icon name="check" size={14} />}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Landing({ t, onDocs }) {
  const [activeCard, setActiveCard] = useState(0);
  return (
    <main className="landing">
      <div className="grain" />
      <div className="landing-orbit orbit-one" />
      <div className="landing-orbit orbit-two" />
      <header className="landing-header">
        <a className="brand" href="#top" aria-label="Watchtower home"><span className="brand-mark"><i /><i /><i /></span><span>WATCHTOWER</span></a>
        <div className="landing-header-right"><span className="header-status"><b /> SYSTEM ONLINE</span><a href={GITHUB_URL} target="_blank" rel="noreferrer" className="icon-button" aria-label="Open Watchtower on GitHub"><Icon name="github" size={17} /></a></div>
      </header>
      <section className="landing-hero" id="top">
        <div className="hero-index">00 <span>—</span> 01</div>
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-rule" />{t.heroEyebrow}</p>
          <h1>{t.heroTitle}</h1>
          <p className="hero-body">{t.heroBody}</p>
          <div className="hero-actions"><button className="primary-button" onClick={onDocs}>{t.explore}<Icon name="arrow" size={16} /></button><a className="text-link" href={GITHUB_URL} target="_blank" rel="noreferrer"><Icon name="github" size={16} />{t.github}</a></div>
        </div>
        <div className="hero-visual">
          <div className="visual-grid" />
          <div className="visual-sun" />
          <div className="visual-vertical">静 <span>WATCHTOWER</span> 明</div>
          <div className="visual-coordinate">45° 23′ 11″ N<br />06° 44′ 02″ E</div>
          <div className="visual-caption"><span>FIG. 01</span><span>THE OPEN TOWER</span></div>
        </div>
        <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><i /></div>
      </section>
      <section className="path-section">
        <div className="section-heading"><p className="eyebrow"><span className="eyebrow-rule" />{t.featureLabel}</p><h2>{t.featureTitle}</h2><p>{t.featureBody}</p></div>
        <div className="path-list">
          {t.cards.map(([number, title, body], index) => (
            <button key={number} className={`path-card ${activeCard === index ? "active" : ""}`} onMouseEnter={() => setActiveCard(index)} onFocus={() => setActiveCard(index)} onClick={onDocs}>
              <span className="path-number">{number}</span><span className="path-title">{title}</span><span className="path-body">{body}</span><Icon name="arrowUpRight" size={17} />
            </button>
          ))}
        </div>
      </section>
      <footer className="landing-footer"><span>© 2026 WATCHTOWER</span><span>{t.footer}</span><span>監視塔</span></footer>
    </main>
  );
}

function Docs({ t, language, setLanguage, theme, setTheme, onHome }) {
  const [active, setActive] = useState("overview");
  const [menuOpen, setMenuOpen] = useState(false);
  const content = useMemo(() => ({
    overview: {
      kicker: t.nav.overview,
      title: t.introTitle,
      body: t.introBody,
      marker: "01",
      code: `watchtower/
├── lib/modules/       media, library, calendar, game, tracking
├── lib/local_indexer/ local files, metadata and search
├── lib/eval/          QuickJS extension runtime
├── lib/extension/     extension catalogue and lifecycle
├── lib/remote/        embedded Dart/shelf server
├── server/            Node.js headless runtime
├── rust/              native EPUB, image and TLS bindings
└── go/                torrent + HTTP streaming`,
      facts: language === "fr"
        ? ["Client Flutter multiplateforme pour anime, manga, musique, romans, jeux et lecture.", "Indexeur local, bibliothèque, historique, favoris, calendrier et suivi de progression.", "Extensions QuickJS, téléchargements, anti-bot, bindings Rust et serveur torrent Go."]
        : ["Cross-platform Flutter client for anime, manga, music, novels, games and playback.", "Local indexer, library, history, favorites, calendar and progress tracking.", "QuickJS extensions, downloads, anti-bot, Rust bindings and the Go torrent server."]
    },
    "app-map": {
      kicker: t.nav.appMap,
      title: language === "fr" ? "Une application en surfaces composables." : "An application made of composable surfaces.",
      body: language === "fr" ? "Le dépôt sépare les écrans métier, les services de données et les runtimes d’exécution. Cette carte suit le trajet d’un contenu, de la source jusqu’au lecteur et à la bibliothèque locale." : "The repository separates feature screens, data services and execution runtimes. This map follows content from a source to playback and the local library.",
      marker: "02",
      code: `lib/
├── modules/
│   ├── home/          Watchtower home, discovery, search
│   ├── watch/         source home, catalogue, reader/player
│   ├── anime/         anime player and subtitle controls
│   ├── manga/         manga reader and chapters
│   ├── music/         library, playlists, player and stats
│   ├── novel/         novel reader
│   ├── calendar/      upcoming schedule
│   ├── game/          game discovery
│   ├── tracker_library/ tracking integrations
│   └── mass_migration/ library migration flow
├── local_indexer/      filesystem → normalized media
├── eval/               JS/Dart extension bridge
├── remote/             embedded HTTP server
├── router/             GoRouter routes
└── services/           downloads, sync, torrent, diagnostics`,
      subsections: language === "fr"
        ? [
          ["Flux d’un contenu", "Une extension renvoie des modèles communs. Les providers Riverpod les paginent, les écrans les transforment en cartes et Isar conserve l’historique, les favoris ou les fichiers indexés."],
          ["Routage", "GoRouter relie onboarding, accueil, recherche, détails, lecture, bibliothèques, réglages et modules spécialisés sans mélanger les contrats de source."],
          ["Runtimes", "Flutter porte l’interface, QuickJS/Dart exécute les sources, Rust et Go fournissent les capacités natives, tandis que Node.js reproduit le runtime côté serveur."]
        ]
        : [
          ["Content flow", "An extension returns shared models. Riverpod providers paginate them, screens turn them into cards, and Isar stores history, favorites and indexed files."],
          ["Routing", "GoRouter connects onboarding, home, search, details, playback, libraries, settings and specialist modules without coupling source contracts."],
          ["Runtimes", "Flutter owns the UI, QuickJS/Dart executes sources, Rust and Go provide native capabilities, and Node.js mirrors the runtime server-side."]
        ],
      facts: language === "fr"
        ? ["Les modules d’interface sont regroupés par domaine média plutôt que par fournisseur.", "Les services transverses gèrent cache, téléchargements, anti-bot, synchronisation et diagnostic.", "Les écrans peuvent fonctionner avec une source distante, un fichier local ou le serveur headless."]
        : ["UI modules are grouped by media domain rather than by provider.", "Cross-cutting services handle cache, downloads, anti-bot, sync and diagnostics.", "Screens can work with a remote source, a local file or the headless server."]
    },
    "content-types": {
      kicker: t.nav.contentTypes,
      title: language === "fr" ? "Manga, watch, musique : un modèle commun." : "Manga, watch, music: one shared model.",
      body: language === "fr" ? "ItemType classe les familles de sources ; le contenu précis reste porté par les modèles manga, chapitre, page, vidéo et piste. Une extension watch peut donc couvrir anime, films ou séries sans créer un nouveau renderer natif." : "ItemType classifies source families; the concrete payload stays in manga, chapter, page, video and track models. A watch extension can therefore cover anime, films or series without a new native renderer.",
      marker: "03",
      code: `ItemType
├── manga    chapters → page list → reader
├── anime    episodes → video list → player
├── novel    chapters → HTML/text reader
├── music    tracks → audio player → playlists
├── game     discovery/detail surface
└── plugin   utility or downloader surface

MManga: name, link, imageUrl, description,
        author, artist, genre, chapters[]
MChapter: name, url, dateUpload, thumbnailUrl,
          description, duration, downloadSize`,
      subsections: language === "fr"
        ? [
          ["Manga", "Les chapitres utilisent getPageList(url) pour produire les pages du lecteur. Les métadonnées partagent nom, image, description, auteur, artiste et genres."],
          ["Watch : anime, film, série", "Les épisodes utilisent getVideoList(url). Les vidéos portent URL, qualité, URL d’origine, headers, sous-titres et pistes audio. Les sous-types film/série/anime sont des métadonnées de contenu, pas des runtimes séparés."],
          ["Musique et roman", "La musique réutilise les surfaces de recherche et de détail avec des pistes, albums, artistes et playlists ; le roman s’appuie sur le détail, les chapitres et le lecteur HTML/texte."],
          ["Jeux et plugins", "Game fournit une surface de découverte dédiée. Plugin représente les extensions utilitaires ou de téléchargement qui utilisent le manifeste et le schéma UI natif."]
        ]
        : [
          ["Manga", "Chapters use getPageList(url) to produce reader pages. Metadata shares name, image, description, author, artist and genres."],
          ["Watch: anime, film, series", "Episodes use getVideoList(url). Videos carry URL, quality, original URL, headers, subtitles and audio tracks. Film/series/anime are content metadata, not separate runtimes."],
          ["Music and novel", "Music reuses search and detail surfaces with tracks, albums, artists and playlists; novels use detail, chapters and an HTML/text reader."],
          ["Games and plugins", "Game provides a dedicated discovery surface. Plugin represents utility or downloader extensions using the manifest and native UI schema."]
        ],
      facts: language === "fr"
        ? ["La compatibilité se fait par contrat de données, pas par écran codé pour chaque site.", "Les filtres, préférences, commentaires, recommandations et listes personnalisées sont optionnels.", "Le champ itemType est persisté dans Source et permet de choisir bibliothèque, lecteur et historique."]
        : ["Compatibility comes from data contracts, not a screen coded for every site.", "Filters, preferences, comments, recommendations and custom lists are optional.", "The itemType field is persisted on Source and selects library, player and history behavior."]
    },
    "extension-runtime": {
      kicker: t.nav.extensionRuntime,
      title: language === "fr" ? "Le JavaScript vit dans un runtime contrôlé." : "JavaScript runs inside a controlled runtime.",
      body: language === "fr" ? "DartExtensionService charge le code source, injecte MProvider et l’exécute dans QuickJS. Les bridges donnent accès au réseau, au DOM, aux extracteurs, aux préférences et aux modèles Flutter sans exposer l’application native." : "DartExtensionService loads source code, injects MProvider and executes it in QuickJS. Bridges expose network, DOM, extractors, preferences and Flutter models without exposing the native app.",
      marker: "04",
      code: `ExtensionService
├── sourceBaseUrl / headers
├── getPopular(page)
├── getLatestUpdates(page)
├── search(query, page, filters)
├── getDetail(url)
├── getPageList(url)
├── getVideoList(url)
└── optional custom lists / comments / suggestions

QuickJS bridges
HTTP · DOM selector · extractors · preferences
Dart models: MSource · MPages · MManga · MChapter · MVideo`,
      subsections: language === "fr"
        ? [
          ["Chargement", "SourceCodeLanguage distingue Dart, JavaScript et Mihon. Le loader installe ou retire aussi les extensions privées Android via le canal natif prévu."],
          ["Sécurité et isolation", "Les appels de source passent par des bridges contrôlés. Le serveur headless ajoute registre, cache, authentification et limitation de débit avant l’exécution."],
          ["Cycle de vie", "Une source est découverte dans le catalogue, installée ou activée, exécutée à la demande, puis ses préférences, cookies, cache et layout peuvent être réinitialisés depuis ses réglages."]
        ]
        : [
          ["Loading", "SourceCodeLanguage distinguishes Dart, JavaScript and Mihon. The loader also installs or removes Android private extensions through the native channel."],
          ["Security and isolation", "Source calls pass through controlled bridges. The headless server adds registry, cache, auth and rate limiting before execution."],
          ["Lifecycle", "A source is discovered in the catalogue, installed or enabled, executed on demand, and its preferences, cookies, cache and layout can be reset from extension settings."]
        ],
      facts: language === "fr"
        ? ["QuickJS renvoie des objets sérialisés vers les modèles Dart.", "Le code d’extension peut définir headers, filtres, préférences et listes personnalisées.", "La compatibilité Mihon permet de réutiliser certaines extensions manga existantes."]
        : ["QuickJS returns serialized objects to Dart models.", "Extension code can define headers, filters, preferences and custom lists.", "Mihon compatibility allows reuse of existing manga extensions."]
    },
    "extension-types": {
      kicker: t.nav.extensionTypes,
      title: language === "fr" ? "Chaque famille d’extension a sa surface." : "Each extension family has its surface.",
      body: language === "fr" ? "Le type de source choisit les écrans et les actions disponibles. Le même moteur JS reste partagé, mais les résultats sont rendus par le lecteur manga, le player watch, l’audio, le roman, le jeu ou le plugin." : "The source type selects available screens and actions. The same JS engine is shared, while results render through the manga reader, watch player, audio, novel, game or plugin surface.",
      marker: "05",
      code: `MANGA  → popular/latest/search
          → detail → chapters → pages → reader
WATCH  → popular/latest/search
          → detail → episodes → videos → player
MUSIC  → catalogue/search → album/artist
          → tracks → audio queue
NOVEL  → detail → chapters → text/HTML reader
GAME   → discovery/detail modules
PLUGIN → manifest + native UI / downloader`,
      subsections: language === "fr"
        ? [
          ["Manga", "Sources de chapitres et pages, filtres de catalogue, historique de lecture et import local."],
          ["Watch", "Sources vidéo pour anime, films et séries : détails, épisodes, qualité, sous-titres, pistes audio et extracteurs de lecteurs."],
          ["Musique", "Sources de catalogue audio et extensions de métadonnées : albums, artistes, pistes, recherche, playlists et statistiques."],
          ["Novel, game, plugin", "Les romans réutilisent le lecteur de texte/HTML ; les jeux ont des écrans de découverte ; les plugins utilitaires suivent manifest.json et ui/schema.json."]
        ]
        : [
          ["Manga", "Chapter and page sources with catalogue filters, reading history and local import."],
          ["Watch", "Video sources for anime, films and series: details, episodes, quality, subtitles, audio tracks and player extractors."],
          ["Music", "Audio catalogue and metadata extensions: albums, artists, tracks, search, playlists and statistics."],
          ["Novel, game, plugin", "Novels reuse the text/HTML reader; games have discovery screens; utility plugins follow manifest.json and ui/schema.json."]
        ],
      facts: language === "fr"
        ? ["Watch est une famille d’usage : son itemType peut être anime ou une source vidéo compatible.", "Le renderer générique utilise les mêmes cartes, pagination et layouts pour toutes les sources compatibles.", "Les capabilities optionnelles évitent d’afficher une action absente de la source."]
        : ["Watch is a usage family: its itemType can be anime or another compatible video source.", "The generic renderer uses the same cards, pagination and layouts for compatible sources.", "Optional capabilities prevent showing an action a source does not implement."]
    },
    "extension-contract": {
      kicker: t.nav.extensionContract,
      title: language === "fr" ? "Le contrat JS, méthode par méthode." : "The JS contract, method by method.",
      body: language === "fr" ? "ExtensionService définit le minimum commun. Les méthodes optionnelles enrichissent l’expérience sans casser une source qui ne les déclare pas." : "ExtensionService defines the shared minimum. Optional methods enrich the experience without breaking a source that does not implement them.",
      marker: "06",
      code: `required
getPopular(page) -> MPages
getDetail(url) -> MManga
getPageList(url) -> PageUrl[]
getVideoList(url) -> Video[]

capabilities
supportsLatest
getLatestUpdates(page)
search(query, page, filters)
getFilterList()
getSourcePreferences()
getCustomList(id, page)
getRecommendations(url)
getComments(url)
getSuggestions(query)`,
      subsections: language === "fr"
        ? [
          ["Navigation catalogue", "getPopular, getLatestUpdates et search renvoient MPages avec list et hasNextPage. Les filtres viennent de getFilterList et les préférences sont persistées par source."],
          ["Détail et lecture", "getDetail fournit MManga. Une source manga expose getPageList ; une source watch expose getVideoList et peut fournir qualité, headers, sous-titres et audio."],
          ["Extensions de contrat", "getCustomList permet les sections home déclarées par id ; recommandations, commentaires et suggestions restent des méthodes optionnelles avec retour vide par défaut."]
        ]
        : [
          ["Catalogue navigation", "getPopular, getLatestUpdates and search return MPages with list and hasNextPage. Filters come from getFilterList and preferences are persisted per source."],
          ["Detail and playback", "getDetail returns MManga. A manga source exposes getPageList; a watch source exposes getVideoList and can provide quality, headers, subtitles and audio."],
          ["Contract extensions", "getCustomList enables home sections declared by id; recommendations, comments and suggestions remain optional methods with empty defaults."]
        ],
      facts: language === "fr"
        ? ["Les URLs restent les identifiants de navigation entre catalogue, détail et lecture.", "Les headers et le baseUrl sont fournis par la source et peuvent être personnalisés.", "Les erreurs sont journalisées côté Dart et côté serveur headless pour le diagnostic."]
        : ["URLs remain navigation identifiers between catalogue, detail and playback.", "Headers and baseUrl are provided by the source and can be customized.", "Errors are logged in Dart and in the headless server for diagnostics."]
    },
    "layouts": {
      kicker: t.nav.layouts,
      title: language === "fr" ? "ui-layouts.json pilote l’ordre et la forme." : "ui-layouts.json controls order and shape.",
      body: language === "fr" ? "Une extension peut publier un layout déclaratif. Watchtower le télécharge depuis watchtower-extensions, le valide en UiLayout, le met en cache par source et laisse Flutter mapper les composants vers des widgets natifs." : "An extension can publish a declarative layout. Watchtower downloads it from watchtower-extensions, parses it as UiLayout, caches it per source and lets Flutter map components to native widgets.",
      marker: "07",
      code: `{
  "schemaVersion": 1,
  "home": {
    "sections": [{
      "id": "popular",
      "component": "carousel",
      "title": "Popular",
      "icon": "star",
      "accent": "primary",
      "columns": 2,
      "cardStyle": "poster",
      "seeAll": true,
      "paginated": true,
      "requiresAuth": false
    }]
  },
  "browse": { "popular": {}, "latest": {}, "search": {} },
  "detail": { "hero": "backdrop", "episodeList": "grouped", "showRecommendations": true },
  "player": { "mode": "standard" }
}`,
      subsections: language === "fr"
        ? [
          ["Racine et cache", "schemaVersion et home.sections sont obligatoires dans un layout utile. browse, detail et player sont optionnels. LayoutDownloader lit Source.uiLayout depuis raw.githubusercontent.com puis LayoutRegistry sauvegarde layouts/<source.id>.json."],
          ["Sections home", "id identifie getCustomList(id, page). component accepte banner/hero, carousel/spotlight, ranked, compactRow/compact, categoryPills/category, creatorRow, grid/catalogue, newHot, feed et masonry."],
          ["Paramètres visuels", "title, icon et accent structurent l’en-tête. columns et cardStyle sont des hints de rendu. seeAll active la page complète, paginated active le chargement par pages et requiresAuth protège une section connectée."],
          ["Browse, detail, player", "Browse décrit popular/latest/search avec component, columns, cardStyle, results et filters. Detail accepte hero, episodeList et showRecommendations. Player accepte standard ou feed."]
        ]
        : [
          ["Root and cache", "schemaVersion and home.sections are the useful minimum. browse, detail and player are optional. LayoutDownloader reads Source.uiLayout from raw.githubusercontent.com, then LayoutRegistry stores layouts/<source.id>.json."],
          ["Home sections", "id identifies getCustomList(id, page). component accepts banner/hero, carousel/spotlight, ranked, compactRow/compact, categoryPills/category, creatorRow, grid/catalogue, newHot, feed and masonry."],
          ["Visual parameters", "title, icon and accent shape the header. columns and cardStyle are rendering hints. seeAll enables a full page, paginated enables page loading and requiresAuth gates a signed-in section."],
          ["Browse, detail, player", "Browse describes popular/latest/search with component, columns, cardStyle, results and filters. Detail accepts hero, episodeList and showRecommendations. Player accepts standard or feed."]
        ],
      facts: language === "fr"
        ? ["Un layout absent revient au home standard Popular/Latest/Search.", "Le bridge toLegacyMap conserve la compatibilité avec les écrans home existants.", "Un layout est rechargé après installation ou mise à jour d’une extension et supprimé à sa désinstallation."]
        : ["Without a layout, the source falls back to standard Popular/Latest/Search.", "The toLegacyMap bridge keeps existing home screens compatible.", "A layout reloads after extension install or update and is removed on uninstall."]
    },
    "watch-home": {
      kicker: t.nav.watchHome,
      title: language === "fr" ? "WatchHomeScreen est une surface pilotable." : "WatchHomeScreen is a controllable surface.",
      body: language === "fr" ? "La page Watch compose hero, historique, catégories, rangées et catalogue à partir de la source courante. Les layouts JSON peuvent remplacer les listes standard tout en gardant les interactions natives." : "The Watch page composes hero, history, categories, rows and catalogue from the current source. JSON layouts can replace standard lists while keeping native interactions.",
      marker: "08",
      code: `WatchHomeScreen
CustomScrollView
├── Hero / banner
├── Continue watching (Isar history)
├── Category cards
├── Popular / Latest / custom rows
├── New & Hot
└── Catalogue grid

Interactions
refresh · pagination · search · favorites
detail sheet · reader/player · see all`,
      subsections: language === "fr"
        ? [
          ["Ordre et hero", "Le hero utilise les cinq premiers items banner (fallback popular), tourne toutes les 7 secondes et vise un ratio paysage width × 0,62. Lecture ouvre le détail, Info ouvre la bottom sheet et Ma liste bascule le favori Isar."],
          ["Historique", "La rangée Continue watching lit l’historique Isar de la source, déduplique par manga, limite à 12 cartes et montre miniature, épisode/chapitre et progression."],
          ["Catalogue et recherche", "La grille catalogue est paginée avec Popular ou une custom list. La recherche utilise debounce 250 ms, suggestions flottantes, micro/X et ne lance les résultats qu’au submit."],
          ["Performance", "L’app bar observe le scroll avec ValueNotifier ; le hero est dans le CustomScrollView, donc le contenu ne passe pas au-dessus et le scroll n’entraîne pas un setState complet."]
        ]
        : [
          ["Order and hero", "The hero uses the first five banner items (popular fallback), rotates every 7 seconds and targets width × 0.62 landscape ratio. Play opens detail, Info opens the bottom sheet and My list toggles the Isar favorite."],
          ["History", "Continue watching reads the source's Isar history, deduplicates by manga, limits to 12 cards and shows thumbnail, episode/chapter and progress."],
          ["Catalogue and search", "The catalogue grid paginates Popular or a custom list. Search uses a 250 ms debounce, floating suggestions, mic/X actions and only commits results on submit."],
          ["Performance", "The app bar observes scroll with ValueNotifier; the hero lives inside CustomScrollView so content cannot overlap it and scrolling avoids a full setState rebuild."]
        ],
      facts: language === "fr"
        ? ["Les catégories sont des cartes 132×72 avec image, dégradé et bordure.", "Les sections sont masquées si leurs données sont vides.", "Les actions de source restent cohérentes entre manga, anime, films et séries."]
        : ["Categories are 132×72 cards with image, gradient and border.", "Sections are hidden when their data is empty.", "Source actions stay consistent across manga, anime, films and series."]
    },
    "home-widgets": {
      kicker: t.nav.homeWidgets,
      title: language === "fr" ? "Les widgets sont des adaptateurs de données." : "Widgets are data adapters.",
      body: language === "fr" ? "WatchtowerHomeScreen est l’accueil global de l’application. Il combine les flux AniList/TMDB avec la bibliothèque locale et pilote ses rangées par onglets média." : "WatchtowerHomeScreen is the global app home. It combines AniList/TMDB feeds with the local library and drives rows through media tabs.",
      marker: "09",
      code: `lib/modules/home/widgets/
├── hero_carousel.dart      spotlight + pagination
├── discovery_card.dart     poster, landscape, ranked, saga
├── episode_card.dart       progress + resume action
├── category_row.dart       media category navigation
├── tmdb_cards.dart         film / series discovery
├── home_header.dart        account + search entry
└── skeleton_home.dart      loading placeholders

_HomeTab
tout · film · serie · musique · anime · asia
enfant · occidental · africa · tvCourt
football · jeux`,
      subsections: language === "fr"
        ? [
          ["Accueil média", "Les onglets Tout, Film, Série, Musique, Anime, Asia, Enfant, Occidental, Africa, TV courte, Football et Jeux choisissent les sections et le hero visibles."],
          ["Cartes", "DiscoveryCard possède des variantes standard, ranked, landscape, featured, saga et spotlight. EpisodeCard ajoute miniature, titre épisode, durée et barre de progression pour reprendre."],
          ["Données", "AniList alimente anime et contenus éditoriaux ; TMDB alimente film et série ; la bibliothèque et les providers locaux complètent les listes utilisateur."],
          ["Différence avec Watch", "WatchtowerHomeScreen est l’accueil global ; WatchHomeScreen est l’accueil d’une extension/source. Le premier agrège des catalogues, le second rend le contrat d’une source."]
        ]
        : [
          ["Media home", "The Tout, Film, Series, Music, Anime, Asia, Kids, Western, Africa, Short TV, Football and Games tabs select visible sections and hero data."],
          ["Cards", "DiscoveryCard has standard, ranked, landscape, featured, saga and spotlight variants. EpisodeCard adds thumbnail, episode title, duration and progress bar for resume."],
          ["Data", "AniList feeds anime and editorial content; TMDB feeds films and series; local library and providers complete user lists."],
          ["Watch versus global home", "WatchtowerHomeScreen is the global home; WatchHomeScreen is a source/extension home. The first aggregates catalogues, the second renders a source contract."]
        ],
      facts: language === "fr"
        ? ["Les widgets ne connaissent pas les URLs de chaque fournisseur : ils consomment des modèles normalisés.", "Les états skeleton, vide, chargement et erreur font partie de la surface d’accueil.", "Les layouts d’extension ciblent surtout WatchHomeScreen et les écrans browse/detail/player."]
        : ["Widgets do not know each provider's URLs: they consume normalized models.", "Skeleton, empty, loading and error states are part of the home surface.", "Extension layouts primarily target WatchHomeScreen and browse/detail/player screens."]
    },
    architecture: {
      kicker: t.nav.architecture,
      title: language === "fr" ? "Chaque couche garde son rôle." : "Every layer keeps its role.",
      body: language === "fr" ? "Le client Flutter orchestre l’expérience et GoRouter relie les surfaces média. QuickJS exécute les sources, l’indexeur local alimente la bibliothèque, Rust fournit les bindings natifs, Go porte le torrent et Node.js permet le mode headless." : "The Flutter client owns the experience and GoRouter connects the media surfaces. QuickJS runs sources, the local indexer feeds the library, Rust provides native bindings, Go powers torrent support, and Node.js enables headless deployments.",
      marker: "02",
      code: `Flutter / Dart
  ├─ modules/       anime · manga · music · novel · watch
  ├─ modules/       calendar · game · tracker_library
  ├─ modules/       library · search · history · mass_migration
  ├─ local_indexer/ filesystem watcher · normalizer · search
  ├─ eval/          QuickJS + Dart bridges
  └─ remote/        shelf server · port 4567

Native + server
  ├─ rust/          EPUB · images · custom TLS
  ├─ go/            torrent client · HTTP streaming
  └─ server/        Express · bridges · extension registry`,
      facts: language === "fr"
        ? ["GoRouter structure l’onboarding, l’accueil, les bibliothèques, la recherche, le lecteur et les réglages.", "L’indexeur local observe les fichiers, normalise titres/langues/qualité et écrit les éléments dans Isar.", "Les bridges HTTP, DOM, crypto et préférences donnent aux extensions un environnement contrôlé."]
        : ["GoRouter structures onboarding, home, libraries, search, playback and settings.", "The local indexer watches files, normalizes titles/languages/quality and writes items to Isar.", "HTTP, DOM, crypto and preferences bridges give extensions a controlled environment."]
    },
    "getting-started": {
      kicker: t.nav.gettingStarted,
      title: t.quickstart,
      body: t.quickstartBody,
      marker: "03",
      code: `git clone https://github.com/ferelking242/watchtower.git
cd watchtower
flutter pub get
flutter run

# Android release
flutter build apk --release --target-platform android-arm64`,
      facts: language === "fr"
        ? ["Prérequis : Flutter 3.38+, Dart 3.11+, Rust et Java 17 pour Android.", "Windows, Linux, macOS, iOS, Android et Web sont prévus par le projet.", "Le build serveur se fait séparément depuis server/ avec Node.js 18+ et npm install."]
        : ["Prerequisites: Flutter 3.38+, Dart 3.11+, Rust and Java 17 for Android.", "The project targets Windows, Linux, macOS, iOS, Android and Web.", "The server is built separately from server/ with Node.js 18+ and npm install."]
    },
    extensions: {
      kicker: t.nav.extensions,
      title: language === "fr" ? "Des extensions déclaratives et isolées." : "Declarative extensions, kept isolated.",
      body: language === "fr" ? "Les extensions JavaScript s’exécutent via QuickJS. Elles décrivent des sources, des catalogues, des modèles et des actions sans ajouter de code natif à l’application." : "JavaScript extensions run through QuickJS. They describe sources, catalogues, models and actions without adding native code to the app.",
      marker: "04",
      code: `lib/eval/
├── javascript/       HTTP · DOM · extractors
├── dart/bridge/      Dart ↔ JavaScript models
├── mihon/            compatibility services
└── service.dart      extension lifecycle

lib/extension/         catalogue + repository contracts
server/src/
├── extension-registry  source discovery and cache
├── js-runtime          QuickJS VM lifecycle
└── bridges/            HTTP · DOM · crypto · prefs`,
      facts: language === "fr"
        ? ["Les extensions peuvent récupérer catalogues, détails, chapitres, pages, vidéos et résultats de recherche.", "Le bridge expose HTTP, sélection DOM, extracteurs, préférences et modèles Dart.", "Le serveur garde un registre local, applique une limitation de débit et charge un catalogue distant mis en cache."]
        : ["Extensions can retrieve catalogues, details, chapters, pages, videos and search results.", "The bridge exposes HTTP, DOM selection, extractors, preferences and Dart models.", "The server keeps a local registry, applies rate limiting and loads a cached remote extension catalogue."]
    },
    "ui-schema": {
      kicker: t.nav.uiSchema,
      title: language === "fr" ? "Le manifeste décrit le contrat." : "The manifest describes the contract.",
      body: language === "fr" ? "Pour les extensions UI et les scripts ZeusDL, manifest.json déclare l’identité, les permissions et le runtime. Le schéma décrit ensuite les champs, actions et sorties rendus nativement par Flutter." : "For UI extensions and ZeusDL scripts, manifest.json declares identity, permissions and runtime. The schema then describes fields, actions and output rendered natively by Flutter.",
      marker: "05",
      code: `// manifest.json
{
  "id": "en.example-tool",
  "version": "1.0.0",
  "runtimeTypes": ["downloader"],
  "commandScopes": ["download"],
  "networkAccess": ["example.com"],
  "ui": "native"
}

// UI contract
{
  "inputs": [{ "id": "url", "type": "url_field" }],
  "actions": [{ "id": "download", "style": "primary" }],
  "output": { "type": "log" }
}`,
      facts: language === "fr"
        ? ["manifest.json porte l’identité, la version, l’auteur, les permissions réseau et les exigences binaires.", "Le contrat UI rend des champs URL/texte, sélecteurs, toggles et actions sans WebView.", "Les scripts ZeusDL communiquent par stdout avec PROGRESS, STATUS, DONE et ERROR."]
        : ["manifest.json carries identity, version, author, network permissions and binary requirements.", "The UI contract renders URL/text fields, selects, toggles and actions without a WebView.", "ZeusDL scripts communicate over stdout with PROGRESS, STATUS, DONE and ERROR."]
    },
    api: {
      kicker: t.nav.api,
      title: language === "fr" ? "Deux runtimes, une API." : "Two runtimes, one API.",
      body: language === "fr" ? "Le serveur embarqué Dart/shelf écoute sur 4567 dans l’application. Le serveur headless Node/Express écoute sur 8080 pour le cloud, Docker, Railway ou Render, avec les mêmes opérations de sources." : "The embedded Dart/shelf server listens on 4567 inside the app. The headless Node/Express server listens on 8080 for cloud, Docker, Railway or Render, with the same source operations.",
      marker: "06",
      code: `GET /api/ping
GET /api/sources
GET /api/sources/:id
GET /api/sources/:id/popular?page=1
GET /api/sources/:id/latest?page=1
GET /api/sources/:id/search?q=query&page=1
GET /api/sources/:id/detail?url=...
GET /api/sources/:id/videos?url=...
GET /api/sources/:id/pages?url=...`,
      facts: language === "fr"
        ? ["GET /api/ping reste public et renvoie la version du serveur.", "Les autres routes passent par l’authentification, la limitation de débit et le registre d’extensions.", "Les sources NSFW sont filtrées de la liste et bloquées avec 403 en accès direct."]
        : ["GET /api/ping is public and returns the server version.", "Other routes pass through authentication, rate limiting and the extension registry.", "NSFW sources are filtered from listings and blocked with 403 on direct access."]
    },
    deployment: {
      kicker: t.nav.deployment,
      title: language === "fr" ? "Embarqué ou headless." : "Embedded or headless.",
      body: language === "fr" ? "Le serveur Node peut être lancé avec Docker ou directement avec Node.js. Les routes privées utilisent X-Api-Key ou Authorization Bearer quand API_KEY est activée, tandis que l’application garde son mode embarqué." : "The Node server can run with Docker or directly with Node.js. Private routes use X-Api-Key or Authorization Bearer when API_KEY is enabled, while the app keeps its embedded mode.",
      marker: "07",
      code: `cd server
cp .env.example .env

# Docker
docker compose up -d

# Node.js
npm install
API_KEY=mysecretkey PORT=8080 node server.js`
      ,
      facts: language === "fr"
        ? ["Docker Compose est le chemin recommandé pour un serveur reproductible ; l’image publiée est disponible sur GHCR.", "Les déploiements Railway, Render, VPS et Docker sont documentés dans le dépôt.", "CACHE_TTL_MS, CACHE_DIR, PREFS_DIR et RATE_MAX_TOKENS contrôlent le comportement du serveur."]
        : ["Docker Compose is the recommended path for a reproducible server; the published image is available on GHCR.", "Railway, Render, VPS and Docker deployments are documented in the repository.", "CACHE_TTL_MS, CACHE_DIR, PREFS_DIR and RATE_MAX_TOKENS control server behavior."]
    }
  }), [language, t]);
  const page = content[active];
  const selectSection = (id) => { setActive(id); setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return (
    <div className="docs-shell">
      <header className="docs-topbar">
        <button className="docs-brand" onClick={onHome}><span className="brand-mark"><i /><i /><i /></span><span>WATCHTOWER <small>/ DOCS</small></span></button>
        <div className="docs-top-actions">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="github-link"><Icon name="github" size={16} /> GitHub <Icon name="arrowUpRight" size={13} /></a>
          <LanguagePicker language={language} setLanguage={setLanguage} />
          <button className="theme-switch" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"} aria-pressed={theme === "light"}>
            <Icon name={theme === "dark" ? "sun" : "moon"} size={15} /><span>{theme === "dark" ? "Dark" : "Light"}</span>
          </button>
          <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation"><Icon name={menuOpen ? "close" : "menu"} size={20} /></button>
        </div>
      </header>
      <div className="docs-layout">
        <aside className={`docs-sidebar ${menuOpen ? "open" : ""}`}>
          <div className="sidebar-intro"><span className="side-label">{t.docsLabel}</span><p>{language === "fr" ? "Le guide pour rester au sommet." : "The guide to staying on top."}</p></div>
          <nav className="docs-nav">
            {sectionGroups.map((group) => (
              <div className="docs-nav-group" key={group.key}>
                <span className="docs-nav-group-label">{t.groups[group.key]}</span>
                {group.items.map((section) => (
                  <button key={section.id} className={active === section.id ? "active" : ""} onClick={() => selectSection(section.id)}>
                    <Icon name={section.icon} size={16} /><span>{t.nav[section.key]}</span>{active === section.id && <i className="nav-dot" />}
                  </button>
                ))}
              </div>
            ))}
          </nav>
          <div className="sidebar-bottom"><span className="side-label">{t.source}</span><a href={GITHUB_URL} target="_blank" rel="noreferrer"><Icon name="github" size={15} /> ferelking242/watchtower <Icon name="arrowUpRight" size={12} /></a><span className="version">v{WATCHTOWER_VERSION} · open source</span></div>
        </aside>
        <main className="docs-main">
          <div className="docs-breadcrumb"><span>WATCHTOWER</span><Icon name="chevron" size={13} /><span>{page.kicker}</span></div>
          <section className="docs-hero">
            <div className="docs-marker">{page.marker}</div>
            <div><p className="eyebrow"><span className="eyebrow-rule" />{page.kicker}</p><h1>{page.title}</h1><p className="docs-lead">{page.body}</p></div>
          </section>
          <section className="docs-content-grid">
            <div className="docs-copy" id="docs-summary">
              <p>{language === "fr" ? "Le dépôt est organisé par responsabilités : Flutter pour l’interface, QuickJS pour les sources, Rust pour les bindings natifs, Go pour le torrent et Node.js pour le serveur cloud." : "The repository is organized by responsibility: Flutter for the interface, QuickJS for sources, Rust for native bindings, Go for torrent support, and Node.js for the cloud server."}</p>
              {page.subsections?.map(([title, body], index) => (
                <article className="docs-subsection" id={`docs-subsection-${index}`} key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
              <ul className="docs-facts">{page.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
              <div className="note-card"><Icon name="spark" size={17} /><div><strong>{language === "fr" ? "Une carte, deux runtimes." : "One map, two runtimes."}</strong><span>{language === "fr" ? "L’appareil et le serveur headless partagent le contrat de source, les modèles et les layouts déclaratifs." : "The device app and headless server share source contracts, models and declarative layouts."}</span></div></div>
            </div>
            <div className="code-card" id="docs-example"><div className="code-top"><span><i /> {language === "fr" ? "contrat / exemple" : "contract / example"}</span><button onClick={() => navigator.clipboard?.writeText(page.code)} aria-label="Copy example"><Icon name="copy" size={14} /></button></div><pre><code>{page.code}</code></pre></div>
          </section>
          <div className="docs-next" id="docs-next"><span>{language === "fr" ? "Continuer" : "Continue"}</span><button onClick={() => selectSection(sections[(sections.findIndex((item) => item.id === active) + 1) % sections.length].id)}>{t.nav[sections[(sections.findIndex((item) => item.id === active) + 1) % sections.length].key]} <Icon name="arrow" size={15} /></button></div>
        </main>
        <aside className="docs-toc">
          <span className="side-label">{language === "fr" ? "SUR CETTE PAGE" : "ON THIS PAGE"}</span>
          <a className="toc-active" href="#docs-summary">{language === "fr" ? "Résumé" : "Summary"}</a>
          {page.subsections?.map(([title], index) => <a href={`#docs-subsection-${index}`} key={title}>{title}</a>)}
          <a href="#docs-example">{language === "fr" ? "Contrat / exemple" : "Contract / example"}</a>
          <a href="#docs-next">{language === "fr" ? "Étape suivante" : "Next step"}</a>
        </aside>
      </div>
    </div>
  );
}

function KageExperience() {
  return (
    <div className="kage-experience">
      <iframe
        src="./kage.html"
        title="Watchtower — Keep every source in view"
        allow="fullscreen"
      />
    </div>
  );
}

function App() {
  const initialView = new URLSearchParams(window.location.search).get("view");
  const [showDocs, setShowDocs] = useState(() => initialView === "docs");
  const [language, setLanguage] = useState(() => localStorage.getItem("watchtower-language") || "en");
  const [theme, setTheme] = useState(() => localStorage.getItem("watchtower-theme") || "dark");
  const t = translations[language] || translations.en;
  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("watchtower-language", language);
  }, [language]);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("watchtower-theme", theme);
  }, [theme]);
  return showDocs ? <Docs t={t} language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} onHome={() => setShowDocs(false)} /> : <KageExperience />;
}

createRoot(document.getElementById("root")).render(<App />);