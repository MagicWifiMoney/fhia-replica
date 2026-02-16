// WordPress REST API client for headless CMS integration
// Fetches content from the live FHIA WordPress site at build time

const WP_API_URL = 'https://fhia.net/wp-json/wp/v2';

// ─── Types ───────────────────────────────────────────────

export interface WPPost {
    id: number;
    slug: string;
    date: string;
    modified: string;
    title: { rendered: string };
    content: { rendered: string; protected: boolean };
    excerpt: { rendered: string; protected: boolean };
    categories: number[];
    featured_media: number;
    _embedded?: {
        'wp:featuredmedia'?: Array<{
            source_url: string;
            alt_text: string;
            media_details: {
                width: number;
                height: number;
            };
        }>;
    };
}

export interface WPPage {
    id: number;
    slug: string;
    link: string;
    date: string;
    modified: string;
    title: { rendered: string };
    content: { rendered: string; protected: boolean };
    excerpt: { rendered: string; protected: boolean };
    parent: number;
    featured_media: number;
    _embedded?: {
        'wp:featuredmedia'?: Array<{
            source_url: string;
            alt_text: string;
            media_details: {
                width: number;
                height: number;
            };
        }>;
    };
}

export interface WPCategory {
    id: number;
    name: string;
    slug: string;
    count: number;
}

// ─── Helpers ─────────────────────────────────────────────

function decodeHtmlEntities(text: string): string {
    return text
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&#8217;/g, '\u2019')
        .replace(/&#8216;/g, '\u2018')
        .replace(/&#8220;/g, '\u201C')
        .replace(/&#8221;/g, '\u201D')
        .replace(/&#8211;/g, '\u2013')
        .replace(/&#8212;/g, '\u2014')
        .replace(/&#8230;/g, '\u2026');
}

function stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, '').trim();
}

/** Extract the path portion from a full WP link URL */
function extractPath(link: string): string {
    try {
        const url = new URL(link);
        return url.pathname.replace(/\/$/, '') || '/';
    } catch {
        return link;
    }
}

// ─── Posts (Blog Articles) ───────────────────────────────

export async function getAllPosts(): Promise<WPPost[]> {
    const posts: WPPost[] = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
        const res = await fetch(
            `${WP_API_URL}/posts?per_page=100&page=${page}&_embed=wp:featuredmedia`,
            { next: { revalidate: 3600 } } // Revalidate every hour
        );

        if (!res.ok) break;

        const data: WPPost[] = await res.json();
        posts.push(...data);

        const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '1');
        hasMore = page < totalPages;
        page++;
    }

    return posts;
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
    const res = await fetch(
        `${WP_API_URL}/posts?slug=${encodeURIComponent(slug)}&_embed=wp:featuredmedia`,
        { next: { revalidate: 3600 } }
    );

    if (!res.ok) return null;

    const posts: WPPost[] = await res.json();
    return posts.length > 0 ? posts[0] : null;
}

export async function getPostSlugs(): Promise<string[]> {
    const posts = await getAllPosts();
    return posts.map((p) => p.slug);
}

// ─── Pages ───────────────────────────────────────────────

export async function getAllPages(): Promise<WPPage[]> {
    const pages: WPPage[] = [];
    let page = 1;
    let hasMore = true;

    while (hasMore) {
        const res = await fetch(
            `${WP_API_URL}/pages?per_page=100&page=${page}&_embed=wp:featuredmedia`,
            { next: { revalidate: 3600 } }
        );

        if (!res.ok) break;

        const data: WPPage[] = await res.json();
        pages.push(...data);

        const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '1');
        hasMore = page < totalPages;
        page++;
    }

    return pages;
}

export async function getPageBySlug(slug: string): Promise<WPPage | null> {
    const res = await fetch(
        `${WP_API_URL}/pages?slug=${encodeURIComponent(slug)}&_embed=wp:featuredmedia`,
        { next: { revalidate: 3600 } }
    );

    if (!res.ok) return null;

    const pages: WPPage[] = await res.json();
    return pages.length > 0 ? pages[0] : null;
}

export async function getPageById(id: number): Promise<WPPage | null> {
    const res = await fetch(
        `${WP_API_URL}/pages/${id}?_embed=wp:featuredmedia`,
        { next: { revalidate: 3600 } }
    );

    if (!res.ok) return null;
    return res.json();
}

/**
 * Build a map of page ID → full path (e.g., "/commercial-auto-insurance/fleet-insurance")
 * by resolving the parent chain for each page.
 */
export async function getPagePathMap(): Promise<Map<number, string>> {
    const pages = await getAllPages();
    const idToPage = new Map<number, WPPage>();
    pages.forEach((p) => idToPage.set(p.id, p));

    const pathMap = new Map<number, string>();

    function buildPath(page: WPPage): string {
        if (pathMap.has(page.id)) return pathMap.get(page.id)!;

        if (page.parent && idToPage.has(page.parent)) {
            const parentPath = buildPath(idToPage.get(page.parent)!);
            const fullPath = `${parentPath}/${page.slug}`;
            pathMap.set(page.id, fullPath);
            return fullPath;
        }

        const path = `/${page.slug}`;
        pathMap.set(page.id, path);
        return path;
    }

    pages.forEach((p) => buildPath(p));
    return pathMap;
}

/**
 * Get all page paths as slug arrays for generateStaticParams
 * Filters to only service sub-pages and location sub-pages
 */
export async function getServicePagePaths(): Promise<string[][]> {
    const pages = await getAllPages();
    const pathMap = await getPagePathMap();

    // Service parent slugs
    const serviceParentSlugs = new Set([
        'commercial-auto-insurance',
        'personal-auto-insurance',
        'home-insurance',
        'business-insurance',
    ]);

    const paths: string[][] = [];

    for (const page of pages) {
        const fullPath = pathMap.get(page.id);
        if (!fullPath) continue;

        // Only include child pages of service parents
        const segments = fullPath.split('/').filter(Boolean);
        if (segments.length >= 2 && serviceParentSlugs.has(segments[0])) {
            paths.push(segments);
        }
    }

    return paths;
}

/**
 * Get page by its full path (e.g., "/commercial-auto-insurance/fleet-insurance")
 */
export async function getPageByPath(path: string): Promise<WPPage | null> {
    const pages = await getAllPages();
    const pathMap = await getPagePathMap();

    const normalizedTarget = path.startsWith('/') ? path : `/${path}`;

    for (const [id, pagePath] of pathMap) {
        if (pagePath === normalizedTarget) {
            const page = pages.find((p) => p.id === id);
            return page || null;
        }
    }

    return null;
}

// ─── Categories ──────────────────────────────────────────

export async function getAllCategories(): Promise<WPCategory[]> {
    const res = await fetch(
        `${WP_API_URL}/categories?per_page=100`,
        { next: { revalidate: 3600 } }
    );

    if (!res.ok) return [];
    return res.json();
}

export async function getCategoryById(id: number): Promise<WPCategory | null> {
    const categories = await getAllCategories();
    return categories.find((c) => c.id === id) || null;
}

export async function getCategoryMap(): Promise<Map<number, WPCategory>> {
    const categories = await getAllCategories();
    const map = new Map<number, WPCategory>();
    categories.forEach((c) => map.set(c.id, c));
    return map;
}

// ─── Content Utilities ───────────────────────────────────

/** Get the clean title from a WP post/page */
export function getTitle(item: WPPost | WPPage): string {
    return decodeHtmlEntities(item.title.rendered);
}

/** Get clean excerpt text (strip HTML tags) */
export function getExcerpt(item: WPPost | WPPage): string {
    return decodeHtmlEntities(stripHtml(item.excerpt.rendered));
}

/** Get featured image URL if available */
export function getFeaturedImage(item: WPPost | WPPage): string | null {
    const media = item._embedded?.['wp:featuredmedia']?.[0];
    return media?.source_url || null;
}

/** Get featured image alt text */
export function getFeaturedImageAlt(item: WPPost | WPPage): string {
    const media = item._embedded?.['wp:featuredmedia']?.[0];
    return media?.alt_text || getTitle(item);
}

/** Extract path from a WP page link */
export { extractPath };
