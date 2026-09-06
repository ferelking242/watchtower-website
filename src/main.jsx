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
    nav: { overview: "Overview", architecture: "Architecture", gettingStarted: "Build locally", extensions: "Extensions", uiSchema: "UI schema", api: "Server API", deployment: "Deploy" },
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
    nav: { overview: "Vue d’ensemble", architecture: "Architecture", gettingStarted: "Compiler localement", extensions: "Extensions", uiSchema: "Schéma UI", api: "API serveur", deployment: "Déployer" },
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

const sections = [
  { id: "overview", icon: "book", key: "overview" },
  { id: "architecture", icon: "server", key: "architecture" },
  { id: "getting-started", icon: "play", key: "gettingStarted" },
  { id: "extensions", icon: "box", key: "extensions" },
  { id: "ui-schema", icon: "braces", key: "uiSchema" },
  { id: "api", icon: "code", key: "api" },
  { id: "deployment", icon: "arrowUpRight", key: "deployment" }
];

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
          <nav>
            {sections.map((section) => <button key={section.id} className={active === section.id ? "active" : ""} onClick={() => selectSection(section.id)}><Icon name={section.icon} size={16} /><span>{t.nav[section.key]}</span>{active === section.id && <i className="nav-dot" />}</button>)}
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
            <div className="docs-copy">
              <p>{language === "fr" ? "Le dépôt est organisé par responsabilités : Flutter pour l’interface, QuickJS pour les sources, Rust pour les bindings natifs, Go pour le torrent et Node.js pour le serveur cloud." : "The repository is organized by responsibility: Flutter for the interface, QuickJS for sources, Rust for native bindings, Go for torrent support, and Node.js for the cloud server."}</p>
              <ul className="docs-facts">{page.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
              <div className="note-card"><Icon name="spark" size={17} /><div><strong>{language === "fr" ? "Deux modes de déploiement." : "Two deployment modes."}</strong><span>{language === "fr" ? "Embarqué sur l’appareil ou headless dans le cloud, avec les mêmes routes de sources." : "Embedded on-device or headless in the cloud, with the same source routes."}</span></div></div>
            </div>
            <div className="code-card"><div className="code-top"><span><i /> {language === "fr" ? "exemple" : "example"}</span><button onClick={() => navigator.clipboard?.writeText(page.code)} aria-label="Copy example"><Icon name="copy" size={14} /></button></div><pre><code>{page.code}</code></pre></div>
          </section>
          <div className="docs-next"><span>{language === "fr" ? "Continuer" : "Continue"}</span><button onClick={() => selectSection(sections[(sections.findIndex((item) => item.id === active) + 1) % sections.length].id)}>{t.nav[sections[(sections.findIndex((item) => item.id === active) + 1) % sections.length].key]} <Icon name="arrow" size={15} /></button></div>
        </main>
        <aside className="docs-toc"><span className="side-label">{language === "fr" ? "SUR CETTE PAGE" : "ON THIS PAGE"}</span><a className="toc-active" href="#summary">{language === "fr" ? "Résumé" : "Summary"}</a><a href="#example">{language === "fr" ? "Exemple" : "Example"}</a><a href="#next">{language === "fr" ? "Étape suivante" : "Next step"}</a></aside>
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