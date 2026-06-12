import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import {
  Hero,
  ProductShowcase,
  Problem,
  SolutionsOverview,
  CaseStudyPreview,
  FeaturesGrid,
  WhySmartResto,
  Cta,
  Faq,
} from "@/components/sections";

export const metadata: Metadata = buildMetadata({
  title: "Solutions technologiques pour restaurants",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <Problem />
      <SolutionsOverview />
      <CaseStudyPreview />
      <FeaturesGrid />
      <WhySmartResto />
      <Cta />
      <Faq />
    </>
  );
}
