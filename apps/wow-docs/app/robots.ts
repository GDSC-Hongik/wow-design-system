import { PRDOUCTION_URL } from "@constants/routePath";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${PRDOUCTION_URL}/sitemap.xml`,
    host: `${PRDOUCTION_URL}`,
  };
}
