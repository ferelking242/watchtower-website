import { defineCollection } from "astro:content";
import { metaLoader, pageLoader } from "@fumadocs/astro/loaders";
import { pageSchema } from "fumadocs-core/source/schema";
import { z } from "astro/zod";

const docsSchema = pageSchema.extend({
  fullTitle: z.string().optional(),
  marker: z.string().optional(),
});

export const collections = {
  docs: defineCollection({
    loader: pageLoader(),
    schema: docsSchema,
  }),
  meta: defineCollection({
    loader: metaLoader(),
  }),
};
