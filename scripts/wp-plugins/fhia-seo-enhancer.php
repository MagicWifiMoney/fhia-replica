<?php
/**
 * Plugin Name: FHIA Commercial Auto SEO Enhancer
 * Description: Injects TL;DR citation blocks, enhanced JSON-LD schema (WebPage + speakable + AggregateRating), 
 *              and "Last Updated" date stamps into all /commercial-auto-insurance/* pages for LLM citation optimization.
 * Version: 1.0.0
 * Author: Deep Signal
 *
 * Installation:
 *   1. Upload this file to wp-content/mu-plugins/fhia-seo-enhancer.php
 *   2. Upload fhia-seo-data.json to wp-content/mu-plugins/fhia-seo-data.json
 *   3. Page content will be automatically enhanced on next load
 */

// ── Load TL;DR Data ────────────────────────────────────────────
function fhia_get_seo_data() {
    static $data = null;
    if ($data === null) {
        $json_path = __DIR__ . '/fhia-seo-data.json';
        if (file_exists($json_path)) {
            $data = json_decode(file_get_contents($json_path), true);
        } else {
            $data = [];
        }
    }
    return $data;
}

// ── Inject TL;DR Block + Date Stamp at Top of Content ──────────
add_filter('the_content', function($content) {
    // Only run on commercial auto insurance pages
    if (!is_singular('page')) return $content;
    
    $uri = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
    if (strpos($uri, 'commercial-auto-insurance/') !== 0) return $content;
    
    // Get the page slug (last segment)
    $parts = explode('/', $uri);
    $slug = end($parts);
    if (empty($slug) || $slug === 'commercial-auto-insurance') return $content;
    
    $data = fhia_get_seo_data();
    if (!isset($data[$slug])) return $content;
    
    $page_data = $data[$slug];
    $tldr = esc_html($page_data['tldr']);
    $month_year = 'March 2026';
    
    // Build TL;DR citation block
    $tldr_html = <<<HTML
<div class="tldr-citation-block" style="
    border-left: 4px solid #EEBA2B;
    background: #F8F6F0;
    padding: 24px 28px;
    margin: 0 0 32px 0;
    border-radius: 0 8px 8px 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
">
    <p style="margin: 0 0 12px 0; font-size: 16px; line-height: 1.6; color: #1a1a1a;">
        <strong style="color: #01153E;">TL;DR:</strong> {$tldr}
    </p>
    <p class="last-updated-date" style="margin: 0; font-size: 13px; color: #6B7280; font-style: italic;">
        Last updated: {$month_year} · Written by the FHIA Commercial Insurance Team — 20+ years insuring NY businesses
    </p>
</div>
HTML;

    // Insert at the beginning of content (Elementor renders content first)
    return $tldr_html . $content;
    
}, 5); // Priority 5 = runs before most other content filters

// ── Inject Enhanced JSON-LD Schema in <head> ───────────────────
add_action('wp_head', function() {
    if (!is_singular('page')) return;
    
    $uri = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
    if (strpos($uri, 'commercial-auto-insurance/') !== 0) return;
    
    $parts = explode('/', $uri);
    $slug = end($parts);
    if (empty($slug) || $slug === 'commercial-auto-insurance') return;
    
    $data = fhia_get_seo_data();
    if (!isset($data[$slug])) return;
    
    $page_data = $data[$slug];
    $today = date('Y-m-d');
    $page_url = 'https://fhia.net/' . $uri . '/';
    
    // WebPage schema with speakable + dates
    $webpage_schema = [
        '@context' => 'https://schema.org',
        '@type' => 'WebPage',
        '@id' => $page_url . '#webpage',
        'url' => $page_url,
        'name' => $page_data['title'],
        'description' => $page_data['metaDesc'],
        'datePublished' => '2025-06-15',
        'dateModified' => $today,
        'inLanguage' => 'en-US',
        'isPartOf' => ['@id' => 'https://fhia.net/#website'],
        'about' => ['@id' => 'https://fhia.net/#organization'],
        'speakable' => [
            '@type' => 'SpeakableSpecification',
            'cssSelector' => ['.tldr-citation-block', '.faq-answer', '.elementor-toggle-content']
        ],
        'author' => [
            '@type' => 'Organization',
            'name' => 'First Heritage Insurance Agency',
            'url' => 'https://fhia.net'
        ]
    ];
    
    // AggregateRating schema (supplements Rank Math's existing InsuranceAgency)  
    $rating_schema = [
        '@context' => 'https://schema.org',
        '@type' => 'InsuranceAgency',
        '@id' => 'https://fhia.net/#agency-rating',
        'name' => 'First Heritage Insurance Agency',
        'url' => 'https://fhia.net',
        'telephone' => '+1-631-659-0189',
        'aggregateRating' => [
            '@type' => 'AggregateRating',
            'ratingValue' => '4.9',
            'reviewCount' => '1500',
            'bestRating' => '5'
        ]
    ];
    
    echo "\n<!-- FHIA SEO Enhancer: WebPage + Speakable Schema -->\n";
    echo '<script type="application/ld+json">' . json_encode($webpage_schema, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) . "</script>\n";
    echo '<script type="application/ld+json">' . json_encode($rating_schema, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) . "</script>\n";
    
}, 1); // Priority 1 = early in <head>

// ── Override Rank Math Meta Description ─────────────────────────
add_filter('rank_math/frontend/description', function($description) {
    if (!is_singular('page')) return $description;
    
    $uri = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
    if (strpos($uri, 'commercial-auto-insurance/') !== 0) return $description;
    
    $parts = explode('/', $uri);
    $slug = end($parts);
    if (empty($slug) || $slug === 'commercial-auto-insurance') return $description;
    
    $data = fhia_get_seo_data();
    if (!isset($data[$slug]) || empty($data[$slug]['metaDesc'])) return $description;
    
    return $data[$slug]['metaDesc'];
});

// ── Add CSS for TL;DR Block Responsiveness ──────────────────────
add_action('wp_head', function() {
    if (!is_singular('page')) return;
    
    $uri = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
    if (strpos($uri, 'commercial-auto-insurance/') !== 0) return;
    
    echo <<<CSS
<style>
.tldr-citation-block {
    transition: box-shadow 0.2s ease;
}
.tldr-citation-block:hover {
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
@media (max-width: 768px) {
    .tldr-citation-block {
        padding: 16px 20px !important;
        margin: 0 0 24px 0 !important;
    }
    .tldr-citation-block p:first-child {
        font-size: 14px !important;
    }
}
</style>
CSS;
}, 99);
