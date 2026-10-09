// highlight.js is configured with only the grammars the documentation actually
// uses, so the bundle stays small. The returned HTML is styled by our own token
// colours in styles.css rather than by a bundled theme.
import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import plaintext from "highlight.js/lib/languages/plaintext";
import xml from "highlight.js/lib/languages/xml";

hljs.registerLanguage("bash", bash);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("json", json);
hljs.registerLanguage("plaintext", plaintext);
hljs.registerLanguage("xml", xml);

// Heuristics rather than a declared language: the content files stay simple and
// a block is still highlighted correctly when a new one is added.
const SHELL_VERBS = /\b(watchtower|flutter|dart|git|adb|7z|curl|sudo|npm|npx|cd|ls|chmod|export)\b/;

export function detectLanguage(code) {
  const trimmed = code.trim();
  if (/^[{[]/.test(trimmed)) return "json";
  if (/(^|\n)\s*(class|function|import|export|const|let)\b/.test(code) || /=>/.test(code)) return "javascript";
  if (/^\s*<[a-z]+[\s>]/im.test(trimmed)) return "xml";
  if (SHELL_VERBS.test(code)) return "bash";
  // Folder trees are diagrams, not commands, so they stay unstyled.
  if (/[├└]──/.test(code)) return "plaintext";
  if (/^\s*(#|\$|GET |POST |PUT |DELETE )/m.test(code)) return "bash";
  return "plaintext";
}

const LABELS = {
  bash: "Shell",
  javascript: "JavaScript",
  json: "JSON",
  xml: "HTML",
  plaintext: "Text"
};

export function languageLabel(language) {
  return LABELS[language] || "Text";
}

export function highlightCode(code) {
  const language = detectLanguage(code);
  let html;
  try {
    html = hljs.highlight(code, { language, ignoreIllegals: true }).value;
  } catch {
    html = hljs.highlight(code, { language: "plaintext" }).value;
  }
  return { html, language, label: languageLabel(language) };
}
