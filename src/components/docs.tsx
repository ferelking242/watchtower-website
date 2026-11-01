import { useFumadocsLoader } from "fumadocs-core/source/client";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import {
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/layouts/docs/page";
import ExtensionCatalogue from "./extension-catalogue";
import { baseOptions } from "../lib/layout.shared";
import { Provider } from "./provider";

interface DocsProps {
  lang: string;
  pathname: string;
  params: Record<string, string | undefined>;
  tree: Parameters<typeof useFumadocsLoader>[0]["tree"];
  title: string;
  fullTitle?: string;
  description?: string;
  toc: Parameters<typeof DocsPage>[0]["toc"];
  isCatalogue?: boolean;
  children: React.ReactNode;
}

export function Docs({
  lang,
  pathname,
  params,
  tree,
  title,
  fullTitle,
  description,
  toc,
  isCatalogue = false,
  children,
}: DocsProps) {
  const data = useFumadocsLoader({ tree });

  return (
    <Provider lang={lang} pathname={pathname} params={params}>
      <DocsLayout {...baseOptions()} tree={data.tree}>
        <DocsPage toc={toc}>
          <DocsTitle>{fullTitle || title}</DocsTitle>
          {description && <DocsDescription>{description}</DocsDescription>}
          {isCatalogue ? <ExtensionCatalogue /> : children}
        </DocsPage>
      </DocsLayout>
    </Provider>
  );
}
