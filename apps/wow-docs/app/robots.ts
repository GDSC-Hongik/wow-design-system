import { PRODUCTION_URL } from "@constants/routePath";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${PRODUCTION_URL}/sitemap.xml`,
    host: `${PRODUCTION_URL}`,
  };
}
