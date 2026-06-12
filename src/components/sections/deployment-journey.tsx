"use client";

import { useTranslations } from "next-intl";
import {
  ClipboardList,
  Settings,
  Database,
  Palette,
  GraduationCap,
  ClipboardCheck,
  Rocket,
} from "lucide-react";
import TimeLine_01, {
  type TimelineEntry,
} from "@/components/ui/release-time-line";

const U = "?q=80&w=1200&auto=format&fit=crop";

// Icons + images stay here; text comes from translations.
const STEP_META = [
  { icon: ClipboardList, image: `https://images.unsplash.com/photo-1517248135467-4c7edcad34c4${U}` },
  { icon: Settings, image: `https://images.unsplash.com/photo-1460925895917-afdab827c52f${U}` },
  { icon: Database, image: `https://images.unsplash.com/photo-1551288049-bebda4e38f71${U}` },
  { icon: Palette, image: `https://images.unsplash.com/photo-1552566626-52f8b828add9${U}` },
  { icon: GraduationCap, image: `https://images.unsplash.com/photo-1543269865-cbf427effbad${U}` },
  { icon: ClipboardCheck, image: `https://images.unsplash.com/photo-1559339352-11d035aa65de${U}` },
  { icon: Rocket, image: `https://images.unsplash.com/photo-1466978913421-dad2ebd01d17${U}` },
];

export function DeploymentJourney() {
  const t = useTranslations("deployment");
  const steps = t.raw("steps") as {
    title: string;
    subtitle: string;
    description: string;
    items: string[];
  }[];

  const entries: TimelineEntry[] = steps.map((s, i) => ({
    icon: STEP_META[i].icon,
    title: s.title,
    subtitle: s.subtitle,
    description: s.description,
    items: s.items,
    image: STEP_META[i].image,
  }));

  return <TimeLine_01 entries={entries} />;
}
