import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.imperiaboutiquehotel.info/",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
