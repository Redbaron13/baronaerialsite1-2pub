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
  { to: "/mission-planner", label: "Mission Planner" },
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
    body: "After the flight: cull, color, align, and reconstruct. Photogrammetry, 3D site models, construction tracking sets, and inspection packets are built here. A map is not a JPEG of a map — it is processed data.",
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
    body: "Newark sits under and beside Newark Liberty Class B, with Teterboro Class D to the north and the New York metro Class B complex to the east. Class G pockets exist, but most North Jersey work is controlled airspace. Class is identified from the sectional and the current UAS Facility Map. The 3D chart shows how those volumes stack over the ground we actually fly.",
  },
  {
    id: "authorize",
    n: "03",
    title: "Authorize",
    kicker: "LAANC, 107, TFR, local",
    panel: "chart",
    body: "In participating Class B, C, D, and surface E, LAANC is how a Part 107 operator requests altitude through an FAA-approved UAS Service Supplier. The grid is in 50-foot steps. A cell that returns 0 ft is a no — not a low ceiling. We also read TFRs, National Security Event notices and bulletins, and whether coordination is possible. Local authorizations sit on this layer too: NYPD permit for New York City operations, property or GC access, Port Authority property, parks, and venue clearance.",
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
    body: "Special Government Interest Waivers are an expedited FAA path. They can authorize commercial drone operations inside a Temporary Flight Restriction for a National Security Event — a Yankees game is the usual local example — when the FAA SGI desk approves and coordination is in place. They also cover qualifying emergency, disaster, and public-safety support. They are measured in hours, not weeks. They do not cover a realtor’s twilight set or routine construction progress.",
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
    body: "SGI Waivers are an expedited FAA path. They can permit commercial drone operations inside a TFR for a National Security Event — for example a Yankees game — with FAA approval and coordination. They also cover qualifying emergency, disaster, and public-safety support. Baron Aerial Media uses SGI Waivers only when the mission actually qualifies — never as a shortcut around LAANC or a standing Part 107 Waiver.",
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
    label: "Yankees NSSE TFR, no SGI Waivers",
    result: "NO-GO" as const,
    gates: { brief: "GO", authorize: "NO-GO", conditions: "NO-GO" },
    note: "A National Security Event TFR around a Yankees game closes the air to standard Part 107 commercial work. Without SGI Waivers and FAA coordination, this is a NO-GO — even if LAANC looked clean the day before.",
  },
  {
    id: "yankees-sgi",
    label: "Yankees NSSE TFR + SGI Waivers",
    result: "GO" as const,
    gates: { brief: "GO", authorize: "GO", conditions: "GO" },
    note: "SGI Waivers can permit commercial operations inside that TFR when the FAA SGI desk approves and coordination is in place. The window is still constrained: altitude, location, and timing come from the authorization, not from the original brief.",
  },
] as const;

export const deliverableOptions = [
  {
    title: "Listing Stills And Film",
    body: "Aerial stills of the house, lot, and block; curb context; and optional listing film. The Hainesport packet is the sample — house, pool, neighborhood from altitude, plus a curb still of the same property.",
    image: "/media/bancroft-aerial.webp",
  },
  {
    title: "Construction Tracking",
    body: "The same viewpoints, visit after visit, so steel, staging, and haul roads are comparable. North Munn Avenue Bridge over I-280 from the air; The Crossings at Brick Church Station — Embark apartments and the new ShopRite — from Freeway Drive at North Munn. Stakeholders can read the site without walking the mud.",
    image: "/media/overpass.webp",
    film: "/media/overpass.mp4",
    poster: "/media/overpass.webp",
  },
  {
    title: "3D Site Models And Maps",
    body: "Overlapping capture processed into an orthomosaic, DEM, and a 3D site model, with camera stations shown so a client can see how the mesh was built. Visual mapping for geometry and progress — not a certified survey unless the written scope says otherwise.",
    image: "/media/photogrammetry-cameras.webp",
  },
  {
    title: "Inspection Packets",
    body: "Close-range stills of roofs, siding, chimneys, and envelopes, plus an overview for orientation. Organized for a qualified reviewer on the ground. We document what is visible. We do not stamp condition.",
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
    "Commercial operations inside a TFR for a National Security Event — a Yankees game is the usual local example — with FAA SGI desk approval and coordination",
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
  | "real-estate"
  | "construction"
  | "inspections"
  | "damage"
  | "roof-solar"
  | "mapping"
  | "events";

export type Service = {
  slug: ServiceSlug;
  name: string;
  eyebrow: string;
  summary: string;
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
    image: "/media/neighborhood-gold.webp",
    deliverables: ["Aerial listing stills", "Curb + approach stills", "Neighborhood / access context", "Listing film on request"],
    forWhom: "Brokers, developers, and owners selling or marketing a property.",
    relatedWork: "twilight-neighborhood",
  },
  {
    slug: "construction",
    name: "Construction Progress",
    eyebrow: "Jobsite documentation",
    summary:
      "Repeatable viewpoints so month-over-month progress, staging, and site context are comparable — not a new angle every visit. The sample packet is NJDOT’s North Munn Avenue Bridge over I-280 and the adjacent Crossings at Brick Church Station.",
    image: "/media/overpass.webp",
    deliverables: ["Scheduled progress stills", "Site-wide context", "Shareable stakeholder set", "Optional orthomosaic", "3D site model on request", "Aerial + ground field film"],
    forWhom: "Owners, GCs, lenders, and project managers.",
    relatedWork: "north-munn-bridge",
  },
  {
    slug: "inspections",
    name: "Aerial Inspections",
    eyebrow: "Hard-to-reach assets",
    summary:
      "Close-range visual documentation of roofs, facades, chimneys, and envelopes — organized for qualified review teams on the ground. The sample stills on this site are a residential roof and siding, not a tower.",
    image: "/media/work-tower.webp",
    deliverables: ["Close-range stills of roofs, siding, and envelopes", "Overview + detail set", "Annotated frames on request"],
    forWhom: "Facility managers, inspectors, and asset owners.",
    relatedWork: "envelope-close",
  },
  {
    slug: "damage",
    name: "Property Damage Documentation",
    eyebrow: "Claims + visible condition",
    summary:
      "Time-stamped stills of roofs, siding, lots, and structures for owners, adjusters, and qualified professionals. Baron Aerial Media documents what is visible — we do not certify cause or condition. The sample still is a residential envelope, not a storm scene.",
    image: "/media/work-residential.webp",
    deliverables: ["Time-stamped aerials", "Envelope and site-wide context", "Detail frames of visible conditions"],
    forWhom: "Owners, public adjusters, and restoration teams.",
  },
  {
    slug: "roof-solar",
    name: "Roof + Solar Visual Documentation",
    eyebrow: "Arrays + envelope",
    summary:
      "Overview and detail imagery of roofs and solar arrays, organized for qualified client teams. The commercial still on this page is a warehouse roof and lot — array-specific stills are scoped per site. Not an engineering report and not a condition certification.",
    image: "/media/warehouse-lot.webp",
    deliverables: ["Array / roof overview", "Panel-level stills", "Context of access and surroundings"],
    forWhom: "Solar installers, roofers, and property teams.",
  },
  {
    slug: "mapping",
    name: "Mapping + 3D Site Models",
    eyebrow: "Scoped photogrammetry",
    summary:
      "Planned overlapping capture for orthomosaics, photogrammetry, and 3D site models when the decision needs measured context — not just a pretty frame. The sample is Kuzuri Kijiji, East Orange: the 1973 townhouse complex at 19 Freeway Drive East, mapped July 6, 2026.",
    image: "/media/kiji-ortho.webp",
    deliverables: ["Orthomosaic", "DEM / elevation context", "3D site model", "Camera-station / coverage report", "Source frames"],
    forWhom: "Survey-adjacent teams, GCs, and planners who need site geometry.",
    relatedWork: "kuzuri-kijiji",
  },
  {
    slug: "events",
    name: "Event Aerial Media",
    eyebrow: "Venues + gatherings",
    summary:
      "Aerial coverage planned around the venue, people, timing, boundaries, and the final media need — flown only with organizer and airspace clearance. The sample still is a recreation field and running track at twilight, not a concert.",
    image: "/media/park-twilight.webp",
    deliverables: ["Venue-scale stills", "Short aerial film", "Site context"],
    forWhom: "Organizers, venues, and civic teams.",
  },
];

export function serviceBySlug(slug: string | undefined) {
  return services.find((s) => s.slug === slug);
}

export type WorkCategory = "All" | "Residential" | "Construction" | "Inspection" | "Commercial" | "Civic" | "Night" | "Mapping" | "Promotional";

export type WorkItem = {
  slug: string;
  title: string;
  category: Exclude<WorkCategory, "All">;
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
    image: "/media/bancroft-aerial.webp",
    summary:
      "A suburban listing from altitude — house, lot, pool, and the neighborhood in one still — with a curb photograph from the same packet.",
    mission: "Residential listing media",
    outputs: "Aerial still + curb still",
    galleryFit: "cover",
    gallery: [
      { src: "/media/bancroft-aerial.webp", caption: "Aerial listing still — lot, pool, neighborhood" },
      { src: "/media/bancroft-curb.webp", caption: "Street-level curb photograph of the same listing, with the Baron Aerial Media mark" },
    ],
    stats: [
      { label: "Location", value: "Hainesport, NJ" },
      { label: "Packet", value: "Listing stills, 2023" },
      { label: "Views", value: "Aerial + curb" },
    ],
    notes:
      "The address is on the aerial because that is how the listing still was delivered. Ground photography is from the same property packet. An interior 360 from the assignment was held back: an unrectified panorama with staging clutter, not a finished interior still. Duplicate street-level frames were not published.",
  },
  {
    slug: "north-munn-bridge",
    title: "North Munn Avenue Bridge Over I-280",
    category: "Construction",
    image: "/media/overpass.webp",
    film: "/media/overpass.mp4",
    films: [
      {
        src: "/media/overpass.mp4",
        poster: "/media/overpass.webp",
        caption:
          "Nadir hold over the North Munn Avenue Bridge over I-280 — steel in the span, orange barrier, live interstate traffic below",
      },
      {
        src: "/media/jobsite-ground.mp4",
        poster: "/media/jobsite-ground.webp",
        caption:
          "Ground film: crew in a high-vis vest and dump trucks on the North Munn Avenue / I-280 jobsite, Embark apartments behind them",
      },
    ],
    summary:
      "NJDOT’s $20.3 million, federally funded replacement of the North Munn Avenue Bridge decks and superstructure over Interstate 280 in East Orange. Steel in the span, orange barrier, dump trucks on the deck, live traffic in the lanes below. The Freeway Drive work zone meets North Munn Avenue — the same dirt the hyperlapse was shot from. Construction is scheduled through spring 2028.",
    mission: "Infrastructure progress — North Munn Avenue Bridge over I-280, East Orange",
    outputs: "Aerial film + ground film + stills",
    galleryFit: "cover",
    gallery: [
      {
        src: "/media/overpass-oblique.webp",
        caption:
          "Dump trucks on the steel deck of the North Munn Avenue Bridge reconstruction over I-280, orange barrier, highway lanes below",
      },
      {
        src: "/media/overpass-approach.webp",
        caption:
          "Looking along the North Munn Avenue Bridge reconstruction — dump trucks, staging, and I-280 traffic on the same span",
      },
      {
        src: "/media/overpass-ground.webp",
        caption:
          "Dump truck filling the frame on the Munn Avenue / I-280 reconstruction jobsite — orange barrier and construction fencing",
      },
      {
        src: "/media/south-munn-staging.webp",
        caption:
          "Haul road and dump trucks in the dirt at Freeway Drive / North Munn Avenue, the approach to the I-280 bridge reconstruction",
      },
    ],
    stats: [
      { label: "Project", value: "North Munn Ave Bridge over I-280" },
      { label: "Owner", value: "NJDOT · federally funded" },
      { label: "Value", value: "$20.3 million" },
      { label: "Scope", value: "Deck, superstructure, bearings, steel, sidewalk, shoulders" },
      { label: "Schedule", value: "Through spring 2028" },
      { label: "Captured", value: "Jun 24–28, 2026" },
      { label: "Sensor", value: "DJI FC3411" },
    ],
    notes:
      "NJDOT’s named project is the North Munn Avenue Bridge over I-280: demolish and reconstruct concrete decks, repair substructure and structural steel, replace bearings, rebuild the sidewalk, and add shoulders in both directions. Freeway Drive lane work at the North Munn Avenue intersection is part of the same jobsite. North Munn Avenue has been closed and detoured during steel work. Aerial nadir film is a 7.5 s hold from Jun 25. Ground film of crew and dump trucks is from the same jobsite. Promotional media for Embark and ShopRite at The Crossings is a separate packet.",
  },
  {
    slug: "brick-church-village",
    title: "Embark + ShopRite At The Crossings",
    category: "Promotional",
    image: "/media/neighborhood-film.webp",
    film: "/media/neighborhood-film.mp4",
    films: [
      {
        src: "/media/neighborhood-film.mp4",
        poster: "/media/neighborhood-film.webp",
        caption:
          "Promotional aerial flyover of Embark apartments, the parking deck, and the new ShopRite at Brick Church Station — twilight, East Orange",
      },
    ],
    summary:
      "Promotional media for Embark apartments and the new ShopRite at The Crossings at Brick Church Station: an aerial twilight flyover of the buildings and parking, plus a ground hyperlapse shot from the dirt at North Munn Avenue, looking at the same redevelopment.",
    mission: "Promotional media — Embark and ShopRite at The Crossings, Brick Church Station, East Orange",
    outputs: "Promotional aerial film + ground hyperlapse stills",
    galleryFit: "cover",
    gallery: [
      {
        src: "/media/brick-church-village.webp",
        caption:
          "Hyperlapse frame from the dirt at North Munn Avenue: Embark apartment buildings, parking, dump trucks, and the ShopRite building at The Crossings",
      },
      {
        src: "/media/brick-church-apartments.webp",
        caption:
          "Hyperlapse frame: Embark apartments, a dump truck on the dirt, and the North Munn Avenue Bridge structure overhead",
      },
    ],
    stats: [
      { label: "Project", value: "The Crossings at Brick Church Station" },
      { label: "Clients / site", value: "Embark apartments · new ShopRite" },
      { label: "Developers", value: "Triangle Equities · Incline Capital" },
      { label: "Transit", value: "Brick Church NJ Transit · ~25 min to Midtown" },
      { label: "Aerial film", value: "Twilight promotional flyover" },
      { label: "Ground", value: "Hyperlapse stills from North Munn dirt" },
      { label: "Adjacent", value: "North Munn Ave Bridge over I-280" },
    ],
    notes:
      "This packet is promotional media for Embark and ShopRite at The Crossings — not a generic neighborhood flyover. The aerial film is a twilight pass over the apartments, parking, and grocery. The stills are frames from a ground hyperlapse: the camera moves through the jobsite over time; those frames are then sequenced so the passage compresses. The North Munn Avenue Bridge over I-280 sits in the same geography and is a separate construction packet.",
  },
  {
    slug: "jobsite-cut",
    title: "House Under Construction",
    category: "Construction",
    image: "/media/jobsite.webp",
    summary:
      "A suburban lot in framing — lumber stacked on the lot, an open foundation, an excavator, and neighboring houses in one still. Progress a builder or owner can read without walking the mud.",
    mission: "Residential construction still",
    outputs: "Stills",
    galleryFit: "cover",
    gallery: [{ src: "/media/jobsite.webp", caption: "House under construction — excavator, stacked lumber, open foundation, neighboring lots from altitude" }],
  },
  {
    slug: "envelope-close",
    title: "Roof And Siding Close-Up",
    category: "Inspection",
    image: "/media/work-tower.webp",
    summary:
      "Close-range stills of a residential roof, chimney, shingles, and siding. The kind of envelope packet a roofer or inspector actually uses — not a neighborhood listing aerial.",
    mission: "Envelope inspection stills",
    outputs: "Close-range stills",
    galleryFit: "cover",
    gallery: [
      { src: "/media/work-tower.webp", caption: "Close-range still of a residential roof, chimney, and siding" },
      { src: "/media/work-residential.webp", caption: "Close-range still of shingles, windows, and siding on the same house" },
    ],
  },
  {
    slug: "rail-station",
    title: "Highway Ramps And Parking Lot",
    category: "Civic",
    image: "/media/rail-station.webp",
    film: "/media/highway-ramps.mp4",
    films: [
      {
        src: "/media/highway-ramps.mp4",
        poster: "/media/rail-station.webp",
        caption:
          "Aerial clip of highway ramps, a large parking lot, and tree canopy from directly above — July 9, 2026. Under a second; published as film, not frozen as a still.",
      },
    ],
    summary:
      "Aerial clip of highway ramps, a large parking lot, and tree canopy in one frame. Captured July 9, 2026. A second still shows a wider cloverleaf with suburban lots. Site identity is not labeled on the frame, so it is not named here.",
    mission: "Civic / infrastructure context",
    outputs: "Aerial clip + stills",
    galleryFit: "cover",
    gallery: [
      { src: "/media/work-interchange.webp", caption: "Wider cloverleaf — highway ramps, parking lots, and suburban lots from altitude" },
    ],
    stats: [
      { label: "Captured", value: "Jul 9, 2026" },
      { label: "Sensor", value: "DJI 3840×2160" },
      { label: "Clip", value: "0.67 s aerial, looped as film" },
    ],
    notes:
      "The source clip is under a second. It plays as video. The site is not labeled on the frame — it is not identified as a named interchange on this page.",
  },
  {
    slug: "twilight-neighborhood",
    title: "Suburban Block At Last Light",
    category: "Residential",
    image: "/media/neighborhood-oblique.webp",
    summary:
      "Oblique still of a suburban block at last light — roofs, streets, parked cars, and tree canopy. The site is not labeled on the frame.",
    mission: "Residential / neighborhood context",
    outputs: "Last-light still",
    galleryFit: "cover",
    gallery: [
      {
        src: "/media/neighborhood-oblique.webp",
        caption:
          "Oblique at last light — suburban roofs, streets, parked cars, and tree canopy. Site not labeled on the frame.",
      },
    ],
    stats: [
      { label: "Light", value: "Last light" },
      { label: "Sensor", value: "DJI FC3411" },
    ],
    notes:
      "This still is a suburban block at last light. It is not the Embark / ShopRite promotional flyover — that film is in the Embark + ShopRite packet.",
  },
  {
    slug: "warehouse-sunset",
    title: "Warehouse At Last Light",
    category: "Commercial",
    image: "/media/warehouse-sunset.webp",
    summary:
      "A large commercial building, parking, and access at sunset — site-wide context a lease, listing, or facilities packet can actually use.",
    mission: "Commercial site documentation",
    outputs: "Oblique stills",
    galleryFit: "cover",
    gallery: [
      { src: "/media/warehouse-sunset.webp", caption: "Oblique at sunset — large commercial building, parking lot, and access drive" },
      { src: "/media/warehouse-lot.webp", caption: "Second oblique of the same warehouse — lot, dock side, last light" },
    ],
    stats: [
      { label: "Captured", value: "Jul 9, 2026" },
      { label: "Sensor", value: "DJI FC3411" },
      { label: "Views", value: "Two obliques" },
    ],
  },
  {
    slug: "night-lots",
    title: "After-Dark Lots And Streets",
    category: "Night",
    image: "/media/night-lot.webp",
    summary:
      "Illuminated parking and neighborhood streets after dark — night operations stills, not a daytime plate with the lights pushed.",
    mission: "Night site context",
    outputs: "Night stills",
    galleryFit: "cover",
    gallery: [
      { src: "/media/night-lot.webp", caption: "Lit parking lot, cars in stalls, and streetlights after dark" },
      { src: "/media/night-street.webp", caption: "Neighborhood streets and a second lot after dark — July 9 night sortie" },
      { src: "/media/dusk-lot.webp", caption: "Parking lot at last light, before full night — cars, lamps, and the surrounding block" },
    ],
    stats: [
      { label: "Captured", value: "Jul 9, 2026" },
      { label: "Sensor", value: "DJI FC3411" },
      { label: "Window", value: "Night" },
    ],
  },
  {
    slug: "city-dusk",
    title: "City Fabric At Dusk",
    category: "Civic",
    image: "/media/city-dusk.webp",
    summary:
      "Dense urban fabric, roads, and canopy at dusk — civic scale in one planned still.",
    mission: "Civic / area context",
    outputs: "Overview stills",
    galleryFit: "cover",
    gallery: [
      { src: "/media/city-dusk.webp", caption: "Dense city blocks, roads, and tree canopy at dusk — July 8" },
    ],
    stats: [
      { label: "Captured", value: "Jul 8, 2026" },
      { label: "Sensor", value: "DJI FC3411" },
    ],
  },
  {
    slug: "recreation-field",
    title: "Recreation Field At Twilight",
    category: "Civic",
    image: "/media/park-twilight.webp",
    summary:
      "Aerial stills of recreation fields at twilight — a running track oval with a green infield, and a soccer pitch surrounded by trees, parking, and houses. The facility is not named on the frame.",
    mission: "Civic / recreation context",
    outputs: "Twilight stills",
    galleryFit: "cover",
    gallery: [
      {
        src: "/media/park-twilight.webp",
        caption:
          "Recreation field with a running track, green infield, surrounding trees and houses at twilight",
      },
      {
        src: "/media/neighborhood-gold.webp",
        caption:
          "Soccer pitch and parking at golden hour, tree canopy and suburban lots around the field. Not a roof-and-street neighborhood still.",
      },
    ],
    stats: [
      { label: "Light", value: "Twilight / golden hour" },
      { label: "Sensor", value: "DJI FC3411" },
    ],
    notes:
      "These frames show sports fields, not a residential listing and not Embark. The facility is not labeled on the frame, so it is not named here.",
  },
  {
    slug: "kuzuri-kijiji",
    title: "Kuzuri Kijiji, East Orange",
    category: "Mapping",
    image: "/media/kiji-ortho.webp",
    summary:
      "Kuzuri Kijiji — Swahili for Beautiful Village — at 19 Freeway Drive East in East Orange, mapped as a single orthomosaic. Townhouses, parking, access, and the lots around I-280 and the Garden State Parkway in one measured view. Visual mapping of the existing complex, not a certified survey and not a rendering of the redevelopment.",
    mission: "Photogrammetry / site map — Kuzuri Kijiji, East Orange",
    outputs: "Orthomosaic + DEM + coverage report",
    featured: true,
    galleryFit: "contain",
    gallery: [
      {
        src: "/media/kiji-ortho.webp",
        caption:
          "Orthomosaic of Kuzuri Kijiji, East Orange — roofs, lots, and parking of the 1973 townhouse complex and the surrounding block, 1.24 in/px GSD",
      },
      { src: "/media/kiji-dem.webp", caption: "Digital elevation model of Kuzuri Kijiji from the same mesh" },
      { src: "/media/kiji-coverage.webp", caption: "Coverage and camera stations for the July 6, 2026 Kuzuri Kijiji capture" },
    ],
    stats: [
      { label: "Site", value: "Kuzuri Kijiji · 19 Freeway Dr E, East Orange" },
      { label: "Opened", value: "1973 · 247 townhouse units on 8.2 acres" },
      { label: "Captured", value: "Jul 6, 2026" },
      { label: "Frames aligned", value: "123 / 123 (100%)" },
      { label: "Coverage", value: "99.7% of AOI" },
      { label: "Mapped area", value: "491,250 ft² (~11.3 acres, complex + surroundings)" },
      { label: "Ortho GSD", value: "1.24 in/px" },
      { label: "DEM GSD", value: "4.98 in/px" },
      { label: "Point cloud", value: "5.1 million pts · 10.5 pts/ft²" },
      { label: "Sensor", value: "DJI FC3411" },
    ],
    notes:
      "Kuzuri Kijiji opened in 1973 as a cooperative townhouse community designed by East Orange architect Edward Bowser. The name is Swahili for Beautiful Village. The original 8.2-acre, 247-unit complex sits near the I-280 / Garden State Parkway interchange. The complex has been vacant and fenced for about a decade. This July 6, 2026 dataset maps the existing buildings and the surrounding block (~11.3 acres in the AOI) — it is not a drawing of the approved redevelopment (662 apartments, 1,000+ parking spaces, ~30,000 sf commercial, PILOT adopted December 2025). Processed in DroneDeploy, standard mode, 100% oblique, camera GPS RMSE about 11 ft. Visual and relative-elevation context — not RTK survey control, and not a sealed plat.",
  },
  {
    slug: "night-plaza",
    title: "Night Parking Lot",
    category: "Night",
    image: "/media/featured-night.webp",
    summary:
      "After-dark aerial of a lit parking lot — cars in stalls, streetlights, and the surrounding neighborhood streets. Flown as a night operations still.",
    mission: "Night site context",
    outputs: "Stills",
    galleryFit: "cover",
    gallery: [{ src: "/media/featured-night.webp", caption: "Lit parking lot, cars, and neighborhood streets after dark" }],
  },
  {
    slug: "east-orange-cityscape",
    title: "Waterfront, Pier, And Marina",
    category: "Civic",
    image: "/media/hero-city.webp",
    summary:
      "Coastal aerial: a long pier, marina slips, high-rises, and open water. Scale and approach in one still — not an inland city block.",
    mission: "Civic / waterfront context",
    outputs: "Panorama stills",
    galleryFit: "cover",
    gallery: [{ src: "/media/hero-city.webp", caption: "Pier, marina, high-rises, and open water from altitude" }],
  },
  {
    slug: "commercial-plaza",
    title: "Parking Lot And Mural Wall",
    category: "Commercial",
    image: "/media/work-commercial.webp",
    summary:
      "A commercial parking lot from altitude — stalls, trees, and a building with a painted mural. Site-wide context a lease or listing packet can use.",
    mission: "Commercial site documentation",
    outputs: "Stills",
    galleryFit: "cover",
    gallery: [{ src: "/media/work-commercial.webp", caption: "Parking stalls, trees, and a mural-painted commercial building" }],
  },
  {
    slug: "civic-campus",
    title: "Civic Campus Context",
    category: "Civic",
    image: "/media/work-civic.jpg",
    summary:
      "Tree-lined grounds, walking paths, and a central building — orientation for a campus or park, not a street grid.",
    mission: "Campus / civic context",
    outputs: "Overview stills",
    galleryFit: "cover",
    gallery: [{ src: "/media/work-civic.jpg", caption: "Tree canopy, paths, and a central building from altitude" }],
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
  date: string;
  slug: string;
  blurb: string;
  items: FieldMedia[];
};

export const fieldJobs: FieldJob[] = [
  {
    id: "crossings",
    jobId: "BAM-EO-CROSSINGS-202606",
    title: "Embark + ShopRite at The Crossings",
    kicker: "Promotional media",
    date: "Jun–Jul 2026",
    slug: "brick-church-village",
    blurb:
      "Promotional aerial film of Embark apartments and the new ShopRite, plus frames from a ground hyperlapse shot from the dirt at North Munn Avenue. Same project, two kinds of motion.",
    items: [
      {
        kind: "video",
        src: "/media/neighborhood-film.mp4",
        poster: "/media/neighborhood-film.webp",
        role: "promo-aerial",
        caption:
          "Promotional aerial flyover of Embark apartments, the parking deck, and the new ShopRite at Brick Church Station — twilight",
      },
      {
        kind: "still",
        src: "/media/brick-church-village.webp",
        role: "hyperlapse-01",
        caption:
          "Hyperlapse frame from North Munn dirt: Embark, parking, dump trucks, and the ShopRite building",
      },
      {
        kind: "still",
        src: "/media/brick-church-apartments.webp",
        role: "hyperlapse-02",
        caption:
          "Hyperlapse frame: Embark apartments, dump truck, North Munn Avenue Bridge overhead",
      },
    ],
  },
  {
    id: "north-munn",
    jobId: "BAM-EO-NMUNN280-202606",
    title: "North Munn Avenue Bridge Over I-280",
    kicker: "Construction",
    date: "Jun 24–28, 2026",
    slug: "north-munn-bridge",
    blurb:
      "NJDOT deck and superstructure replacement over I-280. Aerial nadir film, ground film of crew and dump trucks, and stills of the steel span. Adjacent Embark / ShopRite media is a separate job.",
    items: [
      {
        kind: "video",
        src: "/media/overpass.mp4",
        poster: "/media/overpass.webp",
        role: "nadir-hold",
        caption: "Nadir hold over the North Munn Avenue Bridge over I-280 — steel, orange barrier, live lanes",
      },
      {
        kind: "video",
        src: "/media/jobsite-ground.mp4",
        poster: "/media/jobsite-ground.webp",
        role: "ground-film",
        caption: "Ground film: crew and dump trucks on the I-280 jobsite, Embark behind them",
      },
      {
        kind: "still",
        src: "/media/overpass-oblique.webp",
        role: "oblique",
        caption: "Dump trucks on the steel deck of the North Munn Avenue Bridge over I-280",
      },
      {
        kind: "still",
        src: "/media/overpass-approach.webp",
        role: "approach",
        caption: "Looking along the North Munn Avenue Bridge reconstruction — dump trucks and I-280 traffic",
      },
      {
        kind: "still",
        src: "/media/overpass-ground.webp",
        role: "deck-truck",
        caption: "Dump truck filling the frame on the Munn Avenue / I-280 jobsite",
      },
      {
        kind: "still",
        src: "/media/south-munn-staging.webp",
        role: "staging",
        caption: "Haul road and dump trucks in the dirt at Freeway Drive / North Munn Avenue",
      },
    ],
  },
  {
    id: "kuzuri",
    jobId: "BAM-EO-KUZURI-202607",
    title: "Kuzuri Kijiji, East Orange",
    kicker: "Mapping",
    date: "Jul 6, 2026",
    slug: "kuzuri-kijiji",
    blurb:
      "Orthomosaic, DEM, and camera-station coverage of the 1973 townhouse complex at 19 Freeway Drive East. Visual mapping of what stands now.",
    items: [
      {
        kind: "still",
        src: "/media/kiji-ortho.webp",
        role: "ortho",
        caption: "Orthomosaic of Kuzuri Kijiji — 1973 townhouses, lots, parking",
      },
      {
        kind: "still",
        src: "/media/kiji-dem.webp",
        role: "dem",
        caption: "Digital elevation model of Kuzuri Kijiji from the same mesh",
      },
      {
        kind: "still",
        src: "/media/kiji-coverage.webp",
        role: "coverage",
        caption: "Coverage and camera stations for the Kuzuri Kijiji capture",
      },
    ],
  },
  {
    id: "hainesport",
    jobId: "BAM-HAIN-BANCROFT-2023",
    title: "Hainesport Residential Listing",
    kicker: "Residential",
    date: "2023",
    slug: "bancroft-listing",
    blurb: "Listing stills of one property — house, lot, pool, neighborhood from altitude, plus a curb still of the same house.",
    items: [
      {
        kind: "still",
        src: "/media/bancroft-aerial.webp",
        role: "aerial",
        caption: "Hainesport listing from altitude — house, lot, pool, and neighborhood",
      },
      {
        kind: "still",
        src: "/media/bancroft-curb.webp",
        role: "curb",
        caption: "Street-level curb photograph of the same Hainesport listing",
      },
    ],
  },
  {
    id: "house-cut",
    jobId: "BAM-NJ-HOUSECUT",
    title: "House Under Construction",
    kicker: "Construction",
    date: "Field still",
    slug: "jobsite-cut",
    blurb: "A suburban lot in framing — excavator, stacked lumber, open foundation, neighboring houses.",
    items: [
      {
        kind: "still",
        src: "/media/jobsite.webp",
        role: "overview",
        caption: "House under construction — excavator, stacked lumber, open foundation, neighboring lots",
      },
    ],
  },
  {
    id: "envelope",
    jobId: "BAM-NJ-ENVELOPE",
    title: "Roof And Siding Close-Up",
    kicker: "Inspection",
    date: "Field still",
    slug: "envelope-close",
    blurb: "Close-range stills of a residential roof, chimney, shingles, and siding.",
    items: [
      {
        kind: "still",
        src: "/media/work-tower.webp",
        role: "roof",
        caption: "Close-range still of a residential roof, chimney, and siding",
      },
      {
        kind: "still",
        src: "/media/work-residential.webp",
        role: "siding",
        caption: "Close-range still of shingles, windows, and siding on the same house",
      },
    ],
  },
  {
    id: "ramps",
    jobId: "BAM-NJ-RAMPS-202607",
    title: "Highway Ramps And Parking Lot",
    kicker: "Civic",
    date: "Jul 9, 2026",
    slug: "rail-station",
    blurb:
      "Aerial clip of highway ramps and a large parking lot. Site is not labeled on the frame. A still of a wider cloverleaf from the same kind of capture sits with it.",
    items: [
      {
        kind: "video",
        src: "/media/highway-ramps.mp4",
        poster: "/media/rail-station.webp",
        role: "nadir-clip",
        caption: "Aerial clip: highway ramps, a large parking lot, and tree canopy from directly above",
      },
      {
        kind: "still",
        src: "/media/work-interchange.webp",
        role: "cloverleaf",
        caption: "Wider cloverleaf — highway ramps, parking lots, and suburban lots from altitude",
      },
    ],
  },
  {
    id: "fields",
    jobId: "BAM-NJ-FIELDS",
    title: "Recreation Field At Twilight",
    kicker: "Civic",
    date: "Twilight",
    slug: "recreation-field",
    blurb:
      "Sports fields at last light — a running track and a soccer pitch. Not a neighborhood listing, not Embark.",
    items: [
      {
        kind: "still",
        src: "/media/park-twilight.webp",
        role: "track",
        caption: "Recreation field with a running track, green infield, trees and houses at twilight",
      },
      {
        kind: "still",
        src: "/media/neighborhood-gold.webp",
        role: "pitch",
        caption: "Soccer pitch and parking at golden hour, tree canopy around the field",
      },
    ],
  },
  {
    id: "warehouse",
    jobId: "BAM-NJ-WAREHOUSE-202607",
    title: "Warehouse At Last Light",
    kicker: "Commercial",
    date: "Jul 9, 2026",
    slug: "warehouse-sunset",
    blurb: "A large commercial building, parking, and access at sunset. Two obliques of the same site.",
    items: [
      {
        kind: "still",
        src: "/media/warehouse-sunset.webp",
        role: "oblique-01",
        caption: "Large commercial building and parking lot at sunset",
      },
      {
        kind: "still",
        src: "/media/warehouse-lot.webp",
        role: "oblique-02",
        caption: "Second oblique of the same warehouse — lot, dock side, last light",
      },
    ],
  },
  {
    id: "night",
    jobId: "BAM-NJ-NIGHT-202607",
    title: "After-Dark Lots And Streets",
    kicker: "Night",
    date: "Jul 9, 2026",
    slug: "night-lots",
    blurb: "Illuminated parking and neighborhood streets after dark.",
    items: [
      {
        kind: "still",
        src: "/media/night-lot.webp",
        role: "lot",
        caption: "Lit parking lot, cars in stalls, and streetlights after dark",
      },
      {
        kind: "still",
        src: "/media/night-street.webp",
        role: "street",
        caption: "Neighborhood streets and a second lot after dark",
      },
      {
        kind: "still",
        src: "/media/dusk-lot.webp",
        role: "dusk",
        caption: "Parking lot at last light, before full night — cars, lamps, surrounding block",
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
    name: "Kuzuri Kijiji — 100% oblique",
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
  { key: "real-estate", title: "Sell or market a property", hint: "Listing, brokerage, development" },
  { key: "construction", title: "Document a build", hint: "Progress, stakeholders, mapping" },
  { key: "inspections", title: "Inspect an asset", hint: "Roof, facade, tower, envelope" },
  { key: "damage", title: "Document damage", hint: "Claim context, visible condition" },
  { key: "roof-solar", title: "Capture a roof or array", hint: "Solar, roofing, maintenance" },
  { key: "mapping", title: "Map a site", hint: "Orthomosaic, 3D, geometry" },
];

export const trustChecks = [
  "Airspace class, LAANC grid, and USS authorization",
  "Part 107 Waivers when the rule set does not cover the operation",
  "SGI Waivers only when the mission qualifies — including commercial work inside a National Security Event TFR with FAA coordination",
  "Local authorizations: NYPD permit for New York City, property/GC access, venues",
  "NOTAMs, TFRs, National Security Events, and airport surfaces",
  "Site access, people on the ground, and privacy",
  "Weather, lighting, VLOS, and requested deliverable boundaries",
];

export const disclaimer =
  "A submitted brief starts a feasibility review. It does not authorize a flight, confirm a date, or create a contract. Conditions and approvals can change what is operationally possible.";
