/**
 * Structured Data (JSON-LD) schemas for SEO.
 * These components render invisible JSON-LD script tags that help
 * Google understand page content for rich results.
 */

// ── LocalBusiness schema (homepage & contact page) ──

export function LocalBusinessSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'InsuranceAgency',
        name: 'First Heritage Insurance Agency',
        alternateName: 'FHIA',
        url: 'https://fhia.net',
        logo: 'https://fhia.net/images/fhia-logo.png',
        image: 'https://fhia.net/images/og-image.png',
        description:
            'Licensed NY insurance broker serving Long Island since 2003. Compare auto, home, business quotes from multiple carriers.',
        telephone: '+1-631-659-0189',
        address: {
            '@type': 'PostalAddress',
            streetAddress: '445 Broadhollow Rd Suite 25',
            addressLocality: 'Melville',
            addressRegion: 'NY',
            postalCode: '11747',
            addressCountry: 'US',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 40.7934,
            longitude: -73.4151,
        },
        areaServed: [
            { '@type': 'State', name: 'New York' },
            { '@type': 'State', name: 'New Jersey' },
            { '@type': 'State', name: 'Connecticut' },
            { '@type': 'State', name: 'Pennsylvania' },
            { '@type': 'State', name: 'Florida' },
        ],
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '17:00',
            },
        ],
        sameAs: [
            'https://www.facebook.com/FirstHeritageInsurance',
            'https://www.instagram.com/firstheritageinsurance',
            'https://www.linkedin.com/company/first-heritage-insurance-agency',
        ],
        foundingDate: '2003',
        priceRange: '$$',
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '127',
            bestRating: '5',
        },
        review: [
            {
                '@type': 'Review',
                author: { '@type': 'Person', name: 'Mike R.' },
                datePublished: '2024-11-15',
                reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
                reviewBody:
                    'FHIA saved us over $12,000 on our fleet insurance. Their in-house underwriting made the entire process seamless.',
            },
            {
                '@type': 'Review',
                author: { '@type': 'Person', name: 'Sarah L.' },
                datePublished: '2024-10-22',
                reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
                reviewBody:
                    'After 15 years with another agency, switching to First Heritage was the best decision. They found us better coverage at a lower price.',
            },
            {
                '@type': 'Review',
                author: { '@type': 'Person', name: 'David K.' },
                datePublished: '2024-09-05',
                reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
                reviewBody:
                    'Professional, responsive, and genuinely care about finding the right coverage. Highly recommend for any Long Island business.',
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// ── BreadcrumbList schema ──

interface BreadcrumbItem {
    name: string;
    href: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `https://fhia.net${item.href}`,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// ── Article schema (blog posts) ──

interface ArticleSchemaProps {
    title: string;
    description: string;
    url: string;
    datePublished: string;
    dateModified: string;
    image?: string;
}

export function ArticleSchema({
    title,
    description,
    url,
    datePublished,
    dateModified,
    image,
}: ArticleSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: title,
        description,
        url: `https://fhia.net${url}`,
        datePublished,
        dateModified,
        ...(image && { image }),
        author: {
            '@type': 'Organization',
            name: 'First Heritage Insurance Agency',
            url: 'https://fhia.net',
        },
        publisher: {
            '@type': 'Organization',
            name: 'First Heritage Insurance Agency',
            logo: {
                '@type': 'ImageObject',
                url: 'https://fhia.net/images/fhia-logo.png',
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://fhia.net${url}`,
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// ── Insurance Service schema ──

interface ServiceSchemaProps {
    name: string;
    description: string;
    url: string;
}

export function InsuranceServiceSchema({ name, description, url }: ServiceSchemaProps) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: name,
        name,
        description,
        url: `https://fhia.net${url}`,
        provider: {
            '@type': 'InsuranceAgency',
            name: 'First Heritage Insurance Agency',
            url: 'https://fhia.net',
            telephone: '+1-631-659-0189',
            address: {
                '@type': 'PostalAddress',
                streetAddress: '445 Broadhollow Rd Suite 25',
                addressLocality: 'Melville',
                addressRegion: 'NY',
                postalCode: '11747',
            },
        },
        areaServed: {
            '@type': 'State',
            name: 'New York',
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// ── WebSite schema with SearchAction (sitelinks search box) ──

export function WebSiteSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'First Heritage Insurance Agency',
        alternateName: 'FHIA',
        url: 'https://fhia.net',
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

// ── Organization schema ──

export function OrganizationSchema() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'First Heritage Insurance Agency',
        url: 'https://fhia.net',
        logo: 'https://fhia.net/images/fhia-logo.png',
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-631-659-0189',
            contactType: 'customer service',
            areaServed: 'US',
            availableLanguage: 'English',
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
