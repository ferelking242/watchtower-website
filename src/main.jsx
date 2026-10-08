import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { LANGUAGES, LANGUAGE_CODES, SECTION_GROUPS, SECTION_IDS, SECTION_ICONS, getUi, getDir } from "./i18n.js";
import { getContent } from "./content/index.js";


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
    discord: <><path d="M8.5 9.5c2.3-1 4.7-1 7 0"/><path d="M7.5 16.5c-2-.4-3.5-1-3.5-1C4.6 11.9 5.5 8.6 7 6.4A12 12 0 0 1 10.4 5l.7 1.4a10 10 0 0 1 1.8 0L13.6 5A12 12 0 0 1 17 6.4c1.5 2.2 2.4 5.5 3 9.1 0 0-1.5.6-3.5 1"/><path d="m7.5 16.5.6 1.3a10 10 0 0 0 7.8 0l.6-1.3"/><circle cx="9.8" cy="12.3" r="1.1"/><circle cx="14.2" cy="12.3" r="1.1"/></>,
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
const GITHUB_URL = "https://github.com/ferelking242/watchtower";
const GITHUB_SITE_URL = "https://github.com/ferelking242/watchtower-website";
const DISCORD_URL = "https://discord.gg/";
const WATCHTOWER_VERSION = "8.1.160+160";

const toNavItem = (id) => ({ id, key: id, icon: SECTION_ICONS[id] });
const sectionGroups = SECTION_GROUPS.map((group) => ({
  key: group.key,
  items: group.items.map((item) =>
    typeof item === "string"
      ? toNavItem(item)
      : { ...toNavItem(item.id), children: item.children.map(toNavItem) }
  )
}));
const sections = SECTION_IDS.map(toNavItem);

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
        <span className="language-current"><b>{current.flag}</b>{current.code.toUpperCase()}</span><Icon name="chevron" size={12} />
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

function Docs({ t, content, language, setLanguage, theme, setTheme, onHome }) {
  const [active, setActive] = useState("getting-started");
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [collapsed, setCollapsed] = useState(() => new Set());
  const [copied, setCopied] = useState(false);
  const dir = getDir(language);

  const filteredGroups = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sectionGroups;
    const matches = (section) => {
      const page = content[section.id];
      const haystack = [t.nav[section.key], page?.title, page?.body, ...(page?.subsections || []).flat()]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    };
    return sectionGroups
      .map((group) => ({
        ...group,
        items: group.items
          .map((item) => {
            if (!item.children) return matches(item) ? item : null;
            if (matches(item)) return item;
            const kids = item.children.filter(matches);
            return kids.length ? { ...item, children: kids } : null;
          })
          .filter(Boolean)
      }))
      .filter((group) => group.items.length > 0);
  }, [query, t, content]);

  const page = content[active] || content["getting-started"];
  const currentIndex = sections.findIndex((item) => item.id === active);
  const prevSection = sections[(currentIndex - 1 + sections.length) % sections.length];
  const nextSection = sections[(currentIndex + 1) % sections.length];
  const selectSection = (id) => { setActive(id); setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const toggleGroup = (id) => setCollapsed((prev) => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });
  const copyCode = () => {
    navigator.clipboard?.writeText(page.code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };
  const parentOfActive = sectionGroups
    .flatMap((group) => group.items)
    .find((item) => item.children?.some((child) => child.id === active))?.id;

  return (
    <div className="docs-shell" dir={dir}>
      <header className="docs-topbar">
        <button className="docs-brand" onClick={onHome}><span className="brand-mark"><i /><i /><i /></span><span>WATCHTOWER <small>/ DOCS</small></span></button>
        <div className="docs-top-actions">
          <LanguagePicker language={language} setLanguage={setLanguage} />
          <button className="topbar-action theme-switch" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"} aria-pressed={theme === "light"}>
            <Icon name={theme === "dark" ? "sun" : "moon"} size={14} /><span>{theme === "dark" ? "Dark" : "Light"}</span>
          </button>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="topbar-action github-link"><Icon name="github" size={15} /> GitHub <Icon name="arrowUpRight" size={12} /></a>
          <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation"><Icon name={menuOpen ? "close" : "menu"} size={20} /></button>
        </div>
      </header>
      <div className="docs-layout">
        <aside className={`docs-sidebar ${menuOpen ? "open" : ""}`}>
          <div className="sidebar-brand">
            <span className="brand-mark"><i /><i /><i /></span>
            <span className="sidebar-brand-text">WATCHTOWER <small>{t.brandSub}</small></span>
          </div>
          <label className="sidebar-search">
            <Icon name="search" size={15} />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.searchPlaceholder} aria-label={t.searchPlaceholder} />
            {query && <button type="button" className="search-clear" onClick={() => setQuery("")} aria-label="Clear search"><Icon name="close" size={13} /></button>}
          </label>
          <nav className="docs-nav">
            {filteredGroups.length === 0 && <p className="docs-nav-empty">{t.noResults}</p>}
            {filteredGroups.map((group) => (
              <div className="docs-nav-group" key={group.key}>
                <span className="docs-nav-group-label">{t.groups[group.key]}</span>
                {group.items.map((section) => {
                  const open = section.children && (section.id === parentOfActive || !collapsed.has(section.id));
                  return (
                    <div className="docs-nav-item" key={section.id}>
                      <div className={`docs-nav-row ${active === section.id ? "active" : ""}`}>
                        <button className="docs-nav-link" onClick={() => selectSection(section.id)}>
                          <Icon name={section.icon} size={15} /><span>{t.nav[section.key]}</span>
                        </button>
                        {section.children && (
                          <button className="docs-nav-caret" onClick={() => toggleGroup(section.id)} aria-expanded={!!open} aria-label={t.nav[section.key]}>
                            <Icon name="chevron" size={13} />
                          </button>
                        )}
                        {active === section.id && !section.children && <i className="nav-dot" />}
                      </div>
                      {section.children && open && (
                        <div className="docs-nav-children">
                          {section.children.map((child) => (
                            <button key={child.id} className={active === child.id ? "active" : ""} onClick={() => selectSection(child.id)}>
                              <span>{t.nav[child.key]}</span>{active === child.id && <i className="nav-dot" />}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </nav>
          <footer className="sidebar-footer">
            <a className="sidebar-source" href={GITHUB_URL} target="_blank" rel="noreferrer"><Icon name="github" size={15} /> ferelking242/watchtower <Icon name="arrowUpRight" size={12} /></a>
            <div className="sidebar-social">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" size={16} /></a>
              <a href={DISCORD_URL} target="_blank" rel="noreferrer" aria-label="Discord"><Icon name="discord" size={16} /></a>
              <a href={GITHUB_SITE_URL} target="_blank" rel="noreferrer" aria-label="Website source"><Icon name="code" size={16} /></a>
            </div>
            <span className="version">v{WATCHTOWER_VERSION} · Apache-2.0</span>
          </footer>
        </aside>
        <main className="docs-main">
          <nav className="docs-breadcrumb" aria-label="Breadcrumb">
            <button onClick={() => selectSection("getting-started")}>WATCHTOWER</button>
            <Icon name="chevron" size={13} />
            <span>{t.nav[active]}</span>
          </nav>
          <section className="docs-hero">
            <div className="docs-marker">{page.marker}</div>
            <div className="docs-hero-text">
              <h1>{page.title}</h1>
              <p className="docs-lead">{page.body}</p>
            </div>
          </section>
          <section className="docs-content-grid">
            <div className="docs-copy" id="docs-summary">
              {page.subsections?.map(([title, body], index) => (
                <article className="docs-subsection" id={`docs-subsection-${index}`} key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
              <section className="docs-cheatsheet">
                <span className="side-label">{t.cheatSheet}</span>
                <ul className="docs-facts">{page.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
              </section>
            </div>
            <div className="code-card" id="docs-example"><div className="code-top"><span><i /> {t.contractExample}</span><button onClick={copyCode} aria-label={t.copy}>{copied ? <Icon name="check" size={14} /> : <Icon name="copy" size={14} />}</button></div><pre><code>{page.code}</code></pre></div>
          </section>
          <nav className="docs-pager" aria-label={t.continueLabel}>
            <button className="pager-card prev" onClick={() => selectSection(prevSection.id)}>
              <span className="pager-label"><Icon name="arrow" size={14} /> {t.previous}</span>
              <span className="pager-title">{t.nav[prevSection.key]}</span>
            </button>
            <button className="pager-card next" onClick={() => selectSection(nextSection.id)}>
              <span className="pager-label">{t.continueLabel} <Icon name="arrow" size={14} /></span>
              <span className="pager-title">{t.nav[nextSection.key]}</span>
            </button>
          </nav>
        </main>
        <aside className="docs-toc">
          <span className="side-label">{t.onThisPage}</span>
          <a className="toc-active" href="#docs-summary">{t.summary}</a>
          {page.subsections?.map(([title], index) => <a href={`#docs-subsection-${index}`} key={title}>{title}</a>)}
          <a href="#docs-example">{t.contractExample}</a>
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
  const [language, setLanguage] = useState(() => {
    const stored = localStorage.getItem("watchtower-language");
    return LANGUAGE_CODES.includes(stored) ? stored : "en";
  });
  const [theme, setTheme] = useState(() => localStorage.getItem("watchtower-theme") || "dark");
  const t = useMemo(() => getUi(language), [language]);
  const content = useMemo(() => getContent(language), [language]);
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = getDir(language);
    localStorage.setItem("watchtower-language", language);
  }, [language]);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("watchtower-theme", theme);
  }, [theme]);
  return showDocs
    ? <Docs t={t} content={content} language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} onHome={() => setShowDocs(false)} />
    : <KageExperience />;
}

createRoot(document.getElementById("root")).render(<App />);
