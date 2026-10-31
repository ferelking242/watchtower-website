import type { APIRoute } from "astro";
import { createSearchAPI } from "fumadocs-core/search/server";
import { i18n } from "../../../lib/i18n";
import { source } from "../../../lib/source";

export const prerender = true;

export function getStaticPaths() {
  return i18n.languages.map((lang) => ({
    params: { lang },
    props: { lang },
  }));
}

export const GET: APIRoute = async ({ props }) => {
  const localePages = source
    .getLanguages()
    .find(({ language }) => language === props.lang)?.pages;

  if (!localePages) {
    return new Response("Unknown documentation locale", { status: 404 });
  }

  const indexes = await Promise.all(
    localePages.map(async (page) => {
      let structuredData = page.data.structuredData;
      if (typeof structuredData === "function") {
        structuredData = await structuredData();
      }
      if (!structuredData && "load" in page.data && typeof page.data.load === "function") {
        structuredData = (await page.data.load()).structuredData;
      }
      if (!structuredData) {
        throw new Error(`Missing search content for ${page.url}`);
      }

      return {
        title: page.data.title,
        description: page.data.description,
        url: page.url,
        id: page.url,
        structuredData,
      };
    }),
  );

  const search = createSearchAPI("advanced", { indexes });
  return search.staticGET();
};
