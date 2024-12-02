import { PRDOUCTION_URL, routePath } from "@constants/routePath";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const foundationRoutes = Object.values(routePath.foundation).map((path) => ({
    url: `${PRDOUCTION_URL}${path}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  const componentRoutes = Object.values(routePath.component).map((path) => ({
    url: `${PRDOUCTION_URL}${path}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [
    {
      url: `${PRDOUCTION_URL}`,
      lastModified: new Date().toISOString().split("T")[0],
    },
    {
      url: `${PRDOUCTION_URL}${routePath.overview}`,
      lastModified: new Date().toISOString().split("T")[0],
    },
    ...foundationRoutes,
    ...componentRoutes,
  ];
}
