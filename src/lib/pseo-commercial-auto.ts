/**
 * Programmatic SEO data for Commercial Auto Insurance pages.
 * Generates city-targeted and industry-targeted landing pages.
 */

// ── City Definitions ─────────────────────────────────────────

export interface CityData {
    name: string;
    slug: string;          // URL slug, e.g. "huntington-ny"
    county: 'Nassau' | 'Suffolk';
    zip: string;           // Primary ZIP
    description: string;   // One-liner about the city's commercial relevance
}

export const CITIES: CityData[] = [
    // ── Nassau County ──
    { name: 'Hempstead', slug: 'hempstead-ny', county: 'Nassau', zip: '11550', description: 'Long Island\'s most populated town with over 790,000 residents and thousands of small businesses relying on commercial vehicles daily.' },
    { name: 'Freeport', slug: 'freeport-ny', county: 'Nassau', zip: '11520', description: 'A vibrant village with a busy waterfront, active fishing fleet, and growing small business community along the Nautical Mile.' },
    { name: 'Valley Stream', slug: 'valley-stream-ny', county: 'Nassau', zip: '11580', description: 'A commercial hub bordering Queens with heavy traffic corridors along Sunrise Highway and numerous retail and service businesses.' },
    { name: 'Long Beach', slug: 'long-beach-ny', county: 'Nassau', zip: '11561', description: 'A barrier island city with construction, hospitality, and service businesses that depend on reliable commercial vehicle coverage.' },
    { name: 'Glen Cove', slug: 'glen-cove-ny', county: 'Nassau', zip: '11542', description: 'A city on the North Shore with active industrial zones, marine businesses, and contractors needing fleet protection.' },
    { name: 'Rockville Centre', slug: 'rockville-centre-ny', county: 'Nassau', zip: '11570', description: 'An affluent village with a thriving downtown, professional services, and contractors serving high-value residential properties.' },
    { name: 'Garden City', slug: 'garden-city-ny', county: 'Nassau', zip: '11530', description: 'A business-friendly village home to Roosevelt Field and major office parks with hundreds of commercial fleets operating daily.' },
    { name: 'Mineola', slug: 'mineola-ny', county: 'Nassau', zip: '11501', description: 'The Nassau County seat with concentrated legal, medical, and professional service businesses that rely on commercial vehicles.' },
    { name: 'Westbury', slug: 'westbury-ny', county: 'Nassau', zip: '11590', description: 'A growing commercial corridor with restaurants, retail, and service businesses operating delivery and work vehicles.' },
    { name: 'Hicksville', slug: 'hicksville-ny', county: 'Nassau', zip: '11801', description: 'A major transportation hub with a large industrial area, numerous contractors, and commercial vehicle operators.' },
    { name: 'Massapequa', slug: 'massapequa-ny', county: 'Nassau', zip: '11758', description: 'A South Shore community with active home improvement contractors, landscaping companies, and local delivery services.' },
    { name: 'Levittown', slug: 'levittown-ny', county: 'Nassau', zip: '11756', description: 'One of America\'s first planned suburbs, now home to thousands of small businesses and contractors serving the surrounding area.' },
    // ── Suffolk County ──
    { name: 'Huntington', slug: 'huntington-ny', county: 'Suffolk', zip: '11743', description: 'A major Suffolk County town with a bustling Main Street, industrial parks, and a thriving contractor and service economy.' },
    { name: 'Babylon', slug: 'babylon-ny', county: 'Suffolk', zip: '11702', description: 'A diverse town spanning from the Great South Bay to major highways, with construction, transportation, and service industries.' },
    { name: 'Islip', slug: 'islip-ny', county: 'Suffolk', zip: '11751', description: 'Home to Long Island MacArthur Airport and a major corridor for trucking, logistics, and commercial vehicle operations.' },
    { name: 'Smithtown', slug: 'smithtown-ny', county: 'Suffolk', zip: '11787', description: 'A prosperous town with medical centers, tech offices, and a large base of HVAC, plumbing, and electrical contractors.' },
    { name: 'Bay Shore', slug: 'bay-shore-ny', county: 'Suffolk', zip: '11706', description: 'A revitalized downtown area with growing restaurants, delivery services, and marine-related businesses.' },
    { name: 'Patchogue', slug: 'patchogue-ny', county: 'Suffolk', zip: '11772', description: 'A thriving village in Brookhaven with an active nightlife scene, new construction, and expanding commercial districts.' },
    { name: 'Commack', slug: 'commack-ny', county: 'Suffolk', zip: '11725', description: 'A commercial center along Jericho Turnpike with major shopping centers and a dense concentration of service businesses.' },
    { name: 'Brentwood', slug: 'brentwood-ny', county: 'Suffolk', zip: '11717', description: 'One of Suffolk\'s largest hamlets with a growing population, active construction industry, and numerous small fleet operators.' },
    { name: 'Ronkonkoma', slug: 'ronkonkoma-ny', county: 'Suffolk', zip: '11779', description: 'A transportation hub adjacent to MacArthur Airport with logistics companies, delivery fleets, and commercial vehicle operators.' },
    { name: 'Lindenhurst', slug: 'lindenhurst-ny', county: 'Suffolk', zip: '11757', description: 'A village with strong blue-collar roots, home to contractors, tradespeople, and service businesses needing fleet coverage.' },
    { name: 'Deer Park', slug: 'deer-park-ny', county: 'Suffolk', zip: '11729', description: 'Located along the Route 231 corridor with industrial parks, warehouses, and heavy commercial vehicle traffic.' },
    { name: 'Central Islip', slug: 'central-islip-ny', county: 'Suffolk', zip: '11722', description: 'Home to major court facilities and a growing business community with contractors and service providers.' },
    { name: 'Melville', slug: 'melville-ny', county: 'Suffolk', zip: '11747', description: 'FHIA\'s hometown and a major corporate center along Route 110 with office parks, tech companies, and professional services.' },
];

// ── Industry Definitions ─────────────────────────────────────

export interface IndustryData {
    name: string;
    slug: string;
    headline: string;         // Hero headline
    description: string;      // Extended description
    vehicleTypes: string[];   // Types of vehicles in this industry
    coverageNeeds: string[];  // Specific coverage requirements
    painPoints: string[];     // Industry-specific challenges
    ctaText: string;          // Customized CTA
}

export const INDUSTRIES: IndustryData[] = [
    {
        name: 'Construction Fleets',
        slug: 'construction-fleets',
        headline: 'Commercial Auto Insurance for Construction Fleets on Long Island',
        description: 'Construction companies face unique fleet insurance challenges — heavy equipment haulers navigating tight residential streets, dump trucks on congested highways, and work crews traveling between multiple job sites daily. Standard commercial auto policies don\'t account for the high-risk exposure of construction operations.',
        vehicleTypes: ['Dump trucks', 'Flatbed trucks', 'Pickup trucks', 'Heavy equipment haulers', 'Cement mixers', 'Utility trucks', 'Crew vans'],
        coverageNeeds: ['Hired & non-owned auto liability', 'Heavy equipment in-transit coverage', 'Inland marine for tools on board', 'Workers comp coordination', 'Umbrella liability for large projects'],
        painPoints: ['High premiums due to heavy vehicle classification', 'Difficulty covering subcontractor vehicles', 'Seasonal workforce changes affecting driver lists', 'Multi-site operations increasing accident exposure'],
        ctaText: 'Get a Construction Fleet Quote',
    },
    {
        name: 'HVAC Contractors',
        slug: 'hvac-contractors',
        headline: 'Commercial Auto Insurance for HVAC Contractors on Long Island',
        description: 'HVAC contractors depend on their service vans and trucks to reach residential and commercial job sites across Long Island. Your vehicles carry thousands of dollars in specialized tools and equipment — one accident or theft can shut down operations. Standard policies often leave gaps in coverage for mounted equipment and in-transit tools.',
        vehicleTypes: ['Service vans', 'Box trucks', 'Pickup trucks with utility beds', 'Refrigerant transport vehicles'],
        coverageNeeds: ['Tools and equipment in-transit coverage', 'Mounted equipment protection', 'Emergency service vehicle coverage', 'Hired auto for seasonal demand'],
        painPoints: ['Equipment theft from parked vehicles', 'Year-round emergency call exposure', 'Apprentice and helper driver coverage', 'Refrigerant transport hazmat compliance'],
        ctaText: 'Get an HVAC Fleet Quote',
    },
    {
        name: 'Plumbing Companies',
        slug: 'plumbing-companies',
        headline: 'Commercial Auto Insurance for Plumbing Companies on Long Island',
        description: 'Plumbing companies run service calls year-round across Long Island, responding to emergencies at all hours. Your fleet of service vans carries expensive diagnostic equipment, pipe-fitting tools, and replacement parts. Whether you operate 3 vans or 30, your vehicles need coverage that matches the urgency of your work.',
        vehicleTypes: ['Service vans', 'Pickup trucks', 'Utility body trucks', 'Jetter/hydro-vac trucks'],
        coverageNeeds: ['24/7 emergency response vehicle coverage', 'Tools and inventory in-transit', 'Roadside assistance', 'Hired auto for overflow demand'],
        painPoints: ['Emergency driving increases accident risk', 'Heavy equipment carried increases claim costs', 'Seasonal flooding spikes in demand and road hazards', 'New employees needing immediate driver coverage'],
        ctaText: 'Get a Plumbing Fleet Quote',
    },
    {
        name: 'Electrical Contractors',
        slug: 'electrical-contractors',
        headline: 'Commercial Auto Insurance for Electrical Contractors on Long Island',
        description: 'Electrical contractors operate specialized vehicles equipped with sensitive testing instruments, high-value materials, and ladder racks. Whether your crews are wiring new construction in Babylon or upgrading panels in Garden City, your fleet needs protection that covers both the vehicle and the business tools inside it.',
        vehicleTypes: ['Bucket trucks', 'Service vans', 'Pickup trucks', 'Utility body trucks', 'Cable-pulling vehicles'],
        coverageNeeds: ['Mounted equipment coverage (aerial lifts)', 'Voltage testing equipment protection', 'Non-owned auto for subcontractor vehicles', 'Comprehensive theft coverage'],
        painPoints: ['Bucket truck and aerial lift insurance complexity', 'Copper and material theft from vehicles', 'Multi-crew fleet management', 'Commercial driver qualification requirements'],
        ctaText: 'Get an Electrical Fleet Quote',
    },
    {
        name: 'Landscaping Companies',
        slug: 'landscaping-companies',
        headline: 'Commercial Auto Insurance for Landscaping Companies on Long Island',
        description: 'Landscaping companies tow trailers loaded with mowers, blowers, and equipment across Long Island\'s residential neighborhoods every day. Your fleet faces unique risks — trailer detachment, equipment falling during transport, and seasonal workforce turnover. Most landscapers are underinsured without even knowing it.',
        vehicleTypes: ['Pickup trucks with trailers', 'Dump trucks', 'Flatbed trailers', 'Utility trucks', 'Skid steer haulers'],
        coverageNeeds: ['Trailer coverage', 'Equipment on trailer protection', 'Seasonal employee driver coverage', 'Hired auto for peak season'],
        painPoints: ['Trailer-related accidents and liability', 'Seasonal workforce with varying driving records', 'Equipment falling from trailers', 'Snow removal operations increasing winter risk'],
        ctaText: 'Get a Landscaping Fleet Quote',
    },
    {
        name: 'Delivery & Courier Services',
        slug: 'delivery-courier',
        headline: 'Commercial Auto Insurance for Delivery & Courier Services on Long Island',
        description: 'Delivery and courier businesses live on the road — your drivers log hundreds of miles daily across Nassau and Suffolk counties. High mileage, frequent stops, and tight delivery windows create elevated risk profiles that standard commercial auto policies don\'t adequately address.',
        vehicleTypes: ['Cargo vans', 'Sprinter vans', 'Box trucks', 'Sedans for courier service', 'Refrigerated vans'],
        coverageNeeds: ['High-mileage vehicle coverage', 'Cargo/goods in-transit insurance', 'Gap coverage for leased vehicles', 'Non-owned auto for contractor drivers'],
        painPoints: ['High annual mileage inflating premiums', 'Frequent claims from parking lot incidents', 'Independent contractor driver management', 'Last-mile delivery in congested areas'],
        ctaText: 'Get a Delivery Fleet Quote',
    },
    {
        name: 'Trucking Companies',
        slug: 'trucking-companies',
        headline: 'Commercial Truck Insurance for Long Island Trucking Companies',
        description: 'Long Island trucking operations face unique challenges — navigating the LIE, Southern State, and local roads not designed for heavy vehicles. Whether you\'re hauling freight to the city, running local routes, or operating as an owner-operator, you need trucking-specific coverage that meets FMCSA requirements and protects your livelihood.',
        vehicleTypes: ['Semi-trucks', 'Tractor-trailers', 'Box trucks (26,000+ GVWR)', 'Tanker trucks', 'Flatbed trailers', 'Intermodal chassis'],
        coverageNeeds: ['FMCSA-compliant liability ($750K+ minimum)', 'Motor truck cargo coverage', 'Bobtail/deadhead coverage', 'Physical damage for high-value rigs', 'Trailer interchange coverage'],
        painPoints: ['Meeting federal minimum insurance requirements', 'High premiums for new carriers', 'MC/DOT authority compliance', 'Long-haul vs. local rate differences'],
        ctaText: 'Get a Trucking Insurance Quote',
    },
    {
        name: 'Food Service & Catering',
        slug: 'food-service-catering',
        headline: 'Commercial Auto Insurance for Food Service & Catering on Long Island',
        description: 'Food service and catering businesses transport perishable goods, hot food, and fragile equipment across Long Island for events, restaurants, and corporate clients. Your vehicles need coverage that accounts for spoilage risk, refrigeration equipment, and the liability of serving food at off-site locations.',
        vehicleTypes: ['Refrigerated vans', 'Catering trucks', 'Food trucks', 'Delivery sedans', 'Box trucks'],
        coverageNeeds: ['Refrigeration breakdown coverage', 'Food spoilage protection', 'Event-site liability extension', 'Hired auto for peak event seasons'],
        painPoints: ['Refrigeration equipment failure during transport', 'Food safety liability extending to vehicles', 'Seasonal demand requiring temporary vehicles', 'Restaurant delivery in congested downtown areas'],
        ctaText: 'Get a Food Service Fleet Quote',
    },
    {
        name: 'Tow Truck Operators',
        slug: 'tow-truck-operators',
        headline: 'Commercial Insurance for Tow Truck Operators on Long Island',
        description: 'Tow truck operators work the most dangerous roads on Long Island — responding to accidents on the LIE, Southern State, and Sunrise Highway at all hours. Your vehicles face elevated collision risk, and you carry liability for every car on your hook. Specialty tow truck coverage is essential, not optional.',
        vehicleTypes: ['Flatbed tow trucks', 'Wheel-lift wreckers', 'Heavy-duty rotators', 'Rollback carriers', 'Service trucks'],
        coverageNeeds: ['On-hook/in-tow coverage', 'Garagekeepers liability', 'Roadside protection liability', 'Collision for high-value rigs', 'Workers comp for roadside exposure'],
        painPoints: ['Extreme roadside danger and exposure', 'Damage to vehicles in your care/custody', 'High insurance costs due to risk classification', 'Police rotation list requirements'],
        ctaText: 'Get a Tow Truck Insurance Quote',
    },
    {
        name: 'Moving Companies',
        slug: 'moving-companies',
        headline: 'Commercial Auto Insurance for Moving Companies on Long Island',
        description: 'Moving companies operate large vehicles in residential areas, navigating narrow streets, sharp turns, and tight driveways across Long Island. Your drivers handle heavy furniture and fragile valuables, and your trucks face unique risks from low-hanging tree branches to basement stairway access.',
        vehicleTypes: ['Moving trucks (16-26 ft)', 'Box trucks', 'Cargo vans', 'Tractor-trailers for long distance', 'Pickup trucks for small moves'],
        coverageNeeds: ['Goods in-transit/cargo coverage', 'Customer property damage liability', 'Non-owned auto for rented trucks', 'Physical damage for high-value trucks'],
        painPoints: ['Customer property claims from loading/unloading', 'Tight residential street navigation damage', 'Seasonal demand requiring temporary drivers', 'Long-distance moves crossing state lines'],
        ctaText: 'Get a Moving Company Quote',
    },
    {
        name: 'Cleaning Services',
        slug: 'cleaning-services',
        headline: 'Commercial Auto Insurance for Cleaning Services on Long Island',
        description: 'Commercial and residential cleaning companies run tight schedules across Long Island, with crews traveling between multiple locations daily. Your vehicles carry cleaning chemicals, equipment, and supplies — and your drivers may be recent hires with limited commercial driving experience.',
        vehicleTypes: ['Cargo vans', 'Minivans', 'Pickup trucks', 'SUVs', 'Pressure washing trucks'],
        coverageNeeds: ['Chemical/hazmat transport coverage', 'Multi-vehicle fleet discounts', 'Employee driver coverage with flexible additions', 'Non-owned auto for personal vehicle use'],
        painPoints: ['High employee turnover requiring frequent driver list updates', 'Chemical spill liability during transport', 'Multiple daily stops increasing fender-bender risk', 'Workers using personal vehicles for business'],
        ctaText: 'Get a Cleaning Service Fleet Quote',
    },
    {
        name: 'Medical Transport',
        slug: 'medical-transport',
        headline: 'Commercial Auto Insurance for Medical Transport on Long Island',
        description: 'Non-emergency medical transport (NEMT) and ambulette services carry Long Island\'s most vulnerable passengers — elderly, disabled, and post-surgical patients. Your vehicles require specialized coverage that addresses passenger liability, medical equipment transport, and ADA compliance.',
        vehicleTypes: ['Ambulettes', 'Wheelchair-accessible vans', 'Stretcher vans', 'Sedans for ambulatory patients', 'Minibuses'],
        coverageNeeds: ['Passenger liability (elevated limits)', 'Medical equipment in-vehicle coverage', 'ADA compliance insurance', 'Professional liability extension', 'Workers comp for patient-handling injuries'],
        painPoints: ['High passenger liability exposure', 'Wheelchair lift and ramp failure claims', 'Regulatory compliance requirements', 'Patient injury claims during boarding/exiting'],
        ctaText: 'Get a Medical Transport Quote',
    },
];

// ── Lookups ──────────────────────────────────────────────────

const cityMap = new Map(CITIES.map(c => [c.slug, c]));
const industryMap = new Map(INDUSTRIES.map(i => [i.slug, i]));

export function getCityBySlug(slug: string): CityData | undefined {
    return cityMap.get(slug);
}

export function getIndustryBySlug(slug: string): IndustryData | undefined {
    return industryMap.get(slug);
}

export function getAllPSEOSlugs(): string[] {
    return [
        ...CITIES.map(c => c.slug),
        ...INDUSTRIES.map(i => i.slug),
    ];
}

export function isPSEOSlug(slug: string): boolean {
    return cityMap.has(slug) || industryMap.has(slug);
}

// ── Coverage Types (shared across all pages) ─────────────────

export const COVERAGE_TYPES = [
    { name: 'Liability Coverage', description: 'Covers bodily injury and property damage you cause to others while operating commercial vehicles.' },
    { name: 'Collision Coverage', description: 'Pays to repair or replace your commercial vehicle after an accident, regardless of fault.' },
    { name: 'Comprehensive Coverage', description: 'Protects against theft, vandalism, weather damage, and other non-collision events.' },
    { name: 'Uninsured Motorist', description: 'Covers your fleet if hit by a driver without adequate insurance — critical in New York.' },
    { name: 'Medical Payments', description: 'Covers medical expenses for your driver and passengers after an accident.' },
    { name: 'Hired & Non-Owned Auto', description: 'Extends coverage to rented vehicles and employee-owned vehicles used for business.' },
];
