import { mediaAsset } from "./media";
export const brand = {
  name: "Baron Aerial Media",
  short: "Baron Aerial",
  tagline: "Altitude Changes Everything",
  altTagline: "From Rooftops to Bottom Lines",
  city: "Newark, New Jersey",
  serviceArea: "North Jersey and the New York metro",
  part107: "FAA Part 107 Remote Pilot",
};

export const nav = [
  { to: "/work", label: "Work" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/trust", label: "Airspace + Compliance" },
  { to: "/about", label: "About" },
] as const;

export const process = [
  {
    n: "01",
    title: "Brief",
    body: "We collect the mission goal, the site, and the window from you first. A listing still, a month-over-month jobsite set, a claim file, a roof packet, and an orthomosaic are five different flights. Where and when matter as much as what.",
  },
  {
    n: "02",
    title: "Authorize",
    body: "Airspace class, LAANC on the live UAS Facility Map, Part 107 Waivers, TFR and National Security Event notices, and local permits (NYPD for New York City operations, property/GC access, venue clearance). Coordination happens here — not on the pad.",
  },
  {
    n: "03",
    title: "Conditions",
    body: "Day-of weather, TFRs, National Security Events, and NOTAMs can change an approval that looked clean the night before. This is the GO / NO-GO gate. Authorization is planning status, not a launch.",
  },
  {
    n: "04",
    title: "Fly",
    body: "Capture from the viewpoints the brief and the authorization actually allow — stills, film, or a mapping grid. The aircraft comes down when the coverage for the deliverable is in the card, not when the battery is empty.",
  },
  {
    n: "05",
    title: "Process",
    body: "After the flight: cull, color, align, and reconstruct. Photogrammetry, 3D site models, construction tracking sets, and inspection packets are built here. The deliverable is prepared for the client’s review workflow.",
  },
  {
    n: "06",
    title: "Deliver",
    body: "Stills, film, orthomosaics, DEMs, 3D models, progress comparisons, and reports — organized to the specification in the brief. This is the product the client files, presents, or sells. Flying is only half the job.",
  },
] as const;

export const planningSteps = [
  {
    id: "brief",
    n: "01",
    title: "Brief",
    kicker: "Goal, site, and window",
    body: "First we take three things from you: what the media has to do, where the mission takes place, and when you need it. A listing still, a month-over-month jobsite set, a claim file, a roof packet, and an orthomosaic are not the same flight. Coverage, altitude, lighting, and the authorization path are chosen for that output — not for a generic flyover.",
  },
  {
    id: "class",
    n: "02",
    title: "Airspace Class",
    kicker: "The chart, in three dimensions",
    panel: "chart",
    body: "Around Newark Liberty, flight planning starts with the current airspace chart, UAS Facility Maps, and restrictions. This study uses actual FAA facility-grid footprints and published ceiling values. Raised cells visualize those planning ceilings with exaggerated height; they do not depict the full boundaries of an airspace class or authorize a flight.",
  },
  {
    id: "authorize",
    n: "03",
    title: "Authorize",
    kicker: "LAANC, 107, TFR, local",
    panel: "chart",
    body: "In participating Class B, C, D, and surface E, LAANC is how a Part 107 operator requests altitude through an FAA-approved UAS Service Supplier. The grid is in 50-foot steps. A 0 ft cell requires further FAA review for any positive-altitude operation; the grid itself never grants permission to fly. We also read TFRs, National Security Event notices and bulletins, and whether coordination is possible. Local authorizations sit on this layer too: NYPD permit for New York City operations, property or GC access, Port Authority property, parks, and venue clearance.",
  },
  {
    id: "waivers",
    n: "04",
    title: "Part 107 Waivers",
    kicker: "When the standard rule set is not enough",
    panel: "waivers",
    body: "Most listing, progress, and roof work fits inside standard Part 107 plus airspace authorization. Some shots do not. Beyond visual line of sight, operations over people, operations from a moving vehicle, multiple aircraft under one pilot, and altitude above 400 ft AGL without a structure each have a published rule — and a waiver path. A requested Saturday is not a go if the shot sits outside the rule set.",
  },
  {
    id: "sgi",
    n: "05",
    title: "SGI Waivers",
    kicker: "TFR, National Security Events, public interest",
    panel: "sgi",
    body: "The FAA Special Governmental Interest process supports qualifying emergency operations, such as disaster response and urgent public-safety missions. Eligibility and approval depend on the operation. Routine commercial work and sporting-event restrictions do not become eligible simply because a client needs a flight quickly.",
  },
  {
    id: "conditions",
    n: "06",
    title: "Conditions",
    kicker: "Day-of can still close the window",
    body: "Ceiling, visibility, wind, and precipitation. TFRs, National Security Events, and Notices to Air Missions can appear after a LAANC is approved. Night work is allowed under Part 107 with anti-collision lighting visible for 3 statute miles — lighting and visual line of sight still have to hold. A stadium bulletin or a VIP movement can turn a GO into a HOLD between breakfast and the pad.",
  },
  {
    id: "go",
    n: "07",
    title: "GO / NO-GO",
    kicker: "Authorization is not a launch",
    panel: "go",
    body: "A LAANC, a Part 107 Waiver, or SGI Waivers are planning status. Access, people, weather, and the requested deliverable still have to line up. If they do not, we hold or redesign the shot. A submitted brief starts that review — it does not book a flight.",
  },
] as const;

export const preflight = [
  {
    code: "LAANC",
    title: "LAANC Authorization",
    body: "In participating Class B, C, D, and surface E airspace, Baron Aerial Media requests near-real-time authorization through the FAA’s Low Altitude Authorization and Notification Capability, via an approved UAS Service Supplier. North Jersey work around EWR, TEB, LGA, and JFK is planned against that grid first — not after the crew is on site. A 0 ft cell means auto-authorization is not available.",
  },
  {
    code: "107",
    title: "Part 107 Waivers",
    body: "When the mission sits outside the standard Part 107 rule set — operations over people that do not fit a published category, beyond visual line of sight, multiple aircraft under one pilot, control from a moving vehicle, or altitude above 400 ft AGL — we identify the waiver, file or wait on it, and do not fly until it is in hand or the plan is revised.",
  },
  {
    code: "SGI",
    title: "SGI Waivers",
    body: "The FAA Special Governmental Interest process supports qualifying emergency operations, such as disaster response and urgent public-safety missions. Eligibility and approval depend on the operation. Routine commercial work and sporting-event restrictions do not become eligible simply because a client needs a flight quickly.",
  },
  {
    code: "LOCAL",
    title: "Local Authorizations",
    body: "FAA status is not the only gate. New York City operations typically require an NYPD drone permit. Port Authority property, parks, stadiums, and GC-controlled jobsites each have their own access rules. We identify those before a date is treated as operational.",
  },
] as const;

export const localAuthorizations = [
  {
    title: "NYPD Permit",
    body: "New York City adds a local permit on top of Part 107. Commercial operations in the five boroughs are planned against NYPD requirements, not just the FAA grid. A LAANC over the Hudson does not replace that permit.",
  },
  {
    title: "Property And GC Access",
    body: "The remote pilot still needs a place to stand, a visual line of sight, and the owner or general contractor’s clearance. A listing on a occupied street and an empty warehouse roof are different access problems.",
  },
  {
    title: "Port Authority / Airport Property",
    body: "Work on or immediately adjacent to PANYNJ facilities (EWR, TEB, LGA, JFK, PATH, ports) is coordinated as airport/property access, not as a LAANC cell alone.",
  },
  {
    title: "Parks, Venues, Stadiums",
    body: "Municipal parks, campuses, and event venues often require organizer or agency clearance. A stadium TFR or National Security Event bulletin can close the air even when the park permit is in hand.",
  },
] as const;

export const launchScenarios = [
  {
    id: "clear",
    label: "Class G pocket, no TFR",
    result: "GO" as const,
    gates: { brief: "GO", authorize: "GO", conditions: "GO" },
    note: "Uncontrolled airspace, no TFR, weather and access hold. Standard Part 107 applies. This is the simplest North Jersey window — and it is not the usual one around EWR.",
  },
  {
    id: "ewr0",
    label: "EWR Class B, LAANC 0 ft",
    result: "HOLD" as const,
    gates: { brief: "GO", authorize: "HOLD", conditions: "GO" },
    note: "A 0 ft UAS Facility Map cell will not auto-authorize. Further FAA coordination, a different altitude, or a different site is required before this is a launch.",
  },
  {
    id: "yankees",
    label: "Stadium restriction, no applicable approval",
    result: "NO-GO" as const,
    gates: { brief: "GO", authorize: "NO-GO", conditions: "NO-GO" },
    note: "A stadium restriction or event-specific TFR can prohibit flight even where LAANC is available. Check the applicable NOTAM, its exceptions and any required authorization before operating.",
  },
  {
    id: "yankees-sgi",
    label: "Event restriction, approval needs review",
    result: "HOLD" as const,
    gates: { brief: "GO", authorize: "HOLD", conditions: "HOLD" },
    note: "An approval must cover the operation, location, altitude and time under the actual restriction. SGI eligibility is mission-specific; a commercial purpose or an approval alone does not establish that current launch conditions are satisfied.",
  },
] as const;

export const deliverableOptions = [
  {
    title: "Listing Stills And Film",
    body: "Aerial stills of the house, lot, and block; curb context; and optional listing film. The Hainesport packet is the sample — house, pool, neighborhood from altitude, plus a curb still of the same property.",
    image: "/media/jobsite.webp",
  },
  {
    title: "Construction Tracking",
    body: "The same viewpoints, visit after visit, so steel, staging, and haul roads are comparable. North Munn Avenue Bridge over I-280 from the air; The Crossings at Brick Church Station — Embark apartments and the new ShopRite — from Freeway Drive at North Munn. Stakeholders can read the site without walking the mud.",
    image: "/media/neighborhood-gold.webp",
    film: "/media/overpass.mp4",
    poster: "/media/overpass.webp",
  },
  {
    title: "3D Site Models And Maps",
    body: "Overlapping capture processed into an orthomosaic, elevation visualization, and a 3D site model where included in the scope. Visual mapping for geometry and progress — not a certified survey unless the written scope says otherwise.",
    image: "/media/kiji-coverage.webp",
  },
  {
    title: "Inspection Packets",
    body: "Elevated views of structures, surfaces and surroundings, organized for qualified visual review.",
    image: "/media/work-tower.webp",
  },
] as const;

export const part107Rules = [
  {
    rule: "Night Operations",
    status: "Permitted",
    detail:
      "Allowed under Part 107 with anti-collision lighting visible for 3 statute miles (in effect since 2021). No night waiver is required for that lighting setup. Visual line of sight and the rest of the rule set still apply.",
  },
  {
    rule: "Visual Line Of Sight (14 CFR 107.31)",
    status: "Waiver required for BVLOS",
    detail:
      "The remote pilot or a visual observer must keep the aircraft in unaided sight. Beyond-visual-line-of-sight work needs a 107.31 waiver. A mapping grid that disappears behind a warehouse wall is a VLOS problem, not just a coverage problem.",
  },
  {
    rule: "Operations Over People (14 CFR 107.39)",
    status: "Category or waiver",
    detail:
      "Flying over people is allowed only for Category 1–4 aircraft that meet the published limits, or with a 107.39 waiver. A gathering, a sidewalk sale, or a busy jobsite can put people under the aircraft even if they are not the subject of the photo.",
  },
  {
    rule: "Altitude (14 CFR 107.51)",
    status: "400 ft AGL, with a structure exception",
    detail:
      "400 feet above ground level is the ceiling — AGL, not GPS altitude. You may fly up to 400 ft above a structure’s uppermost point when remaining within 400 ft of that structure. A tower or a high-rise is the usual case. Open terrain above 400 ft AGL needs a 107.51 waiver.",
  },
  {
    rule: "Moving Vehicle (14 CFR 107.25)",
    status: "Waiver except in sparse areas",
    detail:
      "Operating from a moving land or water vehicle is restricted. Over a sparsely populated area, a land vehicle is allowed; otherwise a 107.25 waiver is required. Driving between listing stops with the aircraft up is not a standard Part 107 activity.",
  },
  {
    rule: "Multiple Aircraft (14 CFR 107.35)",
    status: "Waiver, or one PIC per aircraft",
    detail:
      "One remote pilot, one small UAS, unless a 107.35 waiver is in hand. A mapping ship and a cinema ship on the same site need two certificated pilots or a waiver.",
  },
  {
    rule: "Controlled Airspace (14 CFR 107.41)",
    status: "Authorization, usually LAANC",
    detail:
      "Class B, C, D, and surface E require airspace authorization. LAANC is the near-real-time path in participating grids. Where the facility map is 0 ft or the airspace is not in LAANC, further FAA coordination is required. That is authorization, not a 107.205 waiver, in the usual case.",
  },
] as const;

export const sgiFacts = {
  qualifies: [
    "Emergency or other eligible public-interest operations accepted by the FAA through its SGI process",
    "Disaster and emergency damage assessment supporting a public agency",
    "Search and rescue or public-safety support when requested through the proper channel",
    "Other public-interest operations the FAA SGI desk accepts",
  ],
  doesNot: [
    "Real-estate twilight sets, listing film, or marketing stills",
    "Routine construction progress or commercial site packets",
    "A shortcut around a LAANC denial or a Part 107 Waiver wait",
  ],
  note: "SGI Waivers are requested through the FAA (often a regional operations / SGI desk) and can move in hours. Coordination with the restricting authority is part of the authorization. If a mission does not qualify, Baron Aerial Media will say so and re-plan under LAANC and Part 107.",
};

export const audiences = [
  {
    title: "Insurance + claims",
    body: "A timestamped nadir of a roof, a lot, and the neighboring structures — without putting an adjuster on a wet or steep surface. Visible-condition context for the file, not a cause determination.",
  },
  {
    title: "Listings + development",
    body: "Lot lines, the pool, the street, and last light in one still. Ground photography cannot show how a property sits in its block. Altitude can.",
  },
  {
    title: "Construction + owners",
    body: "The same viewpoint, visit after visit, so staging, steel, and haul roads are comparable. A GC and a lender can read the site without walking it.",
  },
  {
    title: "Roof + solar crews",
    body: "Array layout, shading from neighboring trees, and access — organized for the crew that will actually go on the roof. Not an engineering stamp.",
  },
] as const;

export type ServiceSlug =
  "real-estate" | "construction" | "inspections" | "damage" | "roof-solar" | "mapping" | "events";

export type Service = {
  slug: ServiceSlug;
  name: string;
  eyebrow: string;
  summary: string;
  assetId: string | null;
  image: string;
  deliverables: string[];
  forWhom: string;
  relatedWork?: string;
};

export const services: Service[] = [
  {
    slug: "real-estate",
    name: "Real Estate Aerial Media",
    eyebrow: "Listings + marketing",
    summary:
      "Cinematic listing films, twilight stills, and neighborhood context that make scale, access, and setting unmistakable.",
    assetId: "bam-5a22d066e92cd5be",
    image: mediaAsset("bam-5a22d066e92cd5be").src,
    deliverables: [
      "Aerial listing stills",
      "Curb + approach stills",
      "Neighborhood / access context",
      "Listing film on request",
    ],
    forWhom: "Brokers, developers, and owners selling or marketing a property.",
    relatedWork: "bancroft-listing",
  },
  {
    slug: "construction",
    name: "Construction Progress",
    eyebrow: "Jobsite documentation",
    summary:
      "Repeatable viewpoints so month-over-month progress, staging, and site context are comparable — not a new angle every visit. The sample packet is NJDOT’s North Munn Avenue Bridge over I-280 and the adjacent Crossings at Brick Church Station.",
    assetId: "bam-c86a54d78ac7542d",
    image: mediaAsset("bam-c86a54d78ac7542d").src,
    deliverables: [
      "Scheduled progress stills",
      "Site-wide context",
      "Shareable stakeholder set",
      "Optional orthomosaic",
      "3D site model on request",
      "Aerial + ground field film",
    ],
    forWhom: "Owners, GCs, lenders, and project managers.",
    relatedWork: "north-munn-bridge",
  },
  {
    slug: "inspections",
    name: "Aerial Inspections",
    eyebrow: "Hard-to-reach assets",
    summary:
      "Close-range visual documentation of roofs, facades, chimneys, and envelopes — organized for qualified review teams on the ground.",
    assetId: "bam-b5be954c2e493676",
    image: mediaAsset("bam-b5be954c2e493676").src,
    deliverables: [
      "Close-range stills of roofs, siding, and envelopes",
      "Overview + detail set",
      "Annotated frames on request",
    ],
    forWhom: "Facility managers, inspectors, and asset owners.",
    relatedWork: "water-tower",
  },
  {
    slug: "damage",
    name: "Property Damage Documentation",
    eyebrow: "Claims + visible condition",
    summary:
      "Time-stamped stills of roofs, siding, lots, and structures for owners, adjusters, and qualified professionals. Organized overview and detail sets help reviewers locate visible conditions.",
    assetId: null,
    image: "",
    deliverables: [
      "Time-stamped aerials",
      "Envelope and site-wide context",
      "Detail frames of visible conditions",
    ],
    forWhom: "Owners, public adjusters, and restoration teams.",
  },
  {
    slug: "roof-solar",
    name: "Roof + Solar Visual Documentation",
    eyebrow: "Arrays + envelope",
    summary:
      "Overview and detail imagery of roofs and solar arrays, organized for qualified client teams. Capture is scoped to the roof, array, access, and the decisions your team needs to make.",
    assetId: "bam-0779bcea72080181",
    image: mediaAsset("bam-0779bcea72080181").src,
    deliverables: [
      "Array / roof overview",
      "Panel-level stills",
      "Context of access and surroundings",
    ],
    forWhom: "Solar installers, roofers, and property teams.",
  },
  {
    slug: "mapping",
    name: "Mapping + 3D Site Models",
    eyebrow: "Scoped photogrammetry",
    summary:
      "Planned overlapping capture for orthomosaics, photogrammetry, and 3D site models when the decision needs measured context — not just a pretty frame. The sample is Kuzuri Kijiji, East Orange: the 1973 townhouse complex at 19 Freeway Drive East, mapped July 6, 2026.",
    assetId: "bam-47a220b9e5be79ac",
    image: mediaAsset("bam-47a220b9e5be79ac").src,
    deliverables: [
      "Orthomosaic",
      "DEM / elevation context",
      "3D site model",
      "Camera-station / coverage report",
      "Source frames",
    ],
    forWhom: "Survey-adjacent teams, GCs, and planners who need site geometry.",
    relatedWork: "kuzuri-kijiji",
  },
  {
    slug: "events",
    name: "Event Aerial Media",
    eyebrow: "Venues + gatherings",
    summary:
      "Aerial coverage planned around the venue, people, timing, boundaries, and the final media need — flown only with organizer and airspace clearance.",
    assetId: null,
    image: "",
    deliverables: ["Venue-scale stills", "Short aerial film", "Site context"],
    forWhom: "Organizers, venues, and civic teams.",
  },
];

export function serviceBySlug(slug: string | undefined) {
  return services.find((s) => s.slug === slug);
}

export type WorkCategory =
  | "All"
  | "Residential"
  | "Construction"
  | "Inspection"
  | "Commercial"
  | "Civic"
  | "Night"
  | "Mapping"
  | "Promotional";

export type WorkItem = {
  slug: string;
  title: string;
  category: Exclude<WorkCategory, "All">;
  assetId: string | null;
  image: string;
  summary: string;
  mission: string;
  outputs: string;
  featured?: boolean;
  film?: string;
  films?: { src: string; poster: string; caption: string }[];
  galleryFit?: "cover" | "contain";
  gallery?: { src: string; caption: string }[];
  stats?: { label: string; value: string }[];
  notes?: string;
};

export const work: WorkItem[] = [
  {
    slug: "bancroft-listing",
    title: "Hainesport Residential Listing",
    category: "Residential",
    assetId: "bam-5a22d066e92cd5be",
    image: mediaAsset("bam-5a22d066e92cd5be").src,
    summary:
      "Aerial views of the house, pool, lot and neighborhood, paired with a street-level photograph of the property.",
    mission: "Residential listing documentation",
    outputs: "Selected stills",
    gallery: [
      {
        src: "/media/jobsite.webp",
        caption: "Hainesport house, swimming pool, lawn and neighboring properties from above",
      },
      {
        src: "/media/bancroft-curb.webp",
        caption: "Front of a two-story Hainesport house with driveway, lawn and bare trees",
      },
      {
        src: "/media/work-residential.webp",
        caption: "Oblique view of a two-story house, shingle roof, lawn and surrounding trees",
      },
    ],
    galleryFit: "cover",
  },
  {
    slug: "north-munn-bridge",
    title: "North Munn Avenue Bridge Over I-280",
    category: "Construction",
    assetId: "bam-c86a54d78ac7542d",
    image: mediaAsset("bam-c86a54d78ac7542d").src,
    summary:
      "Bridge-deck works, traffic below, and surrounding access routes recorded from above for construction review.",
    mission: "Infrastructure progress documentation",
    outputs: "Aerial film + selected stills",
    gallery: [
      {
        src: "/media/neighborhood-gold.webp",
        caption: "Oblique view of a bridge with construction barriers above a highway",
      },
      {
        src: "/media/night-street.webp",
        caption: "Bridge deck and exposed structure above a highway in daylight",
      },
      {
        src: "/media/night-lot.webp",
        caption: "Bridge over a multilane highway, work vehicles and tree canopy in daylight",
      },
      {
        src: "/media/dusk-lot.webp",
        caption: "Traffic passing under a bridge under construction in daylight",
      },
      {
        src: "/media/park-twilight.webp",
        caption: "Daylight top-down view of road lanes, railway tracks and a work zone",
      },
    ],
    galleryFit: "cover",
    film: "/media/overpass.mp4",
  },
  {
    slug: "brick-church-village",
    title: "The Crossings at Brick Church Station",
    category: "Promotional",
    assetId: "bam-7caf94ab6a612004",
    image: mediaAsset("bam-7caf94ab6a612004").src,
    summary:
      "Apartment buildings, courtyards, parking and access streets presented together in daylight aerial stills and film.",
    mission: "Mixed-use property media",
    outputs: "Daylight aerial film + stills",
    gallery: [
      {
        src: "/media/neighborhood-film.webp",
        caption: "The Crossings apartment roofs, courtyard and parking under daylight",
      },
      {
        src: "/media/brick-church-village.webp",
        caption: "Apartment buildings, parking garage and access streets at The Crossings",
      },
      {
        src: "/media/brick-church-apartments.webp",
        caption: "Aerial view of The Crossings with apartment blocks and parking deck",
      },
      {
        src: "/media/overpass-oblique.webp",
        caption: "Apartment rooftops and two landscaped courtyards viewed straight down",
      },
    ],
    galleryFit: "cover",
    film: "/media/neighborhood-film.mp4",
  },
  {
    slug: "water-tower",
    title: "Milltown Water Tower",
    category: "Inspection",
    assetId: "bam-b5be954c2e493676",
    image: mediaAsset("bam-b5be954c2e493676").src,
    summary:
      "Elevated views of a municipal water tower document the exterior and its surroundings for visual review.",
    mission: "Water-tower exterior documentation",
    outputs: "Selected stills",
    gallery: [
      {
        src: "/media/work-tower.webp",
        caption: "Green Borough of Milltown water tower above a tree canopy",
      },
    ],
    galleryFit: "cover",
  },
  {
    slug: "solar-rooftop",
    title: "Commercial Solar Rooftop",
    category: "Commercial",
    assetId: "bam-0779bcea72080181",
    image: mediaAsset("bam-0779bcea72080181").src,
    summary:
      "Panel layout, rooftop equipment and access clearances visible together in an aerial overview.",
    mission: "Solar-roof visual documentation",
    outputs: "Selected stills",
    gallery: [
      {
        src: "/media/svc-solar.webp",
        caption: "Solar panels and rooftop equipment on a white commercial roof",
      },
    ],
    galleryFit: "cover",
  },
  {
    slug: "kuzuri-kijiji",
    title: "Kuzuri Kijiji, East Orange",
    category: "Mapping",
    assetId: "bam-47a220b9e5be79ac",
    image: mediaAsset("bam-47a220b9e5be79ac").src,
    summary:
      "Townhouses, parking and access roads recorded as an orthomosaic, with separate elevation and coverage visualizations.",
    mission: "Photogrammetry / site map — Kuzuri Kijiji, East Orange",
    outputs: "Orthomosaic + DEM + coverage report",
    featured: true,
    galleryFit: "contain",
    gallery: [
      {
        src: "/media/kiji-ortho.webp",
        caption: "Orthomosaic of Kuzuri Kijiji showing townhouses, parking and access roads",
      },
      {
        src: "/media/kiji-dem.webp",
        caption: "Color-coded elevation visualization of the Kuzuri Kijiji site",
      },
      {
        src: "/media/kiji-coverage.webp",
        caption: "Kuzuri Kijiji coverage visualization with capture locations overlaid",
      },
    ],
    stats: [
      {
        label: "Site",
        value: "Kuzuri Kijiji · 19 Freeway Dr E, East Orange",
      },
      {
        label: "Opened",
        value: "1973 · 247 townhouse units on 8.2 acres",
      },
      {
        label: "Captured",
        value: "Jul 6, 2026",
      },
      {
        label: "Frames aligned",
        value: "123 / 123 (100%)",
      },
      {
        label: "Coverage",
        value: "99.7% of AOI",
      },
      {
        label: "Mapped area",
        value: "491,250 ft² (~11.3 acres, complex + surroundings)",
      },
      {
        label: "Ortho GSD",
        value: "1.24 in/px",
      },
      {
        label: "DEM GSD",
        value: "4.98 in/px",
      },
      {
        label: "Point cloud",
        value: "5.1 million pts · 10.5 pts/ft²",
      },
      {
        label: "Sensor",
        value: "DJI FC3411",
      },
    ],
    notes:
      "The existing site was processed in DroneDeploy. The displayed color DEM is a visualization, not a calibrated height raster. Visual mapping and relative context do not replace a certified survey.",
  },
  {
    slug: "city-context",
    title: "City and Infrastructure Context",
    category: "Civic",
    assetId: "bam-aee408d852a637e8",
    image: mediaAsset("bam-aee408d852a637e8").src,
    summary:
      "City blocks, road networks and surrounding development provide the wider context for a property or infrastructure decision.",
    mission: "Area and access documentation",
    outputs: "Selected stills",
    gallery: [
      {
        src: "/media/city-dusk.webp",
        caption: "City blocks, trees and buildings under a blue daytime sky",
      },
      {
        src: "/media/hero-city.webp",
        caption: "Wide city panorama with highway ramps under a blue evening sky",
      },
      {
        src: "/media/work-interchange.webp",
        caption:
          "Large highway interchange, curved ramps, road traffic and surrounding development",
      },
    ],
    galleryFit: "cover",
  },
  {
    slug: "night-highway",
    title: "Highway Light Trails",
    category: "Night",
    assetId: "bam-73b6b497b6513bb2",
    image: mediaAsset("bam-73b6b497b6513bb2").src,
    summary: "Vehicle light trails and illuminated roads describe the city after dark.",
    mission: "After-dark aerial media",
    outputs: "Selected stills",
    gallery: [
      {
        src: "/media/featured-night.webp",
        caption: "Nighttime highway with vehicle light trails, buildings and illuminated roads",
      },
    ],
    galleryFit: "cover",
  },
  {
    slug: "commercial-plaza",
    title: "Office and Parking Context",
    category: "Commercial",
    assetId: "bam-f8002b3625ac1715",
    image: mediaAsset("bam-f8002b3625ac1715").src,
    summary: "Office towers and structured parking presented together in an elevated view.",
    mission: "Commercial property documentation",
    outputs: "Selected stills",
    gallery: [
      {
        src: "/media/work-commercial.webp",
        caption: "Office towers above a multilevel parking structure",
      },
    ],
    galleryFit: "cover",
  },
  {
    slug: "civic-campus",
    title: "Church and Grounds",
    category: "Civic",
    assetId: "bam-9bccbee92ae23118",
    image: mediaAsset("bam-9bccbee92ae23118").src,
    summary: "A church, its grounds, paths and neighboring buildings in a single aerial view.",
    mission: "Institutional property documentation",
    outputs: "Selected stills",
    gallery: [
      {
        src: "/media/work-civic.jpg",
        caption: "Church, tower, lawn, paths and nearby buildings from above",
      },
    ],
    galleryFit: "cover",
  },
];

export const workFilters: WorkCategory[] = [
  "All",
  "Promotional",
  "Construction",
  "Residential",
  "Inspection",
  "Mapping",
  "Commercial",
  "Civic",
  "Night",
];

export type FieldMedia = {
  kind: "still" | "video";
  src: string;
  poster?: string;
  caption: string;
  role: string;
};

export type FieldJob = {
  id: string;
  jobId: string;
  title: string;
  kicker: string;
  date?: string;
  slug: string;
  blurb: string;
  items: FieldMedia[];
};

export const fieldJobs: FieldJob[] = [
  {
    id: "bancroft-listing",
    jobId: "BAM-BANCROFT-LISTING",
    kicker: "Residential",
    title: "Hainesport Residential Listing",
    slug: "bancroft-listing",
    blurb:
      "Aerial views of the house, pool, lot and neighborhood, paired with a street-level photograph of the property.",
    items: [
      {
        kind: "still",
        src: "/media/jobsite.webp",
        caption: "Hainesport house, swimming pool, lawn and neighboring properties from above",
        role: "Selected still",
      },
      {
        kind: "still",
        src: "/media/bancroft-curb.webp",
        caption: "Front of a two-story Hainesport house with driveway, lawn and bare trees",
        role: "Selected still",
      },
      {
        kind: "still",
        src: "/media/work-residential.webp",
        caption: "Oblique view of a two-story house, shingle roof, lawn and surrounding trees",
        role: "Selected still",
      },
    ],
  },
  {
    id: "north-munn-bridge",
    jobId: "BAM-NORTH-MUNN-BRIDGE",
    kicker: "Construction",
    title: "North Munn Avenue Bridge Over I-280",
    slug: "north-munn-bridge",
    blurb:
      "Bridge-deck works, traffic below, and surrounding access routes recorded from above for construction review.",
    items: [
      {
        kind: "still",
        src: "/media/neighborhood-gold.webp",
        caption: "Oblique view of a bridge with construction barriers above a highway",
        role: "Selected still",
      },
      {
        kind: "still",
        src: "/media/night-street.webp",
        caption: "Bridge deck and exposed structure above a highway in daylight",
        role: "Selected still",
      },
      {
        kind: "still",
        src: "/media/night-lot.webp",
        caption: "Bridge over a multilane highway, work vehicles and tree canopy in daylight",
        role: "Selected still",
      },
      {
        kind: "still",
        src: "/media/dusk-lot.webp",
        caption: "Traffic passing under a bridge under construction in daylight",
        role: "Selected still",
      },
      {
        kind: "still",
        src: "/media/park-twilight.webp",
        caption: "Daylight top-down view of road lanes, railway tracks and a work zone",
        role: "Selected still",
      },
      {
        kind: "video",
        src: "/media/overpass.mp4",
        poster: "/media/neighborhood-gold.webp",
        caption: "Aerial film of bridge works over I-280",
        role: "Field film",
      },
    ],
  },
  {
    id: "brick-church-village",
    jobId: "BAM-BRICK-CHURCH-VILLAGE",
    kicker: "Promotional",
    title: "The Crossings at Brick Church Station",
    slug: "brick-church-village",
    blurb:
      "Apartment buildings, courtyards, parking and access streets presented together in daylight aerial stills and film.",
    items: [
      {
        kind: "still",
        src: "/media/neighborhood-film.webp",
        caption: "The Crossings apartment roofs, courtyard and parking under daylight",
        role: "Selected still",
      },
      {
        kind: "still",
        src: "/media/brick-church-village.webp",
        caption: "Apartment buildings, parking garage and access streets at The Crossings",
        role: "Selected still",
      },
      {
        kind: "still",
        src: "/media/brick-church-apartments.webp",
        caption: "Aerial view of The Crossings with apartment blocks and parking deck",
        role: "Selected still",
      },
      {
        kind: "still",
        src: "/media/overpass-oblique.webp",
        caption: "Apartment rooftops and two landscaped courtyards viewed straight down",
        role: "Selected still",
      },
      {
        kind: "video",
        src: "/media/neighborhood-film.mp4",
        poster: "/media/neighborhood-film.webp",
        caption: "Daylight aerial film of The Crossings",
        role: "Field film",
      },
    ],
  },
  {
    id: "water-tower",
    jobId: "BAM-WATER-TOWER",
    kicker: "Inspection",
    title: "Milltown Water Tower",
    slug: "water-tower",
    blurb:
      "Elevated views of a municipal water tower document the exterior and its surroundings for visual review.",
    items: [
      {
        kind: "still",
        src: "/media/work-tower.webp",
        caption: "Green Borough of Milltown water tower above a tree canopy",
        role: "Selected still",
      },
    ],
  },
  {
    id: "solar-rooftop",
    jobId: "BAM-SOLAR-ROOFTOP",
    kicker: "Commercial",
    title: "Commercial Solar Rooftop",
    slug: "solar-rooftop",
    blurb:
      "Panel layout, rooftop equipment and access clearances visible together in an aerial overview.",
    items: [
      {
        kind: "still",
        src: "/media/svc-solar.webp",
        caption: "Solar panels and rooftop equipment on a white commercial roof",
        role: "Selected still",
      },
    ],
  },
  {
    id: "kuzuri-kijiji",
    jobId: "BAM-KUZURI-KIJIJI",
    kicker: "Mapping",
    title: "Kuzuri Kijiji, East Orange",
    slug: "kuzuri-kijiji",
    blurb:
      "Townhouses, parking and access roads recorded as an orthomosaic, with separate elevation and coverage visualizations.",
    items: [
      {
        kind: "still",
        src: "/media/kiji-ortho.webp",
        caption: "Orthomosaic of Kuzuri Kijiji showing townhouses, parking and access roads",
        role: "Selected still",
      },
      {
        kind: "still",
        src: "/media/kiji-dem.webp",
        caption: "Color-coded elevation visualization of the Kuzuri Kijiji site",
        role: "Selected still",
      },
      {
        kind: "still",
        src: "/media/kiji-coverage.webp",
        caption: "Kuzuri Kijiji coverage visualization with capture locations overlaid",
        role: "Selected still",
      },
    ],
  },
];

export const surveyPatterns = [
  {
    id: "nadir",
    name: "Nadir lawnmower",
    overlap: "Typically 75% front / 70% side",
    produces: "Orthomosaic, DSM/DEM, weak facades",
    why: "The aircraft flies parallel lines with the camera pointed straight down. High overlap is what lets software stitch a measured map. Rooftops and pavement read clearly; walls do not.",
  },
  {
    id: "cross",
    name: "Crosshatch",
    overlap: "Two perpendicular lawnmower passes",
    produces: "Stronger 3D mesh, longer flight",
    why: "A second grid at 90° gives the reconstructor more ray angles on the same roof. Better volume, more minutes in the air, still weak on vertical faces.",
  },
  {
    id: "oblique",
    name: "Oblique orbit",
    overlap: "Ring or grid with the camera tilted ~30–45°",
    produces: "Facades, context, weaker roof GSD",
    why: "The camera looks across the site instead of down. Walls, eaves, and tree trunks appear. A pure oblique set is a poor standalone ortho unless you also fly nadir.",
  },
  {
    id: "flown",
    name: "Oblique capture study",
    overlap: "123 frames aligned · Jul 6, 2026",
    produces: "1.24 in/px ortho · 4.98 in/px DEM · 5.1M pts",
    why: "Kuzuri Kijiji — 19 Freeway Drive East, East Orange, near I-280 and the Garden State Parkway — was flown entirely oblique. Coverage of the AOI was 99.7%. Camera GPS RMSE is about 11 ft. This maps the existing 1973 townhouse complex and surroundings, not the approved 662-unit redevelopment. Useful visual and relative-elevation context. Not RTK survey control, and not a sealed plat.",
  },
] as const;

export type PlannerKey = ServiceSlug;

export const plannerOptions: {
  key: PlannerKey;
  title: string;
  hint: string;
}[] = [
  {
    key: "real-estate",
    title: "Sell or market a property",
    hint: "Listing, brokerage, development",
  },
  { key: "construction", title: "Document a build", hint: "Progress, stakeholders, mapping" },
  { key: "inspections", title: "Inspect an asset", hint: "Roof, facade, tower, envelope" },
  { key: "damage", title: "Document damage", hint: "Claim context, visible condition" },
  { key: "roof-solar", title: "Capture a roof or array", hint: "Solar, roofing, maintenance" },
  { key: "mapping", title: "Map a site", hint: "Orthomosaic, 3D, geometry" },
  { key: "events", title: "Document a venue or event", hint: "Organizer clearance, venue context" },
];

export const trustChecks = [
  "Airspace class, LAANC grid, and USS authorization",
  "Part 107 Waivers when the rule set does not cover the operation",
  "SGI Waivers only when the mission qualifies — subject to mission eligibility and the applicable restriction",
  "Local authorizations: NYPD permit for New York City, property/GC access, venues",
  "NOTAMs, TFRs, National Security Events, and airport surfaces",
  "Site access, people on the ground, and privacy",
  "Weather, lighting, VLOS, and requested deliverable boundaries",
];

export const disclaimer =
  "A submitted brief starts a feasibility review. It does not authorize a flight, confirm a date, or create a contract. Conditions and approvals can change what is operationally possible.";
