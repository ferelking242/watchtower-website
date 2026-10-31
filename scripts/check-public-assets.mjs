import { readdir, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { extname, relative, resolve, sep } from "node:path";

const publicRoot = resolve("public");
const checkedExtensions = new Set([".html", ".css"]);
const localReferences = [];

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectFiles(path)));
    } else if (checkedExtensions.has(extname(entry.name).toLowerCase())) {
      files.push(path);
    }
  }

  return files;
}

function collectReferenceValues(source, pattern) {
  const values = [];
  for (const match of source.matchAll(pattern)) {
    values.push(match[1] ?? match[2] ?? match[3].trim());
  }
  return values;
}

function collectUrls(source, filePath, isHtml) {
  const markup = isHtml
    ? source.replace(/<script\b[\s\S]*?<\/script>/gi, "")
    : source;
  const values = isHtml
    ? collectReferenceValues(
        markup,
        /(?:src|href|poster)\s*=\s*["']([^"']+)["']/gi,
      )
    : [];

  const cssSources = isHtml
    ? [
        ...[...markup.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)].map(
          (match) => match[1],
        ),
        ...[...markup.matchAll(/\bstyle\s*=\s*["']([^"']*)["']/gi)].map(
          (match) => match[1],
        ),
      ]
    : [source];

  for (const cssSource of cssSources) {
    values.push(
      ...collectReferenceValues(
        cssSource,
        /url\(\s*(?:"([^"]+)"|'([^']+)'|([^)]*))\s*\)/gi,
      ),
    );
  }

  for (const value of values) {
    if (!value || /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(value)) continue;
    const path = decodeURIComponent(value.split(/[?#]/, 1)[0]);
    if (!path || path.endsWith("/")) continue;

    const target = path.startsWith("/")
      ? resolve(publicRoot, `.${path}`)
      : resolve(filePath, "..", path);
    const relativeTarget = relative(publicRoot, target);

    if (relativeTarget.startsWith(`..${sep}`) || relativeTarget === "..") {
      localReferences.push({ filePath, value, error: "outside public/" });
    } else if (!existsSync(target)) {
      localReferences.push({ filePath, value, error: "file not found" });
    }
  }
}

for (const filePath of await collectFiles(publicRoot)) {
  const isHtml = extname(filePath).toLowerCase() === ".html";
  collectUrls(await readFile(filePath, "utf8"), filePath, isHtml);
}

if (localReferences.length > 0) {
  console.error("Missing local public assets:");
  for (const { filePath, value, error } of localReferences) {
    console.error(`- ${relative(publicRoot, filePath)}: ${value} (${error})`);
  }
  process.exit(1);
}

console.log("All local assets referenced by public HTML and CSS exist.");
