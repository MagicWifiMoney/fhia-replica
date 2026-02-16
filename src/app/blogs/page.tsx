import Link from 'next/link';
import type { Metadata } from 'next';
import {
    getAllPosts,
    getTitle,
    getExcerpt,
    getFeaturedImage,
    getCategoryMap,
} from '@/lib/wordpress';

export const revalidate = 3600;

export const metadata: Metadata = {
    title: 'Insurance Insights and Guides - Personal and Commercial Insurance | Melville, NY | First Heritage Insurance Agency',
    description: 'Expert insurance insights for New York businesses and families. Learn about commercial auto, home, business, and personal insurance from FHIA.',
};

export default async function BlogsPage() {
    const [posts, categoryMap] = await Promise.all([
        getAllPosts(),
        getCategoryMap(),
    ]);

    return (
        <>
            {/* Hero Section */}
            <section className="bg-navy py-20">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <h1 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-4">
                            Insurance Insights and Guides
                        </h1>
                        <p className="text-2xl text-gold font-semibold mb-4">
                            Insurance Insights for New York Businesses &amp; Families
                        </p>
                        <p className="text-gray-300 text-lg">
                            Stay informed with expert advice, industry updates, and practical guides from your local insurance professionals.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Content Label */}
            <section className="py-8 bg-gray-50 border-b">
                <div className="container-custom">
                    <p className="text-navy font-poppins font-semibold text-lg">
                        Exclusive Content for You — {posts.length} Articles
                    </p>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-16 bg-gray-50">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-8">
                        {posts.map((post) => {
                            const title = getTitle(post);
                            const excerpt = getExcerpt(post);
                            const image = getFeaturedImage(post);
                            const category = post.categories
                                .map((id) => categoryMap.get(id)?.name)
                                .filter(Boolean)
                                .join(', ') || 'Insurance';
                            const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            });

                            return (
                                <Link
                                    key={post.id}
                                    href={`/${post.slug}`}
                                    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                                >
                                    <div className="aspect-[16/9] relative overflow-hidden bg-navy">
                                        {image ? (
                                            <img
                                                src={image}
                                                alt={title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-600 to-gold/20 flex items-center justify-center">
                                                <div className="text-center px-6">
                                                    <span className="text-gold text-sm font-semibold uppercase tracking-wider">{category}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="bg-gold/10 text-gold-600 text-xs font-semibold px-3 py-1 rounded-full">
                                                {category}
                                            </span>
                                            <span className="text-gray-400 text-sm">{formattedDate}</span>
                                        </div>
                                        <h2 className="font-poppins font-semibold text-xl text-navy mb-3 group-hover:text-gold transition-colors leading-tight">
                                            {title}
                                        </h2>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                            {excerpt}
                                        </p>
                                        <span className="text-gold font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                                            Read More
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-navy">
                <div className="container-custom text-center">
                    <h2 className="font-poppins text-3xl font-bold text-white mb-4">
                        Let&apos;s Find the Right Coverage Fast
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Have questions about your insurance needs? Our team is ready to help you find the perfect coverage.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/quote" className="btn-primary">
                            Get a Free Quote
                        </Link>
                        <a href="tel:631-659-0189" className="btn-outline">
                            Call 631-659-0189
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
