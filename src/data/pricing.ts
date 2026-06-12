export interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: { label: string; href: string };
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Commande en ligne",
    price: "Sur devis",
    description: "Pour les restaurants qui veulent vendre en ligne sans commission.",
    features: [
      "Site de commande personnalisé",
      "Sur place, à emporter et livraison",
      "Paiement en ligne sécurisé",
      "Aucune commission par commande",
    ],
    cta: { label: "Demander une démo", href: "/demo" },
  },
  {
    name: "Suite complète",
    price: "Sur devis",
    description: "Commande en ligne + gestion de stock multi-succursales.",
    features: [
      "Tout de la commande en ligne",
      "Inventaire en temps réel",
      "Fournisseurs, achats et comptabilité",
      "Vue consolidée multi-succursales",
      "Accompagnement prioritaire",
    ],
    highlighted: true,
    cta: { label: "Demander une démo", href: "/demo" },
  },
  {
    name: "Gestion de stock",
    price: "Sur devis",
    description: "Pour piloter inventaire, achats et comptabilité.",
    features: [
      "Inventaire en temps réel",
      "Gestion des fournisseurs et achats",
      "Comptabilité intégrée",
      "Vue multi-succursales",
    ],
    cta: { label: "Demander une démo", href: "/demo" },
  },
];
