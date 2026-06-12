import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const routes = [
  "/",
  "/solutions",
  "/solutions/commande-en-ligne",
  "/solutions/gestion-stock",
  "/pourquoi-smartresto",
  "/etude-de-cas/maison-burger",
  "/deploiement",
  "/tarifs",
  "/contact",
  "/demo",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
