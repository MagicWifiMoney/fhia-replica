import { MetadataRoute } from 'next';
import { getAllPosts, getAllPages, getPagePathMap } from '@/lib/wordpress';

const BASE_URL = 'https://fhia.net';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // ── Static pages ──
    const staticPages = [
        { url: `${BASE_URL}/`, changeFrequency: 'weekly' as const, priority: 1.0 },
        { url: `${BASE_URL}/about-us/`, changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${BASE_URL}/services/`, changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${BASE_URL}/commercial-auto-insurance/`, changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${BASE_URL}/personal-auto-insurance/`, changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${BASE_URL}/business-insurance/`, changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${BASE_URL}/home-insurance/`, changeFrequency: 'monthly' as const, priority: 0.9 },
        { url: `${BASE_URL}/captive-insurance-company/`, changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${BASE_URL}/locations/`, changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${BASE_URL}/locations/long-island/`, changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: `${BASE_URL}/locations/nassau-county/`, changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: `${BASE_URL}/locations/suffolk-county/`, changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: `${BASE_URL}/blogs/`, changeFrequency: 'weekly' as const, priority: 0.8 },
        { url: `${BASE_URL}/contact-us/`, changeFrequency: 'monthly' as const, priority: 0.7 },
        { url: `${BASE_URL}/quote/`, changeFrequency: 'monthly' as const, priority: 0.8 },
        { url: `${BASE_URL}/privacy-policy/`, changeFrequency: 'yearly' as const, priority: 0.3 },
        { url: `${BASE_URL}/terms-conditions/`, changeFrequency: 'yearly' as const, priority: 0.3 },
        { url: `${BASE_URL}/thank-you/`, changeFrequency: 'yearly' as const, priority: 0.2 },
    ];

    // ── Blog posts from WordPress ──
    const posts = await getAllPosts();
    const postPages = posts.map((post) => ({
        url: `${BASE_URL}/${post.slug}/`,
        lastModified: new Date(post.modified),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // ── Service sub-pages from WordPress ──
    const allPages = await getAllPages();
    const pathMap = await getPagePathMap();
    const SERVICE_PARENTS = new Set([
        'commercial-auto-insurance',
        'personal-auto-insurance',
        'home-insurance',
        'business-insurance',
    ]);

    const serviceSubPages = allPages
        .filter((page) => {
            const fullPath = pathMap.get(page.id);
            if (!fullPath) return false;
            const segments = fullPath.split('/').filter(Boolean);
            return segments.length === 2 && SERVICE_PARENTS.has(segments[0]);
        })
        .map((page) => {
            const fullPath = pathMap.get(page.id)!;
            return {
                url: `${BASE_URL}/${fullPath}/`,
                lastModified: new Date(page.modified),
                changeFrequency: 'monthly' as const,
                priority: 0.7,
            };
        });

    // ── Location sub-pages from WordPress ──
    const locationSubPages = allPages
        .filter((page) => {
            const fullPath = pathMap.get(page.id);
            return fullPath?.startsWith('locations/long-island');
        })
        .map((page) => {
            const fullPath = pathMap.get(page.id)!;
            return {
                url: `${BASE_URL}/${fullPath}/`,
                lastModified: new Date(page.modified),
                changeFrequency: 'monthly' as const,
                priority: 0.6,
            };
        });

    return [...staticPages, ...postPages, ...serviceSubPages, ...locationSubPages];
}
