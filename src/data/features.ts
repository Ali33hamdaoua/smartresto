import {
  ShoppingCart,
  Boxes,
  Receipt,
  Building2,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import type { Feature } from "@/types";

export const FEATURES: Feature[] = [
  {
    icon: ShoppingCart,
    title: "Commande en ligne",
    description:
      "Site de commande rapide, sans commission, prêt pour la livraison et l’emporter.",
  },
  {
    icon: Boxes,
    title: "Gestion d’inventaire",
    description:
      "Suivez vos stocks en temps réel et évitez les ruptures coûteuses.",
  },
  {
    icon: Receipt,
    title: "Achats & fournisseurs",
    description:
      "Centralisez vos commandes fournisseurs et vos factures en un seul endroit.",
  },
  {
    icon: Building2,
    title: "Multi-succursales",
    description:
      "Pilotez plusieurs établissements depuis un tableau de bord unique.",
  },
  {
    icon: TrendingUp,
    title: "Comptabilité",
    description:
      "Suivez vos marges et votre rentabilité sans tableur ni saisie manuelle.",
  },
  {
    icon: ShieldCheck,
    title: "Fiable & sécurisé",
    description:
      "Une infrastructure fiable et sécurisée, pensée pour la restauration.",
  },
];
