const ORIGIN = "https://baronaerial.com";
export function seo({ title, description, path, image = "/brand/social-card.jpg", type = "website" }: { title: string; description: string; path: string; image?: string; type?: string }) {
  const url = new URL(path, ORIGIN).href;
  return { meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:url", content: url }, { property: "og:type", content: type }, { property: "og:image", content: new URL(image, ORIGIN).href }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: url }] };
}
export const businessSchema = { "@context": "https://schema.org", "@type": "ProfessionalService", name: "Baron Aerial Media", url: ORIGIN, image: ORIGIN + "/brand/social-card.jpg", description: "Aerial imaging, visual documentation and photogrammetry in North Jersey.", areaServed: ["North Jersey", "New York metropolitan area"] };
