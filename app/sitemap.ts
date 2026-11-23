import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: "https://imperiaboutiquehotel.info/", lastModified, changeFrequency: "monthly", priority: 1 },
    { url: "https://imperiaboutiquehotel.info/rooms", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://imperiaboutiquehotel.info/contact", lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
