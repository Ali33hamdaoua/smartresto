import {
  FileSpreadsheet,
  StickyNote,
  MessageCircle,
  Bike,
  Calculator,
  Clock,
  ShieldCheck,
  Wallet,
  Eye,
  Network,
  LifeBuoy,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface IconItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

/** Section 1 — the scattered tools restaurants juggle today. */
export const SCATTERED_TOOLS: IconItem[] = [
  {
    icon: FileSpreadsheet,
    title: "Excel",
    description: "Inventaires et coûts sur des tableurs vite dépassés.",
  },
  {
    icon: StickyNote,
    title: "Papier",
    description: "Commandes et notes manuscrites, faciles à perdre.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Commandes fournisseurs dispersées dans les messages.",
  },
  {
    icon: Bike,
    title: "Plateformes de livraison",
    description: "Des commandes en ligne isolées et commissionnées.",
  },
  {
    icon: Calculator,
    title: "Outils comptables séparés",
    description: "Une comptabilité déconnectée du terrain.",
  },
];

export const SCATTERED_CONSEQUENCES = [
  "Perte de temps",
  "Erreurs de saisie",
  "Manque de visibilité",
  "Duplication du travail",
];

/** Section 6 — outcomes, not features. */
export const BENEFITS: IconItem[] = [
  {
    icon: Clock,
    title: "Gain de temps",
    description:
      "Moins de double saisie et de va-et-vient entre outils : vos équipes se concentrent sur le service.",
  },
  {
    icon: ShieldCheck,
    title: "Réduction des erreurs",
    description:
      "Des données saisies une seule fois, partagées partout — fini les écarts entre vos systèmes.",
  },
  {
    icon: Wallet,
    title: "Contrôle des coûts",
    description:
      "Achats, stocks et marges suivis au même endroit pour décider en connaissance de cause.",
  },
  {
    icon: Eye,
    title: "Meilleure visibilité",
    description:
      "Une vue claire sur vos opérations, en temps réel et sur chaque succursale.",
  },
  {
    icon: Network,
    title: "Centralisation",
    description:
      "Commandes, inventaire, fournisseurs et comptabilité réunis dans une seule plateforme.",
  },
  {
    icon: LifeBuoy,
    title: "Accompagnement personnalisé",
    description:
      "Une équipe qui configure la plateforme et vous suit, du démarrage au quotidien.",
  },
];

/** Section 5 — restaurant types (3D cards in a carousel). */
export interface RestaurantType {
  title: string;
  description: string;
  imageUrl: string;
}

const U = "?q=80&w=800&auto=format&fit=crop";

export const RESTAURANT_TYPES: RestaurantType[] = [
  {
    title: "Burger",
    description: "Service rapide, gros volumes de commandes.",
    imageUrl: `https://images.unsplash.com/photo-1568901346375-23c9450c58cd${U}`,
  },
  {
    title: "Pizza",
    description: "Sur place, à emporter et livraison.",
    imageUrl: `https://images.unsplash.com/photo-1513104890138-7c749659a591${U}`,
  },
  {
    title: "Sushi",
    description: "Menus précis et gestion fine des stocks.",
    imageUrl: `https://images.unsplash.com/photo-1579871494447-9811cf80d66c${U}`,
  },
  {
    title: "Café",
    description: "Rotation rapide et achats récurrents.",
    imageUrl: `https://images.unsplash.com/photo-1554118811-1e0d58224f24${U}`,
  },
  {
    title: "Restaurant traditionnel",
    description: "Carte riche et fournisseurs multiples.",
    imageUrl: `https://images.unsplash.com/photo-1517248135467-4c7edcad34c4${U}`,
  },
  {
    title: "Multi-succursales",
    description: "Plusieurs établissements à piloter.",
    imageUrl: `https://images.unsplash.com/photo-1552566626-52f8b828add9${U}`,
  },
  {
    title: "Franchise",
    description: "Cohérence et contrôle à grande échelle.",
    imageUrl: `https://images.unsplash.com/photo-1466978913421-dad2ebd01d17${U}`,
  },
];

/** Section 3 — comparison matrix. */
export type Support = "yes" | "partial" | "no";

export interface ComparisonRow {
  label: string;
  smartresto: Support;
  excel: Support;
  separate: Support;
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  { label: "Commandes en ligne", smartresto: "yes", excel: "no", separate: "yes" },
  { label: "Gestion inventaire", smartresto: "yes", excel: "partial", separate: "yes" },
  { label: "Fournisseurs", smartresto: "yes", excel: "partial", separate: "yes" },
  { label: "Achats", smartresto: "yes", excel: "partial", separate: "yes" },
  { label: "Comptabilité", smartresto: "yes", excel: "partial", separate: "yes" },
  { label: "Multi-succursales", smartresto: "yes", excel: "no", separate: "partial" },
  { label: "Centralisation", smartresto: "yes", excel: "no", separate: "no" },
  { label: "Support", smartresto: "yes", excel: "no", separate: "partial" },
];
