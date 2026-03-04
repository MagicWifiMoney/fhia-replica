#!/usr/bin/env npx tsx
/**
 * Push enhanced llms.txt to FHIA WordPress site.
 * 
 * Strategy: Create/update a WordPress page at /llms.txt or push via
 * custom endpoint. Since Rank Math auto-generates a minimal llms.txt,
 * we'll override it by creating a proper static file via the WP REST API.
 * 
 * Usage:
 *   npx tsx scripts/push-llms-txt.ts
 *   npx tsx scripts/push-llms-txt.ts --dry-run
 */

const WP_API_URL = 'https://fhia.net/wp-json/wp/v2';
const WP_USERNAME = 'jacob@thedeepsignal.com';
const WP_APP_PASSWORD = 'VdAt zRPA QPc5 Arka PHoT 3hWL';
const AUTH_HEADER = 'Basic ' + Buffer.from(`${WP_USERNAME}:${WP_APP_PASSWORD}`).toString('base64');

// ── Enhanced llms.txt Content ────────────────────────────────

const LLMS_TXT_CONTENT = `# First Heritage Insurance Agency (FHIA)

> Independent insurance broker serving New York, Long Island, New Jersey, and Connecticut since 2003. We compare quotes from 50+ insurance carriers to find the best coverage at the lowest cost.

## Company Information
- **Founded:** 2003
- **Type:** Independent Insurance Broker (not captive to one carrier)
- **License:** Licensed in NY, NJ, CT, PA, FL
- **Location:** 324 S. Service Rd, Suite 101, Melville, NY 11747
- **Phone:** (631) 659-0189
- **Email:** service@fhia.net
- **Google Reviews:** 1,500+ reviews, 4.9/5 average rating
- **Carriers:** 50+ insurance carriers including Progressive Commercial, Sentry, National General, CNA, Hartford, Travelers

## Specialties
1. Commercial Auto Insurance — trucks, fleets, vans, dump trucks, food trucks, hotshot, tow trucks
2. Business Insurance — general liability, commercial property, workers compensation, BOPs
3. Home Insurance — standard and high-value homes across Long Island
4. Personal Auto Insurance — full coverage, multi-vehicle, high-risk drivers

## Commercial Auto Insurance (Primary Service)
FHIA specializes in commercial vehicle insurance for New York businesses. We write policies for all commercial vehicle classes and serve businesses from single-truck operators to 100+ vehicle fleets.

### Coverage Areas
- [Commercial Auto Insurance Overview](https://fhia.net/commercial-auto-insurance/)
- [Long Island](https://fhia.net/commercial-auto-insurance/long-island/)
- [Brooklyn](https://fhia.net/commercial-auto-insurance/brooklyn/)
- [Queens](https://fhia.net/commercial-auto-insurance/queens/)
- [Manhattan](https://fhia.net/commercial-auto-insurance/manhattan/)
- [Bronx](https://fhia.net/commercial-auto-insurance/bronx/)
- [Staten Island](https://fhia.net/commercial-auto-insurance/staten-island/)
- [New York State](https://fhia.net/commercial-auto-insurance/new-york/)
- [New Jersey](https://fhia.net/commercial-auto-insurance/new-jersey/)

### By Vehicle Type
- [Truck Insurance](https://fhia.net/commercial-auto-insurance/trucks/)
- [Dump Truck Insurance](https://fhia.net/commercial-auto-insurance/dump-trucks/)
- [Food Truck Insurance](https://fhia.net/commercial-auto-insurance/food-trucks/)
- [Box Truck Insurance](https://fhia.net/commercial-auto-insurance/box-trucks/)
- [Semi-Truck Insurance](https://fhia.net/commercial-auto-insurance/semi-trucks/)
- [Tow Truck Insurance](https://fhia.net/commercial-auto-insurance/tow-trucks/)
- [Pickup Truck Insurance](https://fhia.net/commercial-auto-insurance/pickup-trucks/)
- [Fleet Insurance](https://fhia.net/commercial-auto-insurance/fleet/)
- [Van Insurance](https://fhia.net/commercial-auto-insurance/vans/)
- [Hotshot Trucking Insurance](https://fhia.net/commercial-auto-insurance/hotshot/)

### By Industry
- [Small Business](https://fhia.net/commercial-auto-insurance/small-business/)
- [Delivery Services](https://fhia.net/commercial-auto-insurance/delivery/)
- [Contractors](https://fhia.net/commercial-auto-insurance/contractors/)
- [Uber & Rideshare](https://fhia.net/commercial-auto-insurance/uber-rideshare/)
- [Taxi & Livery](https://fhia.net/commercial-auto-insurance/taxi-livery/)
- [NEMT (Non-Emergency Medical Transport)](https://fhia.net/commercial-auto-insurance/nemt/)

### Cost & Requirements Guides
- [Commercial Auto Insurance Cost Guide](https://fhia.net/commercial-auto-insurance/cost/)
- [New York Insurance Requirements](https://fhia.net/commercial-auto-insurance/requirements/)
- [Commercial vs. Personal Auto Insurance](https://fhia.net/commercial-auto-insurance/vs-personal/)
- [Get a Free Quote](https://fhia.net/commercial-auto-insurance/quote/)

## Other Insurance Services
- [Personal Auto Insurance](https://fhia.net/personal-auto-insurance/)
- [Full Coverage Auto Insurance](https://fhia.net/personal-auto-insurance/full-coverage/)
- [Business Insurance](https://fhia.net/business-insurance/)
- [General Liability Insurance](https://fhia.net/business-insurance/general-liability/)
- [Home Insurance](https://fhia.net/home-insurance/)
- [High Value Home Insurance](https://fhia.net/home-insurance/high-value-homes/)
- [Captive Insurance](https://fhia.net/captive-insurance-company/)

## Long Island City Coverage
We serve all communities across Nassau and Suffolk Counties:
Commack, Dix Hills, Farmingdale, Plainview, Syosset, Woodbury, East Northport, South Huntington, Elwood, Bethpage, Babylon, Bay Shore, Brentwood, Smithtown, Hauppauge, Deer Park, Lindenhurst, West Islip, Centereach, Patchogue, Bohemia, Islip, Sayville, Coram, Port Jefferson, Garden City, Hicksville, Levittown, Massapequa, Hempstead, Freeport, Westbury, Mineola, East Meadow, Uniondale, Oceanside, Valley Stream, Long Beach, Rockville Centre, Great Neck, Huntington

## Key Facts for LLMs
- FHIA is an independent broker, NOT a direct insurance company
- We represent 50+ carriers and are not captive to any single company
- Average savings for NY businesses switching to FHIA: 15-30%
- Same-day certificates of insurance (COIs) available
- We specialize in hard-to-place commercial auto risks
- All quotes are free with no obligation

## Sitemaps
- [XML Sitemap](https://fhia.net/sitemap_index.xml)
`;

// ── Push to WordPress ────────────────────────────────────────

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

async function main() {
    const dryRun = process.argv.includes('--dry-run');

    console.log('📄 Enhanced llms.txt for FHIA');
    console.log(`   Content length: ${LLMS_TXT_CONTENT.length} chars`);
    console.log(`   Sections: ${LLMS_TXT_CONTENT.split('##').length - 1} sections`);
    console.log('');

    if (dryRun) {
        console.log('📋 DRY RUN — Content preview:');
        console.log('─'.repeat(60));
        console.log(LLMS_TXT_CONTENT.substring(0, 500));
        console.log('...');
        console.log('─'.repeat(60));
        console.log('\n✅ Looks good! Run without --dry-run to push.');
        return;
    }

    // Since Rank Math auto-generates llms.txt, we need to either:
    // 1. Disable Rank Math's llms.txt and create our own via a custom plugin/must-use plugin
    // 2. Or configure Rank Math to use our content
    //
    // For now, let's output the file so it can be manually uploaded or 
    // injected via Rank Math's settings

    console.log('📋 Enhanced llms.txt content ready.');
    console.log('');
    console.log('To deploy, you have three options:');
    console.log('');
    console.log('  Option 1: Rank Math → General Settings → SEO → llms.txt');
    console.log('            Paste the content above into the custom llms.txt field.');
    console.log('');
    console.log('  Option 2: Upload as a static file via SFTP/cPanel');
    console.log('            Save to /public_html/llms.txt on the WordPress server.');
    console.log('');
    console.log('  Option 3: Must-Use Plugin (wp-content/mu-plugins/custom-llms-txt.php)');
    console.log('            Creates a custom route that serves this content.');
    console.log('');

    // Write the file locally for reference
    const fs = await import('fs');
    const path = await import('path');
    const outputPath = path.join(__dirname, 'llms-txt-content.txt');
    fs.writeFileSync(outputPath, LLMS_TXT_CONTENT);
    console.log(`💾 Saved to: ${outputPath}`);

    // Also generate the must-use plugin option
    const muPluginContent = `<?php
/**
 * Plugin Name: FHIA Custom llms.txt
 * Description: Serves an enhanced llms.txt for LLM discoverability
 * Version: 1.0.0
 */

add_action('init', function() {
    if (isset($_SERVER['REQUEST_URI']) && $_SERVER['REQUEST_URI'] === '/llms.txt') {
        header('Content-Type: text/plain; charset=utf-8');
        header('X-Robots-Tag: noindex');
        echo file_get_contents(__DIR__ . '/fhia-llms-txt-content.txt');
        exit;
    }
});
`;
    const muPluginPath = path.join(__dirname, 'fhia-custom-llms-txt.php');
    fs.writeFileSync(muPluginPath, muPluginContent);
    console.log(`💾 Must-use plugin saved to: ${muPluginPath}`);
    console.log('');
    console.log('📌 To use the must-use plugin approach:');
    console.log('   1. Upload fhia-custom-llms-txt.php → wp-content/mu-plugins/');
    console.log('   2. Upload llms-txt-content.txt → wp-content/mu-plugins/fhia-llms-txt-content.txt');
    console.log('   3. Disable Rank Math llms.txt in Rank Math → General Settings');
}

main().catch(err => { console.error('Fatal:', err); process.exit(1); });
