import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: "https://www.imperiaboutiquehotel.info/", lastModified, changeFrequency: "monthly", priority: 1 },
    { url: "https://www.imperiaboutiquehotel.info/rooms", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://www.imperiaboutiquehotel.info/contact", lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
