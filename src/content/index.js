// Merges the English base with each locale's prose overlay.
//
// `code` and `marker` always come from English because they are language
// independent. `title`, `body`, `subsections` and `facts` come from the locale
// when it provides them.
//
// Subsections are merged by position, so an overlay is only trusted when its
// subsection count matches the base. A translation written against an older
// structure therefore falls back to English instead of pairing translated
// headings with the wrong paragraphs.
import en from "./en.js";
import fr from "./fr.js";
import es from "./es.js";
import pt from "./pt.js";
import de from "./de.js";
import it from "./it.js";
import ru from "./ru.js";
import ar from "./ar.js";
import ja from "./ja.js";
import ko from "./ko.js";
import zh from "./zh.js";
import tr from "./tr.js";
import hi from "./hi.js";
import id from "./id.js";
import th from "./th.js";

const overlays = { fr, es, pt, de, it, ru, ar, ja, ko, zh, tr, hi, id, th };

function mergeSection(base, overlay) {
  if (!overlay) return { ...base };
  const subsections =
    overlay.subsections && overlay.subsections.length === base.subsections.length
      ? overlay.subsections
      : base.subsections;
  const facts =
    overlay.facts && overlay.facts.length === base.facts.length
      ? overlay.facts
      : base.facts;
  return {
    marker: base.marker,
    code: base.code,
    title: overlay.title ?? base.title,
    body: overlay.body ?? base.body,
    subsections,
    facts
  };
}

function buildLanguage(code) {
  const overlay = overlays[code] || {};
  const sections = {};
  for (const [id, base] of Object.entries(en)) {
    sections[id] = mergeSection(base, overlay[id]);
  }
  return sections;
}

// English is the base with no overlay.
const CONTENT = { en };
for (const code of Object.keys(overlays)) CONTENT[code] = buildLanguage(code);

// A locale counts as fully translated only when every section has prose of its
// own, which is what the language picker reports to the reader.
export const hasFullTranslation = (code) => {
  if (code === "en") return true;
  const overlay = overlays[code];
  if (!overlay) return false;
  return Object.keys(en).every((id) => {
    const entry = overlay[id];
    return entry?.title && entry?.body && entry?.subsections?.length === en[id].subsections.length;
  });
};

export const getContent = (code) => CONTENT[code] || CONTENT.en;
export default CONTENT;
