import { navigate } from "astro:transitions/client";
import { i18nProvider } from "fumadocs-ui/i18n";
import { RootProvider } from "fumadocs-ui/provider/astro";
import { translations } from "../lib/layout.shared";
import SearchDialog from "./search";

interface ProviderProps {
  lang: string;
  pathname: string;
  params: Record<string, string | undefined>;
  children?: React.ReactNode;
}

export function Provider({ lang, pathname, params, children }: ProviderProps) {
  return (
    <RootProvider
      pathname={pathname}
      params={params}
      navigate={navigate}
      i18n={i18nProvider(translations, lang)}
      theme={{ defaultTheme: "dark", enableSystem: false }}
      search={{ SearchDialog }}
    >
      {children}
    </RootProvider>
  );
}
