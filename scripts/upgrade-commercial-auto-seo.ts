#!/usr/bin/env npx tsx
/**
 * FHIA Commercial Auto Pages — LLM Citation Optimizer
 * 
 * Upgrades existing WordPress commercial auto pages with:
 * 1. TL;DR "Citation Blocks" at top of content (first 60 words = direct answer)
 * 2. Question-based H2 headers (matches how users prompt LLMs)
 * 3. "Last Updated: March 2026" visible date stamps
 * 4. Enhanced Rank Math schema (WebPage + speakable + AggregateRating)
 * 5. Upgraded meta descriptions with fresh date signals
 *
 * Usage:
 *   npx tsx scripts/upgrade-commercial-auto-seo.ts --dry-run     # preview
 *   npx tsx scripts/upgrade-commercial-auto-seo.ts --test         # single page
 *   npx tsx scripts/upgrade-commercial-auto-seo.ts --slug=trucks  # specific page
 *   npx tsx scripts/upgrade-commercial-auto-seo.ts                # all pages
 */

// ── Config ────────────────────────────────────────────────────
const WP_API_URL = 'https://fhia.net/wp-json/wp/v2';
const WP_USERNAME = 'jacob@thedeepsignal.com';
const WP_APP_PASSWORD = 'VdAt zRPA QPc5 Arka PHoT 3hWL';
const AUTH_HEADER = 'Basic ' + Buffer.from(`${WP_USERNAME}:${WP_APP_PASSWORD}`).toString('base64');

const TODAY = '2026-03-04';
const MONTH_YEAR = 'March 2026';

// ── Page Definitions ──────────────────────────────────────────

interface PageUpgrade {
    slug: string;
    wpId: number;
    type: 'region' | 'vehicle' | 'industry' | 'info' | 'city';
    title: string;
    tldr: string;                    // The citation-ready opening block
    questionH2s: Record<string, string>;  // old H2 → new question H2
    metaDesc: string;                // Enhanced meta description with date
}

// ── Phase 1: Region Pages ─────────────────────────────────────

const REGION_PAGES: PageUpgrade[] = [
    {
        slug: 'long-island',
        wpId: 2909,
        type: 'region',
        title: 'Commercial Auto Insurance in Long Island, NY',
        tldr: `Commercial auto insurance on Long Island costs $1,800–$6,000/year per vehicle depending on type, use, and driver history. New York requires minimum 25/50/10 liability coverage for all commercially registered vehicles. First Heritage Insurance Agency (FHIA) is an independent broker in Melville that compares quotes from 50+ carriers — most Long Island businesses save 15–30% vs. single-carrier agents. Updated ${MONTH_YEAR}.`,
        questionH2s: {
            'New York Commercial Auto Insurance Requirements': 'What Are the Commercial Auto Insurance Requirements in New York?',
            'Average Commercial Auto Insurance Costs on Long Island': 'How Much Does Commercial Auto Insurance Cost on Long Island?',
            'Common Commercial Vehicles on Long Island': 'What Commercial Vehicles Are Most Common on Long Island?',
            'Why Long Island Businesses Choose FHIA': 'Why Do Long Island Businesses Choose FHIA Over Other Brokers?',
        },
        metaDesc: `Commercial auto insurance on Long Island costs $1,800–$6,000/yr. FHIA compares 50+ carriers for NY businesses. Free quotes, same-day COIs. Updated ${MONTH_YEAR}.`,
    },
    {
        slug: 'new-york',
        wpId: 2917,
        type: 'region',
        title: 'Commercial Auto Insurance in New York',
        tldr: `Commercial auto insurance in New York State costs $2,000–$12,000/year per vehicle, among the highest in the nation due to congested highways, no-fault requirements, and high litigation rates. NY requires minimum 25/50/10 liability ($25K/$50K bodily injury, $10K property damage) plus $50K PIP no-fault. FHIA compares 50+ carriers to find competitive rates. Updated ${MONTH_YEAR}.`,
        questionH2s: {
            'New York Commercial Auto Insurance Requirements': 'What Are New York\'s Commercial Auto Insurance Requirements?',
            'Average Commercial Auto Insurance Costs': 'How Much Does Commercial Auto Insurance Cost in New York?',
        },
        metaDesc: `Commercial auto insurance in New York costs $2,000–$12,000/yr. Compare 50+ carriers. NY-specific requirements explained. Updated ${MONTH_YEAR}.`,
    },
    {
        slug: 'brooklyn',
        wpId: 2918,
        type: 'region',
        title: 'Commercial Auto Insurance in Brooklyn, NY',
        tldr: `Commercial auto insurance in Brooklyn costs $2,500–$8,000/year per vehicle — higher than suburban rates due to dense traffic, higher theft rates, and NYC TLC requirements for for-hire vehicles. Brooklyn businesses need minimum 25/50/10 NY liability plus $50K PIP. FHIA compares 50+ carriers for Brooklyn businesses and typically saves 15–30%. Updated ${MONTH_YEAR}.`,
        questionH2s: {},
        metaDesc: `Commercial auto insurance in Brooklyn costs $2,500–$8,000/yr. Higher rates explained. 50+ carriers compared. Updated ${MONTH_YEAR}.`,
    },
    {
        slug: 'queens',
        wpId: 2919,
        type: 'region',
        title: 'Commercial Auto Insurance in Queens, NY',
        tldr: `Commercial auto insurance in Queens costs $2,200–$7,500/year per vehicle, reflecting NYC's congested corridors along the BQE, LIE, and Van Wyck. Queens businesses — from delivery services in Flushing to contractors in Jamaica — need at minimum NY's 25/50/10 liability plus no-fault coverage. FHIA compares 50+ carriers. Updated ${MONTH_YEAR}.`,
        questionH2s: {},
        metaDesc: `Commercial auto insurance in Queens, NY costs $2,200–$7,500/yr. Compare 50+ carriers. Free quotes for Queens businesses. Updated ${MONTH_YEAR}.`,
    },
    {
        slug: 'bronx',
        wpId: 2920,
        type: 'region',
        title: 'Commercial Auto Insurance in the Bronx, NY',
        tldr: `Commercial auto insurance in the Bronx costs $2,400–$8,500/year per vehicle — among the highest rates in NYC due to accident frequency on the Cross Bronx Expressway and high uninsured motorist claims. Bronx businesses need NY's minimum 25/50/10 liability plus no-fault. FHIA compares 50+ carriers to find competitive Bronx rates. Updated ${MONTH_YEAR}.`,
        questionH2s: {},
        metaDesc: `Commercial auto insurance in the Bronx costs $2,400–$8,500/yr. Compare 50+ carriers for best Bronx rates. Updated ${MONTH_YEAR}.`,
    },
    {
        slug: 'manhattan',
        wpId: 2921,
        type: 'region',
        title: 'Commercial Auto Insurance in Manhattan, NY',
        tldr: `Commercial auto insurance in Manhattan costs $3,000–$10,000/year per vehicle — the most expensive in New York State due to extreme traffic density, parking costs, and high liability exposure. Manhattan TLC-licensed vehicles require additional coverage. FHIA compares 50+ carriers for Manhattan businesses. Updated ${MONTH_YEAR}.`,
        questionH2s: {},
        metaDesc: `Commercial auto insurance in Manhattan costs $3,000–$10,000/yr — highest in NY. 50+ carriers compared. Updated ${MONTH_YEAR}.`,
    },
    {
        slug: 'staten-island',
        wpId: 2922,
        type: 'region',
        title: 'Commercial Auto Insurance in Staten Island, NY',
        tldr: `Commercial auto insurance on Staten Island costs $2,000–$6,500/year per vehicle — lower than other NYC boroughs but still higher than national averages. Staten Island businesses along the Staten Island Expressway and Hylan Boulevard corridor need NY's 25/50/10 minimum liability. FHIA compares 50+ carriers. Updated ${MONTH_YEAR}.`,
        questionH2s: {},
        metaDesc: `Commercial auto insurance on Staten Island costs $2,000–$6,500/yr. Compare 50+ carriers for best rates. Updated ${MONTH_YEAR}.`,
    },
    {
        slug: 'new-jersey',
        wpId: 2923,
        type: 'region',
        title: 'Commercial Auto Insurance in New Jersey',
        tldr: `Commercial auto insurance in New Jersey costs $1,800–$7,000/year per vehicle. NJ requires minimum 15/30/5 liability coverage — lower minimums than New York but with the unique "Tort Election" (lawsuit threshold) that affects your policy structure. FHIA compares 50+ carriers for NJ businesses operating in Newark, Jersey City, and the Route 1/9 corridor. Updated ${MONTH_YEAR}.`,
        questionH2s: {},
        metaDesc: `Commercial auto insurance in New Jersey costs $1,800–$7,000/yr. NJ Tort Election explained. 50+ carriers compared. Updated ${MONTH_YEAR}.`,
    },
];

// ── Phase 2: Vehicle Pages ────────────────────────────────────

const VEHICLE_PAGES: PageUpgrade[] = [
    {
        slug: 'trucks',
        wpId: 2912,
        type: 'vehicle',
        title: 'Commercial Truck Insurance in New York',
        tldr: `Commercial truck insurance in New York costs $3,000–$20,000/year depending on truck class, cargo type, and operating radius. NY requires minimum 25/50/10 liability; interstate trucks need $750,000+ combined single limit (CSL). Hazmat carriers require $1M–$5M. FHIA compares 50+ carriers specializing in NY trucking — most operators save 15–30%. Updated ${MONTH_YEAR}.`,
        questionH2s: {
            'Types of Commercial Trucks We Insure': 'What Types of Commercial Trucks Does FHIA Insure?',
            'Required Coverage for Commercial Trucks in New York': 'What Coverage Is Required for Commercial Trucks in New York?',
            'Average Commercial Truck Insurance Costs in New York': 'How Much Does Commercial Truck Insurance Cost in New York?',
            'Key Coverage Options for NY Truckers': 'What Coverage Options Do New York Truckers Need Beyond the Minimum?',
            'How to Lower Your Commercial Truck Insurance in NY': 'How Can I Lower My Commercial Truck Insurance Cost in New York?',
        },
        metaDesc: `Commercial truck insurance in NY costs $3,000–$20,000/yr. Box trucks to semis. NY/federal requirements explained. 50+ carriers. Updated ${MONTH_YEAR}.`,
    },
    {
        slug: 'dump-trucks',
        wpId: 2924,
        type: 'vehicle',
        title: 'Dump Truck Insurance in New York',
        tldr: `Dump truck insurance in New York costs $5,000–$15,000/year per truck, higher than standard commercial auto due to heavy-weight classification (Class 7-8), construction zone exposure, and cargo liability. NY DOT filing is required for dump trucks over 18,000 lbs GVWR. FHIA writes dump truck policies across 50+ carriers for construction and hauling companies. Updated ${MONTH_YEAR}.`,
        questionH2s: {},
        metaDesc: `Dump truck insurance in New York costs $5,000–$15,000/yr. DOT filing, construction coverage. 50+ carriers. Updated ${MONTH_YEAR}.`,
    },
    {
        slug: 'food-trucks',
        wpId: 2925,
        type: 'vehicle',
        title: 'Food Truck Insurance in New York',
        tldr: `Food truck insurance in New York costs $2,000–$5,000/year for commercial auto coverage, plus $1,500–$3,000/year for general liability and product liability. NYC food trucks need additional permits and vendor insurance certificates for events. FHIA bundles commercial auto + GL + product liability for NY food truck operators. Updated ${MONTH_YEAR}.`,
        questionH2s: {},
        metaDesc: `Food truck insurance in NY costs $2,000–$5,000/yr for auto + $1,500–$3,000 for GL. NYC permits explained. Updated ${MONTH_YEAR}.`,
    },
    {
        slug: 'box-trucks',
        wpId: 2926,
        type: 'vehicle',
        title: 'Box Truck Insurance in New York',
        tldr: `Box truck insurance in New York costs $3,000–$8,000/year per truck depending on GVWR, cargo type, and operating radius. Box trucks under 26,000 lbs GVWR don't require a CDL, but still need full commercial auto coverage including motor truck cargo for delivery operations. FHIA compares 50+ carriers for NY box truck operators. Updated ${MONTH_YEAR}.`,
        questionH2s: {},
        metaDesc: `Box truck insurance in New York costs $3,000–$8,000/yr. CDL vs non-CDL requirements. 50+ carriers compared. Updated ${MONTH_YEAR}.`,
    },
    {
        slug: 'semi-trucks',
        wpId: 2927,
        type: 'vehicle',
        title: 'Semi-Truck Insurance in New York',
        tldr: `Semi-truck insurance in New York costs $8,000–$20,000+/year for owner-operators, making it among the most expensive commercial auto categories. Federal FMCSA requirements mandate $750,000 CSL minimum for general freight; hazmat loads require $1M–$5M. New authority operators typically pay 40–100% more than established carriers. Updated ${MONTH_YEAR}.`,
        questionH2s: {},
        metaDesc: `Semi-truck insurance in NY costs $8,000–$20,000+/yr. FMCSA requirements, new authority rates. 50+ carriers. Updated ${MONTH_YEAR}.`,
    },
    {
        slug: 'tow-trucks',
        wpId: 2928,
        type: 'vehicle',
        title: 'Tow Truck Insurance in New York',
        tldr: `Tow truck insurance in New York costs $4,000–$12,000/year per truck due to the high-risk nature of roadside operations and "garage keeper's liability" for vehicles in your care. NY tow operators also need on-hook/in-tow coverage for customer vehicles. FHIA writes tow truck policies through 50+ carriers. Updated ${MONTH_YEAR}.`,
        questionH2s: {},
        metaDesc: `Tow truck insurance in NY costs $4,000–$12,000/yr. Garage keepers, on-hook coverage explained. Updated ${MONTH_YEAR}.`,
    },
    {
        slug: 'pickup-trucks',
        wpId: 2929,
        type: 'vehicle',
        title: 'Pickup Truck Insurance in New York',
        tldr: `Commercial pickup truck insurance in New York costs $1,800–$4,500/year — the most affordable commercial auto category. If your pickup is registered commercially, carries tools/materials, or has business lettering, personal auto will deny claims. FHIA compares 50+ carriers for NY contractors and tradespeople. Updated ${MONTH_YEAR}.`,
        questionH2s: {},
        metaDesc: `Commercial pickup truck insurance in NY costs $1,800–$4,500/yr. When personal auto won't cover you. Updated ${MONTH_YEAR}.`,
    },
    {
        slug: 'fleet',
        wpId: 2930,
        type: 'vehicle',
        title: 'Fleet Insurance in New York',
        tldr: `Fleet insurance in New York saves businesses with 5+ commercial vehicles 15–30% compared to individual policies. A single fleet policy costs $1,200–$3,000/vehicle/year (vs. $1,800–$6,000 individually) with one renewal date, simplified management, and easy vehicle add/remove. FHIA manages fleet policies for 50+ NY businesses. Updated ${MONTH_YEAR}.`,
        questionH2s: {},
        metaDesc: `Fleet insurance in NY saves 15–30% for 5+ vehicles. $1,200–$3,000/vehicle. One policy, one renewal. Updated ${MONTH_YEAR}.`,
    },
    {
        slug: 'vans',
        wpId: 2931,
        type: 'vehicle',
        title: 'Commercial Van Insurance in New York',
        tldr: `Commercial van insurance in New York costs $1,800–$5,000/year depending on van class (cargo, sprinter, passenger) and use type. Cargo vans used for delivery need motor truck cargo coverage; passenger vans carrying 9+ passengers need federal DOT compliance. FHIA compares 50+ carriers for NY van operators. Updated ${MONTH_YEAR}.`,
        questionH2s: {},
        metaDesc: `Commercial van insurance in NY costs $1,800–$5,000/yr. Cargo, sprinter, passenger van coverage. Updated ${MONTH_YEAR}.`,
    },
    {
        slug: 'hotshot',
        wpId: 2932,
        type: 'vehicle',
        title: 'Hotshot Trucking Insurance in New York',
        tldr: `Hotshot trucking insurance in New York costs $3,000–$8,000/year for a pickup-and-trailer combination hauling expedited freight. FMCSA authority requires $750,000 CSL minimum for hotshot operators crossing state lines. Most hotshot carriers also need motor truck cargo ($25,000–$100,000) and bobtail coverage. Updated ${MONTH_YEAR}.`,
        questionH2s: {},
        metaDesc: `Hotshot trucking insurance in NY costs $3,000–$8,000/yr. FMCSA requirements for expedited freight. Updated ${MONTH_YEAR}.`,
    },
];

// ── Phase 3: Industry Pages ───────────────────────────────────

const INDUSTRY_PAGES: PageUpgrade[] = [
    {
        slug: 'small-business',
        wpId: 2935,
        type: 'industry',
        title: 'Commercial Auto Insurance for Small Business Owners',
        tldr: `Commercial auto insurance for small businesses in New York costs $1,200–$5,000/year per vehicle depending on vehicle type and use. Any vehicle used for business purposes — even a personal car carrying work supplies — needs commercial coverage; personal auto policies exclude business use and will deny claims. FHIA offers small business bundles combining commercial auto + GL for 10–25% savings. Updated ${MONTH_YEAR}.`,
        questionH2s: {},
        metaDesc: `Small business commercial auto insurance in NY costs $1,200–$5,000/yr. Bundle with GL and save 10–25%. Updated ${MONTH_YEAR}.`,
    },
    {
        slug: 'delivery',
        wpId: 2936,
        type: 'industry',
        title: 'Delivery Driver Insurance in New York',
        tldr: `Delivery vehicle insurance in New York costs $2,000–$6,000/year. Whether you operate Amazon DSP routes, last-mile parcel delivery, or courier services, commercial auto is required — personal auto excludes delivery use. Motor truck cargo coverage protects the goods you're hauling. FHIA insures delivery fleets of all sizes. Updated ${MONTH_YEAR}.`,
        questionH2s: {},
        metaDesc: `Delivery vehicle insurance in NY costs $2,000–$6,000/yr. Amazon DSP, courier, last-mile coverage. Updated ${MONTH_YEAR}.`,
    },
    {
        slug: 'contractors',
        wpId: 2937,
        type: 'industry',
        title: 'Commercial Auto Insurance for Contractors',
        tldr: `Contractor commercial auto insurance in New York costs $1,800–$5,500/year per vehicle. Electricians, plumbers, HVAC techs, and general contractors need commercial auto plus tools/equipment coverage and COIs (certificates of insurance) for job sites. FHIA provides same-day COIs and bundles auto + GL + workers comp for 15–25% savings. Updated ${MONTH_YEAR}.`,
        questionH2s: {},
        metaDesc: `Contractor auto insurance in NY costs $1,800–$5,500/yr. Same-day COIs. Bundle auto + GL + WC for savings. Updated ${MONTH_YEAR}.`,
    },
    {
        slug: 'uber-rideshare',
        wpId: 2938,
        type: 'industry',
        title: 'Uber & Rideshare Insurance in New York',
        tldr: `Rideshare insurance in New York costs $1,500–$4,000/year to fill the coverage gaps Uber and Lyft leave open. During "Period 0" (app off) and "Period 1" (app on, no ride), neither Uber's nor your personal policy covers you. NYC TLC-licensed drivers face additional requirements. FHIA writes rideshare gap policies through 50+ carriers. Updated ${MONTH_YEAR}.`,
        questionH2s: {},
        metaDesc: `Rideshare insurance in NY costs $1,500–$4,000/yr. Period 0-3 gaps explained. TLC requirements. Updated ${MONTH_YEAR}.`,
    },
    {
        slug: 'taxi-livery',
        wpId: 2939,
        type: 'industry',
        title: 'Taxi & Livery Insurance in New York',
        tldr: `Taxi and livery insurance in New York costs $5,000–$15,000/year per vehicle, reflecting high mileage, passenger liability, and NYC TLC requirements. TLC-licensed vehicles must carry minimum $100,000/$300,000 liability — significantly higher than standard commercial auto minimums. FHIA specializes in hard-to-place taxi/livery policies. Updated ${MONTH_YEAR}.`,
        questionH2s: {},
        metaDesc: `Taxi & livery insurance in NY costs $5,000–$15,000/yr. NYC TLC requirements explained. Hard-to-place risks. Updated ${MONTH_YEAR}.`,
    },
    {
        slug: 'nemt',
        wpId: 2940,
        type: 'industry',
        title: 'NEMT Insurance in New York',
        tldr: `Non-Emergency Medical Transportation (NEMT) insurance in New York costs $3,000–$8,000/year per vehicle. NEMT operators must carry higher liability limits due to transporting vulnerable populations, plus wheelchair accessibility equipment coverage. Medicaid-contracted NEMT providers face additional compliance requirements. Updated ${MONTH_YEAR}.`,
        questionH2s: {},
        metaDesc: `NEMT insurance in New York costs $3,000–$8,000/yr. Medicaid compliance, wheelchair van coverage. Updated ${MONTH_YEAR}.`,
    },
];

// ── Phase 3: Info Pages ───────────────────────────────────────

const INFO_PAGES: PageUpgrade[] = [
    {
        slug: 'cost',
        wpId: 2941,
        type: 'info',
        title: 'How Much Does Commercial Auto Insurance Cost?',
        tldr: `Commercial auto insurance in New York costs $1,800–$20,000+/year per vehicle depending on vehicle type, use, and driver history. Pickup trucks average $1,800–$3,500/year. Box trucks: $3,000–$6,000. Dump trucks: $5,000–$12,000. Semi-trucks: $8,000–$20,000+. Fleet policies (5+ vehicles) save 15–30% per vehicle. These are 2026 estimates based on NY market rates. Updated ${MONTH_YEAR}.`,
        questionH2s: {
            'Average Commercial Auto Insurance Costs': 'How Much Does Commercial Auto Insurance Cost by Vehicle Type?',
        },
        metaDesc: `Commercial auto insurance costs in NY: pickups $1,800–$3,500, box trucks $3,000–$6,000, semis $8,000–$20,000+. ${MONTH_YEAR} rates.`,
    },
    {
        slug: 'requirements',
        wpId: 2942,
        type: 'info',
        title: 'New York Commercial Auto Insurance Requirements',
        tldr: `New York requires all commercially registered vehicles to carry minimum $25,000/$50,000 bodily injury liability, $10,000 property damage liability, $50,000 PIP no-fault, and $25,000/$50,000 uninsured motorist coverage. Interstate trucks must carry $750,000+ CSL per FMCSA. NYC TLC vehicles need $100,000/$300,000 liability. These are the 2026 minimums — most businesses should carry higher limits. Updated ${MONTH_YEAR}.`,
        questionH2s: {},
        metaDesc: `NY commercial auto requirements: $25K/$50K BI, $10K PD, $50K PIP. Interstate: $750K CSL. TLC: $100K/$300K. Updated ${MONTH_YEAR}.`,
    },
    {
        slug: 'vs-personal',
        wpId: 2943,
        type: 'info',
        title: 'Commercial vs. Personal Auto Insurance',
        tldr: `Commercial auto insurance covers vehicles used for business purposes — hauling goods, carrying equipment, transporting passengers for hire. Personal auto only covers personal use. The key difference: if you file a claim while using your vehicle for work with a personal policy, it will be denied. Commercial auto also offers higher liability limits ($500K–$1M vs. $100K–$300K typical personal) and covers hired/non-owned vehicles. Updated ${MONTH_YEAR}.`,
        questionH2s: {},
        metaDesc: `Commercial vs personal auto insurance: when you need commercial, coverage differences, cost comparison. Updated ${MONTH_YEAR}.`,
    },
    {
        slug: 'quote',
        wpId: 2944,
        type: 'info',
        title: 'Get a Free Commercial Auto Insurance Quote',
        tldr: `Get a free commercial auto insurance quote from FHIA in as little as 24 hours. We compare rates from 50+ carriers — including Progressive Commercial, Sentry, National General, and CNA — to find the lowest price for your specific vehicle and operation. Most quotes are delivered same-day for standard vehicles with clean driving records. Call (631) 659-0189 or request a quote online. Updated ${MONTH_YEAR}.`,
        questionH2s: {},
        metaDesc: `Free commercial auto insurance quote. 50+ carriers compared. Most quotes same-day. Call (631) 659-0189. Updated ${MONTH_YEAR}.`,
    },
];

// ── Combine All Pages ─────────────────────────────────────────

const ALL_PAGES: PageUpgrade[] = [
    ...REGION_PAGES,
    ...VEHICLE_PAGES,
    ...INDUSTRY_PAGES,
    ...INFO_PAGES,
];

// ── TL;DR HTML Block Builder ──────────────────────────────────

function buildTLDRBlock(tldr: string): string {
    return `
<!-- wp:group {"style":{"spacing":{"padding":{"top":"24px","right":"28px","bottom":"24px","left":"28px"}},"border":{"left":{"color":"#EEBA2B","width":"4px"}},"color":{"background":"#F8F6F0"}},"className":"tldr-citation-block"} -->
<div class="wp-block-group tldr-citation-block" style="border-left-color:#EEBA2B;border-left-width:4px;background-color:#F8F6F0;padding-top:24px;padding-right:28px;padding-bottom:24px;padding-left:28px">
<p><strong>TL;DR:</strong> ${tldr}</p>
</div>
<!-- /wp:group -->`;
}

// ── Last Updated Date Block ───────────────────────────────────

function buildDateBlock(): string {
    return `
<!-- wp:paragraph {"style":{"typography":{"fontSize":"14px"},"color":{"text":"#6B7280"}},"className":"last-updated-date"} -->
<p class="last-updated-date" style="color:#6B7280;font-size:14px"><em>Last updated: ${MONTH_YEAR} | Written by the FHIA Commercial Insurance Team — 20+ years insuring New York businesses</em></p>
<!-- /wp:paragraph -->`;
}

// ── Enhanced Rank Math Schema ─────────────────────────────────

function buildEnhancedSchema(page: PageUpgrade): object {
    return {
        // WebPage schema with dates
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebPage',
                '@id': `https://fhia.net/commercial-auto-insurance/${page.slug}/#webpage`,
                url: `https://fhia.net/commercial-auto-insurance/${page.slug}/`,
                name: page.title,
                datePublished: '2025-06-15',
                dateModified: TODAY,
                description: page.metaDesc,
                inLanguage: 'en-US',
                isPartOf: { '@id': 'https://fhia.net/#website' },
                about: { '@id': 'https://fhia.net/#organization' },
                speakable: {
                    '@type': 'SpeakableSpecification',
                    cssSelector: ['.tldr-citation-block', '.faq-answer'],
                },
                author: {
                    '@type': 'Organization',
                    name: 'First Heritage Insurance Agency',
                    url: 'https://fhia.net',
                },
            },
            {
                '@type': 'InsuranceAgency',
                '@id': 'https://fhia.net/#organization',
                name: 'First Heritage Insurance Agency',
                url: 'https://fhia.net',
                logo: 'https://fhia.net/wp-content/uploads/fhia-logo.png',
                telephone: '+1-631-659-0189',
                foundingDate: '2003',
                aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '4.9',
                    reviewCount: '1500',
                    bestRating: '5',
                },
                areaServed: [
                    { '@type': 'State', name: 'New York' },
                    { '@type': 'State', name: 'New Jersey' },
                    { '@type': 'State', name: 'Connecticut' },
                ],
            },
        ],
    };
}

// ── WP API ────────────────────────────────────────────────────

async function wpFetch(endpoint: string, options: RequestInit = {}) {
    const url = `${WP_API_URL}${endpoint}`;
    const res = await fetch(url, {
        ...options,
        headers: {
            Authorization: AUTH_HEADER,
            'Content-Type': 'application/json',
            ...options.headers,
        },
    });
    if (!res.ok) {
        const text = await res.text();
        throw new Error(`WP API ${res.status}: ${text.substring(0, 300)}`);
    }
    return res.json();
}

async function getPageContent(pageId: number): Promise<{ content: string; meta: any }> {
    const page = await wpFetch(`/pages/${pageId}?context=edit`);
    return {
        content: page.content?.raw || page.content?.rendered || '',
        meta: page.meta || {},
    };
}

async function updatePage(page: PageUpgrade, newContent: string, schema: object): Promise<void> {
    const body: any = {
        content: newContent,
        meta: {
            // Rank Math schema override
            rank_math_schema_Article: JSON.stringify(schema),
        },
    };

    await wpFetch(`/pages/${page.wpId}`, {
        method: 'PUT',
        body: JSON.stringify(body),
    });
}

// ── Content Transformer ───────────────────────────────────────

function transformContent(page: PageUpgrade, existingContent: string): string {
    let content = existingContent;

    // 1. Add TL;DR block at the very beginning (after hero if present)
    const tldrBlock = buildTLDRBlock(page.tldr);
    const dateBlock = buildDateBlock();

    // Check if TL;DR block already exists
    if (!content.includes('tldr-citation-block')) {
        // Insert after the first heading or at the beginning
        const firstH2Match = content.match(/<h2[^>]*>/i);
        if (firstH2Match && firstH2Match.index !== undefined) {
            // Insert before the first H2
            content = content.substring(0, firstH2Match.index) +
                tldrBlock + '\n' + dateBlock + '\n\n' +
                content.substring(firstH2Match.index);
        } else {
            // Prepend to content
            content = tldrBlock + '\n' + dateBlock + '\n\n' + content;
        }
    }

    // 2. Replace statement H2s with question H2s
    for (const [oldH2, newH2] of Object.entries(page.questionH2s)) {
        // Handle various HTML heading formats
        const escaped = oldH2.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(<h2[^>]*>)\\s*${escaped}\\s*(</h2>)`, 'gi');
        content = content.replace(regex, `$1${newH2}$2`);

        // Also handle Elementor-style headings
        content = content.replaceAll(`"title":"${oldH2}"`, `"title":"${newH2}"`);
    }

    return content;
}

// ── Main ──────────────────────────────────────────────────────

async function main() {
    const args = process.argv.slice(2);
    const dryRun = args.includes('--dry-run');
    const testMode = args.includes('--test');
    const slugArg = args.find(a => a.startsWith('--slug='));
    const targetSlug = slugArg?.split('=')[1];

    let pagesToProcess: PageUpgrade[];

    if (testMode) {
        pagesToProcess = [ALL_PAGES[0]]; // Long Island
        console.log('🧪 TEST MODE — processing 1 page\n');
    } else if (targetSlug) {
        const page = ALL_PAGES.find(p => p.slug === targetSlug);
        if (!page) {
            console.error(`❌ Slug "${targetSlug}" not found in page definitions`);
            console.log('Available slugs:', ALL_PAGES.map(p => p.slug).join(', '));
            process.exit(1);
        }
        pagesToProcess = [page];
    } else {
        pagesToProcess = ALL_PAGES;
        console.log(`🚀 Processing all ${ALL_PAGES.length} commercial auto pages\n`);
    }

    let updated = 0, errors = 0, skipped = 0;

    for (const page of pagesToProcess) {
        try {
            console.log(`\n📄 ${page.title} (${page.slug}, ID: ${page.wpId})`);

            // Fetch current content
            const { content } = await getPageContent(page.wpId);

            if (!content) {
                console.log(`   ⚠️ SKIP — Empty content`);
                skipped++;
                continue;
            }

            // Transform content
            const newContent = transformContent(page, content);
            const schema = buildEnhancedSchema(page);

            if (dryRun) {
                const tldrPreview = page.tldr.substring(0, 120) + '...';
                const h2Changes = Object.keys(page.questionH2s).length;
                console.log(`   📋 DRY RUN`);
                console.log(`      TL;DR: "${tldrPreview}"`);
                console.log(`      H2 changes: ${h2Changes}`);
                console.log(`      Meta desc: "${page.metaDesc.substring(0, 80)}..."`);
                console.log(`      Schema: WebPage + speakable + AggregateRating`);
                continue;
            }

            await updatePage(page, newContent, schema);
            console.log(`   ✅ UPDATED — TL;DR + dates + schema`);
            updated++;

            // Rate limit
            await new Promise(r => setTimeout(r, 500));
        } catch (err: any) {
            console.error(`   ❌ ERROR: ${err.message}`);
            errors++;
        }
    }

    console.log(`\n─── Summary ───`);
    console.log(`  Updated: ${updated}`);
    console.log(`  Skipped: ${skipped}`);
    console.log(`  Errors:  ${errors}`);
    console.log(`  Total:   ${pagesToProcess.length}`);
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });
