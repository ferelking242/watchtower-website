// Merges the English base with each locale's prose overlay. `code` and
// `marker` are always taken from English because they are language-independent;
// title, body, subsections and facts come from the locale when present.
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
  return {
    marker: base.marker,
    code: base.code,
    title: overlay?.title ?? base.title,
    body: overlay?.body ?? base.body,
    subsections: overlay?.subsections ?? base.subsections,
    facts: overlay?.facts ?? base.facts
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

// English itself is the base with no overlay.
const CONTENT = { en };
for (const code of Object.keys(overlays)) CONTENT[code] = buildLanguage(code);

export const getContent = (code) => CONTENT[code] || CONTENT.en;
export default CONTENT;
