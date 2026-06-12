import {
  ShoppingBag,
  Boxes,
  Truck,
  Receipt,
  Building2,
  Home,
  UtensilsCrossed,
  ShoppingCart,
  LayoutDashboard,
  Calculator,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface CsItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface CsScreen {
  icon: LucideIcon;
  label: string;
  image: string;
}

export interface CsModule {
  icon: LucideIcon;
  label: string;
  /** Position on the ecosystem diagram (percentages of a square). */
  cx: number;
  cy: number;
}

export const CHALLENGES: CsItem[] = [
  {
    icon: ShoppingBag,
    title: "Gestion des commandes",
    description:
      "Des commandes éparpillées entre le téléphone, les places de marché et le comptoir, sans vue unifiée.",
  },
  {
    icon: Boxes,
    title: "Suivi des stocks",
    description:
      "Un inventaire géré sur tableurs, difficile à tenir à jour d'une succursale à l'autre.",
  },
  {
    icon: Truck,
    title: "Gestion fournisseurs",
    description:
      "Des fournisseurs et des commandes d'achat suivis manuellement, source d'erreurs et d'oublis.",
  },
  {
    icon: Receipt,
    title: "Contrôle des achats",
    description:
      "Peu de visibilité sur les coûts d'achat réels et leur impact sur les marges.",
  },
  {
    icon: Building2,
    title: "Multi-succursales",
    description:
      "Aucune vision consolidée des opérations sur l'ensemble des établissements.",
  },
];

export const ORDERING: { screens: CsScreen[]; features: string[] } = {
  screens: [
    { icon: Home, label: "Page d'accueil", image: "/restauration/accueil.png" },
    { icon: UtensilsCrossed, label: "Menu", image: "/restauration/menu.png" },
    { icon: ShoppingCart, label: "Panier", image: "/restauration/panier.png" },
  ],
  features: [
    "Livraison",
    "Ramassage",
    "Paiement en ligne sécurisé",
    "Gestion du menu",
    "Expérience responsive mobile",
    "Gestion des commandes",
  ],
};

export const OPERATIONS: { screens: CsScreen[]; features: string[] } = {
  screens: [
    { icon: LayoutDashboard, label: "Tableau de bord", image: "/inventaire/dashboard.png" },
    { icon: Boxes, label: "Inventaire", image: "/inventaire/inventaire.png" },
    { icon: Truck, label: "Fournisseurs", image: "/inventaire/fournisseur.png" },
    { icon: Receipt, label: "Achats", image: "/inventaire/achats.png" },
    { icon: Calculator, label: "Comptabilité", image: "/inventaire/comptabilite.png" },
    { icon: Building2, label: "Succursales", image: "/inventaire/succursales.png" },
  ],
  features: [
    "Inventaire centralisé",
    "Gestion des fournisseurs",
    "Gestion des achats",
    "Comptabilité intégrée",
    "Historique complet",
    "Gestion multi-succursales",
  ],
};

export const MODULES: CsModule[] = [
  { icon: ShoppingBag, label: "Commandes", cx: 50, cy: 12 },
  { icon: Boxes, label: "Inventaire", cx: 82.9, cy: 31 },
  { icon: Truck, label: "Fournisseurs", cx: 82.9, cy: 69 },
  { icon: Receipt, label: "Achats", cx: 50, cy: 88 },
  { icon: Calculator, label: "Comptabilité", cx: 17.1, cy: 69 },
  { icon: Building2, label: "Succursales", cx: 17.1, cy: 31 },
];

export const RESULTS: CsItem[] = [
  {
    icon: ShoppingBag,
    title: "Commandes centralisées",
    description:
      "Toutes les commandes, en ligne et sur place, réunies au même endroit.",
  },
  {
    icon: Boxes,
    title: "Inventaire unifié",
    description:
      "Un stock suivi en temps réel, cohérent sur toutes les succursales.",
  },
  {
    icon: Truck,
    title: "Fournisseurs gérés",
    description:
      "Fournisseurs, achats et factures centralisés et traçables.",
  },
  {
    icon: Building2,
    title: "Multi-succursales connectées",
    description:
      "Une vue consolidée pour piloter chaque établissement.",
  },
];
