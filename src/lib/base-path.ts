/** Prefix public asset paths when deployed under a subpath (e.g. GitHub Pages). */
export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/")) return path;
  return `${base}${path}`;
}
