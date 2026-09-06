import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const GITHUB_URL = "https://github.com/ferelking242/watchtower";

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
    nav: { overview: "Overview", gettingStarted: "Getting started", extensions: "Extensions", uiSchema: "UI schema", api: "API reference" },
    heroEyebrow: "OPEN RUNTIME / DOCUMENTATION",
    heroTitle: <>Build the watchtower.<br /><em>Ship the view.</em></>,
    heroBody: "Watchtower is a small, composable runtime for discovering extensions, composing their data, and rendering a clear interface from a JSON contract.",
    explore: "Explore the docs",
    github: "View on GitHub",
    featureLabel: "THE PATH",
    featureTitle: "One contract. Every extension.",
    featureBody: "Describe the interface once. Watchtower handles the layout, state, and navigation so extensions stay focused on their data.",
    cards: [
      ["01", "Discover", "Extensions expose capabilities through a predictable API."],
      ["02", "Describe", "A readable UI schema turns data into a useful surface."],
      ["03", "Compose", "Layouts, sections, and sources stay interchangeable."]
    ],
    docsLabel: "Documentation",
    introTitle: "Build with clarity.",
    introBody: "Everything you need to extend Watchtower, from your first manifest to a custom renderer.",
    quickstart: "Quickstart",
    quickstartBody: "Install the runtime, create your first extension, and render a section in minutes.",
    install: "Installation",
    installBody: "Add Watchtower to your project and start with the smallest useful setup.",
    read: "Read guide",
    source: "Source",
    footer: "Made for focused software.",
    loading: ["CALIBRATING THE WATCHTOWER", "OPENING THE GATE", "LOADING DOCUMENTATION"]
  },
  fr: {
    language: "Français",
    nav: { overview: "Vue d’ensemble", gettingStarted: "Démarrage", extensions: "Extensions", uiSchema: "Schéma UI", api: "Référence API" },
    heroEyebrow: "RUNTIME OUVERT / DOCUMENTATION",
    heroTitle: <>Construisez la tour.<br /><em>Livrez la vue.</em></>,
    heroBody: "Watchtower est un runtime composable pour découvrir les extensions, composer leurs données et rendre une interface claire depuis un contrat JSON.",
    explore: "Explorer la documentation",
    github: "Voir sur GitHub",
    featureLabel: "LE CHEMIN",
    featureTitle: "Un contrat. Chaque extension.",
    featureBody: "Décrivez l’interface une seule fois. Watchtower gère le layout, l’état et la navigation pour laisser les extensions se concentrer sur leurs données.",
    cards: [
      ["01", "Découvrez", "Les extensions exposent leurs capacités via une API prévisible."],
      ["02", "Décrivez", "Un schéma UI lisible transforme les données en surface utile."],
      ["03", "Composez", "Layouts, sections et sources restent interchangeables."]
    ],
    docsLabel: "Documentation",
    introTitle: "Construire avec clarté.",
    introBody: "Tout ce qu’il faut pour étendre Watchtower, du premier manifeste au renderer personnalisé.",
    quickstart: "Démarrage rapide",
    quickstartBody: "Installez le runtime, créez votre première extension et rendez une section en quelques minutes.",
    install: "Installation",
    installBody: "Ajoutez Watchtower à votre projet avec la configuration utile la plus simple.",
    read: "Lire le guide",
    source: "Source",
    footer: "Conçu pour les logiciels concentrés.",
    loading: ["CALIBRAGE DE LA TOUR", "OUVERTURE DU PORTAIL", "CHARGEMENT DE LA DOCUMENTATION"]
  }
};

const sections = [
  { id: "overview", icon: "book", key: "overview" },
  { id: "getting-started", icon: "play", key: "gettingStarted" },
  { id: "extensions", icon: "box", key: "extensions" },
  { id: "ui-schema", icon: "braces", key: "uiSchema" },
  { id: "api", icon: "code", key: "api" }
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
  return (
    <div className="language-picker">
      <button className="language-trigger" onClick={() => setOpen(!open)} aria-expanded={open}>
        <Icon name="globe" size={15} /><span>{language === "en" ? "EN" : "FR"}</span><Icon name="chevron" size={13} />
      </button>
      {open && (
        <div className="language-menu">
          <button className={language === "en" ? "selected" : ""} onClick={() => { setLanguage("en"); setOpen(false); }}>English <span>{language === "en" && <Icon name="check" size={14} />}</span></button>
          <button className={language === "fr" ? "selected" : ""} onClick={() => { setLanguage("fr"); setOpen(false); }}>Français <span>{language === "fr" && <Icon name="check" size={14} />}</span></button>
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

function Docs({ t, language, setLanguage, onHome }) {
  const [active, setActive] = useState("overview");
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = sections.find((section) => section.id === active) || sections[0];
  const content = useMemo(() => ({
    overview: { kicker: t.nav.overview, title: t.introTitle, body: t.introBody, marker: "01", code: "watchtower.render({ source, layout })" },
    "getting-started": { kicker: t.nav.gettingStarted, title: t.quickstart, body: t.quickstartBody, marker: "02", code: "npm create watchtower@latest" },
    extensions: { kicker: t.nav.extensions, title: language === "fr" ? "Des extensions qui restent simples." : "Extensions that stay simple.", body: language === "fr" ? "Un manifeste expose les capacités. Le runtime s’occupe du reste : découverte, navigation et rendu." : "A manifest exposes capabilities. The runtime handles the rest: discovery, navigation, and rendering.", marker: "03", code: "export default defineExtension({ name: 'library' })" },
    "ui-schema": { kicker: t.nav.uiSchema, title: language === "fr" ? "L’interface est une donnée." : "The interface is data.", body: language === "fr" ? "Décrivez des sections, des cartes et des layouts dans un contrat JSON lisible par les humains." : "Describe sections, cards, and layouts in a JSON contract that humans can read.", marker: "04", code: '{ "layout": "masonry", "columns": 3 }' },
    api: { kicker: t.nav.api, title: language === "fr" ? "Une API courte, composable." : "A short, composable API.", body: language === "fr" ? "Composez les sources, adaptez le renderer, et gardez chaque responsabilité à sa place." : "Compose sources, adapt the renderer, and keep every responsibility in its place.", marker: "05", code: "const result = await extension.query(params)" }
  }), [language, t]);
  const page = content[active];
  const selectSection = (id) => { setActive(id); setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return (
    <div className="docs-shell">
      <header className="docs-topbar">
        <button className="docs-brand" onClick={onHome}><span className="brand-mark"><i /><i /><i /></span><span>WATCHTOWER <small>/ DOCS</small></span></button>
        <div className="docs-top-actions"><a href={GITHUB_URL} target="_blank" rel="noreferrer" className="github-link"><Icon name="github" size={16} /> GitHub <Icon name="arrowUpRight" size={13} /></a><LanguagePicker language={language} setLanguage={setLanguage} /><button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation"><Icon name={menuOpen ? "close" : "menu"} size={20} /></button></div>
      </header>
      <div className="docs-layout">
        <aside className={`docs-sidebar ${menuOpen ? "open" : ""}`}>
          <div className="sidebar-intro"><span className="side-label">{t.docsLabel}</span><p>{language === "fr" ? "Le guide pour rester au sommet." : "The guide to staying on top."}</p></div>
          <nav>
            {sections.map((section) => <button key={section.id} className={active === section.id ? "active" : ""} onClick={() => selectSection(section.id)}><Icon name={section.icon} size={16} /><span>{t.nav[section.key]}</span>{active === section.id && <i className="nav-dot" />}</button>)}
          </nav>
          <div className="sidebar-bottom"><span className="side-label">{t.source}</span><a href={GITHUB_URL} target="_blank" rel="noreferrer"><Icon name="github" size={15} /> ferelking242/watchtower <Icon name="arrowUpRight" size={12} /></a><span className="version">v0.1.0 · open source</span></div>
        </aside>
        <main className="docs-main">
          <div className="docs-breadcrumb"><span>WATCHTOWER</span><Icon name="chevron" size={13} /><span>{page.kicker}</span></div>
          <section className="docs-hero">
            <div className="docs-marker">{page.marker}</div>
            <div><p className="eyebrow"><span className="eyebrow-rule" />{page.kicker}</p><h1>{page.title}</h1><p className="docs-lead">{page.body}</p></div>
          </section>
          <section className="docs-content-grid">
            <div className="docs-copy">
              <p>{language === "fr" ? "Watchtower transforme un ensemble de données en une surface calme et navigable. Le contrat reste proche du code, explicite et facile à faire évoluer." : "Watchtower turns a set of data into a calm, navigable surface. The contract stays close to the code, explicit, and easy to evolve."}</p>
              <div className="note-card"><Icon name="spark" size={17} /><div><strong>{language === "fr" ? "Pensé pour le changement." : "Designed for change."}</strong><span>{language === "fr" ? "Remplacez une source sans refaire votre interface." : "Swap a source without rebuilding your interface."}</span></div></div>
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

function App() {
  const initialView = new URLSearchParams(window.location.search).get("view");
  const [ready, setReady] = useState(() => initialView === "docs" || initialView === "landing");
  const [showDocs, setShowDocs] = useState(() => initialView === "docs");
  const [language, setLanguage] = useState("en");
  const t = translations[language];
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  const onFinish = () => setReady(true);
  if (!ready) return <LoadingScreen copy={t.loading} onFinish={onFinish} />;
  return showDocs ? <Docs t={t} language={language} setLanguage={setLanguage} onHome={() => setShowDocs(false)} /> : <Landing t={t} onDocs={() => setShowDocs(true)} />;
}

createRoot(document.getElementById("root")).render(<App />);