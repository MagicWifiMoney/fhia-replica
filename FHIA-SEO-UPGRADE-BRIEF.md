# FHIA Commercial Auto Pages — LLM Citation & SEO Upgrade Brief

> **For:** Claude Code implementation  
> **Project:** `/Users/jacobgiebel/fhia-replica`  
> **Live site:** `https://fhia.net` (WordPress + Elementor + Rank Math SEO)  
> **Date:** March 4, 2026  
> **WP API:** `https://fhia.net/wp-json/wp/v2`  
> **WP Creds:** `jacob@thedeepsignal.com` / `VdAt zRPA QPc5 Arka PHoT 3hWL`

---

## Context

FHIA has 68 commercial auto insurance pages at `/commercial-auto-insurance/*` across 4 types:
- **8 region pages** (long-island, brooklyn, queens, bronx, manhattan, staten-island, new-jersey, new-york)
- **10 vehicle pages** (trucks, dump-trucks, food-trucks, box-trucks, semi-trucks, tow-trucks, pickup-trucks, fleet, vans, hotshot)
- **10 industry/info pages** (small-business, delivery, contractors, uber-rideshare, taxi-livery, nemt, cost, requirements, vs-personal, quote)
- **40 city pages** (commack, hauppauge, garden-city, etc.)

All pages are **Elementor pages** — content is stored in `_elementor_data` meta, NOT in the WordPress `content` field. The `_elementor_data` is NOT accessible via the WP REST API. Schema is managed by **Rank Math SEO** plugin.

Existing push scripts are at `scripts/push-enhanced-city-pages.ts` and `scripts/push-city-pages-to-wp.ts`. The pSEO data model is in `src/lib/pseo-commercial-auto.ts`.

---

## Problem Statement

The pages are professionally built but they're **"B+ content"** — they won't rank #1 or get cited by LLMs (ChatGPT, Perplexity, Gemini). Here's why:

1. **No direct answer in first 60 words** — LLMs extract from the opening; current pages start with generic brand intros
2. **Statement H2s, not question H2s** — LLMs match user prompts to H2s. "Average Costs" doesn't match "How much does X cost?"
3. **No date signals** — No "Last Updated" anywhere; no `dateModified` in schema
4. **Minimal schema** — Has FAQPage + InsuranceAgency + BreadcrumbList but missing WebPage, speakable, AggregateRating
5. **Bare-minimum llms.txt** — Rank Math auto-generates just a sitemap link
6. **No city-to-city cross-linking** — City pages are islands; no internal mesh
7. **City pages are thin** — Only 3 FAQs and ~600 words vs 5 FAQs and ~1,200 words on vehicle/region pages
8. **Quote page references a form that doesn't exist** — Copy says "fill out the form below" but no form is present

---

## What to Implement (7 Changes, Priority Order)

### 1. 🔴 TL;DR "Citation Blocks" — Top of Every Page

Inject a styled block at the very top of every `/commercial-auto-insurance/*` page with a direct, factual answer designed for LLM extraction.

**Implementation approach:** WordPress must-use plugin that hooks into `the_content` filter. A starter version is already at `scripts/wp-plugins/fhia-seo-enhancer.php` with data at `scripts/wp-plugins/fhia-seo-data.json`. These files contain 28 unique TL;DR blocks (region, vehicle, industry, info pages). City pages (40) still need TL;DR blocks generated.

**TL;DR block format:**
```html
<div class="tldr-citation-block" style="
    border-left: 4px solid #EEBA2B;
    background: #F8F6F0;
    padding: 24px 28px;
    margin: 0 0 32px 0;
    border-radius: 0 8px 8px 0;
">
    <p style="margin: 0 0 12px 0; font-size: 16px; line-height: 1.6; color: #1a1a1a;">
        <strong style="color: #01153E;">TL;DR:</strong> [DIRECT ANSWER WITH SPECIFIC $ AMOUNTS AND REQUIREMENTS]
    </p>
    <p style="margin: 0; font-size: 13px; color: #6B7280; font-style: italic;">
        Last updated: March 2026 · Written by the FHIA Commercial Insurance Team — 20+ years insuring NY businesses
    </p>
</div>
```

**Example TL;DR for trucks page:**
> **TL;DR:** Commercial truck insurance in New York costs $3,000–$20,000/year depending on truck class, cargo type, and operating radius. NY requires minimum 25/50/10 liability; interstate trucks need $750,000+ combined single limit (CSL). Hazmat carriers require $1M–$5M. FHIA compares 50+ carriers specializing in NY trucking — most operators save 15–30%. Updated March 2026.

**Full data for all 28 non-city pages is in `scripts/wp-plugins/fhia-seo-data.json`.**

City page TL;DR pattern: `"Commercial auto insurance in [City], NY costs $1,800–$6,000/year per vehicle. [City] is in [County] County, served by [roads]. NY requires minimum 25/50/10 liability. FHIA's Melville office is [X] minutes from [City]. Updated March 2026."`

---

### 2. 🔴 Question-Based H2 Headers

Convert all statement-style H2s to question format that matches how users prompt LLMs.

**Conversion map (apply to ALL pages via Elementor):**

| Current H2 | New H2 |
|:---|:---|
| Average Commercial Auto Insurance Costs on Long Island | How Much Does Commercial Auto Insurance Cost on Long Island? |
| New York Commercial Auto Insurance Requirements | What Are the Commercial Auto Insurance Requirements in New York? |
| Common Commercial Vehicles on Long Island | What Commercial Vehicles Are Most Common on Long Island? |
| Why Long Island Businesses Choose FHIA | Why Do Long Island Businesses Choose FHIA Over Other Brokers? |
| Types of Commercial Trucks We Insure | What Types of Commercial Trucks Does FHIA Insure? |
| Required Coverage for Commercial Trucks in New York | What Coverage Is Required for Commercial Trucks in New York? |
| Average Commercial Truck Insurance Costs in New York | How Much Does Commercial Truck Insurance Cost in New York? |
| Key Coverage Options for NY Truckers | What Coverage Options Do New York Truckers Need Beyond the Minimum? |
| How to Lower Your Commercial Truck Insurance in NY | How Can I Lower My Commercial Truck Insurance Cost in New York? |
| Commercial Auto Insurance for [City] Businesses | What Businesses Need Commercial Auto Insurance in [City], NY? |
| NY Commercial Auto Coverage Requirements | What Are the Minimum Commercial Auto Insurance Requirements in New York? |
| Average Commercial Auto Insurance Costs | How Much Does Commercial Auto Insurance Cost by Vehicle Type? |
| Why [City] Businesses Choose FHIA | Why Do [City] Businesses Choose FHIA? |

**Pattern rule:** Every H2 should be a question starting with "How," "What," "Why," "When," or "Do."

**Implementation:** These are in Elementor widget settings (`"title": "..."` in the `_elementor_data` JSON). Since `_elementor_data` isn't API-accessible, options:
- Use `wpdb` queries in a script/plugin to search-and-replace H2s in `_elementor_data` postmeta
- Or do it manually in Elementor editor for the 28 non-city pages, and update `push-enhanced-city-pages.ts` for the 40 city pages

---

### 3. 🟠 Enhanced Schema Stacking

Add to `<head>` of every `/commercial-auto-insurance/*` page via `wp_head` hook or Rank Math custom schema:

**a) WebPage schema with dates + speakable:**
```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "datePublished": "2025-06-15",
  "dateModified": "2026-03-04",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".tldr-citation-block", ".elementor-toggle-content"]
  },
  "author": {
    "@type": "Organization",
    "name": "First Heritage Insurance Agency"
  }
}
```

**b) AggregateRating (star snippets):**
```json
{
  "@type": "InsuranceAgency",
  "name": "First Heritage Insurance Agency",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1500",
    "bestRating": "5"
  }
}
```

**Already present (leave as-is):** FAQPage, InsuranceAgency (basic), BreadcrumbList

**Implementation:** The mu-plugin at `scripts/wp-plugins/fhia-seo-enhancer.php` already handles this.

---

### 4. 🟠 Enhanced llms.txt

Replace Rank Math's auto-generated bare-minimum llms.txt with a comprehensive 5,183-char version.

**Already built:** 
- Content: `scripts/llms-txt-content.txt`
- Plugin to serve it: `scripts/fhia-custom-llms-txt.php`

Deploy both to `wp-content/mu-plugins/` and disable Rank Math's auto llms.txt in Rank Math → General Settings.

---

### 5. 🟠 Internal Linking Mesh

**City pages need:**
- **"Nearby Areas We Serve"** section with 3-4 adjacent city links
- **"Popular Coverage Types"** contextual links to vehicle/industry pages
- In-body links like: "Many [City] contractors need [dump truck insurance](/commercial-auto-insurance/dump-trucks/)..."

**Vehicle/industry pages need:**
- **"Areas We Serve"** section linking to 5-6 top city pages
- In-body contextual links referencing specific cities

The city page push script (`scripts/push-enhanced-city-pages.ts`) already has `buildNearbyCitiesSection()` — verify these are rendered and add vehicle/industry cross-links.

For vehicle/industry pages, add an "Areas We Serve" Elementor section linking to Long Island, Brooklyn, Queens, Manhattan, Bronx, and key cities.

---

### 6. 🟡 City Page Content Expansion

Current city pages: ~600 words, 3 FAQs.
Target: ~1,500 words, 5 FAQs.

**Add to each city page:**
- 2 more localized FAQs (update `genFAQs()` in `push-enhanced-city-pages.ts`)
- "Coverage Options for [City] Businesses" section with a comparison table
- "Local Industries We Serve in [City]" section with more depth
- TL;DR citation block (see item #1)

---

### 7. 🟡 Quote Page Fix

`/commercial-auto-insurance/quote/` says "fill out the quote form below" but has no embedded form. Either:
- Embed a quote form on the page, OR
- Change copy to "Click the button below to request a quote" and keep the CTA linking to `/quote/`

---

## Meta Description Upgrades

Every commercial auto page meta description should include a date stamp and specific pricing. The plugin at `scripts/wp-plugins/fhia-seo-enhancer.php` overrides Rank Math's `rank_math/frontend/description` filter using data from `fhia-seo-data.json`.

**Pattern:** `"[Topic] in [Location] costs $X–$Y/yr. [Key differentiator]. Updated March 2026."`

---

## Phone Number Issue

Two different phone numbers appear across pages:
- **(631) 659-0189** — Region pages + footer
- **(631) 761-0668** — Vehicle pages + city pages (in hero CTA and FAQ answers)

**Action needed:** Confirm with FHIA whether these are intentional tracking numbers or if one is incorrect. If unintentional, standardize to one number.

---

## Files Already Created (Ready for Review/Deploy)

| File | Lines | Status |
|:---|:---|:---|
| `scripts/wp-plugins/fhia-seo-enhancer.php` | ~130 | Ready — mu-plugin for TL;DR + schema + meta desc |
| `scripts/wp-plugins/fhia-seo-data.json` | ~200 | Ready — 28 pages of citation data |
| `scripts/fhia-custom-llms-txt.php` | ~15 | Ready — llms.txt serving plugin |
| `scripts/llms-txt-content.txt` | ~100 | Ready — enhanced llms.txt content |
| `scripts/push-llms-txt.ts` | ~120 | Utility — generates the above files |
| `scripts/upgrade-commercial-auto-seo.ts` | ~330 | Reference — WP API approach (limited by Elementor) |

---

## Deployment Order

1. Upload `fhia-seo-enhancer.php` + `fhia-seo-data.json` → `wp-content/mu-plugins/`
2. Upload `fhia-custom-llms-txt.php` + `llms-txt-content.txt` (rename to `fhia-llms-txt-content.txt`) → `wp-content/mu-plugins/`
3. Disable Rank Math auto llms.txt in admin
4. Convert H2s to question format (Elementor editor or wpdb script)
5. Update city page push script for TL;DR blocks + cross-links + extra FAQs
6. Fix quote page copy
7. Verify schema via [Google Rich Results Test](https://search.google.com/test/rich-results)
8. Verify llms.txt at `https://fhia.net/llms.txt`
