import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const BASE_URL =
    process.env.NEXT_PUBLIC_BASE_URL || "https://techinika.co.rw";

  return {
    rules: [
      {
        userAgent: "*", // Applies to all web crawlers
        allow: "/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`, // Correctly points to your sitemap
  };
}
