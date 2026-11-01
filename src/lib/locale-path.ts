export function getLocalizedPathname(
  pathname: string,
  baseUrl: string,
  currentLanguage: string,
  nextLanguage: string,
  defaultLanguage: string,
) {
  const base = baseUrl === "/" ? "" : baseUrl.replace(/\/+$/, "");
  let route = pathname;

  if (base && (route === base || route.startsWith(`${base}/`))) {
    route = route.slice(base.length) || "/";
  }

  if (!route.startsWith("/")) route = `/${route}`;

  const currentPrefix = `/${currentLanguage}`;
  if (
    currentLanguage !== defaultLanguage &&
    (route === currentPrefix || route.startsWith(`${currentPrefix}/`))
  ) {
    route = route.slice(currentPrefix.length) || "/";
  }

  const nextPrefix = nextLanguage === defaultLanguage ? "" : `/${nextLanguage}`;
  return `${base}${nextPrefix}${route}` || "/";
}
