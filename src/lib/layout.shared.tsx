import { uiTranslations } from "fumadocs-ui/i18n";
import { i18n } from "./i18n";

const siteBase = import.meta.env.BASE_URL.replace(/\/$/, "");

export const translations = i18n
  .translations()
  .extend(uiTranslations())
  .add({
    en: { displayName: "English" },
    fr: { displayName: "Français" },
    es: { displayName: "Español" },
    pt: { displayName: "Português (Brasil)" },
    de: { displayName: "Deutsch" },
    it: { displayName: "Italiano" },
    ru: { displayName: "Русский" },
    ar: { displayName: "العربية" },
    ja: { displayName: "日本語" },
    ko: { displayName: "한국어" },
    zh: { displayName: "中文" },
    tr: { displayName: "Türkçe" },
    hi: { displayName: "हिन्दी" },
    id: { displayName: "Bahasa Indonesia" },
    th: { displayName: "ไทย" },
  });

export function baseOptions() {
  return {
    nav: {
      title: "WATCHTOWER / DOCS",
      url: `${siteBase}/`,
    },
  };
}
