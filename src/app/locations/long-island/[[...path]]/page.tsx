import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
    getPageByPath,
    getTitle,
    getExcerpt,
    getFeaturedImage,
    getFeaturedImageAlt,
    getAllPages,
    getPagePathMap,
} from '@/lib/wordpress';
import WPContentRenderer from '@/components/WPContentRenderer';

export const revalidate = 3600;

/**
 * Valid location paths under /locations/long-island/...
 * The catch-all captures everything after /locations/long-island/
 */
export async function generateStaticParams() {
    const pages = await getAllPages();
    const pathMap = await getPagePathMap();
    const params: Array<{ path: string[] }> = [];

    // Add the long-island parent page itself (no path segments)
    params.push({ path: [] });

    for (const page of pages) {
        const fullPath = pathMap.get(page.id);
        if (!fullPath) continue;

        // Match pages under /locations/long-island/...
        if (fullPath.startsWith('/locations/long-island/')) {
            const rest = fullPath.replace('/locations/long-island/', '');
            const segments = rest.split('/').filter(Boolean);
            if (segments.length > 0) {
                params.push({ path: segments });
            }
        }
    }

    return params;
}

export async function generateMetadata({ params }: { params: Promise<{ path?: string[] }> }): Promise<Metadata> {
    const { path = [] } = await params;
    const wpPath = `/locations/long-island${path.length > 0 ? '/' + path.join('/') : ''}`;
    const page = await getPageByPath(wpPath);
    if (!page) return { title: 'Location Not Found' };

    const title = `${getTitle(page)} Insurance Services | FHIA`;
    const description = getExcerpt(page);

    return {
        title,
        description,
        openGraph: { title, description },
    };
}

export default async function LocationSubPage({ params }: { params: Promise<{ path?: string[] }> }) {
    const { path = [] } = await params;
    const wpPath = `/locations/long-island${path.length > 0 ? '/' + path.join('/') : ''}`;
    const page = await getPageByPath(wpPath);
    if (!page) notFound();

    const title = getTitle(page);
    const excerpt = getExcerpt(page);
    const featuredImage = getFeaturedImage(page);
    const featuredImageAlt = getFeaturedImageAlt(page);

    // Build breadcrumb
    const breadcrumbs = [
        { label: 'Locations', href: '/locations' },
    ];

    if (path.length === 0) {
        breadcrumbs.push({ label: 'Long Island', href: '' });
    } else {
        breadcrumbs.push({ label: 'Long Island', href: '/locations/long-island' });
        for (let i = 0; i < path.length; i++) {
            const label = path[i].split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            const href = i < path.length - 1 ? `/locations/long-island/${path.slice(0, i + 1).join('/')}` : '';
            breadcrumbs.push({ label, href });
        }
    }

    return (
        <>
            {/* Hero */}
            <section className="bg-navy py-16 md:py-20">
                <div className="container-custom">
                    <nav className="mb-4 flex items-center gap-2 text-sm flex-wrap">
                        {breadcrumbs.map((crumb, i) => (
                            <span key={i} className="flex items-center gap-2">
                                {i > 0 && <span className="text-gray-500">/</span>}
                                {crumb.href ? (
                                    <Link href={crumb.href} className="text-gray-400 hover:text-gold transition-colors">
                                        {crumb.label}
                                    </Link>
                                ) : (
                                    <span className="text-gold">{crumb.label}</span>
                                )}
                            </span>
                        ))}
                    </nav>
                    <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">
                        {title}
                    </h1>
                    {excerpt && (
                        <p className="text-gray-300 text-lg max-w-3xl">{excerpt}</p>
                    )}
                    <div className="flex gap-4 mt-8 flex-wrap">
                        <Link href="/quote" className="btn-primary">
                            Get a Free Quote
                        </Link>
                        <a href="tel:631-659-0189" className="btn-outline">
                            Call (631) 659-0189
                        </a>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 md:py-20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            {featuredImage && (
                                <img
                                    src={featuredImage}
                                    alt={featuredImageAlt}
                                    className="w-full rounded-xl mb-8 shadow-lg"
                                />
                            )}
                            <WPContentRenderer content={page.content.rendered} />
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <div className="bg-navy rounded-xl p-6 mb-8 sticky top-24">
                                <h3 className="font-poppins text-xl font-bold text-white mb-3">
                                    Local Insurance Experts
                                </h3>
                                <p className="text-gray-300 text-sm mb-4">
                                    Serving Long Island families and businesses since 2003. Get personalized coverage from agents who know your community.
                                </p>
                                <Link href="/quote" className="btn-primary block text-center mb-3">
                                    Get a Free Quote
                                </Link>
                                <Link href="/contact" className="btn-outline block text-center text-sm">
                                    Visit Our Office
                                </Link>
                                <div className="mt-6 pt-4 border-t border-white/10">
                                    <p className="text-gray-400 text-xs mb-1">Melville Office</p>
                                    <p className="text-gray-300 text-sm">150 Broadhollow Rd, Suite 10</p>
                                    <p className="text-gray-300 text-sm mb-2">Melville, NY 11747</p>
                                    <a href="tel:631-659-0189" className="text-gold font-semibold text-lg hover:underline">
                                        (631) 659-0189
                                    </a>
                                </div>
                            </div>

                            {/* Locations Quick Links */}
                            <div className="bg-gray-50 rounded-xl p-6">
                                <h3 className="font-poppins text-lg font-bold text-navy mb-4">
                                    Areas We Serve
                                </h3>
                                <div className="space-y-2">
                                    <Link href="/locations/long-island" className="block text-gray-600 hover:text-gold transition-colors text-sm py-1">
                                        Long Island
                                    </Link>
                                    <Link href="/locations/long-island/suffolk-county" className="block text-gray-600 hover:text-gold transition-colors text-sm py-1 pl-4">
                                        Suffolk County
                                    </Link>
                                    <Link href="/locations/long-island/nassau-county" className="block text-gray-600 hover:text-gold transition-colors text-sm py-1 pl-4">
                                        Nassau County
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}
