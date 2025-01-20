import { PRODUCTION_URL, routePath } from "@constants/routePath";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const foundationRoutes = Object.values(routePath.foundation).map((path) => ({
    url: `${PRODUCTION_URL}${path}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  const componentRoutes = Object.values(routePath.component).map((path) => ({
    url: `${PRODUCTION_URL}${path}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [
    {
      url: `${PRODUCTION_URL}`,
      lastModified: new Date().toISOString().split("T")[0],
    },
    {
      url: `${PRODUCTION_URL}${routePath.overview}`,
      lastModified: new Date().toISOString().split("T")[0],
    },
    ...foundationRoutes,
    ...componentRoutes,
  ];
}
