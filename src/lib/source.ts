import { getCollection } from "astro:content";
import { toFumadocsSource } from "@fumadocs/astro/source";
import { loader } from "fumadocs-core/source";
import { i18n } from "./i18n";

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export const source = loader({
  source: toFumadocsSource(
    await getCollection("docs"),
    await getCollection("meta"),
  ),
  baseUrl: `${base}/docs`,
  i18n,
});
