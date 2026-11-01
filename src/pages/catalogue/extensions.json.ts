import extensionCatalogue from "../../data/extensions.json";

export const prerender = true;

export function GET() {
  return new Response(JSON.stringify(extensionCatalogue), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
