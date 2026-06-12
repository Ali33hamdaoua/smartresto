import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface BuildMetadataParams {
  title: string;
  description?: string;
  path?: string;
}

/**
 * Per-page metadata helper. Keeps title/description/canonical/OpenGraph
 * consistent across every route. Pass an absolute `path` like "/tarifs".
 */
export function buildMetadata({
  title,
  description,
  path = "/",
}: BuildMetadataParams): Metadata {
  const url = `${siteConfig.url}${path}`;
  const desc = description ?? siteConfig.description;

  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} · ${siteConfig.name}`,
      description: desc,
      url,
      siteName: siteConfig.name,
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
    },
  };
}
