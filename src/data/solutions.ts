import { ShoppingCart, Boxes } from "lucide-react";
import type { Solution } from "@/types";
import { siteConfig } from "@/config/site";

export const SOLUTIONS: Solution[] = [
  {
    slug: "commande-en-ligne",
    name: "Commande en ligne",
    tagline: "Votre restaurant, ouvert 24h/24",
    description:
      "Un site de commande en ligne rapide et sans commission, conçu pour convertir vos visiteurs en clients fidèles.",
    href: "/solutions/commande-en-ligne",
    externalUrl: siteConfig.solutions.ordering,
    icon: ShoppingCart,
    features: [
      "Menu digital entièrement personnalisable",
      "Commande sur place, à emporter et livraison",
      "Paiement en ligne sécurisé",
      "Aucune commission par commande",
    ],
  },
  {
    slug: "gestion-stock",
    name: "Gestion de stock",
    tagline: "Maîtrisez vos coûts, succursale par succursale",
    description:
      "Inventaire, fournisseurs, achats et comptabilité réunis dans une seule plateforme multi-succursales.",
    href: "/solutions/gestion-stock",
    externalUrl: siteConfig.solutions.inventory,
    icon: Boxes,
    features: [
      "Inventaire en temps réel",
      "Gestion des fournisseurs et des achats",
      "Comptabilité intégrée",
      "Vue consolidée multi-succursales",
    ],
  },
];

export function getSolution(slug: string): Solution | undefined {
  return SOLUTIONS.find((s) => s.slug === slug);
}
