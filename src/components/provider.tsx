import { navigate } from "astro:transitions/client";
import { i18nProvider } from "fumadocs-ui/i18n";
import { RootProvider } from "fumadocs-ui/provider/astro";
import { translations } from "../lib/layout.shared";
import { getLocalizedPathname } from "../lib/locale-path";
import SearchDialog from "./search";

interface ProviderProps {
  lang: string;
  pathname: string;
  params: Record<string, string | undefined>;
  children?: React.ReactNode;
}

export function Provider({ lang, pathname, params, children }: ProviderProps) {
  const i18n = i18nProvider(translations, lang);

  return (
    <RootProvider
      pathname={pathname}
      params={params}
      navigate={navigate}
      i18n={{
        ...i18n,
        onLocaleChange: (nextLanguage) => {
          const nextPath = getLocalizedPathname(
            window.location.pathname,
            import.meta.env.BASE_URL,
            lang,
            nextLanguage,
            i18n.defaultLanguage,
          );
          void navigate(
            `${nextPath}${window.location.search}${window.location.hash}`,
          );
        },
      }}
      theme={{ defaultTheme: "dark", enableSystem: false }}
      search={{ SearchDialog }}
    >
      {children}
    </RootProvider>
  );
}
