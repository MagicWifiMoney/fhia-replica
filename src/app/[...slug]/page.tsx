import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
    getAllPosts,
    getPostBySlug,
    getTitle,
    getExcerpt,
    getFeaturedImage,
    getFeaturedImageAlt,
    getCategoryMap,
    getPageByPath,
    getPageById,
    getAllPages,
    getPagePathMap,
} from '@/lib/wordpress';
import WPContentRenderer from '@/components/WPContentRenderer';
import { ArticleSchema, BreadcrumbSchema, InsuranceServiceSchema } from '@/components/StructuredData';

export const revalidate = 3600;

// Service parent slugs that have sub-pages in WP
const SERVICE_PARENTS = new Set([
    'commercial-auto-insurance',
    'personal-auto-insurance',
    'home-insurance',
    'business-insurance',
]);

interface CatchAllPageProps {
    params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
    // Blog posts → single segment
    const posts = await getAllPosts();
    const postParams = posts.map((post) => ({ slug: [post.slug] }));

    // Service sub-pages → two segments
    const pages = await getAllPages();
    const pathMap = await getPagePathMap();
    const pageParams: Array<{ slug: string[] }> = [];

    for (const page of pages) {
        const fullPath = pathMap.get(page.id);
        if (!fullPath) continue;
        const segments = fullPath.split('/').filter(Boolean);
        if (segments.length === 2 && SERVICE_PARENTS.has(segments[0])) {
            pageParams.push({ slug: segments });
        }
    }

    return [...postParams, ...pageParams];
}

export async function generateMetadata({ params }: CatchAllPageProps): Promise<Metadata> {
    const { slug } = await params;

    if (slug.length === 1) {
        // Blog post
        const post = await getPostBySlug(slug[0]);
        if (!post) return { title: 'Page Not Found' };
        const title = getTitle(post);
        const description = getExcerpt(post);
        const image = getFeaturedImage(post);
        return {
            title,
            description,
            openGraph: {
                title,
                description,
                type: 'article',
                publishedTime: post.date,
                modifiedTime: post.modified,
                ...(image && { images: [{ url: image }] }),
            },
            twitter: { card: 'summary_large_image', title, description },
        };
    }

    if (slug.length === 2 && SERVICE_PARENTS.has(slug[0])) {
        // Service sub-page
        const page = await getPageByPath(`/${slug.join('/')}`);
        if (!page) return { title: 'Page Not Found' };
        const title = `${getTitle(page)} | FHIA Insurance`;
        const description = getExcerpt(page);
        return {
            title,
            description,
            openGraph: { title, description },
        };
    }

    return { title: 'Page Not Found' };
}

export default async function CatchAllPage({ params }: CatchAllPageProps) {
    const { slug } = await params;

    // ── Blog post (single segment) ──
    if (slug.length === 1) {
        const post = await getPostBySlug(slug[0]);
        if (!post) notFound();
        return <BlogPostView post={post} />;
    }

    // ── Service sub-page (two segments) ──
    if (slug.length === 2 && SERVICE_PARENTS.has(slug[0])) {
        const page = await getPageByPath(`/${slug.join('/')}`);
        if (!page) notFound();
        return <ServiceSubPageView page={page} parentSlug={slug[0]} />;
    }

    notFound();
}

// ─── Blog Post View ────────────────────────────────────────

async function BlogPostView({ post }: { post: Awaited<ReturnType<typeof getPostBySlug>> }) {
    if (!post) return null;

    const title = getTitle(post);
    const excerpt = getExcerpt(post);
    const featuredImage = getFeaturedImage(post);
    const featuredImageAlt = getFeaturedImageAlt(post);
    const categoryMap = await getCategoryMap();

    const postCategories = post.categories
        .map((id) => categoryMap.get(id))
        .filter(Boolean);

    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <>
            <ArticleSchema
                title={title}
                description={excerpt || ''}
                url={`/${post.slug}`}
                datePublished={post.date}
                dateModified={post.modified}
                image={featuredImage || undefined}
            />
            <BreadcrumbSchema items={[
                { name: 'Home', href: '/' },
                { name: 'Insights & Guides', href: '/blogs' },
                { name: title, href: `/${post.slug}` },
            ]} />
            <section className="bg-navy py-16 md:py-20">
                <div className="container-custom">
                    <nav className="mb-6">
                        <Link href="/blogs" className="text-gold hover:underline text-sm">
                            ← Back to Insights & Guides
                        </Link>
                    </nav>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {postCategories.map((cat) => (
                            <span key={cat!.id} className="bg-gold/20 text-gold text-xs font-semibold px-3 py-1 rounded-full">
                                {cat!.name}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">
                        {title}
                    </h1>
                    {excerpt && <p className="text-gray-300 text-lg max-w-3xl">{excerpt}</p>}
                    <div className="flex items-center gap-4 mt-6 text-gray-400 text-sm">
                        <time dateTime={post.date}>{formattedDate}</time>
                        <span>•</span>
                        <span>FHIA Insurance Team</span>
                    </div>
                </div>
            </section >

            <article className="py-16 md:py-20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            {featuredImage && (
                                <img src={featuredImage} alt={featuredImageAlt} className="w-full rounded-xl mb-8 shadow-lg" />
                            )}
                            <WPContentRenderer content={post.content.rendered} />
                        </div>
                        <aside className="lg:col-span-1">
                            <div className="bg-navy rounded-xl p-6 mb-8 sticky top-24">
                                <h3 className="font-poppins text-xl font-bold text-white mb-3">Need Insurance Help?</h3>
                                <p className="text-gray-300 text-sm mb-4">Our local experts have been protecting Long Island families and businesses since 2003.</p>
                                <Link href="/quote" className="btn-primary block text-center mb-3">Get a Free Quote</Link>
                                <Link href="/contact-us" className="btn-outline block text-center text-sm">Contact Us</Link>
                                <div className="mt-6 pt-4 border-t border-white/10">
                                    <p className="text-gray-400 text-xs mb-1">Call us directly</p>
                                    <a href="tel:631-659-0189" className="text-gold font-semibold text-lg hover:underline">(631) 659-0189</a>
                                </div>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-6">
                                <h3 className="font-poppins text-lg font-bold text-navy mb-4">Insurance Topics</h3>
                                <div className="space-y-2">
                                    {Array.from(categoryMap.values())
                                        .filter((c) => c.slug !== 'uncategorized')
                                        .map((cat) => (
                                            <Link key={cat.id} href="/blogs" className="block text-gray-600 hover:text-gold transition-colors text-sm py-1">
                                                {cat.name}
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </article>

            <section className="bg-gold py-12">
                <div className="container-custom text-center">
                    <h2 className="font-poppins text-2xl md:text-3xl font-bold text-navy mb-4">Ready to Protect What Matters Most?</h2>
                    <p className="text-navy/80 mb-6 max-w-2xl mx-auto">Compare quotes from multiple carriers and save up to 30% on your insurance.</p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <Link href="/quote" className="btn-secondary">Get a Free Quote</Link>
                        <a href="tel:631-659-0189" className="bg-white text-navy font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300">Call (631) 659-0189</a>
                    </div>
                </div>
            </section>
        </>
    );
}

// ─── Service Sub-Page View ─────────────────────────────────

async function ServiceSubPageView({
    page,
    parentSlug,
}: {
    page: Awaited<ReturnType<typeof getPageByPath>>;
    parentSlug: string;
}) {
    if (!page) return null;

    const title = getTitle(page);
    const excerpt = getExcerpt(page);
    const featuredImage = getFeaturedImage(page);
    const featuredImageAlt = getFeaturedImageAlt(page);

    let parentTitle = parentSlug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    if (page.parent) {
        const parentPage = await getPageById(page.parent);
        if (parentPage) parentTitle = getTitle(parentPage);
    }

    const parentHrefMap: Record<string, string> = {
        'commercial-auto-insurance': '/commercial-auto-insurance',
        'personal-auto-insurance': '/personal-auto-insurance',
        'home-insurance': '/home-insurance',
        'business-insurance': '/business-insurance',
    };
    const parentHref = parentHrefMap[parentSlug] || '/services';

    return (
        <>
            <InsuranceServiceSchema
                name={title}
                description={excerpt || ''}
                url={`/${parentSlug}/${page.slug}`}
            />
            <BreadcrumbSchema items={[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services' },
                { name: parentTitle, href: parentHref },
                { name: title, href: `/${parentSlug}/${page.slug}` },
            ]} />
            <section className="bg-navy py-16 md:py-20">
                <div className="container-custom">
                    <nav className="mb-4 flex items-center gap-2 text-sm">
                        <Link href="/services" className="text-gray-400 hover:text-gold transition-colors">Services</Link>
                        <span className="text-gray-500">/</span>
                        <Link href={parentHref} className="text-gray-400 hover:text-gold transition-colors">{parentTitle}</Link>
                        <span className="text-gray-500">/</span>
                        <span className="text-gold">{title}</span>
                    </nav>
                    <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">{title}</h1>
                    {excerpt && <p className="text-gray-300 text-lg max-w-3xl">{excerpt}</p>}
                    <div className="flex gap-4 mt-8 flex-wrap">
                        <Link href="/quote" className="btn-primary">Get a Free Quote</Link>
                        <a href="tel:631-659-0189" className="btn-outline">Call (631) 659-0189</a>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            {featuredImage && (
                                <img src={featuredImage} alt={featuredImageAlt} className="w-full rounded-xl mb-8 shadow-lg" />
                            )}
                            <WPContentRenderer content={page.content.rendered} />
                        </div>
                        <aside className="lg:col-span-1">
                            <div className="bg-navy rounded-xl p-6 mb-8 sticky top-24">
                                <h3 className="font-poppins text-xl font-bold text-white mb-3">Get Protected Today</h3>
                                <p className="text-gray-300 text-sm mb-4">Compare quotes from multiple carriers. Our local agents find you the best coverage at the best price.</p>
                                <Link href="/quote" className="btn-primary block text-center mb-3">Get a Free Quote</Link>
                                <Link href="/contact-us" className="btn-outline block text-center text-sm">Talk to an Agent</Link>
                                <div className="mt-6 pt-4 border-t border-white/10">
                                    <p className="text-gray-400 text-xs mb-1">Call us directly</p>
                                    <a href="tel:631-659-0189" className="text-gold font-semibold text-lg hover:underline">(631) 659-0189</a>
                                </div>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-6">
                                <h3 className="font-poppins text-lg font-bold text-navy mb-4">Our Services</h3>
                                <div className="space-y-2">
                                    <Link href="/personal-auto-insurance" className="block text-gray-600 hover:text-gold transition-colors text-sm py-1">Personal Auto Insurance</Link>
                                    <Link href="/commercial-auto-insurance" className="block text-gray-600 hover:text-gold transition-colors text-sm py-1">Commercial Auto Insurance</Link>
                                    <Link href="/home-insurance" className="block text-gray-600 hover:text-gold transition-colors text-sm py-1">Home Insurance</Link>
                                    <Link href="/business-insurance" className="block text-gray-600 hover:text-gold transition-colors text-sm py-1">Business Insurance</Link>
                                    <Link href="/captive-insurance-company" className="block text-gray-600 hover:text-gold transition-colors text-sm py-1">Captive Insurance</Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="bg-gold py-12">
                <div className="container-custom text-center">
                    <h2 className="font-poppins text-2xl md:text-3xl font-bold text-navy mb-4">Protect What Matters Most</h2>
                    <p className="text-navy/80 mb-6 max-w-2xl mx-auto">Get personalized coverage from Long Island&apos;s trusted insurance experts since 2003.</p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <Link href="/quote" className="btn-secondary">Request a Quote</Link>
                        <a href="tel:631-659-0189" className="bg-white text-navy font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300">Call (631) 659-0189</a>
                    </div>
                </div>
            </section>
        </>
    );
}
