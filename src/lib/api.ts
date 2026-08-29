export async function get<T = unknown>(path: string): Promise<T> {
  const r = await fetch(path);
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return r.json() as Promise<T>;
}
export interface BlogCard {
  id: number; title: string; slug: string; excerpt: string; topic: string; tags: string;
  cover: string; published_at: string; views: number; seo_title: string; seo_desc: string;
}
export const readingTime = (html: string) => Math.max(1, Math.round(html.replace(/<[^>]*>/g, ' ').split(/\s+/).length / 220));
export const fmtDate = (s?: string | null) =>
  s ? new Date(s).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '';
