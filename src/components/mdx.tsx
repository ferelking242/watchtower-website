import defaultMdxComponents from "fumadocs-ui/mdx";
import { DocsBody } from "fumadocs-ui/layouts/docs/page";
import type { MDXComponents } from "mdx/types";
import LayoutReference from "./layout-reference";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    LayoutReference,
    ...components,
  };
}

export default getMDXComponents({ wrapper: DocsBody });
